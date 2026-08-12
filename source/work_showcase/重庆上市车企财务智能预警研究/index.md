---
title: 重庆上市车企财务智能预警研究
date: 2025-02-08 12:00:00
type: "showcase"
categories:
  - 数据可视化
tags:
  - Streamlit
  - Plotly
  - Pandas
  - Python
description: 基于 Streamlit + Plotly + Pandas 的交互式数据分析看板，支持多维度筛选与联动图表。
showcase:
  demo: https://ijsywabw6q8r4sn7y66mka.streamlit.app/
  tech: [Streamlit, Plotly, Pandas, Python]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：一个开箱即用的重庆上市车企财务智能预警研究，将数据清洗、统计分析与可视化看板整合到同一个 Web 应用中，无需安装任何环境即可在浏览器中完成数据洞察。</p>
<p><strong>数据与工具</strong>：Pandas 负责数据读取与聚合计算，Plotly 生成可交互图表（悬停、缩放、联动筛选），Streamlit 搭建界面并发布到 Streamlit Cloud。</p>
<p><strong>成果</strong>：把「分析脚本」升级为「人人可用的交互看板」，支持按时间、类别等多维度下钻，快速定位数据规律与异常。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://ijsywabw6q8r4sn7y66mka.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>打开在线演示</a>
</div>

<div class="showcase-meta-line">
  📅 2025-02-08 ｜ 分类：数据可视化 ｜ 标签：Streamlit / Plotly / Pandas
</div>

## 一、项目背景

数据分析结果的呈现方式决定了它能多大程度被理解与复用。传统 Jupyter 脚本输出的静态图表，查看者无法交互，也很难在没有 Python 环境的同事或朋友之间传播。本项目用一个轻量 Web 应用解决这一痛点：**让数据说话、让图表可交互、让分析可传播**。

## 二、数据与预处理

- **数据读取**：通过 Pandas 统一读取与清洗，处理缺失值、类型转换与去重。
- **聚合计算**：按维度（时间 / 类别 / 地区等）分组聚合，产出关键指标（总量、均值、占比、环比）。
- **缓存优化**：借助 Streamlit 的 `st.cache_data` 缓存数据加载与计算，保证看板响应流畅。

```python
import streamlit as st
import pandas as pd

@st.cache_data
def load_data():
    df = pd.read_csv("data.csv")
    df["date"] = pd.to_datetime(df["date"])
    return df

df = load_data()
```

## 三、可视化与交互设计

- **指标总览**：顶部展示核心 KPI 卡片，一眼掌握总量与关键趋势。
- **联动筛选**：侧边栏的筛选控件（时间范围、类别、分组）与所有图表全局联动。
- **交互图表**：基于 Plotly 实现悬停详情、框选缩放、图例开关，支持多维度下钻分析。

## 四、成果与价值

- 零安装：任何人通过浏览器即可访问，无需配置 Python 环境。
- 可交互：从「静态结论」走向「自助探索」，降低数据消费门槛。
- 可复用：同一套框架可快速替换数据源，套用到其他数据集。

## 五、相关链接

- 在线演示：<https://ijsywabw6q8r4sn7y66mka.streamlit.app/>
