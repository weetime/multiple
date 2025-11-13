<template>
  <div class="layout">
    <AppHeader :title="title" :subtitle="subtitle" />
    <div class="layout-body">
      <AppSidebar :menu-items="menuItems" />
      <main class="layout-content">
        <h1>Layout Component test</h1>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from './Header.vue';
import AppSidebar from './Sidebar.vue';

defineProps({
  title: {
    type: String,
    default: 'Multiple Projects',
  },
  subtitle: {
    type: String,
    default: 'Vue 3 + Vite Monorepo',
  },
  menuItems: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}

.layout-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.layout-content {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
}
</style>

