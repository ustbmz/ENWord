/* ================= 词库数据 =================
   每句包含中文、英文原句，以及逐词词性/释义标注 */
const WORD_BANK = [
  {
    zh: "我弟弟成天吃垃圾食品（带一点夸张语气）",
    en: "My brother survives on junk food.",
    words: [
      { w: "My", pos: "代词", mean: "我的" },
      { w: "brother", pos: "名词", mean: "兄弟" },
      { w: "survives", pos: "动词", mean: "存活；靠…维持生活" },
      { w: "on", pos: "介词", mean: "依靠；在…上" },
      { w: "junk", pos: "名词", mean: "垃圾，废旧物" },
      { w: "food", pos: "名词", mean: "食物" }
    ]
  },
  {
    zh: "你能把消息转告给她吗？",
    en: "Could you pass the message along?",
    words: [
      { w: "Could", pos: "动词", mean: "能，可以（礼貌请求）" },
      { w: "you", pos: "代词", mean: "你" },
      { w: "pass", pos: "动词", mean: "传递" },
      { w: "the", pos: "冠词", mean: "这个（定冠词）" },
      { w: "message", pos: "名词", mean: "消息" },
      { w: "along", pos: "副词", mean: "向前；转达" }
    ]
  },
  {
    zh: "她每天早上都去慢跑。",
    en: "She goes jogging every morning.",
    words: [
      { w: "She", pos: "代词", mean: "她" },
      { w: "goes", pos: "动词", mean: "去（go 的第三人称单数）" },
      { w: "jogging", pos: "动词", mean: "慢跑" },
      { w: "every", pos: "形容词", mean: "每一个" },
      { w: "morning", pos: "名词", mean: "早晨" }
    ]
  },
  {
    zh: "别担心，我可以自己处理。",
    en: "Don't worry, I can handle it myself.",
    words: [
      { w: "Don't", pos: "动词", mean: "不要（助动词否定）" },
      { w: "worry", pos: "动词", mean: "担心" },
      { w: "I", pos: "代词", mean: "我" },
      { w: "can", pos: "动词", mean: "能够" },
      { w: "handle", pos: "动词", mean: "处理" },
      { w: "it", pos: "代词", mean: "它" },
      { w: "myself", pos: "代词", mean: "我自己" }
    ]
  },
  {
    zh: "这本书比那本书更有趣。",
    en: "This book is more interesting than that one.",
    words: [
      { w: "This", pos: "代词", mean: "这个" },
      { w: "book", pos: "名词", mean: "书" },
      { w: "is", pos: "动词", mean: "是" },
      { w: "more", pos: "副词", mean: "更" },
      { w: "interesting", pos: "形容词", mean: "有趣的" },
      { w: "than", pos: "介词", mean: "比" },
      { w: "that", pos: "代词", mean: "那个" },
      { w: "one", pos: "代词", mean: "一个（指代书）" }
    ]
  },
  {
    zh: "他昨天把钱包弄丢了。",
    en: "He lost his wallet yesterday.",
    words: [
      { w: "He", pos: "代词", mean: "他" },
      { w: "lost", pos: "动词", mean: "丢失" },
      { w: "his", pos: "代词", mean: "他的" },
      { w: "wallet", pos: "名词", mean: "钱包" },
      { w: "yesterday", pos: "副词", mean: "昨天" }
    ]
  },
  {
    zh: "我们应该趁天亮前出发。",
    en: "We should leave before it gets dark.",
    words: [
      { w: "We", pos: "代词", mean: "我们" },
      { w: "should", pos: "动词", mean: "应该" },
      { w: "leave", pos: "动词", mean: "出发；离开" },
      { w: "before", pos: "介词", mean: "在…之前" },
      { w: "it", pos: "代词", mean: "（天色）" },
      { w: "gets", pos: "动词", mean: "变得" },
      { w: "dark", pos: "形容词", mean: "黑暗的" }
    ]
  },
  {
    zh: "她把音乐开得很大声。",
    en: "She turned the music up loudly.",
    words: [
      { w: "She", pos: "代词", mean: "她" },
      { w: "turned", pos: "动词", mean: "调（旋钮）" },
      { w: "the", pos: "冠词", mean: "这个" },
      { w: "music", pos: "名词", mean: "音乐" },
      { w: "up", pos: "副词", mean: "向上；调高" },
      { w: "loudly", pos: "副词", mean: "大声地" }
    ]
  },
  {
    zh: "我朋友总是让我笑个不停。",
    en: "My friend always makes me laugh.",
    words: [
      { w: "My", pos: "代词", mean: "我的" },
      { w: "friend", pos: "名词", mean: "朋友" },
      { w: "always", pos: "副词", mean: "总是" },
      { w: "makes", pos: "动词", mean: "使，让" },
      { w: "me", pos: "代词", mean: "我（宾格）" },
      { w: "laugh", pos: "动词", mean: "笑" }
    ]
  },
  {
    zh: "请在门口等我几分钟。",
    en: "Please wait for me at the door for a few minutes.",
    words: [
      { w: "Please", pos: "副词", mean: "请" },
      { w: "wait", pos: "动词", mean: "等待" },
      { w: "for", pos: "介词", mean: "为了" },
      { w: "me", pos: "代词", mean: "我" },
      { w: "at", pos: "介词", mean: "在" },
      { w: "the", pos: "冠词", mean: "这个" },
      { w: "door", pos: "名词", mean: "门" },
      { w: "for", pos: "介词", mean: "持续" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "few", pos: "形容词", mean: "几个" },
      { w: "minutes", pos: "名词", mean: "分钟" }
    ]
  },
  {
    zh: "我不知道该怎么解释这件事。",
    en: "I don't know how to explain this thing.",
    words: [
      { w: "I", pos: "代词", mean: "我" },
      { w: "don't", pos: "动词", mean: "不（助动词否定）" },
      { w: "know", pos: "动词", mean: "知道" },
      { w: "how", pos: "副词", mean: "如何" },
      { w: "to", pos: "介词", mean: "不定式符号" },
      { w: "explain", pos: "动词", mean: "解释" },
      { w: "this", pos: "代词", mean: "这个" },
      { w: "thing", pos: "名词", mean: "事情" }
    ]
  },
  {
    zh: "天气真好，我们出去走走吧。",
    en: "The weather is so nice, let's go for a walk.",
    words: [
      { w: "The", pos: "冠词", mean: "这（定冠词）" },
      { w: "weather", pos: "名词", mean: "天气" },
      { w: "is", pos: "动词", mean: "是" },
      { w: "so", pos: "副词", mean: "如此" },
      { w: "nice", pos: "形容词", mean: "好的" },
      { w: "let's", pos: "动词", mean: "让我们" },
      { w: "go", pos: "动词", mean: "去" },
      { w: "for", pos: "介词", mean: "为了" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "walk", pos: "名词", mean: "散步" }
    ]
  }
];

