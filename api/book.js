import fetch from 'node-fetch';
import { Redis } from '@upstash/redis';
import fs from 'fs';
import path from 'path';

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN })
  : null;

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret || !token) return false;
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
  });
  const json = await res.json();
  return json.success;
}

const RATE_LIMIT_MAX = 20; // per window per ip
const RATE_LIMIT_WINDOW_SEC = 60 * 60; // 1 hour

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const contentType = req.headers['content-type'] || '';
  let body = req.body || {};
  if (!body || Object.keys(body).length === 0) {
    if (contentType.includes('application/json')) body = JSON.parse(req.rawBody || '{}');
    else if (contentType.includes('application/x-www-form-urlencoded')) body = Object.fromEntries(new URLSearchParams(req.rawBody || ''));
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

  // Persistent rate limiting via Upstash Redis (if configured)
  try {
    if (redis) {
      const key = `rate:${ip}`;
      const count = await redis.incr(key);
      if (count === 1) await redis.expire(key, RATE_LIMIT_WINDOW_SEC);
      if (count > RATE_LIMIT_MAX) return res.status(429).json({ error: 'Too many requests' });
    }
  } catch (err) {
    console.warn('Redis error', err.message || err);
  }

  const { name, email, phone, preferred_date, message, consent, hp, screening_mental_health, screening_medication, recaptcha_token } = body;

  if (hp) return res.status(400).json({ error: 'Bad request' });
  if (!(consent === 'on' || consent === 'true' || consent === true)) return res.status(400).json({ error: 'Consent required' });
  if (!name || !email) return res.status(400).json({ error: 'Missing name or email' });
  if (!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email' });

  // Verify reCAPTCHA if token present
  if (process.env.RECAPTCHA_SECRET) {
    const ok = await verifyRecaptcha(recaptcha_token);
    if (!ok) return res.status(400).json({ error: 'reCAPTCHA validation failed' });
  }

  // Prepare email texts
  const adminText = `New booking:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\nPreferred: ${preferred_date || ''}\nMH care: ${screening_mental_health || 'no'}\nMeds: ${screening_medication || 'no'}\nMessage:\n${message || ''}`;

  // Send emails via SendGrid
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_FROM = process.env.SENDGRID_FROM || 'no-reply@happinessx.in';
  const SENDGRID_TO = process.env.SENDGRID_TO || SENDGRID_FROM;

  if (SENDGRID_API_KEY) {
    // Admin notification (plain)
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: { Authorization: `Bearer ${SENDGRID_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: SENDGRID_TO }], subject: `Booking from ${name}` }],
        from: { email: SENDGRID_FROM },
        content: [{ type: 'text/plain', value: adminText }],
      }),
    });

    // Client confirmation (HTML template)
    try {
      const templatePath = path.resolve('./templates/confirmation-email.html');
      let html = fs.readFileSync(templatePath, 'utf8');
      html = html.replace('{{name}}', name).replace('{{preferred_date}}', preferred_date || 'TBD');

      await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: { Authorization: `Bearer ${SENDGRID_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email }], subject: 'Your Happiness X session request' }],
          from: { email: SENDGRID_FROM },
          content: [{ type: 'text/html', value: html }],
        }),
      });
    } catch (err) {
      console.warn('SendGrid client email failed', err.message || err);
    }
  }

  // Forward to Formspree if configured
  if (process.env.FORMSPREE_ACTION) {
    const form = new URLSearchParams();
    form.append('name', name);
    form.append('email', email);
    form.append('phone', phone || '');
    form.append('preferred_date', preferred_date || '');
    form.append('message', message || '');
    form.append('screening_mental_health', screening_mental_health || 'no');
    form.append('screening_medication', screening_medication || 'no');
    await fetch(process.env.FORMSPREE_ACTION, { method: 'POST', body: form });
  }

  return res.status(200).json({ ok: true, message: 'Booking received' });
}
