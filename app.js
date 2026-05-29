const RASS_CHANNEL = "https://www.youtube.com/@Rasslanguage";
const RASS_GO_PHONICS_PLAYLIST = "PLgC4CYIOokeIAwAqz4PJ40Q2xMSuDqCv8";

const state = {
  selectedRuleId: PHONICS_RULES[0]?.id || "",
  voices: [],
  quizOrder: []
};

const GROUP_ORDER = [
  "Short Vowels",
  "Long Vowels",
  "R-Controlled Vowels",
  "aw / al / au",
  "ow / ou",
  "oi / oy",
  "Diphthongs",
  "Blends",
  "Consonant Digraphs",
  "Soft Letters",
  "Other Phonics Rules"
];

const els = {
  ruleSearch: document.querySelector("#ruleSearch"),
  ruleList: document.querySelector("#ruleList"),
  ruleSource: document.querySelector("#ruleSource"),
  ruleTitle: document.querySelector("#ruleTitle"),
  ruleCount: document.querySelector("#ruleCount"),
  videoSearchLink: document.querySelector("#videoSearchLink"),
  readRuleBtn: document.querySelector("#readRuleBtn"),
  shuffleQuizBtn: document.querySelector("#shuffleQuizBtn"),
  wordCards: document.querySelector("#wordCards"),
  quizRows: document.querySelector("#quizRows"),
  readRows: document.querySelector("#readRows"),
  speechSupport: document.querySelector("#speechSupport"),
  studentSentence: document.querySelector("#studentSentence"),
  buildPromptBtn: document.querySelector("#buildPromptBtn"),
  generateCartoonBtn: document.querySelector("#generateCartoonBtn"),
  drawStripBtn: document.querySelector("#drawStripBtn"),
  downloadStripBtn: document.querySelector("#downloadStripBtn"),
  cartoonStatus: document.querySelector("#cartoonStatus"),
  cartoonPrompt: document.querySelector("#cartoonPrompt"),
  generatedImageWrap: document.querySelector("#generatedImageWrap"),
  stripCanvas: document.querySelector("#stripCanvas")
};

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function currentRule() {
  return PHONICS_RULES.find(rule => rule.id === state.selectedRuleId) || PHONICS_RULES[0];
}

function sentenceWithAnswer(item) {
  return (item.sentence || "").replace(/_{2,}/g, item.answer);
}

