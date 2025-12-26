import { isWithinInterval, getMonth, format } from 'date-fns';

/**
 * Check if a date falls within a given month range
 * @param {Date} date - The date to check
 * @param {number[]} months - Array of month numbers (0-11) when mango is available
 * @returns {boolean}
 */
export const isMangoInSeason = (date, months) => {
  if (!months || months.length === 0) return false;
  
  const currentMonth = getMonth(date);
  return months.includes(currentMonth);
};

/**
 * Get the current season status for a mango
 * @param {number[]} seasonMonths - Array of month numbers (0-11)
 * @returns {string} - 'available', 'upcoming', or 'out-of-season'
 */
export const getSeasonStatus = (seasonMonths) => {
  const now = new Date();
  const currentMonth = getMonth(now);
  
  if (!seasonMonths || seasonMonths.length === 0) {
    return 'out-of-season';
  }
  
  if (seasonMonths.includes(currentMonth)) {
    return 'available';
  }
  
  // Find the next available month
  const sortedMonths = [...seasonMonths].sort((a, b) => a - b);
  const nextMonth = sortedMonths.find(month => month > currentMonth);
  
  if (nextMonth !== undefined) {
    return 'upcoming';
  }
  
  // If no next month found, check if it's the first month of next year
  const firstMonth = sortedMonths[0];
  if (firstMonth !== undefined) {
    return 'upcoming';
  }
  
  return 'out-of-season';
};

/**
 * Format month numbers to readable month names
 * @param {number[]} months - Array of month numbers (0-11)
 * @returns {string} - Formatted string like "April - June"
 */
export const formatSeasonMonths = (months) => {
  if (!months || months.length === 0) return 'Not available';
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const sortedMonths = [...months].sort((a, b) => a - b);
  const monthNamesList = sortedMonths.map(m => monthNames[m]);
  
  if (monthNamesList.length === 1) {
    return monthNamesList[0];
  }
  
  if (monthNamesList.length === 2) {
    return `${monthNamesList[0]} - ${monthNamesList[1]}`;
  }
  
  return `${monthNamesList[0]} - ${monthNamesList[monthNamesList.length - 1]}`;
};

/**
 * Get the next available month for a mango
 * @param {number[]} seasonMonths - Array of month numbers (0-11)
 * @returns {number|null} - Month number or null
 */
export const getNextAvailableMonth = (seasonMonths) => {
  if (!seasonMonths || seasonMonths.length === 0) return null;
  
  const now = new Date();
  const currentMonth = getMonth(now);
  const sortedMonths = [...seasonMonths].sort((a, b) => a - b);
  
  const nextMonth = sortedMonths.find(month => month > currentMonth);
  if (nextMonth !== undefined) {
    return nextMonth;
  }
  
  // If no next month in current year, return first month of next year
  return sortedMonths[0];
};

/**
 * Format date to readable string
 * @param {Date} date - Date to format
 * @param {string} formatStr - Format string (default: 'MMMM dd, yyyy')
 * @returns {string}
 */
export const formatDate = (date, formatStr = 'MMMM dd, yyyy') => {
  return format(date, formatStr);
};

/**
 * Check if mango is currently available
 * @param {number[]} seasonMonths - Array of month numbers (0-11)
 * @returns {boolean}
 */
export const isCurrentlyAvailable = (seasonMonths) => {
  return getSeasonStatus(seasonMonths) === 'available';
};

