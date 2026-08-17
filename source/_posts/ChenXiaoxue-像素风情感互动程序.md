---
title: ChenXiaoxue 像素风情感互动程序：从 PyQt5 到全栈重写的心路历程
date: 2026-07-21 22:00:00
tags:
  - 开发
  - Python
  - AI
  - TypeScript
  - 工具
categories:
  - 开发
description: 分享我开发的像素复古风 AI 情感互动助手「ChenXiaoxue」——从第一代 PyQt5 单机像素应用，到第二代 FastAPI + React + Tauri 全面重写，重写不丢初心的技术笔记与踩坑实录。
top: 0
---

## 写在前面

你有没有想过，给自己的电脑装一个「像素小人」陪你聊天？

前一阵子我一直在捣鼓一个叫 **ChenXiaoxue** 的项目——一个像素复古风 + AI 情感互动的桌面/Web 助手。做它的初衷其实很朴素：一个是想要一个能记住上下文、带点情绪反馈的 AI 陪伴，另一个就是想做个足够「有意思」的个人项目，把自己学过的前端、后端、桌面三块东西串起来练练手。

今天想跟你聊聊它从「单机像素小玩具」长成「三层全栈现代架构」的过程，中间踩了不少坑，也攒了不少经验。文章尽量写得实在，希望对你有点启发。

## 一、第一代：PyQt5 单机像素应用

故事的开头是 **chenxiaoxue-orgin**——一个 Python 3.7+ / PyQt5 的单机桌面应用。那时候的想法很简单：一个窗口，一个像素角色，一个输入框，连上 DeepSeek 的 API 就能对话。

