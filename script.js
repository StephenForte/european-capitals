import { europeanCountries } from './countries.js';
import {
  createQuiz,
  getCurrentCountry,
  getCurrentOptions,
  getProgress,
  isComplete,
  nextQuestion,
  sanitizePlayerName,
  selectAnswer,
} from './quiz.js';

const STORAGE_KEYS = {
  playerName: 'ecq.playerName',
  practiceUnlimited: 'ecq.practiceUnlimited',
  practiceLimit: 'ecq.practiceLimit',
};

const els = {
  startPage: document.getElementById('start-page'),
  gamePage: document.getElementById('game-page'),
  startForm: document.getElementById('start-form'),
  playerNameInput: document.getElementById('player-name'),
  startQuizBtn: document.getElementById('start-quiz-btn'),
  startPracticeBtn: document.getElementById('start-practice-btn'),
  practiceOptions: document.getElementById('practice-options'),
  practiceUnlimitedToggle: document.getElementById('practice-unlimited-toggle'),
  practiceLimitField: document.getElementById('practice-limit-field'),
  practiceLimitInput: document.getElementById('practice-limit'),
  confirmPracticeBtn: document.getElementById('confirm-practice-btn'),
  playerDisplayName: document.getElementById('player-display-name'),
  score: document.getElementById('score'),
  progressLabel: document.getElementById('progress-label'),
  countryFlag: document.getElementById('country-flag'),
  countryName: document.getElementById('country-name'),
  countryPopulation: document.getElementById('country-population'),
  optionsContainer: document.getElementById('options-container'),
  questionPrompt: document.getElementById('question-prompt'),
  resultSection: document.getElementById('result-section'),
  resultMessage: document.getElementById('result-message'),
  correctAnswer: document.getElementById('correct-answer'),
  playView: document.getElementById('play-view'),
  resultsView: document.getElementById('results-view'),
  finalScore: document.getElementById('final-score'),
  finalSub: document.getElementById('final-sub'),
  quizSummary: document.getElementById('quiz-summary'),
  nextBtn: document.getElementById('next-btn'),
  endPracticeBtn: document.getElementById('end-practice-btn'),
  newQuizBtn: document.getElementById('new-quiz-btn'),
  backToStartBtn: document.getElementById('back-to-start-btn'),
};

/** @type {ReturnType<typeof createQuiz> | null} */
let quizState = null;
/** @type {{ mode: 'quiz' | 'practice', limit: number | null }} */
let lastSession = { mode: 'quiz', limit: 10 };
/** Whether the UI is showing the end-of-session summary (incl. ended open practice). */
let showingResults = false;

function readStorage(key, fallback = '') {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore quota / private mode */
  }
}

function isOpenPractice(state = quizState) {
  return Boolean(state && state.mode === 'practice' && state.limit === null);
}

function syncPracticeLimitUi() {
  const unlimited = els.practiceUnlimitedToggle.checked;
  els.practiceLimitField.hidden = unlimited;
  els.practiceLimitInput.disabled = unlimited;
}

function restorePreferences() {
  const savedName = readStorage(STORAGE_KEYS.playerName);
  if (savedName) {
    els.playerNameInput.value = sanitizePlayerName(savedName);
  }

  // Migrate old "limit enabled" key: previously unchecked meant unlimited.
  const legacyLimitEnabled = readStorage('ecq.practiceLimitEnabled');
  const unlimitedSaved = readStorage(STORAGE_KEYS.practiceUnlimited);
  if (unlimitedSaved === '1' || (unlimitedSaved === '' && legacyLimitEnabled === '0')) {
    els.practiceUnlimitedToggle.checked = true;
  } else {
    els.practiceUnlimitedToggle.checked = false;
  }
  syncPracticeLimitUi();

  const savedLimit = Number(readStorage(STORAGE_KEYS.practiceLimit, '10'));
  if (Number.isFinite(savedLimit) && savedLimit >= 1 && savedLimit <= 25) {
    els.practiceLimitInput.value = String(savedLimit);
  }
}

