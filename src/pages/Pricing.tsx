import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Check } from "lucide-react";

type BillingCycle = "monthly" | "annual";
type WebstoreMode = "rental-sales" | "rental" | "sales";
type Plan = {
  code: string;
  title: string;
  badge: string;
  monthlyPrice: number | null;
  customPriceLabel?: string;
  positioning: string;
  summary: string;
  included: string[];
  features: string[];
  ctaLabel: string;
  highlightLabel?: string;
  note?: string;
};

const annualDiscount = 0.2;

const agentPlans: Plan[] = [
  {
    code: "starter",
    title: "Starter",
    badge: "Starter",
    monthlyPrice: 149,
    positioning: "For smaller teams starting with AI sales",
    summary: "A focused AI sales agent for enquiry handling, recommendation, and quote support.",
    included: ["200 AI conversations", "500MB knowledge base", "1 AI Sales Agent"],
    features: ["Equipment recommendation engine", "Quotation assistance", "Lead intent detection", "1 AI Sales Agent"],
    ctaLabel: "Start Pilot",
  },
  {
    code: "growth",
    title: "Growth",
    badge: "Growth",
    monthlyPrice: 299,
    positioning: "For growing suppliers ready to automate more inquiries",
    summary: "The strongest core plan for teams that want more coverage and better sales visibility.",
    included: ["600 AI conversations", "1GB knowledge base", "1 AI Sales Agent"],
    features: ["Equipment recommendation engine", "Quotation automation", "Lead intent analytics", "CRM integration", "1 AI Sales Agent"],
    ctaLabel: "Start Pilot",
    highlightLabel: "Most Popular",
  },
  {
    code: "pro",
    title: "Pro",
    badge: "Pro",
    monthlyPrice: 599,
    positioning: "For larger operations with higher inquiry volume",
    summary: "Designed for teams that need deeper automation across quotation, booking, and lead routing.",
    included: ["1500 AI conversations", "3GB knowledge base", "2 AI Sales Agents"],
    features: ["Advanced AI quotation workflow", "Booking automation", "Buyer intent analytics", "CRM integration", "2 AI Sales Agents"],
    ctaLabel: "Start Pilot",
  },
];

const webstorePlans: Plan[] = [
  {
    code: "basic",
    title: "Basic",
    badge: "Basic",
    monthlyPrice: 299,
    positioning: "Best for lean digital setup",
    summary: "Launch your first equipment webstore with AI-powered sales support built in.",
    included: ["200 AI conversations", "500MB knowledge base", "30 listings"],
    features: ["Equipment Webstore", "Rental or Sales store", "AI equipment recommendation", "Quotation assistance"],
    ctaLabel: "Launch Webstore",
  },
  {
    code: "premium",
    title: "Premium",
    badge: "Premium",
    monthlyPrice: 499,
    positioning: "Best for active equipment businesses",
    summary: "The strongest package for companies running a more serious digital catalog and sales motion.",
    included: ["600 AI conversations", "1GB knowledge base", "150 listings"],
    features: ["Equipment Webstore", "Rental + Sales store", "AI quotation automation", "Lead analytics dashboard"],
    ctaLabel: "Launch Webstore",
    highlightLabel: "Most Popular",
  },
  {
    code: "enterprise",
    title: "Enterprise",
    badge: "Enterprise",
    monthlyPrice: null,
    customPriceLabel: "Custom",
    positioning: "Best for complex operations and integrations",
    summary: "For large catalogs, custom workflows, deeper integrations, and multi-team deployment.",
    included: ["Unlimited AI conversations", "Custom knowledge capacity", "Unlimited listings"],
    features: ["Custom AI workflow", "ERP / CRM integration", "Dedicated support"],
    ctaLabel: "Contact Sales",
    note: "Commercial terms are structured around your catalog scale and workflow complexity.",
  },
];

const addOns = [
  { title: "Additional Conversations", price: "$0.80 / conversation", description: "For plans exceeding the included monthly AI conversation quota." },
  { title: "Additional AI Sales Agent", price: "$99 / month", description: "Deploy an additional AI agent for another business unit, brand, or category." },
  { title: "Additional Knowledge Storage", price: "$5 / GB", description: "Expand your AI knowledge capacity as your catalogue and documentation grow." },
];

