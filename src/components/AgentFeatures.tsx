import { useState } from "react";
import {
  UserCircle,
  BookOpen,
  GitBranch,
  MessagesSquare,
  UserSearch,
  Target,
  ArrowRight,
  Upload,
  FileText,
  Bell,
  CheckCircle2,
  Circle,
  HardDrive,
  Link2,
  ClipboardList,
  Database,
  MessageSquareText,
  Package,
  ContactRound,
  HandshakeIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./agent-features.css";

type FeatureKey =
  | "identity"
  | "knowledge"
  | "flow"
  | "visibility"
  | "profiling"
  | "intent";

type Feature = {
  key: FeatureKey;
  tab: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    key: "identity",
    tab: "Agent Identity",
    icon: UserCircle,
    title: "Define How Your AI Agent Represents Your Business",
    description:
      "Set the agent's role, introduction, tone, response boundaries, and business rules so it behaves according to your company direction.",
  },
  {
    key: "knowledge",
    tab: "Business Knowledge",
    icon: BookOpen,
    title: "Train AI With Your Business Knowledge",
    description:
      "Upload product catalogues, FAQs, rental terms, pricing guides, and company information for the AI to use in real customer enquiries.",
  },
  {
    key: "flow",
    tab: "Sales Flow",
    icon: GitBranch,
    title: "Guide Every Enquiry With a Structured Sales Flow",
    description:
      "Define how the AI handles recommendations, quotation requests, technical questions, and sales handover.",
  },
  {
    key: "visibility",
    tab: "Conversation Visibility",
    icon: MessagesSquare,
    title: "Monitor Every Buyer Conversation Clearly",
    description:
      "Record and review AI conversations so your team can track interactions, receive alerts, and follow up when needed.",
  },
  {
    key: "profiling",
    tab: "Buyer Profiling",
    icon: UserSearch,
    title: "Understand Buyer Quality and Intent Better",
    description:
      "Capture buyer details, project needs, urgency, and behaviour to help your team assess lead quality.",
  },
  {
    key: "intent",
    tab: "Deal Intent",
    icon: Target,
    title: "Spot High-Intent Buyers Before They Slip Away",
    description:
      "Automatically surface serious enquiries, track buying signals, and help your sales team focus on the conversations most likely to convert.",
  },
];

