import SectionHeading from "./SectionHeading";

type Project = {
  tag: string;
  title: string;
  summary: string;
  description: string;
  details: string[];
  stack: string[];
  link?: string; // GitHub repo or write-up URL — add once published
};

// Add `link: "https://github.com/aditya141997/<repo-name>"` to a project
// below once you've published a sanitized version — a "View repo ↗" link
// will appear on that card automatically.
const projects: Project[] = [
  {
    tag: "PHARMACOVIGILANCE · MULTI-AGENT RAG",
    title: "SafePHV",
    summary:
      "A six-agent LangGraph pipeline that turns adverse event reports into audit-ready ICSR submissions.",
    description:
      "SafePHV ingests case data from EVWEB RTF and MHRA PDF sources, routes it through a six-agent LangGraph orchestration, and outputs E2B(R3)-ready ICSR records. The system is built for regulated, air-gapped deployment: every stage — retrieval, extraction, deduplication, PII/PHI masking, and human-in-the-loop review — is traceable and reversible under audit.",
    details: [
      "Hybrid retrieval on BGE-M3 embeddings + Qdrant, tuned for biomedical recall",
      "Three-tier PII/PHI masking: regex → spaCy → clinical de-identification transformer",
      "K-anonymity enforcement (k≥5) with Fernet vault encryption at rest",
      "Pydantic v2 ICSR models with a dedicated merge agent for structured extraction",
      "PostgreSQL + pgvector storage, LangSmith tracing, 21 CFR Part 11 audit logging",
    ],
    stack: ["LangGraph", "Qdrant", "BGE-M3", "spaCy", "PostgreSQL", "LangSmith", "FastAPI"],
  },
  {
    tag: "MEDICAL COMPUTER VISION · ECHOCARDIOGRAPHY",
    title: "Cardiac_AI",
    summary:
      "An end-to-end echo pipeline that classifies views, segments the left ventricle, and computes ejection fraction.",
    description:
      "Cardiac_AI is a medallion-architecture pipeline for echocardiography: raw DICOM in, clinically usable ejection-fraction estimates out. View classification and LV segmentation each run as model ensembles, cross-checked against four public cardiac ultrasound datasets to keep the pipeline robust across scanners and populations.",
    details: [
      "View classification ensemble: EfficientNet-B4, ConvNeXt-Small, Swin-T",
      "LV segmentation ensemble: 2D U-Net, Attention U-Net, DeepLabV3+",
      "Simpson's Biplane method for ejection-fraction calculation",
      "Four-model segmentation ensemble with a two-phase meta-learner across CAMUS, EchoNet-Dynamic, EchoNet-LVH, CardiacUDA",
      "DICOM ingestion with PHI anonymization and a Streamlit QA visualizer",
    ],
    stack: ["PyTorch", "Swin-UNet", "DICOM", "HDF5", "Streamlit", "OpenCV"],
  },
  {
    tag: "LLM FINE-TUNING · LLMOPS",
    title: "Clinical QA Fine-Tuning Pipeline",
    summary:
      "QLoRA fine-tuning of Llama-3.1-8B on PubMedQA with full production-style monitoring.",
    description:
      "A complete fine-tuning pipeline built to understand LoRA/QLoRA mechanics from first principles — the ΔW = B·A factorization, NF4 quantization, paged optimizers — and to wrap that training run in the same observability stack a production LLM service would need.",
    details: [
      "QLoRA fine-tuning via Unsloth/PEFT with NF4 quantization and paged optimizers",
      "MLflow experiment tracking alongside LangSmith evaluation tracing",
      "Prometheus + Grafana monitoring for training and inference metrics",
      "Dataset streaming split across Hugging Face Datasets and Kaggle notebooks for free-tier GPU training",
    ],
    stack: ["PEFT", "Unsloth", "MLflow", "Prometheus", "Grafana", "Hugging Face"],
  },
  {
    tag: "PHARMACOVIGILANCE · HYBRID RAG",
    title: "Pharma Chatbot",
    summary:
      "A hybrid FAISS + BM25 RAG chatbot over pharmacovigilance case reports, deployed live behind a full CI/CD pipeline.",
    description:
      "A conversational RAG system over adverse-event case report PDFs: parent/child chunking feeds semantic (FAISS) and keyword (BM25) retrieval, fused via Reciprocal Rank Fusion, with Gemini handling generation, structured extraction, and faithfulness checks. Shipped end-to-end — GitHub Actions CI/CD deploying to Render, re-architected twice mid-flight to fit a free-tier 512MB instance.",
    details: [
      "Parent/child chunking (paragraph parents, sentence children) with RRF-fused hybrid retrieval",
      "Local ONNX embeddings (fastembed, BAAI/bge-small-en-v1.5) — no torch, no external rate limits",
      "Precomputed embedding cache checked into the repo — index rebuilds in under a second instead of ~11 minutes",
      "Structured extraction into Pydantic ICSR-style schemas: patient, product, reaction, lab, summary",
      "RAGAS faithfulness + context-relevance scoring alongside an LLM-judged faithfulness check",
      "GitHub Actions CI (lint + build) → CD → Render, session-memory and single-shot FastAPI variants",
    ],
    stack: ["FastAPI", "FAISS", "BM25", "fastembed", "Gemini", "RAGAS", "GitHub Actions", "Render"],
    link: "https://github.com/aditya141997/pharma-chatbot",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="// Featured Work" title="Systems, not scripts" />

      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="corner-frame border border-hairline bg-panel/50 p-6 transition-colors hover:border-hairline-bright sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-amber">
                {p.tag}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary transition-colors hover:text-accent-cyan"
                >
                  View repo ↗
                </a>
              )}
            </div>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {p.title}
            </h3>
            <p className="mt-2 text-text-secondary">{p.summary}</p>

            <div className="mt-6 grid gap-8 border-t border-hairline pt-6 sm:grid-cols-[1.3fr_1fr]">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                {p.description}
              </p>
              <ul className="flex flex-col gap-2.5">
                {p.details.map((d) => (
                  <li
                    key={d}
                    className="flex gap-2.5 text-sm leading-snug text-text-secondary"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-hairline-bright px-2.5 py-1 font-mono text-[11px] tracking-wide text-text-tertiary"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
