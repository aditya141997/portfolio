const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-text-primary"
        >
          ADITYA<span className="text-accent-cyan">.</span>AI
        </a>
        <nav className="flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary transition-colors hover:text-accent-cyan"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm border border-hairline-bright px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
