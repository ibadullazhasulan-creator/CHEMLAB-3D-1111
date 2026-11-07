/* CHEMLAB-3D баптаулары / настройки
   Сайтты claude.ai-дан тыс жерде (Netlify, GitHub Pages т.б.) жарияласаңыз,
   AI көмекші Google Gemini арқылы жұмыс істейді.
   1) https://aistudio.google.com/apikey бетінен тегін кілт алыңыз.
   2) Кілтті төмендегі тырнақшаның ішіне қойыңыз.
   3) Google Cloud Console → Credentials → API key → «Website restrictions» бөлімінде
      тек өз сайтыңыздың мекенжайын рұқсат етіңіз (кілтті бөтен адам қолдана алмайды).
   Кілт бос болса — AI көмекші офлайн режимде платформа материалынан іздеп жауап береді. */
window.CHEMLAB_CONFIG = {
  geminiKey: "AQ.Ab8RN6Jb6IkV8fhWJQL8gY9bOMvZ3yPnYlVqSIN4xDblI9omMQ",              // мысалы / например: "AIzaSy..."
  geminiModel: "gemini-2.5-flash"
};
