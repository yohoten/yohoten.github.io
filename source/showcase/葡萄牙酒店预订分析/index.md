---
title: Portugal Hotel Booking Analysis · 葡萄牙酒店预订分析与取消预测
date: 2026-08-14 12:00:00
type: "showcase"
categories:
  - 数据分析
  - 机器学习
tags:
  - Python
  - Pandas
  - numpy
  - scikit-learn
  - matplotlib
  - seaborn
  - plotly
  - XGBoost
  - Streamlit
  - 机器学习
description: 基于 Hotel Booking Demand 公开数据集（119,390 条原始记录，2015–2017 年葡萄牙两类酒店），完整走通数据清洗 → EDA → 特征工程 → 机器学习建模 → 模型解释 → 可视化交付全链路，增强随机森林取消预测准确率达 86.81%，并配套 Streamlit 数据大屏。
showcase:
  demo: https://portugal-hotel-booking-analysis-mghtrt2nhkzqbv7u5qlshv.streamlit.app/
  repo: https://github.com/yohoten/portugal-hotel-booking-analysis
  site: https://yohoten.github.io/portugal-hotel-booking-analysis
  tech: [Python, Pandas, numpy, scikit-learn, matplotlib, seaborn, plotly, XGBoost, Streamlit]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：基于公开数据集 <strong>Hotel Booking Demand</strong>（119,390 条原始记录，覆盖 2015–2017 年葡萄牙 <strong>City Hotel</strong> 与 <strong>Resort Hotel</strong> 两类酒店），完整走通<strong>数据清洗 → 探索性分析（EDA）→ 特征工程 → 机器学习建模 → 模型解释 → 可视化交付</strong>的数据分析标准链路。</p>
<p><strong>核心目标</strong>：① 洞察客源结构、价格规律与预订取消模式；② 构建高精度取消预测模型，为酒店运营（客房规划、餐饮备货等）提供决策支持。</p>
<p><strong>成果</strong>：清洗后 119,210 条有效预订、取消率 37.1%；四模型 4 折交叉验证中，调参后的<strong>增强随机森林</strong>以 86.81% 准确率夺冠；并配套一套深色科技风 Streamlit 数据大屏，支持交互式探索与单条预订取消概率预测。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://portugal-hotel-booking-analysis-mghtrt2nhkzqbv7u5qlshv.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
  <a class="btn-code" href="https://yohoten.github.io/portugal-hotel-booking-analysis" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目介绍页</a>
  <a class="btn-code" href="https://github.com/yohoten/portugal-hotel-booking-analysis" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码仓库</a>
</div>

<div class="showcase-meta-line">
  📅 2026-08-14 ｜ 分类：数据分析 / 机器学习 ｜ 标签：Python / scikit-learn / XGBoost / plotly / Streamlit
</div>

## 一、项目背景

酒店经营者为了提高客房出租率，常提前将客房预订一空，但顾客预订后可能因各种原因取消，给酒店带来未来出租的不确定性。本项目基于葡萄牙两家酒店（H1 阿尔加维度假区 Resort Hotel、H2 里斯本市中心 City Hotel，相距约 280 公里）在 2015-07-01 ~ 2017-08-31 期间的预订数据，完成数据分析与取消预测，帮助酒店提前预判哪些订单可能「爽约」。

## 二、数据与预处理

- **数据来源**：Kaggle「Hotel Booking Demand」公开数据集（119,390 条原始记录，32 个字段，含分类与数值特征）。
- **数据规模**：清洗后 119,210 条有效预订，总体取消率 37.1%。
- **EDA 关注问题**：客人来自哪里？每晚房费多少？一年中价格如何变化？哪个月最忙？住多久？按市场细分的预订情况？取消集中在哪几个月？

## 三、分析链路与模型

| 步骤 | 内容 |
|------|------|
| 数据清洗 | 缺失值处理、异常值过滤、类别编码 |
| EDA | 客源国分布、房价（房型 / 月度 / 渠道）、入住时长、月度客流、取消率、相关性分析 |
| 特征工程 | 分类特征 One-Hot / Label 编码、数值特征标准化 |
| 建模评估 | 4 折交叉验证，比较四类模型准确率 |
| 模型解释 | 特征重要性排序，识别影响取消的关键因素 |
| 可视化交付 | Streamlit 数据大屏 + 单条预订取消概率预测 |

### 模型表现（4 折交叉验证准确率）

| 模型 | 准确率 | 说明 |
|------|--------|------|
| 决策树 Decision Tree | 82.46% | 基线模型，可解释性强 |
| 随机森林 Random Forest | 86.64% | 集成提升，默认参数 |
| 逻辑回归 Logistic Regression | 79.37% | 线性基线（StandardScaler 缩放） |
| **增强随机森林 Enhanced RF ★** | **86.81%** | 调参后最佳（n_estimators=160, max_features=0.4） |

```python
# 建模评估核心流程（摘要）
models = {
    "DecisionTree": DecisionTreeClassifier(),
    "RandomForest": RandomForestClassifier(),
    "LogisticRegression": LogisticRegression(),
    "EnhancedRF": RandomForestClassifier(n_estimators=160, max_features=0.4),
}
for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=4, scoring="accuracy")
    print(name, round(scores.mean() * 100, 2))
```

## 四、Streamlit 数据大屏

深色科技风交互看板，包含三大功能模块：

| 模块 | 功能 |
|------|------|
| 📊 数据概览 | KPI 大屏卡（总预订量 / 取消数 / 提前天数 / 均价）、两类酒店预订量对比、预订渠道占比、缺失值检查与数据预览 |
| 🔍 探索性分析 | 客源国分布（饼图 + 世界地图）、房价分析（房型 / 月度趋势 / 渠道×房型）、入住时长、月度客流、取消率、相关性 Top10 |
| 🤖 取消预测 | 混淆矩阵、特征重要性，单条预订取消概率预测（仪表盘 + 风险等级） |

```bash
# 启动 Streamlit 数据大屏
streamlit run streamlit_app.py
# 浏览器打开 http://localhost:8501
```

## 五、技术栈与项目结构

**技术栈**：Python 3 · pandas / numpy / matplotlib / seaborn / plotly / xgboost / scikit-learn / Streamlit / Jupyter。

| 文件 / 目录 | 说明 |
|-------------|------|
| `hotel_bookings.csv` | 酒店预订数据（119,390 条原始） |
| `酒店预订分析预测.ipynb` | 完整分析 Notebook（EDA + 建模） |
| `streamlit_app.py` | Streamlit 数据大屏 |
| `requirements.txt` | Python 依赖 |
| `index.html` | 项目介绍页 |

## 六、相关链接

- 在线演示：<https://portugal-hotel-booking-analysis-mghtrt2nhkzqbv7u5qlshv.streamlit.app/>
- 项目介绍页：<https://yohoten.github.io/portugal-hotel-booking-analysis>
- 源码仓库：<https://github.com/yohoten/portugal-hotel-booking-analysis>
- 数据来源：<https://www.kaggle.com/datasets/jessemostipak/hotel-booking-demand>
