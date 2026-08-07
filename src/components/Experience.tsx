import SectionHeading from "./SectionHeading";

type Role = {
  period: string;
  company: string;
  title: string;
  points: string[];
};

// NOTE: fill in exact TCS dates/title — placeholders marked below.
const roles: Role[] = [
  {
    period: "Mar 2024 — Present",
    company: "Topia Pharma Intelligence Pvt. Ltd.",
    title: "Senior Data Scientist · AI/ML Engineer",
    points: [
      "Architecting SafePHV, a six-agent LangGraph pharmacovigilance pipeline with hybrid retrieval, PII/PHI masking, and E2B(R3)-ready ICSR output",
      "Building Cardiac_AI, an echocardiography pipeline covering view classification, LV segmentation, and ejection-fraction calculation",
      "Owning production MLOps: LangSmith/MLflow tracing, PostgreSQL + pgvector storage, and 21 CFR Part 11 audit logging",
    ],
  },
  {
    period: "TCS — Feb 2021 — Jun 2023", // TODO: replace with exact tenure
    company: "Tata Consultancy Services",
    title: "System Engineer · Data Scientist",
    points: [
      "TODO — add 2–3 concrete points on scope, systems owned, and measurable outcomes",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="// Experience" title="4.5+ years, two roles" />

      <div className="flex flex-col">
        {roles.map((r, i) => (
          <div
            key={r.company}
            className="grid gap-3 border-t border-hairline py-8 sm:grid-cols-[160px_1fr] sm:gap-8"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-cyan">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 font-mono text-[13px] text-text-tertiary">
                {r.period}
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-text-primary">
                {r.company}
              </h3>
              <p className="mt-0.5 text-sm text-text-secondary">{r.title}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {r.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2.5 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
