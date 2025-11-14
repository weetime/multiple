import { ref } from 'vue';

/**
 * Provides toggle functionality for boolean state.
 * @param {boolean} initialValue - The initial value (default: false).
 * @returns {Object} Toggle utilities object.
 */
export function useToggle(initialValue = false) {
  const value = ref(initialValue);

  /**
   * Toggles the value.
   */
  const toggle = () => {
    value.value = !value.value;
  };

  /**
   * Sets the value to true.
   */
  const setTrue = () => {
    value.value = true;
  };

  /**
   * Sets the value to false.
   */
  const setFalse = () => {
    value.value = false;
  };

  /**
   * Sets the value to a specific boolean.
   * @param {boolean} newValue - The new value to set.
   */
  const set = (newValue) => {
    value.value = Boolean(newValue);
  };

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    set,
  };
}

