<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <ul class="menu-list">
        <template v-for="item in menuItems" :key="item.key">
          <li v-if="item.divider" class="menu-divider"></li>
          <li v-else class="menu-item">
            <a
              v-if="item.href"
              :href="item.href"
              class="menu-link"
              :class="{ active: item.active || (item.route && route?.path === item.route) }"
              :target="item.target || '_self'"
              @click="handleLinkClick(item, $event)"
            >
              <span v-if="item.icon" class="menu-icon">{{ item.icon }}</span>
              <span class="menu-text">{{ item.label }}</span>
            </a>
            <button
              v-else
              class="menu-link"
              :class="{ active: item.active || (item.route && route?.path === item.route) }"
              @click="handleClick(item)"
            >
              <span v-if="item.icon" class="menu-icon">{{ item.icon }}</span>
              <span class="menu-text">{{ item.label }}</span>
            </button>
          </li>
        </template>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['menu-click']);

// Try to get router instance if Vue Router is available.
let router = null;
let route = null;

try {
  router = useRouter();
  route = useRoute();
} catch (e) {
  // Vue Router not available, use inject as fallback.
  router = inject('$router', null);
  route = inject('$route', null);
}

const handleClick = (item) => {
  // If item has route, use router navigation.
  if (item.route && router) {
    router.push(item.route);
    emit('menu-click', item);
    return;
  }
  
  // Otherwise, use onClick handler.
  if (item.onClick) {
    item.onClick(item);
  }
  emit('menu-click', item);
};

const handleLinkClick = (item, event) => {
  // Emit menu-click event first.
  emit('menu-click', item);
  
  // If item has route, use router navigation and prevent default.
  if (item.route && router) {
    event.preventDefault();
    router.push(item.route);
    return;
  }
  
  // If onClick is provided, call it and check if it wants to prevent navigation.
  if (item.onClick) {
    const result = item.onClick(item);
    // If onClick returns false, prevent default navigation.
    if (result === false) {
      event.preventDefault();
      return;
    }
  }
  
  // For external links (http/https), allow default navigation.
  // This enables cross-project navigation.
  if (item.href?.startsWith('http')) {
    // Allow default navigation for external links.
    return;
  }
  
  // For internal links with onClick handler, let onClick handle navigation.
  if (item.onClick) {
    event.preventDefault();
  }
};
</script>

<style scoped>
.sidebar {
  width: 240px;
  background: white;
  border-right: 1px solid #e5e7eb;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  flex-shrink: 0;
}

.sidebar-nav {
  padding: 1rem 0;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  margin: 0;
}

.menu-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 0.5rem 1.5rem;
  list-style: none;
}

.menu-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1.5rem;
  color: #4b5563;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.95rem;
  font-family: inherit;
}

.menu-link:hover {
  background: #f3f4f6;
  color: #667eea;
}

.menu-link.active {
  background: #eef2ff;
  color: #667eea;
  border-right: 3px solid #667eea;
  font-weight: 500;
}

.menu-icon {
  margin-right: 0.75rem;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.menu-text {
  flex: 1;
}

@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }

  .menu-link {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
}
</style>

