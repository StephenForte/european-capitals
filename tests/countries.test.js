import { describe, expect, it } from 'vitest';
import { europeanCountries } from '../countries.js';

describe('europeanCountries', () => {
  it('includes 25 countries', () => {
    expect(europeanCountries).toHaveLength(25);
  });

  it('has unique country names and capitals', () => {
    const names = europeanCountries.map((c) => c.name);
    const capitals = europeanCountries.map((c) => c.capital);
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(capitals).size).toBe(capitals.length);
  });

  it('provides required fields for every country', () => {
    for (const country of europeanCountries) {
      expect(country.name).toBeTruthy();
      expect(country.capital).toBeTruthy();
      expect(country.population).toBeTruthy();
      expect(country.flag).toMatch(/^https:\/\/flagcdn\.com\//);
    }
  });
});
