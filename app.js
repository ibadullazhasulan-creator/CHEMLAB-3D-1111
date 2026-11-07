/* CHEMLAB-3D — бейорганикалық химия виртуалды зертханасы */
(function(){'use strict';
const $=id=>document.getElementById(id);
let LANG='kk';try{LANG=localStorage.getItem('cl3d_lang')||'kk'}catch(e){}
const tr=x=>x==null?'':(Array.isArray(x)?(LANG==='kk'?x[0]:(x[1]!=null?x[1]:x[0])):String(x));
const U={
 sub:['Бейорганикалық химия · 3D виртуалды зертхана','Неорганическая химия · 3D виртуальная лаборатория'],
 pw:['Құпия сөз','Пароль'],enter:['Кіру','Войти'],wrong:['Құпия сөз қате','Неверный пароль'],
 read:['ОҚУ','ЧТЕНИЕ'],readS:['Лекция · практика','Лекция · практика'],lab:['ЗЕРТХАНА','ЛАБОРАТОРИЯ'],game:['ОЙЫН','ИГРЫ'],gameS:['4 ойын түрі','4 вида игр'],
 week:['-апта',' неделя'],exps:['тәжірибе','опыта'],
 board1:['БЕЙОРГАНИКАЛЫҚ ХИМИЯ','НЕОРГАНИЧЕСКАЯ ХИМИЯ'],board2:['Оқы · Зертханада тексер · Ойнап бекіт','Читай · Проверь в лаборатории · Закрепи в игре'],
 tLec:['📚 Лекция','📚 Лекция'],tPos:['🖼 Инфографика','🖼 Инфографика'],t3d:['🧬 3D модельдер','🧬 3D модели'],tPr:['🔬 Практика','🔬 Практика'],
 elcards:['Элементтер карточкасы','Карточки элементов'],trends:['Заңдылықтар','Закономерности'],
 cfg:['Электрондық конфигурация','Электронная конфигурация'],ox:['Тотығу дәрежесі','Степени окисления'],en:['ЭТ','ЭО'],
 drag3d:['Модельді сүйреп айналдырыңыз · екі саусақпен үлкейтіңіз','Вращайте модель перетаскиванием · масштаб двумя пальцами'],
 mechT:['Реакция механизмі','Механизм реакции'],
 gTest:['Тест · 15 сұрақ','Тест · 15 вопросов'],gTestS:['Әр сұраққа бір дұрыс жауап','Один верный ответ на вопрос'],
 gMatch:['Сәйкестендіру','Сопоставление'],gMatchS:['Жұптарды табыңыз','Найдите пары'],
 gCells:['Ұяшықтар','Ячейки'],gCellsS:['Теңдеудегі бос ұяшықтарды толтырыңыз','Заполните пустые ячейки уравнений'],
 gProb:['Есептер','Задачи'],gProbS:['Тақырыпқа байланысты есептер','Расчётные задачи по теме'],
 best:['Үздік','Лучший'],q:['Сұрақ','Вопрос'],next:['Келесі →','Далее →'],finish:['Нәтижені көру','Показать результат'],
 res:['Нәтиже','Результат'],again:['↻ Қайта ойнау','↻ Играть снова'],back:['← Ойындарға','← К играм'],
 check:['Тексеру','Проверить'],answer:['Жауабыңыз','Ваш ответ'],solution:['Шешуі','Решение'],correct:['✅ Дұрыс!','✅ Верно!'],incorrect:['❌ Қате.','❌ Неверно.'],
 rightAns:['Дұрыс жауап','Верный ответ'],mistakes:['Қате','Ошибок'],matched:['Барлық жұп табылды!','Все пары найдены!'],
 tapTile:['Тақтайшаны басып, бос ұяшыққа орналастырыңыз','Нажмите на плитку, чтобы вставить в пустую ячейку'],clear:['Тазалау','Очистить'],
 exStart:['Тәжірибені бастау','Начать опыт'],reag:['Реактивтер','Реактивы'],goal:['Мақсаты','Цель'],
 step:['Қадам','Шаг'],exp:['Тәжірибе','Опыт'],
 help:['↔ Ыдысты сүйреп апарыңыз немесе алдымен оны, сосын мақсатты ыдысты басыңыз · 🔄 бос жерді сүйреп 360° айналыңыз','↔ Перетащите сосуд или нажмите его, затем цель · 🔄 тяните фон для обзора 360°'],
 center:['🎯 Үстелге','🎯 К столу'],logB:['📋 Журнал','📋 Журнал'],obs:['БАҚЫЛАУ ЖУРНАЛЫ','ЖУРНАЛ НАБЛЮДЕНИЙ'],
 done:['Тәжірибе аяқталды!','Опыт завершён!'],eqs:['Реакция теңдеулері','Уравнения реакций'],toQuiz:['Тест тапсыру (кері байланыс) →','Пройти тест (обратная связь) →'],
 fb:['Кері байланыс тесті','Тест обратной связи'],nextEx:['Келесі тәжірибе →','Следующий опыт →'],toHome:['← Басты бет','← На главную'],redo:['↻ Қайталау','↻ Повторить'],
 wrongV:['Бұл қадамда басқа ыдыс керек 👆','На этом шаге нужен другой сосуд 👆'],wrongS:['Нұсқауды оқыңыз: алдымен белгіленген ыдысты алыңыз','Прочтите инструкцию: сначала возьмите отмеченный сосуд'],
 selected:['таңдалды → енді мақсатты ыдысты басыңыз','выбран → теперь нажмите на цель'],
 enterLab:['Зертханаға кіріңіз','Войдите в лабораторию'],labIntro:['тәжірибе. 360° айналып қараңыз, ыдыстарды сүйреп қозғалтыңыз, реакция нәтижесін бақылаңыз. Әр тәжірибеден кейін — тест.','опыта. Осматривайтесь на 360°, перемещайте сосуды, наблюдайте результаты реакций. После каждого опыта — тест.'],
 go:['Кіру →','Войти →'],
 aiT:['AI көмекші','AI помощник'],aiS:['Платформадағы материал бойынша жауап береді','Отвечает по материалам платформы'],aiPh:['Сұрағыңызды жазыңыз…','Напишите вопрос…'],
 aiHi:['Сәлем! Мен CHEMLAB-3D көмекшісімін. Лекция, практика, зертхана немесе есептер бойынша түсінбеген жеріңізді сұраңыз.','Здравствуйте! Я помощник CHEMLAB-3D. Спрашивайте, что непонятно по лекциям, практике, лабораторным или задачам.'],
 aiNo:['AI көмекші бұл көріністе қолжетімсіз. Сайтты claude.ai арқылы ашып көріңіз.','AI помощник недоступен в этом режиме. Откройте сайт через claude.ai.'],
 aiErr:['Қате шықты, кейінірек қайталап көріңіз.','Произошла ошибка, попробуйте позже.'],aiWait:['Ойланып жатырмын…','Думаю…'],
 aiS1:['Бұл тақырыпты қысқаша түсіндірші','Объясни кратко эту тему'],aiS2:['Тотығу-тотықсыздану теңдеуін қалай теңестіреміз?','Как уравнять ОВР?'],aiS3:['Есепті шешуге көмектес','Помоги решить задачу'],
 rot:['Жақсырақ көру үшін телефонды көлденең бұрыңыз','Поверните телефон горизонтально'],
 exit:['Шығу','Выход']
};
const t=k=>tr(U[k]);
function applyStatic(){document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));
 document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===LANG));document.documentElement.lang=LANG==='kk'?'kk':'ru';}
const TOP=window.TOPICS.slice().sort((a,b)=>a.n-b.n);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

/* ---------- ПРОГРЕСС ---------- */
let PR={read:{},lab:{},game:{}};try{const s=JSON.parse(localStorage.getItem('cl3d_pr')||'null');if(s&&s.read)PR=s}catch(e){}
function savePR(){try{localStorage.setItem('cl3d_pr',JSON.stringify(PR))}catch(e){}}
function topicPct(i){const T=TOP[i];let tot=1+(T.labs||[]).length+4,d=0;if(PR.read[T.n])d++;d+=((PR.lab[T.n]||[]).filter(x=>x!=null).length);const g=PR.game[T.n]||{};['test','match','cells','prob'].forEach(k=>{if(g[k]!=null)d++});return Math.round(d/tot*100);}

/* ---------- ДЫБЫС ---------- */
let soundOn=true,AC=null;
function beep(type){return;if(!soundOn)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();
 const seq={ok:[[660,.08],[880,.12]],bad:[[260,.14]],pop:[[520,.05]],win:[[523,.1],[659,.1],[784,.1],[1046,.2]],bang:[[120,.12],[80,.1]],fizz:[[1800,.04],[1500,.04],[1900,.04]]}[type]||[[440,.05]];
 let tt=AC.currentTime;seq.forEach(([f,d])=>{const o=AC.createOscillator(),g=AC.createGain();o.type=type==='bang'?'sawtooth':'sine';o.frequency.value=f;g.gain.setValueAtTime(.12,tt);g.gain.exponentialRampToValueAtTime(.001,tt+d+.05);o.connect(g);g.connect(AC.destination);o.start(tt);o.stop(tt+d+.06);tt+=d;});}catch(e){}}

/* ---------- ДЫБЫС: тәжірибе дыбыстары (WebAudio) + дауыстап оқу (speechSynthesis) ---------- */
let voiceOn=true;try{voiceOn=localStorage.getItem('cl3d_voice')!=='0'}catch(e){}
function actx(){AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();return AC;}
let NOISE=null;function noiseBuf(a){if(NOISE)return NOISE;const n=a.sampleRate*2;NOISE=a.createBuffer(1,n,a.sampleRate);const d=NOISE.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;return NOISE;}
function nz(a,t,dur,type,freq,q,gain,attack){const s=a.createBufferSource();s.buffer=noiseBuf(a);s.loop=true;const f=a.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q||1;const g=a.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+(attack||.05));g.gain.setValueAtTime(gain,t+Math.max(.06,dur-.15));g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(g);g.connect(a.destination);s.start(t);s.stop(t+dur+.05);return f;}
function tone(a,t,f0,f1,dur,gain,type){const o=a.createOscillator(),g=a.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+dur);g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+dur+.02);}
function sfx(type,dur){if(!soundOn)return;try{const a=actx(),t=a.currentTime;dur=dur||1;
 if(type==='clink'){tone(a,t,2600,2500,.18,.05);tone(a,t,3900,3800,.12,.03);}
 else if(type==='pour'){const f=nz(a,t,dur,'bandpass',700,.9,.12,.12);f.frequency.setValueAtTime(600,t);f.frequency.linearRampToValueAtTime(1100,t+dur);nz(a,t,dur,'lowpass',300,.7,.05,.1);}
 else if(type==='drip'){tone(a,t,1500,380,.09,.12);}
 else if(type==='bubble'){const n=Math.round(dur*14);for(let i=0;i<n;i++){const st=t+Math.random()*dur;const f=300+Math.random()*700;tone(a,st,f,f*1.9,.05+Math.random()*.04,.035+Math.random()*.03);}nz(a,t,dur,'highpass',3000,.5,.012,.2);}
 else if(type==='fizz'){nz(a,t,dur,'highpass',4500,.6,.05,.1);}
 else if(type==='flame'){nz(a,t,dur,'lowpass',420,.8,.11,.15);nz(a,t,dur,'bandpass',1200,.5,.02,.2);}
 else if(type==='rattle'){for(let i=0;i<9;i++)nz(a,t+i*.05+Math.random()*.03,.05,'bandpass',2500+Math.random()*2000,2,.08,.005);}
 else if(type==='pop'){nz(a,t,.25,'lowpass',900,.7,.35,.005);tone(a,t,180,60,.25,.25,'triangle');}
 }catch(e){}}
let VOICES=[];function loadVoices(){try{VOICES=speechSynthesis.getVoices()||[]}catch(e){}}
if(window.speechSynthesis){loadVoices();try{speechSynthesis.onvoiceschanged=loadVoices}catch(e){}}
function pickVoice(){const by=p=>VOICES.find(v=>v.lang&&v.lang.toLowerCase().replace('_','-').startsWith(p));if(LANG==='kk')return by('kk')||null;return by('ru')||null;}
let kkWarned=false;
function speechText(s){let x=String(s||'').replace(/<[^>]+>/g,' ').replace(/&[a-z]+;/g,' ');
 const sub={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':' плюс','⁻':' минус'};x=x.replace(/[₀-₉⁰-⁹⁺⁻]/g,c=>sub[c]||c);
 x=x.replace(/→/g,LANG==='kk'?', ':', ').replace(/[↑↓↔🔄👁✋🎉]/g,' ').replace(/№/g,LANG==='kk'?'нөмір ':'номер ').replace(/\s+/g,' ').trim();return x;}
function speak(s){return;if(!voiceOn||!soundOn||!window.speechSynthesis||mode!=='lab')return;try{if(!VOICES.length)loadVoices();let x=speechText(s);if(!x)return;const v=pickVoice();
 const u=new SpeechSynthesisUtterance(x);if(v){u.voice=v;u.lang=v.lang}else{u.lang=LANG==='kk'?'kk-KZ':'ru-RU';if(LANG==='kk'&&!kkWarned&&VOICES.length){kkWarned=true;toast(LANG==='kk'?'🗣 Құрылғыда қазақ дауысы табылмады — құрылғы баптауларынан қазақ тілін (Speech) қосыңыз.':'🗣 Голос не найден',true,4200)}}
 u.rate=LANG==='kk'?.95:1;speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}}
function stopSpeak(){try{window.speechSynthesis&&speechSynthesis.cancel()}catch(e){}}

/* ---------- AI: claude.ai (sample) → Gemini (кілт) → офлайн іздеу ---------- */
const CFG=window.CHEMLAB_CONFIG||{};
function gKey(){let k=CFG.geminiKey||'';try{k=k||localStorage.getItem('cl3d_gkey')||''}catch(e){}return k.trim();}
let PROXY_OK=true;
async function askGemini(sys,hist){const body={systemInstruction:{parts:[{text:sys}]},contents:hist.map(h=>({role:h.role==='assistant'?'model':'user',parts:[{text:h.content}]})),generationConfig:{temperature:.4,maxOutputTokens:2048}};
 const pick=j=>{const c=((j.candidates||[])[0]||{}).content;return c&&c.parts?c.parts.map(p=>p.text||'').join('').trim():''};
 if(!gKey()){/* Vercel: key is kept secret on the server (api/gemini.js) */
  let r;try{r=await fetch('api/gemini',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})}catch(e){PROXY_OK=false;return ''}
  if(r.status===404||r.status===405||!(r.headers.get('content-type')||'').includes('json')){PROXY_OK=false;return ''}
  let j={};try{j=await r.json()}catch(e){}
  if(!r.ok)throw new Error((j.error&&j.error.message)||('HTTP '+r.status));return pick(j);}
 const models=[CFG.geminiModel,'gemini-2.5-flash','gemini-flash-latest','gemini-2.0-flash'].filter(Boolean);let last='';
 for(const m of [...new Set(models)]){const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/'+m+':generateContent',{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':gKey()},body:JSON.stringify(body)});
  let j={};try{j=await r.json()}catch(e){}
  if(r.status===404){last='404';continue}
  if(!r.ok)throw new Error((j.error&&j.error.message)||('HTTP '+r.status));
  return pick(j);}
 throw new Error('model '+last);}
