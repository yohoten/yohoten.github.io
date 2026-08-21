---
title: 台湾上市企业破产分析 · TCBA
date: 2026-08-15 12:00:00
type: "showcase"
categories:
  - 数据分析
  - 机器学习
tags:
  - Python
  - Pandas
  - numpy
  - scikit-learn
  - imbalanced-learn
  - matplotlib
  - seaborn
  - plotly
  - Streamlit
  - SHAP
  - 机器学习
description: 基于台湾上市公司财务指标数据（1999–2009 公司-年度样本）构建企业破产风险预测模型，SMOTE 处理严重类别不平衡，Logistic / 决策树 / 随机森林多方案对比 + 调参，以 Recall/F1/PR-AUC 为核心口径评估，配套 6 模块 Streamlit 财务风控决策看板。
showcase:
  demo: https://gz4sdvz2jg9h9vaqryh8qc.streamlit.app/
  repo: https://github.com/yohoten/TCBA
  site: https://yohoten.github.io/TCBA/
  tech: [Python, Pandas, numpy, scikit-learn, imbalanced-learn, matplotlib, seaborn, plotly, Streamlit, SHAP]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：基于台湾地区上市公司财务指标数据，构建<strong>企业破产风险预测模型</strong>（TCBA，Taiwan Corporate Bankruptcy Analysis）的机器学习实战案例。针对财务数据普遍存在的<strong>类别不平衡</strong>问题，采用 <strong>SMOTE 过采样</strong>与多种分类模型对比建模，并用 ROC/AUC、混淆矩阵、分类报告评估模型效果。</p>
<p><strong>核心目标</strong>：① 从 90+ 项财务指标中识别破产关键驱动因子；② 在破产样本占比极低（约 3.2%）的条件下构建高召回预警模型；③ 将分析结论沉淀为「单公司体检」式的财务风控决策看板。</p>
<p><strong>成果</strong>：11 个模型方案横向对比，以 <strong>Recall / F1 / PR-AUC</strong> 为核心口径（96.8% 多数类下 accuracy 无意义）；特征重要性互证「高负债依赖是破产首要先行信号、ROA 与现金流是保护性指标」；并配套 6 模块交互看板，支持输入财务指标实时评估破产概率。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://gz4sdvz2jg9h9vaqryh8qc.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
  <a class="btn-code" href="https://yohoten.github.io/TCBA/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目介绍页</a>
  <a class="btn-code" href="https://github.com/yohoten/TCBA" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码仓库</a>
</div>

<div class="showcase-meta-line">
  📅 2026-08-15 ｜ 分类：数据分析 / 机器学习 ｜ 标签：Python / scikit-learn / imbalanced-learn / Streamlit / SHAP
</div>

## 一、项目背景

企业破产往往有先兆可循：债务负担加重、盈利恶化、现金流紧张等财务信号会提前暴露风险。对于金融机构的授信审查、投资尽调与贷后监控，若能基于上市公司公开财务数据提前识别高风险主体，就能将风险处置从「事后补救」前移到「事前预警」。

本项目以台湾地区上市公司 1999–2009 年的公司-年度财务指标数据为对象，完成数据清洗 → 不平衡处理 → 多模型建模 → 调参 → 评估 → 解释 → 看板交付的完整机器学习链路。

## 二、数据与预处理

- **数据来源**：`data.csv`（约 11.4 MB，台湾上市公司财务指标样本）。
- **数据规模**：数百家上市公司 × 多年份形成的公司-年度记录，含 90+ 项财务指标与破产标签。
- **任务类型**：二分类（是否破产，`Bankrupt?` 0/1 标签）。
- **关键挑战**：破产样本占比仅约 **3.2%**，存在**严重类别不平衡**——直接建模会偏向多数类，须先做不平衡处理。
- **预处理要点**：恒值列（无区分度）在建模时剔除；数值特征标准化后进入模型；数据无缺失值可直接建模。

## 三、建模方法与不平衡处理

| 环节 | 方法 |
|------|------|
| 类别不平衡处理 | **SMOTE 过采样**（imblearn），并引入 class_weight 双轨验证 |
| 建模方法 | Logistic Regression、Decision Tree、Random Forest |
| 超参数调优 | RandomizedSearchCV |
| 模型评估 | train/test 划分、KFold 交叉验证、accuracy、classification_report、confusion_matrix、**ROC/AUC**、PR-AUC |
| 模型解释 | Permutation Importance + **SHAP** |
| 可视化 | matplotlib、seaborn、plotly |

