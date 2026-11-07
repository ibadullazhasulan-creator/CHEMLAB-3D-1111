// CHEMLAB-3D - Gemini proxy (Vercel Serverless Function), version 4
// Key is NOT in this file: Vercel -> Settings -> Environment Variables -> GEMINI_API_KEY
const MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.0-flash'];

function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise(function (resolve) {
    if (req.body !== undefined && req.body !== null) {
      if (typeof req.body === 'string') { try { return resolve(JSON.parse(req.body)); } catch (e) { return resolve({}); } }
      if (Buffer.isBuffer(req.body)) { try { return resolve(JSON.parse(req.body.toString('utf8'))); } catch (e) { return resolve({}); } }
      return resolve(req.body);
    }
    let d = '';
    req.on('data', function (c) { d += c; });
    req.on('end', function () { try { resolve(JSON.parse(d || '{}')); } catch (e) { resolve({}); } });
    req.on('error', function () { resolve({}); });
  });
}

module.exports = async function (req, res) {
  try {
    const env = process.env || {};
    const names = Object.keys(env).filter(function (k) { return k.indexOf('GEMINI') === 0; });
    let key = env.GEMINI_API_KEY || env.GEMINI_API_KE || '';
    if (!key) { for (const n of names) { if (env[n] && String(env[n]).length > 20) { key = env[n]; break; } } }
    key = String(key || '').replace(/["'\s]/g, '');

    if (req.method === 'GET') {
      return send(res, 200, { ok: true, version: 4, vars: names, length: key.length, start: key.slice(0, 6), end: key.slice(-4) });
    }
    if (req.method !== 'POST') return send(res, 405, { error: { message: 'POST only' } });
    if (!key) return send(res, 503, { error: { message: 'GEMINI_API_KEY is not set in Vercel' } });

    const b = (await readBody(req)) || {};
    const contents = Array.isArray(b.contents) ? b.contents.slice(-12) : [];
    if (!contents.length) return send(res, 400, { error: { message: 'Empty question' } });
    const payload = {
      systemInstruction: b.systemInstruction,
      contents: contents,
      generationConfig: { temperature: 0.4, maxOutputTokens: 2048 }
    };

    for (const m of MODELS) {
      const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent?key=' + encodeURIComponent(key);
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (r.status === 404) continue;
      let j = {};
      try { j = await r.json(); } catch (e) { j = { error: { message: 'Bad response from Gemini (' + r.status + ')' } }; }
      return send(res, r.status, j);
    }
    return send(res, 502, { error: { message: 'Gemini model not found' } });
  } catch (e) {
    return send(res, 500, { error: { message: 'Server: ' + (e && e.message ? e.message : String(e)) } });
  }
};
