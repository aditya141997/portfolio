export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="corner-frame border border-hairline bg-panel/50 p-10 sm:p-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
          // Status
        </p>
        <p className="mt-2 font-mono text-[13px] text-accent-amber">
          OPEN TO SENIOR AI/ML ENGINEER ROLES AND SR. DATA SCIENTIST ROLES. FEEL FREE TO REACH OUT FOR COLLABORATION OR OPPORTUNITIES.
        </p>

        <h2 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
          Building the next production system — let&apos;s talk.
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {/* TODO: replace with your real email address */}
          <a
            href="mailto:daveaditya786@gmail.com"
            className="rounded-sm bg-accent-cyan px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-bg transition-opacity hover:opacity-85"
          >
            daveaditya786@gmail.com
          </a>
          {/* TODO: replace with your real LinkedIn URL */}
          <a
            href="https://linkedin.com/in/aditya-dave-a1487110a"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-hairline-bright px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aditya141997"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-hairline-bright px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
