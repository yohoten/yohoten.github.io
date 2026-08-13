---
title: Olist 电商多模态智能分析（OMMA）
date: 2025-02-09 12:00:00
type: "showcase"
categories:
  - 数据分析
  - 机器学习
tags:
  - Python
  - Pandas
  - Plotly
  - Streamlit
  - XGBoost
  - LSTM
  - RFM
  - BTYD
  - 情感分析
description: 基于巴西 Olist 10 万笔订单的多模态数据分析，覆盖地理空间、文本情感、评分预测、客户价值细分、生命周期价值预测与流失分析七大维度。
showcase:
  demo: https://lbqzltiv9cqooawtaww9pg.streamlit.app/
  repo: https://github.com/yohoten/omma
  tech: [Python, Pandas, Plotly, Streamlit, XGBoost, LSTM, RFM, BTYD]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：基于巴西电商平台 Olist 公开数据集的多模态智能分析，融合 <strong>表格数据（订单/支付/商品）、文本数据（评论）、地理空间数据（邮编/经纬度）与时间序列（订单趋势）</strong>四类异构数据，覆盖数据探索、地理空间、文本情感、评分预测、客户价值细分、生命周期价值预测与客户流失七大分析维度。</p>
<p><strong>数据与工具</strong>：2016–2018 年约 10 万笔订单（Kaggle Olist 公开数据集，8 张关联表），结合巴西 GDP 与州界 GeoJSON；工具含 pandas / Plotly / folium / scikit-learn / XGBoost / LightGBM / LSTM（TensorFlow）/ lifetimes（BTYD）/ NLTK。</p>
<p><strong>成果</strong>：RFM + K-Means 客户价值细分、BTYD 生命周期价值（CLV）预测、LSTM 评分预测、葡语评论情感分析，并配套 6 模块 Streamlit 交互看板。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://lbqzltiv9cqooawtaww9pg.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>打开在线演示</a>
  <a class="btn-code" href="https://github.com/yohoten/omma" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码仓库</a>
</div>

<div class="showcase-meta-line">
  📅 2025-02-09 ｜ 分类：数据分析 / 机器学习 ｜ 标签：Python / Plotly / Streamlit / XGBoost / LSTM / RFM / BTYD
</div>

## 一、项目背景

Olist 是巴西的新兴电商平台，为中小商家提供在线销售与运营服务。本项目以其 2016–2018 年约 10 万笔订单的公开数据为对象，围绕**用户消费行为、客户价值与运营优化**展开全链路分析，从地理、文本、时序、客户价值等多个模态挖掘可落地的运营洞察。

## 二、数据与预处理

- **数据来源**：Kaggle「Brazilian E-Commerce Public Dataset by Olist」，含客户、卖家、商品、订单、支付、评论、地理定位 8 张关联表（`order_id / customer_id / product_id / seller_id` 关联）。
- **外部数据**：巴西 GDP 区域经济数据（IBGE）、州界 GeoJSON（choropleth 分级统计地图）。
- **数据规模**：约 10 万笔订单、97 万条订单明细、9.9 万条评论。
- **处理要点**：缺失值/异常值处理、CEP 邮编前缀经纬度匹配、时间字段解析、文本葡语停用词清洗。

## 三、分析模块与方法

| # | 模块 | 核心内容 | 关键方法 |
|---|------|----------|----------|
| 1 | 基础数据探索 | 数据集概览、各州/城市客户分布、关系图、choropleth 地图 | MySQL 查询、Plotly、GeoJSON |
| 2 | 地理空间分析 | CEP 邮编体系、订单/收入/运费/配送时效的地域分布 | Holoviews、Datashader、folium |
| 3 | 反馈评分预测 | 基于评论文本预测评分（好评/差评） | TF-IDF、朴素贝叶斯、SVM、RF、XGBoost、**LSTM** |
| 4 | 客户价值细分 | RFM 分群、客户留存、价值矩阵 | **RFM**、**K-Means** 聚类 |
| 5 | 生命周期价值预测 | CLV 预测、存活概率、未来交易预测 | **BTYD：MBG/NBD + Gamma-Gamma** |
| 6 | 评论情感分析 | 葡语评论情感、词云、正负面分布 | NLTK、WordCloud、分类模型 |
| 7 | 客户流失率 | 客户分层流失率、资源分配、预算优化建议 | 分层分析、双轴可视化 |

```python
from lifetimes import BetaGeoFitter, GammaGammaFitter

bgf = BetaGeoFitter(penalizer_coef=0.001).fit(
    frequency, recency, T, n_jobs=-1
)
ggf = GammaGammaFitter(penalizer_coef=0.001).fit(
    frequency, monetary_value
)
# 预测未来交易次数与客户生命周期价值（CLV）
```

## 四、可视化看板（Streamlit）

6 模块一键式交互看板：

| 模块 | 功能 |
|------|------|
| 📊 总览 | 核心 KPI、月度订单/销售趋势、订单状态分布 |
| 🗺️ 地理分析 | 巴西各州客户/订单/销售额/评分/时效 choropleth 地图 |
| 📦 商品分析 | 热销品类、品类销售额占比、价格与运费分布 |
| 💳 支付分析 | 支付方式占比、金额、信用卡分期分布 |
| ⭐ 评分与评论 | 评分分布、评分随配送时效变化、各州平均评分 |
| 👤 客户价值 | RFM 用户分群（重要/一般价值等 8 类）与人均金额 |

> 首次加载约 20~40 秒，之后自动缓存，切换页面即时响应。

## 五、核心发现

1. **地域高度集中**：消费用户主要分布在东南部沿海，圣保罗州占比约 42%；北部/东北部运费更高、配送更慢、评分更低。
2. **二八法则显著**：约 17% 的头部大额用户贡献了 50% 的消费金额。
3. **低频小额消费**：97% 的用户仅消费一次，2017 年度复购率约 2.78%，用户生命周期短。
4. **订单右长尾**：90% 的订单金额低于 300 雷亚尔，90% 仅购买 1 件商品。
5. **评分两极分化**：约 58.86% 用户评 5 分，但评分 ≤ 3 分占比 21.44%。
6. **物流是瓶颈**：平均收货约 12.5 天，北部/东北部时效与运费问题突出。

## 六、工程化与建议

- **工程化改进**：MySQL 连接与路径统一收敛到 `config.py` + `.env`，依赖清单固定版本，数据目录规范化为 `data/README.md`。
- **后续增强**：引入 Prophet/ARIMA/LSTM 销售时序预测、情感升级为 1–5 分多分类、地理分析深化为仓储选址/物流优化。

## 七、相关链接

- 在线演示：<https://lbqzltiv9cqooawtaww9pg.streamlit.app/>
- 源码仓库：<https://github.com/yohoten/omma>
- 数据来源：<https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce>
