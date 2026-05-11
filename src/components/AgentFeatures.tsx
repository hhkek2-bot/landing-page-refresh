import { useState } from "react";
import {
  UserCircle,
  BookOpen,
  GitBranch,
  MessagesSquare,
  UserSearch,
  Target,
  FileText,
  ArrowRight,
  Bell,
  Flame,
  Clock,
  DollarSign,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./agent-features.css";

type FeatureKey =
  | "agent"
  | "knowledge"
  | "workflow"
  | "conversation"
  | "leads"
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
    key: "agent",
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
    key: "workflow",
    tab: "Workflow",
    icon: GitBranch,
    title: "Guide Every Enquiry With a Structured Sales Workflow",
    description:
      "Define how the AI handles product recommendations, quotation requests, technical questions, booking interest, and sales handover.",
  },
  {
    key: "conversation",
    tab: "Conversation",
    icon: MessagesSquare,
    title: "Monitor Every Buyer Conversation Clearly",
    description:
      "Record and review AI conversations so your team can track interactions, receive alerts, and follow up when needed.",
  },
  {
    key: "leads",
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

/* ============== Simple Graphics ============== */

function GfxAgent() {
  const fields = [
    { label: "Role", value: "Sales Assistant" },
    { label: "Introduction", value: "Hi, I'm from Antbuildz" },
    { label: "Tone", value: "Friendly · Professional" },
    { label: "Boundaries", value: "Represent XYZ only" },
    { label: "Business Rules", value: "Quote within 1 hour" },
  ];
  return (
    <div className="gfx-card gfx-agent">
      <div className="gfx-agent-head">
        <div className="gfx-avatar">
          <UserCircle size={28} />
        </div>
        <div>
          <div className="gfx-agent-name">Agent Profile</div>
          <div className="gfx-agent-sub">Configuration</div>
        </div>
      </div>
      <div className="gfx-agent-fields">
        {fields.map((f) => (
          <div className="gfx-agent-row" key={f.label}>
            <span className="gfx-agent-label">{f.label}</span>
            <span className="gfx-agent-value">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GfxKnowledge() {
  const docs = [
    "Product Catalogue",
    "FAQ",
    "Rental Terms",
    "Pricing Guide",
    "Company Info",
  ];
  return (
    <div className="gfx-knowledge">
      {docs.map((d) => (
        <div className="gfx-doc" key={d}>
          <div className="gfx-doc-icon">
            <FileText size={20} />
          </div>
          <div className="gfx-doc-name">{d}</div>
        </div>
      ))}
    </div>
  );
}

function GfxWorkflow() {
  const steps = [
    "Understand Need",
    "Recommend Product",
    "Capture Details",
    "Handover to Sales",
  ];
  return (
    <div className="gfx-workflow">
      {steps.map((s, i) => (
        <div className="gfx-step-wrap" key={s}>
          <div className="gfx-step">
            <div className="gfx-step-num">{i + 1}</div>
            <div className="gfx-step-label">{s}</div>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="gfx-step-arrow" size={18} />
          )}
        </div>
      ))}
    </div>
  );
}

function GfxConversation() {
  const items = [
    {
      name: "BuildPro Sdn Bhd",
      preview: "Need excavator for next month project...",
      badge: 2,
      time: "2m",
    },
    {
      name: "MegaCon Builders",
      preview: "Can I get pricing for boom lift rental?",
      badge: 1,
      time: "14m",
    },
    {
      name: "Skyline Interiors",
      preview: "Confirmed booking — please send invoice.",
      badge: 0,
      followUp: true,
      time: "1h",
    },
  ];
  return (
    <div className="gfx-card gfx-conv">
      {items.map((it) => (
        <div className="gfx-conv-row" key={it.name}>
          <div className="gfx-conv-avatar">{it.name[0]}</div>
          <div className="gfx-conv-body">
            <div className="gfx-conv-top">
              <span className="gfx-conv-name">{it.name}</span>
              <span className="gfx-conv-time">{it.time}</span>
            </div>
            <div className="gfx-conv-preview">{it.preview}</div>
          </div>
          <div className="gfx-conv-meta">
            {it.badge ? <span className="gfx-conv-badge">{it.badge}</span> : null}
            {it.followUp ? (
              <span className="gfx-conv-follow">
                <Bell size={12} /> Follow up
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function GfxLeads() {
  const fields = [
    { label: "Company", value: "BuildPro Sdn Bhd" },
    { label: "Contact", value: "Mr. Tan · +65 9123 4567" },
    { label: "Location", value: "Tuas, Singapore" },
    { label: "Product Interest", value: "20-ton Excavator" },
    { label: "Urgency", value: "Within 7 days" },
  ];
  return (
    <div className="gfx-card gfx-lead">
      <div className="gfx-lead-head">
        <div className="gfx-lead-avatar">B</div>
        <div>
          <div className="gfx-lead-name">Buyer Profile</div>
          <div className="gfx-lead-sub">Lead captured · today</div>
        </div>
        <span className="gfx-lead-quality">High Quality</span>
      </div>
      <div className="gfx-lead-fields">
        {fields.map((f) => (
          <div className="gfx-lead-row" key={f.label}>
            <span className="gfx-lead-label">{f.label}</span>
            <span className="gfx-lead-value">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GfxIntent() {
  const cards = [
    {
      level: "High Intent",
      tone: "high",
      icon: Flame,
      tags: ["Urgent Rental", "Quotation Request"],
      text: "Confirm excavator rental for 5–20 May",
    },
    {
      level: "Medium Intent",
      tone: "medium",
      icon: DollarSign,
      tags: ["Price Asked"],
      text: "Asked about boom lift pricing",
    },
    {
      level: "Follow Up",
      tone: "low",
      icon: Clock,
      tags: ["Follow Up Needed"],
      text: "Pending response on quotation #1042",
    },
  ];
  return (
    <div className="gfx-intent">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div className={`gfx-intent-card gfx-intent-${c.tone}`} key={c.level}>
            <div className="gfx-intent-head">
              <span className={`gfx-intent-pill gfx-intent-pill-${c.tone}`}>
                <Icon size={12} /> {c.level}
              </span>
            </div>
            <div className="gfx-intent-text">{c.text}</div>
            <div className="gfx-intent-tags">
              {c.tags.map((t) => (
                <span className="gfx-intent-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const VISUALS: Record<FeatureKey, () => JSX.Element> = {
  agent: GfxAgent,
  knowledge: GfxKnowledge,
  workflow: GfxWorkflow,
  conversation: GfxConversation,
  leads: GfxLeads,
  intent: GfxIntent,
};

export default function AgentFeatures() {
  const [active, setActive] = useState<FeatureKey>("intent");
  const feature = FEATURES.find((f) => f.key === active)!;
  const Visual = VISUALS[active];

  return (
    <section className="af-section">
      <div className="bright-container">
        <div className="af-header">
          <h2 className="af-title">Your AI Sales Control Center</h2>
          <p className="af-desc">
            Explore the key features that help you control your agent, train it
            with business knowledge, monitor buyer conversations, and identify
            high-intent opportunities for follow-up.
          </p>
        </div>

        <div className="af-browser">
          <div className="af-browser-bar">
            <span className="af-dot af-dot-r" />
            <span className="af-dot af-dot-y" />
            <span className="af-dot af-dot-g" />
          </div>

          <div className="af-tabs" role="tablist">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              const isActive = f.key === active;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={isActive}
                  className={`af-tab ${isActive ? "af-tab-active" : ""}`}
                  onClick={() => setActive(f.key)}
                >
                  <Icon size={16} />
                  <span>{f.tab}</span>
                </button>
              );
            })}
          </div>

          <div className="af-content" key={active}>
            <div className="af-graphic">
              <Visual />
            </div>
            <div className="af-text">
              <h3 className="af-feature-title">{feature.title}</h3>
              <p className="af-feature-desc">{feature.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
