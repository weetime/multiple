# Multiple Projects - Monorepo 项目说明

## 项目简介

这是一个基于 **pnpm workspace** 的 monorepo 架构，用于管理多个独立的 Vue 3 + Vite 前端项目。每个项目都可以独立开发、构建和部署，同时可以共享公共的工具函数和组件。

## 架构说明

### 目录结构

```
multiple/
├── packages/              # 所有子项目目录
│   ├── vast/             # Vast 项目
│   │   ├── src/          # 源代码目录
│   │   ├── index.html    # 入口 HTML
│   │   ├── vite.config.js # Vite 配置
│   │   └── package.json  # 项目依赖配置
│   ├── model-x/          # Model-X 项目
│   │   ├── src/          # 源代码目录
│   │   ├── index.html    # 入口 HTML
│   │   ├── vite.config.js # Vite 配置
│   │   └── package.json  # 项目依赖配置
│   ├── router-demo/      # 路由演示应用
│   │   ├── src/          # 源代码目录
│   │   │   ├── views/    # 路由页面组件
│   │   │   └── router/   # 路由配置
│   │   ├── index.html    # 入口 HTML
│   │   ├── vite.config.js # Vite 配置
│   │   └── package.json  # 项目依赖配置
│   └── shared/           # 共享包
│       ├── utils/        # 共享工具函数
│       └── components/   # 共享 Vue 组件
├── pnpm-workspace.yaml   # pnpm workspace 配置
├── package.json          # 根目录 package.json
└── allaboutproject.md    # 项目说明文档（本文件）
```

### 技术栈

- **包管理**: pnpm (workspace)
- **构建工具**: Vite 5.x
- **框架**: Vue 3.x
- **路由**: Vue Router 4.x (router-demo 项目)
- **代码规范**: ESLint + Prettier

## 主要功能

### 1. 多项目管理

每个项目位于 `packages/` 目录下，可以独立运行和构建：

- **独立开发**: 每个项目有独立的开发服务器
- **独立构建**: 每个项目可以独立打包部署
- **独立配置**: 每个项目可以有自己的 Vite 配置和依赖

### 2. 共享资源

通过 `@multiple/shared` 包共享：

- **工具函数**: 日期格式化、防抖、ID 生成等
- **Vue 组件**: 可复用的 UI 组件
- **类型定义**: TypeScript 类型（如需要）

### 3. 路由演示

`router-demo` 项目展示了多项目架构，通过 Vue Router 实现：
- `/vast` - 展示 Vast 页面
- `/model-x` - 展示 Model-X 页面

### 4. 统一脚本

在根目录可以执行所有项目的命令：

```bash
# 运行所有项目的开发服务器
pnpm dev

# 构建所有项目
pnpm build

# 预览所有项目的构建结果
pnpm preview
```

## 使用方式

### 初始化项目

```bash
# 安装所有依赖
pnpm install
```

### 开发单个项目

```bash
# 方式1: 从根目录运行（推荐）
pnpm --filter @multiple/vast dev        # Vast (端口 3000)
pnpm --filter @multiple/model-x dev     # Model-X (端口 3001)
pnpm --filter @multiple/router-demo dev # Router Demo (端口 3002)

# 方式2: 进入项目目录运行
cd packages/vast
pnpm dev
```

### 添加新项目

1. 在 `packages/` 目录下创建新项目目录
2. 复制 `vast` 的结构作为模板
3. 修改 `package.json` 中的 `name` 字段
4. 根据需要调整 `vite.config.js` 中的端口号

### 使用共享包

在项目的 `package.json` 中添加依赖：

```json
{
  "dependencies": {
    "@multiple/shared": "workspace:*"
  }
}
```

在代码中使用：

```javascript
import { formatDate, debounce } from '@multiple/shared';
```

## 各模块说明

### 项目模块 (packages/vast)

**入口文件**: `src/main.js`

**主要文件**:
- `src/App.vue` - 根组件
- `src/style.css` - 全局样式
- `vite.config.js` - Vite 配置

**参数说明**:
- Vite 开发服务器默认端口: 3000（可在 `vite.config.js` 中修改）

**构建输出**: `dist/` 目录

### 项目模块 (packages/model-x)

**入口文件**: `src/main.js`

**主要文件**:
- `src/App.vue` - 根组件（粉色主题）
- `src/router/index.js` - 路由配置
- `src/views/Home.vue` - 首页组件
- `src/views/Contact.vue` - 联系页面组件
- `vite.config.js` - Vite 配置

**路由配置**:
- `/` - 重定向到 `/home`
- `/home` - 首页
- `/contact` - 联系页面

**参数说明**:
- Vite 开发服务器默认端口: 3001（可在 `vite.config.js` 中修改）
- 演示了 `generateId()` 工具函数的使用
- 使用 Vue Router 4.x 实现路由功能

