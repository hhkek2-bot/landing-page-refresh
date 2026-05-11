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
  Handshake,
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
  const sources = [
    { Icon: FileText, name: "Product Catalogue.pdf", meta: "PDF · 4.2 MB · 128 segments", color: "#7c3aed" },
    { Icon: Link2, name: "company-website.com/faq", meta: "Website · 36 pages crawled", color: "#3b82f6" },
    { Icon: ClipboardList, name: "Rental Terms & Pricing", meta: "Pasted text · 2,140 words", color: "#f97316" },
    { Icon: FileText, name: "Spare Parts Master List.xlsx", meta: "Spreadsheet · 1.1 MB · 84 segments", color: "#10b981" },
  ];
  return (
    <div className="af-visual af-visual-knowledge">
      <p className="afk-lede">Add sources for your AI agent — PDFs, websites, docs, or pasted text.</p>

      <div className="afk-storage">
        <div className="afk-storage-head">
          <div className="afk-storage-title">
            <Database size={16} className="afk-storage-icon" />
            <strong>Storage</strong>
            <span className="afk-storage-meta">7.4 MB / 50.0 MB</span>
          </div>
          <span className="afk-drag">Drag files here</span>
        </div>
        <div className="afk-storage-sub">4 sources · 2 files · 1 website · 1 note</div>
        <div className="afk-progress"><span style={{ width: "15%" }} /></div>
        <div className="afk-actions">
          <button className="afk-btn"><Upload size={14} /> Upload</button>
          <button className="afk-btn"><HardDrive size={14} /> Drive</button>
          <button className="afk-btn"><Link2 size={14} /> Website</button>
          <button className="afk-btn"><ClipboardList size={14} /> Text</button>
        </div>
      </div>

      <div className="afk-saved-head">SAVED SOURCES (4)</div>
      <div className="afk-saved-list">
        {sources.map((s) => (
          <div key={s.name} className="afk-source">
            <div className="afk-source-icon" style={{ background: `${s.color}1A`, color: s.color }}>
              <s.Icon size={16} />
            </div>
            <div className="afk-source-body">
              <div className="afk-source-name">{s.name}</div>
              <div className="afk-source-meta">{s.meta}</div>
            </div>
            <CheckCircle2 size={16} className="afk-source-check" />
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualFlow() {
  const steps = [
    { n: 1, title: "Ask Need", instr: "Greet the buyer, then ask what equipment, project, and timeline they need.", Icon: MessageSquareText, color: "#7c3aed" },
    { n: 2, title: "Recommend Product", instr: "Match request against catalogue and propose 1–3 best-fit models with key specs.", Icon: Package, color: "#3b82f6" },
    { n: 3, title: "Capture Details", instr: "Collect company name, contact, location, and quantity for the quotation.", Icon: ContactRound, color: "#f97316" },
    { n: 4, title: "Handover", instr: "Summarise the request and route the qualified lead to the human sales team.", Icon: Handshake, color: "#10b981" },
  ];
  return (
    <div className="af-visual af-visual-flow">
      <div className="afw-flow">
        {steps.map((s, i) => (
          <div key={s.n} className="afw-row">
            <div className="afw-card">
              <div className="afw-rail" style={{ background: s.color }} />
              <div className="afw-num" style={{ background: `${s.color}1A`, color: s.color }}>{s.n}</div>
              <div className="afw-body">
                <div className="afw-title-row">
                  <s.Icon size={14} style={{ color: s.color }} />
                  <span className="afw-title">{s.title}</span>
                  <span className="afw-tag">Task</span>
                </div>
                <div className="afw-instr">{s.instr}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="afw-connector" aria-hidden="true">
                <span className="afw-line" />
                <ArrowRight size={14} className="afw-arrow" />
              </div>
            )}
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
