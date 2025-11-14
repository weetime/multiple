import { ref, watch } from 'vue';

/**
 * Manages menu state with router integration.
 * Note: This composable requires vue-router to be installed.
 * useRoute and useRouter must be called within a Vue component's setup context.
 * @param {Array} initialItems - Initial menu items array.
 * @param {Object} options - Configuration options.
 * @param {boolean} options.autoSyncRoute - Automatically sync active state with route (default: true).
 * @returns {Object} Menu utilities object.
 */
export function useMenu(initialItems = [], options = {}) {
  const { autoSyncRoute = true } = options;
  const items = ref([...initialItems]);
  const activeKey = ref(null);

  let route = null;
  let router = null;

  // Try to use vue-router if available.
  // Note: This will only work if vue-router is installed and used within a setup context.
  try {
    // eslint-disable-next-line import/no-unresolved
    const { useRoute, useRouter } = require('vue-router');
    route = useRoute();
    router = useRouter();
  } catch (e) {
    // vue-router not available, continue without route integration.
  }

  // Auto-sync active state with route.
  if (autoSyncRoute && route) {
    watch(
      () => route.path,
      (path) => {
        const activeItem = items.value.find((item) => {
          if (item.route) {
            return path === item.route || path.startsWith(item.route + '/');
          }
          if (item.href) {
            return path === item.href;
          }
          return false;
        });
        if (activeItem) {
          activeKey.value = activeItem.key;
          // Update item active state.
          items.value.forEach((item) => {
            item.active = item.key === activeItem.key;
          });
        }
      },
      { immediate: true }
    );
  }

  /**
   * Updates menu items.
   * @param {Array} newItems - New menu items array.
   */
  const updateItems = (newItems) => {
    items.value = [...newItems];
  };

  /**
   * Sets the active menu item.
   * @param {string} key - The key of the menu item to activate.
   */
  const setActive = (key) => {
    activeKey.value = key;
    items.value.forEach((item) => {
      item.active = item.key === key;
    });
  };

  /**
   * Handles menu item click.
   * @param {Object} item - The clicked menu item.
   */
  const handleMenuClick = (item) => {
    if (item.divider) {
      return;
    }

    setActive(item.key);

    // Handle route navigation.
    if (item.route && router) {
      router.push(item.route);
    }

    // Handle custom onClick handler.
    if (item.onClick && typeof item.onClick === 'function') {
      item.onClick(item);
    }

    // Handle href navigation.
    if (item.href && !item.route) {
      if (item.target === '_blank') {
        window.open(item.href, '_blank');
      } else {
        window.location.href = item.href;
      }
    }
  };

  return {
    items,
    activeKey,
    updateItems,
    setActive,
    handleMenuClick,
  };
}

