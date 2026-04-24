# Hexo 主题开发

## 目录结构
- `themes/issie/layout/` — EJS 模板文件
- `themes/issie/source/css/` — 样式文件
- `themes/issie/_config.yml` — 主题配置

## 模板文件
- `layout.ejs` — 基础 HTML 壳，所有页面共用（head、body、footer）
- `index.ejs` — 首页
- `post.ejs` — 文章详情页
- `page.ejs` — 静态页面（如"关于我"）
- `archive.ejs` — 归档列表
- `category.ejs` / `tag.ejs` — 分类/标签列表

## 常用 Hexo 变量
- `config` — 站点配置（_config.yml）
- `page` — 当前页面数据（title、content、date 等）
- `site.posts` — 所有文章集合
- `is_home()` — 是否首页
- `is_post()` — 是否文章页
- `url_for(path)` — 生成 URL
- `date(date, format)` — 格式化日期

## 静态资源
- 源文件放 `source/assets/`，build 后复制到 `public/assets/`
- 引用路径用绝对路径：`/assets/logo.png`
- favicon 在 layout.ejs 配置：`<link rel="icon" type="image/png" href="/assets/logo.png">`

## 样式修改
- 所有样式在 `themes/issie/source/css/style.css`
- 字体大小：body 的 font-size
- 标题大小：h1/h2/h3 的 font-size
- 最大宽度：body 的 max-width

## 导航
- 全局导航在 layout.ejs 的 body 开头，用 `is_home()` 判断是否显示
- 页面底部导航在各模板的 footer 里单独加

## 构建流程
- `npm run build` — 生成静态文件到 public/
- `npm run clean` — 清除缓存和生成文件
- `npm run server` — 本地预览
- 修改模板或样式后需要重新 build
- 浏览器可能缓存 favicon，需强制刷新（Ctrl+Shift+R）
