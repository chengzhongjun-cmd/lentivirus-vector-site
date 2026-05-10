export default function NewsletterSignup() {
  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            CGT Industry Intelligence
          </div>

          <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight">
            Subscribe to CGT Industrialization Intelligence
          </h2>

          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-300">
            Practical insights on CAR-T manufacturing, lentiviral vector
            industrialization, tech transfer strategy, CDMO management, and
            AI-enabled CMC operations.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "CAR-T Manufacturing",
              "LVV Industrialization",
              "Tech Transfer",
              "CDMO Strategy",
              "AI-CMC",
              "CGT Operations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-400">
            No spam. High-signal industry insights only.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white p-8 shadow-2xl">
          <h3 className="mb-3 text-3xl font-bold text-slate-950">
            Join the Newsletter
          </h3>

          <p className="mb-6 leading-relaxed text-slate-600">
            Receive new articles and operator-focused analysis directly in your
            inbox.
          </p>

          <form
            action="https://app.kit.com/forms/9425467/subscriptions"
            method="post"
            target="_blank"
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Name (Optional)
              </label>

              <input
                type="text"
                name="fields[first_name]"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-slate-950 outline-none transition focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email_address"
                required
                placeholder="you@company.com"
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-slate-950 outline-none transition focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Brief Message (Optional)
              </label>

              <textarea
                name="fields[message]"
                rows={5}
                placeholder="Questions, collaboration ideas, or topics you'd like covered..."
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-slate-950 outline-none transition focus:border-cyan-500"
              />
            </div>

            <input
              type="hidden"
              name="utm_source"
              value="lentivirusvector.com"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-950 px-6 py-4 text-lg font-semibold text-white transition hover:bg-slate-800"
            >
              Get Weekly Insights
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}