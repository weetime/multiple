import { ref, watch, onUnmounted } from 'vue';

/**
 * Creates a debounced version of a function.
 * @param {Function} fn - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} The debounced function.
 */
export function useDebounce(fn, delay = 300) {
  let timeoutId = null;

  const debouncedFn = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  onUnmounted(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  return debouncedFn;
}

/**
 * Creates a debounced ref that updates after a delay.
 * @param {any} source - The source reactive value.
 * @param {number} delay - The delay in milliseconds.
 * @returns {import('vue').Ref} The debounced ref.
 */
export function useDebouncedRef(source, delay = 300) {
  const debounced = ref(source);

  let timeoutId = null;

  const stopWatcher = watch(
    source,
    (newValue) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        debounced.value = newValue;
      }, delay);
    },
    { immediate: true }
  );

  onUnmounted(() => {
    stopWatcher();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  return debounced;
}

