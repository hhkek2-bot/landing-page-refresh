import { useEffect, useRef, useState } from "react";
import type { MutableRefObject, RefObject } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UploadCloud,
  User,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./landing-bright.css";

type PricingPoint = { label: string; value: string };
type ChatCardData = {
  title: string;
  image: string;
  rating: string;
  verified: boolean;
  location: string;
  flag: string;
  pricing: PricingPoint[];
  action: string;
};
type ChatCardsData = ChatCardData[];
type ChatScriptStep =
  | { type: "user" | "ai"; delay: number; text: string }
  | { type: "typing"; delay: number; duration: number }
  | { type: "ai-card"; delay: number; data: ChatCardData }
  | { type: "ai-cards"; delay: number; cards: ChatCardsData };
type RenderedChatItem = {
  id: string;
  type: "user" | "ai" | "typing" | "ai-card" | "ai-cards";
  text?: string;
  data?: ChatCardData;
  cards?: ChatCardsData;
};
type Feature = { icon: LucideIcon; title: string; body: string; variant?: "default" | "workflow" };
type ProcessStep = { id: number; title: string; body: string; visual: "profile" | "ingest" | "rules" | "test" | "launch" };
type LogoWordmark = { name: string; variant: "cat" | "komatsu" | "hitachi" | "volvo" | "liebherr" | "jcb" | "john-deere" | "sany" | "xcmg" | "bobcat" | "kubota" | "case" };
type MetricHighlight = { icon: LucideIcon; value: string; label: string; subtitle: string };
type FaqHighlight = { question: string; answer: string };
type PainResolution = { title: string; description: string; impact: string; solutionTitle: string; solutionDescription: string; keyword: string };

function TypewriterHeading({ text, className = "", as = "h2", once = true }: { text: string; className?: string; as?: "h1" | "h2" | "h3"; once?: boolean }) {
  const reduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(headingRef, { once, amount: 0.55 });
  const [displayText, setDisplayText] = useState(reduceMotion ? text : "");
  const [isTyping, setIsTyping] = useState(false);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) { setDisplayText(text); setIsTyping(false); hasTypedRef.current = true; return; }
    if (!isInView) { if (!once && !hasTypedRef.current) setDisplayText(""); return; }
    if (once && hasTypedRef.current) { setDisplayText(text); setIsTyping(false); return; }
    hasTypedRef.current = true;
    setDisplayText("");
    setIsTyping(true);
    let index = 0;
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayText(text.slice(0, index));
        if (index >= text.length) { if (intervalId !== undefined) window.clearInterval(intervalId); setIsTyping(false); }
      }, 28);
    }, 120);
    return () => { window.clearTimeout(timeoutId); if (intervalId !== undefined) window.clearInterval(intervalId); };
  }, [isInView, once, reduceMotion, text]);

  const HeadingTag = as;
  const renderedText = reduceMotion || hasTypedRef.current ? displayText || text : displayText || "\u00A0";
  return (
    <HeadingTag ref={headingRef} className={["bright-typewriter-heading", isTyping ? "is-typing" : "", className].filter(Boolean).join(" ")}>
      {renderedText}
    </HeadingTag>
  );
}

const featureCards: Feature[] = [
  { icon: Database, title: "Industry Knowledge", body: "Built on marketplace intelligence from thousands of equipment listings, the AI understands machine specifications, model naming conventions, payload limits, and industry terminology from day one." },
  { icon: UploadCloud, title: "Knowledge Training", body: "Upload catalogues, manuals, PDFs, or sync Google Sheets to train the AI with your inventory, pricing logic, policies, and operational workflows." },
  { icon: SearchCheck, title: "Equipment Matching", body: "Matches project requirements with suitable equipment using specifications, availability, and operational constraints to recommend the most relevant options." },
  { icon: Activity, title: "Buyer Signals", body: "Analyzes conversations and engagement patterns to detect purchasing intent and highlight high-value opportunities for your sales team." },
  { icon: ShieldCheck, title: "Data Security", body: "Company knowledge bases are encrypted and isolated by organization to ensure proprietary information remains private and protected." },
  { icon: Sparkles, title: "Workflow Agent", body: "Executes operational tasks such as sharing quotations, comparing specifications, generating invoices, and creating reservations directly from customer conversations.", variant: "workflow" },
];

const processSteps: ProcessStep[] = [
  { id: 1, title: "Personalize Your Agent", body: "Set agent name, voice, and response style to mirror your strongest sales rep.", visual: "profile" },
  { id: 2, title: "Ingest Your Data", body: "Upload manuals, product lists, and pricing tables or connect live sources.", visual: "ingest" },
  { id: 3, title: "Instruct & Align", body: "Define quote boundaries, fallback rules, and escalation logic for high-risk answers.", visual: "rules" },
  { id: 4, title: "Test in Playground", body: "Simulate real customer prompts before launch, including pricing and technical scenarios.", visual: "test" },
  { id: 5, title: "Launch & Integrate", body: "Share your public chat link and embed in your site for immediate lead capture.", visual: "launch" },
];