function getPlayerName() {
  return sanitizePlayerName(els.playerNameInput.value);
}

function showStart() {
  showingResults = false;
  els.gamePage.hidden = true;
  els.startPage.hidden = false;
  els.practiceOptions.hidden = true;
  els.playerNameInput.focus();
}

function showGame() {
  els.startPage.hidden = true;
  els.gamePage.hidden = false;
}

function clearOptions() {
  while (els.optionsContainer.firstChild) {
    els.optionsContainer.removeChild(els.optionsContainer.firstChild);
  }
}

function clearSummary() {
  while (els.quizSummary.firstChild) {
    els.quizSummary.removeChild(els.quizSummary.firstChild);
  }
}

function updateHud() {
  if (!quizState) return;
  els.score.textContent = String(quizState.score);
  const progress = getProgress(quizState);
  if (showingResults || isComplete(quizState)) {
    const answered = quizState.answers.length;
    els.progressLabel.textContent = answered
      ? `Complete · ${answered}`
      : 'Complete';
    return;
  }
  els.progressLabel.textContent = progress.label;
}

function renderPlayView() {
  if (!quizState) return;

  els.playView.hidden = false;
  els.resultsView.hidden = true;
  els.newQuizBtn.hidden = true;
  els.nextBtn.hidden = false;
  els.nextBtn.disabled = !quizState.answered;
  els.endPracticeBtn.hidden = !isOpenPractice();
  els.questionPrompt.hidden = false;

  const country = getCurrentCountry(quizState);
  if (!country) return;

  els.countryFlag.src = country.flag;
  els.countryFlag.alt = `Flag of ${country.name}`;
  els.countryName.textContent = country.name;
  els.countryPopulation.textContent = country.population;

  clearOptions();
  const options = getCurrentOptions(quizState);
  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => onSelectOption(option));
    els.optionsContainer.appendChild(btn);
  });

  els.resultSection.hidden = true;
  els.resultMessage.textContent = '';
  els.resultMessage.className = 'result-message';
  els.correctAnswer.textContent = '';
  updateHud();
}

