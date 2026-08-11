---
title: Hexo 博客使用指南：从写作到发布
date: 2025-01-03 12:00:00
tags:
  - 教程
  - Hexo
categories:
  - 技术教程
description: 建好博客只是开始，本文分享 Hexo 的日常写作、本地预览与一键部署的完整流程。
cover: /images/cover2.svg
---

## 前言

建好博客之后，怎么高效地写文章、预览、并发布到线上，是每个博主最关心的日常操作。本文基于本博客（Hexo + Butterfly）整理了一份完整的使用指南。

## 一、写作

### 1. 新建文章

在博客根目录执行：

```bash
hexo new 文章标题
```

执行后会在 `source/_posts/` 目录下生成一个 Markdown 文件，并自动带上模板（Front Matter）。

### 2. 认识 Front Matter

文章开头的 `---` 之间就是 Front Matter，用于声明文章的元信息：

```yaml
---
title: 文章标题
date: 2025-01-03 12:00:00
tags:
  - Hexo
categories:
  - 技术教程
description: 文章摘要，会显示在首页卡片上
cover: /images/cover2.svg
---
```

常用字段说明：

| 字段 | 作用 |
| --- | --- |
| `title` | 文章标题 |
| `date` | 发布时间 |
| `tags` | 标签，可多个 |
| `categories` | 分类（多个分类会形成层级） |
| `description` | 首页摘要，优先于正文截取显示 |
| `cover` | 文章封面图 |
| `top` | 置顶，数值越大越靠前 |
| `comments` | 是否开启评论（true/false） |

### 3. 使用 Markdown 写作

正文使用标准 Markdown 语法即可，代码块可以指定语言获得高亮：

````markdown
```javascript
const greeting = 'Hello, Yohoten!'
console.log(greeting)
```
````

## 二、本地预览

```bash
hexo clean # 清除缓存
hexo server # 启动本地服务，默认 http://localhost:4000
```

浏览器打开 `http://localhost:4000` 即可实时预览，修改文章后刷新即可看到效果。

## 三、生成静态文件

```bash
hexo generate # 生成静态文件到 public 目录
```

生成后可以本地 `hexo server` 预览，也可以把 `public/` 目录部署到任意静态托管平台。

## 四、一键部署到 GitHub Pages

本博客已配置好 `hexo-deployer-git` 插件，只需：

1. 在 GitHub 上创建仓库 `你的用户名.github.io`
2. 修改根目录 `_config.yml` 中的 `deploy.repo` 为你自己的仓库地址
3. 执行：

```bash
hexo clean && hexo generate && hexo deploy
```

稍等片刻，访问 `https://你的用户名.github.io` 即可看到线上博客。

> 提示：Windows 的 cmd 不支持 `&&` 链式命令，请分步执行：
> ```bash
> hexo clean
> hexo generate
> hexo deploy
> ```

## 五、常用命令速查

| 命令 | 说明 |
| --- | --- |
| `hexo new 标题` | 新建文章 |
| `hexo new page 名称` | 新建页面（如 tags/categories） |
| `hexo clean` | 清除缓存 |
| `hexo generate` / `hexo g` | 生成静态文件 |
| `hexo server` / `hexo s` | 本地预览 |
| `hexo deploy` / `hexo d` | 部署上线 |

## 六、常见问题

- **修改主题配置不生效**：运行 `hexo clean` 后再 `hexo server`。
- **图片放在哪里**：放在 `source/images/` 目录，Markdown 中写 `/images/xxx.png`。
- **文章排序不对**：检查 Front Matter 中的 `date` 是否写错。

祝大家写作愉快！
