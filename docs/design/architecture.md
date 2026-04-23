# 架构设计

## 系统架构

```
┌─────────────────────────────────────────┐
│           用户浏览器                      │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│         GitHub Pages (CDN)              │
│         托管静态 HTML/CSS/JS            │
└─────────────┬───────────────────────────┘
              │  push 触发
┌─────────────▼───────────────────────────┐
│      GitHub Actions (CI/CD)             │
│  ┌─────────┐  ┌─────────┐  ┌────────┐  │
│  │ Checkout│→ │ npm ci  │→ │ hexo   │  │
│  │ 源码    │  │ 安装    │  │ generate│  │
│  └─────────┘  └─────────┘  └────────┘  │
│                   ↓                     │
│            ┌────────────┐               │
│            │ deploy-pages│              │
│            │  (public/)  │               │
│            └────────────┘               │
└─────────────────────────────────────────┘
```

## 目录结构

```
.
├── source/                     # 内容源
│   ├── _posts/                 # 博客文章（Markdown）
│   ├── about/                  # 关于页面
│   └── assets/                 # 静态资源（头像、Logo）
├── themes/issie/               # 自研主题
│   ├── layout/                 # EJS 模板
│   │   ├── layout.ejs          # 基础 HTML 壳
│   │   ├── index.ejs           # 首页
│   │   ├── post.ejs            # 文章详情页
│   │   ├── page.ejs            # 静态页面
│   │   ├── archive.ejs         # 归档列表
│   │   ├── category.ejs        # 分类列表
│   │   └── tag.ejs             # 标签列表
│   ├── source/                 # 主题静态资源
│   │   ├── css/style.css       # 主题样式
│   │   └── js/toc.js           # 目录交互逻辑
│   └── _config.yml             # 主题配置
├── public/                     # 构建输出（.gitignore）
├── _config.yml                 # 站点主配置
└── package.json                # 依赖与脚本
```

## 主题架构

### 模板继承关系

```
layout.ejs (基础壳)
├── index.ejs      → 首页（文章列表）
├── post.ejs       → 文章详情（含 TOC 逻辑）
├── page.ejs       → 静态页面（关于我）
├── archive.ejs    → 时间归档
├── category.ejs   → 分类聚合
└── tag.ejs        → 标签聚合
```

### 页面布局逻辑

| 页面类型 | 布局特点 |
|----------|----------|
| 首页 | 居中单列，无导航栏（`is_home()` 隐藏） |
| 文章页 | 支持双栏（文章 + TOC），导航栏显示"← 首页" |
| 静态页 | 居中单列，与文章页共享样式 |
| 归档/分类/标签 | 居中列表，时间线样式 |

### TOC 实现

- **桌面端（≥1100px）**：CSS Grid 双栏布局，`post-layout.has-toc` 展开为 `640px + 240px`
- **移动端（<1100px）**：隐藏侧边栏，右下角悬浮按钮触发底部抽屉
- **交互**：`toc.js` 处理滚动高亮、按钮点击、遮罩层

## 构建流程

```
source/ + themes/issie/
    │
    ▼
hexo generate
    │
    ▼
public/  (静态 HTML/CSS/JS/图片)
    │
    ▼
GitHub Actions → GitHub Pages
```

### 构建阶段

1. **Checkout**：拉取源码（含 submodules）
2. **Setup Node**：Node.js 20
3. **Cache & Install**：npm 依赖缓存
4. **Build**：`npm run build`（hexo generate）
5. **Upload**：`public/` 作为 artifact
6. **Deploy**：GitHub Pages 部署

## 关键配置

### 站点配置（`_config.yml`）

| 配置项 | 值 | 说明 |
|--------|-----|------|
| theme | issie | 使用自研主题 |
| per_page | 10 | 首页分页数 |
| language | zh-CN | 站点语言 |
| url | https://issieart.com | 生产域名 |

### 部署配置

- 触发条件：`push` 到 `main` 分支
- 权限：`pages: write`, `id-token: write`
- 域名配置：`CNAME` 文件指向 `issieart.com`