function sentenceWithBlank(item) {
  return item.sentence || "";
}

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function wordsFrom(text) {
  const clean = normalizeText(text);
  return clean ? clean.split(" ") : [];
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function chooseVoice() {
  const voices = state.voices.filter(voice => /^en[-_]US/i.test(voice.lang));
  const preferred = [
    "Microsoft Jenny Online",
    "Microsoft Aria Online",
    "Microsoft Michelle Online",
    "Microsoft Ava Online",
    "Samantha",
    "Google US English",
    "Zira",
    "Jenny",
    "Aria"
  ];
  return voices.find(voice => preferred.some(name => voice.name.includes(name))) ||
    voices.find(voice => /female|woman/i.test(voice.name)) ||
    voices[0] ||
    state.voices.find(voice => /^en/i.test(voice.lang));
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  state.voices = window.speechSynthesis.getVoices();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.72;
  utterance.pitch = 1.12;
  const voice = chooseVoice();
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function youtubeQuery(rule) {
  return `Rasslanguage ${rule.title} phonics cartoon`;
}

function renderSidebar() {
  const query = normalizeText(els.ruleSearch.value);
  els.ruleList.innerHTML = "";
  const filteredRules = PHONICS_RULES
    .filter(rule => {
      if (!query) return true;
      return normalizeText(`${rule.group || ""} ${rule.title} ${rule.sourceHeading}`).includes(query) ||
        rule.items.some(item => normalizeText(item.word).includes(query));
    });
  GROUP_ORDER.forEach(group => {
    const rules = filteredRules.filter(rule => (rule.group || "Other Phonics Rules") === group);
    if (!rules.length) return;
    const groupTitle = document.createElement("h3");
    groupTitle.className = "rule-group-title";
    groupTitle.textContent = group;
    els.ruleList.append(groupTitle);
    rules.forEach(rule => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `rule-link ${rule.id === state.selectedRuleId ? "active" : ""}`;
      button.innerHTML = `
        <span>${escapeHtml(rule.title)}</span>
        <small>${rule.items.length} words</small>
      `;
      button.addEventListener("click", () => {
        state.selectedRuleId = rule.id;
        state.quizOrder = [];
        render();
      });
      els.ruleList.append(button);
    });
  });
}

function renderVideo(rule) {
  els.videoSearchLink.href = `${RASS_CHANNEL}/search?query=${encodeURIComponent(`${rule.title} phonics`)}`;
  els.videoSearchLink.textContent = `Watch ${rule.title} on YouTube`;
}

function renderWords(rule) {
  els.wordCards.innerHTML = "";
  rule.items.forEach(item => {
    const card = document.createElement("article");
    card.className = "word-card";
    card.innerHTML = `
      <div class="word-head">
        <div>
          <h4>${escapeHtml(item.word)}</h4>
          <p class="definition">${escapeHtml(item.definition || "")}</p>
        </div>
        <span>${escapeHtml(item.pos || "")}</span>
      </div>
      <p class="sample">${escapeHtml(sentenceWithBlank(item))}</p>
      <p class="translation">${escapeHtml(item.translation || "")}</p>
      <div class="button-row">
        <button type="button" data-speak-word>Word</button>
        <button type="button" data-speak-sentence>Sentence</button>
      </div>
    `;
    card.querySelector("[data-speak-word]").addEventListener("click", () => speak(item.answer || item.word));
    card.querySelector("[data-speak-sentence]").addEventListener("click", () => speak(sentenceWithAnswer(item)));
    els.wordCards.append(card);
  });
}

function shuffledItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function quizItems(rule) {
  return rule.items.filter(item => /_{2,}/.test(item.sentence || ""));
}

function ensureQuizOrder(rule) {
  if (!state.quizOrder.length) state.quizOrder = shuffledItems(quizItems(rule));
  return state.quizOrder;
}

function renderQuiz(rule) {
  els.quizRows.innerHTML = "";
  ensureQuizOrder(rule).forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "practice-row";
    row.innerHTML = `
      <div class="practice-number">${index + 1}</div>
      <div class="practice-body">
        <p class="sample">${escapeHtml(sentenceWithBlank(item))}</p>
        <div class="answer-line">
          <input type="text" placeholder="Fill in the word" autocomplete="off">
          <button type="button" data-hear>Hear</button>
          <button type="button" data-check>Check</button>
        </div>
        <div class="handwriting-pad">
          <canvas width="520" height="160" aria-label="Finger writing pad"></canvas>
          <button type="button" data-clear-writing>Clear writing</button>
        </div>
        <p class="feedback"></p>
      </div>
    `;
    const input = row.querySelector("input");
    const feedback = row.querySelector(".feedback");
    row.querySelector("[data-hear]").addEventListener("click", () => speak(sentenceWithAnswer(item)));
    row.querySelector("[data-check]").addEventListener("click", () => {
      const typed = normalizeText(input.value);
      const answer = normalizeText(item.answer);
      const full = normalizeText(item.word);
      const correct = typed === answer || typed === full;
      feedback.textContent = correct ? `Correct: ${item.answer}` : `Try again. Answer sound: ${item.answer}`;
      feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
      if (!correct) speak(item.answer);
    });
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") row.querySelector("[data-check]").click();
    });
    setupWritingPad(row.querySelector("canvas"));
    row.querySelector("[data-clear-writing]").addEventListener("click", () => clearWritingPad(row.querySelector("canvas")));
    els.quizRows.append(row);
  });
}

function getCanvasPoint(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height)
  };
}

function clearWritingPad(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fffdf7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#e6d7bd";
  ctx.lineWidth = 2;
  for (let x = 28; x < canvas.width; x += 44) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(0, canvas.height * 0.68);
  ctx.lineTo(canvas.width, canvas.height * 0.68);
  ctx.stroke();
}

