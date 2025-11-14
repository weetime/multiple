import { ref, computed } from 'vue';
import { formatDate } from '../../utils/index.js';

/**
 * Provides date formatting and manipulation utilities.
 * @param {Date|string|number} initialDate - The initial date value.
 * @param {string} locale - The locale for formatting (default: 'zh-CN').
 * @returns {Object} Date utilities object.
 */
export function useDate(initialDate = new Date(), locale = 'zh-CN') {
  const date = ref(initialDate instanceof Date ? initialDate : new Date(initialDate));

  const formatted = computed(() => formatDate(date.value));
  const formattedWithLocale = computed(() => {
    return date.value.toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  });

  /**
   * Updates the date value.
   * @param {Date|string|number} newDate - The new date value.
   */
  const update = (newDate) => {
    date.value = newDate instanceof Date ? newDate : new Date(newDate);
  };

  /**
   * Adds days to the current date.
   * @param {number} days - The number of days to add.
   */
  const addDays = (days) => {
    const newDate = new Date(date.value);
    newDate.setDate(newDate.getDate() + days);
    date.value = newDate;
  };

  /**
   * Adds months to the current date.
   * @param {number} months - The number of months to add.
   */
  const addMonths = (months) => {
    const newDate = new Date(date.value);
    newDate.setMonth(newDate.getMonth() + months);
    date.value = newDate;
  };

  return {
    date,
    formatted,
    formattedWithLocale,
    update,
    addDays,
    addMonths,
  };
}

