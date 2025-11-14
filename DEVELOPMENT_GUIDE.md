# 开发规范与目录规范手册

> 本文档定义了项目的开发规范、目录结构、组件能力和使用指南，**所有 AI 开发助手在开始开发前必须先阅读本文档**。

## 📋 目录

- [项目概述](#项目概述)
- [目录结构规范](#目录结构规范)
- [代码规范](#代码规范)
- [组件开发规范](#组件开发规范)
- [Composables 开发规范](#composables-开发规范)
- [工具函数开发规范](#工具函数开发规范)
- [路由开发规范](#路由开发规范)
- [样式开发规范](#样式开发规范)
- [命名规范](#命名规范)
- [最佳实践](#最佳实践)
- [各模块能力说明](#各模块能力说明)

---

## 项目概述

### 技术栈

- **包管理**: pnpm 10.5.2+ (workspace)
- **构建工具**: Vite 5.x
- **框架**: Vue 3.x (Composition API)
- **路由**: Vue Router 4.x
- **代码规范**: ESLint + Prettier
- **Node.js**: >= 23.10.0

### 项目架构

这是一个基于 **pnpm workspace** 的 monorepo 架构，包含：
- 多个独立的 Vue 3 项目（vast, model-x）
- 共享包（shared）提供工具函数、组件和 composables

---

## 目录结构规范

### 根目录结构

```
multiple/
├── .vscode/              # VS Code 配置
│   ├── extensions.json   # 推荐扩展
│   └── settings.json     # 编辑器设置
├── packages/             # 所有子项目
│   ├── vast/            # Vast 项目
│   ├── model-x/          # Model-X 项目
│   └── shared/           # 共享包
├── ai-docs/              # AI 任务历史记录
├── .editorconfig        # 编辑器配置
├── .eslintrc.cjs        # ESLint 配置
├── .eslintignore        # ESLint 忽略文件
├── .gitattributes       # Git 属性配置
├── .gitignore          # Git 忽略文件
├── .nvmrc              # Node.js 版本
├── .pnpmrc             # pnpm 配置
├── .prettierrc         # Prettier 配置
├── .prettierignore     # Prettier 忽略文件
├── LICENSE             # MIT 许可证
├── package.json        # 根目录配置
├── pnpm-workspace.yaml # pnpm workspace 配置
├── README.md          # 项目说明
├── allaboutproject.md # 详细项目文档
├── changelog.md       # 变更日志
└── DEVELOPMENT_GUIDE.md # 本文档（开发规范）
```

### 项目目录结构（packages/*/）

每个项目应遵循以下标准结构：

```
packages/{project-name}/
├── src/
│   ├── assets/          # 静态资源
│   │   ├── images/     # 图片资源
│   │   ├── fonts/      # 字体文件
│   │   └── icons/      # 图标文件
│   ├── composables/    # 项目特定的组合式函数
│   ├── components/     # 项目特定的组件（可选）
│   ├── stores/         # 状态管理（Pinia/Vuex，可选）
│   ├── types/          # TypeScript 类型定义（可选）
│   ├── router/         # 路由配置
│   ├── views/          # 路由页面组件
│   ├── App.vue         # 根组件
│   ├── main.js         # 入口文件
│   ├── style.css       # 全局样式
│   └── env.d.ts        # 环境变量类型声明
├── index.html          # HTML 入口
├── vite.config.js      # Vite 配置
├── package.json        # 项目配置
└── README.md          # 项目说明
```

### 共享包目录结构（packages/shared/）

```
packages/shared/
├── components/          # 共享 Vue 组件
│   ├── Layout/        # Layout 组件系统
│   │   ├── index.vue  # 主布局组件
│   │   ├── Header.vue # 头部组件
│   │   └── Sidebar.vue # 侧边栏组件
│   └── index.js       # 组件导出
├── composables/       # 共享组合式函数
│   ├── utils/         # 工具类 composables
│   │   ├── useDebounce.js
│   │   ├── useDate.js
│   │   ├── useId.js
│   │   └── index.js
│   ├── state/         # 状态管理 composables
│   │   ├── useToggle.js
│   │   ├── useLocalStorage.js
│   │   └── index.js
│   ├── ui/            # UI 相关 composables
│   │   ├── useMenu.js
│   │   └── index.js
│   └── index.js       # 主入口
├── utils/             # 纯函数工具（不依赖 Vue）
│   └── index.js
└── index.js           # 共享包主入口
```

---

## 代码规范

### 文件命名规范

1. **组件文件**: 使用 PascalCase
   - ✅ `UserProfile.vue`
   - ✅ `Header.vue`
   - ❌ `userProfile.vue`
   - ❌ `header.vue`

2. **工具文件**: 使用 camelCase
   - ✅ `formatDate.js`
   - ✅ `useDebounce.js`
   - ❌ `format-date.js`
   - ❌ `use-debounce.js`

3. **配置文件**: 使用 kebab-case 或特定格式
   - ✅ `vite.config.js`
   - ✅ `.eslintrc.cjs`
   - ✅ `package.json`

4. **目录名**: 使用 kebab-case 或 camelCase
   - ✅ `user-profile/`
   - ✅ `composables/`
   - ❌ `UserProfile/`

### 代码格式规范

1. **使用 ESLint 和 Prettier**
   - 所有代码必须通过 ESLint 检查
   - 保存时自动格式化

2. **缩进**: 2 个空格（不是 Tab）

3. **引号**: 使用单引号（JavaScript/TypeScript）
   ```javascript
   const name = 'John';
   ```

4. **分号**: 必须使用分号
   ```javascript
   const x = 1;
   ```

5. **行尾**: LF（Unix 风格）

6. **文件末尾**: 必须有换行符

### 注释规范

1. **所有注释使用英文**
2. **函数注释**: 使用 JSDoc 格式
   ```javascript
   /**
    * Formats a date to a readable string.
    * @param {Date|string|number} date - The date to format.
    * @returns {string} Formatted date string.
    */
   export function formatDate(date) {
     // ...
   }
   ```

3. **行内注释**: 简洁明了，以句号结尾
   ```javascript
   // Initializes the component with default values.
   const value = ref(null);
   ```

---

## 组件开发规范

### Vue 组件结构

组件应按以下顺序组织：

```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup>
// 1. 导入依赖
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// 2. 导入共享资源
import { Layout } from '@multiple/shared/components';
import { useMenu } from '@multiple/shared/composables/ui';

// 3. Props 定义
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

// 4. Emits 定义
const emit = defineEmits(['update', 'delete']);

// 5. Composables 使用
const router = useRouter();
const { items, handleMenuClick } = useMenu([]);

// 6. 响应式数据
const isLoading = ref(false);
const data = ref(null);

// 7. 计算属性
const displayText = computed(() => {
  return `${props.title} (${props.count})`;
});

// 8. 方法
const handleClick = () => {
  emit('update', data.value);
};

// 9. 生命周期
onMounted(() => {
  // ...
});
</script>

<style scoped>
/* 组件样式 */
</style>
```

### 组件命名规范

1. **组件名**: 使用 PascalCase，多词组合
   - ✅ `UserProfile.vue`
   - ✅ `ProductCard.vue`
   - ❌ `User.vue`（单词，除非是根组件如 App.vue）

2. **Props 命名**: 使用 camelCase
   ```javascript
   defineProps({
     userName: String,
     isActive: Boolean,
   });
   ```

3. **Events 命名**: 使用 kebab-case
   ```javascript
   emit('user-updated', data);
   emit('item-clicked', item);
   ```

### 组件开发原则

1. **单一职责**: 每个组件只做一件事
2. **可复用性**: 优先使用共享组件
3. **Props 验证**: 必须定义 props 类型和默认值
4. **Scoped 样式**: 使用 `<style scoped>` 避免样式污染
5. **组合式 API**: 优先使用 `<script setup>` 语法

### 共享组件使用

优先使用 `@multiple/shared` 中的组件：

```vue
<script setup>
// ✅ 正确：从共享包导入
import { Layout } from '@multiple/shared/components';

// ❌ 错误：重复实现已有组件
// 不要重新实现 Layout、Header、Sidebar 等
</script>
```

---

## Composables 开发规范

### Composables 分类

Composables 按功能分为三类：

1. **utils/** - 工具类 composables
   - `useDebounce` - 防抖函数
   - `useDate` - 日期处理
   - `useId` - ID 生成

2. **state/** - 状态管理 composables
   - `useToggle` - 布尔状态切换
   - `useLocalStorage` - localStorage 管理

3. **ui/** - UI 相关 composables
   - `useMenu` - 菜单管理

### Composables 开发模板

```javascript
import { ref, watch, onUnmounted } from 'vue';

/**
 * Brief description of what this composable does.
 * @param {Type} param1 - Description of param1.
 * @param {Object} options - Configuration options.
 * @param {Type} options.option1 - Description of option1.
 * @returns {Object} Return value description.
 */
export function useComposableName(param1, options = {}) {
  const { option1 = defaultValue } = options;

  // 1. 响应式数据
  const state = ref(initialValue);

  // 2. 计算属性（如果需要）
  const computedValue = computed(() => {
    return state.value * 2;
  });

  // 3. 方法
  const updateState = (newValue) => {
    state.value = newValue;
  };

  // 4. 副作用（watch, 生命周期等）
  watch(
    () => state.value,
    (newValue) => {
      // Handle side effects.
    }
  );

  // 5. 清理函数
  onUnmounted(() => {
    // Cleanup.
  });

  // 6. 返回值
  return {
    state,
    computedValue,
    updateState,
  };
}
```

### Composables 开发原则

1. **命名**: 以 `use` 开头，使用 camelCase
   - ✅ `useDebounce`
   - ✅ `useLocalStorage`
   - ❌ `debounce`
   - ❌ `localStorage`

2. **自动清理**: 使用 `onUnmounted` 清理资源
   ```javascript
   onUnmounted(() => {
     clearTimeout(timeoutId);
   });
   ```

3. **响应式**: 使用 Vue 3 响应式 API（ref, reactive, computed）
4. **类型安全**: 提供清晰的 JSDoc 注释
5. **单一职责**: 每个 composable 只做一件事
6. **可组合**: 可以组合多个 composables

### Composables 使用规范

```vue
<script setup>
// ✅ 正确：从共享包导入
import { useDebounce, useDate } from '@multiple/shared/composables/utils';
import { useToggle } from '@multiple/shared/composables/state';

// ✅ 正确：从分类目录导入（按需导入）
import { useMenu } from '@multiple/shared/composables/ui';

// ✅ 正确：项目特定的 composables
import { useProjectSpecific } from '@/composables/useProjectSpecific';
</script>
```

---

## 工具函数开发规范

### 工具函数位置

- **共享工具函数**: `packages/shared/utils/index.js`
- **项目特定工具**: `packages/{project}/src/utils/`（如需要）

### 工具函数开发模板

```javascript
/**
 * Brief description of what this function does.
 * @param {Type} param1 - Description of param1.
 * @param {Type} param2 - Description of param2.
 * @returns {Type} Return value description.
 */
export function functionName(param1, param2) {
  // Implementation.
  return result;
}
```

### 工具函数开发原则

1. **纯函数**: 不依赖 Vue，可以在任何地方使用
2. **无副作用**: 不修改外部状态
3. **可测试**: 易于单元测试
4. **类型安全**: 提供 JSDoc 类型注释
5. **命名清晰**: 函数名应清楚表达功能

### 工具函数使用规范

```javascript
// ✅ 正确：从共享包导入
import { formatDate, debounce, generateId } from '@multiple/shared';

// ✅ 正确：从 utils 入口导入
import { formatDate } from '@multiple/shared/utils';
```

---

## 路由开发规范

### 路由文件位置

路由配置位于：`packages/{project}/src/router/index.js`

### 路由配置模板

```javascript
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于',
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

### 路由命名规范

1. **路由 name**: 使用 PascalCase
   - ✅ `Home`
   - ✅ `UserProfile`
   - ❌ `home`
   - ❌ `user-profile`

2. **路由 path**: 使用 kebab-case
   - ✅ `/user-profile`
   - ✅ `/about`
   - ❌ `/userProfile`

### 视图组件位置

视图组件位于：`packages/{project}/src/views/`

命名规范：使用 PascalCase
- ✅ `Home.vue`
- ✅ `UserProfile.vue`
- ❌ `home.vue`

---

## 样式开发规范

### 样式文件组织

1. **全局样式**: `src/style.css`
2. **组件样式**: 使用 `<style scoped>` 在组件内
3. **共享样式**: 放在 `packages/shared/styles/`（如需要）

### 样式编写规范

1. **使用 scoped**: 组件样式必须使用 `scoped`
   ```vue
   <style scoped>
   .container {
     padding: 1rem;
   }
   </style>
   ```

2. **CSS 变量**: 优先使用 CSS 变量
   ```css
   :root {
     --primary-color: #42b983;
     --spacing-unit: 8px;
   }
   ```

3. **类名命名**: 使用 BEM 或语义化命名
   ```css
   /* BEM */
   .card__header {}
   .card__body {}
   .card--highlighted {}

   /* 语义化 */
   .container {}
   .header {}
   .content {}
   ```

---

## 命名规范

### 变量命名

- **camelCase**: 普通变量和函数
  ```javascript
  const userName = 'John';
  const isLoading = false;
  ```

- **PascalCase**: 组件、类、类型
  ```javascript
  const UserProfile = {};
  class ApiClient {}
  ```

- **UPPER_SNAKE_CASE**: 常量
  ```javascript
  const API_BASE_URL = 'https://api.example.com';
  const MAX_RETRY_COUNT = 3;
  ```

- **kebab-case**: CSS 类名、文件名（部分）
  ```css
  .user-profile {}
  ```

### 文件命名总结

| 类型 | 命名规范 | 示例 |
|------|---------|------|
| Vue 组件 | PascalCase | `UserProfile.vue` |
| JavaScript 文件 | camelCase | `formatDate.js` |
| 配置文件 | kebab-case | `vite.config.js` |
| 目录 | kebab-case/camelCase | `user-profile/`, `composables/` |

---

## 最佳实践

### 1. 导入顺序

```javascript
// 1. Vue 核心
import { ref, computed, onMounted } from 'vue';

// 2. Vue 生态
import { useRouter } from 'vue-router';

// 3. 共享包
import { Layout } from '@multiple/shared/components';
import { useDebounce } from '@multiple/shared/composables/utils';

// 4. 项目特定
import { useProjectComposable } from '@/composables/useProjectComposable';

// 5. 工具函数
import { formatDate } from '@/utils/formatDate';

// 6. 类型（如果使用 TypeScript）
import type { User } from '@/types/user';

// 7. 样式
import './style.css';
```

### 2. 响应式数据管理

```javascript
// ✅ 正确：使用 ref 管理基本类型
const count = ref(0);
const name = ref('John');

// ✅ 正确：使用 reactive 管理对象
const state = reactive({
  user: null,
  loading: false,
});

// ✅ 正确：使用 computed 计算属性
const displayName = computed(() => {
  return state.user?.name || 'Guest';
});
```

### 3. 错误处理

```javascript
// ✅ 正确：使用 try-catch
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch data:', error);
  // Handle error.
}
```

### 4. 性能优化

```javascript
// ✅ 正确：使用防抖处理频繁操作
import { useDebounce } from '@multiple/shared/composables/utils';

const handleSearch = useDebounce((query) => {
  search(query);
}, 300);

// ✅ 正确：使用 computed 缓存计算结果
const expensiveValue = computed(() => {
  return heavyCalculation(props.data);
});
```

### 5. 代码复用

```javascript
// ✅ 正确：优先使用共享 composables
import { useToggle, useLocalStorage } from '@multiple/shared/composables/state';

// ❌ 错误：不要重复实现已有功能
// 不要重新实现 useToggle、useLocalStorage 等
```

---

## 各模块能力说明

### 共享组件（@multiple/shared/components）

#### Layout 组件系统

**位置**: `packages/shared/components/Layout/`

**组件**:
- `Layout` - 主布局组件（包含 Header 和 Sidebar）
- `Header` - 头部导航组件
- `Sidebar` - 左侧菜单组件

**使用方式**:
```vue
<template>
  <Layout
    title="My Project"
    subtitle="Project Description"
    :menu-items="menuItems"
    @menu-click="handleMenuClick"
  >
    <router-view />
  </Layout>
</template>

<script setup>
import { Layout } from '@multiple/shared/components';
import { useMenu } from '@multiple/shared/composables/ui';

const { items: menuItems, handleMenuClick } = useMenu([
  { key: 'home', label: 'Home', route: '/home' },
]);
</script>
```

**Props**:
- `title` (String) - 标题
- `subtitle` (String) - 副标题
- `menuItems` (Array) - 菜单项数组

**Events**:
- `menu-click` - 菜单项点击事件

### 共享 Composables

#### 工具类（@multiple/shared/composables/utils）

**useDebounce**
```javascript
import { useDebounce } from '@multiple/shared/composables/utils';

const handleClick = useDebounce(() => {
  console.log('Clicked!');
}, 300);
```

**useDebouncedRef**
```javascript
import { useDebouncedRef } from '@multiple/shared/composables/utils';

const searchQuery = ref('');
const debouncedQuery = useDebouncedRef(searchQuery, 300);
```

**useDate**
```javascript
import { useDate } from '@multiple/shared/composables/utils';

const date = useDate(new Date());
// date.date, date.formatted, date.addDays(), date.addMonths()
```

**useId**
```javascript
import { useId } from '@multiple/shared/composables/utils';

const { id, regenerate } = useId('user');
```

#### 状态管理（@multiple/shared/composables/state）

**useToggle**
```javascript
import { useToggle } from '@multiple/shared/composables/state';

const isOpen = useToggle(false);
// isOpen.value, isOpen.toggle(), isOpen.setTrue(), isOpen.setFalse()
```

**useLocalStorage**
```javascript
import { useLocalStorage } from '@multiple/shared/composables/state';

const { value, set, remove } = useLocalStorage('theme', 'light');
set('dark');
```

#### UI 相关（@multiple/shared/composables/ui）

**useMenu**
```javascript
import { useMenu } from '@multiple/shared/composables/ui';

const { items, activeKey, handleMenuClick } = useMenu([
  { key: 'home', label: 'Home', route: '/home' },
  { key: 'about', label: 'About', route: '/about' },
]);
```

### 共享工具函数（@multiple/shared/utils）

**formatDate**
```javascript
import { formatDate } from '@multiple/shared/utils';

const formatted = formatDate(new Date());
```

**debounce**
```javascript
import { debounce } from '@multiple/shared/utils';

const debouncedFn = debounce(() => {
  console.log('Debounced!');
}, 300);
```

**generateId**
```javascript
import { generateId } from '@multiple/shared/utils';

const id = generateId();
```

---

## 开发流程

### 1. 开始开发前

1. ✅ 阅读本文档（DEVELOPMENT_GUIDE.md）
2. ✅ 阅读项目文档（allaboutproject.md）
3. ✅ 检查 ai-docs 中是否有相关历史任务
4. ✅ 理解项目结构和现有代码

### 2. 开发新功能

1. **确定功能位置**
   - 共享功能 → `packages/shared/`
   - 项目特定 → `packages/{project}/src/`

2. **遵循命名规范**
   - 组件：PascalCase
   - 函数：camelCase
   - 文件：根据类型选择

3. **使用现有资源**
   - 优先使用共享组件和 composables
   - 不要重复实现已有功能

4. **编写代码**
   - 遵循代码格式规范
   - 添加必要的注释
   - 使用 TypeScript 类型（如果支持）

5. **测试和验证**
   - 运行 `pnpm lint` 检查代码
   - 运行 `pnpm format` 格式化代码
   - 测试功能是否正常

### 3. 提交代码前

1. ✅ 运行 `pnpm lint` 确保无错误
2. ✅ 运行 `pnpm format` 格式化代码
3. ✅ 检查所有文件符合规范
4. ✅ 更新相关文档（如需要）

---

## 常见问题

### Q: 应该在哪里添加新功能？

**A**:
- 如果功能会被多个项目使用 → `packages/shared/`
- 如果功能只属于特定项目 → `packages/{project}/src/`

### Q: 如何选择 composable 还是工具函数？

**A**:
- 需要响应式、生命周期 → composable
- 纯函数，不依赖 Vue → 工具函数

### Q: 组件应该放在哪里？

**A**:
- 共享组件 → `packages/shared/components/`
- 项目特定组件 → `packages/{project}/src/components/`（如需要）

### Q: 如何导入共享资源？

**A**:
```javascript
// 从主入口导入（推荐）
import { formatDate, useDebounce } from '@multiple/shared';

// 从分类目录导入（按需导入）
import { useDebounce } from '@multiple/shared/composables/utils';
import { useToggle } from '@multiple/shared/composables/state';
```

---

## 更新日志

- **v1.0.0** (2024-01-XX): 初始版本，定义开发规范和目录规范

---

**重要提示**:
- 所有 AI 开发助手在开始开发前**必须**阅读本文档
- 如有疑问，请参考 `allaboutproject.md` 获取更多信息
- 开发完成后，请在 `ai-docs/` 中记录任务执行情况

