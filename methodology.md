---
## 2026-05-29 — Methodology

- RULE: 在强趋势 regime 下,RSI / MA20% 等技术指标的 🔴 overextended 信号应作为"入场抑制器",而不是"卖出信号";持仓管理改用 trail stop + 结构性 catalyst 监控
- WHY: ARM 2026-05 案例 — RSI 76 / MA20% +42 持续多天但股票继续创新高。学术研究(Jegadeesh-Titman 1993,Asness et al. 2013)证实在动量股右尾,RSI 可连续 8-12 周 > 70(经典案例:Tesla 2020 Q3-Q4 持续 ~4 个月、NVDA 2023 Q2-Q3、CRWD 2024 H1)。RSI 描述的是"随机抽样股票的平均行为",但在尾部(强趋势 + 结构性故事)平均规则失效。死守 RSI 卖出会错过 Tesla 2020 / NVDA 2023 翻倍行情;完全无视 RSI 又会在 ARK 2021 / Tesla 2021 Q4 顶部追买
- HOW_TO_APPLY: 当 momentum-scan 或类似系统给出 🔴 信号时:(1) 空仓 → 不要建仓,等回调到 MA50 附近或市场全面 risk-off 引发回调;(2) 已持仓 → 不要因 🔴 卖出,改用 trail stop(ATR-based 或 momentum-scan 提供的)管理止盈;(3) 真正的卖出信号来自结构性故障 — 业绩 guidance 不达预期、内部人减持、上游供应链坏新闻、cohort 中持续上榜的"恒星股"开始掉榜、SoftBank 类大股东释放股份;(4) 评估 regime 状态 — 当 top-30 中 >80% 是 🔴,是"晚期"信号,降仓位;当只有少数 🔴,趋势仍健康。简言之:入场看 RSI(避免追高),持仓看 trail stop + 基本面(避免误杀)

### 对话纪要

- User: 问 ARM 的 momentum-scan 🔴 overextended 已经好几天,股票还在涨,是否意味着 overextended 指标失效
- Assistant: 没失效,但理解 frame 错了。技术指标本质是"概率工具"而非"确定性工具",描述的是随机抽样股票的平均行为。在右尾(强趋势 + 结构性故事)平均规则失效。Tesla 2020 / NVDA 2023 / CRWD 2024 都有 RSI 连续 8-12 周 > 70 的先例。正确用法是 3 层框架:(a) 🔴 作为入场抑制器而非卖出信号;(b) 持仓管理改用 trail stop + 结构性信号(SoftBank 减持 / TSMC 产能 / 财报 guidance);(c) 评估同 cohort 状态判断整体 regime
- User: /commit-invest
