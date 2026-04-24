# Issie's Blog — 项目上下文

> 个人技术博客，基于 Hexo 构建，部署于 GitHub Pages。
> 域名：https://issieart.com

## 一句话描述

观点驱动的技术写作，定位个人 IP。采用自研 Hexo 主题，追求极简、清晰的阅读体验。

## 文档地图

本文档采用渐进式披露，需要深入了解时可点击以下链接：

| 维度 | 文档 | 说明 |
|------|------|------|
| 产品 | [docs/design/product.md](docs/design/product.md) | 定位、受众、功能、内容策略 |
| 技术栈 | [docs/design/tech.md](docs/design/tech.md) | 依赖、工具链、环境要求 |
| 架构 | [docs/design/architecture.md](docs/design/architecture.md) | 目录结构、构建流程、主题设计、部署流水线 |
| 写作 | [docs/writing-style.md](docs/writing-style.md) | 格式规范、文章结构、语言风格 |
| 主题 | [docs/hexo-theme.md](docs/hexo-theme.md) | 模板体系、Hexo 变量、构建流程 |

## 快速开始

```bash
# 本地预览
npm run server

# 构建（生成到 public/）
npm run build

# 清除缓存
npm run clean
```

## 关键目录

```
├── source/_posts/              # 博客文章（Markdown）
├── source/about/               # 关于页面
├── source/assets/              # 静态资源（头像、Logo）
├── themes/issie/               # 自研主题
│   ├── layout/                 # EJS 模板
│   └── source/
│       ├── css/style.css       # 主题样式
│       └── js/toc.js           # 目录交互
├── docs/                       # 项目文档（AGENTS 唯一入口）
│   ├── design/                 # 产品、技术栈、架构
│   ├── writing-style.md        # 写作规范
│   └── hexo-theme.md           # 主题开发约定
├── .github/workflows/pages.yml # CI/CD 自动部署
├── public/                     # 构建输出（过程文件，.gitignore）
├── _config.yml                 # 站点主配置
└── package.json                # 依赖与脚本
```

## 核心约定

- **写作**：遵循 [docs/writing-style.md](docs/writing-style.md)，破-立-证-用结构，只用三级标题，观点锋利
- **写作风格**：中文为主，技术术语保留英文；反思性、克制、不加感叹号和夸张修辞
- **主题开发**：遵循 [docs/hexo-theme.md](docs/hexo-theme.md)，所有样式在 `themes/issie/source/css/style.css`，模板在 `themes/issie/layout/`
- **TOC 导航对齐**：当文章有 TOC 时，`layout.ejs` 会给 `.site-wrapper` 添加 `has-toc` 类，CSS 据此扩展 `.site-nav` 和 `footer` 宽度至 920px
- **资源引用**：使用绝对路径 `/assets/xxx`，源文件放 `source/assets/`
- **部署**：Push 到 main 分支自动触发 GitHub Actions 构建并部署
- **源文件 vs 过程文件**：`source/`、`themes/`、`_config.yml` 是源文件；`public/`、`db.json`、`node_modules/` 是自动生成的过程文件，已在 `.gitignore` 中排除
