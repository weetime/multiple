import { ref, watch } from 'vue';

/**
 * Provides reactive localStorage management.
 * @param {string} key - The localStorage key.
 * @param {any} defaultValue - The default value if key doesn't exist.
 * @returns {Object} LocalStorage utilities object.
 */
export function useLocalStorage(key, defaultValue = null) {
  // Read initial value from localStorage.
  const read = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  };

  const value = ref(read());

  // Watch for changes and sync to localStorage.
  watch(
    value,
    (newValue) => {
      try {
        if (newValue === null || newValue === undefined) {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, JSON.stringify(newValue));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    { deep: true }
  );

  /**
   * Sets the value.
   * @param {any} newValue - The new value to set.
   */
  const set = (newValue) => {
    value.value = newValue;
  };

  /**
   * Removes the value from localStorage.
   */
  const remove = () => {
    value.value = null;
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  };

  return {
    value,
    set,
    remove,
  };
}

