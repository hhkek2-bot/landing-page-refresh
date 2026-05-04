import { useEffect, useRef, useState, type ReactNode } from "react";
import "./sales-intelligence.css";

type Feature = {
  label: string;
  title: string;
  description: string;
  Visual: () => ReactNode;
  size: "sm" | "md" | "lg";
};

/* -------------------------------------------------------------------------- */
/* Visuals — one per feature, kept lightweight and on-brand                   */
/* -------------------------------------------------------------------------- */

const KnowledgeVisual = () => (
  <div className="si-visual si-visual-knowledge">
    <div className="si-doc si-doc-3" />
    <div className="si-doc si-doc-2" />
    <div className="si-doc si-doc-1">
      <span className="si-doc-line" />
      <span className="si-doc-line short" />
      <span className="si-doc-line" />
      <span className="si-doc-line short" />
    </div>
  </div>
);

const SyncVisual = () => (
  <div className="si-visual si-visual-sync">
    <div className="si-tile-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="si-tile" style={{ animationDelay: `${i * 0.15}s` }}>
          <span className="si-tile-bar" />
        </div>
      ))}
    </div>
    <svg className="si-sync-arrow" viewBox="0 0 60 60" fill="none">
      <path d="M12 22 a18 18 0 0 1 36 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
      <path d="M48 38 a18 18 0 0 1 -36 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
      <path d="M44 18 l4 4 -4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 42 l-4 -4 4 -4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const WorkflowVisual = () => (
  <div className="si-visual si-visual-workflow">
    <svg viewBox="0 0 220 140" className="si-flow-svg" fill="none">
      <path d="M40 70 H90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
      <path d="M130 70 H180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
      <path d="M110 50 V30 H180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
      <path d="M110 90 V110 H180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="40" cy="70" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <rect x="92" y="56" width="36" height="28" rx="6" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <rect x="180" y="18" width="32" height="22" rx="5" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <rect x="180" y="58" width="32" height="22" rx="5" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <rect x="180" y="98" width="32" height="22" rx="5" fill="white" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </div>
);

const LanguagesVisual = () => {
  const words = ["Hello", "你好", "Bonjour", "안녕", "Hola", "مرحبا", "Olá", "नमस्ते", "Xin chào"];
  return (
    <div className="si-visual si-visual-languages">
      {words.map((w, i) => (
        <span key={w} className={`si-lang si-lang-${i}`}>{w}</span>
      ))}
    </div>
  );
};

const LeadVisual = () => (
  <div className="si-visual si-visual-lead">
    <div className="si-form">
      <div className="si-form-row"><span className="si-form-label" /><span className="si-form-input" /></div>
      <div className="si-form-row"><span className="si-form-label short" /><span className="si-form-input filled" /></div>
      <div className="si-form-row"><span className="si-form-label" /><span className="si-form-input" /></div>
      <div className="si-form-row"><span className="si-form-label short" /><span className="si-form-input filled" /></div>
    </div>
    <span className="si-form-cursor" />
  </div>
);

const AnalysisVisual = () => (
  <div className="si-visual si-visual-analysis">
    <svg viewBox="0 0 200 120" className="si-chart-svg" fill="none">
      <path d="M10 100 H190" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <path d="M10 70 H190" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 4" />
      <path d="M10 40 H190" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 4" />
      <path d="M10 90 L40 70 L70 78 L100 50 L130 55 L160 28 L190 20"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {[ [40,70], [70,78], [100,50], [130,55], [160,28], [190,20] ].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill="white" stroke="currentColor" strokeWidth="1.5" />
      ))}
    </svg>
  </div>
);

const EquipmentVisual = () => (
  <div className="si-visual si-visual-equipment">
    {["Excavator", "Forklift", "Crane", "Loader"].map((name, i) => (
      <div key={name} className={`si-chip si-chip-${i}`}>
        <span className="si-chip-dot" />
        {name}
      </div>
    ))}
    <div className="si-chip si-chip-match">✓ Match</div>
  </div>
);

const QuotationVisual = () => (
  <div className="si-visual si-visual-quotation">
    <div className="si-quote">
      <div className="si-quote-head">
        <span className="si-quote-title" />
        <span className="si-quote-badge">QUOTE</span>
      </div>
      <div className="si-quote-row"><span /><span className="amt" /></div>
      <div className="si-quote-row"><span /><span className="amt" /></div>
      <div className="si-quote-row total"><span /><span className="amt" /></div>
    </div>
    <span className="si-pulse" />
  </div>
);