const STOPW=new Set('қалай неге неше қандай қайда қашан деген дегеніміз туралы бойынша дейін үшін және немесе бұл осы ол мен сен сіз не ме ма ба бе па пе түсіндір түсіндірші айтшы айтып көмектес көмек сұрақ как почему какой какая какие что где когда сколько это для при или и в на до из по про объясни расскажи помоги вопрос the what how why'.split(' '));
const SUBD={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-'};
function normWords(x){return String(x).toLowerCase().replace(/[₀-₉⁰-⁹⁺⁻]/g,c=>SUBD[c]).replace(/[^\p{L}\p{N}+\-]/gu,' ').split(/\s+/).filter(Boolean);}
function offlineAnswer(q){const L=LANG==='kk';const qw=normWords(q);
 if(qw.length&&qw.every(w=>/^(сәлем|салем|привет|здравствуйте|hi|hello|сәлеметсіз|рахмет|спасибо)/.test(w)))return t('aiHi');
 const stems=[...new Set(qw.filter(w=>!STOPW.has(w)&&(w.length>2||/\d/.test(w))).map(w=>/[a-z]/.test(w)&&/\d/.test(w)?w:w.slice(0,Math.max(4,w.length-3))))];
 if(!stems.length)return L?'Сұрағыңызды толығырақ жазыңыз (мысалы: «хлордың алынуы», «KMnO₄ қышқыл ортада»).':'Уточните вопрос (например: «получение хлора», «KMnO₄ в кислой среде»).';
 const items=[];TOP.forEach((T,ti)=>{const tw=normWords(tr(T.title)+' '+T.sym);const add=(head,body,eq,w)=>{const hw=normWords(head),bw=normWords(body+' '+(eq||[]).join(' '));let sc=0,hit=0;
   stems.forEach(st=>{const inH=hw.some(x=>x.startsWith(st)),inB=bw.filter(x=>x.startsWith(st)).length,inT=tw.some(x=>x.startsWith(st));if(inH||inB||inT)hit++;sc+=(inH?3:0)+Math.min(3,inB)+(inT?2:0)});
   if(hit)items.push({sc:sc*w*(hit/stems.length)*(hit/stems.length)+(ti===sel?.3:0),T,head,body,eq})};
  (T.lecture||[]).forEach(s=>add(tr(s.h),tr(s.p),s.eq,1));(T.practice||[]).forEach(m=>add(tr(m.h),(m.steps||[]).map(tr).join(' '),[].concat(m.eq||[]),1));
  (T.labs||[]).forEach(l=>add(tr(l.t),tr(l.d)+' '+tr(l.c),l.eq,.9));(T.problems||[]).forEach(p=>add(tr(p.q),tr(p.s),[],.8));});
 items.sort((a,b)=>b.sc-a.sc);if(!items.length)return L?'Бұл сұрақ бойынша платформадан материал таппадым. Сұрақты басқаша жазып көріңіз немесе ОҚУ бөліміндегі лекцияны қараңыз.':'По этому вопросу материал на платформе не найден. Переформулируйте вопрос или откройте лекцию в разделе ЧТЕНИЕ.';
 const best=items[0];const pick=[best].concat(items.slice(1).filter(x=>x.sc>=best.sc*.7&&x.head!==best.head).slice(0,1));
 const cut=s=>{const sents=String(s).split(/(?<=[.!?])\s+|\n/);const scored=sents.map((x,i)=>({x,i,sc:stems.reduce((a,st)=>a+(normWords(x).some(w=>w.startsWith(st))?1:0),0)}));const top=scored.filter(z=>z.sc>0).sort((a,b)=>b.sc-a.sc).slice(0,4).sort((a,b)=>a.i-b.i).map(z=>z.x);return (top.length?top:sents.slice(0,3)).join(' ').slice(0,700);};
 const eqs=it=>(it.eq||[]).filter(e=>stems.some(st=>normWords(e).some(w=>w.startsWith(st)))).slice(0,3);
 return (L?'📚 Платформадағы материалдан:\n\n':'📚 Из материалов платформы:\n\n')+pick.map(it=>{const e=eqs(it).length?eqs(it):(it.eq||[]).slice(0,2);return `▶ ${L?it.T.n+'-апта':'Неделя '+it.T.n} — ${it.head}\n${cut(it.body)}${e.length?'\n'+e.join('\n'):''}`}).join('\n\n')+
  (L?'\n\n(Офлайн режим: толық AI жауап үшін ⚙ арқылы Gemini кілтін енгізіңіз.)':'\n\n(Офлайн-режим: для полного ответа ИИ введите ключ Gemini через ⚙.)');}
function aiKeyDialog(){const k=gKey();modal(`<div class="kick">AI · Gemini</div><h2>⚙ ${LANG==='kk'?'AI кілті':'Ключ ИИ'}</h2><p>${LANG==='kk'?'Сайт claude.ai-дан тыс жерде жарияланса, AI көмекші Google Gemini арқылы жұмыс істейді. Кілтті aistudio.google.com/apikey бетінен тегін алуға болады. Кілт осы құрылғының браузерінде ғана сақталады.':'Вне claude.ai помощник работает через Google Gemini. Бесплатный ключ: aistudio.google.com/apikey. Ключ хранится только в браузере этого устройства.'}</p>
 <input id="gk" class="numin" style="background:#11161c;color:#fff;border-color:#3a424d" placeholder="AIza…" value="${esc(k)}"><button class="btnG" id="gkS">${LANG==='kk'?'Сақтау':'Сохранить'}</button><button class="btnD" id="gkD">${LANG==='kk'?'Кілтті өшіру':'Удалить ключ'}</button><button class="btnD" id="gkX">✕</button>`);
 $('gkS').onclick=()=>{try{localStorage.setItem('cl3d_gkey',$('gk').value.trim())}catch(e){}closeModal();toast('✓',false,1200)};$('gkD').onclick=()=>{try{localStorage.removeItem('cl3d_gkey')}catch(e){}closeModal()};$('gkX').onclick=closeModal;}

/* =====================================================================
   THREE
   ===================================================================== */
const canvas=$('c');
const R=new THREE.WebGLRenderer({canvas,antialias:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));R.outputEncoding=THREE.sRGBEncoding;R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=.95;
const cam=new THREE.PerspectiveCamera(55,1,0.03,60);
const homeScene=new THREE.Scene(),labScene=new THREE.Scene();
let mode='login';
const V3=THREE.Vector3;
const tweens=[];function tween(dur,fn,done){if(window.__fast)dur=1;tweens.push({t0:performance.now(),dur,fn,done});}
const ease=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;
const tw=(d,fn)=>new Promise(r=>tween(d,fn,r));const wait=ms=>new Promise(r=>setTimeout(r,window.__fast?1:ms));
function canvasTex(w,h,draw){const cv=document.createElement('canvas');cv.width=w;cv.height=h;const g=cv.getContext('2d');draw(g,w,h);const tx=new THREE.CanvasTexture(cv);tx.encoding=THREE.sRGBEncoding;tx.anisotropy=4;tx.userData={cv,g,draw};return tx;}
function redraw(tx){const {cv,g,draw}=tx.userData;g.clearRect(0,0,cv.width,cv.height);draw(g,cv.width,cv.height);tx.needsUpdate=true;}
function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath();}
function std(color,o){return new THREE.MeshStandardMaterial(Object.assign({color,roughness:.6,metalness:0},o||{}));}
function mesh(geo,mat,x,y,z){const m=new THREE.Mesh(geo,mat);m.position.set(x||0,y||0,z||0);return m;}
function box(s,w,h,d,mat,x,y,z){const m=mesh(new THREE.BoxGeometry(w,h,d),mat.isMaterial?mat:std(mat),x,y,z);s.add(m);return m;}
const glassMat=()=>new THREE.MeshPhysicalMaterial({color:0xf4fbff,transparent:true,opacity:.26,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2,side:THREE.DoubleSide,depthWrite:false});
function wrapText(g,text,maxW){const words=String(text).split(' ');const lines=[];let cur='';words.forEach(w=>{const tt=cur?cur+' '+w:w;if(g.measureText(tt).width>maxW&&cur){lines.push(cur);cur=w}else cur=tt});if(cur)lines.push(cur);return lines;}
function makeLabel(title,sub){const tex=canvasTex(512,170,()=>{});const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthTest:true}));sp.scale.set(.34,.113,1);sp.renderOrder=5;
 sp.set=function(a,b){const g=tex.userData.g;g.clearRect(0,0,512,170);g.fillStyle='rgba(0,0,0,.22)';rr(g,10,14,492,148,26);g.fill();g.fillStyle='#fff';rr(g,6,6,492,148,26);g.fill();g.fillStyle='#1d2433';g.textAlign='center';
  let fs=62;g.font='900 '+fs+'px Nunito, sans-serif';while(g.measureText(a).width>460&&fs>24){fs-=2;g.font='900 '+fs+'px Nunito, sans-serif'}g.fillText(a,256,b?80:98);
  if(b){g.fillStyle='#5b6474';let f2=36;g.font='700 '+f2+'px Nunito, sans-serif';while(g.measureText(b).width>470&&f2>18){f2-=2;g.font='700 '+f2+'px Nunito, sans-serif'}g.fillText(b,256,130)}tex.needsUpdate=true;};
 sp.set(title,sub);return sp;}
let ENV=null;
function makeEnv(){const es=new THREE.Scene();es.add(mesh(new THREE.BoxGeometry(12,6,12),new THREE.MeshBasicMaterial({color:0x9aa3ad,side:THREE.BackSide}),0,3,0));
 [[-2,5.9,0],[2,5.9,0],[0,5.9,-3]].forEach(p=>{const l=mesh(new THREE.PlaneGeometry(2.2,.6),new THREE.MeshBasicMaterial({color:0xffffff}),p[0],p[1],p[2]);l.rotation.x=Math.PI/2;es.add(l)});
 const w=mesh(new THREE.PlaneGeometry(3,2),new THREE.MeshBasicMaterial({color:0xdff0ff}),-5.9,3,0);w.rotation.y=Math.PI/2;es.add(w);
 const f=mesh(new THREE.PlaneGeometry(12,12),new THREE.MeshBasicMaterial({color:0x555a60}),0,.01,0);f.rotation.x=-Math.PI/2;es.add(f);
 const pm=new THREE.PMREMGenerator(R);ENV=pm.fromScene(es,.02).texture;pm.dispose();}

/* =====================================================================
   БАСТЫ САХНА: СЫНЫП, ТАҚТА «БЕЙОРГАНИКАЛЫҚ ХИМИЯ», 15 КІТАП
   ===================================================================== */
const books=[];let boardTex;
function buildHome(){const s=homeScene;s.background=new THREE.Color(0xdfe3e8);s.fog=new THREE.Fog(0xdfe3e8,14,30);s.environment=ENV;
 s.add(new THREE.HemisphereLight(0xffffff,0x9a9a9a,.5));const dl=new THREE.DirectionalLight(0xffffff,.8);dl.position.set(3,6,5);s.add(dl);
 const floor=mesh(new THREE.PlaneGeometry(30,30),std(0xb9b4aa));floor.rotation.x=-Math.PI/2;s.add(floor);
 s.add(mesh(new THREE.PlaneGeometry(30,10),std(0xeeebe4),0,5,-3.3));
 const lw=mesh(new THREE.PlaneGeometry(12,10),std(0xe6e3dc),-6,5,2.7);lw.rotation.y=Math.PI/2;s.add(lw);const rw=mesh(new THREE.PlaneGeometry(12,10),std(0xe6e3dc),6,5,2.7);rw.rotation.y=-Math.PI/2;s.add(rw);
 box(s,7.2,3.5,.1,0x8a5a32,0,3.0,-3.22);
 boardTex=canvasTex(2048,1000,(g,w,h)=>{g.fillStyle='#22443a';g.fillRect(0,0,w,h);for(let i=0;i<400;i++){g.fillStyle='rgba(255,255,255,'+(Math.random()*.03)+')';g.fillRect(Math.random()*w,Math.random()*h,60,3)}
  g.textAlign='center';g.fillStyle='#f4f1e8';let fs=170;g.font='900 '+fs+'px Nunito, sans-serif';while(g.measureText(t('board1')).width>w-120){fs-=6;g.font='900 '+fs+'px Nunito, sans-serif'}g.fillText(t('board1'),w/2,330);
  g.fillStyle='#ffd166';g.font='900 90px Nunito, sans-serif';g.fillText('CHEMLAB-3D',w/2,120);
  g.fillStyle='#cfe0d4';g.font='700 60px Nunito, sans-serif';g.fillText(t('board2'),w/2,450);
  g.strokeStyle='rgba(244,241,232,.6)';g.lineWidth=4;g.beginPath();g.moveTo(200,500);g.lineTo(w-200,500);g.stroke();
  g.font='700 62px Nunito, sans-serif';g.fillStyle='#e8efe9';const eq=['2H₂ + O₂ → 2H₂O','Cl₂ + 2KI → 2KCl + I₂','Fe³⁺ + 3SCN⁻ → Fe(SCN)₃','Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺'];
  eq.forEach((e,i)=>{g.textAlign=i%2?'right':'left';g.fillText(e,i%2?w-120:120,640+Math.floor(i/2)*130)});
  g.textAlign='center';g.font='120px serif';g.fillText('⚗️',w/2,820);});
 s.add(mesh(new THREE.PlaneGeometry(6.9,3.3),new THREE.MeshBasicMaterial({map:boardTex}),0,3.0,-3.16));
 const ptex=periodicTex();const pp=mesh(new THREE.PlaneGeometry(2.6,1.6),new THREE.MeshBasicMaterial({map:ptex}),5.97,2.7,-.8);pp.rotation.y=-Math.PI/2;s.add(pp);
 box(s,8.4,.1,1.6,std(0x3a3f46,{roughness:.4}),0,.85,-1.3);box(s,8.3,.8,1.5,0xf3f3f1,0,.4,-1.3);
 const fl=mkFlask(0x3ddc97);fl.scale.setScalar(1.6);fl.position.set(-4.0,.9,-.9);s.add(fl);
 TOP.forEach((T,i)=>{const tex=canvasTex(384,560,()=>{});tex.userData.draw=(g,w,h)=>{g.fillStyle=T.color;g.fillRect(0,0,w,h);g.fillStyle='rgba(255,255,255,.13)';g.beginPath();g.arc(w*.8,h*.85,150,0,7);g.fill();
   g.fillStyle='rgba(255,255,255,.9)';g.textAlign='center';g.font='900 34px Nunito';g.fillText(LANG==='kk'?T.n+'-АПТА':'НЕДЕЛЯ '+T.n,w/2,60);
   g.fillStyle='#fff';g.font='900 92px Nunito';g.fillText(T.sym,w/2,190);g.font='800 34px Nunito';wrapText(g,tr(T.short||T.title),330).slice(0,5).forEach((ln,j)=>g.fillText(ln,w/2,270+j*42));};redraw(tex);
  const side=std(0xf5f0e2),spine=std(new THREE.Color(T.color).multiplyScalar(.7));
  const b=mesh(new THREE.BoxGeometry(.44,.64,.1),[spine,side,side,side,new THREE.MeshStandardMaterial({map:tex,roughness:.55}),spine]);
  const x=(i-(TOP.length-1)/2)*.52;b.position.set(x,.9+.32,-1.25);b.userData={idx:i,baseY:.9+.32,x,tex};s.add(b);books.push(b);
  box(s,.36,.04,.2,0xc49a6c,x,.92,-1.18);});
 const ring=mesh(new THREE.RingGeometry(.3,.35,48),new THREE.MeshBasicMaterial({color:0xf2c94c,side:THREE.DoubleSide}),0,.905,-1.25);ring.rotation.x=-Math.PI/2;ring.visible=false;s.add(ring);s.userData.ring=ring;}
function periodicTex(){return canvasTex(1024,640,(g,w,h)=>{g.fillStyle='#fdfdfb';g.fillRect(0,0,w,h);g.fillStyle='#24324a';g.font='900 44px Nunito';g.textAlign='center';g.fillText(LANG==='kk'?'ПЕРИОДТЫҚ ЖҮЙЕ':'ПЕРИОДИЧЕСКАЯ СИСТЕМА',w/2,52);
 const els='H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr'.split(' ');
 els.forEach((e,i)=>{const z=i+1;let c,r;if(z===1){c=0;r=0}else if(z===2){c=17;r=0}else if(z<=10){r=1;c=z<=4?z-3:z-11+18}else if(z<=18){r=2;c=z<=12?z-11:z-19+18}else{r=3;c=z-19}
  const x=20+c*54,y=80+r*70;g.fillStyle=c<2?'#ffc9c2':c<12&&c>=2?'#ffe9b0':c===17?'#e3d4ff':'#c8f0d8';if(z===1)g.fillStyle='#bfe3ff';rr(g,x,y,50,64,6);g.fill();g.fillStyle='#1d2433';g.font='700 13px Nunito';g.textAlign='left';g.fillText(z,x+4,y+15);g.textAlign='center';g.font='900 24px Nunito';g.fillText(e,x+25,y+50)});
 g.font='800 26px Nunito';g.fillStyle='#24324a';g.fillText('s · p · d',w/2,h-40);});}

/* =====================================================================
   ЗЕРТХАНА БӨЛМЕСІ (360°)
   ===================================================================== */
