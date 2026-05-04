import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Boxes,
  Workflow,
  Globe2,
  UserPlus,
  LineChart,
  Wrench,
  FileSignature,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./sales-intelligence.css";

type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
  /** controls relative card height for masonry rhythm */
  size: "sm" | "md" | "lg";
};

const FEATURES: Feature[] = [
  {
    title: "Knowledge Base",
    description:
      "Train your AI Agent with catalogues, FAQs, pricing documents, policies, and company knowledge.",
    Icon: BookOpen,
    size: "md",
  },
  {
    title: "Webstore & Antbuildz Sync",
    description:
      "Sync structured product listings, specs, images, categories, and links from Webstore or Antbuildz data.",
    Icon: Boxes,
    size: "lg",
  },
  {
    title: "Instruction & Workflow Control",
    description:
      "Define how your AI qualifies leads, handles pricing, recommends options, and escalates complex cases.",
    Icon: Workflow,
    size: "sm",
  },
  {
    title: "Multilingual Support",
    description:
      "Support customers across different languages, markets, and time zones for local and overseas enquiries.",
    Icon: Globe2,
    size: "md",
  },
  {
    title: "Lead Capture",
    description:
      "Collect customer details, requirements, location, budget, quantity, timeline, and product interest from conversations.",
    Icon: UserPlus,
    size: "lg",
  },
  {
    title: "Buyer Analysis",
    description:
      "Understand buyer intent, urgency, enquiry quality, product interest, and sales readiness.",
    Icon: LineChart,
    size: "sm",
  },
  {
    title: "Equipment Recommendation",
    description:
      "Recommend suitable equipment, tools, spare parts, or vehicles based on usage, specs, budget, and job requirements.",
    Icon: Wrench,
    size: "md",
  },
  {
    title: "Quotation Intent Capture",
    description:
      "Detect serious buying signals and collect key details for quotation, booking, reservation, or handover.",
    Icon: FileSignature,
    size: "lg",
  },
];

// Distribute 8 cards across 4 columns. Each column will be duplicated for an infinite upward loop.
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

  const { Icon } = feature;
  return (
    <div
      ref={ref}
      className={`si-card si-card-${feature.size} ${visible ? "si-card-in" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="si-card-icon">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="si-card-title">{feature.title}</h3>
      <p className="si-card-desc">{feature.description}</p>
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
          <span className="si-eyebrow">AI Sales Agent Capabilities</span>
          <h2 id="si-heading" className="si-headline">
            Sales Intelligence, Built Into Every Conversation
          </h2>
          <p className="si-sub">
            Equip your AI Sales Agent with business knowledge, lead capture, buyer analysis,
            and quotation intent detection to support every enquiry with structure and precision.
          </p>
        </header>

        <div className="si-stage">

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
