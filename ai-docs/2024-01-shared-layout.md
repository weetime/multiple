# 共享 Layout 组件任务记录

## 任务描述

project1 和 project2 共用一个 layout 布局，包括头部导航和左侧菜单导航。

## 执行计划

1. ✅ 在 shared 包中创建共享 Layout 组件（包含头部导航和左侧菜单）
2. ✅ 创建共享的导航组件（Header 和 Sidebar）
3. ✅ 更新 project1 使用共享 Layout
4. ✅ 更新 project2 使用共享 Layout
5. ✅ 更新文档记录变更

## 实现方案

### 组件设计

创建了三个共享组件：

1. **Layout.vue** - 主布局组件
   - 包含 Header 和 Sidebar
   - 使用 slot 接收内容区域
   - 支持自定义标题、副标题和菜单项

2. **Header.vue** - 头部导航组件
   - 显示项目标题和副标题
   - 支持右侧操作区域（通过 slot）
   - 响应式设计

3. **Sidebar.vue** - 左侧菜单组件
   - 支持菜单项配置（图标、标签、链接）
   - 支持激活状态
   - 支持点击事件处理

### 菜单项配置格式

```javascript
{
  key: 'unique-key',
  label: 'Menu Label',
  icon: '🏠', // 可选
  active: true, // 可选，是否激活
  href: '/path', // 可选，链接地址
  onClick: () => {} // 可选，点击回调
}
```

### 使用方式

在项目中使用：

```vue
<template>
  <Layout
    title="Project Title"
    subtitle="Subtitle"
    :menu-items="menuItems"
    @menu-click="handleMenuClick"
  >
    <!-- Content -->
  </Layout>
</template>

<script setup>
import { Layout } from '@multiple/shared/components';
</script>
```

## 技术细节

### 共享包更新

- 在 `shared/package.json` 中添加了 Vue 依赖
- 更新了 exports 配置，支持组件导出
- 更新了 `components/index.js` 导出所有组件

### 项目更新

- project1 和 project2 都重构为使用共享 Layout
- 保留了各自的内容区域和样式
- 菜单项配置根据项目需求定制

### 样式设计

- 使用现代化的渐变背景（紫色主题）
- 响应式设计，支持移动端
- 统一的视觉风格

## 结果

✅ 成功实现了共享 Layout 系统：

1. **统一的布局结构** - project1 和 project2 现在使用相同的布局框架
2. **灵活的配置** - 每个项目可以自定义标题和菜单项
3. **代码复用** - 布局代码集中在 shared 包中，便于维护
4. **响应式设计** - 支持不同屏幕尺寸

## 后续建议

1. 可以考虑添加更多布局变体（如无侧边栏、顶部导航等）
2. 可以添加主题切换功能
3. 可以集成路由系统，实现菜单项与路由的自动关联
4. 可以添加菜单折叠/展开功能

## 使用说明

```bash
# 运行 project1（使用共享 Layout）
pnpm --filter @multiple/project1 dev

# 运行 project2（使用共享 Layout）
pnpm --filter @multiple/project2 dev
```

两个项目现在都使用统一的头部导航和左侧菜单布局。

