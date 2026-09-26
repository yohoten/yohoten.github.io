# Yohoten's Blog 🦋

一个基于 **Hexo + Butterfly** 的个人技术博客

## ✨ 特性

- 🎨 **现代卡片式 UI**：紫色主色调、顶部横幅（banner）、旋转头像、深浅色切换
- 📝 **本地搜索**：基于 `hexo-generator-search` 的站内全文搜索，`search.xml` 首次点开搜索框时才加载
- 📡 **RSS 订阅**：基于 `hexo-generator-feed` 生成 `atom.xml`，页脚提供订阅入口
- 📱 **PWA 基础**：manifest + 全端图标（含 maskable），可"添加到主屏幕"；离线缓存需另配 Service Worker
- ⏳ **加载动效**：三角形脉冲动画（`source/css/triangles-loader.css` + `source/js/triangles-loader.js`），
  用于搜索数据首次加载与懒加载图片的占位
- 🧭 **完整页面**：首页 / 归档 / 标签 / 分类 / 作品集 / 小口袋 / 友链 / 关于 / 404
- 💻 **Mac 风格代码高亮**、文章封面、目录（TOC）、相关文章、文章版权
- 📊 **访问统计**：基于不蒜子（busuanzi）的 PV / UV
- 🔍 **SEO**：sitemap.xml + robots.txt
- 🚀 **一键部署**：GitHub Actions 自动发布到 GitHub Pages（本地 deploy 已弃用）

## 📦 环境要求

| 依赖 | 版本要求 |
| --- | --- |
| Node.js | 建议 LTS（16/18/20）。本机 22.x 亦可运行 |
| npm | 建议使用国内镜像 `https://registry.npmmirror.com` |
| Git | 用于部署到 GitHub |

## 🗂 目录结构

```
Yohoten_Blog/
├── _config.yml              # 站点全局配置（标题、URL、搜索、部署）
├── _config.butterfly.yml    # Butterfly 主题配置（UI 相关，优先级最高）
├── package.json             # 依赖清单（hexo、主题、插件）
├── scaffolds/               # 文章/页面模板（含 showcase.md）
├── source/
│   ├── _posts/              # Markdown 文章
│   ├── _data/link.yml       # 友情链接数据
│   ├── 404.md               # 404 页面
│   ├── robots.txt           # 爬虫规则
│   ├── about/               # 关于页
│   ├── categories/          # 分类页
│   ├── tags/                # 标签页
│   ├── link/                # 友链页
│   ├── showcase/            # 作品集（数据分析/可视化作品展示）
│   ├── tools/               # 小口袋（自研桌面工具 / 脚本介绍页）
│   ├── css/                 # 自定义样式（如 showcase.css）
│   └── images/              # 本地图片资源（头像、横幅、封面、图标）
├── .github/workflows/       # GitHub Actions 自动部署
└── public/                  # 构建产物（可部署）
```

## 🚀 快速开始

```bash
# 1. 安装依赖（首次）
npm install

# 2. 本地预览
npm run server          # 或 npx hexo server，访问 http://localhost:4000

# 3. 生成静态文件
npm run build           # 或 npx hexo generate

# 4. 清除缓存（改配置后建议执行）
npm run clean           # 或 npx hexo clean
```

> **Windows cmd 提示**：cmd 不支持 `&&` 链式，请分步执行 `hexo clean`、`hexo generate`。

## ✍️ 写作指南

### 新建文章

```bash
npx hexo new 文章标题
```

会在 `source/_posts/` 下生成 Markdown 文件，开头带 Front Matter：

```yaml
---
title: 文章标题
date: 2025-01-05 12:00:00
tags:
  - Hexo
categories:
  - 技术教程
description: 文章摘要（显示在首页卡片）
cover: /images/cover1.svg   # 封面图（可选，默认从 default_cover 随机）
---
```

### 常用 Front Matter 字段

| 字段 | 说明 |
| --- | --- |
| `title` | 文章标题 |
| `date` | 发布时间 |
| `tags` | 标签（可多个） |
| `categories` | 分类（可层级） |
| `description` | 首页摘要，优先于正文截取 |
| `cover` | 封面图 |
| `top` | 置顶，数值越大越靠前 |
| `comments` | 是否开启评论 |
| `mathjax` | 是否加载数学公式 |