const faqs = [
  { question: "What does the AI Sales Agent do?", answer: "It helps answer customer inquiries, recommend equipment, support quotation flow, capture leads, and guide booking-related conversations around the clock." },
  { question: "Can I train the AI with my equipment catalogue and documents?", answer: "Yes. You can train it with your catalogue, listings, manuals, FAQs, and other business documents so the responses reflect your real products and processes." },
  { question: "Does the AI support multiple languages?", answer: "Yes. The AI can support multilingual conversations so your team can serve customers in different markets more effectively." },
  { question: "What happens if I exceed my conversation limit?", answer: "You can continue operating by adding conversation capacity as an add-on, rather than rebuilding or changing plans immediately." },
  { question: "Can the AI assist with quotations and bookings?", answer: "Yes. The AI is positioned as a sales and quotation assistant, not just a chatbot. It can help structure quotation flow and support booking-related workflows." },
  { question: "What is the difference between AI Agent Only and Webstore + AI?", answer: "AI Agent Only is for teams that want sales automation without launching a webstore. Webstore + AI combines catalog storefront capability with AI-powered inquiry handling." },
  { question: "What is Managed AI Sales for Singapore?", answer: "It is a higher-touch option where AI automation is paired with Antbuildz operational support for quotation assistance, lead handling, and deal coordination in Singapore." },
];

const trustItems = [
  "Multilingual AI conversations for equipment buyers and renters",
  "Private knowledge base trained on your catalogues and documents",
  "Buyer intent tagging and lead-quality visibility",
  "Encrypted company knowledge with isolated tenant storage",
];

function formatPrice(monthlyPrice: number | null, billing: BillingCycle, customLabel?: string) {
  if (monthlyPrice === null) return customLabel || "Custom";
  const value = billing === "annual" ? monthlyPrice * (1 - annualDiscount) : monthlyPrice;
  return `$${Math.round(value)}`;
}

