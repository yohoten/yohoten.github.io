---
title: 在线食品数据分析 · 可视化看板
date: 2025-02-09 12:00:00
type: "showcase"
inject:
  head:
    - <link rel="stylesheet" href="/css/showcase.css">
categories:
  - 数据分析
tags:
  - Streamlit
  - Plotly
  - Pandas
  - scikit-learn
  - Python
description: 基于 388 条在线食品用户消费记录的商务数据分析，通过 Streamlit + Plotly 构建可交互看板，覆盖用户画像、教育与收入、职业分析及收入预测模型。
showcase:
  demo: https://onlinefoodsanalyze-n5pzeqkftq5y9adncw6s7b.streamlit.app/
  repo: https://github.com/yohoten/onlinefoods_analyze
  tech: [Streamlit, Plotly, Pandas, scikit-learn, Python]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：基于 `onlinefoods.csv`（388 条在线食品用户消费记录）的完整商务数据分析项目，通过 Streamlit + Plotly 构建可交互可视化看板，覆盖用户画像、教育收入、职业分析与收入预测，帮助理解在线食品消费用户特征。</p>
<p><strong>数据与工具</strong>：388 条用户记录（年龄 / 性别 / 婚姻 / 职业 / 月收入 / 教育 / 家庭人口 / 反馈等字段）；Streamlit 看板 + Plotly 交互图表 + Pandas 数据处理 + scikit-learn 线性回归 + scipy 方差分析。</p>
<p><strong>成果</strong>：5 个 KPI 指标卡 + 多维联动筛选 + 5 个分析标签页，一键式可交互看板；核心结论：用户年轻化（平均 24.6 岁）、以学生为主（62.4%），不同职业收入差异显著（ANOVA p<0.05）。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://onlinefoodsanalyze-n5pzeqkftq5y9adncw6s7b.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>打开在线演示</a>
  <a class="btn-code" href="https://github.com/yohoten/onlinefoods_analyze" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码仓库</a>
</div>

<div class="showcase-meta-line">
  📅 2025-02-09 ｜ 分类：数据分析 ｜ 标签：Streamlit / Plotly / Pandas / scikit-learn
</div>

## 一、项目背景

在线食品配送已成为日常生活中高频场景。本项目以 388 条在线食品用户消费记录为样本，用一套完整的商务数据分析流程回答：**谁在使用在线食品配送？不同人群的收入、教育与消费行为有何差异？能否用收入预测模型辅助理解用户？**

## 二、数据与预处理

- **数据来源**：`onlinefoods.csv`，388 条记录，含年龄、性别、婚姻状况、职业、月收入、教育程度、家庭人口、经纬度、邮编、是否使用配送、反馈等字段。
- **收入量化**：将月收入区间映射为区间中点（`No Income`=0、`Below Rs.10000`=5000、`10001 to 25000`=17500、`25001 to 50000`=37500、`More than 50000`=60000）便于数值分析。
- **检查项**：描述性统计、缺失值检查、分类变量分布。

## 三、看板功能（Streamlit + Plotly）

页面顶部 5 个 **KPI 指标卡**（样本数、平均年龄、平均家庭人口、平均月收入、满意度），侧边栏**多维联动筛选**（性别 / 婚姻状况 / 职业 / 教育程度 / 年龄范围），按 ipynb 分析任务组织为 5 个标签页：

| 标签页 | 分析内容 |
|--------|----------|
| 📊 数据概览 | 原始数据表、描述性统计、缺失值检查、分类变量分布 |
| 👤 用户画像分析 | 年龄分布直方图 & 箱线图、性别饼图、婚姻状况、家庭人口 |
| 🎓 教育与收入分析 | 教育/收入分布、教育×收入热力图、平均收入、相关性分析 |
| 💼 职业与收入分析 | 职业分布、各职业平均收入、职业×收入热力图、ANOVA |
| 📈 收入预测模型 | 线性回归指标、模型诊断图、特征重要性、交互式收入预测表单 |

```python
import streamlit as st
import pandas as pd
from sklearn.linear_model import LinearRegression

df = pd.read_csv("onlinefoods.csv")
# 月收入区间映射为区间中点后建模
model = LinearRegression().fit(X_train, y_train)
# 侧边栏输入特征 → 交互式收入预测
```

## 四、核心分析结论

- **用户年轻化**：平均年龄约 24.6 岁，以学生为主（62.4%）。
- **性别分布**：男性 222 人（57.2%），女性 166 人（42.8%）。
- **婚姻状况**：单身 268 人（69.1%），已婚 108 人（27.8%）。
- **教育分布**：以 Graduate / Post Graduate 为主（合计超 90%），约 48% 用户无收入来源。
- **职业收入差异显著**：ANOVA p < 0.05，Employee 平均收入最高，House wife 最低。
- **模型定位**：线性回归解释力有限，结果仅供学习演示参考。

## 五、相关链接

- 在线演示：<https://onlinefoodsanalyze-n5pzeqkftq5y9adncw6s7b.streamlit.app/>
- 源码仓库：<https://github.com/yohoten/onlinefoods_analyze>
