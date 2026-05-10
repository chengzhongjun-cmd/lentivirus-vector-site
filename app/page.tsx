"use client";

import { useMemo, useState } from "react";
import NewsletterSignup from "@/components/NewsletterSignup";

type Lang = "en" | "zh";

type Insight = {
  title: string;
  tag: string;
  link: string;
  status: "live" | "coming-soon";
  readTime: string;
};

function validateInsights(insights: readonly Insight[]) {
  return insights.every(
    (insight) =>
      typeof insight.title === "string" &&
      insight.title.length > 0 &&
      typeof insight.tag === "string" &&
      insight.tag.length > 0 &&
      typeof insight.link === "string" &&
      insight.link.startsWith("/") &&
      (insight.status === "live" || insight.status === "coming-soon")
  );
}

export default function LentivirusVectorMVP() {
  const [lang, setLang] = useState<Lang>("en");

  const copy = {
    en: {
      nav: {
        intelligence: "Blog",
        lifecycle: "Frameworks",
        toolbox: "Toolbox",
        perspective: "Perspective",
        
        book: "Get Industry Insights",
      },
      hero: {
        badge: "Blog Platform • LVV • In Vivo CAR-T • CMC • AI-CMC",
        title:
          "A Blog Platform for CGT Industrialization Intelligence.",
        subtitle:
          "LentivirusVector.com publishes operator-informed analysis on CAR-T manufacturing, lentiviral vector manufacturing, tech transfer strategy, CDMO management, AI-CMC, and CGT industrialization.",
        primary: "Read Latest Articles",
        secondary: "Explore Frameworks",
        mapTitle: "What This Blog Covers",
        mapBadge: "Industry Intelligence",
      },
      gapSteps: [
        ["Manufacturing Reality", "How scientific promise becomes operational complexity"],
        ["CMC Strategy", "How teams balance speed, process understanding, and risk"],
        ["Tech Transfer", "Where knowledge, execution, and CDMO alignment are tested"],
        ["AI-CMC", "How AI may reshape documentation, quality operations, and decision support"],
      ],
      positioning: {
        title: "Not Just Commentary — Structured CGT Industrialization Analysis.",
        body:
          "This blog is designed as an industry intelligence platform for readers who want more than headlines. It focuses on the operational layer where process development, CMC strategy, tech transfer, CDMO execution, regulatory risk, and business feasibility intersect.",
        cards: [
          ["Deep-Dive Articles", "Long-form analysis on CAR-T manufacturing, LVV manufacturing, QbD, tech transfer, and CGT execution risk."],
          ["Decision Frameworks", "Reusable mental models for CMC leaders, founders, investors, and advanced therapy operators."],
          ["AI-CMC Lens", "Practical discussion of how AI may support documentation, quality operations, and industrialization workflows."],
        ],
      },
      blogTitle: "Latest Articles",
      blogSubtitle:
        "Flagship essays and practical frameworks for cell and gene therapy leaders.",
      categories: [
        "Tech Transfer",
        "CMC Strategy",
        "LVV Manufacturing",
        "CAR-T Manufacturing",
        "CDMO Management",
        "AI-CMC",
        "CGT Industrialization",
      ],
      lifecycleTitle: "Core Blog Frameworks",
      lifecycleSubtitle:
        "The platform organizes content around recurring decision points in advanced therapy development.",
      lifecycleModules: [
        {
          stage: "01",
          title: "Strategy & Market Intelligence",
          subtitle: "Macro lens for founders, CMC heads, and investors",
          problem:
            "CGT programs often look promising scientifically but fail because manufacturing feasibility is underestimated.",
          solution:
            "Analyze publicly discussed LVV and in vivo CAR-T trends through manufacturing scalability, operational readiness, and strategic execution lenses.",
          takeaway:
            "A strong therapeutic concept is only investable if the manufacturing path can survive scale-up.",
        },
        {
          stage: "02",
          title: "CMC & Process Engineering",
          subtitle: "From lab-scale innovation to robust production",
          problem:
            "LVV processes are sensitive to upstream conditions, harvest timing, downstream recovery, and analytical variability.",
          solution:
            "Map USP/DSP risks, KQAs, KPPs, stability profiles, and process characterization priorities.",
          takeaway:
            "Industrialization begins before Phase III. The earlier the control strategy is built, the lower the late-stage risk.",
        },
        {
          stage: "03",
          title: "Industrialization & AI",
          subtitle: "Modern tech transfer, CDMO oversight, and quality operations",
          problem:
            "Tech transfer failures often come from unclear process knowledge, fragmented documentation, and weak risk governance.",
          solution:
            "Explore generalized templates, AI-assisted documentation concepts, operational governance models, and educational quality-system frameworks.",
          takeaway:
            "AI may help accelerate documentation workflows, investigation support, and operational efficiency across CMC organizations.",
        },
      ],
      labels: {
        problem: "Problem",
        solution: "Solution",
        takeaway: "Strategic Takeaway",
        gated: "Gated",
        prototype: "Prototype",
        riskFactor: "Risk Factor",
        score: "Score",
        impact: "Business Impact",
        requestMatrix: "Request Educational Toolkit",
        search: "Search articles...",
        read: "Read Article →",
        comingSoon: "Coming Soon",
      },
      toolboxTitle: "Downloadable Frameworks & Future Tools",
      toolboxBody:
        "Educational templates and generalized frameworks designed to help biotech professionals think systematically about manufacturing and operational challenges.",
      toolbox: [
        "LVV Tech Transfer Readiness Checklist",
        "CDMO Due Diligence Scorecard",
        "CMC Risk Assessment Matrix",
        "Process Characterization Study Plan",
        "AI-CMC Documentation Workflow Template",
      ],
      riskTitle: "CMC Risk Scoring Demo",
      riskRows: [
        { risk: "USP scale-up variability", score: "High", impact: "Titer, potency, batch consistency" },
        { risk: "Harvest window uncertainty", score: "Medium", impact: "Vector yield and impurity profile" },
        { risk: "DSP recovery loss", score: "High", impact: "COGS and commercial feasibility" },
        { risk: "Analytical method maturity", score: "High", impact: "Comparability and release confidence" },
      ],
      insights: [
        {
          title: "The Cost of Failure: How Poor Tech Transfer Destroys CAR-T Startups",
          tag: "Tech Transfer",
          link: "/articles/tech-transfer-destroys-car-t-startups",
          status: "live",
          readTime: "12 min read",
        },
        {
          title: "QbD vs. Speed: Finding the Phase I/II CMC Sweet Spot",
          tag: "CMC Strategy",
          link: "/articles/qbd-vs-speed",
          status: "live",
          readTime: "18 min read",
        },
        {
          title: "Why LVV Remains the Backbone for In Vivo CAR-T",
          tag: "Market Intelligence",
          link: "/articles/why-lvv-remains-backbone-in-vivo-car-t",
          status: "coming-soon",
          readTime: "Coming soon",
        },
        {
          title: "The AI Advantage in Quality Operations and CMC Documentation",
          tag: "AI + CMC",
          link: "/articles/ai-advantage-quality-cmc-documentation",
          status: "coming-soon",
          readTime: "Coming soon",
        },
      ] satisfies readonly Insight[],
      insightBody:
        "Educational analysis combining publicly discussed process science, manufacturing strategy, AI-enabled workflows, and operational lessons across the CGT ecosystem.",
      perspective: {
        eyebrow: "Operator Perspective",
        title: "Built from the Operational Reality of Cell & Gene Therapy",
        paragraphs: [
          "LentivirusVector.com focuses on the industrialization layer of advanced therapies — where process development, manufacturing execution, analytical science, tech transfer, CDMO strategy, and operational scalability intersect.",
          "The platform is informed by hands-on experience across lentiviral vector manufacturing, CMC operations, technology transfer, process risk assessment, and cross-functional execution within cell and gene therapy.",
          "Many CGT programs fail not because the biology lacks promise, but because the industrialization path is underestimated.",
          "This platform exists to analyze those hidden operational realities: scaling challenges, analytical bottlenecks, transfer failures, manufacturing strategy, and the growing role of AI in CMC operations.",
        ],
        quote: ["Scientific innovation creates possibility.", "Industrialization determines survivability."],
        tags: [
          "CAR-T Manufacturing",
          "Lentiviral Vector Manufacturing",
          "Tech Transfer Strategy",
          "CDMO Management",
          "CGT Industrialization",
          "AI-CMC",
        ],
      },
      
    },
    zh: {
      nav: {
        intelligence: "博客",
        lifecycle: "框架",
        toolbox: "工具箱",
        perspective: "运营视角",
        
        book: "订阅行业洞察",
      },
      hero: {
        badge: "博客平台 • 慢病毒载体 • 体内 CAR-T • CMC • AI-CMC",
        title: "面向 CGT 产业化的博客型行业情报平台。",
        subtitle:
          "LentivirusVector.com 发布关于 CAR-T 制造、慢病毒载体制造、技术转移策略、CDMO 管理、AI-CMC 和 CGT 产业化的运营型分析。",
        primary: "阅读最新文章",
        secondary: "查看框架",
        mapTitle: "本博客关注什么",
        mapBadge: "产业情报",
      },
      gapSteps: [
        ["制造现实", "科学前景如何转化为运营复杂性"],
        ["CMC 策略", "团队如何平衡速度、工艺理解和风险"],
        ["技术转移", "知识、执行和 CDMO 协同被真正检验的环节"],
        ["AI-CMC", "AI 如何重塑文件、质量运营和决策支持"],
      ],
      positioning: {
        title: "不只是评论，而是结构化的 CGT 产业化分析。",
        body:
          "本博客面向希望超越新闻标题的读者，聚焦工艺开发、CMC 策略、技术转移、CDMO 执行、法规风险与商业可行性交汇的运营层面。",
        cards: [
          ["深度文章", "围绕 CAR-T 制造、LVV 制造、QbD、技术转移和 CGT 执行风险的长文分析。"],
          ["决策框架", "面向 CMC 领导者、创始人、投资人和先进疗法运营者的可复用思维模型。"],
          ["AI-CMC 视角", "讨论 AI 如何支持文件、质量运营和产业化工作流。"],
        ],
      },
      blogTitle: "最新文章",
      blogSubtitle:
        "面向细胞与基因治疗领导者的旗舰文章和实用框架。",
      categories: [
        "技术转移",
        "CMC 策略",
        "LVV 制造",
        "CAR-T 制造",
        "CDMO 管理",
        "AI-CMC",
        "CGT 产业化",
      ],
      lifecycleTitle: "核心博客框架",
      lifecycleSubtitle:
        "本平台围绕先进疗法开发中的关键决策点组织内容。",
      lifecycleModules: [
        {
          stage: "01",
          title: "战略与市场情报",
          subtitle: "面向创始人、CMC 负责人和投资人的宏观视角",
          problem:
            "许多 CGT 项目科学上很有吸引力，但因为低估制造可行性而失败。",
          solution:
            "从制造可放大性、运营准备度和战略执行角度分析公开讨论的 LVV 与体内 CAR-T 趋势。",
          takeaway:
            "治疗概念再强，如果制造路径无法承受放大压力，也难以真正具备投资价值。",
        },
        {
          stage: "02",
          title: "CMC 与工艺工程",
          subtitle: "从实验室创新走向稳健生产",
          problem:
            "LVV 工艺对上游条件、收获窗口、下游回收率和分析方法变异非常敏感。",
          solution:
            "系统梳理 USP/DSP 风险、KQA、KPP、稳定性特征和工艺表征优先级。",
          takeaway:
            "产业化不是 III 期才开始。控制策略越早建立，后期风险越低。",
        },
        {
          stage: "03",
          title: "产业化与 AI",
          subtitle: "现代技术转移、CDMO 管理和质量运营",
          problem:
            "技术转移失败常常来自工艺知识不清晰、文件碎片化和风险治理薄弱。",
          solution:
            "探索通用模板、AI 辅助文件概念、运营治理模型和教育型质量体系框架。",
          takeaway:
            "AI 可以帮助加速 CMC 文件、调查支持和运营效率，但不能替代 CMC 判断。",
        },
      ],
      labels: {
        problem: "问题",
        solution: "解决方案",
        takeaway: "战略启示",
        gated: "需注册",
        prototype: "原型",
        riskFactor: "风险因素",
        score: "评分",
        impact: "业务影响",
        requestMatrix: "申请教育工具包",
        search: "搜索文章...",
        read: "阅读全文 →",
        comingSoon: "即将发布",
      },
      toolboxTitle: "可下载框架与未来工具",
      toolboxBody:
        "帮助生物技术专业人士系统思考制造和运营挑战的教育模板与通用框架。",
      toolbox: [
        "LVV 技术转移准备度清单",
        "CDMO 尽调评分表",
        "CMC 风险评估矩阵",
        "工艺表征研究计划模板",
        "AI-CMC 文件工作流模板",
      ],
      riskTitle: "CMC 风险评分演示",
      riskRows: [
        { risk: "上游放大变异", score: "高", impact: "滴度、效力、批次一致性" },
        { risk: "收获窗口不确定", score: "中", impact: "载体产量和杂质谱" },
        { risk: "下游回收率损失", score: "高", impact: "COGS 与商业化可行性" },
        { risk: "分析方法成熟度不足", score: "高", impact: "可比性与放行信心" },
      ],
      insights: [
        {
          title: "失败的成本：糟糕的技术转移如何摧毁 CAR-T 创业公司",
          tag: "技术转移",
          link: "/articles/tech-transfer-destroys-car-t-startups",
          status: "live",
          readTime: "12 分钟阅读",
        },
        {
          title: "QbD 与速度：I/II 期 CMC 的最佳平衡点",
          tag: "CMC 策略",
          link: "/articles/qbd-vs-speed",
          status: "live",
          readTime: "18 分钟阅读",
        },
        {
          title: "为什么 LVV 仍然是体内 CAR-T 的关键基础设施",
          tag: "市场情报",
          link: "/articles/why-lvv-remains-backbone-in-vivo-car-t",
          status: "coming-soon",
          readTime: "即将发布",
        },
        {
          title: "AI 在质量运营和 CMC 文件中的优势",
          tag: "AI + CMC",
          link: "/articles/ai-advantage-quality-cmc-documentation",
          status: "coming-soon",
          readTime: "即将发布",
        },
      ] satisfies readonly Insight[],
      insightBody:
        "结合公开讨论的工艺科学、制造策略、AI 工作流和 CGT 运营经验的教育型分析。",
      perspective: {
        eyebrow: "运营视角",
        title: "来自细胞与基因治疗产业化现场的观察",
        paragraphs: [
          "LentivirusVector.com 聚焦先进疗法的产业化层面：工艺开发、生产执行、分析科学、技术转移、CDMO 策略和运营可放大性交汇的地方。",
          "本平台受到慢病毒载体制造、CMC 运营、技术转移、工艺风险评估和细胞基因治疗跨职能执行经验的启发。",
          "许多 CGT 项目失败，并不是因为生物学缺乏前景，而是因为产业化路径被低估。",
          "本平台旨在分析这些隐藏的运营现实：放大挑战、分析瓶颈、转移失败、制造策略，以及 AI 在 CMC 运营中的作用。",
        ],
        quote: ["科学创新创造可能性。", "产业化能力决定生存力。"],
        tags: [
          "CAR-T 制造",
          "慢病毒载体制造",
          "技术转移策略",
          "CDMO 管理",
          "CGT 产业化",
          "AI-CMC",
        ],
      },
      
    },
  } as const;

  const t = copy[lang];

  const insightsAreValid = useMemo(() => validateInsights(t.insights), [t.insights]);
  const featuredArticle = t.insights[0];
  const secondaryArticles = t.insights.slice(1);

  if (!insightsAreValid) {
    return (
      <div className="min-h-screen bg-slate-50 p-8 text-slate-950">
        <h1 className="mb-4 text-3xl font-bold">Configuration Error</h1>
        <p className="text-lg text-slate-700">
          One or more article cards are missing a valid link. Each article must include a link starting with "/".
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="font-bold tracking-tight">LentivirusVector.com</div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#blog" className="hover:text-slate-950">
              {t.nav.intelligence}
            </a>
            <a href="#lifecycle" className="hover:text-slate-950">
              {t.nav.lifecycle}
            </a>
            <a href="#toolbox" className="hover:text-slate-950">
              {t.nav.toolbox}
            </a>
            <a href="#perspective" className="hover:text-slate-950">
              {t.nav.perspective}
            </a>
            
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              {lang === "en" ? "中文" : "English"}
            </button>
            <a
              href="#newsletter"
              className="hidden rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 sm:block"
            >
              {t.nav.book}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-96 w-96 rounded-full bg-blue-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
              {t.hero.badge}
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#newsletter"
                className="rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-slate-800"
              >
                {t.hero.primary}
              </a>
              <a
                href="#newsletter"
                className="rounded-2xl border bg-white px-7 py-4 font-semibold text-slate-950 shadow-sm hover:bg-slate-50"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-950 p-8 text-white shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{t.hero.mapTitle}</h2>
              <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-sm text-cyan-200">
                {t.hero.mapBadge}
              </span>
            </div>
            <div className="space-y-5">
              {t.gapSteps.map(([step, text]) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-1 font-semibold">{step}</div>
                  <div className="text-sm leading-relaxed text-slate-300">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="mb-3 text-4xl font-bold tracking-tight">{t.blogTitle}</h2>
              <p className="text-lg text-slate-600">{t.blogSubtitle}</p>
            </div>
            <input className="w-72 rounded-2xl border px-5 py-3" placeholder={t.labels.search} />
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {t.categories.map((category) => (
              <span key={category} className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                {category}
              </span>
            ))}
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
  {/* Featured Article */}
  <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
        {featuredArticle.tag}
      </span>
      <span className="text-sm text-slate-500">{featuredArticle.readTime}</span>
    </div>

    <h3 className="mb-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950">
      {featuredArticle.title}
    </h3>

    <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600">
      {t.insightBody}
    </p>

    <div className="mb-8 grid gap-3 sm:grid-cols-2">
      {["Tech Transfer", "CAR-T Manufacturing", "LVV", "CGT Industrialization"].map(
        (item) => (
          <span
            key={item}
            className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        )
      )}
    </div>

    <a
      href={featuredArticle.link}
      className="inline-flex rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
    >
      {t.labels.read}
    </a>
  </article>

  {/* Article List */}
  <div className="grid gap-5">
    {secondaryArticles.map((insight) => (
      <article
        key={insight.title}
        className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition ${
          insight.status === "live"
            ? "hover:-translate-y-1 hover:shadow-lg"
            : "opacity-75"
        }`}
      >
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {insight.tag}
          </span>
          <span className="text-xs font-medium text-slate-500">
            {insight.readTime}
          </span>
        </div>

        <h3 className="mb-4 text-2xl font-bold leading-snug text-slate-950">
          {insight.title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-slate-600">
          {t.insightBody}
        </p>

        {insight.status === "live" ? (
          <a
            href={insight.link}
            className="font-semibold text-slate-950 hover:underline"
          >
            {t.labels.read}
          </a>
        ) : (
          <span className="font-semibold text-slate-400">
            {t.labels.comingSoon}
          </span>
        )}
      </article>
    ))}
  </div>
</div>
        </div>
      </section>

      <section id="intelligence" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">{t.positioning.title}</h2>
            <p className="text-lg leading-relaxed text-slate-600">{t.positioning.body}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.positioning.cards.map(([item, body], idx) => (
              <div key={item} className="rounded-3xl border bg-slate-50 p-8 shadow-sm">
                <div className="mb-4 text-sm font-semibold text-cyan-700">0{idx + 1}</div>
                <h3 className="mb-3 text-2xl font-semibold">{item}</h3>
                <p className="leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lifecycle" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">{t.lifecycleTitle}</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">{t.lifecycleSubtitle}</p>
          </div>

          <div className="grid gap-8">
            {t.lifecycleModules.map((module) => (
              <div key={module.stage} className="grid gap-6 rounded-3xl border bg-slate-50 p-8 shadow-sm md:grid-cols-[120px_1fr]">
                <div className="text-5xl font-bold text-slate-300">{module.stage}</div>
                <div>
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-700">
                    {module.subtitle}
                  </div>
                  <h3 className="mb-6 text-3xl font-bold">{module.title}</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-white p-5">
                      <div className="mb-2 font-semibold text-red-700">{t.labels.problem}</div>
                      <p className="text-sm leading-relaxed text-slate-600">{module.problem}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-5">
                      <div className="mb-2 font-semibold text-blue-700">{t.labels.solution}</div>
                      <p className="text-sm leading-relaxed text-slate-600">{module.solution}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-5">
                      <div className="mb-2 font-semibold text-emerald-700">{t.labels.takeaway}</div>
                      <p className="text-sm leading-relaxed text-slate-600">{module.takeaway}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="toolbox" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight">{t.toolboxTitle}</h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">{t.toolboxBody}</p>
            <div className="space-y-4">
              {t.toolbox.map((tool) => (
                <div key={tool} className="flex items-center justify-between rounded-2xl border bg-white p-5 shadow-sm">
                  <span className="font-medium">{tool}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {t.labels.gated}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">{t.riskTitle}</h3>
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                {t.labels.prototype}
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="p-4">{t.labels.riskFactor}</th>
                    <th className="p-4">{t.labels.score}</th>
                    <th className="p-4">{t.labels.impact}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.riskRows.map((row) => (
                    <tr key={row.risk} className="border-t bg-white">
                      <td className="p-4 font-medium">{row.risk}</td>
                      <td className="p-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
                          {row.score}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-6 w-full rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800">
              {t.labels.requestMatrix}
            </button>
          </div>
        </div>
      </section>

      <section id="perspective" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-slate-50 p-10 shadow-sm">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-700">
            {t.perspective.eyebrow}
          </div>

          <h2 className="mb-6 text-5xl font-bold tracking-tight text-slate-950">
            {t.perspective.title}
          </h2>

          <div className="space-y-6 text-lg leading-8 text-slate-700">
            {t.perspective.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <blockquote className="border-l-4 border-slate-900 pl-6 text-2xl font-semibold leading-10 text-slate-900">
              {t.perspective.quote[0]}
              <br />
              {t.perspective.quote[1]}
            </blockquote>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {t.perspective.tags.map((tag) => (
              <span key={tag} className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSignup />
      </div>
  );
}
