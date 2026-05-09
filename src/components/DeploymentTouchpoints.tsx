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
  User,
  QrCode,
  Send,
  Truck,
  Tag,
  Percent,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RealisticGlobe from "./RealisticGlobe";
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

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="dt-ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="35%" stopColor="#fa7e1e" />
          <stop offset="65%" stopColor="#d62976" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#dt-ig-grad)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
    </svg>
  );
}

function RednoteIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#ff2442" />
      <text
        x="12" y="15.5"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'PingFang SC', sans-serif"
        fontSize="9"
        fontWeight="800"
        fill="#fff"
      >小红书</text>
    </svg>
  );
}

function PreviewSocial() {
  const sources: { label: string; x: number; y: number; side: "left" | "right"; Icon: React.FC<{ size?: number }> }[] = [
    { label: "Facebook",   x: 16, y: 12, side: "left",  Icon: FacebookIcon },
    { label: "TikTok",     x: 84, y: 12, side: "right", Icon: TikTokIcon },
    { label: "LinkedIn",   x: 12, y: 38, side: "left",  Icon: LinkedInIcon },
    { label: "Rednote",    x: 88, y: 38, side: "right", Icon: RednoteIcon },
    { label: "Instagram",  x: 12, y: 64, side: "left",  Icon: InstagramIcon },
    { label: "Google Ads", x: 88, y: 64, side: "right", Icon: GoogleAdsIcon },
    { label: "QR Code",    x: 16, y: 88, side: "left",  Icon: ({ size = 26 }) => <QrCode size={size} color="#0b1730" /> },
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
        <div
          key={s.label}
          className={`dt-source-anchor dt-source-anchor-${s.side}`}
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          <motion.div
            className="dt-source-tile"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, i % 2 === 0 ? 22 : -22, 0],
              y: [0, i % 2 === 0 ? -18 : 18, 0],
            }}
            transition={{
              opacity: { delay: 0.1 + i * 0.08 },
              scale: { delay: 0.1 + i * 0.08 },
              x: { duration: 6 + i * 0.6, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 7 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <s.Icon size={36} />
            <span>{s.label}</span>
          </motion.div>
        </div>
      ))}
      <div className="dt-source-hub-anchor">
        <motion.div
          className="dt-source-hub dt-source-hub-chat"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="dt-shc-header">
            <span className="dt-shc-back">‹</span>
            <div className="dt-shc-avatar">
              <span className="dt-shc-avatar-dot" />
            </div>
            <div className="dt-shc-headtxt">
              <p className="dt-shc-title">AI Sales Specialist</p>
              <p className="dt-shc-sub">Antbuildz</p>
            </div>
          </div>
          <div className="dt-shc-body">
            <div className="dt-shc-row dt-shc-row-user">
              <div className="dt-shc-bubble dt-shc-user">
                i want to rent scissor lift 12m, do you have in singapore
              </div>
              <div className="dt-shc-userav" />
            </div>
            <div className="dt-shc-airow">
              <div className="dt-shc-avatar dt-shc-avatar-sm">
                <span className="dt-shc-avatar-dot" />
              </div>
              <span className="dt-shc-ailabel">AI</span>
            </div>
            <p className="dt-shc-aitext">
              Hi! Thanks for reaching out. A 12 m scissor lift is a great choice for working at height in Singapore.
            </p>
            <p className="dt-shc-aih">Recommended Options for Rental</p>
            <div className="dt-shc-table">
              <div className="dt-shc-trow dt-shc-thead">
                <span>Equipment</span>
                <span>Daily</span>
                <span>Weekly</span>
              </div>
              <div className="dt-shc-trow">
                <span>LGMG AS1212 Scissor Lift</span>
                <span>SGD 600</span>
                <span>SGD 2.4k</span>
              </div>
              <div className="dt-shc-trow">
                <span>Genie GS-3246 Scissor Lift</span>
                <span>SGD 580</span>
                <span>SGD 2.3k</span>
              </div>
            </div>
          </div>
          <div className="dt-shc-input">
            <span>Ask about equipment, rentals…</span>
            <span className="dt-shc-send"><Send size={11} /></span>
          </div>
        </motion.div>
      </div>
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
                "0 0 0 0 rgba(220,38,38,0.55)",
                "0 0 0 10px rgba(220,38,38,0)",
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
  const roles: {
    label: string;
    x: number;
    y: number;
    color: string;
    side: "left" | "right";
  }[] = [
    { label: "Sales Rep",   x: 18, y: 14, color: "#06b6d4", side: "left" },
    { label: "Branch Team", x: 82, y: 14, color: "#ec4899", side: "right" },
    { label: "Marketing",   x: 10, y: 50, color: "#8b5cf6", side: "left" },
    { label: "Service",     x: 90, y: 50, color: "#10b981", side: "right" },
    { label: "Sales Admin", x: 18, y: 86, color: "#3b82f6", side: "left" },
    { label: "Manager",     x: 82, y: 86, color: "#f97316", side: "right" },
  ];
  return (
    <div className="dt-preview-team">
      <div className="dt-brain-glow" aria-hidden="true" />
      <svg className="dt-brain-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {roles.map((r) => {
          // Start the line from the pill's inner edge so it doesn't pass through the pill
          const startX = r.side === "left" ? r.x + 18 : r.x - 18;
          const cx = (startX + 50) / 2;
          return (
            <path
              key={r.label}
              d={`M${startX},${r.y} C${cx},${r.y} ${cx},50 50,50`}
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

      <div className="dt-brain-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [0.85, 1.05, 1], opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "flex" }}
        >
        <svg
          width="180"
          height="180"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dt-brain-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <radialGradient id="dt-brain-fill" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f5f3ff" />
              <stop offset="100%" stopColor="#e9d5ff" />
            </radialGradient>
          </defs>

          {/* Solid circular backdrop with gradient ring so brain stays visible against any background */}
          <circle cx="60" cy="60" r="54" fill="url(#dt-brain-fill)" />
          <circle cx="60" cy="60" r="54" fill="none" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.55" />

          {/* Left hemisphere */}
          <path
            d="M60 24 C48 16 32 18 26 30 C14 32 10 46 18 56 C10 64 16 78 28 80 C30 92 44 96 56 90 L60 90 Z"
            fill="#ffffff"
            stroke="#a855f7"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Right hemisphere */}
          <path
            d="M60 24 C72 16 88 18 94 30 C106 32 110 46 102 56 C110 64 104 78 92 80 C90 92 76 96 64 90 L60 90 Z"
            fill="#ffffff"
            stroke="#a855f7"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* Center fissure */}
          <path d="M60 22 L60 92" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />

          {/* Convolutions */}
          <path d="M32 36 C38 40 38 46 32 50" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M24 54 C32 56 34 62 28 68" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M42 62 C48 64 50 72 44 78" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M46 28 C52 32 54 38 50 44" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M88 36 C82 40 82 46 88 50" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M96 54 C88 56 86 62 92 68" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M78 62 C72 64 70 72 76 78" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M74 28 C68 32 66 38 70 44" fill="none" stroke="#a855f7" strokeWidth="1.6" strokeLinecap="round" />

          {/* Sparkle in center */}
          <path
            d="M60 48 L64 58 L60 68 L56 58 Z M50 58 L70 58"
            fill="#a855f7"
            stroke="#a855f7"
            strokeWidth="1.4"
            strokeLinejoin="round"
          >
            <animate attributeName="opacity" values="0.55;1;0.55" dur="2.2s" repeatCount="indefinite" />
          </path>
        </svg>
        </motion.div>
      </div>

      {roles.map((r, i) => (
        <div
          key={r.label}
          className={`dt-brain-pill-anchor dt-brain-pill-${r.side}`}
          style={{ left: `${r.x}%`, top: `${r.y}%` }}
        >
          <motion.div
            className="dt-brain-pill"
            style={{ ["--pill-color" as string]: r.color }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, i % 2 ? -4 : 4, 0],
            }}
            transition={{
              opacity: { delay: 0.3 + i * 0.1 },
              scale: { delay: 0.3 + i * 0.1 },
              y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="dt-brain-pill-icon">
              <User size={12} />
            </span>
            {r.label}
          </motion.div>
        </div>
      ))}

      {[
        { x: 30, y: 38, d: 2.2 },
        { x: 70, y: 42, d: 2.6 },
        { x: 38, y: 68, d: 3 },
        { x: 66, y: 64, d: 2.4 },
        { x: 50, y: 22, d: 3.2 },
        { x: 50, y: 80, d: 2.8 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="dt-brain-dot"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: p.d, repeat: Infinity, delay: i * 0.2 }}
        />
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
