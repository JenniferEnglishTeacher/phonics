/* Jennifer Phonics — main app */
const NEW_RULE_IDS = new Set(["ai-ay","ee-ea","oa-ow","ie-igh","ue-ew-ui","y-long-i","y-long-e","oo-long","oo-short","ea-short","ur-er","ore-oar","air-are","ear-eer","war-wor","fl-blend","gl-blend","dr-blend","fr-blend","gr-blend","tr-blend","tw-blend","spr-spl-blend","str-blend","qu-squ","thr-shr-blend","final-blends","ck","tch","x-ks","floss","all","mb-silent-b","gn-silent-g","gh","le-ending","ed-ending","tion"]);
const PRACTICE_MODES = ["spell", "shuffle", "fill", "speak"];
const PER_TICKET = 5;

const $ = s => document.querySelector(s);
const els = {
  ruleList: $("#ruleList"), ruleSearch: $("#ruleSearch"), sidebar: $("#sidebar"), scrim: $("#scrim"), menuBtn: $("#menuBtn"),
  ruleGroup: $("#ruleGroup"), ruleTitle: $("#ruleTitle"), ruleSub: $("#ruleSub"),
  readAllBtn: $("#readAllBtn"), prevRule: $("#prevRule"), nextRule: $("#nextRule"),
  tabs: $("#modeTabs"), wordList: $("#wordList"), optBlank: $("#optBlank"), optChinese: $("#optChinese"),
  panelLearn: $("#panel-learn"), panelPractice: $("#panel-practice"), panelGames: $("#panel-games"),
  practiceCard: $("#practiceCard"), practiceHint: $("#practiceHint"), progressDots: $("#progressDots"),
  gameGrid: $("#gameGrid"), optFreePlay: $("#optFreePlay"),
  starCount: $("#starCount"), ticketCount: $("#ticketCount"),
  bonusModal: $("#bonusModal"), bonusChoices: $("#bonusChoices"), bonusLater: $("#bonusLater")
};

/* ---------- storage (per browser, optional) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem("jp_" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("jp_" + k, JSON.stringify(v)); } catch {} }
};

const state = {
  ruleId: PHONICS_RULES[0].id,
  mode: "learn",
  stars: store.get("stars", 0),
  tickets: store.get("tickets", 0),
  streak: 0, // correct answers toward next ticket
  queue: [], qIndex: 0, current: null, answered: false,
  reading: false
};

/* ---------- helpers ---------- */
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const norm = t => String(t).toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const rule = () => PHONICS_RULES.find(r => r.id === state.ruleId) || PHONICS_RULES[0];

function cleanWord(w) {
  let k = String(w).replace(/[㄀-ㄯ]/g, "").replace(/\(.*?\)/g, "").replace(/\bmodal\b/, "").trim();
  if (WORD_PICTURES.has(k.toLowerCase())) return k;
  k = k.split(/[=…]/)[0].trim();
  if (WORD_PICTURES.has(k.toLowerCase())) return k;
  return k.split("-")[0].trim();
}
function pictureFor(item) { return WORD_PICTURES.get(cleanWord(item.word).toLowerCase()) || "🔤"; }
function picClass(p) { const n = [...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(p)].length; return n >= 3 ? "many" : n === 2 ? "multi" : ""; }
function picHtml(item, extra = "") { const p = pictureFor(item); return `<div class="pic ${picClass(p)} ${extra}" aria-hidden="true">${p}</div>`; }
function soundNote(word) { const m = String(word).match(/[㄀-ㄯ]+/); return m ? m[0] : ""; }

/* items usable for spelling: single plain words */
function spellItems(r) {
  const seen = new Set();
  return r.items.filter(i => {
    const w = cleanWord(i.word);
    if (!/^[A-Za-z]{2,12}$/.test(w) || seen.has(w.toLowerCase())) return false;
    seen.add(w.toLowerCase()); return true;
  });
}
function ruleRegex(r, flags = "gi") { try { return r.hl ? new RegExp(r.hl, flags) : null; } catch { return null; } }

