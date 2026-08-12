---
title: 作品集
date: 2025-01-05 12:00:00
type: "showcase"
---
<div class="showcase-lead">
这里是 <strong>Yohoten</strong> 的作品展示页，聚焦 <strong>数据分析 · 数据科学 · 数据可视化</strong>。
每一张卡片代表一个完整项目：从数据获取、清洗、建模到可视化呈现，过程与结论都会沉淀为一篇作品。
点击卡片中的「在线演示」可直接体验交互看板，「详情」查看完整的分析思路与实现过程。
</div>

<h2 class="showcase-title-block">技术栈</h2>

<ul class="showcase-cats">
  <li>Python</li>
  <li>Pandas</li>
  <li>Streamlit</li>
  <li>Plotly</li>
  <li>ECharts</li>
  <li>数据可视化</li>
  <li>数据分析</li>
  <li>机器学习</li>
</ul>

<h2 class="showcase-title-block">核心项目</h2>

<div class="showcase-grid">

{% note info %}
**如何新增一个作品（三步）**

1. 复制 [`source/work_showcase/示例项目/`](/work_showcase/示例项目/) 文件夹，重命名为 `source/work_showcase/项目slug/`；
2. 按子页 front matter 规范填写 `title / date / categories / tags / description`，正文使用「项目背景 → 数据与预处理 → 可视化/分析方法 → 结论与演示 → 相关链接」的统一结构；
3. 回到本页，在 `.showcase-grid` 中复制一张 `.showcase-card`，把标题、徽章（`badge-viz / badge-ml / badge-bi` 三选一）、描述、指标、技术栈和按钮（`btn-demo` 在线演示 / `btn-code` 源码与详情）改成你的项目即可。

> 有在线演示的项目优先使用渐变青色按钮 `btn-demo`；仅源码的项目使用描边按钮 `btn-code`；暂无源码的演示项目可省略源码按钮。
> {% endnote %}
