---
## 2026-05-29 — Thesis

- TICKER: ARM
- THEMES: ai-infra, semiconductors
- STANCE: watch
- HORIZON: months
- THESIS: ARM 正在从"IP 公司"重新分类为"AI 算力底层抽税器 + 数据中心整芯片公司"。这一转型由多层结构性因素叠加驱动:(1) SoftBank 持股 ~90%,有效流通盘只有 ~10%,任何机构买入对价格冲击放大 ~10 倍,且 lockup 已于 2024-03 过期但 SoftBank 未抛售本身是信号;(2) ARMv9 每颗版税 ~2× ARMv8,目前只占版税收入 ~25%,在做静默"提价";(3) 2026-03-24 宣布 AGI CPU(35 年历史首款自有芯片),与 Meta 联合设计的 136 核 Neoverse V3,TSMC 3nm,每颗自营芯片营收约 10× 传统版税;(4) hyperscaler ARM 化已不可逆 — AWS Graviton 占 AWS 新增计算容量 >50%,Google Axion 迁移 30k+ 应用,Microsoft Cobalt 200 出货中,每颗都给 ARM Holdings 版税;(5) Nvidia GB200/GB300 内置 Grace CPU(ARM 架构)= 每台 AI 服务器都付版税;(6) 公开市场上"AI 算力 = ARM 抽税"主题没有第二个标的,资金集中度本身放大价格持续性。Q4 FY2026 财报(2026-05-06)印证:数据中心 royalty YoY 翻倍,公司指引 FY27 再次翻倍,AGI CPU 已有 \$200 亿订单(供给约束,非需求约束 = 定价权)。AMD EPYC 不是 AGI CPU 的真正对手(socket 不同),真正对手是 Nvidia Grace/Vera 和 hyperscaler 内部 SoC。
- CATALYSTS: 2026-07-29 下次财报(数据中心 royalty 增速 + AGI CPU 出货时点指引);H2 2026 AGI CPU 首批客户出货(Meta 已收样片);2027 TSMC Tainan 新 N3 厂投产释放配额;Apple 迁移到 N2 腾出 N3 给 ARM/Nvidia 二线客户
- INVALIDATION: 满足以下任一即放弃 thesis 并触发 SUPERSEDES:(1) 数据中心 royalty YoY 增速跌破 +50%;(2) AGI CPU 首批出货从 H2 2026 滑动到 2027;(3) SoftBank 开始系统性减持(lockup 已过期但目前未抛);(4) TSMC 公开宣布 N3 新厂延期或 ARM allocation 被削减;(5) 任意大 hyperscaler 宣布从 ARM 回退到 x86;(6) Meta 把 MTIA / 自研 SoC 优先级提到 AGI CPU 之上
- CONVICTION: med
- ENTRY_PRICE: (空仓,等回调 — 当前 ~\$345,RSI 76,MA20% +42,momentum-scan Sig 🔴 overextended。理想入场区间在 MA50 附近,通常 -15% 到 -25%,即 \$260-\$290。在 7/29 财报前如果有市场全面 risk-off 引发的回调,优先入场。)

### 对话纪要

- User: 用 /momentum-scan 扫出今日 top 30,问 ARM 为什么近两个月一直在涨
- Assistant: 拉了 5/6 财报 + 业务条线数据,初步回答:(a) Q4 FY26 财报数据中心 royalty YoY 翻倍;(b) AGI CPU + \$20 亿订单 + IBM 合作;(c) Wells Fargo / RBC 上修目标价(分别到 \$220 / \$260)。但强调当前 RSI 76 / MA20% +42 / Sig 🔴 — 不是入场点
- User: "感觉已经脱离了我的认知,肯定有我不知道的因素" — 要 deep insight
- Assistant: 给出 7 个被市场低估的结构性驱动因素:(1) SoftBank ~90% 持股 / 10% 流通盘的微观结构效应;(2) ARMv9 静默"加价"(每颗版税 2x);(3) AGI CPU 是商业模式转型(IP → 整芯片),营收 10x;(4) CSS 子系统提升客单价;(5) 唯一标的效应(没有第二个公开市场 AI 算力抽税标的);(6) Forward EPS 持续上修使 P/E 自动压缩;(7) \$2B 订单是供给约束 = 定价权
- User: 问 TSMC 3nm 产能是否锁住了 ARM
- Assistant: 是的,N3 100% utilization、demand 3× supply、AI 加速器占 60%(2026)/86%(2027)。但反转解读:(a) 供给约束 = 定价权;(b) Meta 是 co-developer,带自己的 TSMC 配额;(c) Apple 搬到 N2 腾 N3 给二线 AI 客户。真正风险在时点(Q4 2026 出货滑动 / Meta 把 MTIA 优先级提上来 / Tainan 新厂延期),而非产能本身
- User: 问 RSI 持续 overextended 是否意味着指标失效
- Assistant: 没失效,但理解 frame 错了。RSI 是概率工具,在右尾强趋势中可连续 8-12 周 > 70(Tesla 2020 Q3-Q4、NVDA 2023 Q2-Q3、CRWD 2024 H1)。🔴 不是卖出信号 → 是"入场抑制器"。持仓应用 trail stop(ATR-based \$287.60,-16.4%)+ 结构性信号(SoftBank / TSMC / 财报),而非 RSI 作为转折信号
- User: 问 AMD 是否会在 ARM 真正铺开前抢占现有市场
- Assistant: frame 错了。AGI CPU 和 AMD EPYC 不在同一 socket 竞争(AGI CPU 瞄准 AI cluster host CPU,EPYC 是通用服务器 CPU)。即便 AGI CPU 完全失败,ARM Holdings 仍通过 hyperscaler 内部 ARM 芯片(Graviton/Axion/Cobalt/Grace)抽税 — AMD 抢的是 Intel 的市场,对 ARM 中性甚至有利。真正的对手是 Nvidia Grace/Vera 和 hyperscaler 内部 SoC。hyperscaler capex 从 \$200B(2024)→ \$500B+(2027)容得下多个赢家
- User: /commit-invest
