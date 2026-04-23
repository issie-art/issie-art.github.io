# 技术栈

## 核心框架

| 组件 | 版本 | 用途 |
|------|------|------|
| [Hexo](https://hexo.io/) | 7.3.0 | 静态站点生成器 |
| Node.js | 20 | 运行时 |

## Hexo 插件

| 插件 | 用途 |
|------|------|
| hexo-generator-archive | 生成归档页面 |
| hexo-generator-category | 生成分类页面 |
| hexo-generator-index | 生成首页索引 |
| hexo-generator-tag | 生成标签页面 |
| hexo-renderer-ejs | EJS 模板渲染 |
| hexo-renderer-marked | Markdown 渲染 |
| hexo-renderer-stylus | Stylus 样式渲染（预留） |
| hexo-server | 本地开发服务器 |

## 主题技术

| 技术 | 说明 |
|------|------|
| EJS | 模板引擎（`themes/issie/layout/`） |
| CSS | 纯原生 CSS，无预处理器、无框架 |
| 响应式 | Mobile-first，断点 1100px（桌面/移动端 TOC 切换） |

## 部署与托管

| 服务 | 用途 |
|------|------|
| GitHub Pages | 静态站点托管 |
| GitHub Actions | CI/CD 流水线（`.github/workflows/pages.yml`） |

## 开发环境

```bash
# 安装依赖
npm install

# 本地预览
npm run server

# 构建
npm run build
```

## 构建产物

- 输出目录：`public/`
- 构建后通过 GitHub Actions 上传为 Pages artifact 并部署