/* ================= 状态与存储 ================= */
const STORE_KEY = "wordReviewProgress_v1";
let state = {
  index: 0,
  hintCount: 0,
  answers: {},        // { 句子索引: [用户输入的各词] }
  checked: {},        // { 句子索引: [每词对错 true/false] }
  history: [],        // { en, zh, correct, time }
  mastered: {},       // { "单词|释义": true }
  filter: "all",
  posShown: false,
  keySound: true,
  speak: { voiceURI: "", rate: 1.05, pitch: 1.0 }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = Object.assign(state, parsed);
      state.speak = Object.assign({ voiceURI: "", rate: 1.05, pitch: 1.0 }, parsed.speak || {});
    }
  } catch (e) { console.warn("读取进度失败", e); }
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
}

/* ================= DOM 工具 ================= */
const $ = (id) => document.getElementById(id);
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add("hidden"), 2200);
}
function normalize(s) {
  return (s || "").trim().toLowerCase().replace(/[.,!?;:，。！？、；：]/g, "").replace(/['’]/g, "'");
}

/* ===== 键盘敲击音效（Web Audio 实时合成，无外部文件） ===== */
let audioCtx = null;
let noiseBuffer = null;
function getAudioContext() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function getNoiseBuffer(ctx) {
  if (!noiseBuffer) {
    const len = Math.floor(ctx.sampleRate * 0.06);
    noiseBuffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
}
/* 机械键盘"嗒"声：短噪声脉冲 + 低频敲击体，type='back' 为退格音 */
function playKeySound(type = "press") {
  if (!state.keySound) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const isBack = type === "back";

    // 高频咔哒
    const src = ctx.createBufferSource();
    src.buffer = getNoiseBuffer(ctx);
    const hp = ctx.createBiquadFilter();
    hp.type = "bandpass";
    hp.frequency.value = isBack ? 1400 : 2200;
    hp.Q.value = 0.8;
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0.0001, now);
    g1.gain.exponentialRampToValueAtTime(isBack ? 0.18 : 0.26, now + 0.003);
    g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
    src.connect(hp); hp.connect(g1); g1.connect(ctx.destination);
    src.start(now); src.stop(now + 0.06);

    // 低频敲击body
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(isBack ? 150 : 210, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.04);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, now);
    g2.gain.exponentialRampToValueAtTime(0.18, now + 0.004);
    g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
    osc.connect(g2); g2.connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.06);
  } catch (e) { /* 音频不可用时静默 */ }
}