const logoWordmarks: LogoWordmark[] = [
  { name: "CAT", variant: "cat" }, { name: "Komatsu", variant: "komatsu" }, { name: "Hitachi", variant: "hitachi" },
  { name: "Volvo CE", variant: "volvo" }, { name: "Liebherr", variant: "liebherr" }, { name: "JCB", variant: "jcb" },
  { name: "John Deere", variant: "john-deere" }, { name: "SANY", variant: "sany" }, { name: "XCMG", variant: "xcmg" },
  { name: "Bobcat", variant: "bobcat" }, { name: "Kubota", variant: "kubota" }, { name: "CASE", variant: "case" },
];

function renderLogoWordmark(logo: LogoWordmark) {
  switch (logo.variant) {
    case "cat": return (<span className="bright-brand bright-brand-cat" aria-label="CAT"><span className="bright-brand-cat-text">C<span className="bright-brand-cat-a">A</span>T</span><span className="bright-brand-cat-triangle" aria-hidden="true" /></span>);
    case "komatsu": return <span className="bright-brand bright-brand-komatsu">KOMATSU</span>;
    case "hitachi": return (<span className="bright-brand bright-brand-hitachi"><span className="bright-brand-hitachi-mark" aria-hidden="true" /><span>Hitachi</span></span>);
    case "volvo": return (<span className="bright-brand bright-brand-volvo"><span className="bright-brand-volvo-pill">VOLVO</span><span className="bright-brand-volvo-ce">CE</span></span>);
    case "liebherr": return <span className="bright-brand bright-brand-liebherr">LIEBHERR</span>;
    case "jcb": return (<span className="bright-brand bright-brand-jcb" aria-label="JCB"><span>J</span><span>C</span><span>B</span></span>);
    case "john-deere": return (<span className="bright-brand bright-brand-johndeere"><span className="bright-brand-johndeere-shield" aria-hidden="true" /><span>John Deere</span></span>);
    case "sany": return (<span className="bright-brand bright-brand-sany"><span className="bright-brand-sany-mark" aria-hidden="true" /><span>SANY</span></span>);
    case "xcmg": return (<span className="bright-brand bright-brand-xcmg"><span className="bright-brand-xcmg-mark" aria-hidden="true" /><span>XCMG</span></span>);
    case "bobcat": return (<span className="bright-brand bright-brand-bobcat"><span className="bright-brand-bobcat-mark" aria-hidden="true" /><span>Bobcat</span></span>);
    case "kubota": return (<span className="bright-brand bright-brand-kubota"><span className="bright-brand-kubota-mark" aria-hidden="true" /><span>Kubota</span></span>);
    case "case": return (<span className="bright-brand bright-brand-case"><span className="bright-brand-case-roof" aria-hidden="true" /><span>CASE</span></span>);
    default: return <span className="bright-brand">{logo.name}</span>;
  }
}

type StatItem = { value: string; numericEnd: number; suffix: string; prefix: string; label: string; sublabel: string };

const statItems: StatItem[] = [
  { value: "2–3x", numericEnd: 3, suffix: "x", prefix: "", label: "More Qualified Leads", sublabel: "Capture buyer intent, specs, and urgency from the first interaction" },
  { value: "< 10s", numericEnd: 10, suffix: "s", prefix: "< ", label: "First Response Time", sublabel: "Engage every lead instantly — before competitors even reply" },
  { value: "50%", numericEnd: 50, suffix: "%", prefix: "", label: "Faster Quote-Ready Output", sublabel: "From inquiry to structured, accurate quotation in one conversation" },
  { value: "65%+", numericEnd: 65, suffix: "%+", prefix: "", label: "Open to AI-Guided Decisions", sublabel: "Buyers increasingly rely on AI — when backed by real data and logic" },
];

const faqHighlights: FaqHighlight[] = [
  { question: "What is the Antbuildz AI Agent?", answer: "It is an AI sales agent built for equipment businesses to answer technical questions, guide discovery, and move enquiries toward quotation." },
  { question: "How long does setup typically take?", answer: "Basic deployment can be done quickly, while more advanced setups depend on catalog size, data quality, and scenario complexity." },
  { question: "Can the AI Agent assist with quotation requests?", answer: "Yes. It can collect structured quote details, guide users through the required fields, and support your sales workflow." },
  { question: "Can the AI Agent integrate with inventory systems?", answer: "Yes. It can use inventory and availability signals so responses stay relevant to stock and operational conditions." },
  { question: "Does it support multilingual conversations?", answer: "Yes. The platform supports multilingual conversations when the model setup and knowledge coverage are configured appropriately." },
  { question: "Is company knowledge encrypted?", answer: "Yes. Company knowledge is protected with tenant isolation and encryption controls so proprietary information remains private." },
];

