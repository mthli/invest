# ARM — Current Consensus

> Snapshot of current view on ARM. Journal: `positions/ARM.md`
> Last distilled: 2026-06-04 (HEAD = 3aa2cf6)

## Current stance

- **Stance**: Watching
- **Horizon**: months
- **Conviction**: med
- **As of**: 2026-05-29 (commit aa71468)

## Live thesis

ARM 正从"IP 公司"重新分类为"AI 算力底层抽税器 + 数据中心整芯片公司"。多层结构性驱动叠加:SoftBank ~90% 持股(有效流通盘 ~10%,机构买入对价格冲击放大 ~10×,lockup 已过期但未抛=信号)、ARMv9 静默提价(每颗版税 ~2× v8,目前仅占版税 ~25%)、2026-03-24 发布 AGI CPU(35 年首款自有芯片,与 Meta 共设 136 核 Neoverse V3、TSMC 3nm,自营芯片营收 ~10× 传统版税)、hyperscaler ARM 化不可逆(Graviton/Axion/Cobalt + Nvidia Grace 每颗付版税)、公开市场唯一"AI 算力抽税"标的。Q4 FY2026 财报印证:数据中心 royalty YoY 翻倍、指引 FY27 再翻倍、AGI CPU 已有 $20 亿订单(供给约束=定价权)。STANCE 仍是 watch:空仓等回调,理想入场 $260–290(MA50);当前 ~$345、RSI 76、🔴 overextended。真正对手是 Nvidia Grace/Vera 和 hyperscaler 内部 SoC(非 AMD EPYC,socket 不同)。

## Catalysts to watch

- 2026-07-29 下次财报(数据中心 royalty 增速 + AGI CPU 出货时点指引)
- H2 2026 AGI CPU 首批客户出货(Meta 已收样片)
- 2027 TSMC Tainan 新 N3 厂投产释放配额
- Apple 迁移到 N2 腾出 N3 给 ARM/Nvidia 二线客户

## Invalidation triggers

- 数据中心 royalty YoY 增速跌破 +50%
- AGI CPU 首批出货从 H2 2026 滑到 2027
- SoftBank 开始系统性减持(lockup 已过期但目前未抛)
- TSMC 宣布 N3 新厂延期或 ARM allocation 被削减
- 任意大 hyperscaler 宣布从 ARM 回退到 x86
- Meta 把 MTIA / 自研 SoC 优先级提到 AGI CPU 之上

## Open questions

- 2026-06-02: Nvidia 5/31 发布 RTX Spark(AI PC)+ Vera(数据中心)均用 ARM 定制 CPU;6/01 +15.3% 创历史新高 $421.69 —— 给 thesis 加 AI PC 版税新腿、6 条 invalidation 全未触发(2 条反向强化)→ conviction 可上调但 STANCE 仍 watch;现价比均值目标 $241 高 ~70%、forward ~135–160x = blow-off 风险,更不是入场点 (commit 489455a)
