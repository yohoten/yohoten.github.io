---
title: 峰流智测 · 景区客流智能预测平台
date: 2025-02-08 12:00:00
type: "showcase"
categories:
  - 机器学习
tags:
  - XGBoost
  - Streamlit
  - Plotly
  - SHAP
  - Flask
  - Power BI
description: 基于九寨沟真实官方数据的景区客流智能预测平台，XGBoost 时序预测 R²=0.9665、MAPE≈5.1%，提供未来 7 日滚动预测与三色预警运营决策。
showcase:
  demo: https://scenicflowforecast-bfyery7asaxwksfrcshvyw.streamlit.app/
  repo: https://github.com/yohoten/scenicflow_forecast
  tech: [XGBoost, Streamlit, Plotly, SHAP, Flask, Pandas, Power BI]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：以九寨沟景区真实官方数据为样板，构建从「数据采集 → 特征工程 → 机器学习预测 → 可视化看板 → 运营决策 → BI 分析」的全链路景区客流智能平台，让每一次客流高峰都「可预测、可预警、可决策」。</p>
<p><strong>数据与工具</strong>：1,869 天真实进沟人数（2019-09 ~ 2025-03），40 维特征（时间 / 节假日 / 滞后 / 滚动统计）；XGBoost 时序交叉验证 + SHAP 可解释性；Streamlit 多页看板、Flask RESTful API、Power BI 星型模型决策看板。</p>
<p><strong>成果</strong>：测试集 R²=0.9665、MAPE≈5.1%，未来 7 日滚动预测 + 90% 置信区间，承载量（41,000 人次）红/黄/绿三色预警与自动运营建议。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://scenicflowforecast-bfyery7asaxwksfrcshvyw.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>打开在线演示</a>
  <a class="btn-code" href="https://github.com/yohoten/scenicflow_forecast" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码仓库</a>
</div>

<div class="showcase-meta-line">
  📅 2025-02-08 ｜ 分类：机器学习 ｜ 标签：XGBoost / Streamlit / Plotly / SHAP / Flask / Power BI
</div>

## 一、项目背景

景区客流预测是文旅行业精细化运营的核心难题：旺季拥堵、淡季闲置、突发高峰难以应对。本项目以九寨沟景区官方公开数据为样板，用机器学习建模客流规律，把「事后复盘」升级为「事前预测」，覆盖从数据采集到运营决策的全链路。

## 二、数据与特征工程

- **数据采集**：Python 增量爬虫抓取九寨沟官网每日进沟人数，存档为 Excel/CSV。
- **样本规模**：2019-09 ~ 2025-03，共 **1,869 天**。
- **特征维度**：**40 维** —— 时间特征（年月日、周内、季度）、节假日特征（真实法定节假日）、滞后特征、滚动统计特征。
- **数据质量**：分布直方图 + KDE、Q-Q 正态检验，评估特征维度与数据质量。

```python
from sklearn.model_selection import TimeSeriesSplit
from xgboost import XGBRegressor

tscv = TimeSeriesSplit(n_splits=5)
xgb = XGBRegressor(n_estimators=1000, learning_rate=0.05)
# GridSearchCV + TimeSeriesSplit 时序交叉验证调优
```

## 三、模型与可解释性

- **多模型对比**：Linear / RandomForest / XGBoost，时序交叉验证选优。
- **最优模型**：XGBoost，测试集 **R²=0.9665、MAPE≈5.1%**（MAE=997、RMSE=1,769 人次）。
- **SHAP 可解释性**：输出特征重要性 Top N，定位客流核心驱动因子。
- **预测输出**：未来 7 日滚动预测 + 90% 置信区间。

## 四、可视化看板与运营决策

| 模块 | 说明 |
|------|------|
| 📊 运营总览 | 今日/均值/历史极值 KPI、客流趋势与 7 日预测叠加、承载上限参考线 |
| 📈 客流分析 | 年度/月度/周内/节假日客流规律、峰谷识别、同比环比 |
| 🎉 节假日分析 | 真实节假日 × 客流交叉分析、节前节后效应 |
| 🤖 智能预测 | 7 日预测、90% 置信区间、R²/MAE/RMSE/MAPE、特征重要性 |
| 🚨 运营决策 | 7 日预警日历、风险分布、自动生成人员/物资/票务建议 |
| 🔌 RESTful API | Flask 提供预测、历史、特征重要性、决策建议接口 |

**三色预警机制**（承载上限 41,000 人次/日）：

- 🟢 **正常**：客流 ≤ 70% 承载量
- 🟡 **预警**：70% ~ 90%，建议提前疏导
- 🔴 **高负荷**：> 90%，建议启动限流预案

## 五、成果与价值

- 模型精度领先：R²=0.9665、MAPE=5.1%，具备实用价值。
- 端到端闭环：数据 → 特征 → 模型 → 看板 → 决策 → API，全链路可复用。
- 可扩展：未来可泛化到多景区，接入实时客流监测与自动预警推送。

## 六、相关链接

- 在线演示：<https://scenicflowforecast-bfyery7asaxwksfrcshvyw.streamlit.app/>
- 源码仓库：<https://github.com/yohoten/scenicflow_forecast>