const BENCH_Y=.9;const CAMPOS=new V3(0,1.5,1.0);const CAM0=CAMPOS.clone();let labBoard,exGroup;
function buildLab(){const s=labScene;s.background=new THREE.Color(0xd8dce0);s.environment=ENV;
 s.add(new THREE.HemisphereLight(0xffffff,0x6d6d6d,.45));
 const dl=new THREE.DirectionalLight(0xffffff,.85);dl.position.set(1.2,5,2.6);dl.castShadow=true;dl.shadow.mapSize.set(1024,1024);Object.assign(dl.shadow.camera,{left:-1.6,right:1.6,top:1.6,bottom:-1.6,near:.5,far:10});dl.shadow.bias=-.0004;s.add(dl);
 const tile=canvasTex(512,512,(g,w,h)=>{g.fillStyle='#c9ccd0';g.fillRect(0,0,w,h);g.strokeStyle='#b3b7bc';g.lineWidth=5;for(let i=0;i<=2;i++){g.beginPath();g.moveTo(i*256,0);g.lineTo(i*256,h);g.stroke();g.beginPath();g.moveTo(0,i*256);g.lineTo(w,i*256);g.stroke()}});
 tile.wrapS=tile.wrapT=THREE.RepeatWrapping;tile.repeat.set(8,8);const fl=mesh(new THREE.PlaneGeometry(9,9),new THREE.MeshStandardMaterial({map:tile,roughness:.5}),0,0,.5);fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;s.add(fl);
 const wt=canvasTex(512,512,(g,w,h)=>{g.fillStyle='#f1f2f3';g.fillRect(0,0,w,h);g.strokeStyle='#dcdfe2';g.lineWidth=4;for(let i=0;i<=4;i++){g.beginPath();g.moveTo(i*128,0);g.lineTo(i*128,h);g.stroke();g.beginPath();g.moveTo(0,i*128);g.lineTo(w,i*128);g.stroke()}});
 wt.wrapS=wt.wrapT=THREE.RepeatWrapping;wt.repeat.set(9,3.2);const wm=new THREE.MeshStandardMaterial({map:wt,roughness:.7});
 const W=(w,x,z,ry)=>{const m=mesh(new THREE.PlaneGeometry(w,3.2),wm,x,1.6,z);m.rotation.y=ry;s.add(m);return m};
 W(9,0,-3.5,0);W(9,0,5,Math.PI);W(8.5,-4.5,.75,Math.PI/2);W(8.5,4.5,.75,-Math.PI/2);
 const ceil=mesh(new THREE.PlaneGeometry(9,8.5),std(0xf7f7f7),0,3.2,.75);ceil.rotation.x=Math.PI/2;s.add(ceil);
 [[-2,-1.5],[2,-1.5],[-2,2.5],[2,2.5],[0,.5]].forEach(p=>{const l=mesh(new THREE.PlaneGeometry(1.4,.5),new THREE.MeshBasicMaterial({color:0xffffff}),p[0],3.19,p[1]);l.rotation.x=Math.PI/2;s.add(l)});
 // НЕГІЗГІ ҮСТЕЛ
 const top=box(s,2.9,.07,1.5,std(0x23262b,{roughness:.3,envMapIntensity:.8}),0,BENCH_Y-.035,0);top.receiveShadow=true;
 box(s,2.8,.83,1.4,0xf4f4f4,0,.43,0);
 for(let i=-1;i<=1;i++){box(s,.01,.7,.01,0xbbbbbb,i*.93,.43,.705);box(s,.02,.2,.03,0x999999,i*.93+.1,.6,.72)}
 const rs=box(s,2.6,.04,.25,0xe8e8e8,0,1.28,-.62);[-1.25,1.25].forEach(x=>box(s,.04,.38,.25,0xd0d0d0,x,1.09,-.62));
 for(let i=0;i<8;i++){const b=mkDecoBottle(['#c8e6c9','#ffe0b2','#b3e5fc','#d1c4e9','#ffcdd2','#fff9c4'][i%6],i%3===0);b.scale.setScalar(.65);b.position.set(-1.1+i*.31,1.3,-.62);s.add(b)}
 const sock=box(s,.12,.08,.02,0xffffff,.9,1.05,-.735);
 // АЛДЫҢҒЫ ҚАБЫРҒА: тақта, кесте
 box(s,3.2,1.6,.05,0x2c5aa0,-.6,1.95,-3.47);
 labBoard=canvasTex(1400,700,()=>{});const wb=mesh(new THREE.PlaneGeometry(3.1,1.5),new THREE.MeshBasicMaterial({map:labBoard}),-.6,1.95,-3.44);s.add(wb);
 const pt=mesh(new THREE.PlaneGeometry(1.9,1.2),new THREE.MeshBasicMaterial({map:periodicTex()}),2.4,1.9,-3.47);s.add(pt);
 const clk=canvasTex(256,256,(g)=>{g.fillStyle='#fff';g.beginPath();g.arc(128,128,120,0,7);g.fill();g.strokeStyle='#333';g.lineWidth=8;g.stroke();g.fillStyle='#333';for(let i=0;i<12;i++){const a=i/12*6.283;g.fillRect(128+Math.sin(a)*100-3,128-Math.cos(a)*100-3,6,6)}g.lineWidth=7;g.beginPath();g.moveTo(128,128);g.lineTo(128,50);g.moveTo(128,128);g.lineTo(185,150);g.stroke();});
 s.add(mesh(new THREE.CircleGeometry(.22,32),new THREE.MeshBasicMaterial({map:clk}),1.2,2.85,-3.47));
 // СОЛ ҚАБЫРҒА: терезелер + раковина үстелі
 for(let i=0;i<3;i++){const z=-2.2+i*2.1;const wf=box(s,.06,1.5,1.5,0xffffff,-4.47,1.95,z);const g=mesh(new THREE.PlaneGeometry(1.36,1.36),new THREE.MeshBasicMaterial({color:0xcfe6ff}),-4.43,1.95,z);g.rotation.y=Math.PI/2;s.add(g);box(s,.04,1.36,.04,0xffffff,-4.42,1.95,z);box(s,.04,.04,1.36,0xffffff,-4.42,1.95,z)}
 box(s,.7,.85,6,0xf4f4f4,-4.1,.43,0);box(s,.72,.06,6.02,std(0x23262b,{roughness:.3}),-4.1,.88,0);
 box(s,.5,.04,.6,std(0xb0b8bf,{metalness:.7,roughness:.25}),-4.1,.9,-.5);const tap=mesh(new THREE.TorusGeometry(.12,.015,8,20,Math.PI),std(0xc0c6cc,{metalness:.9,roughness:.2}),-4.32,1.02,-.5);tap.rotation.y=Math.PI/2;s.add(tap);
 for(let i=0;i<5;i++){const f=mkFlask(['#e3f2fd','#fff','#e8f5e9'][i%3]);f.position.set(-4.15,.91,1+i*.32);s.add(f)}
 const bal=new THREE.Group();bal.add(mesh(new THREE.BoxGeometry(.45,.12,.4),std(0xeeeeee)));const enc=mesh(new THREE.BoxGeometry(.43,.38,.38),glassMat(),0,.25,0);bal.add(enc);bal.add(mesh(new THREE.CylinderGeometry(.08,.08,.01,24),std(0xbfc5cc,{metalness:.8}),0,.07,0));bal.position.set(-4.1,.97,2.2);s.add(bal);
 // ОҢ ҚАБЫРҒА: тартпа шкаф + реактив шкафы
 const fh=new THREE.Group();fh.add(mesh(new THREE.BoxGeometry(.95,2.3,1.8),std(0xe9ecef),0,1.15,0));const inn=mesh(new THREE.BoxGeometry(.8,1.1,1.6),std(0x37474f),-.08,1.45,0);fh.add(inn);
 const sash=mesh(new THREE.PlaneGeometry(1.6,.9),glassMat(),-.48,1.6,0);sash.rotation.y=-Math.PI/2;fh.add(sash);fh.add(mesh(new THREE.BoxGeometry(.05,.05,1.62),std(0x90a4ae,{metalness:.6}),-.5,1.15,0));
 const fl2=mesh(new THREE.PlaneGeometry(.7,1.5),new THREE.MeshBasicMaterial({color:0xfffbea}),-.07,1.99,0);fl2.rotation.x=Math.PI/2;fh.add(fl2);
 for(let i=0;i<4;i++){const b=mkDecoBottle(['#ffcc80','#90caf9','#a5d6a7','#ef9a9a'][i],i%2);b.scale.setScalar(.8);b.position.set(-.1,.92,-.5+i*.33);fh.add(b)}
 const sign=canvasTex(512,128,(g)=>{g.fillStyle='#ffd54f';g.fillRect(0,0,512,128);g.fillStyle='#222';g.font='900 46px Nunito';g.textAlign='center';g.fillText(LANG==='kk'?'ТАРТПА ШКАФ':'ВЫТЯЖНОЙ ШКАФ',256,82)});
 const sg=mesh(new THREE.PlaneGeometry(.9,.22),new THREE.MeshBasicMaterial({map:sign}),-.481,2.15,0);sg.rotation.y=-Math.PI/2;fh.add(sg);fh.position.set(4.0,0,-1.6);s.add(fh);
 const cab=new THREE.Group();cab.add(mesh(new THREE.BoxGeometry(.5,2.2,1.4),std(0xf5f5f5),0,1.1,0));for(let r=0;r<4;r++){cab.add(mesh(new THREE.BoxGeometry(.46,.02,1.34),std(0xdddddd),-.01,.35+r*.5,0));for(let i=0;i<5;i++){const b=mkDecoBottle(['#c5e1a5','#ffe082','#b39ddb','#80deea','#ffab91','#fff'][(r+i)%6],(r+i)%4===0);b.scale.setScalar(.6);b.position.set(-.05,.36+r*.5,-.5+i*.25);cab.add(b)}}
 const gd=mesh(new THREE.PlaneGeometry(1.36,2.1),glassMat(),-.26,1.1,0);gd.rotation.y=-Math.PI/2;cab.add(gd);cab.position.set(4.22,0,1.3);s.add(cab);
 const sp=canvasTex(512,700,(g,w,h)=>{g.fillStyle='#fff';g.fillRect(0,0,w,h);g.fillStyle='#d32f2f';g.fillRect(0,0,w,110);g.fillStyle='#fff';g.font='900 52px Nunito';g.textAlign='center';g.fillText(LANG==='kk'?'ҚАУІПСІЗДІК':'БЕЗОПАСНОСТЬ',w/2,74);
  g.font='120px serif';['🥽','🧤','🥼','🔥'].forEach((e,i)=>g.fillText(e,140+(i%2)*230,280+Math.floor(i/2)*260));});
 const spm=mesh(new THREE.PlaneGeometry(.6,.82),new THREE.MeshBasicMaterial({map:sp}),4.47,1.9,3.0);spm.rotation.y=-Math.PI/2;s.add(spm);
 // АРТҚЫ ҚАБЫРҒА: есік, авариялық душ, өрт сөндіргіш
 box(s,1.1,2.2,.06,0x8d6e63,-2.2,1.1,4.97);mesh;const kn=mesh(new THREE.SphereGeometry(.04,12,8),std(0xd4af37,{metalness:.9,roughness:.2}),-1.8,1.05,4.92);s.add(kn);
 const pipe=std(0xfbc02d,{roughness:.4});box(s,.06,2.6,.06,pipe,1.6,1.3,4.85);box(s,.6,.06,.06,pipe,1.33,2.6,4.85);const sh=mesh(new THREE.CylinderGeometry(.18,.08,.12,20),std(0xfbc02d),1.05,2.5,4.85);s.add(sh);
 const ew=mesh(new THREE.CylinderGeometry(.14,.1,.1,20),std(0x43a047),1.6,1.05,4.72);s.add(ew);
 const ext=mesh(new THREE.CylinderGeometry(.09,.09,.5,20),std(0xd32f2f,{roughness:.35}),3.4,.55,4.85);s.add(ext);s.add(mesh(new THREE.CylinderGeometry(.03,.03,.08,10),std(0x222222),3.4,.84,4.85));
 const fa=box(s,.45,.35,.12,0xffffff,0,1.6,4.92);const fac=canvasTex(128,128,(g)=>{g.fillStyle='#fff';g.fillRect(0,0,128,128);g.fillStyle='#d32f2f';g.fillRect(52,20,24,88);g.fillRect(20,52,88,24)});
 const fam=mesh(new THREE.PlaneGeometry(.3,.3),new THREE.MeshBasicMaterial({map:fac}),0,1.6,4.855);fam.rotation.y=Math.PI;s.add(fam);
 for(let i=0;i<3;i++){const c=mesh(new THREE.CylinderGeometry(.16,.22,.9,16),std(0xfafafa,{roughness:.9}),-.7+i*.38,1.6,4.85);s.add(c)}
 // орындықтар
 [-1.7,1.7].forEach(x=>{const st=new THREE.Group();st.add(mesh(new THREE.CylinderGeometry(.2,.2,.05,24),std(0x37474f),0,.68,0));st.add(mesh(new THREE.CylinderGeometry(.025,.025,.66,10),std(0x90a4ae,{metalness:.7}),0,.33,0));st.add(mesh(new THREE.CylinderGeometry(.22,.24,.03,20),std(0x37474f),0,.015,0));st.position.set(x,0,1.0);s.add(st)});
 exGroup=new THREE.Group();s.add(exGroup);
 buildHint();}
function drawLabBoard(title,lines){const g=labBoard.userData.g,w=1400,h=700;g.fillStyle='#fbfcfd';g.fillRect(0,0,w,h);g.fillStyle='#2c5aa0';g.fillRect(0,0,w,96);
 g.fillStyle='#fff';g.font='900 50px Nunito';g.textAlign='left';g.fillText(t('board1'),30,66);g.textAlign='right';g.font='900 40px Nunito';g.fillText('CHEMLAB-3D',w-30,62);
 g.textAlign='left';g.fillStyle='#1d2433';let fs=54;g.font='900 '+fs+'px Nunito';const tl=wrapText(g,title,w-80);tl.slice(0,2).forEach((l,i)=>g.fillText(l,40,170+i*62));
 g.font='600 44px JetBrains Mono, monospace';(lines||[]).slice(0,5).forEach((l,i)=>{g.fillStyle=['#d23c3c','#2e6fd6','#1b8a50','#7c4dff','#555'][i%5];let f=44;g.font='600 '+f+'px JetBrains Mono, monospace';while(g.measureText(l).width>w-80&&f>22){f-=2;g.font='600 '+f+'px JetBrains Mono, monospace'}g.fillText(l,40,330+i*72)});
 labBoard.needsUpdate=true;}

/* ---------- ЗЕРТХАНА ЫДЫСТАРЫ ---------- */
const col=c=>new THREE.Color(c||'#ffffff');
function mkFlask(liq){const g=new THREE.Group();g.add(mesh(new THREE.CylinderGeometry(.05,.16,.22,32,1,true),glassMat(),0,.11,0));g.add(mesh(new THREE.CylinderGeometry(.042,.042,.11,24,1,true),glassMat(),0,.275,0));
 const lm=new THREE.MeshStandardMaterial({color:col(liq),transparent:true,opacity:.75,roughness:.2});g.add(mesh(new THREE.CylinderGeometry(.1,.15,.09,32),lm,0,.046,0));g.userData.lm=lm;return g;}
function mkDecoBottle(color,brown){const g=new THREE.Group();g.add(mesh(new THREE.CylinderGeometry(.055,.058,.15,14),std(brown?0x6d4220:col(color),{roughness:.25,transparent:!brown,opacity:brown?1:.85}),0,.075,0));g.add(mesh(new THREE.CylinderGeometry(.025,.05,.06,12),std(brown?0x6d4220:0xe8eef2,{roughness:.2}),0,.18,0));g.add(mesh(new THREE.CylinderGeometry(.03,.03,.04,10),std(0x37474f),0,.23,0));return g;}
function mkBottle(color,label,brown){const g=new THREE.Group();const bm=new THREE.MeshPhysicalMaterial({color:brown?0x7a4a20:0xf1f7fb,transparent:true,opacity:brown?.85:.35,roughness:.08,clearcoat:1,envMapIntensity:1.6,depthWrite:false});
 g.add(mesh(new THREE.CylinderGeometry(.055,.058,.15,28),bm,0,.075,0));g.add(mesh(new THREE.CylinderGeometry(.024,.05,.04,24),bm,0,.17,0));g.add(mesh(new THREE.CylinderGeometry(.026,.026,.03,20),bm,0,.205,0));
 g.add(mesh(new THREE.CylinderGeometry(.03,.022,.04,18),std(0xf1f1f1,{roughness:.2}),0,.235,0));
 const lm=new THREE.MeshStandardMaterial({color:col(color),transparent:true,opacity:.8,roughness:.25});const lq=mesh(new THREE.CylinderGeometry(.05,.053,.11,28),lm,0,.058,0);g.add(lq);g.userData.lm=lm;
 if(label){const tx=canvasTex(256,128,(gg)=>{gg.fillStyle='#fffdf5';gg.fillRect(0,0,256,128);gg.strokeStyle='#c62828';gg.lineWidth=6;gg.strokeRect(4,4,248,120);gg.fillStyle='#1d2433';gg.textAlign='center';let f=58;gg.font='800 '+f+'px Nunito';while(gg.measureText(label).width>232&&f>22){f-=2;gg.font='800 '+f+'px Nunito'}gg.fillText(label,128,82)});
  const lb=mesh(new THREE.CylinderGeometry(.0575,.0575,.07,28,1,true,-1.1,2.2),new THREE.MeshStandardMaterial({map:tx,roughness:.6}),0,.08,0);lb.rotation.y=0;g.add(lb);}
 g.userData.tip=new V3(0,.22,0);return g;}
function mkDropperBottle(color,label){const g=mkBottle(color,label,true);g.scale.setScalar(.85);g.children[4].visible=false;
 const pip=new THREE.Group();pip.add(mesh(new THREE.CylinderGeometry(.009,.004,.2,12),glassMat(),0,.1,0));const bulb=mesh(new THREE.SphereGeometry(.026,16,12),std(0x37474f,{roughness:.5}),0,.225,0);bulb.scale.y=1.5;pip.add(bulb);
 const pl=mesh(new THREE.CylinderGeometry(.006,.003,.08,10),new THREE.MeshStandardMaterial({color:col(color),transparent:true,opacity:.85}),0,.045,0);pip.add(pl);pip.position.y=.07;g.add(pip);g.userData.pip=pip;pip.userData.drop=color;return g;}
function mkTube(color,level,solid){const g=new THREE.Group();const r=.026,h=.3;g.add(mesh(new THREE.CylinderGeometry(r,r,h-r,24,1,true),glassMat(),0,(h-r)/2+r,0));
 const btm=mesh(new THREE.SphereGeometry(r,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),glassMat(),0,r,0);g.add(btm);
 {const rim=mesh(new THREE.TorusGeometry(r+.002,.0035,8,28),std(0xffffff,{transparent:true,opacity:.6}),0,h,0);rim.rotation.x=Math.PI/2;g.add(rim);}
 const lm=new THREE.MeshStandardMaterial({color:col(color),transparent:true,opacity:.78,roughness:.15});
 const lq=mesh(new THREE.CylinderGeometry(r*.9,r*.9,1,24),lm);g.add(lq);const lb=mesh(new THREE.SphereGeometry(r*.9,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),lm,0,r,0);g.add(lb);
 const pm=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.95});const pp=mesh(new THREE.CylinderGeometry(r*.88,r*.88,1,20),pm);pp.visible=false;g.add(pp);const pb=mesh(new THREE.SphereGeometry(r*.88,18,8,0,Math.PI*2,Math.PI/2,Math.PI/2),pm,0,r+.001,0);pb.visible=false;g.add(pb);
 const sol=new THREE.Group();g.add(sol);
 const bub=[];for(let i=0;i<16;i++){const b=mesh(new THREE.SphereGeometry(.004+Math.random()*.004,8,6),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.85}));b.visible=false;b.userData.ph=Math.random();g.add(b);bub.push(b)}
 const gas=[];for(let i=0;i<10;i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:puffTex(),transparent:true,opacity:0,depthWrite:false}));s.scale.set(.08,.08,1);s.userData.ph=i/10;g.add(s);gas.push(s)}
 g.userData={kind:'tube',r,h,lm,lq,lb,pm,pp,pb,sol,bub,gas,level:0,ppt:0,bubT:0,gasT:0,gasC:null};setLevel(g,level||0);if(solid)addSolid(g,solid);return g;}
function mkBeaker(color,level){const g=new THREE.Group();const r=.075,h=.17;g.add(mesh(new THREE.CylinderGeometry(r,r*.96,h,32,1,true),glassMat(),0,h/2,0));const bt=mesh(new THREE.CircleGeometry(r*.96,32),glassMat(),0,.003,0);bt.rotation.x=-Math.PI/2;g.add(bt);
 {const rim=mesh(new THREE.TorusGeometry(r,.004,8,40),std(0xffffff,{transparent:true,opacity:.6}),0,h,0);rim.rotation.x=Math.PI/2;g.add(rim);}
 const lm=new THREE.MeshStandardMaterial({color:col(color),transparent:true,opacity:.75,roughness:.15});const lq=mesh(new THREE.CylinderGeometry(r*.93,r*.9,1,32),lm);g.add(lq);
 const pm=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.95});const pp=mesh(new THREE.CylinderGeometry(r*.9,r*.9,1,24),pm);pp.visible=false;g.add(pp);const sol=new THREE.Group();g.add(sol);
 const bub=[];for(let i=0;i<20;i++){const b=mesh(new THREE.SphereGeometry(.005+Math.random()*.005,8,6),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.85}));b.visible=false;b.userData.ph=Math.random();g.add(b);bub.push(b)}
 const gas=[];for(let i=0;i<10;i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:puffTex(),transparent:true,opacity:0,depthWrite:false}));s.scale.set(.12,.12,1);s.userData.ph=i/10;g.add(s);gas.push(s)}
 g.userData={kind:'beaker',r,h,lm,lq,pm,pp,sol,bub,gas,level:0,ppt:0,bubT:0,gasT:0};setLevel(g,level||0);return g;}
let PUFF=null;function puffTex(){if(PUFF)return PUFF;PUFF=canvasTex(128,128,(g)=>{const gr=g.createRadialGradient(64,64,4,64,64,62);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,128,128)});return PUFF;}
function setLevel(v,f){const u=v.userData;u.level=f;const r=u.r,isT=u.kind==='tube';const base=isT?r:.004;const hh=Math.max(0,f*u.h-(isT?r:0));
 u.lq.visible=f>.005;if(u.lb)u.lb.visible=f>.005;u.lq.scale.y=Math.max(.001,hh);u.lq.position.y=base+hh/2;}