function onSelectOption(selected) {
  if (!quizState || quizState.answered) return;

  const result = selectAnswer(quizState, selected);
  if ('error' in result) return;

  quizState = result.state;
  const country = quizState.answers[quizState.answers.length - 1].country;

  Array.from(els.optionsContainer.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === country.capital) {
      btn.classList.add('correct');
    } else if (btn.textContent === selected && !result.isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  els.resultSection.hidden = false;
  els.resultMessage.textContent = result.isCorrect ? 'Correct!' : 'Incorrect';
  els.resultMessage.className = `result-message ${
    result.isCorrect ? 'is-correct' : 'is-incorrect'
  }`;
  els.correctAnswer.textContent = `Correct answer: ${country.capital}`;
  els.nextBtn.disabled = false;
  els.nextBtn.focus();
  updateHud();
}

function buildSummaryRow(answer, index) {
  const row = document.createElement('div');
  row.className = `summary-row ${answer.isCorrect ? 'correct' : 'incorrect'}`;
  row.style.animationDelay = `${Math.min(index, 12) * 40}ms`;

  const flag = document.createElement('img');
  flag.className = 'summary-flag';
  flag.src = answer.country.flag;
  flag.alt = '';
  flag.width = 36;
  flag.height = 24;
  flag.loading = 'lazy';

  const num = document.createElement('span');
  num.className = 'summary-num';
  num.textContent = `${index + 1}.`;

  const body = document.createElement('div');
  body.className = 'summary-body';

  const countryEl = document.createElement('div');
  countryEl.className = 'summary-country';
  countryEl.textContent = answer.country.name;

  const meta = document.createElement('div');
  meta.className = 'summary-meta';
  meta.textContent = `Capital: ${answer.correctAnswer} · Your answer: ${answer.userAnswer}`;

  body.append(countryEl, meta);
  row.append(flag, num, body);
  return row;
}

function renderResultsView() {
  if (!quizState) return;

  showingResults = true;
  els.playView.hidden = true;
  els.resultsView.hidden = false;
  els.nextBtn.hidden = true;
  els.endPracticeBtn.hidden = true;
  els.newQuizBtn.hidden = false;

  const total = quizState.answers.length;
  const score = quizState.score;
  const pct = total ? Math.round((score / total) * 100) : 0;

  els.finalScore.textContent = `${score} / ${total}`;
  els.finalSub.textContent = isOpenPractice()
    ? `Practice session · ${pct}%`
    : `${pct}% · Nice work, ${getPlayerName()}`;

  clearSummary();
  quizState.answers.forEach((answer, index) => {
    els.quizSummary.appendChild(buildSummaryRow(answer, index));
  });

  updateHud();
  els.newQuizBtn.focus();
}

function render() {
  if (!quizState) return;

  if (isComplete(quizState)) {
    renderResultsView();
    return;
  }

  showingResults = false;
  renderPlayView();
}

function startSession(mode, limit) {
  const name = getPlayerName();
  writeStorage(STORAGE_KEYS.playerName, name);
  els.playerDisplayName.textContent = name;

  lastSession = { mode, limit };
  quizState = createQuiz(europeanCountries, { mode, limit });
  showingResults = false;

  showGame();
  render();
}

function startQuizMode(event) {
  event.preventDefault();
  startSession('quiz', 10);
}

function togglePracticePanel() {
  const opening = els.practiceOptions.hidden;
  els.practiceOptions.hidden = !opening;
  if (opening) {
    if (els.practiceUnlimitedToggle.checked) {
      els.practiceUnlimitedToggle.focus();
    } else {
      els.practiceLimitInput.focus();
    }
  }
}

function onPracticeUnlimitedToggle() {
  syncPracticeLimitUi();
  writeStorage(
    STORAGE_KEYS.practiceUnlimited,
    els.practiceUnlimitedToggle.checked ? '1' : '0'
  );
  if (!els.practiceUnlimitedToggle.checked) {
    els.practiceLimitInput.focus();
  }
}

function beginPractice() {
  const unlimited = els.practiceUnlimitedToggle.checked;
  let limit = null;

  if (!unlimited) {
    const raw = Number(els.practiceLimitInput.value);
    const clamped = Number.isFinite(raw)
      ? Math.min(25, Math.max(1, Math.floor(raw)))
      : 10;
    els.practiceLimitInput.value = String(clamped);
    writeStorage(STORAGE_KEYS.practiceLimit, String(clamped));
    limit = clamped;
  }

  writeStorage(STORAGE_KEYS.practiceUnlimited, unlimited ? '1' : '0');
  startSession('practice', limit);
}

function onNext() {
  if (!quizState || !quizState.answered) return;
  quizState = nextQuestion(quizState);
  render();
}

function endOpenPractice() {
  if (!isOpenPractice() || showingResults) return;
  if (quizState.answers.length === 0) {
    quizState = null;
    showStart();
    return;
  }
  renderResultsView();
}

function onPlayAgain() {
  startSession(lastSession.mode, lastSession.limit);
}

function onBackToStart() {
  quizState = null;
  showStart();
}

function bindEvents() {
  els.startForm.addEventListener('submit', startQuizMode);
  els.startQuizBtn.addEventListener('click', startQuizMode);
  els.startPracticeBtn.addEventListener('click', togglePracticePanel);
  els.practiceUnlimitedToggle.addEventListener('change', onPracticeUnlimitedToggle);
  els.confirmPracticeBtn.addEventListener('click', beginPractice);
  els.nextBtn.addEventListener('click', onNext);
  els.endPracticeBtn.addEventListener('click', endOpenPractice);
  els.newQuizBtn.addEventListener('click', onPlayAgain);
  els.backToStartBtn.addEventListener('click', onBackToStart);
}

restorePreferences();
bindEvents();
