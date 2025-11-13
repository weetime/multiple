# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2024-01-XX

### Added

- 在 shared 包中新增共享 Layout 组件系统
  - `Layout.vue` - 主布局组件，包含头部和侧边栏
  - `Header.vue` - 头部导航组件
  - `Sidebar.vue` - 左侧菜单组件
- project1 和 project2 现在共用统一的布局系统
- 支持自定义菜单项配置（图标、标签、链接、点击事件等）

### Changed

- project1 和 project2 重构为使用共享 Layout 组件
- 统一了项目间的 UI 风格和布局结构
- 更新 shared 包，添加 Vue 依赖以支持组件导出

### Features

- 响应式布局设计，支持移动端适配
- 灵活的菜单配置系统
- 统一的头部导航和左侧菜单样式

## [1.1.0] - 2024-01-XX

### Added

- 新增 project2 项目（端口 3001）
- 新增 router-demo 项目，使用 Vue Router 演示多项目架构
- router-demo 包含 `/project1` 和 `/project2` 两个路由页面

## [1.0.0] - 2024-01-XX

### Added

- 初始化 monorepo 项目结构
- 使用 pnpm workspace 管理多项目
- 创建示例项目 `project1` (Vue 3 + Vite)
- 创建共享包 `@multiple/shared`，包含工具函数
- 配置 ESLint 和 Prettier 代码规范
- 添加项目文档 `allaboutproject.md`
- 创建 `ai-docs` 目录用于记录 AI 任务历史

### Project Structure

- `packages/project1/` - 第一个示例项目
- `packages/shared/` - 共享工具和组件包
- 根目录配置文件（package.json, pnpm-workspace.yaml）

### Features

- 支持多项目独立开发和构建
- 共享包机制，便于代码复用
- 统一的代码规范和格式化配置

