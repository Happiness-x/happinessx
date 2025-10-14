import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function verify(pathname, expires, sig) {
  const secret = process.env.SIGNED_URL_SECRET || 'dev-secret-change-me';
  const payload = `${pathname}:${expires}`;
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return expected === sig && parseInt(expires, 10) > Math.floor(Date.now() / 1000);
}

export default function handler(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const pathname = url.searchParams.get('path');
  const expires = url.searchParams.get('expires');
  const sig = url.searchParams.get('sig');
  if (!pathname || !expires || !sig) return res.status(400).json({ error: 'missing signature' });
  if (!verify(pathname, expires, sig)) return res.status(403).json({ error: 'invalid or expired signature' });

  // Look in public-watermarked first, then public
  const candidates = [path.join('public-watermarked', pathname.replace(/^\//, '')), path.join('public', pathname.replace(/^\//, ''))];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      const ext = path.extname(p).toLowerCase();
      const mime = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'application/octet-stream';
      const data = fs.readFileSync(p);
      res.setHeader('Content-Type', mime);
      return res.status(200).end(data);
    }
  }

  return res.status(404).json({ error: 'not found' });
}