/* ================= 听写练习 ================= */
function currentSentence() { return WORD_BANK[state.index]; }
let lastAnswerCorrect = false;  // 当前题是否已答对（答对后回车进入下一题）

function renderDictation() {
  const s = currentSentence();
  $("zhSentence").textContent = s.zh;
  $("sentenceIndex").textContent = `第 ${state.index + 1} / ${WORD_BANK.length} 句`;

  // 输入格
  const box = $("wordInputs");
  box.innerHTML = "";
  const saved = state.answers[state.index] || [];
  s.words.forEach((item, i) => {
    const slot = document.createElement("div");
    slot.className = "word-slot";
    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.value = saved[i] || "";
    input.dataset.index = i;
    if (state.checked[state.index]) {
      input.classList.add(state.checked[state.index][i] ? "correct" : "wrong");
    }
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" || e.key === "Delete") playKeySound("back");
      onInputKey(e);
    });
    input.addEventListener("input", (e) => {
      // 退格由 keydown 处理，避免重复；仅字符输入时播放敲击声
      if (e.inputType !== "deleteContentBackward" && e.inputType !== "deleteContentForward") {
        playKeySound("press");
      }
      if (!state.answers[state.index]) state.answers[state.index] = [];
      state.answers[state.index][i] = input.value;
      input.classList.remove("correct", "wrong", "hinted");
      lastAnswerCorrect = false;
      $("feedback").textContent = "";
      $("feedback").className = "feedback";
    });
    slot.appendChild(input);
    box.appendChild(slot);
  });
  // 句末标点
  const punct = document.createElement("span");
  punct.className = "punctuation";
  punct.textContent = s.en.slice(-1).match(/[.,!?]/) ? s.en.slice(-1) : ".";
  box.appendChild(punct);

  // 提示次数
  $("hintCount").textContent = `${state.hintCount > 3 ? 3 : state.hintCount}/3`;
  $("btnHint").disabled = state.hintCount >= 3;

  // 反馈
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  const savedCheck = state.checked[state.index];
  lastAnswerCorrect = Array.isArray(savedCheck) && savedCheck.length === s.words.length && savedCheck.every(Boolean);
  if (lastAnswerCorrect) $("feedback").textContent = "✓ 本题已答对，按回车进入下一题。";

  // 词性答案
  renderPosSentence();
  updateProgress();
  updateFooter();
  saveState();
}

