/**
 * Pure quiz engine — no DOM dependencies.
 */

/**
 * Fisher–Yates shuffle. Returns a new array; does not mutate input.
 * @template T
 * @param {T[]} items
 * @param {() => number} [random=Math.random]
 * @returns {T[]}
 */
export function shuffle(items, random = Math.random) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/**
 * Build four multiple-choice options including the correct capital.
 * @param {string} correctCapital
 * @param {{ capital: string }[]} countries
 * @param {() => number} [random=Math.random]
 * @returns {string[]}
 */
export function getOptions(correctCapital, countries, random = Math.random) {
  const wrong = countries
    .map((c) => c.capital)
    .filter((c) => c !== correctCapital);
  const distractors = shuffle(wrong, random).slice(0, 3);
  return shuffle([...distractors, correctCapital], random);
}

/**
 * Sanitize a player display name.
 * @param {string} raw
 * @param {number} [maxLength=40]
 * @returns {string}
 */
export function sanitizePlayerName(raw, maxLength = 40) {
  if (typeof raw !== 'string') return 'Player';
  const cleaned = raw
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength);
  return cleaned || 'Player';
}

/**
 * @typedef {'quiz' | 'practice'} QuizMode
 * @typedef {{
 *   country: { name: string, flag: string, population: string, capital: string },
 *   userAnswer: string,
 *   correctAnswer: string,
 *   isCorrect: boolean
 * }} AnswerRecord
 * @typedef {{
 *   mode: QuizMode,
 *   limit: number | null,
 *   score: number,
 *   current: number,
 *   questions: object[],
 *   answers: AnswerRecord[],
 *   answered: boolean,
 *   pool: object[],
 *   countries: object[]
 * }} QuizState
 */

/**
 * Create a new quiz session.
 * @param {object[]} countries
 * @param {{ mode?: QuizMode, limit?: number | null }} [options]
 * @param {() => number} [random]
 * @returns {QuizState}
 */
export function createQuiz(countries, options = {}, random = Math.random) {
  const mode = options.mode === 'practice' ? 'practice' : 'quiz';
  let limit = null;

  if (mode === 'quiz') {
    limit = typeof options.limit === 'number' ? options.limit : 10;
  } else if (typeof options.limit === 'number' && options.limit > 0) {
    limit = Math.min(options.limit, countries.length);
  }

  const pool = shuffle(countries, random);
  const questionCount = limit ?? Math.min(10, countries.length);
  const questions =
    mode === 'practice' && limit === null
      ? [pool[0]]
      : pool.slice(0, questionCount);

  return {
    mode,
    limit,
    score: 0,
    current: 0,
    questions,
    answers: [],
    answered: false,
    pool,
    countries,
    _poolIndex: mode === 'practice' && limit === null ? 0 : questionCount - 1,
    _random: random,
  };
}

/**
 * @param {QuizState & { _poolIndex?: number, _random?: () => number }} state
 */
export function getCurrentCountry(state) {
  if (isComplete(state)) return null;
  return state.questions[state.current] ?? null;
}

/**
 * @param {QuizState} state
 */
export function isComplete(state) {
  if (state.mode === 'practice' && state.limit === null) {
    return false;
  }
  return state.current >= state.questions.length;
}

/**
 * @param {QuizState} state
 */
export function getProgress(state) {
  if (state.mode === 'practice' && state.limit === null) {
    return {
      current: state.current + 1,
      total: null,
      label: `Question ${state.current + 1}`,
    };
  }
  const total = state.questions.length;
  const current = Math.min(state.current + 1, total);
  return {
    current,
    total,
    label: `Question ${current} of ${total}`,
  };
}

/**
 * Select an answer for the current question.
 * @param {QuizState & { _random?: () => number }} state
 * @param {string} selected
 * @returns {{ state: QuizState, isCorrect: boolean } | { error: string }}
 */
export function selectAnswer(state, selected) {
  if (isComplete(state)) {
    return { error: 'Quiz already complete' };
  }
  if (state.answered) {
    return { error: 'Already answered' };
  }

  const country = state.questions[state.current];
  if (!country) {
    return { error: 'No current question' };
  }

  const isCorrect = selected === country.capital;
  const answers = state.answers.concat({
    country,
    userAnswer: selected,
    correctAnswer: country.capital,
    isCorrect,
  });

  return {
    state: {
      ...state,
      score: state.score + (isCorrect ? 1 : 0),
      answers,
      answered: true,
    },
    isCorrect,
  };
}

/**
 * Advance to the next question. In infinite practice, appends a new question
 * when the pool is exhausted (reshuffles).
 * @param {QuizState & { _poolIndex?: number, _random?: () => number }} state
 * @returns {QuizState}
 */
export function nextQuestion(state) {
  if (!state.answered && !isComplete(state)) {
    return state;
  }

  if (state.mode === 'practice' && state.limit === null) {
    const random = state._random || Math.random;
    let pool = state.pool;
    let poolIndex = (state._poolIndex ?? 0) + 1;

    if (poolIndex >= pool.length) {
      pool = shuffle(state.countries, random);
      poolIndex = 0;
    }

    const nextCountry = pool[poolIndex];
    const questions = state.questions.concat(nextCountry);

    return {
      ...state,
      pool,
      _poolIndex: poolIndex,
      questions,
      current: state.current + 1,
      answered: false,
    };
  }

  return {
    ...state,
    current: state.current + 1,
    answered: false,
  };
}

/**
 * Options for the current question.
 * @param {QuizState & { _random?: () => number }} state
 * @returns {string[]}
 */
export function getCurrentOptions(state) {
  const country = getCurrentCountry(state);
  if (!country) return [];
  const random = state._random || Math.random;
  return getOptions(country.capital, state.countries, random);
}