function setPpt(v,f){const u=v.userData;u.ppt=f;const isT=u.kind==='tube';const base=isT?u.r:.004;const hh=Math.max(0,f*u.h-(isT?u.r:0));u.pp.visible=f>.005;if(u.pb)u.pb.visible=f>.005;u.pp.scale.y=Math.max(.001,hh);u.pp.position.y=base+hh/2+.001;}
function addSolid(v,c){const u=v.userData;const n=u.kind==='tube'?7:12;for(let i=0;i<n;i++){const k=mesh(new THREE.DodecahedronGeometry(u.kind==='tube'?.009:.014,0),std(col(c),{roughness:.5,metalness:/#(9|a|b|c)/i.test(c)?.3:0}),(Math.random()-.5)*u.r,(u.kind==='tube'?u.r*.6:.01)+Math.random()*.012,(Math.random()-.5)*u.r);k.rotation.set(Math.random()*3,Math.random()*3,0);u.sol.add(k)}}
function mkJar(color,label){const g=new THREE.Group();const gm=new THREE.MeshPhysicalMaterial({color:0xf4fbff,transparent:true,opacity:.3,roughness:.05,clearcoat:1,depthWrite:false});
 g.add(mesh(new THREE.CylinderGeometry(.065,.065,.11,28),gm,0,.055,0));g.add(mesh(new THREE.CylinderGeometry(.068,.068,.025,28),std(0x37474f),0,.125,0));
 const pile=new THREE.Group();for(let i=0;i<22;i++){const k=mesh(new THREE.DodecahedronGeometry(.012,0),std(col(color),{roughness:.5}),(Math.random()-.5)*.09,.012+Math.random()*.04,(Math.random()-.5)*.09);k.rotation.set(Math.random()*3,Math.random()*3,0);pile.add(k)}g.add(pile);
 if(label){const tx=canvasTex(256,128,(gg)=>{gg.fillStyle='#fffdf5';gg.fillRect(0,0,256,128);gg.fillStyle='#1d2433';gg.textAlign='center';let f=56;gg.font='800 '+f+'px Nunito';while(gg.measureText(label).width>232&&f>20){f-=2;gg.font='800 '+f+'px Nunito'}gg.fillText(label,128,82)});
  g.add(mesh(new THREE.CylinderGeometry(.0665,.0665,.05,28,1,true,-1.1,2.2),new THREE.MeshStandardMaterial({map:tx}),0,.06,0));}
 g.userData.pile=pile;g.userData.sc=color;return g;}
function mkLamp(){const g=new THREE.Group();const gm=new THREE.MeshPhysicalMaterial({color:0xf4fbff,transparent:true,opacity:.35,roughness:.05,clearcoat:1,depthWrite:false});
 const body=mesh(new THREE.SphereGeometry(.075,28,18),gm,0,.06,0);body.scale.y=.75;g.add(body);g.add(mesh(new THREE.SphereGeometry(.068,24,14,0,Math.PI*2,Math.PI/2,Math.PI/2),new THREE.MeshStandardMaterial({color:0xbfe3ff,transparent:true,opacity:.6}),0,.06,0));
 g.add(mesh(new THREE.CylinderGeometry(.022,.026,.04,20),std(0xb0bec5,{metalness:.8,roughness:.25}),0,.12,0));g.add(mesh(new THREE.CylinderGeometry(.006,.006,.02,8),std(0xeeeeee),0,.148,0));
 const fm=new THREE.MeshBasicMaterial({color:0xffa726,transparent:true,opacity:.9});const f1=mesh(new THREE.ConeGeometry(.02,.09,16),fm,0,.2,0);g.add(f1);
 const f2=mesh(new THREE.ConeGeometry(.011,.045,14),new THREE.MeshBasicMaterial({color:0x4fc3f7,transparent:true,opacity:.8}),0,.175,0);g.add(f2);
 const pl=new THREE.PointLight(0xffa040,.4,1.2);pl.position.y=.22;g.add(pl);g.userData={kind:'lamp',fm,f1,f2,pl,base:new THREE.Color(0xffa726)};return g;}
function mkSplint(){const g=new THREE.Group();const st=mesh(new THREE.BoxGeometry(.012,.006,.26),std(0xd7b98e,{roughness:.8}),0,.003,0);g.add(st);
 const tip=mesh(new THREE.SphereGeometry(.009,10,8),new THREE.MeshBasicMaterial({color:0xff7043}),0,.004,-.13);g.add(tip);
 const fl=mesh(new THREE.ConeGeometry(.012,.04,12),new THREE.MeshBasicMaterial({color:0xffb300,transparent:true,opacity:.9}),0,.02,-.135);g.add(fl);
 const holder=mesh(new THREE.BoxGeometry(.08,.02,.05),std(0x607d8b),0,.01,.09);g.add(holder);g.userData={kind:'splint',tip,fl};return g;}
function mkWire(salt){const g=new THREE.Group();const h=mesh(new THREE.CylinderGeometry(.01,.01,.12,10),std(0x795548),0,.006,.05);h.rotation.x=Math.PI/2;g.add(h);
 const w=mesh(new THREE.CylinderGeometry(.002,.002,.14,6),std(0x9e9e9e,{metalness:.9}),0,.006,-.08);w.rotation.x=Math.PI/2;g.add(w);
 const lp=mesh(new THREE.TorusGeometry(.009,.002,6,14),std(0x9e9e9e,{metalness:.9}),0,.006,-.155);g.add(lp);
 g.userData={kind:'wire'};return g;}
function mkRack(n){const g=new THREE.Group();const w=n*.11+.08;const wm=std(0xc49a6c,{roughness:.7});g.add(mesh(new THREE.BoxGeometry(w,.015,.12),wm,0,.0075,0));g.add(mesh(new THREE.BoxGeometry(w,.015,.12),wm,0,.13,0));
 [-w/2+.01,w/2-.01].forEach(x=>g.add(mesh(new THREE.BoxGeometry(.015,.14,.12),wm,x,.07,0)));return g;}

/* ---------- ҚОЛДАР ---------- */
let HAND=null,HANDL=null;const HS=1.75;const FT=new V3(-.05,-.09,-.162);let GLOVE_TEX=null;
function gloveBump(){if(GLOVE_TEX)return GLOVE_TEX;GLOVE_TEX=canvasTex(256,256,(g,w,h)=>{g.fillStyle='#808080';g.fillRect(0,0,w,h);for(let i=0;i<70;i++){const y=Math.random()*h;g.strokeStyle='rgba('+(Math.random()<.5?'60,60,60':'190,190,190')+','+(0.25+Math.random()*.35)+')';g.lineWidth=1+Math.random()*2;g.beginPath();g.moveTo(Math.random()*w*.3,y);for(let x=0;x<w;x+=16)g.lineTo(x,y+Math.sin(x*.05+i)*3);g.stroke();}});GLOVE_TEX.encoding=THREE.LinearEncoding;return GLOVE_TEX;}
function makeHand(left){const g=new THREE.Group();const mat=new THREE.MeshPhysicalMaterial({color:0x1d5fc4,roughness:.45,metalness:0,envMapIntensity:.6,clearcoat:.3,clearcoatRoughness:.45,bumpMap:gloveBump(),bumpScale:.0025});
 const inner=new THREE.Group();inner.scale.set(left?-HS:HS,HS,HS);inner.rotation.y=left?-.3:.3;g.add(inner);
 const sh=new THREE.Shape();sh.moveTo(-.034,-.05);sh.lineTo(.033,-.05);sh.bezierCurveTo(.04,-.02,.045,.02,.043,.04);sh.bezierCurveTo(.04,.055,.02,.058,0,.058);sh.bezierCurveTo(-.02,.058,-.04,.055,-.043,.04);sh.bezierCurveTo(-.046,.01,-.042,-.025,-.034,-.05);
 const pg=new THREE.ExtrudeGeometry(sh,{depth:.014,bevelEnabled:true,bevelThickness:.007,bevelSize:.006,bevelSegments:5,curveSegments:16});pg.rotateX(-Math.PI/2);pg.translate(0,-.007,0);inner.add(mesh(pg,mat));
 const pad=mesh(new THREE.SphereGeometry(1,20,14),mat,-.02,-.008,.015);pad.scale.set(.022,.012,.028);inner.add(pad);
 const F=[{x:-.029,z:-.05,ry:.07,L:[.041,.025,.02],r:.0092},{x:-.0095,z:-.056,ry:.015,L:[.046,.029,.021],r:.0095},{x:.0105,z:-.053,ry:-.035,L:[.043,.027,.02],r:.009},{x:.029,z:-.043,ry:-.1,L:[.033,.021,.018],r:.0082}];
 const fingers=[];F.forEach(f=>{const root=new THREE.Group();root.position.set(f.x,0,f.z);root.rotation.y=f.ry;inner.add(root);const js=[];let par=root;
  f.L.forEach((len,k)=>{const j=new THREE.Group();if(k>0)j.position.z=-f.L[k-1];par.add(j);const r=f.r*(1-k*.09);j.add(mesh(new THREE.SphereGeometry(r*1.04,14,10),mat));const sg=mesh(new THREE.CylinderGeometry(r*.96,r,len,14,3),mat,0,0,-len/2);sg.rotation.x=Math.PI/2;j.add(sg);
   if(k===2){const tip=mesh(new THREE.SphereGeometry(r*.96,14,10),mat,0,0,-len);tip.scale.z=1.25;j.add(tip)}js.push(j);par=j});fingers.push(js)});
 const trr=new THREE.Group();trr.position.set(-.036,-.004,.012);trr.rotation.set(-.22,.95,-.35);inner.add(trr);const th=[];let tp=trr;
 [.038,.03,.025].forEach((len,k)=>{const j=new THREE.Group();if(k>0)j.position.z=-[.038,.03][k-1];tp.add(j);const r=.0115-k*.0009;j.add(mesh(new THREE.SphereGeometry(r*1.05,14,10),mat));const sg=mesh(new THREE.CylinderGeometry(r*.95,r,len,14),mat,0,0,-len/2);sg.rotation.x=Math.PI/2;j.add(sg);
  if(k===2){const tt=mesh(new THREE.SphereGeometry(r*.95,14,10),mat,0,0,-len);tt.scale.z=1.2;j.add(tt)}th.push(j);tp=j});
 const d=new V3(.85,-.12,.75).normalize();const W=new V3(0,0,.048);const q=new THREE.Quaternion().setFromUnitVectors(new V3(0,1,0),d);
 const seg=(r1,r2,len,at,m)=>{const o=mesh(new THREE.CylinderGeometry(r1,r2,len,24,1,true),m);o.quaternion.copy(q);o.position.copy(W.clone().add(d.clone().multiplyScalar(at+len/2)));inner.add(o);return o};
 const wb=mesh(new THREE.SphereGeometry(1,20,14),mat,0,0,.04);wb.scale.set(.034,.015,.022);inner.add(wb);seg(.03,.035,.06,-.005,mat);
 const bq=q.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI/2,0,0)));
 const bead=mesh(new THREE.TorusGeometry(.036,.0035,8,28),mat);bead.quaternion.copy(bq);bead.position.copy(W.clone().add(d.clone().multiplyScalar(.055)));inner.add(bead);
 const coat=new THREE.MeshStandardMaterial({color:0xf6f6f3,roughness:.92,side:THREE.DoubleSide});seg(.043,.047,.07,.045,coat);const fold=mesh(new THREE.TorusGeometry(.044,.005,8,30),coat);fold.quaternion.copy(bq);fold.position.copy(W.clone().add(d.clone().multiplyScalar(.046)));inner.add(fold);seg(.047,.055,.32,.115,coat);
 g.userData={fingers,thumb:th,mat,g:0,idle:true,left};g.traverse(m=>{if(m.isMesh)m.castShadow=true});return g;}
function setGrip(tt,point,H){H=H||HAND;H.userData.g=tt;H.userData.fingers.forEach((js,i)=>{const v=(point&&i===0)?0.04:tt;js[0].rotation.x=-v*.9-.08;js[1].rotation.x=-v*1.2-.06;js[2].rotation.x=-v*.85-.04});const th=H.userData.thumb;th[0].rotation.y=-tt*.25;th[1].rotation.x=-.1-tt*.5;th[2].rotation.x=-.05-tt*.5;}
function restPos(left){const f=new V3(Math.sin(LOOK.yaw),0,-Math.cos(LOOK.yaw));const r=new V3(Math.cos(LOOK.yaw),0,Math.sin(LOOK.yaw));return cam.position.clone().add(f.multiplyScalar(.32)).add(r.multiplyScalar(left?-.46:.46)).add(new V3(0,-.64,0));}
function buildHands(){HAND=makeHand(false);HANDL=makeHand(true);labScene.add(HAND);labScene.add(HANDL);setGrip(.25,false,HAND);setGrip(.3,false,HANDL);}
async function handTo(p,d,arc,H){H=H||HAND;H.userData.idle=false;d=d||600;arc=arc==null?.05:arc;const p0=H.position.clone();const r0=H.rotation.y;await tw(d,k=>{const e=ease(k);H.position.lerpVectors(p0,p,e);H.position.y+=Math.sin(e*Math.PI)*arc;H.rotation.y=r0*(1-e)});}
async function gripTo(v,point,d,H){H=H||HAND;const a=H.userData.g;await tw(d||200,k=>setGrip(a+(v-a)*k,point,H));}
async function rotHand(z,d){const a=HAND.rotation.z;await tw(d||420,k=>{HAND.rotation.z=a+(z-a)*ease(k)});}
async function goRest(H){H=H||HAND;await gripTo(H===HANDL?.3:.25,false,200,H);const p=restPos(H===HANDL);await handTo(p,500,.04,H);H.userData.idle=true;}
function bbOf(o){const hid=[];o.traverse(c=>{if(c.isSprite&&c.visible){c.visible=false;hid.push(c)}});o.updateWorldMatrix(true,true);const bb=new THREE.Box3().setFromObject(o);hid.forEach(c=>c.visible=true);return bb;}
function wp(o){o.updateWorldMatrix(true,false);return o.getWorldPosition(new V3());}
async function pickUp(o,fast){const bb=bbOf(o),c=bb.getCenter(new V3());const top=new V3(c.x+.02,bb.max.y+.03,c.z+.05);await gripTo(0,false,150);await handTo(top.clone().add(new V3(0,.12,0)),fast?320:550);await handTo(top,fast?150:230,0);await gripTo(1,false,180);
 o.userData.hp=o.parent;o.userData.hpos=o.position.clone();o.userData.hrot=o.rotation.clone();HAND.attach(o);await handTo(top.clone().add(new V3(0,.16,0)),fast?180:280,0);}
async function putBack(o){await rotHand(0,280);const hp=o.userData.hp;hp.updateWorldMatrix(true,false);const tg=hp.localToWorld(o.userData.hpos.clone());const off=HAND.position.clone().sub(wp(o));
 await handTo(tg.clone().add(off).add(new V3(0,.12,0)),500);await handTo(tg.clone().add(off),220,0);hp.attach(o);o.position.copy(o.userData.hpos);o.rotation.copy(o.userData.hrot);await gripTo(.1,false,150);await handTo(HAND.position.clone().add(new V3(0,.12,0)),220,0);}
async function steady(dst){const bb=bbOf(dst),c=bb.getCenter(new V3());const p=new V3(bb.min.x-.07,c.y+.04,c.z+.07);await handTo(p,550,.05,HANDL);await gripTo(.8,false,180,HANDL);}
async function unsteady(){await goRest(HANDL);}
function topY(v){return bbOf(v).max.y;}
function liqY(v){const u=v.userData;const b=wp(v).y;return b+Math.max(.02,(u.level||0)*(u.h||.2));}
async function actPour(src,dst,eff){const bb=bbOf(dst),c=bb.getCenter(new V3());const sd=steady(dst);await handTo(new V3(c.x+.07,bb.max.y+.1,c.z+.05),550);await sd;await rotHand(1.6,480);
 const m=HAND.position.clone().add(new V3(-.04,-.03,-.03));const ly=liqY(dst);const hh=Math.max(.04,m.y-ly);const lc=src.userData.lm?src.userData.lm.color:col('#cfe8ff');
 const sm=mesh(new THREE.CylinderGeometry(.005,.008,hh,10),new THREE.MeshStandardMaterial({color:lc,transparent:true,opacity:.8,roughness:.1}),m.x,m.y-hh/2,m.z);labScene.add(sm);sfx('pour',1.1);
 await wait(500);eff&&eff();await wait(500);labScene.remove(sm);await rotHand(0,380);unsteady();}
async function actDrop(pip,dst,eff,n){const tipDown=HAND.position.y-bbOf(pip).min.y;const bb=bbOf(dst),c=bb.getCenter(new V3());const sd=steady(dst);await handTo(new V3(c.x+.03,bb.max.y+tipDown+.04,c.z+.05),550);await sd;
 const cc=col(pip.userData.drop||'#ffffff');n=n||2;for(let i=0;i<n;i++){await gripTo(1.35,false,120);const tip=new V3(HAND.position.x-.03,HAND.position.y-tipDown,HAND.position.z-.05);
  const dr=mesh(new THREE.SphereGeometry(.007,10,8),new THREE.MeshStandardMaterial({color:cc,roughness:.1}),tip.x,tip.y,tip.z);dr.scale.y=1.3;labScene.add(dr);const ly=liqY(dst);await gripTo(1,false,120);
  await tw(320,k=>{dr.position.y=tip.y-(tip.y-ly)*k*k});labScene.remove(dr);sfx('drip');if(i===0)eff&&eff();await wait(200);}unsteady();}
async function actSolid(jar,dst,eff){setTimeout(()=>sfx('rattle'),1100);const bb=bbOf(dst),c=bb.getCenter(new V3());const sd=steady(dst);await handTo(new V3(c.x+.09,bb.max.y+.09,c.z+.05),550);await sd;await rotHand(1.25,450);
 const from=wp(jar.userData.pile);const ly=liqY(dst);const bits=[];for(let i=0;i<8;i++){const k=mesh(new THREE.DodecahedronGeometry(.008,0),std(col(jar.userData.sc)),from.x-.05+Math.random()*.02,from.y,from.z+(Math.random()-.5)*.02);labScene.add(k);bits.push(k)}
 await tw(520,k=>bits.forEach((b,i)=>{b.position.y=from.y-(from.y-ly)*Math.min(1,k*k*(1+i*.06));b.position.x=from.x-.05+(c.x-from.x+.05)*k}));bits.forEach(b=>labScene.remove(b));eff&&eff();await rotHand(0,350);unsteady();}
async function actHeat(tube,lamp,eff){const lb=bbOf(lamp),lc=lb.getCenter(new V3());const tb=bbOf(tube);const down=HAND.position.y-tb.min.y;await handTo(new V3(lc.x+.02,lb.max.y+down+.0,lc.z+.05),600);
 await rotHand(.35,300);eff&&eff();await wait(1800);await rotHand(0,300);}
async function actFlame(wire,lamp,eff){const lb=bbOf(lamp),lc=lb.getCenter(new V3());const tip=wp(wire.children[2]);const off=HAND.position.clone().sub(tip);await handTo(new V3(lc.x,lb.max.y-.03,lc.z).add(off),650);eff&&eff();await wait(1800);}
async function actIgnite(sp,dst,eff,out){const bb=bbOf(dst),c=bb.getCenter(new V3());const tip=wp(sp.userData.tip);const off=HAND.position.clone().sub(tip);await handTo(new V3(c.x,bb.max.y+.005,c.z).add(off),650);await wait(200);eff&&eff();if(out){sp.userData.fl.visible=false;sp.userData.tip.material.color.set(0x5d4037);setTimeout(()=>{sp.userData.fl.visible=true;sp.userData.tip.material.color.set(0xff7043)},3500)}await wait(900);}

/* ---------- ӘСЕРЛЕР (реакция нәтижелері) ---------- */
function puffs(v,c,dur){const u=v.userData;u.gasC=col(c);u.gasT=dur||5;u.gas.forEach(s=>s.material.color.copy(u.gasC));}
function applyFx(v,fx,lampObj){if(!fx)return;const u=v.userData;
 if(fx.c){const from=u.lm.color.clone(),to=col(fx.c);tween(900,k=>u.lm.color.copy(from).lerp(to,k));}
 if(fx.l!=null&&u.kind!=='lamp'){const a=u.level,b=fx.l;tween(600,k=>setLevel(v,a+(b-a)*k));}
 if(fx.p){u.pm.color.copy(col(fx.p));const cl=u.lm.color.clone();u.lm.opacity=.95;tween(700,k=>u.lm.color.copy(cl).lerp(col(fx.p),k*.6));setTimeout(()=>{tween(1500,k=>{setPpt(v,.04+k*.07);u.lm.color.copy(cl).lerp(col(fx.p),.6*(1-k)+.1);u.lm.opacity=.95-.17*k})},900);}
 if(fx.b){u.bubT=fx.b===true?6:fx.b;}
 if(fx.g){puffs(v,fx.g,fx.gt||6);}
 if(fx.s)addSolid(v,fx.s);
 if(fx.dis)tween(2500,k=>u.sol.children.forEach(c=>c.scale.setScalar(Math.max(.01,1-k))));
 if(fx.mir){const m=new THREE.MeshStandardMaterial({color:col(fx.mir),metalness:1,roughness:.08});const sl=mesh(new THREE.CylinderGeometry(u.r*1.02,u.r*1.02,u.h*.45,24,1,true),m,0,u.h*.3,0);sl.material.transparent=true;sl.material.opacity=0;v.add(sl);tween(2000,k=>sl.material.opacity=k*.95);}
 if(fx.pop){const fl=mesh(new THREE.SphereGeometry(.03,12,8),new THREE.MeshBasicMaterial({color:0xfff176,transparent:true,opacity:.9}),0,u.h+.02,0);v.add(fl);tween(400,k=>{fl.scale.setScalar(1+k*2.5);fl.material.opacity=.9*(1-k)},()=>v.remove(fl));}
 if(fx.pd){const a=u.ppt;setTimeout(()=>tween(1600,k=>{setPpt(v,a*(1-k));u.lm.opacity=.78}),300);}
 if(fx.pc){setTimeout(()=>{const a=u.pm.color.clone(),b=col(fx.pc);tween(2500,k=>u.pm.color.copy(a).lerp(b,k))},fx.pcd||2600);}
 if(fx.seq){fx.seq.forEach((c,i)=>setTimeout(()=>{const a=u.lm.color.clone(),b=col(c);tween(900,k=>u.lm.color.copy(a).lerp(b,k))},1400*(i+1)));}
 if(fx.sm)puffs(v,'#f5f5f5',4);
 if(fx.glow){const gl=new THREE.PointLight(col(fx.glow),.8,.5);gl.position.y=u.r*2;v.add(gl);const gm=mesh(new THREE.SphereGeometry(u.r*.8,12,8),new THREE.MeshBasicMaterial({color:col(fx.glow),transparent:true,opacity:.7}),0,u.r*1.5,0);v.add(gm);tween(2500,k=>{gm.material.opacity=.7*(1-k);gl.intensity=.8*(1-k)},()=>{v.remove(gm);v.remove(gl)});}
}
function lampColor(l,c,dur){const u=l.userData;const tc=col(c);u.fm.color.copy(tc);u.pl.color.copy(tc);u.f1.scale.set(1.4,1.3,1.4);setTimeout(()=>{u.fm.color.copy(u.base);u.pl.color.set(0xffa040);u.f1.scale.set(1,1,1)},(dur||4)*1000);}

/* ---------- НҰСҚАУ ЖЕБЕСІ ---------- */
let hintArrow,hintRing,hintArrow2;
function buildHint(){hintArrow=mesh(new THREE.ConeGeometry(.035,.09,20),new THREE.MeshBasicMaterial({color:0x3ddc97}));hintArrow.rotation.x=Math.PI;labScene.add(hintArrow);
 hintArrow2=mesh(new THREE.ConeGeometry(.035,.09,20),new THREE.MeshBasicMaterial({color:0xffc83d}));hintArrow2.rotation.x=Math.PI;labScene.add(hintArrow2);
 hintRing=mesh(new THREE.RingGeometry(.1,.125,40),new THREE.MeshBasicMaterial({color:0x3ddc97,side:THREE.DoubleSide,transparent:true,opacity:.9}));hintRing.rotation.x=-Math.PI/2;labScene.add(hintRing);hideHint();}
function hideHint(){hintArrow.visible=hintArrow2.visible=hintRing.visible=false;}
function showHint(src,dst){hideHint();if(src){const bb=bbOf(src),c=bb.getCenter(new V3());hintArrow.userData.base=new V3(c.x,bb.max.y+.07,c.z);hintRing.position.set(c.x,BENCH_Y+.003,c.z);const r=Math.max(bb.max.x-bb.min.x,bb.max.z-bb.min.z)/2+.03;hintRing.scale.setScalar(r/.11);hintArrow.visible=hintRing.visible=true;}
 if(dst){const bb=bbOf(dst),c=bb.getCenter(new V3());hintArrow2.userData.base=new V3(c.x,bb.max.y+.07,c.z);hintArrow2.visible=true;}}

/* =====================================================================
   КАМЕРА
   ===================================================================== */
const LOOK={yaw:0,pitch:-.4};let DEF_PITCH=Math.atan2(1.0-1.5,0.9);
const HOMECAM={pos:new V3(0,2.1,5.6),look:new V3(0,1.7,-1.6)};
function setCamHome(pos,look,d){const p0=HOMECAM.pos.clone(),l0=HOMECAM.look.clone();tween(d||800,k=>{const e=ease(k);HOMECAM.pos.lerpVectors(p0,pos,e);HOMECAM.look.lerpVectors(l0,look,e)});}
let insetTop=60,insetBot=0;
function resize(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);cam.aspect=w/h;
 if(mode==='lab'){const a=w/h;const hf=66*Math.PI/180;cam.fov=Math.min(100,2*Math.atan(Math.tan(hf/2)/a)*180/Math.PI);cam.fov=Math.max(58,cam.fov);}else cam.fov=50;
 const d=insetTop-insetBot;cam.setViewOffset(w,h+Math.abs(d),0,d>0?0:-d,w,h);cam.updateProjectionMatrix();}
function measure(){document.body.dataset.mode=mode;{const a=innerWidth/innerHeight;const k=a<1.25?Math.min(1,(1.25-a)/.8):0;const w=a>1.9||innerHeight<480?1:0;CAMPOS.set(0,CAM0.y+.24*k+.22*w,CAM0.z+.42*k+.38*w);DEF_PITCH=Math.atan2(1.0-CAMPOS.y,CAMPOS.z-.1);}if(mode==='home'){insetTop=64;insetBot=$('homeUI').offsetHeight}else if(mode==='lab'){insetTop=$('labUI').offsetHeight*.6;insetBot=0}else{insetTop=insetBot=0}resize();}
addEventListener('resize',()=>{measure();if(mode==='home')homeCam(true)});
function portraitK(){const a=innerWidth/innerHeight;return a<1?Math.min(2.4,1.05/a):1;}
let sel=0,zoomed=false;
function homeCam(instant){const k=portraitK();let pos,look;if(!zoomed){const kk=innerWidth<innerHeight?Math.min(3.2,1.35*innerHeight/innerWidth):1;pos=new V3(0,2.65+(kk-1)*.5,6.3*kk);look=new V3(0,2.4,-1.6)}else{const b=books[sel];const x=b.userData.x;pos=new V3(x*.9,1.55,-1.25+1.7*k);look=new V3(x,1.3,-1.25)}
 if(instant){HOMECAM.pos.copy(pos);HOMECAM.look.copy(look)}else setCamHome(pos,look);}
async function recenter(){const y0=LOOK.yaw,p0=LOOK.pitch;let y1=0;if(Math.abs(y0)<.02&&Math.abs(p0-DEF_PITCH)<.02)return;const tgt=Math.round(y0/(Math.PI*2))*Math.PI*2;await tw(450,k=>{const e=ease(k);LOOK.yaw=y0+(tgt-y0)*e;LOOK.pitch=p0+(DEF_PITCH-p0)*e});LOOK.yaw=0;}

/* =====================================================================
   НЕГІЗГІ UI
   ===================================================================== */
function renderTabs(){$('tabs').innerHTML=TOP.map((T,i)=>`<button class="tab ${i===sel?'on':''}" data-i="${i}"><span class="dot" style="background:${T.color}"></span>${LANG==='kk'?T.n+'-апта':'Нед. '+T.n} · ${esc(T.sym)}</button>`).join('');
 $('tabs').querySelectorAll('.tab').forEach(b=>b.onclick=()=>select(+b.dataset.i,true));const on=$('tabs').querySelector('.on');on&&on.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});}