function onInputKey(e) {
  const inputs = [...document.querySelectorAll("#wordInputs input")];
  const idx = inputs.indexOf(e.target);
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    playKeySound("press");
    if (e.key === "Enter" && lastAnswerCorrect) {
      // 已答对：回车直接进入下一题
      goTo(state.index + 1);
      return;
    }
    if (e.key === " " && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    } else {
      checkAnswer();
    }
  } else if (e.key === "Backspace" && !e.target.value && idx > 0) {
    inputs[idx - 1].focus();
  }
}

function checkAnswer() {
  const s = currentSentence();
  const inputs = [...document.querySelectorAll("#wordInputs input")];
  const results = [];
  let allCorrect = true;
  inputs.forEach((input, i) => {
    const ok = normalize(input.value) === normalize(s.words[i].w);
    results.push(ok);
    input.classList.remove("correct", "wrong");
    input.classList.add(ok ? "correct" : "wrong");
    if (!ok) allCorrect = false;
  });

  state.checked[state.index] = results;
  const wrongCount = results.filter(r => !r).length;

  if (allCorrect) {
    lastAnswerCorrect = true;
    $("feedback").textContent = "🎉 完全正确！太棒了！按回车进入下一题。";
    $("feedback").className = "feedback ok pop";
    // 记录掌握单词
    s.words.forEach(item => { state.mastered[item.w + "|" + item.mean] = true; });
    // 历史记录去重（同句仅保留最新）
    state.history = state.history.filter(h => h.en !== s.en);
    state.history.unshift({ en: s.en, zh: s.zh, correct: true, time: Date.now() });
    toast("回答正确 ✓");
  } else {
    $("feedback").textContent = `还有 ${wrongCount} 个单词拼写有误，请检查标红的单词后重试。`;
    $("feedback").className = "feedback err shake";
    state.history = state.history.filter(h => h.en !== s.en);
    state.history.unshift({ en: s.en, zh: s.zh, correct: false, time: Date.now() });
  }
  saveState();
  updateFooter();
  if (state.index === WORD_BANK.length - 1) updateStatsPanel();
}

function showHint() {
  if (state.hintCount >= 3) return;
  const s = currentSentence();
  const inputs = [...document.querySelectorAll("#wordInputs input")];
  // 找到第一个未正确填写的词
  let target = -1;
  for (let i = 0; i < inputs.length; i++) {
    if (normalize(inputs[i].value) !== normalize(s.words[i].w)) { target = i; break; }
  }
  if (target < 0) { toast("已经全部填对啦"); return; }
  const word = s.words[target].w;
  const revealed = word.slice(0, Math.min(word.length, Math.floor(word.length / 2) + 1));
  inputs[target].value = revealed;
  inputs[target].classList.remove("correct", "wrong");
  inputs[target].classList.add("hinted");
  inputs[target].focus();
  if (!state.answers[state.index]) state.answers[state.index] = [];
  state.answers[state.index][target] = revealed;
  state.hintCount++;
  $("hintCount").textContent = `${state.hintCount}/3`;
  $("btnHint").disabled = state.hintCount >= 3;
  $("feedback").textContent = `已提示第 ${target + 1} 个单词：完整答案为「${word}」（${s.words[target].mean}）`;
  $("feedback").className = "feedback";
  saveState();
}

function resetAnswer() {
  const s = currentSentence();
  delete state.answers[state.index];
  delete state.checked[state.index];
  state.hintCount = 0;
  renderDictation();
  document.querySelector("#wordInputs input")?.focus();
  toast("已清空本题");
}

function goTo(index) {
  state.index = (index + WORD_BANK.length) % WORD_BANK.length;
  state.hintCount = 0;
  // 下一题时清除该题的提示计数是全局的简化处理
  renderDictation();
  document.querySelector("#wordInputs input")?.focus();
}

