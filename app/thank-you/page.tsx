export default function ThankYouPage() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-12 text-center shadow-2xl backdrop-blur">
          
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Subscription Confirmed
          </div>
  
          <h1 className="mb-6 text-5xl font-bold tracking-tight">
            Thank You for Subscribing
          </h1>
  
          <p className="mb-10 text-xl leading-relaxed text-slate-300">
            Please check your inbox and confirm your email subscription.
            Future insights on CAR-T manufacturing, tech transfer strategy,
            LVV industrialization, and AI-enabled CMC operations will be
            delivered directly to your inbox.
          </p>
  
          <a
            href="/"
            className="inline-flex rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Return to Homepage
          </a>
        </div>
      </main>
    );
  }