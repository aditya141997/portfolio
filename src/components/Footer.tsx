export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary sm:flex-row">
        <span>© {new Date().getFullYear()} Aditya — Built with Next.js</span>
        <a href="#top" className="transition-colors hover:text-accent-cyan">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