const painResolutions: PainResolution[] = [
  { title: "Response Delay", description: "Enquiries come in outside working hours or during busy periods", impact: "High-intent buyers move on before your team replies", solutionTitle: "Instant Response, 24/7", solutionDescription: "Engage every enquiry the moment it arrives—so no opportunity is lost", keyword: "24/7" },
  { title: "Limited Capacity", description: "Your team can only handle a limited number of conversations at once", impact: "New enquiries queue up, slow down, or get ignored", solutionTitle: "Unlimited Parallel Conversations", solutionDescription: "Handle multiple buyers simultaneously without queue delays", keyword: "Concurrent" },
  { title: "Knowledge Bottleneck", description: "Sales knowledge lives in people, not systems", impact: "Training takes time and answers become inconsistent", solutionTitle: "Always Up-to-Date Knowledge", solutionDescription: "AI learns from your catalogues and updates instantly with your data", keyword: "Instant" },
  { title: "Inconsistent Responses", description: "Different staff give different answers", impact: "Creates confusion and reduces buyer confidence", solutionTitle: "Consistent, Rule-Driven Answers", solutionDescription: "Every response follows your business logic and sales rules", keyword: "Standardized" },
];

const chatScript: ChatScriptStep[] = [
  { type: "user", delay: 1800, text: "I need a 20-ton excavator for a 3-month project in KL. What do you recommend?" },
  { type: "typing", delay: 800, duration: 2800 },
  { type: "ai", delay: 0, text: "For a 3-month KL project, I recommend the <strong>Hitachi ZAXIS 200</strong>. I also prepared a quick rental view for you:" },
  {
    type: "ai-cards", delay: 1200, cards: [
      { title: "2020 CAT 320 Crawler Excavator", image: "/cat-320.jpg", rating: "4.9/5", verified: true, location: "Kuala Lumpur Hub", flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg", pricing: [{ label: "Daily", value: "RM 520" }, { label: "Weekly", value: "RM 2,900" }, { label: "Monthly", value: "RM 9,800" }], action: "Get Quote" },
      { title: "2019 Hitachi ZX200-7 Crawler Excavator", image: "https://images.pexels.com/photos/14452156/pexels-photo-14452156.jpeg?auto=compress&cs=tinysrgb&w=600", rating: "4.8/5", verified: true, location: "Selangor Hub", flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg", pricing: [{ label: "Daily", value: "RM 500" }, { label: "Weekly", value: "RM 2,800" }, { label: "Monthly", value: "RM 9,500" }], action: "Get Quote" },
      { title: "2021 SANY SY215C Crawler Excavator", image: "/sany-sy215.jpg", rating: "4.7/5", verified: true, location: "Johor Hub", flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg", pricing: [{ label: "Daily", value: "RM 460" }, { label: "Weekly", value: "RM 2,600" }, { label: "Monthly", value: "RM 8,800" }], action: "Get Quote" },
    ],
  },
  { type: "user", delay: 4500, text: "Do you have compatible hydraulic breaker attachments and Monday delivery?" },
  { type: "typing", delay: 1000, duration: 2400 },
  { type: "ai", delay: 0, text: "Yes. NPK GH9 is compatible and available. Monday morning delivery to KL is available." },
  {
    type: "ai-card", delay: 1100, data: {
      title: "2022 NPK GH9 Hydraulic Breaker Attachment", image: "https://images.pexels.com/photos/30519990/pexels-photo-30519990.jpeg?auto=compress&cs=tinysrgb&w=720&h=720&fit=crop", rating: "5.0/5", verified: true, location: "Selangor Hub", flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
      pricing: [{ label: "Daily", value: "RM 150" }, { label: "Weekly", value: "RM 600" }, { label: "Monthly", value: "RM 1,200" }], action: "Add to Active Quote",
    },
  },
];

function StepGraphic({ visual }: { visual: ProcessStep["visual"] }) {
  if (visual === "profile") return (<div className="bright-step-graphic"><div className="bright-anim-ring" /><div className="bright-anim-avatar"><User size={20} /></div></div>);
  if (visual === "ingest") return (<div className="bright-step-graphic"><div className="bright-anim-doc bright-doc-one" /><div className="bright-anim-doc bright-doc-two" /><div className="bright-anim-folder" /></div>);
  if (visual === "rules") return (<div className="bright-step-graphic"><div className="bright-anim-slider-bg" /><div className="bright-anim-slider-knob" /></div>);
  if (visual === "test") return (<div className="bright-step-graphic"><div className="bright-anim-chat-bubble"><span className="bright-dot" /><span className="bright-dot" /><span className="bright-dot" /></div></div>);
  return (
    <div className="bright-step-graphic bright-step-graphic-launch">
      <svg className="bright-launch-rocket-graphic" viewBox="0 0 220 170" role="img" aria-label="Rocket launch">
        <defs>
          <linearGradient id="brightRocketBody" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#fffdf8" /><stop offset="100%" stopColor="#f0ece5" /></linearGradient>
          <linearGradient id="brightRocketAccent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ffcc56" /><stop offset="100%" stopColor="#e3180a" /></linearGradient>
          <linearGradient id="brightRocketFlame" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stopColor="#fff0b0" /><stop offset="50%" stopColor="#ffb100" /><stop offset="100%" stopColor="#ff5a1f" /></linearGradient>
          <radialGradient id="brightRocketGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(255,197,1,0.55)" /><stop offset="100%" stopColor="rgba(255,197,1,0)" /></radialGradient>
        </defs>
        <ellipse className="bright-launch-glow" cx="110" cy="128" rx="66" ry="28" fill="url(#brightRocketGlow)" />
        <path className="bright-launch-trail" d="M111 98 C111 112 104 118 104 132" fill="none" stroke="#f5d373" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 8" />
        <path className="bright-launch-trail bright-launch-trail-secondary" d="M122 101 C129 113 134 122 140 136" fill="none" stroke="#f3deaa" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 9" />
        <path className="bright-launch-trail bright-launch-trail-left" d="M98 101 C90 113 86 121 80 136" fill="none" stroke="#f3deaa" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 9" />
        <g className="bright-launch-rocket-group">
          <ellipse className="bright-launch-rocket-shadow" cx="110" cy="131" rx="33" ry="10" />
          <path className="bright-launch-smoke bright-launch-smoke-left" d="M74 132 C65 126 65 112 78 108 C82 98 95 98 99 108 C109 109 113 120 107 128 C103 133 88 136 74 132 Z" fill="#efeae3" opacity="0.9" />
          <path className="bright-launch-smoke bright-launch-smoke-right" d="M114 130 C112 120 121 111 132 112 C136 103 150 102 156 112 C168 113 172 123 165 131 C160 137 146 138 132 136 C122 140 114 136 114 130 Z" fill="#f3ede6" opacity="0.92" />
          <path className="bright-launch-flame-outer" d="M110 120 C99 132 100 148 110 156 C120 147 121 132 110 120 Z" fill="url(#brightRocketFlame)" />
          <path className="bright-launch-flame-inner" d="M110 126 C104 134 105 145 110 149 C115 145 116 134 110 126 Z" fill="#fff5d1" />
          <path d="M110 22 C124 34 130 52 129 88 L110 99 L91 88 C90 52 96 34 110 22 Z" fill="url(#brightRocketBody)" stroke="#776a60" strokeWidth="2.2" />
          <path d="M110 22 C116 30 120 37 122 48 L98 48 C100 37 104 30 110 22 Z" fill="url(#brightRocketAccent)" stroke="#776a60" strokeWidth="1.6" />
          <path d="M91 88 L78 104 L93 100 L102 88 Z" fill="#e3180a" stroke="#776a60" strokeWidth="1.9" />
          <path d="M129 88 L142 104 L127 100 L118 88 Z" fill="#e3180a" stroke="#776a60" strokeWidth="1.9" />
          <path d="M101 98 L96 111 L110 104 L124 111 L119 98 Z" fill="#f6f3ee" stroke="#776a60" strokeWidth="1.8" />
          <circle cx="110" cy="63" r="11" fill="#fff8eb" stroke="#776a60" strokeWidth="2" />
          <circle cx="110" cy="63" r="5.5" fill="#ffc501" opacity="0.9" />
        </g>
        <g className="bright-launch-stars" aria-hidden="true">
          <circle cx="67" cy="34" r="2.5" /><circle cx="151" cy="29" r="2.2" /><circle cx="161" cy="61" r="1.8" /><circle cx="60" cy="69" r="1.8" />
        </g>
      </svg>
    </div>
  );
}

function SolutionPanel({ activeItem, reduceMotion, mobile = false }: { activeItem: PainResolution; reduceMotion: boolean; mobile?: boolean }) {
  return (
    <div className={`bright-solution-panel ${mobile ? "bright-solution-panel-mobile" : ""}`.trim()} aria-live="polite">
      <div className="bright-solution-glow" aria-hidden="true" />
      <div className="bright-solution-kicker">How Antbuildz AI Agent Fixes It</div>
      <AnimatePresence mode="wait">
        <motion.div key={`${mobile ? "mobile" : "desktop"}-${activeItem.solutionTitle}`} className="bright-solution-content"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -10, scale: 0.99 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.3, ease: "easeOut" }}>
          <motion.span className="bright-solution-keyword"
            initial={reduceMotion ? { opacity: 0.08 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.08, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.5, ease: "easeOut" }}
            aria-hidden="true">{activeItem.keyword}</motion.span>
          <div className="bright-solution-copy">
            <h3>{activeItem.solutionTitle}</h3>
            <p>{activeItem.solutionDescription}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PainList({ activeIndex, setActiveIndex, reduceMotion, painRefs }: { activeIndex: number; setActiveIndex: (i: number) => void; reduceMotion: boolean; painRefs: MutableRefObject<Array<HTMLButtonElement | null>> }) {
  return (
    <div className="bright-pain-column">
      <div className="bright-pain-column-kicker">Where Sales Break Down</div>
      <div className="bright-pain-list" role="tablist" aria-label="Sales pain points">
        {painResolutions.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.button type="button" key={item.title}
              ref={(el) => { painRefs.current[index] = el; }}
              className={`bright-pain-item ${isActive ? "is-active" : ""}`.trim()}
              role="tab" aria-selected={isActive} aria-controls={`pain-solution-${index}`}
              onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}
              animate={isActive ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: reduceMotion ? 0.12 : 0.2, ease: "easeOut" }}>
              <div className="bright-pain-item-head"><h3>{item.title}</h3></div>
              <p className="bright-pain-description">{item.description}</p>
              <p className="bright-pain-impact">{item.impact}</p>
              {isActive && <div id={`pain-solution-${index}`} className="bright-pain-mobile-panel"><SolutionPanel activeItem={item} reduceMotion={reduceMotion} mobile /></div>}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function ComparisonInteractive({ activeIndex, setActiveIndex, beamTop, beamLeft, beamWidth, reduceMotion, painRefs, solutionRef }: {
  activeIndex: number; setActiveIndex: (i: number) => void; beamTop: number; beamLeft: number; beamWidth: number; reduceMotion: boolean;
  painRefs: MutableRefObject<Array<HTMLButtonElement | null>>; solutionRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div className="bright-comparison-shell">
      <div className="bright-comparison-grid">
        <PainList activeIndex={activeIndex} setActiveIndex={setActiveIndex} reduceMotion={reduceMotion} painRefs={painRefs} />
        <div className="bright-solution-column" ref={solutionRef}>
          <SolutionPanel activeItem={painResolutions[activeIndex]} reduceMotion={reduceMotion} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {beamWidth > 0 && (
          <motion.div key={activeIndex} className="bright-connector-beam"
            initial={reduceMotion ? { opacity: 0.45 } : { opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1, top: beamTop, left: beamLeft, width: beamWidth }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.42, ease: "easeOut" }} aria-hidden="true">
            <span className="bright-connector-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Landing() {
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const solutionColumnRef = useRef<HTMLDivElement | null>(null);
  const painRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [chatItems, setChatItems] = useState<RenderedChatItem[]>([]);
  const [activePainIndex, setActivePainIndex] = useState(0);
  const [connectorPosition, setConnectorPosition] = useState({ top: 140, left: 0, width: 0 });
  const reduceMotion = useReducedMotion();

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const heroSection = heroSectionRef.current;
    if (!canvas || !heroSection) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frameId = 0;
    let width = 0;
    let height = 0;

    class Particle {
      x: number; y: number; vx: number; vy: number; radius: number;
      constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.vx = (Math.random() - 0.5) * 0.7; this.vy = (Math.random() - 0.5) * 0.7; this.radius = Math.random() * 2 + 1; }
      update() { this.x += this.vx; this.y += this.vy; if (this.x <= 0 || this.x >= width) this.vx *= -1; if (this.y <= 0 || this.y >= height) this.vy *= -1; }
      draw() { ctx!.beginPath(); ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx!.fillStyle = "rgba(59,130,246,0.38)"; ctx!.fill(); }
    }

    const resize = () => { width = heroSection.offsetWidth; height = heroSection.offsetHeight; canvas.width = width; canvas.height = height; };
    resize();
    window.addEventListener("resize", resize);
    const particleCount = window.innerWidth > 768 ? 58 : 26;
    const particles = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => { p.update(); p.draw(); });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 160) { ctx.beginPath(); ctx.strokeStyle = `rgba(203,213,225,${0.36 * (1 - distance / 160)})`; ctx.lineWidth = 1; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
        }
      }
      frameId = window.requestAnimationFrame(animate);
    };
    animate();
    return () => { window.cancelAnimationFrame(frameId); window.removeEventListener("resize", resize); };
  }, []);

  // Chat script animation with word-by-word AI rendering
  useEffect(() => {
    let alive = true;
    const timers: number[] = [];
    const queue = (cb: () => void, delay: number) => { const id = window.setTimeout(() => { if (!alive) return; cb(); }, delay); timers.push(id); };

    const typeAiText = (msgId: string, fullHtml: string, onDone: () => void) => {
      // Strip HTML tags for word splitting, but preserve them in output
      const words = fullHtml.split(/(?<=\s)|(?=\s)/);
      let currentIndex = 0;
      const typeNext = () => {
        if (!alive) return;
        if (currentIndex >= words.length) { onDone(); return; }
        currentIndex++;
        const partial = words.slice(0, currentIndex).join("");
        setChatItems((prev) => prev.map((item) => item.id === msgId ? { ...item, text: partial } : item));
        const delay = 25 + Math.random() * 35;
        queue(typeNext, delay);
      };
      typeNext();
    };

    const runStep = (index: number) => {
      if (!alive) return;
      if (index >= chatScript.length) { queue(() => { setChatItems([]); runStep(0); }, 8000); return; }
      const step = chatScript[index];
      queue(() => {
        if (step.type === "typing") {
          const typingId = `typing-${Date.now()}-${index}`;
          setChatItems((prev) => [...prev, { id: typingId, type: "typing" }]);
          queue(() => { setChatItems((prev) => prev.filter((i) => i.id !== typingId)); runStep(index + 1); }, step.duration);
          return;
        }
        if (step.type === "ai" || step.type === "user") {
          const ts = step as { type: "user" | "ai"; text: string };
          const msgId = `msg-${Date.now()}-${index}`;
          if (ts.type === "ai") {
            setChatItems((prev) => [...prev, { id: msgId, type: "ai", text: "" }]);
            typeAiText(msgId, ts.text, () => runStep(index + 1));
          } else {
            setChatItems((prev) => [...prev, { id: msgId, type: "user", text: ts.text }]);
            runStep(index + 1);
          }
          return;
        }
        if (step.type === "ai-card") setChatItems((prev) => [...prev, { id: `card-${Date.now()}-${index}`, type: "ai-card", data: step.data }]);
        else if (step.type === "ai-cards") setChatItems((prev) => [...prev, { id: `cards-${Date.now()}-${index}`, type: "ai-cards", cards: step.cards }]);
        runStep(index + 1);
      }, step.delay);
    };
    queue(() => runStep(0), 1200);
    return () => { alive = false; timers.forEach((id) => window.clearTimeout(id)); };
  }, []);

  useEffect(() => { const cb = chatBodyRef.current; if (cb) cb.scrollTop = cb.scrollHeight; }, [chatItems]);

  // Intersection observer for steps
  useEffect(() => {
    const targets = document.querySelectorAll(".bright-step-hidden");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => { if (!entry.isIntersecting) return; entry.target.classList.add("visible", "bright-step-visible"); obs.unobserve(entry.target); });
    }, { threshold: 0.1, rootMargin: "0px 0px -12% 0px" });
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Connector beam positioning
  useEffect(() => {
    const updateConnector = () => {
      const activeItem = painRefs.current[activePainIndex];
      const solutionColumn = solutionColumnRef.current;
      const shell = solutionColumn?.closest(".bright-comparison-shell") as HTMLElement | null;
      if (!activeItem || !solutionColumn || !shell || window.innerWidth <= 980) { setConnectorPosition((p) => (p.width === 0 ? p : { top: p.top, left: 0, width: 0 })); return; }
      const shellRect = shell.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const solutionRect = solutionColumn.getBoundingClientRect();
      setConnectorPosition({ top: itemRect.top - shellRect.top + itemRect.height / 2, left: itemRect.right - shellRect.left + 18, width: Math.max(solutionRect.left - itemRect.right - 32, 48) });
    };
    updateConnector();
    window.addEventListener("resize", updateConnector);
    return () => window.removeEventListener("resize", updateConnector);
  }, [activePainIndex]);

  const renderChatItem = (item: RenderedChatItem) => {
    if (item.type === "typing") return (
      <div className="bright-chat-row" key={item.id}><div className="bright-chat-avatar bright-avatar-ai"><Bot size={14} /></div><div className="bright-chat-msg bright-chat-msg-ai bright-typing-shell"><div className="bright-typing-indicator"><span className="bright-dot" /><span className="bright-dot" /><span className="bright-dot" /></div></div></div>
    );
    if (item.type === "ai-card" && item.data) return (
      <div className="bright-chat-row" key={item.id}><div className="bright-chat-avatar bright-avatar-ai"><Bot size={14} /></div>
        <div className="bright-chat-msg bright-chat-msg-ai bright-card-msg"><div className="bright-chat-card">
          <div className="bright-card-image-wrap"><img src={item.data.image} alt={item.data.title} /><div className="bright-card-badges"><span className="bright-badge-rating"><Star size={13} fill="currentColor" color="currentColor" /> {item.data.rating}</span>{item.data.verified && <span className="bright-badge-verified"><CheckCircle2 size={14} /> Verified</span>}</div></div>
          <div className="bright-card-body"><p className="bright-card-title">{item.data.title}</p><p className="bright-card-location"><img src={item.data.flag} alt="country" /> {item.data.location}</p><div className="bright-price-grid">{item.data.pricing.map((p) => (<div className="bright-price-col" key={p.label}><span className="bright-price-label">{p.label}</span><span className="bright-price-value">{p.value}</span></div>))}</div><button type="button" className="bright-card-action">{item.data.action}</button></div>
        </div></div>
      </div>
    );
    if (item.type === "ai-cards" && item.cards) return (
      <div className="bright-chat-row" key={item.id}><div className="bright-chat-avatar bright-avatar-ai"><Bot size={14} /></div>
        <div className="bright-cards-row">{item.cards.map((card, ci) => (
          <div className="bright-chat-card bright-chat-card-sm" key={ci}>
            <div className="bright-card-image-wrap"><img src={card.image} alt={card.title} /><div className="bright-card-badges"><span className="bright-badge-rating"><Star size={11} fill="currentColor" color="currentColor" /> {card.rating}</span>{card.verified && <span className="bright-badge-verified"><CheckCircle2 size={12} /> Verified</span>}</div></div>
            <div className="bright-card-body"><p className="bright-card-title">{card.title}</p><p className="bright-card-location"><img src={card.flag} alt="country" /> {card.location}</p><div className="bright-price-grid">{card.pricing.map((p) => (<div className="bright-price-col" key={p.label}><span className="bright-price-label">{p.label}</span><span className="bright-price-value">{p.value}</span></div>))}</div><button type="button" className="bright-card-action">{card.action}</button></div>
          </div>
        ))}</div>
      </div>
    );
    return (
      <div className={`bright-chat-row ${item.type === "user" ? "bright-user-row" : ""}`} key={item.id}>
        <div className={`bright-chat-avatar ${item.type === "user" ? "bright-avatar-user" : "bright-avatar-ai"}`}>{item.type === "user" ? "U" : <Bot size={14} />}</div>
        <div className={`bright-chat-msg ${item.type === "user" ? "bright-chat-msg-user" : "bright-chat-msg-ai"}`}><span dangerouslySetInnerHTML={{ __html: item.text ?? "" }} /></div>
      </div>
    );
  };

  return (
    <div className="bright-landing">
      {/* Nav */}
      <nav className="bright-nav">
        <div className="bright-logo-wrap">
          <Link to="/" className="bright-logo"><Bot size={28} /> Antbuildz</Link>
        </div>
        <div className="bright-nav-links">
          <a href="#demo">Demo</a>
          <a href="#comparison">Pain Points</a>
          <a href="#process">How It Works</a>
          <a href="#faq-summary">FAQ</a>
        </div>
        <div className="bright-nav-actions">
          <Link to="/" className="bright-btn bright-btn-sm bright-btn-primary">Get Started <ArrowRight size={16} /></Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bright-hero" id="hero-section" ref={heroSectionRef}>
        <div className="bright-canvas-container"><canvas ref={canvasRef} /></div>
        <div className="bright-container bright-hero-centered">
          <div className="bright-hero-content bright-hero-content-centered">
            <h1 className="bright-text-gradient">The 24/7 AI Sales Agent<br />for Equipment Businesses</h1>
            <p className="bright-subtitle">Deploy a digital sales expert that answers technical questions, recommends suitable machinery, and converts inquiries into qualified leads instantly.</p>
            <div className="bright-hero-actions">
              <Link to="/" className="bright-btn bright-btn-primary">Build Your AI Agent <ArrowRight size={18} /></Link>
            </div>
          </div>
          <div className="bright-hero-mockup-wrap">
            <div className="bright-mockup-glow" aria-hidden="true" />
            <div className="bright-chat-mockup" id="demo">
              <div className="bright-chat-header"><span className="bright-status-dot" /><span className="bright-chat-title"><Bot size={18} /> Antbuildz Sales Agent</span><span className="bright-online-status"><span /> Online</span></div>
              <div className="bright-chat-body" ref={chatBodyRef}>{chatItems.map(renderChatItem)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="bright-logo-strip" aria-label="Trusted companies">
        <div className="bright-container bright-logo-marquee-shell">
          <div className="bright-logo-marquee">
            {[0, 1].map((loopIndex) => (
              <ul className="bright-logo-list" key={loopIndex} aria-hidden={loopIndex === 1}>
                {logoWordmarks.map((logo) => (<li key={`${loopIndex}-${logo.name}`} className="bright-logo-chip">{renderLogoWordmark(logo)}</li>))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bright-features">
        <div className="bright-container">
          <div className="bright-section-header"><TypewriterHeading text="The Capabilities" /><p>Built specifically for heavy equipment rental, spare parts, and technical sales teams.</p></div>
          <div className="bright-feature-grid">
            {featureCards.map((f) => (
              <article className={`bright-feature-card ${f.variant === "workflow" ? "bright-feature-card-workflow" : ""}`.trim()} key={f.title}>
                <div className="bright-feature-hover-wave" aria-hidden="true" />
                <div className="bright-feature-icon"><f.icon size={28} /></div>
                <h3>{f.title}</h3><p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Pain Points */}
      <section className="bright-comparison" id="comparison">
        <div className="bright-container">
          <div className="bright-section-header bright-comparison-header">
            <TypewriterHeading text="You're Losing Sales Before Your Team Even Responds" />
            <p>Every missed reply, delayed response, or inconsistent answer creates friction in your sales process. Not because your team isn't capable—but because human-led workflows cannot scale with demand.</p>
          </div>
          <ComparisonInteractive activeIndex={activePainIndex} setActiveIndex={setActivePainIndex} beamTop={connectorPosition.top} beamLeft={connectorPosition.left} beamWidth={connectorPosition.width} reduceMotion={!!reduceMotion} painRefs={painRefs} solutionRef={solutionColumnRef} />
          <p className="bright-comparison-closing">More enquiries engaged. More buyers converted. Without increasing headcount.</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bright-process" id="process">
        <div className="bright-container">
          <div className="bright-section-header"><TypewriterHeading text="Implementation in Minutes" /><p>The exact process to deploy your digital sales expert.</p></div>
          <div className="bright-vertical-steps">
            {processSteps.map((step) => (
              <div className="bright-step bright-step-hidden" key={step.id}>
                <div className="bright-step-num">{step.id}</div>
                <div className="bright-step-content"><div className="bright-step-text"><h4>{step.title}</h4><p>{step.body}</p></div><StepGraphic visual={step.visual} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bright-metrics">
        <div className="bright-container">
          <div className="bright-metrics-heading"><TypewriterHeading text={"Built to convert more equipment inquiries into\nrevenue-ready conversations."} /></div>
          <div className="bright-metrics-top">
            <article className="bright-metrics-story">
              <div className="bright-metrics-story-copy">
                <p className="bright-metrics-kicker">Operational impact</p>
                <h3>Scalable sales performance for rental, equipment, and parts teams.</h3>
                <p>Antbuildz AI Agent helps teams respond faster, qualify intent earlier, and move from technical questions to quotation-ready conversations without adding extra headcount.</p>
              </div>
              <div className="bright-metrics-story-list" aria-label="Key outcomes"><span>Specification guidance</span><span>Instant quote capture</span><span>Inventory-aware responses</span><span>Buyer intent analysis</span></div>
            </article>
            <article className="bright-metric-card bright-metric-featured" role="listitem" aria-label={featuredMetric.label}>
              <div className="bright-metric-head"><FeaturedMetricIcon size={20} /><strong>{featuredMetric.value}</strong></div>
              <div className="bright-metric-copy"><p>{featuredMetric.label}</p><small>{featuredMetric.subtitle}</small></div>
            </article>
          </div>
          <div className="bright-metrics-bottom" role="list" aria-label="Performance highlights">
            {secondaryMetrics.map((metric) => (
              <article className="bright-metric-card" key={metric.label} role="listitem">
                <div className="bright-metric-head"><metric.icon size={20} /><strong>{metric.value}</strong></div>
                <div className="bright-metric-copy"><p>{metric.label}</p><small>{metric.subtitle}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bright-cta-section">
        <div className="bright-container">
          <div className="bright-cta-content">
            <TypewriterHeading text="Get the AI-first sales and support platform built for equipment businesses." />
            <div className="bright-cta-actions">
              <Link to="/" className="bright-btn-outline-light">Start free trial</Link>
              <a href="#demo" className="bright-btn-dark">View demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="bright-faq-summary" id="faq-summary">
        <div className="bright-container">
          <div className="bright-faq-summary-head">
            <div>
              <p className="bright-faq-summary-kicker">FAQ Summary</p>
              <TypewriterHeading text="Important answers before you deploy" />
              <p>A short summary of the most important questions from the full FAQ page, focused on setup, quoting, inventory, security, and day-to-day usage.</p>
            </div>
            <a href="#faq-summary" className="bright-faq-summary-link">View all FAQs <ArrowRight size={16} /></a>
          </div>
          <div className="bright-faq-summary-grid">
            {faqHighlights.map((item) => (<article className="bright-faq-summary-card" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bright-footer">
        <div className="bright-container">
          <div className="bright-footer-grid">
            <div className="bright-footer-brand">
              <div className="bright-footer-logo"><span className="bright-footer-logo-icon"><Bot size={16} /></span> Antbuildz</div>
              <p>AI-powered sales and support platform built for the equipment industry.</p>
            </div>
            <div className="bright-footer-col">
              <h4>Product</h4>
              <ul><li><a href="#demo">Demo</a></li><li><a href="#process">How It Works</a></li><li><a href="#faq-summary">FAQ</a></li></ul>
            </div>
            <div className="bright-footer-col">
              <h4>Company</h4>
              <ul><li><a href="#hero-section">About</a></li><li><a href="#hero-section">Contact</a></li></ul>
            </div>
            <div className="bright-footer-global">
              <p>© {new Date().getFullYear()} Antbuildz. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
