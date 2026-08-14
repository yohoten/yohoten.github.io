---
title: 上海房价影响因素挖掘 · Shanghai Housing Prices Exploration
date: 2026-08-14 12:00:00
type: "showcase"
categories:
  - 数据分析
  - 数据可视化
tags:
  - Python
  - Pandas
  - numpy
  - matplotlib
  - Streamlit
  - QGIS
  - 空间分析
  - 数据可视化
description: 基于链家上海租房（约 41 万条）与售房（约 32 万条）公开数据，从小区粒度构建每平米月租金、每平米房价与售租比三大核心指标，结合空间分布与 Streamlit 交互看板挖掘影响房价的关键因素。
showcase:
  demo: https://shanghai-housing-prices-exploration-uzopema9tnjcpgei86d2wp.streamlit.app/
  repo: https://github.com/yohoten/Shanghai-Housing-Prices-Exploration
  site: https://yohoten.github.io/Shanghai-Housing-Prices-Exploration/
  tech: [Python, Pandas, numpy, matplotlib, Streamlit, QGIS]
---

<div class="showcase-detail">
<p><strong>项目简介</strong>：以链家公开的上海租房数据（<code>house_rent.csv</code>，约 41 万条）与售房数据（<code>house_sell.csv</code>，约 32 万条）为数据源，围绕「影响房价的因素是什么」这一问题，在数据清洗与小区聚合的基础上构建<strong>每平米月租金、每平米房价、售租比</strong>三大可比指标，通过直方图、箱线图与 QGIS 空间可视化，观察价格在上海市域范围内的分布规律。</p>
<p><strong>数据与工具</strong>：2018 年链家上海租房/售房公开数据快照（GBK 编码原始 CSV），字段含标题、小区、行政区、价格、面积、经纬度等；Python 3 · pandas / numpy / matplotlib / streamlit，空间分析辅助 QGIS（行政区划、道路、人口等 shapefile）。</p>
<p><strong>成果</strong>：构建小区粒度的三大标准化指标与售租比分析框架，输出房价/租金/售租比三张空间分布图，并配套 Streamlit 交互式看板（数据概览 / 小区指标 / 分布分析 / 空间地图）。</p>
</div>

<div class="showcase-btn-row">
  <a class="btn-demo" href="https://shanghai-housing-prices-exploration-uzopema9tnjcpgei86d2wp.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
  <a class="btn-code" href="https://yohoten.github.io/Shanghai-Housing-Prices-Exploration/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目介绍页</a>
  <a class="btn-code" href="https://github.com/yohoten/Shanghai-Housing-Prices-Exploration" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码仓库</a>
</div>

<div class="showcase-meta-line">
  📅 2026-08-14 ｜ 分类：数据分析 / 数据可视化 ｜ 标签：Python / Pandas / matplotlib / Streamlit / QGIS
</div>

## 一、项目背景

房价是城市经济与民生最受关注的话题之一。本项目以链家公开的上海租房与售房数据为样本，尝试回答「哪些因素在影响房价、不同区域的价格差异有多大」。由于原始记录的价格与面积口径不一致，直接比较不同房源并不公平，因此项目以「小区」为分析单元，构建每平米口径的标准化指标，再叠加行政区与空间维度，把价格的分布规律落到地图上。

## 二、数据与预处理

- **数据来源**：链家上海租房数据约 41 万条、售房数据约 32 万条（2018 年采集快照）。
- **原始字段**：租房含标题 / 小区 / 行政区 / 价格 / 面积 / 经纬度；售房含小区 / 行政区 / 总价 / 面积 / 挂牌均价 / 经纬度。
- **处理要点**：读取 GBK 编码原始 CSV 并兼容少量脏字节，删除价格、面积、经纬度缺失或非正的记录，保证样本有效。

## 三、核心指标定义

| 指标 | 计算方式 | 含义 |
|------|----------|------|
| 每平米月租金 `rent_area` | 月租金 ÷ 面积 | 单位：元/㎡/月 |
| 每平米房价 `average_price` | 房源挂牌均价 | 单位：元/㎡ |
| 售租比 `sell_rent_ratio` | 每平米房价 ÷ 每平米月租金 | 房价相对租金的回收月数 |

```python
# 核心计算逻辑（streamlit_app.py 摘要）
rent["rent_area"] = rent["price"] / rent["area"]          # 每平米月租金
data = pd.merge(d_rent, d_sell, on="community")            # 小区级合并
data["sell_rent_ratio"] = data["average_price"] / data["rent_area"]  # 售租比
```

售租比是衡量「买房 vs 租房」经济性的关键指标：数值越大，说明房价相对租金越贵、投资回收期越长；结合行政区维度对比，可以直观识别价格偏离明显的区域。

## 四、分析流程

1. **数据加载与清洗**：读取原始 CSV，剔除价格 / 面积 / 经纬度缺失或非正的记录。
2. **小区指标汇总**：以小区为粒度取均值，合并租售数据，计算三大核心指标。
3. **分布与对比分析**：直方图观察整体分布，按行政区箱线图对比区域差异（截断极端值仅用于绘图展示）。
4. **空间分布可视化**：基于经纬度绘制上海地图散点，结合 QGIS 行政区 / 道路 / 人口数据做地理叠加分析。

## 五、空间分布可视化

三张分布图分别展示上海市域范围内房价、租金与售租比的空间分布，颜色由蓝到红代表数值由低到高，可直观看到核心城区与外围区域的梯度差异。

- **房价空间分布**：每平米房价的空间梯度，高值集中于中心城区及优质板块。
- **租金空间分布**：每平米月租金的分布情况，反映居住需求与租赁市场的空间格局。
- **售租比空间分布**：房价相对租金的偏离程度，识别估值偏高或偏低区域。

## 六、交互式分析应用（Streamlit）

项目内置 Streamlit 交互看板，无需修改代码即可完成探索：

| 模块 | 功能 |
|------|------|
| 📊 数据概览 | 租售数据规模、字段结构、清洗规则与数据样例 |
| 🏘️ 小区指标 | 按售租比 / 租金 / 房价排序查看小区 Top N，支持模糊搜索 |
| 📈 分布 + 🗺️ 地图 | 直方图、区域箱线图与交互地图联动，自由切换着色指标、筛选行政区 |

```bash
# 启动交互式应用（需与数据文件位于同一目录）
streamlit run streamlit_app.py
```

## 七、项目结构

| 文件 / 目录 | 说明 |
|-------------|------|
| `house_rent.csv` | 上海租房数据（约 41 万条） |
| `house_sell.csv` | 上海售房数据（约 32 万条） |
| `房价影响因素挖掘.ipynb` | 完整分析流程：清洗、指标构建、分布分析与空间可视化 |
| `streamlit_app.py` | Streamlit 交互式分析应用 |
| `qgis数据/` | QGIS 空间分析中间数据（行政区划、道路、人口等 shapefile） |
| `p01 ~ p03 *.png` | 房价 / 租金 / 售租比空间分布图输出 |
| `index.html` | 项目展示主页 |

## 八、相关链接

- 在线演示：<https://shanghai-housing-prices-exploration-uzopema9tnjcpgei86d2wp.streamlit.app/>
- 项目介绍页：<https://yohoten.github.io/Shanghai-Housing-Prices-Exploration/>
- 源码仓库：<https://github.com/yohoten/Shanghai-Housing-Prices-Exploration>
