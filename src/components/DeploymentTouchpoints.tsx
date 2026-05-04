import { motion } from "framer-motion";
import {
  Globe,
  MessageCircle,
  Mail,
  Megaphone,
  MonitorSmartphone,
  LayoutDashboard,
  Check,
  User,
  QrCode,
  Send,
  Truck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RealisticGlobe from "./RealisticGlobe";
import "./deployment-touchpoints.css";

type Touchpoint = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  span: "sm" | "md" | "lg" | "xl"; // bento sizing
};

const touchpoints: Touchpoint[] = [
  {
    id: "website",
    label: "Web",
    title: "Website & Webstore",
    description:
      "Answer product questions, recommend suitable options, and capture enquiries directly from your website or Antbuildz Webstore.",
    icon: MonitorSmartphone,
    span: "lg",
  },
  {
    id: "social",
    label: "Campaigns",
    title: "Social Media, Ads & QR Codes",
    description:
      "Turn campaigns, posts, brochures, catalogues, exhibitions, and QR codes into direct entry points for guided sales conversations.",
    icon: Megaphone,
    span: "md",
  },
  {
    id: "whatsapp",
    label: "Chat",
    title: "Business Chat Channels",
    description:
      "Share your AI Agent link through WhatsApp, Messenger, WeChat, Telegram, or broadcast messages to guide customers into structured sales conversations.",
    icon: MessageCircle,
    span: "sm",
  },
  {
    id: "email",
    label: "Email",
    title: "Email Marketing & Outreach",
    description:
      "Turn email marketing, proposals, follow-ups, and signatures into direct sales entry points where customers can ask, compare, and enquire anytime.",
    icon: Mail,
    span: "md",
  },
  {
    id: "multilingual",
    label: "Global",
    title: "Scale Into New Markets",
    description:
      "Scale across borders with one AI Agent that engages new markets, supports different languages, and responds across time zones.",
    icon: Globe,
    span: "xl",
  },
  {
    id: "team",
    label: "Brain",
    title: "Sales Knowledge Brain",
    description:
      "Turn product knowledge, pricing rules, and sales terms into a searchable brain your team can use across every sales conversation.",
    icon: LayoutDashboard,
    span: "sm",
  },
];

