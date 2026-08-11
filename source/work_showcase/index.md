---
title: 作品集
date: 2025-01-05 12:00:00
type: "showcase"
---

<div class="showcase-lead">
这里是 <strong>Yohoten</strong> 的作品展示页，聚焦 <strong>数据分析 · 数据科学 · 数据可视化</strong>。
每一张卡片代表一个完整项目，从数据获取、清洗、建模到可视化呈现的完整过程都会沉淀为一篇作品。
点击卡片可查看项目详情、过程与结论；「源码 / 演示」链接在卡片右下角。
</div>

<ul class="showcase-cats">
  <li>数据分析</li>
  <li>数据科学</li>
  <li>数据可视化</li>
  <li>机器学习</li>
  <li>Python</li>
</ul>

## 作品

<div class="showcase-grid">
  <a class="showcase-card" href="/work_showcase/示例项目/">
    <div class="showcase-cover"><img src="/images/showcase/cover-sample.svg" alt="示例项目封面"></div>
    <div class="showcase-body">
      <div class="showcase-title">示例：电商用户行为分析</div>
      <div class="showcase-desc">一句话描述项目：用 pandas 清洗 10 万条订单数据，分析用户分层与复购率，并用 ECharts 产出可视化看板。</div>
      <div class="showcase-meta">
        <span class="showcase-tag">Python</span>
        <span class="showcase-tag">pandas</span>
        <span class="showcase-tag">ECharts</span>
        <span class="showcase-tag">数据分析</span>
      </div>
      <div class="showcase-links">
        <a href="https://github.com/yohoten" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码</a>
        <a href="https://example.com/demo" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>演示</a>
      </div>
    </div>
  </a>

  <div class="showcase-card showcase-placeholder">
    ＋ 添加你的第一个作品<br>（复制上方示例卡片替换即可）
  </div>
</div>

{% note info %}
**如何新增一个作品（三步）**

1. 复制 [`source/work_showcase/示例项目/`](/work_showcase/示例项目/) 文件夹，重命名为 `source/work_showcase/项目slug/`；
2. 按子页 front matter 规范填写 `title / date / categories / tags / cover / description`，正文使用「背景 → 数据与预处理 → 分析方法 → 可视化与结论 → 相关链接」的统一结构；
3. 回到本页，在 `.showcase-grid` 中复制一张 `.showcase-card`，把 `href`、封面、标题、描述、标签和链接改成你的项目即可。

> 封面图统一放在 `source/images/showcase/`，建议 960×540（16:9）。未设置封面时卡片会自动显示紫色渐变占位图。
{% endnote %}