function renderCard(){const T=TOP[sel];$('cKick').textContent=(LANG==='kk'?T.n+'-апта':'Неделя '+T.n)+' · '+tr(T.group||'');$('cKick').style.color=T.color;$('card').style.borderTopColor=T.color;$('cTitle').textContent=tr(T.title);
 const p=topicPct(sel);$('prog').querySelector('i').style.width=p+'%';$('pct').textContent=p+'%';$('aLabS').textContent=(T.labs||[]).length+' '+t('exps');measure();}
function select(i,zoom){sel=i;zoomed=!!zoom;renderTabs();renderCard();books.forEach((b,j)=>{const up=zoomed&&j===i;const y0=b.position.y,y1=b.userData.baseY+(up?.1:0);tween(450,k=>{b.position.y=y0+(y1-y0)*k})});
 const ring=homeScene.userData.ring;ring.visible=zoomed;ring.position.x=books[i].userData.x;homeCam();}
function relang(l){LANG=l;try{localStorage.setItem('cl3d_lang',l)}catch(e){}applyStatic();
 if(boardTex){redraw(boardTex);books.forEach(b=>redraw(b.userData.tex));}if(mode!=='login'){renderTabs();renderCard();}
 if(!$('readP').classList.contains('hidden'))openRead(sel,curRTab);if(!$('gameP').classList.contains('hidden'))gameHome();if(mode==='lab'&&EX)refreshLabTexts();renderAiSug();}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>relang(b.dataset.l));
$('aRead').onclick=()=>openRead(sel,'lec');$('aLab').onclick=()=>enterLab(sel,firstUndone(sel));$('aGame').onclick=()=>openGames(sel);
function firstUndone(i){const n=(TOP[i].labs||[]).length;const d=PR.lab[TOP[i].n]||[];for(let k=0;k<n;k++)if(d[k]==null)return k;return 0;}

/* ---------- toast, modal ---------- */
let toT;function toast(s,info,ms){const e=$('toast');e.innerHTML=s;e.classList.toggle('info',!!info);e.classList.remove('off');clearTimeout(toT);toT=setTimeout(()=>e.classList.add('off'),ms||2600);}
function modal(h){$('dk').innerHTML=h;$('ov').classList.remove('hidden');}
function closeModal(){$('ov').classList.add('hidden');}

/* =====================================================================
   ОҚУ (лекция, инфографика, 3D, практика)
   ===================================================================== */
let curRTab='lec';
function openRead(i,tab){sel=i;curRTab=tab||'lec';const T=TOP[i];$('readP').classList.remove('hidden');$('readP').style.setProperty('--tc',T.color);
 $('rTitle').innerHTML=`<small>${LANG==='kk'?T.n+'-апта':'Неделя '+T.n} · ${esc(tr(T.group||''))}</small>${esc(tr(T.title))}`;
 const tabs=[['lec','tLec'],['pos','tPos'],['m3d','t3d'],['pr','tPr']];$('rTabs').innerHTML=tabs.map(([k,l])=>`<button data-k="${k}" class="${k===curRTab?'on':''}">${t(l)}</button>`).join('');
 $('rTabs').querySelectorAll('button').forEach(b=>b.onclick=()=>openRead(i,b.dataset.k));
 const B=$('rBody');B.parentElement.parentElement.scrollTop=0;stopMV();
 if(curRTab==='lec'){let h='';
  if(T.cards)h+=`<div class="cards">${T.cards.map(c=>`<div class="ecard" style="background:${c.bg||T.color}"><div class="z">Z = ${c.z}</div><div class="s">${esc(c.el)}</div><div class="n">${esc(tr(c.name))}</div><div class="d">${esc(c.cfg)}<br>${t('ox')}: ${esc(c.ox)}${c.en?'<br>'+t('en')+': '+c.en:''}</div></div>`).join('')}</div>`;
  (T.lecture||[]).forEach((s,k)=>{h+=`<div class="sec"><h3><b>${k+1}</b>${esc(tr(s.h))}</h3>${tr(s.p).split('\n').map(p=>`<p>${esc(p)}</p>`).join('')}${s.eq&&s.eq.length?`<div class="eqs">${s.eq.map(e=>`<div class="eq">${esc(e)}</div>`).join('')}</div>`:''}</div>`;});
  B.innerHTML=h;if(!PR.read[T.n]){PR.read[T.n]=1;savePR();}}
 else if(curRTab==='pos'){let h=`<div class="ptitle"><h3>${esc(tr(T.title))}</h3><p>${esc(tr(T.group||''))}</p></div>`;
  if(T.trends)h+=`<div class="trend"><h4>📈 ${t('trends')}</h4>${T.trends.map(x=>`<div class="tr"><span class="ar">${x[0]}</span><span>${esc(tr(x[1]))}</span></div>`).join('')}</div>`;
  const pal=['#2e7de0','#e0533d','#2aa84f','#6a3fd6','#e08a1e','#1a9aa0','#c2185b','#5d4037'];
  h+=`<div class="poster">${(T.poster||[]).map((p,k)=>`<div class="pcard" style="background:linear-gradient(135deg,${pal[k%pal.length]},${pal[(k+3)%pal.length]})"><div class="i">${p.i}</div><h4>${esc(tr(p.h))}</h4><p>${esc(tr(p.t))}</p></div>`).join('')}</div>`;B.innerHTML=h;}
 else if(curRTab==='m3d'){const ms=T.models||[];B.innerHTML=`<canvas id="mv"></canvas><div class="mlist">${ms.map((m,k)=>`<button data-k="${k}">${esc(m.f)}</button>`).join('')}</div><div class="legend" id="mleg"></div><div class="mdesc" id="mdesc"></div><p style="font-size:12px;color:#6b7385;font-weight:700;margin-top:8px">${t('drag3d')}</p>`;
  B.querySelectorAll('.mlist button').forEach(b=>b.onclick=()=>showModel(T,+b.dataset.k));if(ms.length)showModel(T,0);}
 else{let h='';(T.practice||[]).forEach(m=>{h+=`<div class="mech"><h3>⚙️ ${esc(tr(m.h))}</h3>${(m.steps||[]).map((s,k)=>`<div class="step"><b>${k+1}</b><span>${esc(tr(s))}</span></div>`).join('')}${m.eq?`<div class="eqs">${[].concat(m.eq).map(e=>`<div class="eq">${esc(e)}</div>`).join('')}</div>`:''}</div>`});B.innerHTML=h;}}
$('rBack').onclick=()=>{$('readP').classList.add('hidden');stopMV();renderCard();};

/* ---------- 3D молекула көрсеткіші ---------- */
const CPK={H:'#ffffff',O:'#ff3b30',N:'#3050f8',C:'#444444',S:'#ffd23f',Cl:'#1ff01f',F:'#90e050',Br:'#a62929',I:'#940094',P:'#ff8000',Si:'#d4b483',B:'#ffb5b5',Al:'#bfa6a6',Na:'#ab5cf2',K:'#8f40d4',Li:'#cc80ff',Mg:'#8aff00',Ca:'#3dff00',Ba:'#00c900',Be:'#c2ff00',Sr:'#00ff00',Fe:'#e06633',Co:'#f090a0',Ni:'#50d050',Mn:'#9c7ac7',Cr:'#8a99c7',Mo:'#54b5b5',W:'#2194d6',V:'#a6a6ab',Ti:'#bfc2c7',Zr:'#94e0e0',Sc:'#e6e6e6',Y:'#94ffff',La:'#70d4ff',Zn:'#7d80b0',Cd:'#ffd98f',Hg:'#b8b8d0',Cu:'#c88033',Ag:'#c0c0c0',Au:'#ffd123',Pb:'#575961',Sn:'#668080',Ge:'#668f8f',Se:'#ffa100',Te:'#d47a00',As:'#bd80e3',Xe:'#429eb0',Ga:'#c28f8f',Cs:'#57178f',Rb:'#702eb0',Nb:'#73c2c9',Ta:'#4da6ff',Hf:'#4dc2ff',Re:'#267dab',Tc:'#3b9e9e',X:'#ff66cc'};
const RAD={H:.28,O:.4,N:.42,C:.42,F:.38,Cl:.5,Br:.56,I:.62,S:.5,P:.52,Si:.55,B:.42,Se:.55,Te:.62};
let MV=null;
function stopMV(){if(MV){MV.stop=true;}}
function ensureMV(){const cv=$('mv');if(!cv)return null;const r=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio,2));r.outputEncoding=THREE.sRGBEncoding;
 const sc=new THREE.Scene();sc.environment=ENV;sc.add(new THREE.HemisphereLight(0xffffff,0x444455,.6));const dl=new THREE.DirectionalLight(0xffffff,.9);dl.position.set(3,4,5);sc.add(dl);
 const c=new THREE.PerspectiveCamera(40,1,.1,100);c.position.set(0,0,7);const grp=new THREE.Group();sc.add(grp);
 const st={r,sc,c,grp,stop:false,rx:.3,ry:0,dist:7,auto:true};let dr=null,pinch=null;
 cv.onpointerdown=e=>{dr={x:e.clientX,y:e.clientY,rx:st.rx,ry:st.ry};st.auto=false;cv.setPointerCapture(e.pointerId)};cv.onpointermove=e=>{if(!dr)return;st.ry=dr.ry+(e.clientX-dr.x)*.01;st.rx=Math.max(-1.4,Math.min(1.4,dr.rx+(e.clientY-dr.y)*.01))};cv.onpointerup=()=>dr=null;
 cv.onwheel=e=>{e.preventDefault();st.dist=Math.max(3,Math.min(18,st.dist+e.deltaY*.01))};
 cv.addEventListener('touchmove',e=>{if(e.touches.length===2){const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);if(pinch)st.dist=Math.max(3,Math.min(18,st.dist*pinch/d));pinch=d}},{passive:true});cv.addEventListener('touchend',()=>pinch=null);
 const loop=()=>{if(st.stop){r.dispose();return}requestAnimationFrame(loop);const w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==Math.floor(w*r.getPixelRatio())){r.setSize(w,h,false);c.aspect=w/h;c.updateProjectionMatrix()}
  if(st.auto)st.ry+=.006;grp.rotation.set(st.rx,st.ry,0);c.position.set(0,0,st.dist);c.lookAt(0,0,0);r.render(sc,c)};loop();return st;}
