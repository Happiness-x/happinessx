import crypto from 'crypto';

// Simple signed URL generator (serverless)
// Query: /api/sign?path=/images/foo.jpg&expires=3600
export default function handler(req, res) {
  const secret = process.env.SIGNED_URL_SECRET || 'dev-secret-change-me';
  const pathname = req.query.path || req.url && new URL(req.url, 'http://localhost').searchParams.get('path');
  const expiresSec = parseInt(req.query.expires || '3600', 10);
  if (!pathname) return res.status(400).json({ error: 'path required' });
  const expires = Math.floor(Date.now() / 1000) + expiresSec;
  const payload = `${pathname}:${expires}`;
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  const url = `${pathname}?expires=${expires}&sig=${sig}`;
  return res.status(200).json({ url });
}
