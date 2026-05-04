import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  MessageCircle,
  Mail,
  Megaphone,
  MonitorSmartphone,
  LayoutDashboard,
  Check,
  QrCode,
  Clock,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./deployment-touchpoints.css";

type Touchpoint = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const touchpoints: Touchpoint[] = [
  {
    id: "website",
    title: "Website & Webstore",
    description:
      "Answer product questions, recommend suitable options, and capture enquiries directly from your website or Antbuildz Webstore.",
    icon: MonitorSmartphone,
  },
  {
    id: "social",
    title: "Social Media, Ads & QR Codes",
    description:
      "Turn campaigns, posts, brochures, catalogues, exhibitions, and QR codes into direct entry points for guided sales conversations.",
    icon: Megaphone,
  },
  {
    id: "whatsapp",
    title: "WhatsApp & Messaging",
    description:
      "Handle incoming chat enquiries, collect customer needs, and pass qualified leads to your sales team.",
    icon: MessageCircle,
  },
  {
    id: "email",
    title: "Email & Sales Outreach",
    description:
      "Turn email signatures, proposals, and follow-up messages into always-available sales entry points.",
    icon: Mail,
  },
  {
    id: "multilingual",
    title: "Multilingual 24/7 Support",
    description:
      "Help local and overseas customers communicate in their preferred language, across different time zones, even outside business hours.",
    icon: Globe,
  },
  {
    id: "team",
    title: "Sales Team Support",
    description:
      "Equip your salespeople with faster product answers, clearer customer summaries, and better support when preparing quotations or bookings.",
    icon: LayoutDashboard,
  },
];

function PreviewWebsite() {
  return (
    <div className="dt-preview-website">
      <div className="dt-browser">
        <div className="dt-browser-bar">
          <span /><span /><span />
          <div className="dt-browser-url">antbuildz.com</div>
        </div>
        <div className="dt-browser-body">
          <div className="dt-skeleton-line" style={{ width: "60%" }} />
          <div className="dt-skeleton-line" style={{ width: "85%" }} />
          <div className="dt-skeleton-block" />
          <div className="dt-skeleton-line" style={{ width: "70%" }} />
          <div className="dt-skeleton-line" style={{ width: "50%" }} />
        </div>
      </div>
      <motion.div
        className="dt-chat-widget"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <div className="dt-chat-widget-head">
          <div className="dt-chat-avatar">AI</div>
          <div>
            <p className="dt-chat-name">Sales Agent</p>
            <p className="dt-chat-status"><span className="dt-online-dot" /> Online</p>
          </div>
        </div>
        <div className="dt-chat-widget-body">
          <div className="dt-bubble dt-bubble-ai">Hi! Looking for a specific machine today?</div>
          <div className="dt-bubble dt-bubble-user">Need a 3-ton forklift, indoor use</div>
          <div className="dt-bubble dt-bubble-ai">Got it. I have 4 electric units matching that. Want pricing?</div>
        </div>
      </motion.div>
    </div>
  );
}

function PreviewSocial() {
  const sources = [
    { label: "Instagram Ad", x: 8, y: 14 },
    { label: "QR Code", x: 8, y: 70, qr: true },
    { label: "Brochure", x: 72, y: 14 },
    { label: "Catalogue", x: 72, y: 70 },
  ];
  return (
    <div className="dt-preview-social">
      {sources.map((s, i) => (
        <motion.div
          key={s.label}
          className="dt-source-tile"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.08 }}
        >
          {s.qr ? <QrCode size={20} /> : <Megaphone size={18} />}
          <span>{s.label}</span>
        </motion.div>
      ))}
      <svg className="dt-source-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M18,20 Q50,50 50,50" /><path d="M18,75 Q50,50 50,50" />
        <path d="M82,20 Q50,50 50,50" /><path d="M82,75 Q50,50 50,50" />
      </svg>
      <motion.div
        className="dt-source-hub"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <MessageCircle size={22} />
        <span>AI Conversation</span>
      </motion.div>
    </div>
  );
}