function geoPositions(m){const A=[],B=[];const L=m.l||[];const c=m.c;const d=m.len||1.5;const add=(el,x,y,z)=>{A.push([el,x,y,z]);return A.length-1};
 const lig=(el,v,ci,ord)=>{const grp={NH3:['N',['H','H','H']],H2O:['O',['H','H']],CN:['C',['N']],CO:['C',['O']],OH:['O',['H']],SCN:['N',['C','S']]}[el];
  if(!grp){const j=add(el,v.x*d,v.y*d,v.z*d);B.push([ci,j,ord||1]);return}
  const j=add(grp[0],v.x*d,v.y*d,v.z*d);B.push([ci,j,1]);const out=v.clone().normalize();let perp=new V3(0,1,0);if(Math.abs(out.y)>.9)perp=new V3(1,0,0);const p1=new V3().crossVectors(out,perp).normalize();const p2=new V3().crossVectors(out,p1).normalize();
  if(grp[1].length===1||el==='SCN'){let prev=j;grp[1].forEach((e2,q)=>{const k=add(e2,v.x*d+out.x*1.2*(q+1),v.y*d+out.y*1.2*(q+1),v.z*d+out.z*1.2*(q+1));B.push([prev,k,el==='CN'?3:(el==='CO'?3:(el==='SCN'?2:1))]);prev=k});return}
  grp[1].forEach((e2,q)=>{const a=q/grp[1].length*Math.PI*2;const off=out.clone().multiplyScalar(.45).add(p1.clone().multiplyScalar(Math.cos(a)*.85)).add(p2.clone().multiplyScalar(Math.sin(a)*.85));const k=add(e2,v.x*d+off.x,v.y*d+off.y,v.z*d+off.z);B.push([j,k,1])});};
 const dirs={linear:[[1,0,0],[-1,0,0]],trig:[[1,0,0],[-.5,.866,0],[-.5,-.866,0]],tetra:[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]],oct:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],sqpl:[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],
  tbp:[[0,1,0],[0,-1,0],[1,0,0],[-.5,0,.866],[-.5,0,-.866]],pyr:[[.94,-.33,0],[-.47,-.33,.82],[-.47,-.33,-.82]],seesaw:[[0,1,0],[0,-1,0],[.94,-.33,0],[-.47,-.33,.82]],tshape:[[0,1,0],[0,-1,0],[1,0,0]]};
 const g=m.geo;
 if(g==='custom'){return{A:m.atoms,B:m.bonds||[]}}
 if(g==='diatomic'){add(c,-d/2,0,0);add(L[0]||c,d/2,0,0);B.push([0,1,m.b||1]);return{A,B}}
 if(g==='bent'){const ci=add(c,0,0,0);const ang=(m.ang||104.5)*Math.PI/180/2;lig(L[0],new V3(Math.sin(ang),-Math.cos(ang),0),ci,(m.bo||[])[0]);lig(L[1]||L[0],new V3(-Math.sin(ang),-Math.cos(ang),0),ci,(m.bo||[])[1]);return{A,B,lp:m.lp}}
 if(dirs[g]){const ci=add(c,0,0,0);dirs[g].forEach((v,k)=>{const vv=new V3(...v).normalize();lig(L[k]||L[0],vv,ci,(m.bo||[])[k]||m.b||1)});return{A,B,lp:m.lp}}
 if(g==='ring'){const n=m.n||8;for(let k=0;k<n;k++){const a=k/n*Math.PI*2;add(c,Math.cos(a)*1.9,(k%2?.45:-.45)*(m.pucker==null?1:m.pucker),Math.sin(a)*1.9)}for(let k=0;k<n;k++)B.push([k,(k+1)%n,1]);return{A,B}}
 if(g==='p4'){const v=[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]];v.forEach(p=>add(c,p[0]*.8,p[1]*.8,p[2]*.8));for(let a=0;a<4;a++)for(let b=a+1;b<4;b++)B.push([a,b,1]);return{A,B}}
 if(g==='nacl'){const a2=L[0]||'Cl';for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++)add(((x+y+z)&1)?c:a2,x*1.4,y*1.4,z*1.4);for(let i=0;i<A.length;i++)for(let j=i+1;j<A.length;j++){const dd=Math.hypot(A[i][1]-A[j][1],A[i][2]-A[j][2],A[i][3]-A[j][3]);if(dd<1.5)B.push([i,j,1])}return{A,B,ionic:1}}
 if(g==='bcc'||g==='fcc'){const s=1.6;for(let x=0;x<2;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++)add(c,(x-.5)*s*2,(y-.5)*s*2,(z-.5)*s*2);if(g==='bcc')add(c,0,0,0);else{[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].forEach(p=>add(c,p[0]*s,p[1]*s,p[2]*s))}
  const E=[];for(let i=0;i<8;i++)for(let j=i+1;j<8;j++){const dd=Math.hypot(A[i][1]-A[j][1],A[i][2]-A[j][2],A[i][3]-A[j][3]);if(Math.abs(dd-s*2)<.01)E.push([i,j,0])}return{A,B:E,cell:1,metal:1}}
 if(g==='diamond'){const p=[[0,0,0],[0,2,2],[2,0,2],[2,2,0],[1,1,1],[1,3,3],[3,1,3],[3,3,1]];p.forEach((q,i)=>add(i>=4&&L[0]?L[0]:c,(q[0]-1.5)*.9,(q[1]-1.5)*.9,(q[2]-1.5)*.9));for(let i=0;i<A.length;i++)for(let j=i+1;j<A.length;j++){const dd=Math.hypot(A[i][1]-A[j][1],A[i][2]-A[j][2],A[i][3]-A[j][3]);if(dd<1.6)B.push([i,j,1])}
  if(L[0]){const n=A.length;for(let i=0;i<n;i++)for(let j=i+1;j<n;j++){const dd=Math.hypot(A[i][1]-A[j][1],A[i][2]-A[j][2],A[i][3]-A[j][3]);if(dd<1.6){/* SiO2: O bridges */}}}return{A,B}}
 return{A,B};}
function showModel(T,k){const m=(T.models||[])[k];if(!m)return;document.querySelectorAll('.mlist button').forEach((b,i)=>b.classList.toggle('on',i===k));if(!MV||MV.stop)MV=ensureMV();if(!MV)return;
 const grp=MV.grp;while(grp.children.length)grp.remove(grp.children[0]);const G=geoPositions(m);const els=new Set();
 const pos=G.A.map(a=>new V3(a[1],a[2],a[3]));const cen=pos.reduce((s,p)=>s.add(p),new V3()).multiplyScalar(1/Math.max(1,pos.length));pos.forEach(p=>p.sub(cen));
 let maxR=1;pos.forEach(p=>maxR=Math.max(maxR,p.length()));MV.dist=Math.max(5,maxR*3.4);
 G.A.forEach((a,i)=>{els.add(a[0]);const r=(G.metal?.55:(RAD[a[0]]||.6))*(G.ionic?1.15:1);grp.add(mesh(new THREE.SphereGeometry(r,32,24),new THREE.MeshPhysicalMaterial({color:col(CPK[a[0]]||'#ff66cc'),roughness:.25,clearcoat:.6}),pos[i].x,pos[i].y,pos[i].z))});
 const bm=new THREE.MeshStandardMaterial({color:0xb0b8c4,roughness:.4,metalness:.2});
 (G.B||[]).forEach(([i,j,o])=>{const a=pos[i],b=pos[j];const dvec=b.clone().sub(a);const len=dvec.length();const mid=a.clone().add(b).multiplyScalar(.5);const q=new THREE.Quaternion().setFromUnitVectors(new V3(0,1,0),dvec.clone().normalize());
  const n=o===0?1:(o||1);const perp=new V3().crossVectors(dvec,new V3(0,0,1));if(perp.length()<.01)perp.set(1,0,0);perp.normalize();
  for(let k=0;k<n;k++){const off=perp.clone().multiplyScalar((k-(n-1)/2)*.16);const cy=mesh(new THREE.CylinderGeometry(o===0?.03:(n>1?.06:.09),o===0?.03:(n>1?.06:.09),len,12),o===0?new THREE.MeshBasicMaterial({color:0x9aa4b2}):bm);cy.quaternion.copy(q);cy.position.copy(mid).add(off);grp.add(cy)}});
 if(G.lp){const lpm=new THREE.MeshStandardMaterial({color:0xffe082,transparent:true,opacity:.35});[].concat(G.lp).forEach(v=>{const lo=mesh(new THREE.SphereGeometry(.45,20,14),lpm);lo.scale.set(.7,1.2,.7);const vv=new V3(...v).normalize();lo.position.copy(vv.multiplyScalar(1.0)).sub(cen);lo.quaternion.setFromUnitVectors(new V3(0,1,0),new V3(...v).normalize());grp.add(lo)})}
 if(m.charge){const lb=makeLabel(m.charge,'');lb.scale.set(1.4,.47,1);lb.position.set(maxR+.6,maxR,0);grp.add(lb)}
 MV.auto=true;$('mleg').innerHTML=[...els].map(e=>`<span><i style="background:${CPK[e]||'#f6c'}"></i>${e}</span>`).join('')+(G.lp?`<span><i style="background:#ffe082"></i>${LANG==='kk'?'бөлінбеген жұп':'неподелённая пара'}</span>`:'');
 $('mdesc').innerHTML=`<b>${esc(m.f)}</b> — ${esc(tr(m.d))}`;}

/* =====================================================================
   ОЙЫН
   ===================================================================== */
let GT=null;
function openGames(i){sel=i;GT=TOP[i];$('gameP').classList.remove('hidden');$('gameP').style.setProperty('--tc',GT.color);gameHome();}
function gScore(k){return (PR.game[GT.n]||{})[k];}
function setG(k,v){PR.game[GT.n]=PR.game[GT.n]||{};const o=PR.game[GT.n][k];PR.game[GT.n][k]=o==null?v:Math.max(o,v);savePR();}
$('gBack').onclick=()=>{$('gameP').classList.add('hidden');renderCard();};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const KK=()=>LANG==='kk';
const GM={test:['📝','gTest','gTestS','#7c5cff','#38bdf8'],match:['🔗','gMatch','gMatchS','#ff6b9a','#ffa94d'],cells:['🧩','gCells','gCellsS','#22d3a6','#38bdf8'],prob:['🧮','gProb','gProbS','#ffc83d','#ff7a45']};
const GF=()=>({test:gTest,match:gMatch,cells:gCells,prob:gProb});
const starsOf=p=>p==null?0:p>=90?3:p>=70?2:p>=40?1:0;
function ring(p,sz,anim){const sw=sz>100?12:6,r=(sz-sw)/2-1,c=2*Math.PI*r,id='rg'+Math.random().toString(36).slice(2,7);
 return `<svg class="gring" width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#38bdf8"/></linearGradient></defs><circle class="bg" cx="${sz/2}" cy="${sz/2}" r="${r}" stroke-width="${sw}"/><circle class="fg" cx="${sz/2}" cy="${sz/2}" r="${r}" stroke-width="${sw}" stroke="url(#${id})" stroke-dasharray="${c}" stroke-dashoffset="${anim?c:c*(1-p/100)}" data-off="${c*(1-p/100)}" transform="rotate(-90 ${sz/2} ${sz/2})"/><text x="50%" y="50%" font-size="${sz>100?38:15}">${anim?0:p}%</text></svg>`;}
function gHead(k,i,n,hist,extra){const m=GM[k];
 return `<div class="qk"><span class="qlab">${m[0]} ${t(m[1])}</span><span class="qcnt">${Math.min(i+1,n)}<small>/${n}</small></span><span class="qsc"><b>✅ ${hist.filter(Boolean).length}</b>${extra||''}</span></div><div class="qseg">${Array.from({length:n},(_,j)=>`<i class="${j<hist.length?(hist[j]?'ok':'no'):j===i?'c':''}"></i>`).join('')}</div>`;}
function gStyle(k){const m=GM[k];$('gBody').style.setProperty('--g1',m[3]);$('gBody').style.setProperty('--g2',m[4]);}
function gFx(ok,txt){const q=document.querySelector('#gBody .qbox');if(!q)return;const d=document.createElement('div');d.className='gfx '+(ok?'ok':'no');d.textContent=txt||(ok?'+1':'✗');q.appendChild(d);setTimeout(()=>d.remove(),1150);}
function gameHome(){const T=GT,kk=KK();$('gBody').style.removeProperty('--g1');
 $('gTitle').innerHTML=`<small>${t('game')} · ${kk?T.n+'-апта':'Неделя '+T.n}</small>${esc(tr(T.title))}`;
 const items=[['test',(T.test||[]).length],['match',(T.match||[]).length],['cells',(T.cells||[]).length],['prob',(T.problems||[]).length]];
 const sc=items.map(x=>gScore(x[0])).filter(v=>v!=null),avg=sc.length?Math.round(sc.reduce((a,b)=>a+b,0)/sc.length):0,stars=items.reduce((s,x)=>s+starsOf(gScore(x[0])),0);
 $('gBody').innerHTML=`<div class="ghero"><div class="ghl"><div class="gsym">${esc(T.sym||'⚗')}</div><div><small>${kk?'Ойын аймағы':'Игровая зона'} · ${kk?T.n+'-апта':'Неделя '+T.n}</small><b>${esc(tr(T.title))}</b></div></div><div class="gstats"><div><b>${sc.length}/4</b><span>${kk?'ойын өтілді':'игр пройдено'}</span></div><div><b>⭐ ${stars}/12</b><span>${kk?'жұлдыз':'звёзд'}</span></div><div>${ring(avg,54)}<span>${kk?'орташа':'средний'}</span></div></div></div>
 <div class="ghome">${items.map(([k,n],j)=>{const m=GM[k],b=gScore(k),s=starsOf(b);return `<button class="gbtn" data-k="${k}" style="--g1:${m[3]};--g2:${m[4]};--d:${j*80}ms"><div class="gic">${m[0]}</div><div class="gplay">▶</div><b>${t(m[1])}</b><span>${t(m[2])}</span><div class="gfoot"><em class="gn">${n} ${kk?'тапсырма':'заданий'}${b!=null?' · '+t('best')+' '+b+'%':''}</em><span class="gst">${[0,1,2].map(q=>q<s?'<i>★</i>':'★').join('')}</span></div><div class="gbar"><i style="width:${b||0}%"></i></div></button>`}).join('')}</div>`;
 $('gBody').querySelectorAll('.gbtn').forEach(b=>b.onclick=()=>GF()[b.dataset.k]());}
function confetti(cv){const c=cv.getContext('2d'),W=cv.width=cv.offsetWidth*devicePixelRatio,H=cv.height=cv.offsetHeight*devicePixelRatio,cols=['#7c5cff','#38bdf8','#ffc83d','#ff6b9a','#22d3a6','#ffa94d'];
 const P=Array.from({length:140},()=>({x:W/2+(Math.random()-.5)*W*.2,y:H*.35,vx:(Math.random()-.5)*W*.02,vy:-Math.random()*H*.025-H*.005,r:(Math.random()*6+4)*devicePixelRatio,a:Math.random()*6,va:(Math.random()-.5)*.3,c:cols[Math.random()*cols.length|0]}));
 let f=0;(function step(){if(!cv.isConnected)return;c.clearRect(0,0,W,H);P.forEach(p=>{p.vy+=H*.0009;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.a+=p.va;c.save();c.translate(p.x,p.y);c.rotate(p.a);c.fillStyle=p.c;c.globalAlpha=Math.max(0,1-f/170);c.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);c.restore()});if(++f<170)requestAnimationFrame(step);else c.clearRect(0,0,W,H)})();}
function resultBox(pct,k,extra){beep('win');const prev=gScore(k);setG(k,pct);const st=starsOf(pct),kk=KK();gStyle(k);
 const msg=pct>=85?(kk?'Керемет!':'Отлично!'):pct>=60?(kk?'Жақсы нәтиже!':'Хороший результат!'):(kk?'Тағы байқап көр!':'Попробуй ещё раз!');
 $('gBody').innerHTML=`<div class="qbox gres"><canvas id="cnf"></canvas><div class="rring">${ring(pct,150,true)}</div><div class="rstars">${[0,1,2].map(j=>`<span class="${j<st?'on':''}" style="animation-delay:${.6+j*.25}s">★</span>`).join('')}</div><h3>${msg}</h3><p class="rex">${extra||''}</p>${prev!=null&&pct>prev?`<div class="rnew">🏅 ${kk?'Жаңа рекорд!':'Новый рекорд!'}</div>`:prev==null&&pct>0?`<div class="rnew">🎯 ${kk?'Алғашқы нәтиже!':'Первый результат!'}</div>`:''}<div class="rbtns"><button class="btnG" id="gAg">${t('again')}</button><button class="btnL" id="gBk">${t('back')}</button></div></div>`;
 const fg=document.querySelector('#gBody .gres .fg'),tx=document.querySelector('#gBody .gres text');
 requestAnimationFrame(()=>requestAnimationFrame(()=>{fg.style.strokeDashoffset=fg.dataset.off}));
 const t0=performance.now();(function cnt(n){const k2=Math.min(1,(n-t0)/1300),e=1-Math.pow(1-k2,3);tx.textContent=Math.round(pct*e)+'%';if(k2<1&&tx.isConnected)requestAnimationFrame(cnt)})(t0);
 if(pct>=60)setTimeout(()=>confetti($('cnf')),350);
 $('gAg').onclick=()=>GF()[k]();$('gBk').onclick=gameHome;}
function gTest(){gStyle('test');const Q=shuffle(GT.test||[]);let i=0,streak=0;const hist=[];const show=()=>{if(i>=Q.length)return resultBox(Math.round(hist.filter(Boolean).length/Q.length*100),'test',hist.filter(Boolean).length+' / '+Q.length);const q=Q[i];const ord=shuffle(q.o.map((o,k)=>k));
  $('gBody').innerHTML=`<div class="qbox">${gHead('test',i,Q.length,hist,streak>=2?`<b class="fire">🔥 ${streak}</b>`:'')}<h3>${esc(tr(q.q))}</h3><div id="op">${ord.map((k,j)=>`<button class="opt" data-k="${k}"><span class="ol">${'ABCDEF'[j]}</span><span>${esc(tr(q.o[k]))}</span></button>`).join('')}</div><div id="qx"></div></div>`;
  document.querySelectorAll('#op .opt').forEach(b=>b.onclick=()=>{const k=+b.dataset.k,ok=k===q.a;document.querySelectorAll('#op .opt').forEach(x=>{x.disabled=true;if(+x.dataset.k===q.a)x.classList.add('ok')});
   if(ok){streak++;beep('ok');gFx(true,streak>=3?'🔥 +1':'+1')}else{streak=0;b.classList.add('bad');beep('bad');gFx(false)}hist.push(ok);{const sb=document.querySelector('#gBody .qsc b');if(sb)sb.textContent='✅ '+hist.filter(Boolean).length}
   const seg=document.querySelectorAll('#gBody .qseg i')[i];if(seg)seg.className=ok?'ok':'no';
   $('qx').innerHTML=(q.e?`<div class="sol">${esc(tr(q.e))}</div>`:'')+`<button class="btnG" id="qn">${i<Q.length-1?t('next'):t('finish')}</button>`;$('qn').onclick=()=>{i++;show()}})};show();}
