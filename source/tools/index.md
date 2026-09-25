---
title: 小口袋
date: 2026-09-25 12:00:00
type: "showcase"
aside: false
description: Yohoten 自研的桌面工具、网页应用与脚本合集：ACRPA 桌面自动化、Py 书斋、WinSweep 系统清理、InEx_System 收支管理、天青中国象棋、Pikachu Mermaid 等。
---
<div class="showcase-lead">
这里是 <strong>Yohoten</strong> 的「小口袋」——放自己写的 <strong>桌面工具 · 网页应用 · 脚本</strong>。
和「作品集」侧重数据分析与可视化不同，这里的东西都是<strong>日常真的在用</strong>的：为了解决一个具体的小麻烦而写，写完就顺手放上来。
每张卡片的「项目主页」是图文并茂的介绍页，含功能演示与下载直链；「源码」可以直接看实现细节。
</div>

<h2 class="showcase-title-block">用到的东西</h2>

<ul class="showcase-cats">
  <li>Python</li>
  <li>tkinter</li>
  <li>PyQt5</li>
  <li>pygame</li>
  <li>PyMuPDF</li>
  <li>Pillow</li>
  <li>pyautogui</li>
  <li>socket</li>
  <li>图像识别</li>
  <li>Mermaid</li>
  <li>PWA</li>
  <li>PowerBuilder</li>
  <li>DataWindow</li>
  <li>SQLite</li>
  <li>MySQL</li>
  <li>Sybase ASA</li>
  <li>pandas</li>
  <li>matplotlib</li>
  <li>Alpha-Beta</li>
  <li>pyqtgraph</li>
  <li>openpyxl</li>
  <li>PyInstaller</li>
  <li>零依赖</li>
  <li>GitHub Pages</li>
</ul>

<h2 class="showcase-title-block">工具清单</h2>

<div class="showcase-filter" id="showcaseFilter">
  <button type="button" class="filter-chip active" data-filter="all">全部<span class="filter-count"></span></button>
  <button type="button" class="filter-chip" data-filter="app">桌面应用<span class="filter-count"></span></button>
  <button type="button" class="filter-chip" data-filter="web">网页应用<span class="filter-count"></span></button>
  <button type="button" class="filter-chip" data-filter="script">脚本工具<span class="filter-count"></span></button>
  <button type="button" class="filter-chip" data-filter="game">小游戏<span class="filter-count"></span></button>
  <button type="button" class="filter-chip" data-filter="skill">AI Skill<span class="filter-count"></span></button>
</div>