/* ================= 词性标注 / 发音 ================= */
function renderPosSentence() {
  const s = currentSentence();
  const box = $("posSentence");
  box.innerHTML = "";
  s.words.forEach(item => {
    const span = document.createElement("span");
    span.className = "pos-word";
    span.innerHTML = `<span class="w pos-${item.pos}">${escapeHtml(item.w)}</span><span class="p pos-${item.pos}">${item.pos}</span>`;
    box.appendChild(span);
  });
  box.classList.toggle("hidden", !state.posShown);
  $("btnTogglePos").textContent = state.posShown ? "隐藏答案 ▴" : "显示答案 ▾";
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* 挑选最自然的英语语音：本地优先 + 偏好高质量音色 */
function pickEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  // 用户手动指定
  if (state.speak.voiceURI) {
    const chosen = voices.find(v => v.voiceURI === state.speak.voiceURI);
    if (chosen) return chosen;
  }
  const en = voices.filter(v => /^en[-_]/i.test(v.lang));
  if (!en.length) return voices[0] || null;
  // 优先高质量英语音色（自然/女声优先）
  const preferred = ["Samantha", "Google US English", "Google UK English Female", "Microsoft Aria", "Microsoft Jenny", "Karen", "Daniel", "Alex"];
  for (const p of preferred) {
    const hit = en.find(v => v.name.includes(p) && v.localService) || en.find(v => v.name.includes(p));
    if (hit) return hit;
  }
  return en.find(v => v.localService) || en[0];
}

function speak(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) { toast("当前浏览器不支持语音朗读"); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = pickEnglishVoice();
  if (voice) u.voice = voice;
  u.lang = voice ? voice.lang : lang;
  u.rate = state.speak.rate;
  u.pitch = state.speak.pitch;
  u.volume = 1;
  window.speechSynthesis.speak(u);
}

/* ================= 单词复习 ================= */
function collectWords() {
  const map = new Map();
  WORD_BANK.forEach(s => s.words.forEach(item => {
    const key = item.w.toLowerCase() + "|" + item.mean;
    if (!map.has(key)) map.set(key, { ...item, key, from: s.en, fromZh: s.zh });
  }));
  return [...map.values()];
}

function renderReview() {
  let words = collectWords();
  if (state.filter !== "all") words = words.filter(w => w.pos === state.filter);
  const grid = $("wordGrid");
  grid.innerHTML = "";
  words.forEach(w => {
    const card = document.createElement("div");
    card.className = "word-card" + (state.mastered[w.key] ? " mastered" : "");
    card.innerHTML = `
      <span class="wc-pos bg-${w.pos}">${w.pos}</span>
      <div class="wc-word">${escapeHtml(w.w)}</div>
      <div class="wc-meaning">${escapeHtml(w.mean)}</div>
    `;
    card.addEventListener("click", () => {
      state.mastered[w.key] = !state.mastered[w.key];
      saveState();
      renderReview();
      speak(w.w);
      toast(state.mastered[w.key] ? `已标记掌握：${w.w}` : `已取消掌握：${w.w}`);
    });
    grid.appendChild(card);
  });
  if (!words.length) grid.innerHTML = '<div class="empty-tip">该分类下暂无单词</div>';

  const s = currentSentence();
  const rBox = $("reviewSentence");
  rBox.innerHTML = "";
  s.words.forEach(item => {
    const span = document.createElement("span");
    span.className = "pos-word";
    span.innerHTML = `<span class="w pos-${item.pos}">${escapeHtml(item.w)}</span>`;
    rBox.appendChild(span);
  });
  $("reviewTranslation").textContent = s.zh;
}

/* ================= 统计 ================= */
function correctSentenceCount() {
  return new Set(state.history.filter(h => h.correct).map(h => h.en)).size;
}
function answeredSentenceCount() {
  return new Set(state.history.map(h => h.en)).size;
}
function masteredWordCount() { return Object.values(state.mastered).filter(Boolean).length; }
function accuracyRate() {
  const total = state.history.length;
  if (!total) return 0;
  return Math.round(state.history.filter(h => h.correct).length / total * 100);
}
function totalWordCount() { return WORD_BANK.reduce((sum, s) => sum + s.words.length, 0); }