function gMatch(){gStyle('match');const P=GT.match||[];const L=shuffle(P.map((p,k)=>k)),Rr=shuffle(P.map((p,k)=>k));let selL=null,done=0,mis=0;const PC=['#22d3a6','#38bdf8','#a78bfa','#ffc83d','#ff6b9a','#ffa94d','#5eead4','#f472b6','#93c5fd','#bef264'];
 $('gBody').innerHTML=`<div class="qbox" style="max-width:780px"><div id="mhd"></div><p class="mhint">${t('gMatchS')} — ${KK()?'алдымен сол жақтан, сосын оң жақтан таңдаңыз':'сначала слева, затем справа'}</p><div class="mgrid"><div class="mcol" id="mL">${L.map((k,j)=>`<button class="mi" data-k="${k}" style="animation-delay:${j*40}ms">${esc(tr(P[k][0]))}</button>`).join('')}</div><div class="mcol" id="mR">${Rr.map((k,j)=>`<button class="mi" data-k="${k}" style="animation-delay:${j*40+20}ms">${esc(tr(P[k][1]))}</button>`).join('')}</div></div></div>`;
 const hist=[];const st=()=>{$('mhd').innerHTML=gHead('match',done,P.length,Array(done).fill(true),mis?`<b style="background:rgba(255,93,115,.14);color:#ff8a9a">❌ ${mis}</b>`:'')};st();
 document.querySelectorAll('#mL .mi').forEach(b=>b.onclick=()=>{if(b.classList.contains('done'))return;document.querySelectorAll('#mL .mi').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');selL=+b.dataset.k;beep('pop')});
 document.querySelectorAll('#mR .mi').forEach(b=>b.onclick=()=>{if(selL==null||b.classList.contains('done'))return;const lb=document.querySelector(`#mL .mi[data-k="${selL}"]`);
  if(+b.dataset.k===selL){const c=PC[done%PC.length];[b,lb].forEach(x=>{x.classList.add('done');x.style.setProperty('--pc',c);x.dataset.p=done+1});lb.classList.remove('sel');done++;beep('ok');gFx(true,'✓');selL=null;if(done===P.length)setTimeout(()=>resultBox(Math.max(0,Math.round((P.length-mis*.5)/P.length*100)),'match',t('matched')+' '+t('mistakes')+': '+mis),600)}
  else{mis++;beep('bad');gFx(false);b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),400)}st();});}
function gCells(){gStyle('cells');const C=GT.cells||[];let i=0;const hist=[];const show=()=>{if(i>=C.length)return resultBox(Math.round(hist.filter(Boolean).length/C.length*100),'cells',hist.filter(Boolean).length+' / '+C.length);const c=C[i];
  const parts=c.t.split(/\{([^}]*)\}/);const ans=[];let html='';parts.forEach((p,k)=>{if(k%2){ans.push(p);html+=`<span class="blank" data-b="${ans.length-1}">?</span>`}else html+=esc(p)});
  const tiles=shuffle(ans.concat(c.x||[]));const fill=ans.map(()=>null);
  $('gBody').innerHTML=`<div class="qbox">${gHead('cells',i,C.length,hist)}<h3>${esc(tr(c.q))}</h3><div class="celleq">${html}</div><p class="ctip">${t('tapTile')}</p><div class="tiles">${tiles.map((x,k)=>`<button class="tile" data-k="${k}" style="animation-delay:${k*40}ms">${esc(x)}</button>`).join('')}</div><div class="crow"><button class="btnL" id="cl">${t('clear')}</button><button class="btnG" id="cc">${t('check')}</button></div><div id="qx"></div></div>`;
  const blanks=[...document.querySelectorAll('.blank')];const tb=[...document.querySelectorAll('.tile')];
  tb.forEach(b=>b.onclick=()=>{if(b.classList.contains('used'))return;const e=fill.indexOf(null);if(e<0)return;fill[e]=+b.dataset.k;b.classList.add('used');blanks[e].textContent=tiles[+b.dataset.k];blanks[e].classList.add('fill');beep('pop')});
  blanks.forEach((bl,e)=>bl.onclick=()=>{if(fill[e]==null||$('cc').disabled)return;tb[fill[e]].classList.remove('used');fill[e]=null;bl.textContent='?';bl.classList.remove('fill')});
  $('cl').onclick=()=>{fill.forEach((f,e)=>{if(f!=null){tb[f].classList.remove('used');fill[e]=null;blanks[e].textContent='?';blanks[e].classList.remove('fill')}})};
  $('cc').onclick=()=>{if(fill.includes(null)){blanks.forEach((b,e)=>{if(fill[e]==null){b.classList.add('bad');setTimeout(()=>b.classList.remove('bad'),400)}});return}let ok=true;fill.forEach((f,e)=>{const g=tiles[f]===ans[e];blanks[e].classList.remove('fill');blanks[e].classList.add(g?'ok':'bad');if(!g)ok=false});if(ok)beep('ok');else beep('bad');gFx(ok);hist.push(ok);{const sb=document.querySelector('#gBody .qsc b');if(sb)sb.textContent='✅ '+hist.filter(Boolean).length}
   const seg=document.querySelectorAll('#gBody .qseg i')[i];if(seg)seg.className=ok?'ok':'no';
   $('cc').disabled=$('cl').disabled=true;$('qx').innerHTML=`<div class="sol">${ok?t('correct'):t('incorrect')+' '+t('rightAns')+': '+esc(c.t.replace(/[{}]/g,''))}${c.e?'\n'+esc(tr(c.e)):''}</div><button class="btnG" id="qn">${i<C.length-1?t('next'):t('finish')}</button>`;$('qn').onclick=()=>{i++;show()}};};show();}
function gProb(){gStyle('prob');const P=GT.problems||[];let i=0;const hist=[];const show=()=>{if(i>=P.length)return resultBox(Math.round(hist.filter(Boolean).length/P.length*100),'prob',hist.filter(Boolean).length+' / '+P.length);const p=P[i];
  $('gBody').innerHTML=`<div class="qbox">${gHead('prob',i,P.length,hist)}<h3>${esc(tr(p.q))}</h3><div class="numw"><input class="numin" id="na" inputmode="decimal" autocomplete="off" placeholder="${t('answer')}">${p.u?`<span>${esc(tr(p.u))}</span>`:''}</div><button class="btnG" id="nc">${t('check')}</button><div id="qx"></div></div>`;
  $('na').onkeydown=e=>{if(e.key==='Enter')$('nc').click()};
  $('nc').onclick=()=>{const v=parseFloat(String($('na').value).replace(',','.'));if(isNaN(v)){$('na').classList.add('bad');setTimeout(()=>$('na').classList.remove('bad'),400);return}const ok=Math.abs(v-p.a)<=Math.max(Math.abs(p.a)*(p.tol||.02),.0001);if(ok)beep('ok');else beep('bad');gFx(ok);hist.push(ok);{const sb=document.querySelector('#gBody .qsc b');if(sb)sb.textContent='✅ '+hist.filter(Boolean).length}$('na').classList.add(ok?'ok':'bad');$('na').disabled=true;$('nc').disabled=true;
   const seg=document.querySelectorAll('#gBody .qseg i')[i];if(seg)seg.className=ok?'ok':'no';
   $('qx').innerHTML=`<div class="sol"><b>${ok?t('correct'):t('incorrect')+' '+t('rightAns')+': '+p.a+(p.u?' '+esc(tr(p.u)):'')}</b>\n\n<b>${t('solution')}:</b>\n${esc(tr(p.s))}</div><button class="btnG" id="qn">${i<P.length-1?t('next'):t('finish')}</button>`;$('qn').onclick=()=>{i++;show()}};};show();}

/* =====================================================================
   ЗЕРТХАНА ҚОЗҒАЛТҚЫШЫ
   ===================================================================== */
let EX=null;// {ti,ei,def,objs,step,busy,log}
function enterLab(ti,ei){mode='lab';sel=ti;$('top').classList.add('hidden');$('homeUI').classList.add('hidden');$('labUI').classList.remove('hidden');$('labBottom').classList.remove('hidden');
 $('lCenter').textContent=t('center');$('lLog').textContent=t('logB');measure();LOOK.yaw=0;LOOK.pitch=DEF_PITCH;cam.position.copy(CAMPOS);loadEx(ti,ei);
 const T=TOP[ti];modal(`<div class="kick">${LANG==='kk'?T.n+'-апта':'Неделя '+T.n} · ${esc(tr(T.group||''))}</div><h2>🧪 ${t('enterLab')}</h2><p><b style="color:#fff">${esc(tr(T.title))}</b><br>${(T.labs||[]).length} ${t('labIntro')}</p><button class="btnG" id="mE">${t('go')}</button><button class="btnD" id="mH">${t('toHome')}</button>`);
 $('mE').onclick=()=>{beep('ok');showExIntro()};$('mH').onclick=()=>{closeModal();goHome()};}
function goHome(){stopSpeak();mode='home';EX=null;closeModal();hideHint();$('labUI').classList.add('hidden');$('labBottom').classList.add('hidden');$('log').classList.add('hidden');$('top').classList.remove('hidden');$('homeUI').classList.remove('hidden');measure();renderTabs();renderCard();select(sel,true);homeCam(true);}
$('lHome').onclick=goHome;$('lSnd').onclick=()=>{soundOn=!soundOn;$('lSnd').textContent=soundOn?'🔊':'🔇';if(!soundOn)stopSpeak();};
if($('lVoice'))$('lVoice').onclick=()=>{voiceOn=!voiceOn;try{localStorage.setItem('cl3d_voice',voiceOn?'1':'0')}catch(e){}$('lVoice').style.opacity=voiceOn?1:.45;if(!voiceOn)stopSpeak();else speak(LANG==='kk'?'Дауыс қосулы':'Озвучка включена')};
$('aiCfg').onclick=aiKeyDialog;$('lCenter').onclick=()=>recenter();$('lLog').onclick=()=>$('log').classList.toggle('hidden');
function itemName(o){const d=o.userData.def;if(!d)return'';if(d.k==='tube')return(LANG==='kk'?'№'+d.no+' пробирка':'пробирка №'+d.no)+(d.f?' ('+d.f+')':'');if(d.k==='lamp')return LANG==='kk'?'спирт шамы':'спиртовка';if(d.k==='splint')return LANG==='kk'?'жанып тұрған шақпақ':'горящая лучинка';if(d.k==='wire')return LANG==='kk'?'сым ілмек ('+(d.f||'')+')':'петля ('+(d.f||'')+')';return d.f||'';}
function loadEx(ti,ei){tweens.length=0;while(exGroup.children.length)exGroup.remove(exGroup.children[0]);labScene.children.filter(c=>c.userData.tmp).forEach(c=>labScene.remove(c));
 [HAND,HANDL].forEach(H=>{H.children.slice(1).forEach(c=>H.remove(c));H.rotation.set(0,0,0);H.position.copy(restPos(H===HANDL));H.userData.idle=true;});setGrip(.25,false,HAND);setGrip(.3,false,HANDL);
 const T=TOP[ti],def=T.labs[ei];EX={ti,ei,def,objs:{},step:0,busy:false,log:[],mist:0,started:false,selSrc:null};
 const items=def.set||[];const tubes=items.filter(d=>['tube','beaker','flask'].includes(d.k)),reag=items.filter(d=>['bottle','dropper'].includes(d.k)),jars=items.filter(d=>d.k==='jar'),side=items.filter(d=>['lamp','splint','wire'].includes(d.k));
 const nT=tubes.filter(d=>d.k==='tube').length;let no=0;
 if(nT){const rack=mkRack(nT);rack.position.set(0,BENCH_Y,.36);exGroup.add(rack);}
 let tx=-(nT-1)/2*.11;let bx=nT? (nT*.11)/2+.18:-(tubes.length-1)/2*.25;
 tubes.forEach((d,k)=>{let o;if(d.k==='tube'){o=mkTube(d.c,d.l,d.s);o.position.set(tx,BENCH_Y+.016,.36);tx+=.11;d.no=++no;}else if(d.k==='beaker'){o=mkBeaker(d.c,d.l);if(d.s)addSolid(o,d.s);o.position.set(bx,BENCH_Y,.34);bx+=.25;}else{o=mkFlask(d.c);o.position.set(bx,BENCH_Y,.32);bx+=.25;o.userData.r=.1;o.userData.h=.2;}reg(o,d);});
 reag.forEach((d,k)=>{const o=d.k==='dropper'?mkDropperBottle(d.c,d.f):mkBottle(d.c,d.f,d.brown);o.position.set((k-(reag.length-1)/2)*.22,BENCH_Y,-.38);reg(o,d);o.add(lbl(d.f,d.n,.33));});
 jars.forEach((d,k)=>{const o=mkJar(d.s||d.c,d.f);o.position.set(-.6+(k%2)*.2,BENCH_Y,.12-Math.floor(k/2)*.26);reg(o,d);o.add(lbl(d.f,d.n,.24));});
 side.forEach((d,k)=>{let o;if(d.k==='lamp'){o=mkLamp();o.position.set(.6,BENCH_Y,.02);}else if(d.k==='splint'){o=mkSplint();o.position.set(.46,BENCH_Y,.42);o.rotation.y=-.5;}else{const wi=side.filter(x=>x.k==='wire').indexOf(d);o=mkWire(d.s||d.c);o.position.set(-.5+wi*.2,BENCH_Y,.5);o.rotation.y=.25;const dish=mesh(new THREE.CylinderGeometry(.05,.042,.014,24),std(0xffffff),o.position.x,BENCH_Y+.007,o.position.z-.16);const sl=mesh(new THREE.CylinderGeometry(.038,.038,.005,20),std(col(d.s||'#ffffff'),{roughness:.9}),dish.position.x,BENCH_Y+.016,dish.position.z);exGroup.add(dish);exGroup.add(sl);}reg(o,d);o.add(lbl(itemName(o),'',d.k==='lamp'?.36:.12));});
 tubes.forEach(d=>{const o=EX.objs[d.id];const l=lbl(d.k==='tube'?'№'+d.no:(d.f||''),d.k==='tube'?(d.f||''):'',.03);l.position.z=d.k==='tube'?.11:.13;o.add(l);});
 exGroup.traverse(m=>{if(m.isMesh&&!m.material.transparent&&!Array.isArray(m.material))m.castShadow=true});
 drawLabBoard(tr(def.t),[]);renderExHud();$('log').innerHTML=`<b>${t('obs')}</b>`;}
function lbl(a,b,y){const l=makeLabel(a||'',b||'');l.scale.set(.15,.05,1);l.position.y=y;l.userData.isLbl=1;return l;}
function reg(o,d){o.userData.def=d;o.userData.id=d.id;EX.objs[d.id]=o;exGroup.add(o);}
function refreshLabTexts(){const ti=EX.ti,ei=EX.ei,st=EX.step;renderExHud();drawLabBoard(tr(EX.def.t),EX.step>=EX.def.steps.length?EX.def.eq||[]:[]);showStep();}
function renderExHud(){const T=TOP[EX.ti];const d=PR.lab[T.n]||[];$('exDots').innerHTML=T.labs.map((x,i)=>`<button class="sd ${i===EX.ei?'on':''} ${d[i]!=null&&i!==EX.ei?'done':''}" data-i="${i}">${i+1}</button>`).join('');
 $('exDots').querySelectorAll('.sd').forEach(b=>b.onclick=()=>{if(EX.busy)return;loadEx(EX.ti,+b.dataset.i);showExIntro()});$('iEx').textContent=t('exp')+' '+(EX.ei+1)+' · '+tr(EX.def.t);$('iHelp').textContent=t('help');}
function showExIntro(){const d=EX.def;const reag=(d.set||[]).filter(x=>x.f).map(x=>x.f);
 modal(`<div class="kick">${t('exp')} ${EX.ei+1} / ${TOP[EX.ti].labs.length}</div><h2>${esc(tr(d.t))}</h2><p>${esc(tr(d.d))}</p><div class="goal">🧴 <b style="color:#fff">${t('reag')}:</b> ${esc([...new Set(reag)].join(', '))}</div><button class="btnG" id="mG">${t('exStart')}</button><button class="btnD" id="mH2">${t('toHome')}</button>`);
 $('mG').onclick=()=>{closeModal();EX.started=true;showStep()};setTimeout(()=>speak(tr(d.t)+'. '+tr(d.d)),300);$('mH2').onclick=goHome;}
function stepText(s){if(s.tx)return tr(s.tx);const A=EX.objs[s.s],B=EX.objs[s.d];const a=`<span class="hl">${esc(itemName(A))}</span>`,b=B?`<span class="hl">${esc(itemName(B))}</span>`:'';
 const kk={pour:`${a} → ${b}: ерітіндіні құйыңыз`,drop:`${a} → ${b}: бірнеше тамшы тамызыңыз`,solid:`${a} → ${b}: аздап салыңыз`,heat:`${a} пробирканы ${b} жалынында қыздырыңыз`,flame:`${a} ілмекті ${b} жалынына енгізіңіз`,ignite:`${a} → ${b} аузына апарыңыз`};
 const ru={pour:`${a} → ${b}: прилейте раствор`,drop:`${a} → ${b}: добавьте несколько капель`,solid:`${a} → ${b}: внесите немного`,heat:`Нагрейте ${a} в пламени (${b})`,flame:`Внесите ${a} в пламя (${b})`,ignite:`${a} → поднесите к ${b}`};
 return (LANG==='kk'?kk:ru)[s.a];}
function showStep(){const s=EX.def.steps[EX.step];$('iBar').firstElementChild.style.width=(EX.step/EX.def.steps.length*100)+'%';
 if(!s){hideHint();$('iStep').textContent='';$('iText').innerHTML='🎉 '+t('done');return;}
 $('iStep').textContent=t('step')+' '+(EX.step+1)+'/'+EX.def.steps.length;$('iText').innerHTML=stepText(s);showHint(EX.objs[s.s],EX.objs[s.d]);measure();if(EX.started)speak((LANG==='kk'?'Қадам ':'Шаг ')+(EX.step+1)+'. '+stepText(s));}
function logObs(s){EX.log.push(s);const e=document.createElement('div');e.textContent=(EX.log.length)+'. '+s;$('log').appendChild(e);$('log').scrollTop=1e6;}
async function doAction(src,dst,s,held){const fx=s.fx||{};const tgt=(s.a==='heat')?src:dst;
 const eff=()=>{if(s.a==='flame'){lampColor(dst,fx.fl||'#ffa726',4);}else{applyFx(tgt,fx);if(fx.fl&&EX.objs[s.d]&&EX.objs[s.d].userData.def.k==='lamp')lampColor(EX.objs[s.d],fx.fl,3);}};
 let obj=src;if(src.userData.pip)obj=src.userData.pip;
 if(!held)await pickUp(obj);
 if(s.a==='pour')await actPour(obj,dst,eff);else if(s.a==='drop')await actDrop(obj,dst,eff,s.n||2);else if(s.a==='solid')await actSolid(obj,dst,eff);else if(s.a==='heat')await actHeat(obj,dst,eff);else if(s.a==='flame')await actFlame(obj,dst,eff);else if(s.a==='ignite')await actIgnite(obj,dst,eff,fx.out);
 await putBack(obj);await goRest();}