function highlight(word, r) {
  const w = String(word);
  if (r.magic) {
    const m = w.match(new RegExp(`${r.magic}([^aeiou\\s])e(?=s?$|s?\\b)`, "i"));
    if (m) {
      const i = m.index;
      return esc(w.slice(0, i)) + `<span class="hl">${esc(w[i])}</span>` + esc(w.slice(i + 1, i + 2)) + `<span class="hl">${esc(w[i + 2])}</span>` + esc(w.slice(i + 3));
    }
  }
  const re = ruleRegex(r);
  if (!re) return esc(w);
  let out = "", last = 0, m, guard = 0;
  while ((m = re.exec(w)) && guard++ < 20) {
    if (!m[0]) { re.lastIndex++; continue; }
    out += esc(w.slice(last, m.index)) + `<span class="hl">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
  }
  return out + esc(w.slice(last));
}

function sentenceFull(item) { return (item.sentence || "").replace(/_{2,}/, cleanWord(item.answer || item.word)); }
function sentenceHtml(item, blank) {
  const s = item.sentence || "";
  const parts = s.split(/_{2,}/);
  if (parts.length < 2) return esc(s);
  const fill = blank ? `<span class="blank">&nbsp;</span>` : `<span class="target">${esc(cleanWord(item.answer || item.word))}</span>`;
  return esc(parts[0]) + fill + esc(parts.slice(1).join("____"));
}

/* ---------- speech ---------- */
let voice = null;
function loadVoice() {
  const vs = speechSynthesis.getVoices().filter(v => /^en[-_]US/i.test(v.lang));
  voice = vs.find(v => /Google US English/i.test(v.name)) || vs.find(v => /(Aria|Jenny|Samantha|Natural)/i.test(v.name)) || vs[0] || null;
}
if ("speechSynthesis" in window) { loadVoice(); speechSynthesis.onvoiceschanged = loadVoice; }
function speak(text, rate = 0.85) {
  return new Promise(res => {
    if (!("speechSynthesis" in window)) return res();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = rate; if (voice) u.voice = voice;
    u.onend = u.onerror = () => res();
    speechSynthesis.speak(u);
  });
}
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
function listen() {
  return new Promise((res, rej) => {
    if (!Recognition) return rej(new Error("unsupported"));
    const rec = new Recognition();
    rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 5;
    rec.onresult = e => res([...e.results[0]].map(a => a.transcript));
    rec.onerror = e => rej(e); rec.onnomatch = () => res([]);
    rec.start();
  });
}
function heardMatches(alts, expected) {
  const target = norm(expected).split(" ");
  return alts.some(a => { const got = norm(a).split(" "); const hit = target.filter(w => got.includes(w)).length; return hit / target.length >= (target.length === 1 ? 1 : 0.7); });
}

/* ---------- sound effects ---------- */
let actx;
function beep(type) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime;
    o.connect(g); g.connect(actx.destination);
    const f = type === "good" ? [660, 990] : type === "bad" ? [220, 160] : [520, 780];
    o.frequency.setValueAtTime(f[0], t); o.frequency.exponentialRampToValueAtTime(f[1], t + .15);
    g.gain.setValueAtTime(.18, t); g.gain.exponentialRampToValueAtTime(.001, t + .25);
    o.start(t); o.stop(t + .26);
  } catch {}
}

/* ---------- sidebar ---------- */
function renderSidebar() {
  const q = norm(els.ruleSearch.value);
  const groups = new Map();
  for (const r of PHONICS_RULES) {
    if (q && !norm(r.title + " " + r.sourceHeading + " " + r.group).includes(q) && !r.items.some(i => norm(i.word).includes(q))) continue;
    if (!groups.has(r.group)) groups.set(r.group, []);
    groups.get(r.group).push(r);
  }
  els.ruleList.innerHTML = [...groups].map(([g, rs]) => `
    <div class="rule-group-title">${esc(g)}</div>
    ${rs.map(r => `<button class="rule-btn ${r.id === state.ruleId ? "active" : ""}" data-id="${r.id}">
      <span>${esc(r.title)} ${NEW_RULE_IDS.has(r.id) ? '<span class="new">NEW</span>' : ""}</span><span class="count">${r.items.length}</span></button>`).join("")}
  `).join("") || `<p class="muted" style="padding:10px">No match.</p>`;
}
els.ruleList.addEventListener("click", e => {
  const b = e.target.closest(".rule-btn"); if (!b) return;
  selectRule(b.dataset.id); closeMenu();
});
els.ruleSearch.addEventListener("input", renderSidebar);
els.menuBtn.addEventListener("click", () => { els.sidebar.classList.add("open"); els.scrim.hidden = false; });
els.scrim.addEventListener("click", closeMenu);
function closeMenu() { els.sidebar.classList.remove("open"); els.scrim.hidden = true; }

function selectRule(id, push = true) {
  state.ruleId = id;
  if (push) history.replaceState(null, "", "#" + id);
  stopReading();
  renderSidebar(); renderTitle();
  if (state.mode === "learn") renderLearn();
  else if (PRACTICE_MODES.includes(state.mode)) startPractice();
  else renderGames();
  document.querySelector(".lesson").scrollIntoView({ block: "start" });
  window.scrollTo({ top: 0 });
}
function stepRule(d) {
  const i = PHONICS_RULES.findIndex(r => r.id === state.ruleId);
  selectRule(PHONICS_RULES[(i + d + PHONICS_RULES.length) % PHONICS_RULES.length].id);
}
els.prevRule.addEventListener("click", () => stepRule(-1));
els.nextRule.addEventListener("click", () => stepRule(1));

function renderTitle() {
  const r = rule();
  els.ruleGroup.textContent = r.group;
  els.ruleTitle.textContent = r.title;
  els.ruleSub.textContent = `${r.sourceHeading !== r.title ? r.sourceHeading + " · " : ""}${r.items.length} words`;
  document.title = `${r.title} · Jennifer Phonics`;
}

/* ---------- Learn ---------- */
function renderLearn() {
  const r = rule(), blank = els.optBlank.checked;
  els.wordList.classList.toggle("hide-zh", !els.optChinese.checked);
  els.wordList.innerHTML = r.items.map((it, n) => {
    const note = soundNote(it.word);
    const shown = it.word.replace(/[㄀-ㄯ]+/g, "").trim();
    return `<li class="word-row" data-i="${n}">
      <div class="num">${n + 1}</div>
      ${picHtml(it)}
      <div class="word-main">
        <div class="word">${highlight(shown, r)}</div>
        <div class="meta"><span class="pos">${esc(it.pos || "")}</span>${note ? `<span class="pos">${note}</span>` : ""}<span class="zh">${esc(it.definition || "")}</span></div>
      </div>
      <div class="sent-block">
        <div class="sentence">${sentenceHtml(it, blank)}</div>
        <div class="translation">${esc(it.translation || "")}</div>
        <div class="speak-result"></div>
      </div>
      <div class="row-actions">
        <button data-act="word">🔊 Word</button>
        <button data-act="sent">🔊 Sentence</button>
        <button data-act="speak">🎤 Speak</button>
      </div>
    </li>`;
  }).join("");
}
els.wordList.addEventListener("click", async e => {
  const b = e.target.closest("button"); if (!b) return;
  const row = b.closest(".word-row"), it = rule().items[+row.dataset.i];
  const out = row.querySelector(".speak-result");
  if (b.dataset.act === "word") speak(cleanWord(it.word));
  if (b.dataset.act === "sent") speak(sentenceFull(it));
  if (b.dataset.act === "speak") {
    if (!Recognition) { out.className = "speak-result bad"; out.textContent = "Speech check works in Chrome or Edge."; return; }
    out.className = "speak-result"; out.textContent = "🎙️ Listening… read the sentence";
    try {
      const alts = await listen();
      const ok = heardMatches(alts, sentenceFull(it));
      out.className = "speak-result " + (ok ? "good" : "bad");
      out.textContent = ok ? `✅ Great reading! I heard: “${alts[0]}”` : `🔁 Try again. I heard: “${alts[0] || "…"}”`;
      beep(ok ? "good" : "bad");
    } catch (err) { out.className = "speak-result bad"; out.textContent = "Microphone not available. Allow mic access and try again."; }
  }
});
els.optBlank.addEventListener("change", renderLearn);
els.optChinese.addEventListener("change", () => els.wordList.classList.toggle("hide-zh", !els.optChinese.checked));

async function readAll() {
  if (state.reading) return stopReading();
  if (state.mode !== "learn") setMode("learn");
  state.reading = true; els.readAllBtn.textContent = "⏹ Stop";
  const rows = [...els.wordList.children];
  for (const row of rows) {
    if (!state.reading) break;
    row.classList.add("playing"); row.scrollIntoView({ block: "center", behavior: "smooth" });
    const it = rule().items[+row.dataset.i];
    await speak(cleanWord(it.word), .8);
    if (!state.reading) { row.classList.remove("playing"); break; }
    await new Promise(r => setTimeout(r, 350));
    row.classList.remove("playing");
  }
  stopReading();
}
function stopReading() { state.reading = false; els.readAllBtn.textContent = "🔊 Read all words"; if ("speechSynthesis" in window) speechSynthesis.cancel(); }
els.readAllBtn.addEventListener("click", readAll);

/* ---------- Modes ---------- */
function setMode(mode) {
  state.mode = mode; stopReading();
  [...els.tabs.children].forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  els.panelLearn.hidden = mode !== "learn";
  els.panelPractice.hidden = !PRACTICE_MODES.includes(mode);
  els.panelGames.hidden = mode !== "games";
  if (mode === "learn") renderLearn();
  else if (mode === "games") renderGames();
  else startPractice();
}
els.tabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) setMode(b.dataset.mode); });

/* ---------- rewards ---------- */
function renderBank() { els.starCount.textContent = state.stars; els.ticketCount.textContent = state.tickets; }
function renderDots() {
  els.progressDots.innerHTML = Array.from({ length: PER_TICKET }, (_, i) => `<span class="${i < state.streak ? "on" : ""}">${i < state.streak ? "⭐" : ""}</span>`).join("") + `<span style="border:0;width:auto">🎟️</span>`;
}
function award(correct) {
  if (!correct) return;
  state.stars++; state.streak++;
  store.set("stars", state.stars);
  if (state.streak >= PER_TICKET) {
    state.streak = 0; state.tickets++; store.set("tickets", state.tickets);
    setTimeout(openBonus, 700);
  }
  renderBank(); renderDots();
}

/* ---------- Practice ---------- */
const HINTS = {
  spell: "Listen to the word, then type it.",
  shuffle: "Listen, then tap the letters in the right order.",
  fill: "Read the sentence and choose the missing word.",
  speak: "Tap 🎤 and say the word clearly."
};
function startPractice() {
  const r = rule();
  const pool = state.mode === "fill" ? r.items.filter(i => /_{2,}/.test(i.sentence || "")) : state.mode === "speak" ? r.items : spellItems(r);
  state.queue = shuffle(pool); state.qIndex = 0;
  els.practiceHint.textContent = HINTS[state.mode];
  renderDots(); nextQuestion();
}
function nextQuestion() {
  if (!state.queue.length) { els.practiceCard.innerHTML = `<p>No words for this mode in this rule.</p>`; return; }
  if (state.qIndex >= state.queue.length) { state.queue = shuffle(state.queue); state.qIndex = 0; }
  state.current = state.queue[state.qIndex++]; state.answered = false;
  ({ spell: qSpell, shuffle: qShuffle, fill: qFill, speak: qSpeak })[state.mode](state.current);
}
function qHeader(it, showPic = true) {
  const p = pictureFor(it);
  return `${showPic ? `<div class="pic big-pic ${picClass(p)}">${p}</div>` : ""}`;
}
function feedbackRow() { return `<p class="feedback" id="fb"></p><div class="button-row" id="afterRow"></div>`; }
function showResult(ok, word, extraBtn = "") {
  const fb = $("#fb"), card = els.practiceCard;
  fb.className = "feedback " + (ok ? "good" : "bad");
  fb.innerHTML = ok ? `✅ Correct! <b>${esc(word)}</b>` : `❌ It's <b>${highlight(word, rule())}</b>`;
  card.classList.remove("pop", "shake"); void card.offsetWidth; card.classList.add(ok ? "pop" : "shake");
  beep(ok ? "good" : "bad");
  award(ok);
  $("#afterRow").innerHTML = `${extraBtn}<button class="primary" id="nextBtn">Next ▶</button>`;
  $("#nextBtn").addEventListener("click", nextQuestion);
  $("#nextBtn").focus();
  if (!ok) speak(word);
}

function qSpell(it) {
  const w = cleanWord(it.word);
  els.practiceCard.innerHTML = `
    ${qHeader(it)}
    <button class="big-hear" id="hear">🔊 Hear the word</button>
    <div><input class="answer-input" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type here"></div>
    <div class="button-row"><button id="hint" class="ghost">💡 First letter</button><button id="check" class="primary">Check ✔</button></div>
    ${feedbackRow()}`;
  const ans = $("#ans");
  $("#hear").onclick = () => speak(w, .7);
  $("#hint").onclick = () => { ans.value = w[0]; ans.focus(); };
  $("#check").onclick = () => { if (state.answered) return; state.answered = true; showResult(norm(ans.value) === norm(w), w); };
  ans.addEventListener("keydown", e => { if (e.key === "Enter") { state.answered ? nextQuestion() : $("#check").click(); } });
  speak(w, .7); setTimeout(() => ans.focus(), 50);
}

function qShuffle(it) {
  const w = cleanWord(it.word).toLowerCase();
  let letters = shuffle([...w].map((c, i) => ({ c, i })));
  if (w.length > 2 && letters.map(l => l.c).join("") === w) letters = letters.reverse();
  els.practiceCard.innerHTML = `
    ${qHeader(it)}
    <button class="big-hear" id="hear">🔊 Hear the word</button>
    <div class="slots" id="slots">${[...w].map(() => `<div class="slot"></div>`).join("")}</div>
    <div class="tiles" id="tiles">${letters.map((l, k) => `<button class="tile" data-k="${k}">${l.c}</button>`).join("")}</div>
    <div class="button-row"><button id="reset" class="ghost">↺ Reset</button></div>
    ${feedbackRow()}`;
  const placed = [];
  const slots = [...document.querySelectorAll(".slot")];
  const draw = () => slots.forEach((s, i) => { s.textContent = placed[i] ? placed[i].c : ""; s.classList.toggle("filled", !!placed[i]); });
  $("#hear").onclick = () => speak(w, .7);
  $("#tiles").onclick = e => {
    const t = e.target.closest(".tile"); if (!t || state.answered || t.classList.contains("used")) return;
    placed.push({ c: t.textContent, el: t }); t.classList.add("used"); draw(); beep("tap");
    if (placed.length === w.length) { state.answered = true; showResult(placed.map(p => p.c).join("") === w, w, `<button id="hear2" class="ghost">🔊 Hear</button>`); const h = $("#hear2"); if (h) h.onclick = () => speak(w); }
  };
  $("#slots").onclick = e => {
    const s = e.target.closest(".slot"); if (!s || state.answered) return;
    const i = slots.indexOf(s); if (!placed[i]) return;
    placed.splice(i).forEach(p => p.el.classList.remove("used")); draw();
  };
  $("#reset").onclick = () => { if (state.answered) return; placed.splice(0).forEach(p => p.el.classList.remove("used")); draw(); };
  speak(w, .7);
}

function qFill(it) {
  const r = rule(), w = cleanWord(it.answer || it.word);
  const others = shuffle(r.items.map(i => cleanWord(i.answer || i.word)).filter(x => norm(x) !== norm(w))).filter((x, i, a) => a.indexOf(x) === i).slice(0, 3);
  const opts = shuffle([w, ...others]);
  els.practiceCard.innerHTML = `
    ${qHeader(it)}
    <p class="q-sentence">${sentenceHtml(it, true)}</p>
    <p class="translation">${els.optChinese.checked ? esc(it.translation || "") : ""}</p>
    <button class="big-hear" id="hear">🔊 Hear the sentence</button>
    <div class="choices" id="choices">${opts.map(o => `<button data-w="${esc(o)}">${esc(o)}</button>`).join("")}</div>
    ${feedbackRow()}`;
  $("#hear").onclick = () => speak(sentenceFull(it));
  $("#choices").onclick = e => {
    const b = e.target.closest("button"); if (!b || state.answered) return;
    state.answered = true;
    const ok = b.dataset.w === w;
    b.classList.add(ok ? "right" : "wrong");
    if (!ok) [...$("#choices").children].find(x => x.dataset.w === w)?.classList.add("right");
    document.querySelector(".q-sentence").innerHTML = sentenceHtml(it, false);
    showResult(ok, w);
    if (ok) speak(sentenceFull(it));
  };
}

function qSpeak(it) {
  const w = cleanWord(it.word);
  els.practiceCard.innerHTML = `
    ${qHeader(it)}
    <div class="word-main"><div class="word" style="font-size:48px">${highlight(w, rule())}</div></div>
    <div class="button-row" style="margin-top:12px">
      <button id="hear">🔊 Listen</button>
      <button class="big-hear" id="mic">🎤 Say it!</button>
      <button id="skip" class="ghost">Skip ▶</button>
    </div>
    ${feedbackRow()}`;
  $("#hear").onclick = () => speak(w);
  $("#skip").onclick = nextQuestion;
  $("#mic").onclick = async () => {
    const fb = $("#fb");
    if (!Recognition) { fb.className = "feedback bad"; fb.textContent = "Speech check works in Chrome or Edge."; return; }
    if (state.answered) return;
    fb.className = "feedback"; fb.textContent = "🎙️ Listening…";
    try {
      const alts = await listen();
      const ok = heardMatches(alts, w);
      if (ok) { state.answered = true; showResult(true, w); }
      else { fb.className = "feedback bad"; fb.textContent = `🔁 I heard “${alts[0] || "…"}”. Try again!`; beep("bad"); }
    } catch { fb.className = "feedback bad"; fb.textContent = "Microphone not available. Allow mic access and try again."; }
  };
}

/* ---------- Games ---------- */
function gameContext() {
  const r = rule();
  const targets = spellItems(r).map(i => ({ word: cleanWord(i.word), pic: pictureFor(i) }));
  const re = ruleRegex(r, "i");
  const targetSet = new Set(targets.map(t => t.word.toLowerCase()));
  const distract = [];
  const seen = new Set();
  for (const o of PHONICS_RULES) {
    if (o.id === r.id) continue;
    for (const i of spellItems(o)) {
      const w = cleanWord(i.word), lw = w.toLowerCase();
      if (seen.has(lw) || targetSet.has(lw) || (re && re.test(w))) continue;
      if (r.magic && new RegExp(`${r.magic}[^aeiou]e`, "i").test(w)) continue;
      seen.add(lw); distract.push({ word: w, pic: pictureFor(i) });
    }
  }
  return { rule: r, targets, distractors: distract, speak, beep, highlight: w => highlight(w, r), shuffle, pick, esc };
}
function renderGames() {
  els.gameGrid.innerHTML = PhonicsGames.list.map(g => `<button class="game-card" data-g="${g.id}"><span class="gi">${g.icon}</span><b>${g.name}</b><small>${g.desc}</small></button>`).join("");
}
els.gameGrid.addEventListener("click", e => {
  const b = e.target.closest(".game-card"); if (!b) return;
  if (!els.optFreePlay.checked) {
    if (state.tickets <= 0) { alertInline("You need a 🎟️ ticket. Get 5 correct answers in a practice mode first!"); return; }
    state.tickets--; store.set("tickets", state.tickets); renderBank();
  }
  launchGame(b.dataset.g);
});
function alertInline(msg) {
  let p = document.querySelector(".games-warn");
  if (!p) { p = document.createElement("p"); p.className = "feedback bad games-warn"; els.gameGrid.before(p); }
  p.textContent = msg;
}
function openBonus() {
  els.bonusChoices.innerHTML = PhonicsGames.list.map(g => `<button class="game-card" data-g="${g.id}"><span class="gi">${g.icon}</span><b>${g.name}</b></button>`).join("") +
    `<button class="game-card" data-g="random"><span class="gi">🎲</span><b>Surprise me</b></button>`;
  els.bonusModal.hidden = false;
}
els.bonusChoices.addEventListener("click", e => {
  const b = e.target.closest(".game-card"); if (!b) return;
  state.tickets--; store.set("tickets", state.tickets); renderBank();
  els.bonusModal.hidden = true;
  launchGame(b.dataset.g === "random" ? pick(PhonicsGames.list).id : b.dataset.g);
});
els.bonusLater.addEventListener("click", () => { els.bonusModal.hidden = true; });
function launchGame(id) {
  stopReading();
  PhonicsGames.play(id, gameContext(), () => { if (PRACTICE_MODES.includes(state.mode)) nextQuestion(); }, els.optFreePlay.checked);
}

/* ---------- init ---------- */
function init() {
  const fromHash = location.hash.slice(1);
  if (PHONICS_RULES.some(r => r.id === fromHash)) state.ruleId = fromHash;
  renderBank(); renderSidebar(); renderTitle(); renderLearn();
  document.querySelector(".rule-btn.active")?.scrollIntoView({ block: "center" });
}
window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (h !== state.ruleId && PHONICS_RULES.some(r => r.id === h)) selectRule(h, false); });
init();