function VisualIdentity() {
  return (
    <div className="af-visual af-visual-identity">
      <div className="af-card af-profile-card">
        <div className="af-profile-head">
          <div className="af-avatar">A</div>
          <div>
            <div className="af-profile-name">Aria · Sales Agent</div>
            <div className="af-profile-sub">Active · Configured</div>
          </div>
        </div>
        <div className="af-fields">
          {[
            ["Role", "Sales Specialist"],
            ["Tone", "Friendly · Professional"],
            ["Introduction", "Hi, I'm Aria from Acme..."],
            ["Boundaries", "No price negotiation"],
          ].map(([label, val]) => (
            <div key={label} className="af-field">
              <span className="af-field-label">{label}</span>
              <span className="af-field-val">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualKnowledge() {
  const docs = [
    { name: "Product Catalogue", status: "Trained", pct: 100 },
    { name: "FAQ Library", status: "Trained", pct: 100 },
    { name: "Pricing Guide", status: "Training", pct: 72 },
    { name: "Rental Terms", status: "Trained", pct: 100 },
  ];
  return (
    <div className="af-visual af-visual-knowledge">
      <div className="af-upload-zone">
        <Upload size={20} />
        <span>Drop files to train your agent</span>
      </div>
      <div className="af-doc-grid">
        {docs.map((d) => (
          <div key={d.name} className="af-doc-card">
            <div className="af-doc-head">
              <FileText size={16} className="af-doc-icon" />
              <span className="af-doc-name">{d.name}</span>
            </div>
            <div className="af-doc-bar"><span style={{ width: `${d.pct}%` }} /></div>
            <div className={`af-doc-status ${d.pct === 100 ? "done" : ""}`}>{d.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualFlow() {
  const steps = ["Ask Need", "Recommend Product", "Capture Details", "Handover"];
  return (
    <div className="af-visual af-visual-flow">
      <div className="af-flow">
        {steps.map((s, i) => (
          <div key={s} className="af-flow-row">
            <div className="af-flow-node">
              <span className="af-flow-num">{i + 1}</span>
              <span>{s}</span>
            </div>
            {i < steps.length - 1 && <ArrowRight size={18} className="af-flow-arrow" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualVisibility() {
  const convos = [
    { name: "Sarah Lim", msg: "Need a 20m boom lift quote for next week", time: "2m", unread: true },
    { name: "David Tan", msg: "Is the forklift available for monthly rental?", time: "14m", unread: true },
    { name: "Amanda Koh", msg: "Thanks, I'll check with my team and revert", time: "1h", unread: false },
  ];
  return (
    <div className="af-visual af-visual-visibility">
      <div className="af-conv-list">
        {convos.map((c) => (
          <div key={c.name} className="af-conv">
            <div className="af-conv-avatar">{c.name[0]}</div>
            <div className="af-conv-body">
              <div className="af-conv-top">
                <span className="af-conv-name">{c.name}</span>
                <span className="af-conv-time">{c.time}</span>
              </div>
              <div className="af-conv-msg">{c.msg}</div>
            </div>
            {c.unread && <Bell size={14} className="af-conv-bell" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualProfiling() {
  const fields = [
    ["Company", "BuildPro Sdn Bhd"],
    ["Location", "Kuala Lumpur"],
    ["Need", "20m Boom Lift × 2"],
    ["Urgency", "Within 5 days"],
    ["Interest Level", "High"],
  ];
  return (
    <div className="af-visual af-visual-profiling">
      <div className="af-card af-profile-card">
        <div className="af-profile-head">
          <div className="af-avatar af-avatar-blue">B</div>
          <div>
            <div className="af-profile-name">Buyer Profile</div>
            <div className="af-profile-sub">Lead Score · 87 / 100</div>
          </div>
          <span className="af-quality-tag">Hot Lead</span>
        </div>
        <div className="af-fields">
          {fields.map(([label, val]) => (
            <div key={label} className="af-field">
              <span className="af-field-label">{label}</span>
              <span className="af-field-val">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualIntent() {
  const cards = [
    { name: "BuildPro Sdn Bhd", intent: "High", tag: "Quotation Request", summary: "Requested quote for 20m boom lift × 2, needs delivery by Friday." },
    { name: "MegaCon Builders", intent: "High", tag: "Urgent Rental", summary: "Asking for forklift availability this week, project starts Monday." },
    { name: "GreenSpace Co.", intent: "Medium", tag: "Price Asked", summary: "Asked about monthly pricing for floor scrubber, comparing options." },
  ];
  return (
    <div className="af-visual af-visual-intent">
      <div className="af-intent-grid">
        {cards.map((c) => (
          <div key={c.name} className="af-intent-card">
            <div className="af-intent-head">
              <span className={`af-intent-badge af-intent-${c.intent.toLowerCase()}`}>
                {c.intent === "High" ? <CheckCircle2 size={12} /> : <Circle size={12} />}
                {c.intent} Intent
              </span>
              <span className="af-intent-tag">{c.tag}</span>
            </div>
            <div className="af-intent-name">{c.name}</div>
            <div className="af-intent-summary">{c.summary}</div>
            <button className="af-intent-btn">Follow Up <ArrowRight size={14} /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS: Record<FeatureKey, () => JSX.Element> = {
  identity: VisualIdentity,
  knowledge: VisualKnowledge,
  flow: VisualFlow,
  visibility: VisualVisibility,
  profiling: VisualProfiling,
  intent: VisualIntent,
};

export default function AgentFeatures() {
  const [active, setActive] = useState<FeatureKey>("intent");
  const feature = FEATURES.find((f) => f.key === active)!;
  const Visual = VISUALS[active];

  return (
    <section className="af-section">
      <div className="bright-container">
        <div className="af-box">
          <div className="af-tabbar-wrap">
            <div className="af-tabbar" role="tablist">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                const isActive = f.key === active;
                return (
                  <button
                    key={f.key}
                    role="tab"
                    aria-selected={isActive}
                    className={`af-pill ${isActive ? "af-pill-active" : ""}`}
                    onClick={() => setActive(f.key)}
                  >
                    <Icon size={16} />
                    <span>{f.tab}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="af-stage" key={active}>
            <div className="af-panel-visual">
              <Visual />
            </div>
          </div>

          <div className="af-headline af-headline-bottom">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
