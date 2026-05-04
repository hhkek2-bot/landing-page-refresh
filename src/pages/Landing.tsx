import { useEffect, useRef, useState, useCallback } from "react";
import type { MutableRefObject, RefObject } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  Check,
  Clock,
  Database,
  Inbox,
  Layers,
  MessageCircle,
  Repeat,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingDown,
  UploadCloud,
  User,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./landing-bright.css";
import DeploymentTouchpoints from "@/components/DeploymentTouchpoints";
import SalesIntelligence from "@/components/SalesIntelligence";

import boomLiftImg from "@/assets/boom-lift.jpg";
import boomLift2Img from "@/assets/boom-lift-2.jpg";
import boomLift3Img from "@/assets/boom-lift-3.jpg";
import forkliftImg from "@/assets/forklift.jpg";
import forklift2Img from "@/assets/forklift-2.jpg";
import forklift3Img from "@/assets/forklift-3.jpg";
import floorScrubberImg from "@/assets/floor-scrubber.jpg";
import floorScrubber2Img from "@/assets/floor-scrubber-2.jpg";
import floorScrubber3Img from "@/assets/floor-scrubber-3.jpg";

type ProductCardData = {
  title: string;
  image: string;
  specs: { label: string; value: string }[];
  tag: string;
  tagColor: "green" | "blue" | "amber";
  cta: string;
  rentalPricing?: { daily: string; weekly: string; monthly: string };
  price?: string;
};

type ChatScenarioStep =
  | { type: "user"; text: string }
  | { type: "ai"; text: string }
  | { type: "product-cards"; cards: ProductCardData[] };

type ChatScenario = {
  id: string;
  steps: ChatScenarioStep[];
};

type RenderedChatItem = {
  id: string;
  type: "user" | "ai" | "typing" | "product-cards";
  text?: string;
  cards?: ProductCardData[];
};

type Feature = { icon: LucideIcon; title: string; body: string; variant?: "default" | "workflow" };
type ProcessStep = { id: number; title: string; body: string; visual: "profile" | "ingest" | "rules" | "test" | "launch" };
type LogoWordmark = { name: string; variant: string };
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
  const hoverTimerRef = useRef<{ timeout?: number; interval?: number }>({});

  const startTyping = () => {
    if (reduceMotion) { setDisplayText(text); return; }
    setDisplayText("");
    setIsTyping(true);
    let index = 0;
    clearTypingTimers();
    hoverTimerRef.current.timeout = window.setTimeout(() => {
      hoverTimerRef.current.interval = window.setInterval(() => {
        index += 1;
        setDisplayText(text.slice(0, index));
        if (index >= text.length) {
          if (hoverTimerRef.current.interval !== undefined) window.clearInterval(hoverTimerRef.current.interval);
          setIsTyping(false);
        }
      }, 28);
    }, 80);
  };

  const clearTypingTimers = () => {
    if (hoverTimerRef.current.timeout !== undefined) window.clearTimeout(hoverTimerRef.current.timeout);
    if (hoverTimerRef.current.interval !== undefined) window.clearInterval(hoverTimerRef.current.interval);
  };

  useEffect(() => {
    if (reduceMotion) { setDisplayText(text); setIsTyping(false); hasTypedRef.current = true; return; }
    if (!isInView) { if (!once && !hasTypedRef.current) setDisplayText(""); return; }
    if (once && hasTypedRef.current) { setDisplayText(text); setIsTyping(false); return; }
    hasTypedRef.current = true;
    startTyping();
    return clearTypingTimers;
  }, [isInView, once, reduceMotion, text]);

  const handleMouseEnter = () => {
    if (reduceMotion || isTyping) return;
    startTyping();
  };

  const HeadingTag = as;
  const renderedText = displayText || "\u00A0";
  return (
    <HeadingTag
      ref={headingRef}
      className={["bright-typewriter-heading", isTyping ? "is-typing" : "", className].filter(Boolean).join(" ")}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: "default" }}
    >
      {renderedText}
    </HeadingTag>
  );
}