/* -------------------------------------------------------------------------- */

const FEATURES: Feature[] = [
  {
    label: "Knowledge",
    title: "Knowledge Base",
    description:
      "Train your AI Agent with catalogues, FAQs, pricing documents, policies, and company knowledge.",
    Visual: KnowledgeVisual,
    size: "md",
  },
  {
    label: "Synced",
    title: "Webstore & Antbuildz Sync",
    description:
      "Sync structured product listings, specs, images, categories, and links from Webstore or Antbuildz data.",
    Visual: SyncVisual,
    size: "lg",
  },
  {
    label: "Configurable",
    title: "Instruction & Workflow Control",
    description:
      "Define how your AI qualifies leads, handles pricing, recommends options, and escalates complex cases.",
    Visual: WorkflowVisual,
    size: "sm",
  },
  {
    label: "Localised",
    title: "Multilingual Support",
    description:
      "Support customers across different languages, markets, and time zones for local and overseas enquiries.",
    Visual: LanguagesVisual,
    size: "md",
  },
  {
    label: "Capture",
    title: "Lead Capture",
    description:
      "Collect customer details, requirements, location, budget, quantity, timeline, and product interest from conversations.",
    Visual: LeadVisual,
    size: "lg",
  },
  {
    label: "Intelligence",
    title: "Buyer Analysis",
    description:
      "Understand buyer intent, urgency, enquiry quality, product interest, and sales readiness.",
    Visual: AnalysisVisual,
    size: "sm",
  },
  {
    label: "Recommendation",
    title: "Equipment Recommendation",
    description:
      "Recommend suitable equipment, tools, spare parts, or vehicles based on usage, specs, budget, and job requirements.",
    Visual: EquipmentVisual,
    size: "md",
  },
  {
    label: "Conversion",
    title: "Quotation Intent Capture",
    description:
      "Detect serious buying signals and collect key details for quotation, booking, reservation, or handover.",
    Visual: QuotationVisual,
    size: "lg",
  },
];

const COLUMNS: Feature[][] = [
  [FEATURES[0], FEATURES[4]],
  [FEATURES[1], FEATURES[5]],
  [FEATURES[2], FEATURES[6]],
  [FEATURES[3], FEATURES[7]],
];

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const { Visual } = feature;
  return (
    <div
      ref={ref}
      className={`si-card si-card-${feature.size} ${visible ? "si-card-in" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="si-card-visual">
        <Visual />
      </div>
      <div className="si-card-body">
        <span className="si-card-label">{feature.label}</span>
        <h3 className="si-card-title">{feature.title}</h3>
        <p className="si-card-desc">{feature.description}</p>
      </div>
    </div>
  );
}

function MarqueeColumn({
  cards,
  duration,
  reverse = false,
  initialDelay,
}: {
  cards: Feature[];
  duration: number;
  reverse?: boolean;
  initialDelay: number;
}) {
  return (
    <div className="si-col">
      <div
        className="si-col-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((loop) => (
          <div className="si-col-group" key={loop} aria-hidden={loop === 1}>
            {cards.map((c, idx) => (
              <FeatureCard
                key={`${loop}-${c.title}`}
                feature={c}
                delay={initialDelay + idx * 80}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SalesIntelligence() {
  return (
    <section className="si-section" aria-labelledby="si-heading">
      <div className="si-container">
        <header className="si-header">
          <h2 id="si-heading" className="si-headline">
            Sales Intelligence
            <br />
            Built Into Every Conversation
          </h2>
          <p className="si-sub">
            Equip your AI Sales Agent with business knowledge, lead capture, buyer analysis,
            and quotation intent detection to support every enquiry with structure and precision.
          </p>
        </header>

        <div className="si-stage">
          <div className="si-fade si-fade-top" aria-hidden />
          <div className="si-fade si-fade-bottom" aria-hidden />

          <div className="si-grid">
            <MarqueeColumn cards={COLUMNS[0]} duration={42} initialDelay={0} />
            <MarqueeColumn cards={COLUMNS[1]} duration={56} initialDelay={80} reverse />
            <MarqueeColumn cards={COLUMNS[2]} duration={48} initialDelay={160} />
            <MarqueeColumn cards={COLUMNS[3]} duration={60} initialDelay={240} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
