const nodes = [
  { x: 620, label: "INGEST" },
  { x: 760, label: "RETRIEVE" },
  { x: 900, label: "EXTRACT" },
  { x: 1040, label: "VALIDATE" },
  { x: 1180, label: "DEDUPE" },
  { x: 1320, label: "OUTPUT" },
];

const tracePath =
  "M0,110 L60,110 L80,55 L100,165 L120,85 L140,110 L200,110 L220,55 L240,165 L260,85 L280,110 L340,110 L360,55 L380,165 L400,85 L420,110 L560,110 L620,110 L760,110 L900,110 L1040,110 L1180,110 L1320,110 L1380,110";

export default function SignalTrace() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1400 220"
        preserveAspectRatio="xMidYMid meet"
        className="w-full"
        role="img"
        aria-label="Diagram: cardiac signal waveform transitioning into a six-stage AI agent pipeline (Ingest, Retrieve, Extract, Validate, Dedupe, Output)"
      >
        <text
          x="150"
          y="34"
          className="font-mono"
          fontSize="13"
          letterSpacing="1.5"
          fill="var(--accent-amber)"
        >
          CARDIAC SIGNAL
        </text>
        <text
          x="880"
          y="34"
          className="font-mono"
          fontSize="13"
          letterSpacing="1.5"
          fill="var(--accent-amber)"
        >
          6-AGENT ORCHESTRATION
        </text>

        <path
          d={tracePath}
          fill="none"
          stroke="var(--accent-cyan)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="trace-draw"
        />

        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy="110"
              r="6"
              fill="var(--bg)"
              stroke="var(--accent-cyan)"
              strokeWidth="2"
              className="node-pulse"
              style={{ animationDelay: `${2.4 + i * 0.25}s` }}
            />
            <text
              x={n.x}
              y="150"
              textAnchor="middle"
              className="font-mono"
              fontSize="11"
              letterSpacing="1"
              fill="var(--text-secondary)"
            >
              {n.label}
            </text>
          </g>
        ))}

        <circle r="4" fill="var(--accent-amber)">
          <animateMotion
            dur="7s"
            begin="2.4s"
            repeatCount="indefinite"
            path={tracePath}
          />
        </circle>
      </svg>
    </div>
  );
}