> ⚠️ 数据无公司/年份标识，随机切分存在「伪独立」乐观偏差；补充 CompanyId 后应改用 GroupKFold 复核。

## 四、模型评估与关键结论

在严重类别不平衡场景下，**accuracy 无意义**（模型只需预测全为未破产即可达到 96.8%），因此统一以 **Recall / F1 / PR-AUC** 为核心决策口径：

| 决策口径 | 含义 |
|----------|------|
| Recall（召回率） | 能抓出多少比例的破产公司（漏判率 = 1 − Recall） |
| F1 | 精确率与召回率的调和平均，兼顾误报与漏报 |
| PR-AUC | 不平衡场景下比 ROC-AUC 更敏感的排序能力指标 |

### 关键结论

- **高负债依赖是破产的首要先行信号**：Borrowing Dependency、Current Liability To Assets 等负债类指标与破产正相关，应作为贷后/投资尽调的强制红灯指标。
- **盈利质量与现金造血能力决定存续**：ROA、现金流类指标排名靠前，属保护性因素。
- **业务建议**：将重要性 Top 指标组合为「财务健康评分卡」，按月滚动监控阈值变化；模型作为财务预警红灯的前置环节，触发后人工复核。
- 建议 SMOTE 与 class_weight 双轨验证后，选择漏判率更低且 F1 不显著下降的方案部署。

```python
# 不平衡处理 + 建模核心流程（摘要）
from imblearn.over_sampling import SMOTE
from sklearn.ensemble import RandomForestClassifier

sm = SMOTE(sampling_strategy="minority", random_state=42)
Xr, yr = sm.fit_resample(X, y)                     # 过采样后类别均衡

model = RandomForestClassifier(n_estimators=300, random_state=42, n_jobs=-1)
model.fit(Xr, yr)                                   # 训练演示模型
```

## 五、Streamlit 财务风控决策看板

深蓝 · 金色金融主题交互看板（`streamlit_app.py`），侧边栏导航共 6 个模块：

| 模块 | 功能 |
|------|------|
| ① 决策总览 | 核心 KPI（样本量 / 破产占比 / 推荐模型 F1·PR-AUC）、破产分布饼图、数据健康检查、战略结论速览 |
| ② 数据探索 | 数据结构与质量、数据类型分布、标识列 × 破产交叉画像、财务指标描述统计 |
| ③ 特征风险画像 | Top 16 财务指标 × 破产相关性、关键指标（负债率 / ROA / 现金流等）破产 vs 未破产箱线图对比 |
| ④ 模型对比 | 11 个方案横向对比表（Recall / F1 / PR-AUC / ROC-AUC）、按特征选择着色对比图、业务推荐 |
| ⑤ 特征重要性 | Permutation Importance 排序、Top 驱动因子战略解读、SHAP Top 特征与摘要图 |
| ⑥ 单公司体检 | 输入关键财务指标 → Random Forest + SMOTE 演示模型实时输出破产概率仪表盘与风险评级 |

```bash
# 启动 Streamlit 看板
streamlit run streamlit_app.py
# 浏览器打开 http://localhost:8501
```

## 六、技术栈与项目结构

**技术栈**：Python 3 · pandas / numpy / scikit-learn / imbalanced-learn（SMOTE）/ matplotlib / seaborn / plotly / Streamlit / SHAP / Jupyter。

| 文件 / 目录 | 说明 |
|-------------|------|
| `data.csv` | 台湾上市公司财务指标原始数据（含破产标签） |
| `基于台湾上市公司财务数据的破产分析.ipynb` | 完整分析 Notebook（EDA + 不平衡处理 + 建模 + 解释） |
| `streamlit_app.py` | 6 模块 Streamlit 财务风控决策看板 |
| `requirements.txt` | Python 依赖清单（含 `imbalanced-learn`） |
| `output/` | 模型对比、Permutation Importance、SHAP 结果 CSV 与图表 |

## 七、相关链接

- 在线演示：<https://gz4sdvz2jg9h9vaqryh8qc.streamlit.app/>
- 项目介绍页：<https://yohoten.github.io/TCBA/>
- 源码仓库：<https://github.com/yohoten/TCBA>
