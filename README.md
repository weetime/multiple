# Multiple Projects - Monorepo

现代化的多项目前端工程，基于 pnpm workspace + Vite + Vue 3。

## 📋 前置要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

如果还没有安装 pnpm，可以通过以下方式安装：

```bash
npm install -g pnpm
```

## 🚀 快速开始

### 1. 安装依赖

在项目根目录执行：

```bash
pnpm install
```

这将安装所有项目（vast, model-x, router-demo, shared）的依赖。

### 2. 运行项目

#### 方式一：运行单个项目（推荐）

```bash
# 运行 vast (端口 3000)
pnpm --filter @multiple/vast dev

# 运行 model-x (端口 3001)
pnpm --filter @multiple/model-x dev

# 运行 router-demo (端口 3002) - 路由演示应用
pnpm --filter @multiple/router-demo dev
```

#### 方式二：进入项目目录运行

```bash
# 运行 vast
cd packages/vast
pnpm dev

# 运行 model-x
cd packages/model-x
pnpm dev

# 运行 router-demo
cd packages/router-demo
pnpm dev
```

#### 方式三：同时运行所有项目

```bash
# 在根目录运行（会启动所有项目的开发服务器）
pnpm dev
```

### 3. 访问项目

运行成功后，在浏览器中访问：

- **Vast**: http://localhost:3000
- **Model-X**: http://localhost:3001
- **Router Demo**: http://localhost:3002
  - 访问 `/vast` 查看 Vast 页面
  - 访问 `/model-x` 查看 Model-X 页面

## 📦 构建项目

```bash
# 构建所有项目
pnpm build

# 构建单个项目
pnpm --filter @multiple/vast build
pnpm --filter @multiple/model-x build
pnpm --filter @multiple/router-demo build
```

构建产物会输出到各项目的 `dist/` 目录。

## 📁 项目结构

```
multiple/
├── packages/
│   ├── vast/          # Vast 项目 (端口 3000)
│   ├── model-x/       # Model-X 项目 (端口 3001)
│   ├── router-demo/   # 路由演示应用 (端口 3002)
│   └── shared/        # 共享包（工具函数和组件）
├── pnpm-workspace.yaml # pnpm workspace 配置
├── package.json        # 根目录配置
└── allaboutproject.md # 详细项目文档
```

## 🛠️ 常用命令

```bash
# 安装依赖
pnpm install

# 运行开发服务器（所有项目）
pnpm dev

# 构建所有项目
pnpm build

# 预览构建结果
pnpm preview

# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

## ❓ 常见问题

### 1. 端口被占用

如果端口 3000、3001 或 3002 被占用，可以修改对应项目的 `vite.config.js` 中的 `server.port` 配置。

### 2. 依赖安装失败

```bash
# 清除 pnpm 缓存
pnpm store prune

# 删除 node_modules 重新安装
rm -rf node_modules
pnpm install
```

### 3. 找不到 pnpm 命令

确保已全局安装 pnpm：

```bash
npm install -g pnpm
```

## 📚 更多信息

详细文档请查看 [allaboutproject.md](./allaboutproject.md)

## 🛠️ 技术栈

- **pnpm** - 包管理器
- **Vite** - 构建工具
- **Vue 3** - 前端框架
- **Vue Router** - 路由管理（router-demo 项目）
- **ESLint** - 代码检查
- **Prettier** - 代码格式化

## 📄 License

MIT

