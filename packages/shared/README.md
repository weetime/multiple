# Shared Package

This package contains shared utilities and components that can be used across all projects in the monorepo.

## Usage

### Utilities

In any project, import utilities from the shared package:

```javascript
import { formatDate, debounce, generateId } from '@multiple/shared';
import { formatDate } from '@multiple/shared/utils';
```

### Components

Import shared Vue components:

```javascript
import { Layout, AppHeader, AppSidebar } from '@multiple/shared/components';
```

### Layout Component

The `Layout` component provides a common layout structure with header and sidebar:

```vue
<template>
  <Layout
    title="My Project"
    subtitle="Project Description"
    :menu-items="menuItems"
    @menu-click="handleMenuClick"
  >
    <!-- Your content here -->
  </Layout>
</template>

<script setup>
import { Layout } from '@multiple/shared/components';

const menuItems = [
  {
    key: 'home',
    label: 'Home',
    icon: '🏠',
    active: true,
    onClick: () => console.log('Home clicked'),
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: '⚙️',
    href: '/settings',
  },
];

const handleMenuClick = (item) => {
  console.log('Menu clicked:', item);
};
</script>
```

## Structure

- `utils/` - Shared utility functions
  - `formatDate(date)` - Format date to readable string
  - `debounce(func, wait)` - Debounce function calls
  - `generateId()` - Generate unique ID
- `components/` - Shared Vue components
  - `Layout.vue` - Main layout component with header and sidebar
  - `Header.vue` - Header navigation component
  - `Sidebar.vue` - Sidebar menu component

