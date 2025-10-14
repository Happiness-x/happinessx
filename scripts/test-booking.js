import fetch from 'node-fetch';

async function run(){
  const url = process.env.BOOKING_URL || 'http://localhost:3000/api/book';
  const payload = { name: 'Test User', email: 'test@example.com', consent: true };
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(payload) });
  const json = await res.json().catch(()=>null);
  console.log('Status', res.status, json);
}

run().catch(err=>{ console.error(err); process.exit(1); });
