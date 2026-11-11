/**
 * Dynamic Experience Calculation Utility
 * Accurately calculates years, months, and days from joining date (05 March 2026).
 */

export interface ExperienceDuration {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  formatted: string;
}

export const JOINING_DATE = new Date(2026, 2, 5); // 05 March 2026

export function calculateExperience(
  startDate: Date = JOINING_DATE,
  currentDate: Date = new Date()
): ExperienceDuration {
  // If current date is before start date, return zeroed duration with future notice
  if (currentDate.getTime() < startDate.getTime()) {
    return {
      years: 0,
      months: 0,
      days: 0,
      totalDays: 0,
      formatted: 'Starting 05 March 2026',
    };
  }

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    // Get days in the previous month of currentDate
    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const oneDayMs = 24 * 60 * 60 * 1000;
  const totalDays = Math.max(0, Math.floor((currentDate.getTime() - startDate.getTime()) / oneDayMs));

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'Year' : 'Years'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'Month' : 'Months'}`);
  if (days > 0 || parts.length === 0) parts.push(`${days} ${days === 1 ? 'Day' : 'Days'}`);

  return {
    years,
    months,
    days,
    totalDays,
    formatted: parts.join(', '),
  };
}
