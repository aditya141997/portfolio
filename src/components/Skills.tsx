import SectionHeading from "./SectionHeading";

const groups = [
  {
    domain: "LLM & Agentic Systems",
    items: [
      "LangGraph",
      "Multi-agent orchestration",
      "RAG pipelines",
      "MCP / FastMCP",
      "Prompt & context engineering",
      "LangSmith",
    ],
  },
  {
    domain: "Retrieval & Data Infra",
    items: [
      "Qdrant",
      "pgvector",
      "BGE-M3 embeddings",
      "sentence-transformers",
      "PostgreSQL",
      "Hybrid search",
    ],
  },
  {
    domain: "Computer Vision & Medical AI",
    items: [
      "PyTorch",
      "EfficientNet / ConvNeXt / Swin-T",
      "U-Net / Attention U-Net / DeepLabV3+",
      "DICOM ingestion",
      "OpenCV",
      "Echocardiography analysis",
    ],
  },
  {
    domain: "MLOps & Fine-tuning",
    items: [
      "LoRA / QLoRA (PEFT, Unsloth)",
      "MLflow",
      "Prometheus + Grafana",
      "Docker",
      "FastAPI",
      "Air-gapped / on-prem deployment",
    ],
  },
  {
    domain: "Privacy & Compliance",
    items: [
      "PII/PHI de-identification (NER ensembles)",
      "K-anonymity enforcement",
      "Fernet vault encryption",
      "21 CFR Part 11 audit logging",
      "E2B(R3) ICSR standards",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="// Stack" title="Tools, by domain" />

      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.domain}
            className="border border-hairline bg-panel/40 p-6"
          >
            <h3 className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent-cyan">
              {g.domain}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-hairline-bright px-2.5 py-1 text-[13px] text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
