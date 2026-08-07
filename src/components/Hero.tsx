import SignalTrace from "./SignalTrace";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="fade-up font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
          // Signal → Structure
        </p>

        <h1
          className="fade-up mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-7xl"
          style={{ animationDelay: "0.08s" }}
        >
          Aditya
        </h1>
        <p
          className="fade-up mt-4 max-w-2xl text-lg text-text-secondary sm:text-xl"
          style={{ animationDelay: "0.16s" }}
        >
          Senior Data Scientist &amp; AI/ML Engineer turning cardiac signal
          and clinical safety data into structured, production‑grade AI
          systems — multi‑agent RAG, LLMOps, and medical computer vision.
        </p>

        <div
          className="fade-up mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary"
          style={{ animationDelay: "0.22s" }}
        >
          <span>4.5+ YRS EXPERIENCE</span>
          <span className="text-hairline-bright">·</span>
          <span>AHMEDABAD, IN</span>
          <span className="text-hairline-bright">·</span>
          <span>PHARMACOVIGILANCE + CARDIAC AI</span>
        </div>

        <div
          className="fade-up mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#work"
            className="rounded-sm bg-accent-cyan px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-bg transition-opacity hover:opacity-85"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-hairline-bright px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-2 sm:px-6">
        <div className="corner-frame border border-hairline bg-panel/60 px-4 py-6 sm:px-8">
          <SignalTrace />
        </div>
      </div>
    </section>
  );
}
