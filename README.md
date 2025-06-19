# React Init

一个现代化的 React 项目模板，使用 TypeScript、Webpack 5、Tailwind CSS 等技术栈。

## ✨ 特性

- ⚛️ React 19 + TypeScript
- 🎨 Tailwind CSS 4.x 样式框架
- 📦 Webpack 5 构建工具
- ⚡ SWC 编译器（快速构建）
- 🔧 ESLint + Prettier 代码规范
- 🧪 Jest 测试框架
- 🚀 开发服务器热重载
- 📊 Bundle 分析工具

## 📋 技术栈

- **前端框架**: React 19
- **类型检查**: TypeScript
- **样式**: Tailwind CSS 4.x + PostCSS
- **构建工具**: Webpack 5 + SWC
- **代码质量**: ESLint + Prettier
- **测试**: Jest
- **自动化测试**: Selenium WebDriver

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
# 启动开发服务器（带热重载）
npm run client:server

# 或者只构建开发版本
npm run client:dev
```

### 生产构建

```bash
npm run client:prod
```

### 代码检查和格式化

```bash
# 运行 ESLint 检查
npm run lint

# 自动修复代码问题
npm run lint:fix
```

## 📁 项目结构

```
react-init/
├── src/                    # 源代码目录
├── dist/                   # 构建输出目录
├── docs/                   # 文档目录
├── tests/                  # 测试文件
├── cypress/                # E2E 测试
├── config/                 # 配置文件
├── node_modules/           # 依赖包
├── webpack.config.js       # Webpack 配置
├── tailwind.config.js      # Tailwind 配置
├── postcss.config.js       # PostCSS 配置
├── jest.config.js          # Jest 配置
├── cypress.config.js       # Cypress 配置
├── .eslintrc              # ESLint 配置
└── package.json           # 项目配置
```

## 🔧 配置说明

### ESLint 配置

项目使用 Airbnb TypeScript 配置，结合 Prettier 进行代码格式化。

### Webpack 配置

- 开发模式：启用热重载和友好错误提示
- 生产模式：代码压缩、CSS 提取和优化
- 支持 TypeScript、CSS、图片等资源处理

### Tailwind CSS

使用最新的 Tailwind CSS 4.x 版本，通过 PostCSS 处理。

## 📝 可用脚本

| 命令                    | 描述                 |
| ----------------------- | -------------------- |
| `npm run client:dev`    | 构建开发版本         |
| `npm run client:server` | 启动开发服务器       |
| `npm run client:prod`   | 构建生产版本         |
| `npm run lint`          | 运行 ESLint 检查     |
| `npm run lint:fix`      | 自动修复代码问题     |
| `npm test`              | 运行测试（需要配置） |

## 🛠️ 开发工具

### Bundle 分析

项目包含 `webpack-bundle-analyzer`，可以分析打包后的文件大小。

### 进度显示

使用 `themed-progress-plugin` 显示构建进度。

### 错误提示

集成 `friendly-errors-webpack-plugin` 提供友好的错误信息。

## 📖 开发指南

1. 在 `src/` 目录下编写你的 React 组件
2. 使用 TypeScript 进行类型检查
3. 遵循 ESLint 和 Prettier 的代码规范
4. 使用 Tailwind CSS 进行样式开发
5. 编写测试确保代码质量

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

ISC License