![](https://i.imgs.ovh/2026/08/18/6c64e76a6c8072a423eaec6febd397d0.webp)

它虽然「轻」，但五脏俱全：

- **像素主题**：深蓝 `#1a1a2e` + 橙 `#ff9d00` 的配色，搭配 Press Start 2P / Zpix 像素字体，一眼就是复古游戏的味道。
- **EnhancedResponseSystem 完整链路**：分词 → 意图 → 情感 → API → 响应 → 上下文，一条链路走下来，还带缓存和 3 次重试。
- **情感驱动的表情与音效**：聊到高兴时，小人的表情和音效会跟着变。
- **角色眨眼动画、打字机输出、心电图状态栏**：这些小细节让「陪伴感」一下子就出来了。
- **梦境符号解析**：飞翔、坠落、水、火、蛇、追逐、考试、牙齿……它会帮你解析梦境里的意象。
- **插件系统**：基于 PluginBase + plugins.json，可插拔。
- **消息导出**：支持 JSON / TXT / CSV，方便把对话存档。
- **中英日 i18n**、**「灵动 / 迟缓」两种输出模式**。

第一代用的技术栈：PyQt5 / requests / jieba / snownlp / lxml，SQLite 存对话历史。说实话，单模型（DeepSeek）对话 + 本地情感分析，已经能跑出一个很完整的「像素陪伴」体验了。

仓库就在：<https://gitee.com/yohotens/chenxiaoxue-orgin>

## 二、第二代：全面重写，重写不丢初心

单机版玩熟了之后，我开始不满足于「只能在自己电脑上跑」这个限制。2025.08 我启动了迁移，把它重写成了 **chenxiaoxue-reborn-reborn**——一套前后端分离 + 桌面壳的现代架构：

- **后端**：FastAPI 0.115 + Uvicorn + SQLAlchemy 2.0 + aiosqlite + JWT(bcrypt) + slowapi 限流 + loguru + alembic
- **前端**：React 18 + TypeScript + Vite 4 + Three.js
- **桌面壳**：Tauri 2（Rust）

![](https://i.imgs.ovh/2026/08/18/a49f96bce285258e5723376066206174.png)

三层技术栈（Python / TypeScript / Rust），一套代码同时覆盖 Web 和桌面。整体代码量大概 **~11000 行**：后端 Python ~5000+、前端 TS/React ~3000+、Rust ~500+、测试 ~500+、文档 ~2000+，26+ 个 API 端点，12+ 个功能模块。

![](https://i.imgs.ovh/2026/08/18/5040bf55aa2385f035cc439eb72bd06b.png)

关键是——**重写不丢初心**。像素主题一脉相承：GIF 背景、打字机输出、ASCII 艺术、CRT 扫描线、毛玻璃效果，全都保留并且升级了。并且注册购买了域名：**chenxiaoxue.space**，未来会运载在服务器中并挂载在此网址。

仓库在这里：<https://gitee.com/yohoten_space/chenxiaoxue-reborn>

## 三、核心功能亮点

重写版功能一下子丰富了很多，挑几个我觉得最有意思的展开说说：

### 1. 多模型智能路由

`ai_router.py` 是后端最核心的模块之一。它集成了 **DeepSeek / OpenAI / 通义 / 豆包 / Kimi / Claude** 等多家供应商，会根据「任务类型 + 复杂度 + 成本」自动选型，支持流式 SSE，还有故障转移——某个供应商挂了，自动切到下一个可用的。

成本控制靠的是 `model_pricing.json` 这份计价表，比如 `deepseek-chat` 约 $0.008/1k tokens，`gpt-4o` 约 $2.5/1k tokens。路由时把价格拉进来算一笔账，简单的日常聊天就不会动不动砸到贵模型上。

### 2. 模型协作 collaborative_chat

单模型不够，那就多模型协作：**任务分解 → 多模型并行 → 结果聚合**。一个复杂问题拆成几块，分别交给不同的模型处理，最后汇总成一份答案。这也是现代 Agent 玩法里很经典的一种思路。

### 3. MCP 协议

重写版接入了 MCP（Model Context Protocol），暴露了 `chat_completion`、`analyze_emotion`、`translate`、`get_models`、`collaborative_chat` 等一批工具，并且支持接入外部 MCP 服务器。这意味着陈筱雪的能力可以像插头一样往外扩展，生态一下就打开了。

![](https://i.imgs.ovh/2026/08/18/12e165a10a60881ef5b6b1f6e4c07174.png)

### 4. 情感分析：SnowNLP + AI 双模式

`emotion_service` 实现了混合情感分析，有 `auto / rule / ai` 三种模式：**少于 20 个字走规则，否则交给 AI；AI 失败时自动降级回规则**。底层还用 SnowNLP 做了阈值分段：

- `> 0.8` → ecstatic（狂喜）
- `> 0.6` → happy（开心）
- `> 0.5` → content（满足）
- `≥ 0.4` → neutral（平静）
- `≥ 0.2` → sad（低落）
- 否则 → sad

一共 9 种情感，每种都有对应的 Emoji 映射（比如 ecstatic 对应 😊✨🎉，angry 对应 😠）。情感分析结果直接驱动小人表情、音效和 ECG 心电图，让「陪伴」不是冷冰冰的文字。

### 5. 像素主题 UI

这是我最舍不得的部分。GIF 动态背景、打字机逐字输出、ASCII 艺术、CRT 扫描线、毛玻璃卡片——一套下来，整个界面就像一台复古掌机。前端是 React 18 + TS + Vite 4 搭的，主题完全围绕「像素 + 复古」这一个核心设计语言展开。

![](https://i.imgs.ovh/2026/08/18/5ea6dec438dd7fa1df05c9755193d394.png)

### 6. Humanizer AI 检测器

一个很有意思的小工具：内置 **24 种 AI 写作模式**，能对一段文字打分（0-100%），判断它「像不像 AI 写的」。写东西多了之后，真的很需要这样一面镜子来提醒自己「这段是不是又 AI 味太重了」。

![](https://i.imgs.ovh/2026/08/18/f1c795f9a77a20c953d1efe8f83298ec.png)

### 7. ECG 情感心电图

Canvas 画出来的心电图，**P/QRS/T 波**齐全，颜色和心率会跟着情感状态变化。开心的时候心电图「扑通扑通」跳得欢快，低落的时候慢慢悠悠——把这个做成状态栏，我觉得是整台机器最有灵性的地方。

![](https://i.imgs.ovh/2026/08/18/d9ef0c554e62bea63ef3649f20be5589.png)

### 8. 三级自我进化记忆

`self_improving` 模块做了一套分层的长期记忆：

- **HOT**：`memory.md`，≤100 行，记最近的对话状态；
- **WARM**：`projects` / `domains`，≤200 行，记项目相关的长期信息；
- **COLD**：归档，存更久远的内容。

它会识别「纠正」和「偏好」信号，自动沉淀成 `CONTEXT / REFLECTION / LESSON` 三种记忆条目。用着用着，它真的会越来越「懂你」。

> 顺带一提，还有 **梦境解析 + Three.js 星图**、**JWT 多用户（Access 7 天 / Refresh 30 天）**、**插件系统** 等一票功能，限于篇幅就不一一展开了。

## 四、技术与工程细节

作为工程人，再补几个「幕后」的细节：

- **launcher.bat v2.2**：`setup / dev / backend / frontend / tauri / test / prod` 七种模式一个脚本全搞定。自己一个人开发前后端 + 桌面，启动器好不好用直接决定幸福指数。
- **JWT 双 Token**：Access 7 天 + Refresh 30 天，登录态既安全又省心。
- **限流 + 日志**：slowapi 做接口限流，loguru 管日志，alembic 管数据库迁移——该有的基建一个没落下。
- **多语言前端**：重写版继续保留了多语言支持，国际化一直是这个项目的保留节目。

## 五、踩过的坑与感悟

写代码嘛，哪有不踩坑的。几个真实教训分享给你：

1. **API Key 明文暴露过。** 第一代项目的 `config.ini` 和 README 里，曾直接把 DeepSeek API Key 明文写了出来。虽然是个人项目，但这也是非常不安全的坏习惯。重写版全部改成了 **.env 环境变量**，密钥绝不进仓库。**血的教训：密钥永远不要硬编码进代码或文档。**
2. **单文件过大。** 第一代 `chat_window.py` 有 **2539 行**，重写版的 `ai_router.py` 也有 **1240 行**。功能堆着堆着文件就失控了。现在回头看，早期就应该更早拆模块、抽服务。
3. **命名不一致。** 项目名一会儿「陈筱雪」一会儿「Chen筱雪」一会儿「ChenXiaoxue」，甚至仓库名 `chenxiaoxue-orgin` 里的 `orgin` 还是个拼写笔误（应该是 origin）。**正式项目开工前，先定好统一的命名规范，包括仓库名，不然后面到处都是坑。**
4. **重写要有理由，也要有底线。** 全面重写容易上头，但一定要想清楚「保留什么、抛弃什么」。我这次坚持把「像素主题」这条灵魂主线一路带下来，重写才没有变成「重做」。

对了，我的本机开发路径是 `d:/pixel_ai_assistant-250907/Chen Xiaoxue/`，项目一路从像素小玩具长到现在，也算有点感情了（笑）。

## 六、结尾

陈筱雪这个项目，是我把前端、后端、桌面三块能力真正「合体」的一次尝试。第一代让我理解了「一个完整的 AI 应用」长什么样，第二代让我学会了「如何把一套个人玩具做成正经的多层架构」。如果你也喜欢像素风，或者对「AI 情感陪伴」「全栈 + Tauri 桌面」感兴趣，欢迎来仓库逛逛、提提 issue。

**项目仓库：**

- 第一代：<https://gitee.com/yohotens/chenxiaoxue-orgin>
- 第二代：<https://gitee.com/yohoten_space/chenxiaoxue-reborn>

**相关阅读：**

- 知乎问答：<https://www.zhihu.com/question/15175936725/answer/1944403822710596747>
- 知乎专栏：<https://zhuanlan.zhihu.com/p/1961952610673226156>

未来我还想给它加更多的东西：更聪明的记忆策略、更丰富的像素场景、更顺滑的桌面体验……不过这些都慢慢来。如果你也有类似的「像素 + AI」想法，欢迎来找我交流～

路还长，我们继续写下去。