function setupWritingPad(canvas) {
  const ctx = canvas.getContext("2d");
  let drawing = false;
  clearWritingPad(canvas);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#18202a";
  ctx.lineWidth = 7;
  canvas.addEventListener("pointerdown", event => {
    drawing = true;
    canvas.setPointerCapture(event.pointerId);
    const point = getCanvasPoint(canvas, event);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  });
  canvas.addEventListener("pointermove", event => {
    if (!drawing) return;
    const point = getCanvasPoint(canvas, event);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  });
  canvas.addEventListener("pointerup", () => {
    drawing = false;
  });
  canvas.addEventListener("pointercancel", () => {
    drawing = false;
  });
}

function comparePronunciation(expected, transcript) {
  const expectedWords = wordsFrom(expected);
  const spokenWords = wordsFrom(transcript);
  const spokenSet = new Set(spokenWords);
  const missing = [];
  let matched = 0;
  expectedWords.forEach(word => {
    if (spokenSet.has(word)) matched += 1;
    else missing.push(word);
  });
  const percentage = expectedWords.length ? Math.round((matched / expectedWords.length) * 100) : 0;
  return { percentage, missing: [...new Set(missing)] };
}

function startRecording(item, row) {
  const transcriptBox = row.querySelector(".transcript");
  const resultBox = row.querySelector(".pronunciation-result");
  if (!SpeechRecognition) {
    transcriptBox.textContent = "Voice typing is not available in this browser.";
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  transcriptBox.textContent = "Listening...";
  resultBox.textContent = "";
  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    const score = comparePronunciation(sentenceWithAnswer(item), transcript);
    transcriptBox.textContent = transcript;
    resultBox.innerHTML = `
      <strong>${score.percentage}% correct</strong>
      <span>${score.missing.length ? `Check: ${escapeHtml(score.missing.join(", "))}` : "All key words were heard."}</span>
    `;
    resultBox.className = `pronunciation-result ${score.percentage >= 85 ? "correct" : "wrong"}`;
  };
  recognition.onerror = () => {
    transcriptBox.textContent = "Recording did not work. Please try again.";
  };
  recognition.start();
}

function renderReadAloud(rule) {
  els.speechSupport.textContent = SpeechRecognition ? "Voice typing ready" : "Chrome voice typing needed";
  els.readRows.innerHTML = "";
  rule.items.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "practice-row";
    row.innerHTML = `
      <div class="practice-number">${index + 1}</div>
      <div class="practice-body">
        <p class="sample">${escapeHtml(sentenceWithAnswer(item))}</p>
        <div class="button-row">
          <button type="button" data-hear>Hear</button>
          <button type="button" data-record>Record</button>
        </div>
        <p class="transcript"></p>
        <p class="pronunciation-result"></p>
      </div>
    `;
    row.querySelector("[data-hear]").addEventListener("click", () => speak(sentenceWithAnswer(item)));
    row.querySelector("[data-record]").addEventListener("click", () => startRecording(item, row));
    els.readRows.append(row);
  });
}

function representativeWords(rule) {
  const sentence = normalizeText(els.studentSentence.value);
  const used = rule.items.filter(item => sentence.includes(normalizeText(item.answer || item.word)));
  return (used.length ? used : rule.items.slice(0, 6)).slice(0, 8);
}

function buildCartoonPrompt() {
  const rule = currentRule();
  const sentence = els.studentSentence.value.trim();
  const words = representativeWords(rule).map(item => item.answer || item.word);
  const prompt = [
    "Create a bright, cute 3D animated cartoon picture for young EFL children ages 5 to 9.",
    `Phonics rule: ${rule.title}.`,
    `Representative phonics words to show clearly as objects or characters: ${words.join(", ")}.`,
    `Student sentence: ${sentence || "A funny phonics sentence using the words."}`,
    "Make it colorful, friendly, classroom-safe, simple, expressive, and suitable for a four-panel cartoon strip.",
    "Do not use copyrighted characters. Use original round, cheerful cartoon children and objects.",
    "Include visual clues for the phonics words and leave space for a sentence caption."
  ].join("\n");
  els.cartoonPrompt.value = prompt;
  els.cartoonStatus.textContent = "Prompt is ready. The cartoon generator needs a secure teacher image service.";
  els.cartoonStatus.className = "feedback correct";
  return prompt;
}

