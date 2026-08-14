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
  <li>XGBoost</li>
  <li>LightGBM</li>
  <li>LSTM</li>
  <li>SHAP</li>
  <li>Flask</li>
  <li>Power BI</li>
  <li>ECharts</li>
  <li>folium</li>
  <li>RFM</li>
  <li>BTYD</li>
  <li>scikit-learn</li>
  <li>数据可视化</li>
  <li>数据分析</li>
  <li>机器学习</li>
  <li>情感分析</li>
</ul>

<h2 class="showcase-title-block">核心项目</h2>

<div class="showcase-grid">

  <div class="showcase-card">
    <div class="showcase-header">
      <h3 class="showcase-title">上海房价影响因素挖掘 · 空间数据分析</h3>
      <span class="showcase-badge badge-data">数据分析</span>
    </div>
    <p class="showcase-desc">基于链家上海租房（约 41 万条）与售房（约 32 万条）公开数据，从小区粒度构建每平米月租金、每平米房价与售租比三大核心指标，结合直方图、箱线图与 QGIS 空间可视化，挖掘影响房价的关键因素。</p>
    <div class="showcase-metrics">
      <span class="metric-item">41 万+ 租房记录</span>
      <span class="metric-item">32 万+ 售房记录</span>
      <span class="metric-item">3 大核心指标</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">Pandas</span>
      <span class="tech-item">matplotlib</span>
      <span class="tech-item">Streamlit</span>
      <span class="tech-item">QGIS</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://shanghai-housing-prices-exploration-uzopema9tnjcpgei86d2wp.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
      <a class="btn-code" href="https://github.com/yohoten/Shanghai-Housing-Prices-Exploration" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码</a>
      <a class="btn-code" href="/showcase/上海房价探索/"><i class="fas fa-book-open"></i>详情</a>
    </div>
  </div>

  <div class="showcase-card">
    <div class="showcase-header">
      <h3 class="showcase-title">Portugal Hotel Booking · 预订分析与取消预测</h3>
      <span class="showcase-badge badge-ml">机器学习</span>
    </div>
    <p class="showcase-desc">基于 Hotel Booking Demand 公开数据集（119,390 条原始记录，2015–2017 年葡萄牙两类酒店），完整走通数据清洗 → EDA → 特征工程 → 建模 → 可视化全链路，增强随机森林取消预测准确率 86.81%，配套 Streamlit 数据大屏。</p>
    <div class="showcase-metrics">
      <span class="metric-item">119,210 条有效记录</span>
      <span class="metric-item">取消率 37.1%</span>
      <span class="metric-item">准确率 86.81%</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">scikit-learn</span>
      <span class="tech-item">XGBoost</span>
      <span class="tech-item">plotly</span>
      <span class="tech-item">Streamlit</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://portugal-hotel-booking-analysis-mghtrt2nhkzqbv7u5qlshv.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
      <a class="btn-code" href="https://github.com/yohoten/portugal-hotel-booking-analysis" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码</a>
      <a class="btn-code" href="/showcase/葡萄牙酒店预订分析/"><i class="fas fa-book-open"></i>详情</a>
    </div>
  </div>

  <div class="showcase-card">
    <div class="showcase-header">
      <h3 class="showcase-title">峰流智测 · 景区客流智能预测平台</h3>
      <span class="showcase-badge badge-ml">机器学习</span>
    </div>
    <p class="showcase-desc">以九寨沟 1,869 天真实官方数据为样板，XGBoost 时序预测 R²=0.9665、MAPE≈5.1%，提供未来 7 日滚动预测、90% 置信区间与承载量三色预警，覆盖数据采集→预测→看板→运营决策→API 全链路。</p>
    <div class="showcase-metrics">
      <span class="metric-item">R² = 0.9665</span>
      <span class="metric-item">MAPE ≈ 5.1%</span>
      <span class="metric-item">7 日滚动预测</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">XGBoost</span>
      <span class="tech-item">Streamlit</span>
      <span class="tech-item">Plotly</span>
      <span class="tech-item">SHAP</span>
      <span class="tech-item">Flask</span>
      <span class="tech-item">Power BI</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://scenicflowforecast-bfyery7asaxwksfrcshvyw.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
      <a class="btn-code" href="https://github.com/yohoten/scenicflow_forecast" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码</a>
      <a class="btn-code" href="/showcase/峰流智测-景区客流预测/"><i class="fas fa-book-open"></i>详情</a>
    </div>
  </div>

  <div class="showcase-card">
    <div class="showcase-header">
      <h3 class="showcase-title">Olist 电商多模态智能分析（OMMA）</h3>
      <span class="showcase-badge badge-data">数据分析</span>
    </div>
    <p class="showcase-desc">基于巴西 Olist 10 万笔订单的多模态智能分析：融合地理空间、文本情感、评分预测、客户价值细分（RFM + K-Means）、生命周期价值预测（BTYD）与客户流失七大维度，配套 6 模块交互看板。</p>
    <div class="showcase-metrics">
      <span class="metric-item">10 万笔订单</span>
      <span class="metric-item">7 大分析维度</span>
      <span class="metric-item">LSTM 评分预测</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">Plotly</span>
      <span class="tech-item">Streamlit</span>
      <span class="tech-item">XGBoost</span>
      <span class="tech-item">LSTM</span>
      <span class="tech-item">RFM</span>
      <span class="tech-item">BTYD</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://lbqzltiv9cqooawtaww9pg.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
      <a class="btn-code" href="https://github.com/yohoten/omma" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码</a>
      <a class="btn-code" href="/showcase/Olist电商多模态智能分析/"><i class="fas fa-book-open"></i>详情</a>
    </div>
  </div>

  <div class="showcase-card">
    <div class="showcase-header">
      <h3 class="showcase-title">在线食品数据分析 · 可视化看板</h3>
      <span class="showcase-badge badge-data">数据分析</span>
    </div>
    <p class="showcase-desc">基于 388 条在线食品用户消费记录的商务数据分析，通过 Streamlit + Plotly 构建交互看板：5 个 KPI 指标卡 + 多维联动筛选 + 5 个分析标签页，覆盖用户画像、教育与收入、职业分析及线性回归收入预测。</p>
    <div class="showcase-metrics">
      <span class="metric-item">388 条样本</span>
      <span class="metric-item">5 大分析标签页</span>
      <span class="metric-item">收入预测模型</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Streamlit</span>
      <span class="tech-item">Plotly</span>
      <span class="tech-item">Pandas</span>
      <span class="tech-item">scikit-learn</span>
      <span class="tech-item">Python</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://onlinefoodsanalyze-n5pzeqkftq5y9adncw6s7b.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
      <a class="btn-code" href="https://github.com/yohoten/onlinefoods_analyze" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码</a>
      <a class="btn-code" href="/showcase/在线食品数据分析/"><i class="fas fa-book-open"></i>详情</a>
    </div>
  </div>

  <div class="showcase-card">
    <div class="showcase-header">
      <h3 class="showcase-title">重庆上市车企财务智能预警研究</h3>
      <span class="showcase-badge badge-viz">数据可视化</span>
    </div>
    <p class="showcase-desc">基于 Streamlit + Plotly + Pandas 打造的交互式数据分析看板，支持多维度筛选、联动图表与关键指标总览，帮助快速洞察数据分布与变化趋势。</p>
    <div class="showcase-metrics">
      <span class="metric-item">交互式看板</span>
      <span class="metric-item">多维度联动</span>
      <span class="metric-item">实时筛选</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Streamlit</span>
      <span class="tech-item">Plotly</span>
      <span class="tech-item">Pandas</span>
      <span class="tech-item">Python</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://ijsywabw6q8r4sn7y66mka.streamlit.app/" target="_blank" rel="noopener"><i class="fas fa-chart-line"></i>在线演示</a>
      <a class="btn-code" href="https://github.com/yohoten/fidac" target="_blank" rel="noopener"><i class="fas fa-code"></i>源码</a>
      <a class="btn-code" href="/showcase/重庆上市车企财务智能预警研究/"><i class="fas fa-book-open"></i>详情</a>
    </div>
  </div>

</div>
