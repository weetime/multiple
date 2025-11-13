<template>
  <Layout
    title="Model-X"
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
    label: 'Home',
    icon: '🏠',
    route: '/home',
    active: route.path === '/home' || route.path === '/',
  },
  {
    key: 'contact',
    label: 'Contact',
    icon: '📧',
    route: '/contact',
    active: route.path === '/contact',
  },
  {
    key: 'divider',
    label: '---',
    divider: true,
  },
  {
    key: 'vast',
    label: 'Go to Vast',
    icon: '⬅️',
    href: 'http://localhost:3000',
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
