---
title: 新能源（太阳能）发电探索性分析及预测 · Solar Power Generation
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
  - Streamlit
  - 机器学习
description: 基于印度两座太阳能电站发电与气象传感器数据（136,472 条合并记录，2018-05 ~ 11），完整走通数据读取 → EDA → 相关性分析 → 发电功率预测 → 可视化交付全链路，GBM 发电功率预测 R² 最高 0.97，并配套 Streamlit 数据大屏。
showcase:
  demo: https://solar-energy-eda-prediction-jpb7yet2fu5braxhvsf5kt.streamlit.app/
  repo: https://github.com/yohoten/solar-energy-eda-prediction
  site: https://yohoten.github.io/solar-energy-eda-prediction/
  tech: [Python, Pandas, numpy, scikit-learn, matplotlib, seaborn, plotly, Streamlit]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：基于印度两座太阳能电站的<strong>发电数据</strong>（DC/AC 功率、日发电量）与<strong>气象传感器数据</strong>（环境温度、组件温度、辐照度），完整走通<strong>数据读取 → 探索性分析（EDA）→ 相关性分析 → 机器学习预测 → 可视化交付</strong>的数据分析标准链路。</p>
<p><strong>核心目标</strong>：① 探究辐照度、温度与发电功率之间的规律；② 构建发电功率预测模型，辅助光伏电站运营与调度；③ 通过数据大屏直观呈现两站运行状态。</p>
<p><strong>成果</strong>：识别出<strong>辐照度（IRRADIATION）是影响发电功率的决定性特征</strong>；Plant 1 逆变器出力稳定（σ=10.07 kW）、线性回归 R²=0.911、GBM 预测 R² 达 <strong>0.97</strong>；Plant 2 出力波动大（σ=32.00 kW），去除 DC 功率离群点后 GBM R² 由 0.61 提升至 0.782，并配套 Streamlit 数据大屏。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://solar-energy-eda-prediction-jpb7yet2fu5braxhvsf5kt.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
  <a class="btn-code" href="https://yohoten.github.io/solar-energy-eda-prediction/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目介绍页</a>
  <a class="btn-code" href="https://github.com/yohoten/solar-energy-eda-prediction" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码仓库</a>
</div>

<div class="showcase-meta-line">
  📅 2026-08-14 ｜ 分类：数据分析 / 机器学习 ｜ 标签：Python / scikit-learn / plotly / Streamlit
</div>

## 一、项目背景

太阳能发电受天气（辐照度、温度）影响具有明显的波动性，如何基于历史发电与气象数据预测未来发电功率，对光伏电站的运营与电网调度至关重要。本项目以印度两座太阳能电站（Plant 1 / Plant 2，每站 22 台逆变器）的发电与气象传感器数据为对象，完成探索性分析、相关性分析与发电功率预测建模。

## 二、数据与预处理

- **数据来源**：Kaggle「Solar Power Generation Data」公开数据集（印度两座太阳能电站）。
- **数据规模**：两站发电数据与气象传感器数据合并后共 **136,472** 条记录，时间跨度 2018-05 ~ 11。
- **数据字段**：DC 功率、AC 功率、日发电量、环境温度、组件温度、辐照度等。

## 三、分析流程与关键结论

| 步骤 | 内容 |
|------|------|
| 数据读取与合并 | 两站发电数据 + 气象数据按时间对齐合并 |
| EDA | 辐照度随时间分布（按日期 / 按时刻）、温度-功率与辐照-功率散点、逆变器平均出力对比 |
| 相关性分析 | 温度 / 辐照度与发电功率的相关性热力图 |
| 建模预测 | 线性回归 / 梯度提升（GBM），时间序列切分训练测试，R² / MSE 评估 |
| 模型解释 | 真实 vs 预测曲线、特征重要性 |

### 关键结论

| 指标 | Plant 1 | Plant 2 |
|------|---------|---------|
| 逆变器平均出力稳定性 | 稳定（σ=10.07 kW） | 不稳定（σ=32.00 kW） |
| 线性回归 R²（模块温度→DC） | 0.911 | 0.562 |
| GBM 预测 R²（默认参数） | **0.97** | 0.61 |
| GBM 预测 R²（去除离群点后） | — | **0.782** |

> 💡 辐照度（IRRADIATION）是影响发电功率的决定性特征；Plant 2 逆变器出力波动明显大于 Plant 1，去除 DC 功率离群点后可显著提升模型表现。

```python
# 发电功率预测核心流程（摘要）
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.linear_model import LinearRegression

# 时间序列切分：前 80% 训练，后 20% 测试
model = GradientBoostingRegressor()
model.fit(X_train, y_train)
r2 = model.score(X_test, y_test)  # Plant 1 → 0.97
```

## 四、Streamlit 数据大屏

深色科技风交互看板，包含三大功能模块：

| 模块 | 功能 |
|------|------|
| 📊 数据概览 | KPI 大屏卡（电站 / 逆变器 / 记录数 / 平均功率）、DC/AC 功率时间序列、日均发电量对比、合并数据预览 |
| 🔍 探索性分析 | 辐照度随时间分布（按日期 / 按时刻）、温度-功率与辐照-功率散点、逆变器平均出力对比、相关性热力图 |
| ⚡ 发电预测 | 线性回归 / 梯度提升（GBM）模型，R² / MSE 评估、真实 vs 预测曲线、特征重要性 |

```bash
# 启动 Streamlit 数据大屏
streamlit run streamlit_app.py
# 浏览器打开 http://localhost:8501
```

## 五、技术栈与项目结构

**技术栈**：Python 3 · pandas / numpy / matplotlib / seaborn / plotly / scikit-learn / Streamlit / Jupyter。

| 文件 / 目录 | 说明 |
|-------------|------|
| `Plant_1_Generation_Data.csv` | 1 号电站发电数据 |
| `Plant_1_Weather_Sensor_Data.csv` | 1 号电站气象数据 |
| `Plant_2_Generation_Data.csv` | 2 号电站发电数据 |
| `Plant_2_Weather_Sensor_Data.csv` | 2 号电站气象数据 |
| `印度新能源（太阳能）发电探索性分析与预测.ipynb` | 完整分析 Notebook（EDA + 预测） |
| `streamlit_app.py` | Streamlit 数据大屏 |
| `index.html` | 项目介绍页 |

## 六、相关链接

- 在线演示：<https://solar-energy-eda-prediction-jpb7yet2fu5braxhvsf5kt.streamlit.app/>
- 项目介绍页：<https://yohoten.github.io/solar-energy-eda-prediction/>
- 源码仓库：<https://github.com/yohoten/solar-energy-eda-prediction>
- 数据来源：<https://www.kaggle.com/datasets/anannayam/solar-power-generation-data>