function updateProgress() {
  const total = WORD_BANK.length;
  const done = answeredSentenceCount();
  const pct = total ? Math.round(done / total * 100) : 0;
  $("progressPct").textContent = pct + "%";
  $("progressFill").style.width = pct + "%";
}

function updateFooter() {
  $("footWords").textContent = masteredWordCount() + " / " + totalWordCount();
  $("footSentences").textContent = answeredSentenceCount() + " / " + WORD_BANK.length;
  $("footRate").textContent = accuracyRate() + "%";
}

function updateStatsPanel() {
  $("statTotal").textContent = answeredSentenceCount();
  $("statCorrect").textContent = correctSentenceCount();
  $("statWords").textContent = masteredWordCount();
  $("statRate").textContent = accuracyRate() + "%";

  // 各词性掌握情况
  const all = collectWords();
  const posList = ["名词", "动词", "形容词", "副词", "介词", "代词", "冠词", "其他"];
  $("statsBars").innerHTML = posList.map(pos => {
    const group = all.filter(w => w.pos === pos);
    if (!group.length) return "";
    const mastered = group.filter(w => state.mastered[w.key]).length;
    const pct = Math.round(mastered / group.length * 100);
    return `<div class="bar-row"><span class="bar-name">${pos}</span><span class="bar-track"><span class="bar-fill" style="width:${pct}%"></span></span><span class="bar-val">${mastered}/${group.length}</span></div>`;
  }).join("");

  // 历史记录
  const hist = $("historyList");
  if (!state.history.length) {
    hist.innerHTML = '<div class="empty-tip">还没有学习记录，快去做几道听写题吧～</div>';
  } else {
    hist.innerHTML = state.history.slice(0, 20).map(h => `
      <div class="history-item">
        <span class="hi-en">${escapeHtml(h.en)}</span>
        <span class="hi-res ${h.correct ? "ok" : "no"}">${h.correct ? "✓ 正确" : "✗ 错误"}</span>
      </div>`).join("");
  }
}

/* ================= 弹窗 ================= */
function openModal(html) {
  $("modalContent").innerHTML = html;
  $("modalMask").classList.remove("hidden");
}
function closeModal() { $("modalMask").classList.add("hidden"); }

/* 发音设置面板：选择语音、语速、音调并试听 */
function openSettings() {
  const voices = ("speechSynthesis" in window) ? window.speechSynthesis.getVoices() : [];
  const enVoices = voices.filter(v => /^en[-_]/i.test(v.lang));
  const recommended = pickEnglishVoice();
  const voiceOptions = enVoices.map(v =>
    `<option value="${escapeHtml(v.voiceURI)}" ${recommended && v.voiceURI === recommended.voiceURI ? "selected" : ""}>${escapeHtml(v.name)}${v.localService ? "（本地）" : ""}</option>`
  ).join("");

  openModal(`
    <h3>⚙️ 发音设置</h3>
    <p>觉得发音别扭？在这里挑一个顺耳的英语音色，调好语速后记得点「保存设置」。</p>
    <div class="setting-row">
      <label>语音音色</label>
      <select id="setVoice">
        <option value="">自动选择（推荐）</option>
        ${voiceOptions}
      </select>
    </div>
    <div class="setting-row">
      <label>语速 <b id="rateVal">${state.speak.rate.toFixed(2)}</b></label>
      <input type="range" id="setRate" min="0.6" max="1.3" step="0.05" value="${state.speak.rate}">
    </div>
    <div class="setting-row">
      <label>音调 <b id="pitchVal">${state.speak.pitch.toFixed(2)}</b></label>
      <input type="range" id="setPitch" min="0.6" max="1.4" step="0.05" value="${state.speak.pitch}">
    </div>
    <div class="setting-row setting-toggle">
      <label for="setKeySound">⌨️ 键盘敲击声</label>
      <input type="checkbox" id="setKeySound" ${state.keySound ? "checked" : ""}>
    </div>
    <div class="setting-actions">
      <button class="btn btn-ghost" id="btnTryVoice">🔊 试听</button>
      <button class="btn btn-primary" id="btnSaveVoice">保存设置</button>
    </div>
    <p class="setting-tip">试听句：My brother survives on junk food.</p>
  `);

  $("setKeySound").addEventListener("change", e => {
    state.keySound = e.target.checked;
    saveState();
    if (state.keySound) playKeySound("press");
  });
  $("setRate").addEventListener("input", e => $("rateVal").textContent = (+e.target.value).toFixed(2));
  $("setPitch").addEventListener("input", e => $("pitchVal").textContent = (+e.target.value).toFixed(2));

  $("btnTryVoice").addEventListener("click", () => {
    const draft = {
      voiceURI: $("setVoice").value,
      rate: +$("setRate").value,
      pitch: +$("setPitch").value
    };
    const backup = state.speak;
    state.speak = draft;
    speak("My brother survives on junk food.");
    state.speak = backup;
  });
  $("btnSaveVoice").addEventListener("click", () => {
    state.speak = {
      voiceURI: $("setVoice").value,
      rate: +$("setRate").value,
      pitch: +$("setPitch").value
    };
    saveState();
    closeModal();
    toast("发音设置已保存");
  });
}

