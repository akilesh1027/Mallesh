import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateExperience } from './experience';

test('calculates exact months and days from 2026-03-05 to 2026-11-10', () => {
  const startDate = new Date(2026, 2, 5); // 05 March 2026
  const testDate = new Date(2026, 10, 10); // 10 November 2026
  const result = calculateExperience(startDate, testDate);

  assert.equal(result.years, 0);
  assert.equal(result.months, 8);
  assert.equal(result.days, 5);
  assert.equal(result.formatted, '8 Months, 5 Days');
});

test('handles future years correctly from 2026-03-05 to 2028-04-10', () => {
  const startDate = new Date(2026, 2, 5);
  const testDate = new Date(2028, 3, 10); // 10 April 2028
  const result = calculateExperience(startDate, testDate);

  assert.equal(result.years, 2);
  assert.equal(result.months, 1);
  assert.equal(result.days, 5);
  assert.equal(result.formatted, '2 Years, 1 Month, 5 Days');
});

test('handles pre-start date gracefully', () => {
  const startDate = new Date(2026, 2, 5);
  const testDate = new Date(2026, 1, 1);
  const result = calculateExperience(startDate, testDate);

  assert.equal(result.years, 0);
  assert.equal(result.totalDays, 0);
  assert.equal(result.formatted, 'Starting 05 March 2026');
});
