import { useEffect, useRef, useState, type ReactNode } from "react";
import "./sales-intelligence.css";

type Tone = "blue" | "mint" | "peach" | "lilac" | "sand" | "sky" | "rose" | "lemon";

type Feature = {
  label: string;
  title: string;
  description: string;
  Visual: () => ReactNode;
  tone: Tone;
  /** bento span on desktop: "col span / row span" */
  span: string;
};

/* -------------------------------------------------------------------------- */
/* Visuals                                                                    */
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
    tone: "blue",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Synced",
    title: "Webstore & Antbuildz Sync",
    description:
      "Sync structured product listings, specs, images, categories, and links from Webstore or Antbuildz data.",
    Visual: SyncVisual,
    tone: "mint",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Localised",
    title: "Multilingual Support",
    description:
      "Support customers across different languages, markets, and time zones for local and overseas enquiries.",
    Visual: LanguagesVisual,
    tone: "peach",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Configurable",
    title: "Instruction & Workflow Control",
    description:
      "Define how your AI qualifies leads, handles pricing, recommends options, and escalates complex cases.",
    Visual: WorkflowVisual,
    tone: "lilac",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Capture",
    title: "Lead Capture",
    description:
      "Collect customer details, requirements, location, budget, quantity, timeline, and product interest.",
    Visual: LeadVisual,
    tone: "sand",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Intelligence",
    title: "Buyer Analysis",
    description:
      "Understand buyer intent, urgency, enquiry quality, product interest, and sales readiness.",
    Visual: AnalysisVisual,
    tone: "sky",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Recommendation",
    title: "Equipment Recommendation",
    description:
      "Recommend suitable equipment, tools, spare parts, or vehicles based on usage, specs, and budget.",
    Visual: EquipmentVisual,
    tone: "rose",
    span: "col-span-3 row-span-1",
  },
  {
    label: "Conversion",
    title: "Quotation Intent Capture",
    description:
      "Detect serious buying signals and collect key details for quotation, booking, or handover.",
    Visual: QuotationVisual,
    tone: "lemon",
    span: "col-span-3 row-span-1",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
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
    <article
      ref={ref}
      className={`si-bento-card si-tone-${feature.tone} si-span-${feature.span.replace(/\s/g, "-")} ${visible ? "si-card-in" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="si-bento-visual">
        <Visual />
      </div>
      <div className="si-bento-body">
        <span className="si-bento-label">{feature.label}</span>
        <h3 className="si-bento-title">{feature.title}</h3>
        <p className="si-bento-desc">{feature.description}</p>
      </div>
    </article>
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

        <div className="si-bento">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
