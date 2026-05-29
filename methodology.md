# Methodology

## 2026-05-29 — Methodology

- RULE: 在强趋势 regime 下,RSI / MA20% 等技术指标的 🔴 overextended 信号应作为"入场抑制器",而不是"卖出信号";持仓管理改用 trail stop + 结构性 catalyst 监控
- WHY: ARM 2026-05 案例 — RSI 76 / MA20% +42 持续多天但股票继续创新高。学术研究(Jegadeesh-Titman 1993,Asness et al. 2013)证实在动量股右尾,RSI 可连续 8-12 周 > 70(经典案例:Tesla 2020 Q3-Q4 持续 ~4 个月、NVDA 2023 Q2-Q3、CRWD 2024 H1)。RSI 描述的是"随机抽样股票的平均行为",但在尾部(强趋势 + 结构性故事)平均规则失效。死守 RSI 卖出会错过 Tesla 2020 / NVDA 2023 翻倍行情;完全无视 RSI 又会在 ARK 2021 / Tesla 2021 Q4 顶部追买
- HOW_TO_APPLY: 当 momentum-scan 或类似系统给出 🔴 信号时:(1) 空仓 → 不要建仓,等回调到 MA50 附近或市场全面 risk-off 引发回调;(2) 已持仓 → 不要因 🔴 卖出,改用 trail stop(ATR-based 或 momentum-scan 提供的)管理止盈;(3) 真正的卖出信号来自结构性故障 — 业绩 guidance 不达预期、内部人减持、上游供应链坏新闻、cohort 中持续上榜的"恒星股"开始掉榜、SoftBank 类大股东释放股份;(4) 评估 regime 状态 — 当 top-30 中 >80% 是 🔴,是"晚期"信号,降仓位;当只有少数 🔴,趋势仍健康。简言之:入场看 RSI(避免追高),持仓看 trail stop + 基本面(避免误杀)

### Conversation Log

- User: 问 ARM 的 momentum-scan 🔴 overextended 已经好几天,股票还在涨,是否意味着 overextended 指标失效
- Assistant: 没失效,但理解 frame 错了。技术指标本质是"概率工具"而非"确定性工具",描述的是随机抽样股票的平均行为。在右尾(强趋势 + 结构性故事)平均规则失效。Tesla 2020 / NVDA 2023 / CRWD 2024 都有 RSI 连续 8-12 周 > 70 的先例。正确用法是 3 层框架:(a) 🔴 作为入场抑制器而非卖出信号;(b) 持仓管理改用 trail stop + 结构性信号(SoftBank 减持 / TSMC 产能 / 财报 guidance);(c) 评估同 cohort 状态判断整体 regime
- User: /commit-invest

---

## 2026-05-29 — Methodology

- RULE: 不要仅凭"技术上已伸展 + 已 price for perfection"就在财报 / 催化剂前做空、减仓或预设"利好出尽" —— 足够大的 beat-and-raise 能直接打穿已伸展的技术结构
- WHY: DELL 2026-05-29 案例 —— 股价 YTD +158%、财报前一周再 +25%、带着历史新高进 FY27 Q1,我据此判断"利好可能出尽"。结果是 Non-GAAP EPS 超预期 +64%、全年营收指引上修 ~50% 的超级 beat-and-raise,股价盘前跳空 +38%(\$317 → ~\$445)而非回落。错在把"预期高"当成了"预期满":当实绩远超连卖方都不敢给的预期时,伸展的技术面挡不住基本面的重定价。这是同日"强趋势 regime 下 🔴 作入场抑制器而非卖出信号"那条 Methodology 规则在催化剂事件上的延伸
- HOW_TO_APPLY: 面对一只技术上 overextended、市场预期很高的强趋势股临近财报:(1) 不要因"涨太多 / 预期太高"就做空或大幅减仓 —— 这是非对称的输家交易(对了赚有限,错了被跳空打穿);(2) 区分"预期高"与"预期满":只有当乐观情景都已隐含在价格里、且没有 backlog / 订单 / 指引上修空间时,"利好出尽"才成立;(3) 真正触发减仓的是基本面证伪(guidance 下修、订单流失、毛利率结构性恶化),不是单纯的乖离率 / RSI 或"涨幅已大";(4) 想表达谨慎,用"不追高 + 等回调"(watch),而不是"做空 / 预判见顶"

### Conversation Log

- User: 研究一下 DELL 这家公司和财报
- Assistant: 初判 DELL 带着历史新高 + 一周 +25% 进财报,"可能利好出尽",建议不追高。
- User: 好像不是脏数据,是市场对财报的反应
- Assistant: 核实后股价跳空 +38% 而非回落 —— "利好出尽"判断被证伪。抽象出规则:足够大的 beat-and-raise 能打穿已伸展的技术结构,别在财报前凭"已 price for perfection"做空 / 减仓
