// CHEMLAB-3D — Gemini прокси (Vercel Serverless Function), 3-нұсқа
// Кілт осы файлда ЖАЗЫЛМАЙДЫ: Vercel → Settings → Environment Variables → GEMINI_API_KEY
const MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.0-flash'];

module.exports = async (req, res) => {
  let key = process.env.GEMINI_API_KEY || process.env.GEMINI_API_KE ||
    (Object.keys(process.env).filter(k => k.startsWith('GEMINI')).map(k => process.env[k]).find(v => v && v.length > 20) || '');
    key = String(key).replace(/["'\s]/g, '');
  if (!key) return res.status(503).json({ error: { message: 'Vercel-де GEMINI_API_KEY орнатылмаған / GEMINI_API_KEY is not set' } });

  // Тексеру: браузерде /api/gemini ашсаңыз, кілттің ұзындығы, басы мен соңы ғана көрінеді
  if (req.method === 'GET') {
    const names = Object.keys(process.env).filter(k => k.startsWith('GEMINI'));
    return res.status(200).json({ ok: true, version: 3, vars: names, length: key.length, start: key.slice(0, 6), end: key.slice(-4) });
  }
  if (req.method !== 'POST') return res.status(405).json({ error: { message: 'POST only' } });

  // Тек өз сайтымыздан келген сұрауларды қабылдаймыз
  const host = req.headers.host || '';
  const from = req.headers.origin || req.headers.referer || '';
  if (from && !from.includes(host)) return res.status(403).json({ error: { message: 'Forbidden' } });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};
  const contents = Array.isArray(b.contents) ? b.contents.slice(-12) : [];
  if (!contents.length) return res.status(400).json({ error: { message: 'Empty question' } });
  const payload = {
    systemInstruction: b.systemInstruction,
    contents,
    generationConfig: { temperature: 0.4, maxOutputTokens: 2048 }
  };
  if (JSON.stringify(payload).length > 60000) return res.status(413).json({ error: { message: 'Too long' } });

  for (const m of MODELS) {
    try {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent?key=' + encodeURIComponent(key), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (r.status === 404) continue;
      const j = await r.json().catch(() => ({}));
      return res.status(r.status).json(j);
    } catch