function PreviewWhatsApp() {
  return (
    <div className="dt-preview-whatsapp">
      <div className="dt-wa-head">
        <div className="dt-chat-avatar dt-chat-avatar-green">AI</div>
        <div>
          <p className="dt-chat-name">Antbuildz AI</p>
          <p className="dt-chat-status">typing…</p>
        </div>
      </div>
      <div className="dt-wa-body">
        <div className="dt-wa-bubble dt-wa-in">Hi, do you rent boom lifts?</div>
        <div className="dt-wa-bubble dt-wa-out">Yes! What working height and location?</div>
        <div className="dt-wa-bubble dt-wa-in">40m, Tuas, 2 weeks</div>
        <motion.div
          className="dt-wa-summary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="dt-summary-title">Lead Captured</p>
          <ul>
            <li><Check size={12} /> 40m Telescopic Boom</li>
            <li><Check size={12} /> Tuas · 2 weeks</li>
            <li><Check size={12} /> Sent to sales team</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

function PreviewEmail() {
  return (
    <div className="dt-preview-email">
      <div className="dt-email-card">
        <div className="dt-email-head">
          <Mail size={16} />
          <span>Re: Equipment quotation follow-up</span>
        </div>
        <div className="dt-email-body">
          <p>Hi James,</p>
          <p>Following up on your enquiry — happy to discuss specs or pricing anytime.</p>
          <div className="dt-email-sig">
            <p className="dt-sig-name">Sarah Tan</p>
            <p className="dt-sig-role">Sales · Antbuildz</p>
            <motion.button
              className="dt-sig-cta"
              whileHover={{ scale: 1.03 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(37,99,235,0.4)", "0 0 0 8px rgba(37,99,235,0)"] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <Send size={12} /> Chat with our AI Agent
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div
        className="dt-email-popout"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="dt-bubble dt-bubble-ai">How can I help with your quote?</div>
      </motion.div>
    </div>
  );
}

function PreviewMultilingual() {
  const langs = ["EN", "中文", "BM", "عربي", "ES", "हिं"];
  return (
    <div className="dt-preview-multi">
      <div className="dt-multi-center">
        <Globe size={28} />
        <p>AI Sales Agent</p>
        <span className="dt-multi-247"><Clock size={12} /> 24 / 7</span>
      </div>
      {langs.map((l, i) => {
        const angle = (i / langs.length) * Math.PI * 2;
        const r = 38;
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        return (
          <motion.span
            key={l}
            className="dt-lang-chip"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
            transition={{
              delay: 0.1 + i * 0.07,
              y: { repeat: Infinity, duration: 2.4 + i * 0.2, ease: "easeInOut" },
            }}
          >
            {l}
          </motion.span>
        );
      })}
    </div>
  );
}

function PreviewTeam() {
  return (
    <div className="dt-preview-team">
      <div className="dt-team-block">
        <p className="dt-team-label">Customer Need</p>
        <p className="dt-team-value">3-ton electric forklift, 5m mast, indoor warehouse</p>
      </div>
      <div className="dt-team-block">
        <p className="dt-team-label">Suggested Option</p>
        <div className="dt-team-options">
          <span>Toyota 8FBN30</span>
          <span>Hyster E2.5XN</span>
        </div>
      </div>
      <div className="dt-team-block dt-team-action">
        <p className="dt-team-label">Next Action</p>
        <p className="dt-team-value">Prepare 12-month rental quotation · Confirm delivery slot</p>
        <button type="button" className="dt-team-btn">Generate Quote</button>
      </div>
    </div>
  );
}

const previewMap: Record<string, JSX.Element> = {
  website: <PreviewWebsite />,
  social: <PreviewSocial />,
  whatsapp: <PreviewWhatsApp />,
  email: <PreviewEmail />,
  multilingual: <PreviewMultilingual />,
  team: <PreviewTeam />,
};

export default function DeploymentTouchpoints() {
  const [activeId, setActiveId] = useState<string>(touchpoints[0].id);

  return (
    <section className="dt-section" id="deployment-touchpoints" aria-labelledby="dt-heading">
      <div className="dt-container">
        <motion.div
          className="dt-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="dt-eyebrow">Deployment Touchpoints</span>
          <h2 id="dt-heading" className="dt-title">
            One AI Sales Agent. Six Ways to Scale Sales Opportunities.
          </h2>
          <p className="dt-desc">
            Your next best salesperson does not need to sit in one country, speak only one
            language, or work only during office hours. The Antbuildz AI Sales Agent helps
            your business support multilingual enquiries, engage local and overseas buyers,
            and turn every customer touchpoint into a structured sales opportunity.
          </p>
        </motion.div>

        <div className="dt-layout">
          <div className="dt-grid" role="tablist" aria-label="Touchpoints">
            {touchpoints.map((t, i) => {
              const Icon = t.icon;
              const isActive = activeId === t.id;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`dt-card ${isActive ? "dt-card-active" : ""}`}
                  onClick={() => setActiveId(t.id)}
                  onMouseEnter={() => setActiveId(t.id)}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <span className="dt-card-icon"><Icon size={20} strokeWidth={1.6} /></span>
                  <h3 className="dt-card-title">{t.title}</h3>
                  <p className="dt-card-desc">{t.description}</p>

                  {/* Mobile inline preview */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="dt-mobile-preview"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="dt-mobile-preview-inner">{previewMap[t.id]}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          <div className="dt-preview-panel" aria-live="polite">
            <div className="dt-preview-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  className="dt-preview-inner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  {previewMap[activeId]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="dt-supporting">
          From first enquiry to qualified handover, your AI Sales Agent helps every channel
          work harder for your sales team.
        </p>

        <div className="dt-cta-row">
          <a href="#hero-section" className="dt-btn dt-btn-primary">Start Building Your Agent</a>
          <a href="#hero-section" className="dt-btn dt-btn-secondary">Book Demo</a>
        </div>
      </div>
    </section>
  );
}