async function generateCartoon() {
  const prompt = buildCartoonPrompt();
  els.cartoonStatus.textContent = "Trying to generate a cartoon...";
  els.cartoonStatus.className = "feedback";
  try {
    const response = await fetch("/api/generate-cartoon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    if (!response.ok) throw new Error("No image service");
    const data = await response.json();
    if (!data.imageUrl) throw new Error("No image returned");
    els.generatedImageWrap.innerHTML = `<img src="${escapeHtml(data.imageUrl)}" alt="Generated cartoon picture">`;
    els.cartoonStatus.textContent = "Cartoon generated. You can download the strip.";
    els.cartoonStatus.className = "feedback correct";
    drawCartoonStrip(data.imageUrl);
  } catch {
    els.generatedImageWrap.innerHTML = "";
    els.cartoonStatus.textContent = "GitHub Pages cannot safely call GPT image generation directly. Use the prompt above with your teacher image tool, or download the worksheet strip below.";
    els.cartoonStatus.className = "feedback wrong";
    drawCartoonStrip();
  }
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = String(text).split(/\s+/).filter(Boolean);
  let line = "";
  let lines = [];
  words.forEach(word => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((row, index) => ctx.fillText(row, x, y + index * lineHeight));
}

function drawCartoonStrip(imageUrl = "") {
  const rule = currentRule();
  const canvas = els.stripCanvas;
  const ctx = canvas.getContext("2d");
  const sentence = els.studentSentence.value.trim() || `I can read ${rule.title} words.`;
  const words = representativeWords(rule).map(item => item.answer || item.word);
  ctx.fillStyle = "#fff7de";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#17202a";
  ctx.font = "bold 42px Comic Sans MS, Arial";
  ctx.fillText(`${rule.title} Cartoon Strip`, 36, 58);
  ctx.font = "28px Comic Sans MS, Arial";
  wrapCanvasText(ctx, sentence, 36, 100, 1120, 36, 3);
  const colors = ["#ffe083", "#bce7ff", "#c8f5c5", "#ffd0df"];
  const panelW = 270;
  const panelH = 260;
  words.slice(0, 4).forEach((word, index) => {
    const x = 36 + index * 288;
    const y = 220;
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(x, y, panelW, panelH);
    ctx.strokeStyle = "#17202a";
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, panelW, panelH);
    ctx.beginPath();
    ctx.arc(x + 135, y + 102, 58, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#17202a";
    ctx.font = "bold 32px Comic Sans MS, Arial";
    ctx.textAlign = "center";
    wrapCanvasText(ctx, word, x + 28, y + 196, panelW - 56, 36, 2);
    ctx.textAlign = "left";
    ctx.font = "42px Comic Sans MS, Arial";
    ctx.fillText(":-)", x + 104, y + 116);
  });
  if (imageUrl) {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      ctx.drawImage(image, 860, 30, 300, 160);
    };
    image.src = imageUrl;
  }
}

function downloadStrip() {
  drawCartoonStrip();
  const link = document.createElement("a");
  link.download = `${currentRule().id}-cartoon-strip.png`;
  link.href = els.stripCanvas.toDataURL("image/png");
  link.click();
}

function render() {
  const rule = currentRule();
  els.ruleSource.textContent = rule.sourceHeading;
  els.ruleTitle.textContent = rule.title;
  els.ruleCount.textContent = `${rule.items.length} vocabulary words and sample sentences`;
  renderSidebar();
  renderVideo(rule);
  renderWords(rule);
  renderQuiz(rule);
  renderReadAloud(rule);
  buildCartoonPrompt();
  drawCartoonStrip();
}

els.ruleSearch.addEventListener("input", renderSidebar);
els.readRuleBtn.addEventListener("click", () => {
  const rule = currentRule();
  speak(`${rule.title}. ${rule.items.slice(0, 8).map(item => item.word).join(", ")}`);
});
els.shuffleQuizBtn.addEventListener("click", () => {
  state.quizOrder = shuffledItems(quizItems(currentRule()));
  renderQuiz(currentRule());
});
els.buildPromptBtn.addEventListener("click", buildCartoonPrompt);
els.generateCartoonBtn.addEventListener("click", generateCartoon);
els.drawStripBtn.addEventListener("click", () => drawCartoonStrip());
els.downloadStripBtn.addEventListener("click", downloadStrip);
els.studentSentence.addEventListener("input", () => {
  buildCartoonPrompt();
  drawCartoonStrip();
});

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

render();