### 图片放哪里

把图片放到 `source/images/` 目录，Markdown 中引用 `/images/图片名.png`。当前已内置：

- `wechat_avatar_01.jpg` 头像
- `logo.svg` 站点 Logo
- `favicon.svg` 站点图标
- `banner-20240815_DSC.webp` 顶部横幅
- `cover1.svg` ~ `cover4.svg` 文章封面（默认封面，随机选用）

### 写作 Checklist（发布前自查）

- [x] 标题简洁明确，能概括文章主题
- [x] `description` 已填写（20~40 字，显示在首页卡片与 SEO）
- [x] `tags` / `categories` 已设置（与既有分类体系一致）
- [x] `cover` 已指定（不指定则从 `default_cover` 随机）
- [x] 正文有明确的标题层级（`##` / `###`），便于生成目录
- [x] 代码块标注语言（如 `python` / `bash`），可获得高亮
- [x] 图片已压缩并放在 `source/images/`，路径以 `/images/` 开头
- [x] 本地执行 `hexo clean` + `hexo generate` 预览无报错

## 🎨 UI 配置（_config.butterfly.yml）

主题 UI 全部在 [`_config.butterfly.yml`](_config.butterfly.yml) 中配置，常用模块：

| 配置项 | 作用 |
| --- | --- |
| `menu` | 导航菜单（可增删、改中文文案） |
| `social` | 社交图标（改成本人 GitHub / 邮箱） |
| `avatar` | 头像与旋转效果 |
| `index_img` / `default_top_img` | 首页/文章顶部横幅 |
| `cover.default_cover` | 文章默认封面 |
| `highlight_theme` | 代码高亮风格（当前 mac） |
| `theme_color` | 站点主色调（当前紫色 `#8b5cf6`） |
| `darkmode` | 深浅色模式（已开启 18:00-6:00 自动切换） |
| `lazyload` | 图片懒加载 |
| `aside` | 侧边栏卡片（作者/公告/最新文章/分类/标签/归档/信息） |
| `local_search` | 站内搜索 |
| `inject.head` | 注入自定义资源（如作品集样式 showcase.css） |

> 主题本身通过 npm 管理（`hexo-theme-butterfly`），配置文件在 `node_modules/` 中，**不要直接改**，所有自定义写入站点根目录的 `_config.butterfly.yml` 即可。
> 若需要深度定制主题源码（改 pug/stylus/js），请改用 git 方式安装：`git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly`，并把 `package.json` 中 `hexo-theme-butterfly` 依赖移除。

## 🖼 作品集页（showcase）

导航栏「作品集」入口指向 `https://你的域名/showcase/`，用于展示**数据分析 / 数据科学 / 数据可视化**方向的作品。结构：

- 总览页：[`source/showcase/index.md`](source/showcase/index.md) —— 作品卡片网格（`.showcase-card`）
- 卡片视觉：斜切背板分层结构——卡片本身不倾斜，装饰全在 `::before`（背板 skewY）/`::after`（错位投影）上，
  类型色由 `:has(.badge-*)` 自动映射；首个核心项目可加 `showcase-card--feat` class 跨两列展示；
  metrics 使用 `<b>数值</b><i>标签</i>` 结构，技术栈超过 5 个自动截断
- 每个作品一个子页：`source/showcase/项目slug/index.md`，front matter 统一规范见下方
- 封面图放 `source/images/showcase/`，建议 960×540（16:9）
- 自定义样式：[`source/css/showcase.css`](source/css/showcase.css)（通过 `inject.head` 注入，自动适配深浅色）

### 新增一个作品

1. 复制 `source/showcase/示例项目/` 文件夹，重命名为 `source/showcase/项目slug/`
2. 填写子页 front matter：

```yaml
---
title: 项目标题
date: 2025-01-05 12:00:00
type: "showcase"
categories:
  - 数据分析
tags:
  - Python
  - pandas
cover: /images/showcase/封面.png
description: 一句话简介（显示在总览卡片，建议 20~40 字）
showcase:
  demo: https://demo链接
  repo: https://github.com/源码
  tech: [Python, pandas, ECharts]
---
```