<div class="showcase-grid">

  <div class="showcase-card" data-badge="app">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-app"><i class="fas fa-robot"></i></span>
        <h3 class="showcase-title">ACRPA · 轻量级桌面自动化工作流工具</h3>
      </div>
      <span class="showcase-badge badge-app">桌面应用</span>
    </div>
    <p class="showcase-desc">专为普通用户设计的桌面自动化工具：Python + tkinter 图形界面，底层操作由 pyautogui 实现。不用写代码，用 Excel（.xls）与 JSON 脚本编排流程，借助图像识别定位，即可让电脑自动完成重复性桌面任务。</p>
    <div class="showcase-metrics">
      <span class="metric-item">30+ 自动化命令</span>
      <span class="metric-item">11 个即用模板</span>
      <span class="metric-item">录制回放生成脚本</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">tkinter</span>
      <span class="tech-item">pyautogui</span>
      <span class="tech-item">图像识别</span>
      <span class="tech-item">工作流编排</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/acrpa/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/acrpa" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
      <a class="btn-code" href="https://gitee.com/yohoten/acrpa" target="_blank" rel="noopener"><i class="fas fa-server"></i>国内镜像</a>
      <a class="btn-code" href="/2026/05/24/ACRPA-桌面自动化工作流工具/"><i class="fas fa-book-open"></i>开发笔记</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="app">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-app"><i class="fas fa-book-open"></i></span>
        <h3 class="showcase-title">Py 书斋 · PyShelf 拟物复古书架阅读器</h3>
      </div>
      <span class="showcase-badge badge-app">桌面应用</span>
    </div>
    <p class="showcase-desc">纯 Python 本地桌面工具：把书籍目录变成一间深色书房——程序化绘制木纹书架、以 PDF 首页作真实封面、红丝带书签与烛光夜读模式。内置 GitHub 开源书库 / arXiv / Gutenberg / URL 直链与自定义 JSON 规则书源检索，阅读数据全本地，不改原书一字一节。</p>
    <div class="showcase-metrics">
      <span class="metric-item">PDF 2× 超采样渲染</span>
      <span class="metric-item">5 类内置书源</span>
      <span class="metric-item">零图片素材</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">tkinter</span>
      <span class="tech-item">PyMuPDF</span>
      <span class="tech-item">Pillow</span>
      <span class="tech-item">Windows</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/PyShelf/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/PyShelf" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="app">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-app"><i class="fas fa-broom"></i></span>
        <h3 class="showcase-title">WinSweep · Windows 垃圾清理与一站式优化</h3>
      </div>
      <span class="showcase-badge badge-app">桌面应用</span>
    </div>
    <p class="showcase-desc">只用 Python 标准库写的系统清理与优化工具，双击即用、零第三方依赖。五大模块覆盖缓存清理、预装应用移除（集成 Win11Debloat）、Neon 优化包、DISM / sfc / chkdsk 系统工具与磁盘信息监控，危险项按低 / 中 / 高危分级并强制二次确认。</p>
    <div class="showcase-metrics">
      <span class="metric-item">14 项清理 · 3 种模式</span>
      <span class="metric-item">零第三方依赖</span>
      <span class="metric-item">高危项引导建还原点</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">tkinter</span>
      <span class="tech-item">ctypes</span>
      <span class="tech-item">DISM / sfc</span>
      <span class="tech-item">Windows 10/11</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/WinSweep/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/WinSweep" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="app">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-app"><i class="fas fa-calculator"></i></span>
        <h3 class="showcase-title">InEx_System v2.0 · 个人收支管理系统</h3>
      </div>
      <span class="showcase-badge badge-app">桌面应用</span>
    </div>
    <p class="showcase-desc">基于 PyQt5 的跨数据库桌面记账软件：策略模式 + 工厂模式抽象出 DatabaseBackend，一套业务代码同时驱动 SQLite / MySQL 8.0 / Sybase ASA 9。覆盖录入 → 流水账 → 月报 → 可视化 → AI 建议的完整闭环，含预算四级预警与消费异常检测。</p>
    <div class="showcase-metrics">
      <span class="metric-item">3 种数据库引擎</span>
      <span class="metric-item">9 个功能模块</span>
      <span class="metric-item">约 3,500 行 Python</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">PyQt5</span>
      <span class="tech-item">SQLite</span>
      <span class="tech-item">MySQL</span>
      <span class="tech-item">Sybase ASA</span>
      <span class="tech-item">pandas</span>
      <span class="tech-item">DeepSeek API</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/InEx_System-v2.0/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/InEx_System-v2.0" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="app">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-app"><i class="fas fa-warehouse"></i></span>
        <h3 class="showcase-title">进销存管理系统 · Inventory System</h3>
      </div>
      <span class="showcase-badge badge-app">桌面应用</span>
    </div>
    <p class="showcase-desc">面向中小企业的轻量级进销存桌面系统：Python + Tkinter 界面，数据全部存在本地 SQLite（inventory.db），不联网、不订阅、不丢账。进货自动累加入库、出库实时扣减并在库存不足时直接拦截防超卖，低于阈值自动红色预警，支持按年查询统计、Excel 导出与单据打印预览。</p>
    <div class="showcase-metrics">
      <span class="metric-item">6 个功能模块</span>
      <span class="metric-item">单文件 inventory.db</span>
      <span class="metric-item">本地存储零订阅</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">Tkinter / ttk</span>
      <span class="tech-item">SQLite3</span>
      <span class="tech-item">openpyxl</span>
      <span class="tech-item">PyInstaller</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/inventory_system/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/inventory_system" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="app">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-app"><i class="fas fa-chart-line"></i></span>
        <h3 class="showcase-title">LTV 数据子序列分析系统</h3>
      </div>
      <span class="showcase-badge badge-app">桌面应用</span>
    </div>
    <p class="showcase-desc">PyQt5 + pyqtgraph 写的交互式客户生命周期价值（LTV）分析工具：LTV 序列对比、借鉴定位图的 OncoPrint 事件图、相关性热力图与原始表格四种视图，支持缩放平移、点击详情、条件筛选与时间范围选择，内置趋势线拟合、异常检测标记与 ARIMA / LSTM 预测。</p>
    <div class="showcase-metrics">
      <span class="metric-item">4 种可视化视图</span>
      <span class="metric-item">ARIMA + LSTM 预测</span>
      <span class="metric-item">分层依赖可打包</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">PyQt5</span>
      <span class="tech-item">pyqtgraph</span>
      <span class="tech-item">pandas</span>
      <span class="tech-item">scikit-learn</span>
      <span class="tech-item">statsmodels</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://github.com/yohoten/LTV_apy_subsequence" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码仓库</a>
      <span class="btn-disabled"><i class="fas fa-hourglass-half"></i>介绍页未发布</span>
      <!-- Pages 上线后把上面两行换成这两行（当前 https://yohoten.github.io/LTV_apy_subsequence/ 返回 404）：
      <a class="btn-demo" href="https://yohoten.github.io/LTV_apy_subsequence/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/LTV_apy_subsequence" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
      -->
    </div>
  </div>

  <div class="showcase-card" data-badge="game">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-game"><i class="fas fa-chess"></i></span>
        <h3 class="showcase-title">天青 · 中国象棋（Tianqing Chinese Chess）</h3>
      </div>
      <span class="showcase-badge badge-game">小游戏</span>
    </div>
    <p class="showcase-desc">Python + pygame 的中国象棋人机对战程序：negamax + Alpha-Beta 剪枝、Zobrist 置换表、历史启发与迭代加深，默认 2 秒思考预算且界面不冻结。规则层覆盖蹩马腿、塞象眼、炮架、飞将与不送将过滤，支持悔棋、将军 / 将死 / 困毙判定与棋局分析面板。</p>
    <div class="showcase-metrics">
      <span class="metric-item">Alpha-Beta + 置换表</span>
      <span class="metric-item">44 项单元测试</span>
      <span class="metric-item">深度 3 提速约 7×</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">pygame</span>
      <span class="tech-item">negamax</span>
      <span class="tech-item">Zobrist</span>
      <span class="tech-item">chessai</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/Tianqing-Chinese-Chess/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/Tianqing-Chinese-Chess" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="web">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-web"><i class="fas fa-diagram-project"></i></span>
        <h3 class="showcase-title">Pikachu Mermaid · 零依赖图表编辑器</h3>
      </div>
      <span class="showcase-badge badge-web">网页应用</span>
    </div>
    <p class="showcase-desc">纯 Web 单文件方案的 Mermaid 编辑器，浏览器打开即用，不需要 Python / PyQt 或任何安装。实时预览带 200ms 防抖与语法高亮，自建历史栈支持撤销重做，渲染失败在对应行标红波浪线；可安装为 PWA 桌面应用并完全离线使用。</p>
    <div class="showcase-metrics">
      <span class="metric-item">9 种图表模板</span>
      <span class="metric-item">导出 PNG / SVG / PDF / MD</span>
      <span class="metric-item">PWA 离线可用</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">HTML</span>
      <span class="tech-item">JavaScript</span>
      <span class="tech-item">Mermaid</span>
      <span class="tech-item">PWA</span>
      <span class="tech-item">Service Worker</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/Pikachu_Mermaid/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>在线打开</a>
      <a class="btn-code" href="https://github.com/yohoten/Pikachu_Mermaid" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="skill">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-skill"><i class="fas fa-screwdriver-wrench"></i></span>
        <h3 class="showcase-title">pb-dev · PowerBuilder 开发辅助 Skill</h3>
      </div>
      <span class="showcase-badge badge-skill">AI Skill</span>
    </div>
    <p class="showcase-desc">面向 PowerBuilder 10 / 25 桌面开发的 Agent Skill：覆盖 .sr* 源文件编辑、ORCA 与 PBL 库管理、DataWindow 设计、嵌入式与动态 SQL、匈牙利命名法、SQL Anywhere 连接排错、exe 编译打包与项目重命名改造，并把 CRLF、双重编码、.srm 导入失败等实战红线固化成清单。</p>
    <div class="showcase-metrics">
      <span class="metric-item">1386 行 SKILL.md</span>
      <span class="metric-item">13 篇参考文档</span>
      <span class="metric-item">PBL ⇄ .sr* 全流程</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">PowerBuilder</span>
      <span class="tech-item">PowerScript</span>
      <span class="tech-item">ORCA</span>
      <span class="tech-item">DataWindow</span>
      <span class="tech-item">SQL Anywhere</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/PB-dev/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/PB-dev" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="script">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-script"><i class="fas fa-bolt"></i></span>
        <h3 class="showcase-title">JD Sniper · 京东预约秒杀脚本</h3>
      </div>
      <span class="showcase-badge badge-script">脚本工具</span>
    </div>
    <p class="showcase-desc">三步跑通一次抢购的命令行脚本：JD APP 扫码登录（无需手动维护 Cookie）、与服务器校时的定时预约、到点自动提交订单并在日志中回传订单号。<strong>仅供技术学习与研究</strong>，使用可能违反平台用户协议，风险自负（GPL-3.0）。</p>
    <div class="showcase-metrics">
      <span class="metric-item">扫码登录</span>
      <span class="metric-item">网络校时预约</span>
      <span class="metric-item">日志确认结果</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">requests</span>
      <span class="tech-item">lxml</span>
      <span class="tech-item">config.ini</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://yohoten.github.io/JD_Sniper/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/JD_Sniper" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
    </div>
  </div>

  <div class="showcase-card" data-badge="app">
    <div class="showcase-header">
      <div class="showcase-headline">
        <span class="showcase-icon icon-app"><i class="fas fa-comments"></i></span>
        <h3 class="showcase-title">CQCR · 局域网聊天室</h3>
      </div>
      <span class="showcase-badge badge-app">桌面应用</span>
    </div>
    <p class="showcase-desc">服务端与客户端合一的局域网聊天室：socket 负责通信、tkinter 负责界面，服务端用 select 多路复用，单线程即可并发处理多客户端。采用 4 字节长度前缀帧协议防粘包 / 半包，上线下线自动广播、在线成员树形列表实时刷新，端口可配置并持久化到 config.ini。</p>
    <div class="showcase-metrics">
      <span class="metric-item">select 多路复用</span>
      <span class="metric-item">长度前缀帧协议</span>
      <span class="metric-item">零第三方依赖</span>
    </div>
    <div class="showcase-meta">
      <span class="tech-item">Python</span>
      <span class="tech-item">socket</span>
      <span class="tech-item">select</span>
      <span class="tech-item">tkinter</span>
    </div>
    <div class="showcase-links">
      <a class="btn-demo" href="https://github.com/yohoten/CQCR" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码仓库</a>
      <span class="btn-disabled"><i class="fas fa-hourglass-half"></i>介绍页未发布</span>
      <!-- 等 Pages 上线后，把上面两行换成下面这两行：
      <a class="btn-demo" href="https://yohoten.github.io/CQCR/" target="_blank" rel="noopener"><i class="fas fa-globe"></i>项目主页</a>
      <a class="btn-code" href="https://github.com/yohoten/CQCR" target="_blank" rel="noopener"><i class="fab fa-github"></i>源码</a>
      -->
    </div>
  </div>

</div>

<div class="showcase-empty" id="showcaseEmpty">这个类别下暂时没有工具，换一个筛选看看。</div>

<div class="showcase-pagination" id="showcasePagination"></div>
