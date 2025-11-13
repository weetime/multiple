/**
 * Formats a date to a readable string.
 * @param {Date|string|number} date - The date to format.
 * @returns {string} Formatted date string.
 */
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

/**
 * Debounces a function call.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} Debounced function.
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Generates a unique ID.
 * @returns {string} Unique ID string.
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

