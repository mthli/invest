# AVGO

## 2026-06-04 — Thesis

- TICKER: AVGO
- THEMES: ai-infra, semiconductors
- STANCE: long
- HORIZON: years
- THESIS: 已持仓(成本 ~\$410,重仓 10-20%)。AVGO 是定制硅链条里"变现质量最高"的旗手 —— FY2026 Q2(截止 5/3,6/3 发布)是 A 级财报:总营收 \$22.2B(+48%),半导体 \$15.0B(+79%),其中 AI 半导体 \$10.8B(+143%)、季内 bookings >\$30B;non-GAAP EPS \$2.44(beat \$2.40)、non-GAAP 毛利率 77%、FCF \$10.3B(46% of rev)。软件 \$7.2B(+9%)已变成慢增长年金(VMware 阶梯效应年化完毕),故事彻底集中到 AI 半导体(占半导体营收 72%)。优点:变现已兑现(非 capex beta)、FCF/毛利质量碾压 ARM/MRVL/DELL;缺点:单一引擎 + 客户高度集中(Google TPU/Meta/字节,传闻 OpenAI·Anthropic)。财报后盘后从正股收盘 \$481 暴跌至 ~\$414(-14%,相对前一日 \$495 累计 -16%),但定性为"估值消化"非"故事破裂":三个利空(见 INVALIDATION/CATALYSTS)全是预期/组合性质,无一条基本面恶化。处置纪律:持有核心仓;不加(已重仓 + 不为护 \$410 锚点摊低 —— 加仓唯一正当理由是价位本身 R/R,不是护锚点);若 10-20% 扛不住再 -10~15% 漂移,则在反弹中减一片回 ~10%(减在强里、不减在弱里)。
- CATALYSTS: Q3 FY26 指引营收 ~\$29.4B(+84% YoY)、AI 半导体 ~\$16.0B(+200% YoY),Q3 毛利率指引降至 ~74%(管理层称 AI 占比提高的组合稀释、非结构性);FY26 AI 重申 \$56B(~+180%)、FY27 重申 >\$100B;后续季度 AI bookings 增速、毛利率能否守住、单一大客户 XPU 订单兑现
- INVALIDATION: ① AI 半导体毛利率结构性下滑(非组合性,定制硅价格战坐实);② Q3/后续 AI 指引持续低于 whisper 成为趋势(本次 Q3 AI \$16B < 街口 whisper \$17.2B 是首例);③ FY27 \$100B AI 目标被下修(本次"维持未上调"已是盘后利空之一);④ 技术面:放量跌破 50 日线 \$392 + 分析师目标价集体下砍 = "消化转趋势"信号,重审核心仓是否留。软件 +9% 不算 invalidation(本就是年金腿)
- CONVICTION: high
- ENTRY_PRICE: ~\$410
- EXIT_PRICE:

### Conversation Log

- User: 研究一下 AVGO 最新财报
- Assistant: 拉 Q2 FY26(6/3 发布):总营收 \$22.2B(+48%)、AI 半导体 \$10.8B(+143%)、bookings >\$30B、non-GAAP EPS \$2.44 beat;Q3 指引营收 \$29.4B/AI \$16.0B;软件 +9% miss。初判 A 级财报但 priced-for-perfection
- User: 你再看看 AVGO 盘后的价格 → 不对,盘后我看跌了 -12%
- Assistant: 更正自己 —— fast_info 不反映盘后,prepost 逐笔才是;正股收盘 \$481 → 盘后 ~\$414 = -14%(我把 fast_info 的 -3% 误当成了盘后)。盘后崩 14% 不是获利了结,是电话会三个真实利空:① Q3 AI \$16B < whisper \$17.2B;② FY27 \$100B 维持未上调;③ Q3 毛利率指引降到 ~74%。定性:估值消化非故事破裂,基本面无瑕
- User: 我有持仓,成本 ~\$410,重仓 10-20%,今天开盘怎么操作
- Assistant: 重仓者结论 —— 不加(集中度已高 + 不护 \$410 锚点)、守核心仓、唯一主动是反弹中减压回 ~10%(减在强不减在弱);开盘别动手,看 30-60min 能否守 50 日线 \$392;放量破 \$392 + 分析师下调成片 = 重审线

