# Issie's Blog — 项目上下文

> 个人技术博客，基于 Hexo 构建，部署于 GitHub Pages。
> 域名：https://issieart.com

## 一句话描述

一个专注于编程、阅读、思考与写作的静态博客，采用自研 Hexo 主题，追求极简阅读体验与清晰的内容表达。

## 文档地图

本文档采用渐进式披露，需要深入了解时可点击以下链接：

| 维度 | 文档 | 说明 |
|------|------|------|
| 产品 | [docs/design/product.md](docs/design/product.md) | 定位、受众、功能、内容策略 |
| 技术栈 | [docs/design/tech.md](docs/design/tech.md) | 依赖、工具链、环境要求 |
| 架构 | [docs/design/architecture.md](docs/design/architecture.md) | 目录结构、构建流程、主题设计、部署流水线 |

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
├── source/_posts/          # 博客文章（Markdown）
├── source/about/           # 关于页面
├── themes/issie/           # 自研主题（EJS + CSS）
│   ├── layout/             # 页面模板
│   └── source/css/         # 样式文件
├── public/                 # 构建输出（GitHub Pages 源）
└── _config.yml             # 站点配置
```

## 核心约定

- **文章写作**：只用三级标题划分章节，观点要有锋芒，避免"正确的废话"
- **主题开发**：所有样式在 `themes/issie/source/css/style.css`，模板在 `themes/issie/layout/`
- **资源引用**：使用绝对路径 `/assets/xxx`，源文件放 `source/assets/`
- **部署**：Push 到 main 分支自动触发 GitHub Actions 构建并部署
