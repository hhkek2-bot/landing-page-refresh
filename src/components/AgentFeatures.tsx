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
import ariaAvatar from "@/assets/agent-aria.jpg";

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
    tab: "Agent",
    icon: UserCircle,
    title: "Define How Your AI Agent Represents Your Business",
    description:
      "Set the agent's role, introduction, response boundaries, tone, and business rules so it behaves according to your company direction.",
  },
  {
    key: "knowledge",
    tab: "Knowledge",
    icon: BookOpen,
    title: "Train AI With Your Business Knowledge",
    description:
      "Upload product catalogues, FAQs, rental terms, pricing guides, company information, and service details for the AI to use in real customer enquiries.",
  },
  {
    key: "flow",
    tab: "Workflow",
    icon: GitBranch,
    title: "Guide Every Enquiry With a Structured Sales Workflow",
    description:
      "Define how the AI handles product recommendations, quotation requests, technical questions, booking interest, and sales handover.",
  },
  {
    key: "visibility",
    tab: "Conversation",
    icon: MessagesSquare,
    title: "Monitor Every Buyer Conversation Clearly",
    description:
      "Record and review AI conversations so your team can track interactions, receive alerts, and follow up when needed.",
  },
  {
    key: "profiling",
    tab: "Leads",
    icon: UserSearch,
    title: "Capture and Profile Every Potential Buyer",
    description:
      "Capture buyer details, company information, project needs, product interest, location, urgency, and behaviour to help your team understand lead quality.",
  },
  {
    key: "intent",
    tab: "Intent",
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
          <img src={ariaAvatar} alt="Aria, sales agent" className="af-avatar af-avatar-photo" width={64} height={64} loading="lazy" />
          <div>
            <div className="af-profile-name">Aria · Sales Agent</div>
            <div className="af-profile-sub">Active · Configured</div>
          </div>
        </div>
        <div className="af-fields">
          {[
            ["Role", "Sales Specialist"],
            ["Tone", "Friendly · Professional"],
            ["Introduction", "Hi, I'm Aria from Antbuildz. We rent and sell all types of construction equipment in Singapore — how can I help you today?"],
            ["Boundaries", "Represent Antbuildz only. Never mention or recommend competing brands in conversations with customers."],
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
    { name: "Sarah Lim", preview: "Hi Sarah! For a 20m boom lift in KL, here are the best-fit options…", time: "2m", agent: "AI Sales Specialist", active: true },
    { name: "David Tan", preview: "We have 3-ton forklifts available for monthly rental starting…", time: "14m", agent: "AI Sales Specialist", active: false },
    { name: "Amanda Koh", preview: "Thanks for confirming. I've shared the quotation PDF with…", time: "1h", agent: "AI Sales Specialist", active: false },
    { name: "MegaCon Builders", preview: "Yes, the telehandler can lift above 15m. Models below all have…", time: "3h", agent: "AI Sales Specialist", active: false },
  ];
  return (
    <div className="af-visual af-visual-visibility">
      <div className="afv-shell">
        {/* Left: list */}
        <div className="afv-list">
          <div className="afv-search">
            <span className="afv-search-icon">⌕</span>
            <span className="afv-search-ph">Search conversations…</span>
          </div>
          <div className="afv-filters">
            <span className="afv-chip afv-chip-active">● 12</span>
            <span className="afv-chip">◷ 8</span>
            <span className="afv-chip">⚠ 1</span>
            <span className="afv-chip">✓ 3</span>
          </div>
          {convos.map((c) => (
            <div key={c.name} className={`afv-item ${c.active ? "afv-item-active" : ""}`}>
              <div className="afv-item-top">
                <span className="afv-item-name">{c.name}</span>
                <span className="afv-item-time">⏱ {c.time}</span>
              </div>
              <div className="afv-item-msg">{c.preview}</div>
              <div className="afv-item-agent">{c.agent}</div>
            </div>
          ))}
        </div>

        {/* Right: detail */}
        <div className="afv-detail">
          <div className="afv-detail-head">
            <div className="afv-detail-who">
              <div className="afv-detail-avatar">S</div>
              <div>
                <div className="afv-detail-name">Sarah Lim</div>
                <div className="afv-detail-role">AI Sales Specialist</div>
              </div>
            </div>
            <div className="afv-detail-actions">
              <span className="afv-act">⚑ Flag</span>
              <span className="afv-act afv-act-end">✕ End Chat</span>
            </div>
          </div>

          <div className="afv-thread">
            <div className="afv-bubble afv-bubble-user">
              20m boom lift for a project in KL next week
            </div>
            <div className="afv-ai">
              <div className="afv-ai-tag">● AI</div>
              <p>Hi Sarah! Here are the best-fit 20m boom lifts available in Kuala Lumpur:</p>
              <div className="afv-table">
                <div className="afv-tr afv-tr-head">
                  <span>Equipment</span><span>Rate</span><span>Status</span>
                </div>
                <div className="afv-tr"><span>Genie Z-62/40 Boom Lift</span><span>RM 850/day</span><span className="afv-ok">Available</span></div>
                <div className="afv-tr"><span>JLG 660SJ Boom Lift</span><span>RM 920/day</span><span className="afv-ok">Available</span></div>
              </div>
              <p className="afv-followup">Would you like me to prepare a formal quotation or check delivery for next Monday?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualProfiling() {
  const leads = [
    { contact: "Sarah Lim", role: "Project Manager", company: "BuildPro Sdn Bhd", industry: "Construction · 120 staff", location: "Tuas, Singapore", behaviour: "High" },
    { contact: "David Tan", role: "Site Supervisor", company: "MegaCon Builders", industry: "Civil Works · 85 staff", location: "Jurong, Singapore", behaviour: "High" },
    { contact: "Amanda Koh", role: "Facilities Lead", company: "GreenSpace Co.", industry: "Landscaping · 40 staff", location: "Woodlands, Singapore", behaviour: "Medium" },
    { contact: "Marcus Lee", role: "Operations Director", company: "Skyline Interiors", industry: "Interior Fit-out · 60 staff", location: "Orchard, Singapore", behaviour: "Medium" },
    { contact: "Janice Wong", role: "Owner", company: "Lim Renovation", industry: "Home Reno · 12 staff", location: "Bedok, Singapore", behaviour: "Low" },
  ];
  return (
    <div className="af-visual af-visual-profiling">
      <div className="af-card afp-card">
        <div className="afp-head">
          <div>
            <div className="afp-title">Lead Capture</div>
            <div className="afp-sub">5 new leads · last 24h</div>
          </div>
          <span className="af-quality-tag">2 Hot Leads</span>
        </div>
        <div className="afp-table">
          <div className="afp-row afp-row-head">
            <span>Contact</span>
            <span>Company</span>
            <span>Location</span>
            <span className="afp-cell-right">Behaviour</span>
          </div>
          {leads.map((l) => (
            <div key={l.contact} className="afp-row">
              <span className="afp-company">
                <span className="afp-dot" />
                <span>
                  <span className="afp-company-name">{l.contact}</span>
                  <span className="afp-company-meta">{l.role}</span>
                </span>
              </span>
              <span>
                <span className="afp-company-name">{l.company}</span>
                <span className="afp-company-meta">{l.industry}</span>
              </span>
              <span className="afp-urgency">{l.location}</span>
              <span className="afp-cell-right">
                <span className={`afp-badge afp-badge-${l.behaviour.toLowerCase()}`}>{l.behaviour}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualIntent() {
  const deals = [
    {
      name: "BuildPro Sdn Bhd",
      equipment: "20-ton Excavator × 1",
      period: "12 Jun – 26 Jun (2 weeks)",
      location: "Tuas West Worksite",
      price: "S$ 6,400",
      action: "Send rental agreement",
      due: "Today, 5pm",
      urgent: true,
    },
    {
      name: "MegaCon Builders",
      equipment: "3-ton Forklift × 2",
      period: "10 Jun – 30 Sep (rental)",
      location: "Jurong Industrial Park",
      price: "S$ 11,800",
      action: "Confirm delivery slot",
      due: "Tomorrow",
      urgent: false,
    },
    {
      name: "Skyline Interiors",
      equipment: "Scissor Lift 12m × 1",
      period: "08 Jun – 15 Jun",
      location: "Orchard Road site",
      price: "S$ 1,950",
      action: "Share insurance docs",
      due: "Within 2 days",
      urgent: false,
    },
  ];
  return (
    <div className="af-visual af-visual-intent">
      <div className="afd-list">
        {deals.map((d) => (
          <div key={d.name} className="afd-card">
            <div className="afd-main">
              <div className="afd-head">
                <span className="afd-badge"><CheckCircle2 size={12} /> Confirmed Rental</span>
                <span className="afd-name">{d.name}</span>
              </div>
              <div className="afd-grid">
                <div className="afd-cell">
                  <span className="afd-label">Equipment</span>
                  <span className="afd-val">{d.equipment}</span>
                </div>
                <div className="afd-cell">
                  <span className="afd-label">Period</span>
                  <span className="afd-val">{d.period}</span>
                </div>
                <div className="afd-cell">
                  <span className="afd-label">Location</span>
                  <span className="afd-val">{d.location}</span>
                </div>
                <div className="afd-cell">
                  <span className="afd-label">Quoted Price</span>
                  <span className="afd-val afd-price">{d.price}</span>
                </div>
              </div>
            </div>
            <div className="afd-action">
              <span className="afd-action-label">Pending Action</span>
              <span className="afd-action-title">{d.action}</span>
              <span className={`afd-due ${d.urgent ? "afd-due-urgent" : ""}`}>{d.due}</span>
              <button className="afd-btn">Follow Up <ArrowRight size={14} /></button>
            </div>
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
        <div className="bright-section-header bright-section-header-wide">
          <h2>Your AI Sales <span className="bright-hero-gradient-text">Control Center</span></h2>
          <p>Explore the key features that help you control your agent, train it with business knowledge, monitor buyer conversations, and identify high-intent opportunities for follow-up.</p>
        </div>
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
