import { describe, expect, it } from 'vitest';
import { europeanCountries } from '../countries.js';
import {
  createQuiz,
  getCurrentCountry,
  getCurrentOptions,
  getOptions,
  getProgress,
  isComplete,
  nextQuestion,
  sanitizePlayerName,
  selectAnswer,
  shuffle,
} from '../quiz.js';

/** Deterministic PRNG for stable tests */
function makeRandom(seed = 1) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const sample = europeanCountries.slice(0, 8);

describe('shuffle', () => {
  it('preserves all elements', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = shuffle(input, makeRandom(42));
    expect(result).toHaveLength(input.length);
    expect([...result].sort((a, b) => a - b)).toEqual(input);
    expect(result).not.toBe(input);
  });

  it('does not mutate the original array', () => {
    const input = ['a', 'b', 'c'];
    const copy = [...input];
    shuffle(input, makeRandom(7));
    expect(input).toEqual(copy);
  });
});

describe('getOptions', () => {
  it('always includes the correct capital and three unique distractors', () => {
    const correct = 'Berlin';
    const options = getOptions(correct, europeanCountries, makeRandom(3));
    expect(options).toHaveLength(4);
    expect(options).toContain(correct);
    expect(new Set(options).size).toBe(4);
  });
});

describe('sanitizePlayerName', () => {
  it('trims, strips control characters, and enforces max length', () => {
    expect(sanitizePlayerName('  Ada  ')).toBe('Ada');
    expect(sanitizePlayerName('Hi\u0000there')).toBe('Hithere');
    expect(sanitizePlayerName('x'.repeat(100))).toHaveLength(40);
    expect(sanitizePlayerName('   ')).toBe('Player');
    expect(sanitizePlayerName(null)).toBe('Player');
  });
});

describe('createQuiz / scoring', () => {
  it('creates a 10-question quiz by default', () => {
    const quiz = createQuiz(europeanCountries, { mode: 'quiz' }, makeRandom(1));
    expect(quiz.mode).toBe('quiz');
    expect(quiz.limit).toBe(10);
    expect(quiz.questions).toHaveLength(10);
    expect(isComplete(quiz)).toBe(false);
  });

  it('increments score only on correct answers and blocks double answers', () => {
    const quiz = createQuiz(sample, { mode: 'quiz', limit: 3 }, makeRandom(11));
    const country = getCurrentCountry(quiz);
    const wrong = sample.find((c) => c.capital !== country.capital).capital;

    const miss = selectAnswer(quiz, wrong);
    expect(miss.isCorrect).toBe(false);
    expect(miss.state.score).toBe(0);
    expect(miss.state.answered).toBe(true);

    const again = selectAnswer(miss.state, country.capital);
    expect(again.error).toBe('Already answered');

    let state = nextQuestion(miss.state);
    const second = getCurrentCountry(state);
    const hit = selectAnswer(state, second.capital);
    expect(hit.isCorrect).toBe(true);
    expect(hit.state.score).toBe(1);
  });

  it('completes after N questions', () => {
    let state = createQuiz(sample, { mode: 'quiz', limit: 2 }, makeRandom(5));
    expect(getProgress(state).label).toBe('Question 1 of 2');

    for (let i = 0; i < 2; i++) {
      const country = getCurrentCountry(state);
      const result = selectAnswer(state, country.capital);
      state = nextQuestion(result.state);
    }

    expect(isComplete(state)).toBe(true);
    expect(getCurrentCountry(state)).toBeNull();
  });

  it('practice with a limit completes like a fixed quiz', () => {
    let state = createQuiz(
      europeanCountries,
      { mode: 'practice', limit: 3 },
      makeRandom(9)
    );
    expect(state.mode).toBe('practice');
    expect(state.limit).toBe(3);
    expect(state.questions).toHaveLength(3);

    for (let i = 0; i < 3; i++) {
      const country = getCurrentCountry(state);
      const result = selectAnswer(state, country.capital);
      state = nextQuestion(result.state);
    }

    expect(isComplete(state)).toBe(true);
    expect(state.score).toBe(3);
  });

  it('infinite practice continues past the initial question', () => {
    let state = createQuiz(
      sample,
      { mode: 'practice', limit: null },
      makeRandom(2)
    );
    expect(state.limit).toBeNull();
    expect(isComplete(state)).toBe(false);
    expect(state.questions).toHaveLength(1);

    for (let i = 0; i < 5; i++) {
      const country = getCurrentCountry(state);
      expect(country).not.toBeNull();
      const options = getCurrentOptions(state);
      expect(options).toContain(country.capital);
      const result = selectAnswer(state, country.capital);
      state = nextQuestion(result.state);
      expect(isComplete(state)).toBe(false);
    }

    expect(state.answers).toHaveLength(5);
    expect(state.score).toBe(5);
    expect(getProgress(state).total).toBeNull();
  });

  it('nextQuestion does not advance until answered', () => {
    const state = createQuiz(sample, { mode: 'quiz', limit: 2 }, makeRandom(4));
    const same = nextQuestion(state);
    expect(same.current).toBe(0);
    expect(same.answered).toBe(false);
  });
});
