const RASS_CHANNEL = "https://www.youtube.com/@Rasslanguage";
const RASS_GO_PHONICS_PLAYLIST = "PLgC4CYIOokeIAwAqz4PJ40Q2xMSuDqCv8";

const state = {
  selectedRuleId: PHONICS_RULES[0]?.id || "",
  voices: [],
  quizOrder: []
};

const els = {
  ruleSearch: document.querySelector("#ruleSearch"),
  ruleList: document.querySelector("#ruleList"),
  ruleSource: document.querySelector("#ruleSource"),
  ruleTitle: document.querySelector("#ruleTitle"),
  ruleCount: document.querySelector("#ruleCount"),
  videoFrame: document.querySelector("#videoFrame"),
  videoSearchLink: document.querySelector("#videoSearchLink"),
  readRuleBtn: document.querySelector("#readRuleBtn"),
  shuffleQuizBtn: document.querySelector("#shuffleQuizBtn"),
  wordCards: document.querySelector("#wordCards"),
  quizRows: document.querySelector("#quizRows"),
  readRows: document.querySelector("#readRows"),
  speechSupport: document.querySelector("#speechSupport")
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
  const preferred = ["Jenny", "Aria", "Samantha", "Zira", "Google US English"];
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
  utterance.rate = 0.82;
  utterance.pitch = 1.08;
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
  PHONICS_RULES
    .filter(rule => {
      if (!query) return true;
      return normalizeText(`${rule.title} ${rule.sourceHeading}`).includes(query) ||
        rule.items.some(item => normalizeText(item.word).includes(query));
    })
    .forEach(rule => {
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
}

function renderVideo(rule) {
  els.videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${RASS_GO_PHONICS_PLAYLIST}`;
  els.videoSearchLink.href = `${RASS_CHANNEL}/search?query=${encodeURIComponent(`${rule.title} phonics`)}`;
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
    els.quizRows.append(row);
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

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

render();
