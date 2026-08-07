export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-hairline pb-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
