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
    title: "Business Chat Channels",
    description:
      "Share your AI Agent link through WhatsApp, Facebook Messenger, WeChat, Telegram, or broadcast messages to guide customers into structured sales conversations.",
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

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.875 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.79-4.668 4.532-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.875V12h3.328l-.532 3.47h-2.796v8.384A12.003 12.003 0 0 0 24 12Z"/>
    </svg>
  );
}
function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#0A66C2" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
    </svg>
  );
}
function GoogleAdsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#FBBC04" d="M8.86 1.18a3 3 0 0 1 4.1 1.1l8.04 13.93a3 3 0 1 1-5.2 3L7.77 5.28a3 3 0 0 1 1.1-4.1Z"/>
      <path fill="#4285F4" d="M2.86 19.04 10.9 5.1a3 3 0 1 1 5.2 3L8.06 22.04a3 3 0 1 1-5.2-3Z"/>
      <circle fill="#34A853" cx="5.46" cy="20.54" r="3"/>
    </svg>
  );
}
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#25F4EE" d="M19.6 6.7a5.6 5.6 0 0 1-3.3-1.9V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V2h2.8a5.6 5.6 0 0 0 3.2 4.7v0Z"/>
      <path fill="#FE2C55" d="M20.6 7.7a5.6 5.6 0 0 1-3.3-1.9V16a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V3h2.8a5.6 5.6 0 0 0 3.2 4.7v0Z"/>
      <path fill="#000" d="M20.1 7.2a5.6 5.6 0 0 1-3.3-1.9v10.2a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V2.5h2.8a5.6 5.6 0 0 0 3.2 4.7Z"/>
    </svg>
  );
}

function PreviewSocial() {
  const sources: { label: string; x: number; y: number; Icon: React.FC<{ size?: number }> }[] = [
    { label: "TikTok", x: 50, y: 6, Icon: TikTokIcon },
    { label: "Facebook", x: 8, y: 26, Icon: FacebookIcon },
    { label: "LinkedIn", x: 72, y: 26, Icon: LinkedInIcon },
    { label: "Google Ads", x: 8, y: 78, Icon: GoogleAdsIcon },
    { label: "QR Code", x: 72, y: 78, Icon: ({ size = 20 }) => <QrCode size={size} color="#0b1730" /> },
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
          <s.Icon size={18} />
          <span>{s.label}</span>
        </motion.div>
      ))}
      <svg className="dt-source-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M50,10 Q50,50 50,50" />
        <path d="M18,30 Q50,50 50,50" /><path d="M82,30 Q50,50 50,50" />
        <path d="M18,78 Q50,50 50,50" /><path d="M82,78 Q50,50 50,50" />
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
          <h2 id="dt-heading" className="dt-title">
            One <span className="dt-title-gradient">Sale Agent</span>
          </h2>
          <p className="dt-subtitle">
            Multiple Languages · Multiple Channels · Multiple Markets
          </p>
          <p className="dt-desc">
            The future of sales should not be limited by office hours, channels, markets, or
            languages. Let your AI Sales Agent capture, qualify, and guide enquiries — so your
            team can step in for higher-value closing.
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
      </div>
    </section>
  );
}