function PlanCard({ plan, billing, featured = false }: { plan: Plan; billing: BillingCycle; featured?: boolean }) {
  return (
    <div className={`pricing-card ${featured ? "pricing-card-featured" : ""}`}>
      {plan.highlightLabel && (
        <div className="pricing-highlight-badge">{plan.highlightLabel}</div>
      )}
      <div className="pricing-card-top">
        <div className="pricing-badge">{plan.badge}</div>
        <h3 className="pricing-card-title">{plan.title}</h3>
        <div className="pricing-price-row">
          <span className="pricing-price">{formatPrice(plan.monthlyPrice, billing, plan.customPriceLabel)}</span>
          {plan.monthlyPrice !== null && <span className="pricing-price-period">/ month</span>}
        </div>
        {billing === "annual" && plan.monthlyPrice !== null && (
          <p className="pricing-annual-note">${Math.round(plan.monthlyPrice * 12 * (1 - annualDiscount))} billed annually</p>
        )}
        <p className="pricing-positioning">{plan.positioning}</p>
        <p className="pricing-summary">{plan.summary}</p>
      </div>

      <div className="pricing-included-block">
        {plan.included.map((item) => (
          <div key={item} className="pricing-included-row">
            <span className="pricing-included-label">Included</span>
            <span className="pricing-included-value">{item}</span>
          </div>
        ))}
      </div>

      <div className="pricing-features">
        {plan.features.map((item) => (
          <div key={item} className="pricing-feature-row">
            <span className="pricing-feature-check"><Check size={13} strokeWidth={3} /></span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <button className={`pricing-cta ${featured ? "pricing-cta-featured" : ""}`}>
        {plan.ctaLabel}
      </button>
      {plan.note && <p className="pricing-note">{plan.note}</p>}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`pricing-faq-item ${open ? "is-open" : ""}`}>
      <button type="button" className="pricing-faq-trigger" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="pricing-faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pricing-faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [webstoreMode, setWebstoreMode] = useState<WebstoreMode>("sales");

  const webstoreModeLabel = useMemo(() => {
    if (webstoreMode === "rental-sales") return "Rental + Sales store";
    if (webstoreMode === "rental") return "Rental store";
    return "Sales store";
  }, [webstoreMode]);

  const computedWebstorePlans = useMemo(() => {
    return webstorePlans.map((plan) => {
      if (plan.code !== "basic") return plan;
      return { ...plan, features: plan.features.map((f) => (f === "Rental or Sales store" ? webstoreModeLabel : f)) };
    });
  }, [webstoreModeLabel]);

  return (
    <div className="pricing-page">
      {/* Nav */}
      <nav className="pricing-nav">
        <Link to="/" className="pricing-back-link"><ArrowLeft size={18} /> <Bot size={22} /> Antbuildz</Link>
      </nav>

      <div className="pricing-container">
        {/* Header */}
        <header className="pricing-header">
          <h1>Pricing for AI Sales Agents and Equipment Webstores</h1>
          <p className="pricing-header-sub">Launch a modern equipment webstore or deploy an AI sales agent that can answer inquiries, recommend products, assist with quotations, and support bookings around the clock.</p>
          <p className="pricing-header-note">Built for equipment, tools, and spare-parts businesses.</p>

          <div className="pricing-toggle">
            <button className={`pricing-toggle-btn ${billing === "monthly" ? "is-active" : ""}`} onClick={() => setBilling("monthly")}>Monthly</button>
            <button className={`pricing-toggle-btn ${billing === "annual" ? "is-active" : ""}`} onClick={() => setBilling("annual")}>Annual</button>
          </div>
          <p className="pricing-save-note">Annual billing saves 20%</p>
        </header>

        {/* AI Agent Only */}
        <section className="pricing-section">
          <div className="pricing-section-header">
            <h2>AI Agent Only</h2>
            <p>For companies that already have a website and want to automate inquiries, quotations, and buyer engagement with AI.</p>
          </div>
          <div className="pricing-grid">
            {agentPlans.map((plan) => (
              <PlanCard key={plan.code} plan={plan} billing={billing} featured={plan.code === "growth"} />
            ))}
          </div>
        </section>

        {/* Webstore + AI */}
        <section className="pricing-section">
          <div className="pricing-webstore-modes">
            {(["rental-sales", "rental", "sales"] as WebstoreMode[]).map((mode) => (
              <button key={mode} className={`pricing-mode-btn ${webstoreMode === mode ? "is-active" : ""}`} onClick={() => setWebstoreMode(mode)}>
                {mode === "rental-sales" ? "Rental + Sales store" : mode === "rental" ? "Rental store" : "Sales store"}
              </button>
            ))}
          </div>
          <div className="pricing-section-header">
            <h2>Webstore + AI</h2>
            <p>For equipment businesses that want a complete digital storefront combined with AI-powered sales automation.</p>
          </div>
          <div className="pricing-grid">
            {computedWebstorePlans.map((plan) => (
              <PlanCard key={plan.code} plan={plan} billing={billing} featured={plan.code === "premium"} />
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="pricing-section">
          <div className="pricing-section-header pricing-section-header-left">
            <p className="pricing-kicker">Add-Ons</p>
            <h2>Scale capacity without changing your base plan.</h2>
          </div>
          <div className="pricing-grid">
            {addOns.map((item) => (
              <div key={item.title} className="pricing-addon-card">
                <h3>{item.title}</h3>
                <p className="pricing-addon-price">{item.price}</p>
                <p className="pricing-addon-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pricing-section">
          <div className="pricing-section-header">
            <p className="pricing-kicker">FAQ</p>
            <h2>Common questions from equipment businesses.</h2>
          </div>
          <div className="pricing-faq-list">
            {faqs.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pricing-section">
          <div className="pricing-bottom-cta">
            <h2>Ready to turn inquiries into real sales?</h2>
            <p>Choose the setup that fits your business — from AI sales automation to a complete digital equipment webstore.</p>
            <div className="pricing-bottom-cta-actions">
              <button className="pricing-cta pricing-cta-featured">Start Pilot</button>
              <button className="pricing-cta">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="pricing-trust-grid">
          {trustItems.map((item) => (
            <div key={item} className="pricing-trust-item">
              <span className="pricing-trust-check">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