const chatScenarios: ChatScenario[] = [
  {
    id: "boom-lift",
    steps: [
      { type: "user", text: "Need a boom lift for outdoor works at Tuas, around 40m working height, 2 weeks" },
      { type: "ai", text: "40m range — that's telescopic territory. Diesel is standard for outdoor. Any site access constraints?" },
      { type: "user", text: "Open yard, no weight limit issues" },
      { type: "ai", text: "Perfect. Here are 3 units available for your dates:" },
      {
        type: "product-cards",
        cards: [
          { title: "2021 JLG 1350SJP Telescopic Boom Lift", image: boomLiftImg, specs: [], tag: "Available", tagColor: "green", cta: "Get Quote", rentalPricing: { daily: "$380", weekly: "$2,200", monthly: "$7,500" } },
          { title: "2019 Genie S-85 XC Telescopic Boom Lift", image: boomLift2Img, specs: [], tag: "Available", tagColor: "green", cta: "Get Quote", rentalPricing: { daily: "$290", weekly: "$1,700", monthly: "$5,800" } },
          { title: "2022 Manitou 280TJ Telescopic Boom Lift", image: boomLift3Img, specs: [], tag: "Available", tagColor: "green", cta: "Get Quote", rentalPricing: { daily: "$450", weekly: "$2,800", monthly: "$9,200" } },
        ],
      },
      { type: "ai", text: "Shall I generate a 2-week rental quotation with delivery to Tuas?" },
    ],
  },
  {
    id: "forklift",
    steps: [
      { type: "user", text: "Need a 3-ton forklift for warehouse material handling, indoor use" },
      { type: "ai", text: "Indoor warehouse — electric counterbalance would be ideal. What kind of loads? Pallets, crates, or heavy rolls?" },
      { type: "user", text: "Mainly palletised goods, standard racking up to 5m" },
      { type: "ai", text: "3-ton electric with 5m mast — here are matching units:" },
      {
        type: "product-cards",
        cards: [
          { title: "2020 Toyota 8FBN30 Electric Forklift", image: forkliftImg, specs: [], tag: "Ready Stock", tagColor: "blue", cta: "Check Availability", price: "$18,500" },
          { title: "2021 Hyster E2.5XN Electric Forklift", image: forklift2Img, specs: [], tag: "Ready Stock", tagColor: "blue", cta: "Check Availability", price: "$15,200" },
          { title: "2022 Linde E50 Counterbalance Forklift", image: forklift3Img, specs: [], tag: "In Transit", tagColor: "amber", cta: "Reserve", price: "$32,800" },
        ],
      },
      { type: "ai", text: "Want me to check stock availability for this week?" },
    ],
  },
  {
    id: "floor-scrubber",
    steps: [
      { type: "user", text: "Looking for a floor scrubber for a 2,000 sqm factory floor" },
      { type: "ai", text: "For that area, a ride-on scrubber is most efficient. Is the floor sealed concrete or epoxy-coated?" },
      { type: "user", text: "Sealed concrete, daily cleaning needed" },
      { type: "ai", text: "Got it — here are ride-on units suited for industrial concrete floors:" },
      {
        type: "product-cards",
        cards: [
          { title: "2021 Tennant T16 Ride-On Scrubber", image: floorScrubberImg, specs: [], tag: "For Sale", tagColor: "amber", cta: "Buy Now", price: "$24,500" },
          { title: "2020 Nilfisk SC6000 Ride-On Scrubber", image: floorScrubber2Img, specs: [], tag: "For Sale", tagColor: "amber", cta: "Buy Now", price: "$19,800" },
          { title: "2022 Kärcher B 250 R Industrial Scrubber", image: floorScrubber3Img, specs: [], tag: "For Sale", tagColor: "amber", cta: "Buy Now", price: "$31,200" },
        ],
      },
      { type: "ai", text: "I can arrange a site demo or share detailed specs. Interested?" },
    ],
  },
];
function ProductCard({ data }: { data: ProductCardData }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const tagColors = {
    green: { bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
    blue: { bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe" },
    amber: { bg: "#fffbeb", color: "#92400e", border: "#fde68a" },
  };
  const tc = tagColors[data.tagColor];
  return (
    <motion.div
      className="bright-product-card"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="bright-product-img-wrap">
        {!imgLoaded && <div className="bright-product-img-skeleton" />}
        <motion.img
          src={data.image}
          alt={data.title}
          loading="lazy"
          width={800}
          height={800}
          onLoad={() => setImgLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: imgLoaded ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ position: imgLoaded ? "relative" : "absolute" }}
        />
      </div>
      <div className="bright-product-body">
        <p className="bright-product-title">{data.title}</p>
        {data.price && (
          <p className="bright-product-price">{data.price}</p>
        )}
        <span className="bright-product-tag" style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
          {data.tag}
        </span>
        {data.rentalPricing && (
          <div className="bright-product-rental-pricing">
            <div className="bright-rental-price-item"><span className="bright-rental-period">Daily</span><span className="bright-rental-amount">{data.rentalPricing.daily}</span></div>
            <div className="bright-rental-price-item"><span className="bright-rental-period">Weekly</span><span className="bright-rental-amount">{data.rentalPricing.weekly}</span></div>
            <div className="bright-rental-price-item"><span className="bright-rental-period">Monthly</span><span className="bright-rental-amount">{data.rentalPricing.monthly}</span></div>
          </div>
        )}
        <button type="button" className="bright-product-cta">{data.cta}</button>
      </div>
    </motion.div>
  );
}

function ProductCarousel({ cards }: { cards: ProductCardData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / cards.length;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
    setActiveIdx(idx);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / cards.length;
    const newIdx = Math.round(el.scrollLeft / cardWidth);
    setActiveIdx(Math.min(newIdx, cards.length - 1));
  };

  return (
    <div className="bright-product-carousel">
      <div className="bright-product-carousel-track" ref={scrollRef} onScroll={handleScroll}>
        {cards.map((card, i) => (
          <ProductCard key={i} data={card} />
        ))}
      </div>
      <div className="bright-product-carousel-dots">
        {cards.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`bright-carousel-dot ${i === activeIdx ? "active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to product ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

type BentoFeature = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  tone: "blue" | "lavender" | "mint" | "peach" | "cream" | "ink";
  size: "lg" | "md" | "sm" | "wide" | "tall";
  visual: "knowledge" | "training" | "matching" | "signals" | "security" | "workflow";
};

const bentoFeatures: BentoFeature[] = [
  { icon: Database, eyebrow: "Trained", title: "Industry Knowledge", body: "Built on structured marketplace intelligence across extensive equipment data, the AI understands specifications, model conventions, payload limits, and real-world industry terminology from day one.", tone: "blue", size: "lg", visual: "knowledge" },
  { icon: UploadCloud, eyebrow: "Connected", title: "Knowledge Training", body: "Upload catalogues, manuals, PDFs, websites, or sync Google Sheets to train the AI with your inventory, pricing logic, policies, and operational workflows — kept continuously updated.", tone: "lavender", size: "md", visual: "training" },
  { icon: SearchCheck, eyebrow: "Reasoning", title: "Recommendation Engine", body: "Understands customer intent and uses AI-powered recommendation and reasoning to suggest the right equipment, tools, and parts based on specifications, availability, and operational constraints.", tone: "mint", size: "md", visual: "matching" },
  { icon: Activity, eyebrow: "Insightful", title: "Buyer Signals", body: "Analyzes conversations and engagement patterns to detect purchasing intent, qualify leads, and highlight high-value opportunities — helping your sales team prioritize and respond more effectively in real time.", tone: "peach", size: "wide", visual: "signals" },
  { icon: ShieldCheck, eyebrow: "Secure", title: "Private Data Vault", body: "Each subscriber's data is encrypted, isolated, and stored in a dedicated vault — ensuring full ownership, zero cross-client exposure, and never used to train external AI models.", tone: "cream", size: "sm", visual: "security" },
  { icon: Sparkles, eyebrow: "Automated", title: "Workflow Agent", body: "Executes operational tasks such as sharing quotations, comparing specifications, generating invoices, and creating reservations directly from customer conversations — reducing manual work and response time.", tone: "ink", size: "tall", visual: "workflow" },
];

const processSteps: ProcessStep[] = [
  { id: 1, title: "Personalize Your Agent", body: "Set agent name, voice, and response style to mirror your strongest sales rep.", visual: "profile" },
  { id: 2, title: "Ingest Your Data", body: "Upload manuals, product lists, and pricing tables or connect live sources.", visual: "ingest" },
  { id: 3, title: "Instruct & Align", body: "Define quote boundaries, fallback rules, and escalation logic for high-risk answers.", visual: "rules" },
  { id: 4, title: "Test in Playground", body: "Simulate real customer prompts before launch, including pricing and technical scenarios.", visual: "test" },
  { id: 5, title: "Launch & Integrate", body: "Share your public chat link and embed in your site for immediate lead capture.", visual: "launch" },
];

const logoWordmarks: LogoWordmark[] = [
  { name: "granola", variant: "granola" }, { name: "Flow", variant: "flow" }, { name: "Listen", variant: "listen" },
  { name: "Obvious", variant: "obvious" }, { name: "Modal", variant: "modal" }, { name: "USV", variant: "usv" },
  { name: "Replicate", variant: "replicate" }, { name: "Railway", variant: "railway" }, { name: "public", variant: "public" },
  { name: "WORDSMITH", variant: "wordsmith" }, { name: "Plain.", variant: "plain" }, { name: "passionfroot", variant: "passionfroot" },
];

function renderLogoWordmark(logo: LogoWordmark) {
  switch (logo.variant) {
    case "granola": return (<span className="bright-brand bright-brand-granola"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#1a1a1a" strokeWidth="2"/><path d="M5 10h10M10 5v10" stroke="#1a1a1a" strokeWidth="1.5"/></svg><span>granola</span></span>);
    case "flow": return (<span className="bright-brand bright-brand-flow"><svg width="22" height="18" viewBox="0 0 22 18" fill="none"><rect x="0" y="2" width="4" height="14" rx="1" fill="#1a1a1a"/><rect x="6" y="0" width="4" height="18" rx="1" fill="#1a1a1a"/><rect x="12" y="4" width="4" height="10" rx="1" fill="#1a1a1a"/><rect x="18" y="6" width="4" height="6" rx="1" fill="#1a1a1a"/></svg><span>Flow</span></span>);
    case "listen": return (<span className="bright-brand bright-brand-listen"><svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M4 2C4 2 2 4 2 9s2 7 2 7" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round"/><circle cx="8" cy="9" r="4" fill="#7c3aed"/></svg><span>Listen</span></span>);
    case "obvious": return (<span className="bright-brand bright-brand-obvious"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#1a1a1a" strokeWidth="2"/><circle cx="10" cy="10" r="4" stroke="#1a1a1a" strokeWidth="1.5"/><line x1="10" y1="1" x2="10" y2="5" stroke="#1a1a1a" strokeWidth="1.5"/><line x1="10" y1="15" x2="10" y2="19" stroke="#1a1a1a" strokeWidth="1.5"/><line x1="1" y1="10" x2="5" y2="10" stroke="#1a1a1a" strokeWidth="1.5"/><line x1="15" y1="10" x2="19" y2="10" stroke="#1a1a1a" strokeWidth="1.5"/></svg><span>Obvious</span></span>);
    case "modal": return (<span className="bright-brand bright-brand-modal"><svg width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M1 17L6 1l5 12L16 5l5 12" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/></svg><span>Modal</span></span>);
    case "usv": return (<span className="bright-brand bright-brand-usv"><span className="bright-brand-usv-box"><strong>USV</strong></span><span className="bright-brand-usv-text">Union<br/>Square<br/>Ventures</span></span>);
    case "replicate": return (<span className="bright-brand bright-brand-replicate"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="0" y="0" width="8" height="8" rx="2" fill="#1a1a1a"/><rect x="10" y="0" width="8" height="8" rx="2" fill="#1a1a1a" opacity="0.5"/><rect x="0" y="10" width="8" height="8" rx="2" fill="#1a1a1a" opacity="0.5"/><rect x="10" y="10" width="8" height="8" rx="2" fill="#1a1a1a" opacity="0.25"/></svg><span>Replicate</span></span>);
    case "railway": return (<span className="bright-brand bright-brand-railway"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="#1a1a1a"/><circle cx="9" cy="9" r="3" fill="#fff"/></svg><span>Railway</span></span>);
    case "public": return (<span className="bright-brand bright-brand-public"><svg width="14" height="18" viewBox="0 0 14 18" fill="none"><circle cx="7" cy="4" r="4" fill="#1a1a1a"/><path d="M0 18c0-4 3-7 7-7s7 3 7 7" fill="#1a1a1a"/></svg><span>public</span></span>);
    case "wordsmith": return (<span className="bright-brand bright-brand-wordsmith">WORDSMITH</span>);
    case "plain": return (<span className="bright-brand bright-brand-plain">Plain.</span>);
    case "passionfroot": return (<span className="bright-brand bright-brand-passionfroot">passionfroot</span>);
    default: return <span className="bright-brand">{logo.name}</span>;
  }
}

type StatItem = { value: string; numericEnd: number; suffix: string; prefix: string; label: string; sublabel: string };

const statItems: StatItem[] = [
  { value: "3x", numericEnd: 3, suffix: "×", prefix: "", label: "Higher-Quality Leads", sublabel: "Capture buyer intent, specs, and urgency from the first interaction" },
  { value: "<10s", numericEnd: 10, suffix: "s", prefix: "<", label: "Instant First Response", sublabel: "Engage every lead instantly, before competitors have time to reply" },
  { value: "50%", numericEnd: 50, suffix: "%", prefix: "", label: "Faster Quote Output", sublabel: "Turn inquiries into structured, accurate quotations within one conversation" },
  { value: "65%+", numericEnd: 65, suffix: "%+", prefix: "", label: "Shift to AI Decisions", sublabel: "Buyers increasingly rely on AI when backed by real data" },
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
  { title: "Slow Response", description: "Leads come in anytime — but your team can't respond instantly", impact: "", solutionTitle: "Instant Lead Response", solutionDescription: "Respond to every enquiry instantly, 24/7. Your AI agent ensures no lead is left waiting — capturing opportunities the moment they arrive.", keyword: "24/7" },
  { title: "Capacity Bottleneck", description: "Too many enquiries overwhelm your team and slow down your entire operation", impact: "", solutionTitle: "Scalable Enquiry Handling", solutionDescription: "Handle multiple enquiries simultaneously without increasing headcount. Maintain speed and consistency, even during peak demand.", keyword: "Scale" },
  { title: "Unqualified Leads", description: "Leads lack key details and clarity — causing delays, back-and-forth, and missed opportunities", impact: "", solutionTitle: "Structured Requirement Capture", solutionDescription: "Automatically capture specs, use cases, and buyer intent in a single conversation. Every enquiry becomes complete, structured, and ready for action.", keyword: "Capture" },
  { title: "People Dependency", description: "Critical sales knowledge lives in people — not in scalable systems or processes", impact: "", solutionTitle: "Centralized Sales Intelligence", solutionDescription: "Standardize specs, pricing logic, and workflows into one intelligent system. Ensure consistent, accurate responses without relying on individual team members.", keyword: "Intel" },
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
function StatCard({ stat }: { stat: StatItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayNum, setDisplayNum] = useState(0);
  const animRef = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setIsHovered(true); // trigger initial count
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    if (!isHovered && hasAnimated) { setDisplayNum(stat.numericEnd); return; }
    if (!isHovered) return;
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNum(Math.round(eased * stat.numericEnd));
      if (progress < 1) animRef.current = requestAnimationFrame(animate);
    };
    setDisplayNum(0);
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [isHovered, stat.numericEnd, hasAnimated]);

  return (
    <article
      ref={cardRef}
      className="bright-stat-card"
      role="listitem"
      onMouseEnter={() => { setIsHovered(false); requestAnimationFrame(() => setIsHovered(true)); }}
    >
      <p className="bright-stat-value">{stat.prefix}{displayNum}{stat.suffix}</p>
      <p className="bright-stat-label">{stat.label}</p>
      <p className="bright-stat-sublabel">{stat.sublabel}</p>
    </article>
  );
}
function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`bright-faq-item ${isOpen ? "bright-faq-item-open" : ""}`}>
      <button type="button" className="bright-faq-item-trigger" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className="bright-faq-item-icon">{isOpen ? "[−]" : "[+]"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bright-faq-item-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
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

function BentoVisual({ visual }: { visual: BentoFeature["visual"] }) {
  switch (visual) {
    // KNOWLEDGE — central equipment hub with specs orbiting around it
    case "knowledge":
      return (
        <div className="bv bv-knowledge">
          <div className="bv-orbit-ring bv-orbit-ring-1" />
          <div className="bv-orbit-ring bv-orbit-ring-2" />
          <div className="bv-core">
            <Database size={16} />
            <span>CAT 320 GC</span>
          </div>
          <div className="bv-orbiter bv-o-1"><span className="bv-chip">22,200 kg</span></div>
          <div className="bv-orbiter bv-o-2"><span className="bv-chip">1.19 m³</span></div>
          <div className="bv-orbiter bv-o-3"><span className="bv-chip">121 kW</span></div>
          <div className="bv-orbiter bv-o-4"><span className="bv-chip">Tier 4</span></div>
        </div>
      );

    // TRAINING — documents falling into a stack with a "Trained" pulse
    case "training":
      return (
        <div className="bv bv-training">
          <div className="bv-doc bv-doc-1"><b className="ext red">PDF</b> Catalogue_2025</div>
          <div className="bv-doc bv-doc-2"><b className="ext green">XLS</b> Pricing_Q4</div>
          <div className="bv-doc bv-doc-3"><b className="ext blue">DOC</b> Rental_Policy</div>
          <div className="bv-funnel">
            <UploadCloud size={14} />
            <span>Ingesting…</span>
          </div>
          <div className="bv-train-pill"><Sparkles size={12} /> Trained</div>
        </div>
      );

    // MATCHING — ranked horizontal bars filling up
    case "matching":
      return (
        <div className="bv bv-matching">
          <div className="bv-rank bv-rank-1">
            <span className="bv-rank-name">JCB 3CX</span>
            <span className="bv-rank-bar"><i style={{ width: "98%" }} /></span>
            <span className="bv-rank-pct">98%</span>
          </div>
          <div className="bv-rank bv-rank-2">
            <span className="bv-rank-name">CAT 420F2</span>
            <span className="bv-rank-bar"><i style={{ width: "86%" }} /></span>
            <span className="bv-rank-pct">86%</span>
          </div>
          <div className="bv-rank bv-rank-3">
            <span className="bv-rank-name">Komatsu WB97</span>
            <span className="bv-rank-bar"><i style={{ width: "74%" }} /></span>
            <span className="bv-rank-pct">74%</span>
          </div>
          <div className="bv-best">✓ Best fit</div>
        </div>
      );

    // SIGNALS — radar pulse with intent gauge
    case "signals":
      return (
        <div className="bv bv-signals">
          <div className="bv-radar">
            <span className="bv-radar-ring" />
            <span className="bv-radar-ring" />
            <span className="bv-radar-ring" />
            <span className="bv-radar-dot" />
          </div>
          <div className="bv-sig-row bv-sig-1"><i className="dot" /> Specs requested</div>
          <div className="bv-sig-row bv-sig-2"><i className="dot" /> Timeline shared</div>
          <div className="bv-sig-row bv-sig-3"><i className="dot" /> Budget confirmed</div>
          <div className="bv-intent">
            <span className="bv-intent-label">Intent</span>
            <span className="bv-intent-score">87</span>
          </div>
        </div>
      );

    // SECURITY — shield with scanning beam + lock
    case "security":
      return (
        <div className="bv bv-security">
          <div className="bv-shield">
            <ShieldCheck size={48} strokeWidth={1.6} />
            <span className="bv-scan" />
          </div>
          <div className="bv-sec-tag bv-sec-1">AES-256</div>
          <div className="bv-sec-tag bv-sec-2">SOC 2</div>
          <div className="bv-sec-tag bv-sec-3">Isolated</div>
        </div>
      );

    // WORKFLOW — animated checklist sequencing
    case "workflow":
      return (
        <div className="bv bv-workflow">
          <div className="bv-task bv-task-1">
            <span className="bv-check"><Check size={11} strokeWidth={3} /></span>
            <span>Quotation sent</span>
          </div>
          <div className="bv-task bv-task-2">
            <span className="bv-check"><Check size={11} strokeWidth={3} /></span>
            <span>Specs compared</span>
          </div>
          <div className="bv-task bv-task-3">
            <span className="bv-check"><Check size={11} strokeWidth={3} /></span>
            <span>Invoice generated</span>
          </div>
          <div className="bv-task bv-task-4 bv-task-active">
            <span className="bv-check bv-check-active"><Check size={11} strokeWidth={3} /></span>
            <span>Reservation ✓</span>
          </div>
        </div>
      );
  }
}


type PainPoint = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  size: "tall" | "feature" | "sm";
  area: "a" | "b" | "c" | "d" | "e" | "f";
  tone: "blue" | "rose" | "amber" | "violet" | "emerald" | "slate";
  visual: "channels" | "clock" | "funnel" | "scatter" | "followup" | "intent";
};

const painPoints: PainPoint[] = [
  { icon: Clock,         eyebrow: "Delayed",      title: "Slow First Response",          body: "High-intent buyers expect fast replies, but sales teams are not always available.",                          size: "tall",    area: "a", tone: "rose",    visual: "clock" },
  { icon: Inbox,         eyebrow: "Fragmented",   title: "Too Many Entry Points",        body: "Enquiries come from websites, WhatsApp, ads, social media, calls, and referrals.",                       size: "feature", area: "b", tone: "blue",    visual: "channels" },
  { icon: MessageCircle, eyebrow: "Missed",       title: "Lost Buyer Intent",            body: "Urgency, budget, location, and real equipment needs are often missed in conversation.",                     size: "tall",    area: "c", tone: "slate",   visual: "intent" },
  { icon: TrendingDown,  eyebrow: "Leaking",      title: "Weak Traffic Conversion",      body: "Marketing drives traffic, but many visitors leave before becoming qualified enquiries.",                    size: "sm",      area: "d", tone: "amber",   visual: "funnel" },
  { icon: Repeat,        eyebrow: "Inconsistent", title: "Inconsistent Sales Follow-Up", body: "Some leads are followed up properly, while others are delayed or lost.",                                     size: "sm",      area: "e", tone: "emerald", visual: "followup" },
  { icon: Layers,        eyebrow: "Scattered",    title: "Scattered Product Knowledge",  body: "Product details, specs, pricing, and recommendations are spread across files, people, and systems.",       size: "sm",      area: "f", tone: "violet",  visual: "scatter" },
];

function PainVisual({ visual }: { visual: PainPoint["visual"] }) {
  switch (visual) {
    case "channels":
      return (
        <div className="pv pv-channels">
          <div className="pv-hub"><Inbox size={20} /></div>
          <span className="pv-line pv-line-1" /><span className="pv-line pv-line-2" />
          <span className="pv-line pv-line-3" /><span className="pv-line pv-line-4" />
          <span className="pv-line pv-line-5" /><span className="pv-line pv-line-6" />
          <span className="pv-node pv-node-1">Website</span>
          <span className="pv-node pv-node-2">WhatsApp</span>
          <span className="pv-node pv-node-3">Ads</span>
          <span className="pv-node pv-node-4">Social</span>
          <span className="pv-node pv-node-5">Calls</span>
          <span className="pv-node pv-node-6">Referrals</span>
        </div>
      );
    case "clock":
      return (
        <div className="pv pv-clock">
          <div className="pv-clock-face">
            <span className="pv-clock-tick" />
            <span className="pv-clock-hand pv-clock-hour" />
            <span className="pv-clock-hand pv-clock-minute" />
            <span className="pv-clock-center" />
          </div>
          <span className="pv-late-pill">+12 min</span>
        </div>
      );
    case "funnel":
      return (
        <div className="pv pv-funnel">
          <span className="pv-funnel-row pv-funnel-1">Visitors</span>
          <span className="pv-funnel-row pv-funnel-2">Browsing</span>
          <span className="pv-funnel-row pv-funnel-3">Qualified</span>
          <span className="pv-drop">↓ 78% drop</span>
        </div>
      );
    case "scatter":
      return (
        <div className="pv pv-scatter">
          <span className="pv-tile pv-tile-1">PDF Spec</span>
          <span className="pv-tile pv-tile-2">Pricing.xlsx</span>
          <span className="pv-tile pv-tile-3">Sales rep</span>
          <span className="pv-tile pv-tile-4">CRM note</span>
          <span className="pv-tile pv-tile-5">Email thread</span>
          <span className="pv-tile pv-tile-6">WhatsApp</span>
          <span className="pv-tile pv-tile-7">Catalogue</span>
          <span className="pv-question">?</span>
        </div>
      );
    case "followup":
      return (
        <div className="pv pv-followup">
          <span className="pv-fu-row pv-fu-done"><Check size={11} strokeWidth={3} /> Lead A · replied</span>
          <span className="pv-fu-row pv-fu-done"><Check size={11} strokeWidth={3} /> Lead B · replied</span>
          <span className="pv-fu-row pv-fu-miss">✕ Lead C · missed</span>
          <span className="pv-fu-row pv-fu-miss">✕ Lead D · missed</span>
        </div>
      );
    case "intent":
      return (
        <div className="pv pv-intent">
          <div className="pv-bubble pv-bubble-user">"Need 20-ton excavator next month, Penang site"</div>
          <div className="pv-loss">
            <span className="pv-loss-tag">Urgency lost</span>
            <span className="pv-loss-tag">Budget lost</span>
            <span className="pv-loss-tag">Location lost</span>
          </div>
        </div>
      );
  }
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

  // Rotating chat scenario animation
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [chatFadeIn, setChatFadeIn] = useState(true);

  useEffect(() => {
    let alive = true;
    const timers: number[] = [];
    const queue = (cb: () => void, delay: number) => { const id = window.setTimeout(() => { if (!alive) return; cb(); }, delay); timers.push(id); };

    const typeAiText = (msgId: string, fullText: string, onDone: () => void) => {
      const words = fullText.split(/(?<=\s)|(?=\s)/);
      let currentIndex = 0;
      const typeNext = () => {
        if (!alive) return;
        if (currentIndex >= words.length) { onDone(); return; }
        currentIndex++;
        const partial = words.slice(0, currentIndex).join("");
        setChatItems((prev) => prev.map((item) => item.id === msgId ? { ...item, text: partial } : item));
        queue(typeNext, 25 + Math.random() * 35);
      };
      typeNext();
    };

    const runScenario = (sIdx: number) => {
      if (!alive) return;
      const scenario = chatScenarios[sIdx % chatScenarios.length];
      setScenarioIndex(sIdx % chatScenarios.length);
      setChatFadeIn(true);
      setChatItems([]);

      let stepIndex = 0;
      const runStep = () => {
        if (!alive || stepIndex >= scenario.steps.length) {
          // Wait then transition to next scenario
          queue(() => {
            setChatFadeIn(false);
            queue(() => runScenario(sIdx + 1), 200);
          }, 3000);
          return;
        }
        const step = scenario.steps[stepIndex];
        stepIndex++;

        if (step.type === "user") {
          queue(() => {
            const msgId = `msg-${Date.now()}-${stepIndex}`;
            setChatItems((prev) => [...prev, { id: msgId, type: "user", text: step.text }]);
            queue(runStep, 800 + Math.random() * 400);
          }, 800 + Math.random() * 400);
        } else if (step.type === "ai") {
          // Show typing indicator first
          const typingId = `typing-${Date.now()}-${stepIndex}`;
          queue(() => {
            setChatItems((prev) => [...prev, { id: typingId, type: "typing" }]);
            queue(() => {
              setChatItems((prev) => prev.filter((i) => i.id !== typingId));
              const msgId = `ai-${Date.now()}-${stepIndex}`;
              setChatItems((prev) => [...prev, { id: msgId, type: "ai", text: "" }]);
              typeAiText(msgId, step.text, () => {
                queue(runStep, 600);
              });
            }, 600 + Math.random() * 300);
          }, 200);
        } else if (step.type === "product-cards") {
          queue(() => {
            setChatItems((prev) => [...prev, { id: `cards-${Date.now()}-${stepIndex}`, type: "product-cards" as const, cards: step.cards }]);
            queue(runStep, 1200);
          }, 300);
        }
      };
      queue(runStep, 400);
    };

    queue(() => runScenario(0), 800);
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

  const renderChatItem = (item: RenderedChatItem) => {
    if (item.type === "typing") return (
      <div className="bright-chat-row" key={item.id}>
        <div className="bright-chat-avatar bright-avatar-ai"><Bot size={14} /></div>
        <div className="bright-chat-msg bright-chat-msg-ai bright-typing-shell">
          <div className="bright-typing-indicator"><span className="bright-dot" /><span className="bright-dot" /><span className="bright-dot" /></div>
        </div>
      </div>
    );
    if (item.type === "product-cards" && item.cards) return (
      <div className="bright-chat-row" key={item.id}>
        <div className="bright-chat-avatar bright-avatar-ai"><Bot size={14} /></div>
        <div className="bright-chat-msg bright-chat-msg-ai bright-card-msg">
          <ProductCarousel cards={item.cards} />
        </div>
      </div>
    );
    return (
      <div className={`bright-chat-row ${item.type === "user" ? "bright-user-row" : ""}`} key={item.id}>
        <div className={`bright-chat-avatar ${item.type === "user" ? "bright-avatar-user" : "bright-avatar-ai"}`}>
          {item.type === "user" ? "U" : <Bot size={14} />}
        </div>
        <div className={`bright-chat-msg ${item.type === "user" ? "bright-chat-msg-user" : "bright-chat-msg-ai"}`}>
          <span dangerouslySetInnerHTML={{ __html: item.text ?? "" }} />
        </div>
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
        <div className="bright-container bright-hero-split">
          <div className="bright-hero-text-block">
            <h1>
              Turn Every Business Conversation Into{" "}
              <span className="bright-hero-gradient-text">Revenue</span>
            </h1>
            <p className="bright-subtitle">Your AI Sales Agent answers inquiries, recommends the right equipment, and generates quotes instantly — trained on your catalog, pricing, and business logic.</p>
          </div>
          <div className="bright-hero-mockup-wrap bright-hero-mockup-right">
            {/* Ambient gradient blobs */}
            <div className="bright-glass-ambient" aria-hidden="true">
              <div className="bright-glass-blob bright-glass-blob-1" />
              <div className="bright-glass-blob bright-glass-blob-2" />
              <div className="bright-glass-blob bright-glass-blob-3" />
              <div className="bright-glass-blob bright-glass-blob-4" />
              <div className="bright-glass-blob bright-glass-blob-5" />
            </div>
            <div className={`bright-chat-mockup bright-glass-chat ${chatFadeIn ? "bright-chat-fade-in" : "bright-chat-fade-out"}`} id="demo">
              <div className="bright-chat-header bright-glass-header">
                <span className="bright-status-dot" />
                <span className="bright-chat-title"><Bot size={18} /> Antbuildz Sales Agent</span>
                <span className="bright-online-status"><span /> Online</span>
              </div>
              <div className="bright-chat-body bright-glass-body" ref={chatBodyRef}>{chatItems.map(renderChatItem)}</div>
              <div className="bright-glass-input-bar" aria-hidden="true">
                <span>Type your question...</span>
              </div>
            </div>
          </div>
          <div className="bright-hero-actions-block">
            <Link to="/pricing" className="bright-btn bright-btn-primary bright-btn-glow">Build Your AI Agent <ArrowRight size={18} /></Link>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="bright-btn bright-btn-secondary">Book Demo</a>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="bright-logo-strip" aria-label="Trusted companies">
        <div className="bright-container">
          <div className="bright-logo-grid-static">
            {logoWordmarks.map((logo) => (
              <div key={logo.name} className="bright-logo-grid-item">{renderLogoWordmark(logo)}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — Bento Grid */}
      <section className="bright-features bento-section">
        <div className="bright-container">
          <div className="bright-section-header"><TypewriterHeading text="Not Just Answers. The Agent Acts." /><p>Built to turn equipment enquiries into qualified sales opportunities through smarter recommendations, buyer signals, quotations, comparisons, and workflow automation.</p></div>
          <div className="bento-grid">
            {bentoFeatures.map((f) => (
              <article
                key={f.title}
                className={`bento-card bento-${f.tone} bento-size-${f.size}`}
                data-visual={f.visual}
              >
                <div className="bento-visual" aria-hidden="true">
                  <BentoVisual visual={f.visual} />
                </div>
                <div className="bento-body">
                  <span className="bento-eyebrow">{f.eyebrow}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Pain Points — Bento Grid */}
      <section className="pain-bento-section" id="comparison">
        <div className="bright-container">
          <div className="bright-section-header pain-bento-header">
            <TypewriterHeading text="Why Enquiries Still Slip Through" />
            <p>Modern B2B enquiries come from many channels, move quickly, and often get delayed, missed, or poorly handled across the sales process.</p>
          </div>
          <div className="pain-bento-grid">
            {painPoints.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className={`pain-card pain-tone-${p.tone} pain-size-${p.size} pain-area-${p.area}`}>
                  <div className="pain-visual" aria-hidden="true">
                    <PainVisual visual={p.visual} />
                  </div>
                  <div className="pain-body">
                    <div className="pain-icon-wrap"><Icon size={16} strokeWidth={1.8} /></div>
                    <span className="pain-eyebrow">{p.eyebrow}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* Process Steps */}
      <section className="bright-process" id="process">
        <div className="bright-container">
          <div className="bright-section-header"><TypewriterHeading text="Implementation in Minutes" /><p>The exact process to deploy your digital sales expert.</p></div>
          <div className="bright-vertical-steps">
            {processSteps.map((step, idx) => (
              <div key={step.id}>
                <div className="bright-step bright-step-hidden">
                  <div className="bright-step-num">{step.id}</div>
                  <div className="bright-step-content"><div className="bright-step-text"><h4>{step.title}</h4><p>{step.body}</p></div><StepGraphic visual={step.visual} /></div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="bright-step-arrow bright-step-hidden" aria-hidden="true">
                    <ArrowRight size={20} className="bright-step-arrow-icon" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeploymentTouchpoints />
      <SalesIntelligence />

      {/* Metrics — Stripe-inspired */}
      <section className="bright-stats-section">
        <div className="bright-container">
          <div className="bright-stats-title-block">
            <TypewriterHeading text="The backbone of AI-driven equipment sales" as="h2" />
            <div className="bright-stats-accent-line" aria-hidden="true" />
          </div>
          <div className="bright-stats-grid" role="list" aria-label="Key statistics">
            {statItems.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bright-cta-section">
        <div className="bright-container">
          <div className="bright-cta-content">
            <h2>Build Your AI Sales Agent</h2>
            <p className="bright-cta-supporting">Turn enquiries into qualified deals and quotations — automatically.</p>
            <div className="bright-cta-actions">
              <Link to="/" className="bright-btn-outline-light">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bright-faq-accordion" id="faq-summary">
        <div className="bright-container">
          <h2 className="bright-faq-accordion-title">Frequently asked questions.</h2>
          <div className="bright-faq-accordion-list">
            {faqHighlights.map((item) => (
              <FaqAccordionItem key={item.question} question={item.question} answer={item.answer} />
            ))}
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