3. 正文按「项目简介 → 数据与预处理 → 分析方法 → 可视化与结论 → 相关链接」编写
4. 在总览页 `.showcase-grid` 中复制一张 `.showcase-card` 卡片，替换 `href` / 封面 / 标题 / 描述 / 标签 / 链接

> 命令行方式：`npx hexo new showcase "标题" --path showcase/slug`（使用 [`scaffolds/showcase.md`](scaffolds/showcase.md) 模板）。

## 🧰 小口袋页（tools）

导航栏「小口袋」入口指向 `/tools/`，收录**自研桌面工具 / 脚本 / 效率应用**。它与「作品集」共用一套卡片样式与分页脚本（`showcase.css` / `showcase-pagination.js` 已全站注入，无需额外配置）。

- 页面文件：[`source/tools/index.md`](source/tools/index.md)（front matter：`type: "showcase"` + `aside: false`）
- 内容分工：工具介绍页放在**各自仓库自己的 GitHub Pages**（`index.html`），博客只做入口，避免同一份内容两处维护
- 按钮约定：`.btn-demo`（青色渐变，主入口）→ 项目主页；`.btn-code` → 源码仓库 / 国内镜像 / 站内开发笔记
- 徽章配色：`.badge-app`（桌面应用）、`.badge-script`（脚本工具）、`.badge-web`（网页应用）、`.badge-game`（小游戏）、`.badge-skill`（AI Skill），定义在 `source/css/showcase.css`

### 新增一个工具

1. 在 `source/tools/index.md` 的 `.showcase-grid` 中复制一张 `.showcase-card`，**卡片上的 `data-badge` 必须与徽章类型一致**（`app` / `web` / `script` / `game` / `skill`），否则类型筛选会漏掉它
2. 标题行用 `.showcase-headline` 包住「图标 + 标题」，图标类名与徽章同色（`.icon-app` / `.icon-web` / …）
3. 替换标题、徽章、`showcase-desc`（20~60 字）、`showcase-metrics`、`showcase-meta` 与 `showcase-links`
4. 若该工具已有站内文章，可追加一条「开发笔记」内链（如 `/2026/05/24/ACRPA-桌面自动化工作流工具/`）
5. 分页与筛选无需改动：`showcase-pagination.js` 会自动统计每个 chip 的数量、按筛选结果分页（每页 6 张，不足一页时分页条自动隐藏）

> 新增一个**类别**时要改三处：`showcase.css` 里加 `.badge-xxx` 与 `.icon-xxx`（颜色走 `--sh-c-xxx` 变量，并在 `html[data-theme="light"]` 里给一个压暗值）、卡片徽章、以及页内 `#showcaseFilter` 的 chip。
>
> 描述会被 `-webkit-line-clamp` 统一截成 4 行以保持卡片等高，完整说明请放在项目主页。

> 建议子目录 / 文章 slug 用英文（如 `/tools/`），中文目录名在 GitHub Pages 上会被百分号编码，链接不好读。

## 🌐 站点配置（_config.yml）

[`_config.yml`](_config.yml) 中主要改：

- **站点信息**：`title` / `subtitle` / `description` / `author`
- **URL**：`url` 改成你的真实域名，例如 `https://你的用户名.github.io`（自定义域名预案见 `_config.yml` 内注释）
- **时区**：`timezone: Asia/Shanghai`

## 🚢 部署到 GitHub Pages

本项目统一由 **GitHub Actions 自动部署**（`.github/workflows/deploy.yml`），本地 `hexo deploy` 已弃用，`_config.yml` 中的 `deploy` 段已注释保留。双链路（本地推 `main`、CI 推 `gh-pages`）会互相覆盖，不要同时启用。

1. 把本项目源码推送到 GitHub 仓库（`git init` → `git add .` → `git commit` → `git push`）
2. 仓库 Settings → Pages → **Build and deployment** → Source 选择 **Deploy from a branch** → Branch 选择 **gh-pages**，根目录 `/`
3. 之后每次 push 到 `main`，Actions 会自动构建并发布到 `gh-pages` 分支，无需手动操作

