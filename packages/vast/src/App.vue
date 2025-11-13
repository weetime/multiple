<template>
  <Layout
    title="Vast"
    subtitle="Vue 3 + Vite Monorepo Project"
    :menu-items="menuItems"
    @menu-click="handleMenuClick"
  >
    <router-view />
  </Layout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Layout } from '@multiple/shared/components';

const route = useRoute();

// Menu items for sidebar.
const menuItems = computed(() => [
  {
    key: 'home',
    label: 'Home1',
    icon: '🏠',
    route: '/home',
    active: route.path === '/home' || route.path === '/',
  },
  {
    key: 'about',
    label: 'About',
    icon: '📄',
    route: '/about',
    active: route.path === '/about',
  },
  {
    key: 'divider',
    label: '---',
    divider: true,
  },
  {
    key: 'model-x',
    label: 'Go to Model-X',
    icon: '➡️',
    href: 'http://localhost:3001',
    target: '_self',
  },
]);

const handleMenuClick = (item) => {
  console.log('Menu item clicked:', item);
};
</script>

<style scoped>
/* App-level styles if needed */
</style>
