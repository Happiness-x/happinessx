import fs from 'fs';
import handler from '../api/book.js';

function makeReq(body) {
  return {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body,
    rawBody: JSON.stringify(body),
    socket: { remoteAddress: '127.0.0.1' },
    headersSent: false
  };
}

function makeRes(){
  const res = {};
  res.statusCode = 200;
  res.headers = {};
  res.setHeader = (k,v)=>res.headers[k]=v;
  res.status = (code)=>{ res.statusCode = code; return res; };
  res.json = (obj)=>{ console.log('RES JSON', obj); return obj; };
  res.end = (data)=>{ console.log('RES END', data && data.toString ? data.toString() : data); };
  return res;
}

async function run(){
  const req = makeReq({ name: 'Local Test', email: 'local@example.com', consent: true });
  const res = makeRes();
  try{
    await handler(req, res);
    console.log('Handler executed');
  }catch(err){
    console.error('Handler error', err);
  }
}

run();