async function tryAction(src,dst,held){const s=EX.def.steps[EX.step];if(!s){if(held){await putBack(held);await goRest()}return}
 const okSrc=src.userData.id===s.s,okDst=dst&&dst.userData.id===s.d;
 if(!okSrc||!okDst){EX.mist++;beep('bad');toast(okSrc?t('wrongV'):t('wrongS'),true);if(held){await putBack(held);await goRest();}EX.busy=false;showStep();return;}
 hideHint();await doAction(src,dst,s,!!held);const o=tr(s.o);if(o){toast('👁 '+o,false,3800);logObs(o);beep('ok');speak(o)}
 EX.step++;EX.busy=false;if(EX.step>=EX.def.steps.length){setTimeout(exDone,1500);}else showStep();}
function exDone(){if(!EX)return;showStep();drawLabBoard(tr(EX.def.t),EX.def.eq||[]);const d=EX.def;speak(t('done')+' '+tr(d.c||''));
 modal(`<div class="kick">${t('exp')} ${EX.ei+1}</div><h2>🎉 ${t('done')}</h2><p>${esc(tr(d.c||''))}</p><div class="goal"><b style="color:#fff">${t('eqs')}:</b>${(d.eq||[]).map(e=>`<div class="eq" style="margin-top:6px">${esc(e)}</div>`).join('')}</div><button class="btnG" id="mQ">${t('toQuiz')}</button>`);$('mQ').onclick=exQuiz;}
function exQuiz(){const Q=EX.def.q||[];let i=0,sc=0;const show=()=>{if(i>=Q.length){const pct=Q.length?Math.round(sc/Q.length*100):100;const T=TOP[EX.ti];PR.lab[T.n]=PR.lab[T.n]||[];PR.lab[T.n][EX.ei]=Math.max(PR.lab[T.n][EX.ei]||0,pct);savePR();beep('win');
   const last=EX.ei>=T.labs.length-1;modal(`<div class="kick">${t('fb')}</div><h2>${pct>=80?'🏆':'💪'} ${sc} / ${Q.length}</h2><p>${esc(tr(EX.def.t))}</p>${!last?`<button class="btnG" id="mN">${t('nextEx')}</button>`:''}<button class="btnD" id="mR">${t('redo')}</button><button class="btnD" id="mH3">${t('toHome')}</button>`);
   const mn=$('mN');if(mn)mn.onclick=()=>{loadEx(EX.ti,EX.ei+1);showExIntro()};$('mR').onclick=()=>{loadEx(EX.ti,EX.ei);showExIntro()};$('mH3').onclick=goHome;renderExHud();return;}
  const q=Q[i];const ord=shuffle(q.o.map((o,k)=>k));modal(`<div class="kick">${t('fb')} · ${i+1} / ${Q.length}</div><h2>${esc(tr(q.q))}</h2><div id="op">${ord.map(k=>`<button class="opt" data-k="${k}">${esc(tr(q.o[k]))}</button>`).join('')}</div><div id="qx"></div>`);
  document.querySelectorAll('#op .opt').forEach(b=>b.onclick=()=>{const k=+b.dataset.k;document.querySelectorAll('#op .opt').forEach(x=>{x.disabled=true;if(+x.dataset.k===q.a)x.classList.add('ok')});if(k===q.a){sc++;beep('ok')}else{b.classList.add('bad');beep('bad')}
   $('qx').innerHTML=(q.e?`<div class="expl">${esc(tr(q.e))}</div>`:'')+`<button class="btnG" id="qn">${t('next')}</button>`;$('qn').onclick=()=>{i++;show()}})};show();}

/* ---------- көрсеткішпен әрекет: сүйреу / басу / 360° ---------- */
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();let PD=null;const dragPlane=new THREE.Plane(new V3(0,1,0),-(BENCH_Y+.02));
function dropCandidate(p,src){let best=null,bd=.2;Object.values(EX.objs).forEach(o=>{if(o===src)return;const q=wp(o);const dd=Math.hypot(q.x-p.x,q.z-p.z);if(dd<bd){bd=dd;best=o}});return best;}let HOLD=null;
function pickObj(x,y){ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,cam);const hits=ray.intersectObjects(exGroup.children,true);
 const owner=h=>{for(let q=h.object;q;q=q.parent)if(!q.visible)return null;let o=h.object;while(o&&!o.userData.id)o=o.parent;return o;};
 for(const h of hits){if(h.object.isSprite)continue;const o=owner(h);if(o)return o;}
 for(const h of hits){const o=owner(h);if(o)return o;}
 let best=null,bd=Math.max(34,innerWidth*.045);Object.values(EX?EX.objs:{}).forEach(o=>{const bb=bbOf(o),c=bb.getCenter(new V3());const p=c.project(cam);if(p.z>1)return;const sx=(p.x+1)/2*innerWidth,sy=(1-p.y)/2*innerHeight;const d=Math.hypot(sx-x,sy-y);if(d<bd){bd=d;best=o}});return best;}
canvas.addEventListener('pointerdown',e=>{if(mode==='home'){PD={x:e.clientX,y:e.clientY,m:0,home:1};return}if(mode!=='lab')return;canvas.setPointerCapture(e.pointerId);
 const o=(EX&&EX.started&&!EX.busy)?pickObj(e.clientX,e.clientY):null;PD={x:e.clientX,y:e.clientY,m:0,obj:o,yaw:LOOK.yaw,pitch:LOOK.pitch};});
canvas.addEventListener('pointermove',e=>{if(!PD)return;const dx=e.clientX-PD.x,dy=e.clientY-PD.y;PD.m=Math.max(PD.m,Math.abs(dx)+Math.abs(dy));if(PD.home)return;
 if(PD.obj&&PD.m>10&&!HOLD&&!EX.busy){const o=PD.obj;const d=o.userData.def;if(['bottle','dropper','jar','splint','wire','tube'].includes(d.k)){EX.busy=true;hideHint();HOLD={obj:o.userData.pip||o,src:o,ready:false,tgt:null};
   (async()=>{await recenterQuick();await pickUp(HOLD.obj,true);if(HOLD){HOLD.ready=true}})();}}
 if(HOLD){ndc.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);ray.setFromCamera(ndc,cam);const p=new V3();if(ray.ray.intersectPlane(dragPlane,p)){p.x=Math.max(-.95,Math.min(.95,p.x));p.z=Math.max(-.5,Math.min(.62,p.z));HOLD.tgt=p;const cd=dropCandidate(p,HOLD.src);if(cd){const q=wp(cd);hintRing.position.set(q.x,BENCH_Y+.003,q.z);hintRing.scale.setScalar(.8);hintRing.visible=true}else hintRing.visible=false;}return;}
 if(!PD.obj||PD.m>10&&!HOLD){if(!PD.obj){LOOK.yaw=PD.yaw-dx*.006;LOOK.pitch=Math.max(-1.25,Math.min(.9,PD.pitch-dy*.005))}}});
canvas.addEventListener('pointerup',e=>{const P=PD;PD=null;if(!P)return;
 if(P.home){if(P.m<8){ndc.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);ray.setFromCamera(ndc,cam);const h=ray.intersectObjects(books,false)[0];if(h)select(h.object.userData.idx,true)}return}
 if(mode!=='lab'||!EX)return;
 if(HOLD){const H=HOLD;const fin=async()=>{while(!H.ready)await wait(40);HOLD=null;hideHint();const best=H.tgt?dropCandidate(H.tgt,H.src):null;
   await tryAction(H.src,best,H.obj);};fin();return;}
 if(P.m<10&&P.obj&&EX.started&&!EX.busy){const o=P.obj;const s=EX.def.steps[EX.step];if(!s)return;
  if(!EX.selSrc){if(['lamp'].includes(o.userData.def.k)&&o.userData.id!==s.s){toast(t('wrongS'),true);return}EX.selSrc=o;toast('✋ '+esc(itemName(o))+' '+t('selected'),true,2200);beep('pop');showHint(o,EX.objs[s.d]);return;}
  if(o===EX.selSrc){EX.selSrc=null;showStep();return}const src=EX.selSrc;EX.selSrc=null;EX.busy=true;(async()=>{await recenterQuick();await tryAction(src,o,null)})();}});
async function recenterQuick(){if(Math.abs(LOOK.yaw)>.25||Math.abs(LOOK.pitch-DEF_PITCH)>.3)await recenter();}

/* =====================================================================
   AI КӨМЕКШІ (sample capability)
   ===================================================================== */
let SAMPLE=undefined,aiHist=[];
async function getSample(){if(SAMPLE!==undefined)return SAMPLE;try{SAMPLE=window.claude&&window.claude.use?await window.claude.use('sample'):null}catch(e){SAMPLE=null}return SAMPLE;}
function topicText(T){const L=x=>tr(x);let s=`# ${T.n}. ${L(T.title)}\n`;(T.lecture||[]).forEach(x=>{s+=`## ${L(x.h)}\n${L(x.p)}\n${(x.eq||[]).join('\n')}\n`});(T.practice||[]).forEach(m=>{s+=`## ${L(m.h)}\n${(m.steps||[]).map(L).join('\n')}\n${[].concat(m.eq||[]).join('\n')}\n`});
 (T.labs||[]).forEach(l=>{s+=`## Lab: ${L(l.t)}\n${L(l.d)}\n${(l.steps||[]).map(x=>L(x.o)).join('\n')}\n${(l.eq||[]).join('\n')}\n`});(T.problems||[]).forEach(p=>{s+=`Problem: ${L(p.q)} Answer: ${p.a} ${L(p.u||'')}. ${L(p.s)}\n`});return s;}
function searchContent(q){const words=String(q||'').toLowerCase().split(/\s+/).filter(w=>w.length>2);const out=[];TOP.forEach(T=>{const tx=topicText(T);const parts=tx.split('\n## ');parts.forEach(p=>{const lw=p.toLowerCase();const sc=words.reduce((a,w)=>a+(lw.includes(w)?1:0),0);if(sc)out.push({sc,t:`[${T.n}] `+p.slice(0,900)})})});return out.sort((a,b)=>b.sc-a.sc).slice(0,4).map(x=>x.t).join('\n---\n')||'nothing found';}
function aiAdd(role,text){const d=document.createElement('div');d.className='am '+(role==='user'?'u':'a');d.textContent=text;$('aiMsgs').appendChild(d);$('aiMsgs').scrollTop=1e6;return d;}
function renderAiSug(){$('aiSug').innerHTML=['aiS1','aiS2','aiS3'].map(k=>`<button>${t(k)}</button>`).join('');$('aiSug').querySelectorAll('button').forEach(b=>b.onclick=()=>{$('aiIn').value=b.textContent;$('aiF').requestSubmit()});}
$('aiBtn').onclick=()=>{$('ai').classList.toggle('hidden');if(!$('aiMsgs').children.length)aiAdd('assistant',t('aiHi'));renderAiSug();};$('aiX').onclick=()=>$('ai').classList.add('hidden');
let aiBusy=false;
$('aiF').onsubmit=async e=>{e.preventDefault();const q=$('aiIn').value.trim();if(!q||aiBusy)return;$('aiIn').value='';aiAdd('user',q);const box=aiAdd('assistant',t('aiWait'));aiBusy=true;
 const T=TOP[sel];const sys=`You are the AI assistant of CHEMLAB-3D, an inorganic chemistry learning platform for college students in Kazakhstan. Answer ONLY using the platform content below. If the platform does not cover the question, say so briefly and suggest the closest topic. Explain simply, step by step, with equations. Answer in ${LANG==='kk'?'Kazakh':'Russian'}. Keep answers under 220 words. Plain text, no markdown headings.\n\nCurrent topic content:\n${topicText(T).slice(0,9000)}\n\nAll topics: ${TOP.map(x=>x.n+'. '+tr(x.title)).join('; ')}`;
 aiHist.push({role:'user',content:q});const done=txt=>{box.textContent=txt;aiHist.push({role:'assistant',content:txt});if(aiHist.length>12)aiHist=aiHist.slice(-12);while(aiHist.length&&aiHist[0].role!=='user')aiHist.shift();aiBusy=false;$('aiMsgs').scrollTop=1e6};
 const S=await getSample();
 if(S){const msgs=[{role:'user',content:sys+'\n\n---\nStudent question: '+aiHist[0].content}];for(let k=1;k<aiHist.length;k++)msgs.push(aiHist[k]);
  try{const r=await S(msgs,{cache:false,onText:({text})=>{box.textContent=text;$('aiMsgs').scrollTop=1e6},tools:[{name:'search_content',description:'Search all CHEMLAB-3D topics (lectures, practice, labs, problems) for keywords; returns matching passages.',inputSchema:{type:'object',properties:{query:{type:'string'}},required:['query']},execute:({query})=>searchContent(query)}]});return done(r.text);}
  catch(err){return done(offlineAnswer(q));}}
 let gErr=''; if(gKey()||(PROXY_OK&&location.protocol.startsWith('http'))){try{const txt=await askGemini(sys+'\n\nRelated passages from other topics:\n'+searchContent(q).slice(0,4000),aiHist);if(txt)return done(txt);}
  catch(err){gErr=(LANG==='kk'?'⚠ Gemini қатесі: ':'⚠ Ошибка Gemini: ')+err.message;}}
 done((gErr?gErr+'\n\n':'')+offlineAnswer(q));};

/* =====================================================================
   КІРУ (пароль)
   ===================================================================== */
const PW_HASH='8486caa8b27faaaaa4d5199ffa5af182e93ed0628d37a6464f25f8d5f5d08a19';
async function sha(s){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(e){let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))|0;return 'x'+h}}
$('lf').onsubmit=async e=>{e.preventDefault();const v=$('pw').value.trim();const h=await sha(v);if(h===PW_HASH||h==='x1544378959'){try{sessionStorage.setItem('cl3d_ok','1')}catch(e){}$('perr').textContent='';startApp()}else{$('perr').textContent=t('wrong');beep('bad');$('pw').value=''}};
$('bOut').onclick=()=>{try{sessionStorage.removeItem('cl3d_ok')}catch(e){}location.reload()};
function startApp(){$('login').classList.add('hidden');mode='home';$('top').classList.remove('hidden');$('homeUI').classList.remove('hidden');$('aiBtn').classList.remove('hidden');renderTabs();renderCard();homeCam(true);measure();getSample();}

/* =====================================================================
   ЦИКЛ
   ===================================================================== */
const clock=new THREE.Clock();
function loop(){requestAnimationFrame(loop);const dt=Math.min(.05,clock.getDelta()),T=clock.elapsedTime,now=performance.now();
 for(let i=tweens.length-1;i>=0;i--){const w=tweens[i];const k=Math.min(1,(now-w.t0)/w.dur);w.fn(k);if(k>=1){tweens.splice(i,1);w.done&&w.done()}}
 if(mode==='home'||mode==='login'){cam.position.copy(HOMECAM.pos);if(mode==='login'){cam.position.x=Math.sin(T*.15)*1.5}cam.lookAt(HOMECAM.look);books.forEach((b,j)=>{if(zoomed&&j===sel&&mode==='home')b.rotation.y=Math.sin(T*1.2)*.08;else b.rotation.y*=.9});R.render(homeScene,cam);return;}
 if(mode!=='lab')return;
 cam.position.copy(CAMPOS);const f=new V3(Math.sin(LOOK.yaw)*Math.cos(LOOK.pitch),Math.sin(LOOK.pitch),-Math.cos(LOOK.yaw)*Math.cos(LOOK.pitch));cam.lookAt(CAMPOS.clone().add(f));
 [HAND,HANDL].forEach(H=>{if(H.userData.idle){const p=restPos(H===HANDL);H.position.lerp(p.add(new V3(0,Math.sin(T*1.5+(H===HANDL?1:0))*.004,0)),.2);H.rotation.y=-LOOK.yaw;}});
 if(HOLD&&HOLD.ready&&HOLD.tgt){HAND.position.lerp(HOLD.tgt.clone().add(new V3(.02,.38,.05)),.25);}
 [hintArrow,hintArrow2].forEach((a,k)=>{if(a.visible&&a.userData.base){a.position.copy(a.userData.base);a.position.y+=.03+Math.abs(Math.sin(T*3+k))*.04}});hintRing.material.opacity=.5+.4*Math.sin(T*4);
 exGroup.children.forEach(o=>{const u=o.userData;
  if(u.bub&&u.bubT>0){u.bubT-=dt;u.bub.forEach(b=>{b.visible=u.bubT>0;b.userData.ph=(b.userData.ph+dt*.9)%1;const p=b.userData.ph;const a=b.id*1.7;const lv=Math.max(.05,u.level)*u.h;b.position.set(Math.cos(a)*u.r*.5*((b.id%5)/5),.01+p*lv,Math.sin(a)*u.r*.5*((b.id%3)/3))});}
  if(u.gas&&u.gasT>0){u.gasT-=dt;u.gas.forEach((s,i)=>{s.userData.ph=(s.userData.ph+dt*.35)%1;const p=s.userData.ph;s.position.set(Math.sin(p*7+i)*.02,u.h+.01+p*.25,Math.cos(p*5+i)*.015);s.material.opacity=Math.min(1,u.gasT/2)*.55*(1-p);s.scale.setScalar((u.kind==='tube'?.05:.09)+p*.12)});}
  else if(u.gas)u.gas.forEach(s=>s.material.opacity=0);
  if(u.kind==='lamp'){u.f1.scale.y=(u.f1.scale.x>1.1?1.3:1)*(1+Math.sin(T*18)*.06);u.pl.intensity=.35+Math.sin(T*13)*.05}});
 R.render(labScene,cam);}

/* ---------- ІСКЕ ҚОСУ ---------- */
function start(){applyStatic();makeEnv();buildHome();buildLab();buildHands();homeCam(true);resize();loop();$('loading').remove();
 let ok=false;try{ok=sessionStorage.getItem('cl3d_ok')==='1'}catch(e){}if(ok)startApp();else{$('login').classList.remove('hidden');mode='login';HOMECAM.pos.set(0,2.2,6);HOMECAM.look.set(0,2.2,-2);}}
(document.fonts&&document.fonts.load?Promise.all([document.fonts.load('900 40px Nunito'),document.fonts.load('600 20px JetBrains Mono')]).catch(()=>{}):Promise.resolve()).then(start);
window.__dbg={pickObj,get HAND(){return HAND},get cam(){return cam},enterLab,loadEx,tryAction,get EX(){return EX},openRead,openGames,goHome,showModel,searchContent,TOP};
})();
