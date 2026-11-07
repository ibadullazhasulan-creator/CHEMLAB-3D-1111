// CHEMLAB-3D — Gemini прокси (Vercel Serverless Function)
// Кілт осы файлда ЖАЗЫЛМАЙДЫ. Оны Vercel → Settings → Environment Variables
// бөліміне GEMINI_API_KEY деген атпен қосыңыз.
const MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.0-flash'];

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: { message: 'POST only' } });
  const key = process.env.GEMINI_API_KEY || process.env.GEMINI_API_KE ||
    (Object.keys(process.env).filter(k => k.startsWith('GEMINI')).map(k => process.env[k]).find(v => v && v.length > 20) || '');
  if (!key) return res.status(503).json({ error: { message: 'Vercel-де GEMINI_API_KEY орнатылмаған / GEMINI_API_KEY is not set' } });

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
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: JSON.stringify(payload)
      });
      if (r.status === 404) continue;
      const j = await r.json().catch(() => ({}));
      return res.status(r.status).json(j);
    } catch (e) {
      return res.status(502).json({ error: { message: 'Gemini: ' + e.message } });
    }
  }
  return res.status(502).json({ error: { message: 'Gemini model not found' } });
};
