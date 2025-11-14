import { ref } from 'vue';
import { generateId } from '../../utils/index.js';

/**
 * Generates and manages a unique ID.
 * @param {string} prefix - Optional prefix for the ID.
 * @returns {Object} ID utilities object.
 */
export function useId(prefix = '') {
  const id = ref(prefix ? `${prefix}-${generateId()}` : generateId());

  /**
   * Regenerates a new ID.
   */
  const regenerate = () => {
    id.value = prefix ? `${prefix}-${generateId()}` : generateId();
  };

  return {
    id,
    regenerate,
  };
}