产物根目录包含 `source/.nojekyll`（通过 `_config.yml` 的 `include` 纳入生成），让 GitHub Pages 跳过 Jekyll 处理，避免 `_` 开头路径被忽略。

> 如需恢复本地部署：取消 `_config.yml` 中 `deploy` 的注释（已改为 SSH 地址 + `gh-pages` 分支），并保持与 Pages 设置的分支一致。

## 📄 404 页面

项目已内置 `source/404.md`（`type: "404"`），构建后生成 `public/404.html`。GitHub Pages 会自动使用根目录的 `404.html` 作为自定义错误页。

## 💬 评论系统：Giscus（基于 GitHub Discussions，零后端）

评论数据存放在仓库 Discussions 中，无需自建服务端。`repo_id` 已实测填好，启用步骤：

1. 仓库 Settings → General → Features 勾选 **Discussions**，并建一个分类（推荐 Announcements）
2. 安装 [giscus app](https://github.com/apps/giscus)，仅授权 `yohoten.github.io`
3. 在 [GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer) 执行
   `query { repository(owner:"yohoten", name:"yohoten.github.io") { discussionCategories(first:10){ nodes{ id name } } } }`
   把分类 id 填入 `_config.butterfly.yml` 的 `giscus.category_id`
4. 取消 `_config.butterfly.yml` 中 `comments:` / `giscus:` 两处注释，执行 `npx hexo clean && npx hexo generate`

## 🔍 SEO

- `robots.txt` 不再屏蔽归档/标签/分类页（这些聚合页是长尾入口，屏蔽会导致 sitemap 报
  「已提交但被 robots.txt 屏蔽」）
- `hexo-generator-sitemap` 生成 `sitemap.xml`（构建时自动生成）
- `hexo-generator-feed` 生成 `atom.xml`（构建时自动生成），并在每个页面 `<head>` 注入
  `<link rel="alternate" type="application/atom+xml">` 供阅读器 / AI 聚合器自动发现
- `source/robots.txt` 声明抓取规则与 Sitemap 地址

## ❓ 常见问题

### 为什么 `hexo` 命令只显示 help？

`package.json` 中必须有 `hexo` 标记字段（hexo-cli 靠它识别项目）：

```json
"hexo": { "version": "6.3.0" }
```

本项目已添加。

### 修改配置后不生效？

先 `npx hexo clean` 再 `npx hexo generate`。

### npm 安装很慢或卡住？

```bash
npm config set registry=https://registry.npmmirror.com
```

### Node 版本太高/太低有问题？

Hexo 6 官方建议 Node ≥ 14，推荐 LTS 版本。遇到奇怪报错可尝试 LTS（16/18/20）。

### 如何更换头像 / 横幅 / 封面？

把新图片放到 `source/images/`，再修改 `_config.butterfly.yml` 中对应的图片路径即可。图片建议直接用本地路径（`/images/xxx.svg`），不依赖外部图床更稳定。

## 🧯 部署故障排查

| 现象 | 原因 / 处理 |
| --- | --- |
| 部署后页面是旧的 | 构建缓存未清：`hexo clean` 后重新 `hexo generate` |
| 404 页背景图不显示 | `/img/404.jpg` 为主题自带资源，确认主题版本与构建正常 |
| 首页文章顺序不对 | 检查 Front Matter 的 `date`；置顶文章用 `top` |
| 作品集页面样式丢失 | 确认作品页 front matter 含 `inject.head`（加载 showcase.css），否则样式不加载 |
| 修改 `_config.butterfly.yml` 不生效 | 先 `hexo clean` 再 `hexo generate` |
| 中文链接乱码 | 中文标题 URL 会百分号编码，可后续引入 `hexo-abbrlink` / `hexo-permalink-pinyin` 生成短链 |

## 📚 相关文档

- [Hexo 官方文档](https://hexo.io/docs/)
- [Butterfly 主题文档](https://butterfly.js.org/posts/4aa8abbe/)
- 本站教程文章：《Hexo 博客使用指南：从写作到发布》

---

**Yohoten's Blog** · 记录技术 · 分享生活 · 保持热爱