---

## 2026-06-05 — Observation

- TICKER: AVGO
- THEMES: ai-infra, semiconductors
- WHAT: 深度技术调查(110-agent 研究 + 对抗验证 25 claim/6 条被证伪,再补两轮 web 搜索)证实 AVGO 在"最赚钱的环节"对 MRVL 有真实技术领先,非纯估值故事。逐维度代差:① 定制 ASIC 旗舰客户(~70% vs 20-25% 份额;Google TPU 7 代锁到 2031、Meta MTIA、OpenAI 10GW、字节全在 AVGO)= 大幅领先;② 以太网交换(Tomahawk 6 102.4T vs Teralynx 10 51.2T,MRVL 对标 102.4T 的 T100 晚到 2026-06)= ~1 代/~1 年;③ 量产 CPO(Bailly/Humboldt,唯一已量产)= 独有;④ 3.5D 封装上限(>6000mm²/12 HBM/F2F 比 F2B 信号密度 7×,2026-02 量产)= 更高且已部署。但 ⑤ SerDes(224G)已收窄到各执一词、非单方面领先;⑥ 制程获取(N2)平手。
- WHY_IT_MATTERS: 把 6/4 AVGO Thesis 的"变现质量最高的旗手"从财务证据(77% 毛利、AI \$10.8B/+143%)补到技术证据 —— 领先集中在 backlog 与毛利最厚的环节(旗舰定制硅 + 交换 + CPO),不是营销叙事。一线印证反直觉但强化命题:技术领先方 AVGO 口碑反而更差(Glassdoor 3.3★/50% 愿推荐/WLB 3.1、Hock Tan 收购 VMware 裁 ~19,000、强制返岗),但用顶薪(湾区 ASIC 工程师中位 ~\$500K vs MRVL ~\$208K)+ AVGO 股票把最高密度人才绑成执行机器 —— 残酷文化是这台机器的副产品而非 bug。证据 caveat:技术规格多来自厂商一手 PR(营销超级词已被对抗验证标为厂商定位、非中立实测),无独立第三方 SerDes 良率/功耗 benchmark;一线 verbatim 多在 Blind 验证墙后,口碑用 Glassdoor/Blind 聚合评分 + Levels.fyi 薪酬代理。STANCE 不变(long/high),本条是对既有 Thesis 的技术面加固。
- RELATED_THEMES: ai-infra, semiconductors
- RELATED_TICKERS: MRVL(对比对象,窄幅落后+宽幅紧追,光 DSP 一条腿当下反领先), NVDA(自己也是 CPO 交换龙头,搅局"AVGO 赢光互联=单一赢家"逻辑), GOOGL(TPU 旗舰客户,锁 2031 但 v7 Ironwood 已拉进 MediaTek 双 chiplet 去单一化), GLW/COHR/LITE(AI 光链,CPO 路线相关)

### Conversation Log

- User: 对比 AVGO 和 MRVL 的技术路线与真实技术水平,详尽调查,最好含一线工程师反馈
- Assistant: 跑 110-agent 深度研究 + 对抗验证(25 claim,6 条被证伪),再补两轮 web 搜索填补"定制硅客户分配"与"一线工程师反馈"两个验证缺口
- Assistant: AVGO 在最赚钱环节真领先 —— 定制硅旗舰客户 ~70% 份额(Google/Meta/OpenAI/字节)、交换 ~1 代(TH6 102.4T)、唯一量产 CPO、封装上限更高;SerDes 已收窄、制程平手
- Assistant: 反直觉一线发现 —— 技术领先方 AVGO 口碑反更差(3.3★/50% 推荐、Hock Tan 残酷裁员),但顶薪(~\$500K)+ AVGO 股票绑顶级人才成执行机器;caveat:规格多来自厂商 PR、无独立 SerDes 实测
- User: /commit-invest(记为两条 Observation:AVGO + MRVL)
