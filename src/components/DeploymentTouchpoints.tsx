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
  Truck,
  Tag,
  Percent,
  Sparkles,
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
    title: "Email Marketing & Outreach",
    description:
      "Turn email marketing, proposals, follow-ups, and signatures into direct sales entry points where customers can ask questions, compare options, and enquire anytime.",
    icon: Mail,
  },
  {
    id: "multilingual",
    title: "Scale Into New Markets",
    description:
      "Scale across borders with one AI Agent that engages new markets, supports different languages, and responds across time zones.",
    icon: Globe,
  },
  {
    id: "team",
    title: "Sales Knowledge Brain",
    description:
      "Turn product knowledge, pricing rules, and sales terms into a searchable brain your team can use across every sales conversation.",
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
        initial={{ x: "110%" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
    { label: "QR Code", x: 72, y: 78, Icon: ({ size = 26 }) => <QrCode size={size} color="#0b1730" /> },
  ];
  return (
    <div className="dt-preview-social">
      {sources.map((s, i) => (
        <motion.div
          key={s.label}
          className="dt-source-tile"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, i % 2 === 0 ? 6 : -6, 0],
            y: [0, i % 2 === 0 ? -5 : 5, 0],
          }}
          transition={{
            opacity: { delay: 0.1 + i * 0.08 },
            scale: { delay: 0.1 + i * 0.08 },
            x: { duration: 5 + i * 0.6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <s.Icon size={24} />
          <span>{s.label}</span>
        </motion.div>
      ))}
      <svg className="dt-source-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="dt-line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
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
        <div className="dt-chat-avatar dt-chat-avatar-green">AB</div>
        <div>
          <p className="dt-chat-name">Antbuildz Sales</p>
          <p className="dt-chat-status">online</p>
        </div>
      </div>
      <div className="dt-wa-body">
        <div className="dt-wa-bubble dt-wa-in">
          Hi, can I get the price for a 40m boom lift rental?
        </div>
        <div className="dt-wa-bubble dt-wa-out">
          Sure! You can get all the info you need — pricing, specs, availability —
          by chatting with our AI Agent anytime you like 👇
        </div>
        <motion.a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="dt-wa-link-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="dt-wa-link-icon">
            <MessageCircle size={18} />
          </div>
          <div className="dt-wa-link-text">
            <p className="dt-wa-link-title">Chat with Agent</p>
            <p className="dt-wa-link-url">antbuildz.ai/chat</p>
          </div>
          <motion.div
            className="dt-wa-link-cta"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(34,197,94,0.5)",
                "0 0 0 8px rgba(34,197,94,0)",
              ],
            }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            Open
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
}

function PreviewEmail() {
  return (
    <div className="dt-preview-email">
      <div className="dt-email-card">
        <div className="dt-email-head">
          <Mail size={14} />
          <span className="dt-email-subject">🎉 Special Offer · Up to 30% Off Equipment Rentals</span>
        </div>

        <div className="dt-email-promo-hero">
          <motion.div
            className="dt-email-promo-badge"
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            LIMITED TIME
          </motion.div>
          <p className="dt-email-promo-title">Boost Your Project, Cut Your Costs</p>
          <p className="dt-email-promo-sub">
            Exclusive monthly rates on boom lifts, forklifts & scissor lifts.
          </p>

          <motion.div
            className="dt-email-discount-tag"
            animate={{ rotate: [-8, -4, -8], y: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="dt-email-discount-num">30%</span>
            <span className="dt-email-discount-label">OFF</span>
          </motion.div>
          <motion.div
            className="dt-email-spark dt-email-spark-1"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={14} />
          </motion.div>
          <motion.div
            className="dt-email-spark dt-email-spark-2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 }}
          >
            <Sparkles size={10} />
          </motion.div>
        </div>

        <div className="dt-email-products">
          {[
            { label: "Boom Lift", price: "from $180/d" },
            { label: "Forklift", price: "from $90/d" },
            { label: "Scissor Lift", price: "from $120/d" },
          ].map((p, i) => (
            <motion.div
              key={p.label}
              className="dt-email-product"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="dt-email-product-icon">
                <Truck size={16} />
              </div>
              <div>
                <p className="dt-email-product-label">{p.label}</p>
                <p className="dt-email-product-price">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="dt-email-perks">
          <div><Check size={11} /> Free delivery</div>
          <div><Check size={11} /> Flexible terms</div>
          <div><Check size={11} /> 24/7 support</div>
        </div>

        <div className="dt-email-cta-wrap">
          <motion.button
            className="dt-email-cta"
            whileHover={{ scale: 1.04 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(37,99,235,0.5)",
                "0 0 0 10px rgba(37,99,235,0)",
              ],
            }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <Send size={13} /> Chat with Agent
          </motion.button>
          <p className="dt-email-cta-note">Get instant pricing · No commitment</p>
        </div>
      </div>

      <motion.div
        className="dt-email-popout"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{
          opacity: { delay: 0.4 },
          y: { delay: 0.4, duration: 2.4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="dt-bubble dt-bubble-ai">Hi! Want a quote on the promo rates?</div>
      </motion.div>
    </div>
  );
}

function PreviewMultilingual() {
  const langs = [
    "English", "中文", "日本語", "한국어", "Bahasa", "Tiếng Việt", "ภาษาไทย",
    "Español", "Français", "Deutsch", "Italiano", "Português", "Nederlands",
    "Русский", "Türkçe", "العربية", "हिन्दी", "বাংলা", "Polski", "Svenska",
    "Filipino", "ગુજરાતી",
  ];
  // Pre-compute scattered positions around the central hub (avoiding center)
  const positions = langs.map((_, i) => {
    const ring = i % 2 === 0 ? 36 : 44;
    const angle = (i / langs.length) * Math.PI * 2 + (i % 2 ? 0.2 : -0.2);
    return {
      x: 50 + Math.cos(angle) * ring,
      y: 50 + Math.sin(angle) * ring * 0.78,
    };
  });
  return (
    <div className="dt-preview-multi">
      <div className="dt-multi-center">
        <Globe size={28} />
        <p>AI Sales Agent</p>
        <span className="dt-multi-247"><Clock size={12} /> 24 / 7</span>
      </div>
      {langs.map((l, i) => {
        const { x, y } = positions[i];
        const dx = (i * 37) % 18 - 9;
        const dy = (i * 53) % 16 - 8;
        const dur = 4 + (i % 5) * 0.7;
        return (
          <motion.span
            key={l}
            className="dt-lang-chip"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: 1,
              x: [0, dx, -dx * 0.6, 0],
              y: [0, dy, -dy * 0.7, 0],
              rotate: [0, i % 2 ? 3 : -3, 0],
            }}
            transition={{
              opacity: { repeat: Infinity, duration: dur, ease: "easeInOut" },
              x: { repeat: Infinity, duration: dur + 1, ease: "easeInOut" },
              y: { repeat: Infinity, duration: dur + 0.5, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: dur + 2, ease: "easeInOut" },
              scale: { delay: 0.05 * i },
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