/* ================= 事件绑定 ================= */
function bindEvents() {
  // 模式切换
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      $("panel-" + tab.dataset.tab).classList.add("active");
      if (tab.dataset.tab === "review") renderReview();
      if (tab.dataset.tab === "stats") updateStatsPanel();
    });
  });

  // 听写控制
  $("btnCheck").addEventListener("click", checkAnswer);
  $("btnHint").addEventListener("click", showHint);
  $("btnReset").addEventListener("click", resetAnswer);
  $("btnPrev").addEventListener("click", () => goTo(state.index - 1));
  $("btnNext").addEventListener("click", () => goTo(state.index + 1));
  $("btnTogglePos").addEventListener("click", () => {
    state.posShown = !state.posShown;
    saveState();
    renderPosSentence();
  });
  $("btnSpeak").addEventListener("click", () => speak(currentSentence().en));

  // 复习筛选
  document.querySelectorAll(".chip-tab").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip-tab").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.filter = chip.dataset.filter;
      renderReview();
    });
  });

  // 统计清空
  $("btnClear").addEventListener("click", () => {
    if (!confirm("确定清空所有学习记录吗？此操作不可恢复。")) return;
    state = { index: 0, hintCount: 0, answers: {}, checked: {}, history: [], mastered: {}, filter: "all", posShown: false, keySound: true, speak: { voiceURI: "", rate: 1.05, pitch: 1.0 } };
    saveState();
    renderDictation();
    updateStatsPanel();
    toast("学习记录已清空");
  });

  // 帮助 / 设置
  $("btnHelp").addEventListener("click", () => openModal(`
    <h3>📖 使用说明</h3>
    <ul>
      <li><b>听写练习</b>：根据中文提示，在每个空格中输入对应的英文单词。</li>
      <li>按 <b>空格键</b> 切换到下一个单词，按 <b>Enter</b> 确认答案。</li>
      <li>点击「提示」可显示当前单词的前半部分与中文释义（每题最多 3 次）。</li>
      <li>点击「听发音」可朗读当前英文句子。</li>
      <li><b>单词复习</b>：按词性筛选单词，点击卡片可标记/取消「已掌握」。</li>
      <li>学习进度会自动保存在本地浏览器中。</li>
    </ul>`));
  $("btnSpeTop").addEventListener("click", openSettings);
  $("modalClose").addEventListener("click", closeModal);
  $("modalMask").addEventListener("click", e => { if (e.target === $("modalMask")) closeModal(); });

  // 全局 Enter 确认
  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && !$("modalMask").classList.contains("hidden")) closeModal();
  });
}

/* ================= 初始化 ================= */
function init() {
  loadState();
  bindEvents();
  renderDictation();
  updateStatsPanel();
  document.querySelector("#wordInputs input")?.focus();
}
init();