**构建输出**: `dist/` 目录

### 路由演示模块 (packages/router-demo)

**入口文件**: `src/main.js`

**主要文件**:
- `src/App.vue` - 根组件（包含导航栏）
- `src/router/index.js` - 路由配置
- `src/views/Home.vue` - 首页组件
- `src/views/About.vue` - 关于页面组件
- `vite.config.js` - Vite 配置

**路由配置**:
- `/` - 重定向到 `/home`
- `/home` - 首页
- `/about` - 关于页面

**参数说明**:
- Vite 开发服务器默认端口: 3000（可在 `vite.config.js` 中修改）
- 使用 Vue Router 4.x 实现路由功能

**构建输出**: `dist/` 目录

### 共享模块 (packages/shared)

**工具函数** (`utils/index.js`):
- `formatDate(date)` - 格式化日期
  - 参数: `Date | string | number`
  - 返回: `string` - 格式化后的日期字符串
- `debounce(func, wait)` - 防抖函数
  - 参数: `func` - 要防抖的函数, `wait` - 延迟时间（毫秒）
  - 返回: `Function` - 防抖后的函数
- `generateId()` - 生成唯一 ID
  - 返回: `string` - 唯一 ID 字符串

**组件** (`components/`):
- `Layout.vue` - 主布局组件，包含头部导航和左侧菜单
  - Props: `title` (标题), `subtitle` (副标题), `menuItems` (菜单项数组)
  - Events: `menu-click` (菜单项点击事件)
  - 使用示例: `<Layout title="Project" :menu-items="items"><slot /></Layout>`
- `Header.vue` - 头部导航组件
  - Props: `title` (标题), `subtitle` (副标题)
  - Slots: `actions` (右侧操作区域)
- `Sidebar.vue` - 左侧菜单组件
  - Props: `menuItems` (菜单项数组)
  - Events: `menu-click` (菜单项点击事件)
  - 菜单项格式: `{ key, label, icon, active, href?, onClick? }`

## 示例调用

### 在项目中使用共享工具

```vue
<template>
  <div>
    <p>当前时间: {{ formattedDate }}</p>
    <button @click="handleClick">点击我</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { formatDate, debounce } from '@multiple/shared';

const formattedDate = ref(formatDate(new Date()));

const handleClick = debounce(() => {
  console.log('Button clicked!');
}, 300);
</script>
```

### 在项目中使用共享 Layout 组件

```vue
<template>
  <Layout
    title="My Project"
    subtitle="Project Description"
    :menu-items="menuItems"
    @menu-click="handleMenuClick"
  >
    <div class="content">
      <!-- Your content here -->
    </div>
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

### 运行开发服务器

```bash
# 运行 vast
pnpm --filter @multiple/vast dev
# 访问 http://localhost:3000

# 运行 model-x
pnpm --filter @multiple/model-x dev
# 访问 http://localhost:3001

# 运行 router-demo（推荐，可查看多项目演示）
pnpm --filter @multiple/router-demo dev
# 访问 http://localhost:3002
# 然后导航到 /vast 或 /model-x
```

## 常见问题

### 1. 依赖安装失败

**问题**: `pnpm install` 报错

**解决**: 
- 确保已安装 pnpm: `npm install -g pnpm`
- 检查 Node.js 版本 >= 18.0.0
- 清除缓存: `pnpm store prune`

### 2. 端口冲突

**问题**: 开发服务器端口被占用

**解决**: 修改对应项目的 `vite.config.js` 中的 `server.port` 配置

### 3. 共享包导入失败

**问题**: 无法导入 `@multiple/shared`

**解决**: 
- 确保在项目的 `package.json` 中添加了依赖
- 运行 `pnpm install` 重新安装依赖

### 4. 构建失败

**问题**: `pnpm build` 报错

**解决**: 
- 检查各项目的 `vite.config.js` 配置是否正确
- 确保所有依赖都已正确安装

## 调试建议

1. **查看依赖树**: `pnpm list --depth=0`
2. **清理构建产物**: 删除各项目的 `dist` 目录
3. **重新安装依赖**: `rm -rf node_modules && pnpm install`
4. **检查端口占用**: `lsof -i :3000` (macOS/Linux)

## 版本历史

- **v1.2.0** (2024-01-XX): 新增共享 Layout 组件，vast 和 model-x 共用统一的头部导航和左侧菜单布局
- **v1.1.0** (2024-01-XX): 新增 model-x 和 router-demo 项目，支持路由演示多项目架构
- **v1.0.0** (2024-01-XX): 初始版本，支持多项目 monorepo 架构

---

**最后更新**: 2024-01-XX