/* ---------- Visuals (kept from previous design, used inside each bento card) ---------- */

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
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
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
          <div className="dt-bubble dt-bubble-ai">Got it. I have 4 electric units matching that.</div>
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
    { label: "Facebook", x: 18, y: 16, Icon: FacebookIcon },
    { label: "TikTok", x: 82, y: 16, Icon: TikTokIcon },
    { label: "LinkedIn", x: 14, y: 50, Icon: LinkedInIcon },
    { label: "Google Ads", x: 86, y: 50, Icon: GoogleAdsIcon },
    { label: "QR Code", x: 18, y: 84, Icon: ({ size = 22 }) => <QrCode size={size} color="#0b1730" /> },
    { label: "Instagram", x: 82, y: 84, Icon: ({ size = 20 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="dt-ig-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="35%" stopColor="#fa7e1e" />
            <stop offset="65%" stopColor="#d62976" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#dt-ig-grad)"/>
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.6"/>
        <circle cx="17.5" cy="6.5" r="1.1" fill="#fff"/>
      </svg>
    ) },
  ];
  return (
    <div className="dt-preview-social">
      <svg className="dt-source-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="dt-line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
        {sources.map((s) => (
          <line key={s.label} x1={s.x} y1={s.y} x2={50} y2={50} />
        ))}
      </svg>
      {sources.map((s, i) => (
        <motion.div
          key={s.label}
          className="dt-source-tile"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, i % 2 === 0 ? 4 : -4, 0],
            y: [0, i % 2 === 0 ? -3 : 3, 0],
          }}
          transition={{
            opacity: { delay: 0.1 + i * 0.08 },
            scale: { delay: 0.1 + i * 0.08 },
            x: { duration: 5 + i * 0.6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <s.Icon size={26} />
          <span>{s.label}</span>
        </motion.div>
      ))}
      <motion.div
        className="dt-source-hub"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Sparkles size={14} /> AI Agent
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
        <div className="dt-wa-bubble dt-wa-in">Price for a 40m boom lift?</div>
        <div className="dt-wa-bubble dt-wa-out">
          Sure! Get pricing & specs from our AI Agent 👇
        </div>
        <motion.div
          className="dt-wa-link-card"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="dt-wa-link-icon">
            <MessageCircle size={14} />
          </div>
          <div className="dt-wa-link-text">
            <p className="dt-wa-link-title">Chat with Agent</p>
            <p className="dt-wa-link-url">antbuildz.ai/chat</p>
          </div>
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
          <Mail size={12} />
          <span className="dt-email-subject">🎉 Up to 30% Off Rentals</span>
        </div>
        <div className="dt-email-promo-hero">
          <motion.div
            className="dt-email-promo-badge"
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            LIMITED
          </motion.div>
          <p className="dt-email-promo-title">Cut Your Costs</p>
          <motion.div
            className="dt-email-discount-tag"
            animate={{ rotate: [-8, -4, -8], y: [0, -2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="dt-email-discount-num">30%</span>
            <span className="dt-email-discount-label">OFF</span>
          </motion.div>
        </div>
        <div className="dt-email-products">
          {[
            { label: "Boom" },
            { label: "Forklift" },
            { label: "Scissor" },
          ].map((p, i) => (
            <motion.div
              key={p.label}
              className="dt-email-product"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="dt-email-product-icon">
                <Truck size={12} />
              </div>
              <p className="dt-email-product-label">{p.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="dt-email-cta-wrap">
          <motion.button
            className="dt-email-cta"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(220,38,38,0.55)",
                "0 0 0 8px rgba(220,38,38,0)",
              ],
            }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <Send size={11} /> Chat now
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function PreviewMultilingual() {
  const langs = [
    "English", "中文", "日本語", "한국어", "Bahasa", "Tiếng Việt", "ภาษาไทย",
    "Español", "Français", "Deutsch", "Português", "Русский", "العربية",
    "हिन्दी", "Filipino",
  ];
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
      <div className="dt-globe-wrap" aria-hidden="true">
        <RealisticGlobe />
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
            }}
            transition={{
              opacity: { repeat: Infinity, duration: dur, ease: "easeInOut" },
              x: { repeat: Infinity, duration: dur + 1, ease: "easeInOut" },
              y: { repeat: Infinity, duration: dur + 0.5, ease: "easeInOut" },
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
  const roles: { label: string; x: number; y: number; color: string }[] = [
    { label: "Sales Rep", x: 14, y: 18, color: "#06b6d4" },
    { label: "Branch", x: 86, y: 28, color: "#ec4899" },
    { label: "Admin", x: 14, y: 78, color: "#3b82f6" },
    { label: "Manager", x: 86, y: 82, color: "#f97316" },
  ];
  return (
    <div className="dt-preview-team">
      <div className="dt-brain-glow" aria-hidden="true" />
      <svg className="dt-brain-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {roles.map((r) => {
          const cx = (r.x + 50) / 2;
          return (
            <path
              key={r.label}
              d={`M${r.x},${r.y} C${cx},${r.y} ${cx},50 50,50`}
              stroke={r.color}
              fill="none"
              strokeWidth="0.5"
              strokeDasharray="1.4 1.6"
              strokeLinecap="round"
              style={{ animation: "dt-dash-flow 1.4s linear infinite" }}
            />
          );
        })}
      </svg>
      <motion.div
        className="dt-brain-center"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.svg
          width="78" height="70" viewBox="0 0 120 110" aria-hidden="true"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="dt-brain-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <radialGradient id="dt-brain-fill" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
            </radialGradient>
          </defs>
          <path d="M58 18 C46 10 30 12 24 24 C12 26 8 40 16 50 C8 58 14 72 26 74 C28 86 42 92 54 86 C58 92 58 92 58 86 Z"
            fill="url(#dt-brain-fill)" stroke="url(#dt-brain-grad)" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M62 18 C74 10 90 12 96 24 C108 26 112 40 104 50 C112 58 106 72 94 74 C92 86 78 92 66 86 C62 92 62 92 62 86 Z"
            fill="url(#dt-brain-fill)" stroke="url(#dt-brain-grad)" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M60 16 L60 88" stroke="url(#dt-brain-grad)" strokeWidth="2" strokeLinecap="round" />
        </motion.svg>
      </motion.div>
      {roles.map((r, i) => (
        <motion.div
          key={r.label}
          className="dt-brain-pill"
          style={{ left: `${r.x}%`, top: `${r.y}%`, ["--pill-color" as string]: r.color }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, i % 2 ? -3 : 3, 0],
          }}
          transition={{
            opacity: { delay: 0.3 + i * 0.1 },
            scale: { delay: 0.3 + i * 0.1 },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="dt-brain-pill-icon">
            <User size={10} />
          </span>
          {r.label}
        </motion.div>
      ))}
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
            One <span className="dt-title-gradient">Sales Agent</span>
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

        <div className="dt-bento">
          {touchpoints.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.article
                key={t.id}
                className={`dt-bento-card dt-bento-${t.span}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="dt-bento-visual">
                  {previewMap[t.id]}
                </div>
                <div className="dt-bento-body">
                  <span className="dt-bento-label">
                    <Icon size={12} strokeWidth={2} />
                    {t.label}
                  </span>
                  <h3 className="dt-bento-title">{t.title}</h3>
                  <p className="dt-bento-desc">{t.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
