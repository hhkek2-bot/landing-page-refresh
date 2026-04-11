import React, { useState, useRef } from "react";

type Currency = "SGD" | "USD";
const SGD_TO_USD = 0.74;
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Check, X, Zap, ShoppingBag, Settings } from "lucide-react";
import "./pricing.css";

type BillingCycle = "monthly" | "annual";
type WebstoreTab = "bundle" | "sales" | "rental";

const annualDiscount = 0.2;

/* ═══════════════════════ DATA ═══════════════════════ */

const agentPlans = [
  {
    name: "Pilot",
    price: 59,
    conversations: 50,
    storage: "200 MB",
    playground: 20,
    target: "For Testing & Validation",
    features: ["AI equipment recommendation", "Quotation assistance", "1 AI Sales Agent"],
    cta: "Get Started",
  },
  {
    name: "Starter",
    price: 149,
    conversations: 150,
    storage: "500 MB",
    playground: 75,
    target: "For Growing Sales Teams",
    features: ["Everything in Pilot", "Lead intent detection", "Email notifications", "1 AI Sales Agent"],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: 399,
    conversations: 450,
    storage: "2 GB",
    playground: 200,
    target: "For Scaling Operations",
    popular: true,
    features: ["Everything in Starter", "CRM integration", "Advanced analytics", "Priority support", "1 AI Sales Agent"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: 799,
    conversations: 1000,
    storage: "10 GB",
    playground: 500,
    target: "For High-Volume Businesses",
    features: ["Everything in Growth", "Booking automation", "Multi-agent support", "Dedicated account manager", "2 AI Sales Agents"],
    cta: "Get Started",
  },
];

const salesPlans = [
  {
    name: "Basic",
    price: 119,
    conversations: 50,
    storage: "500 MB",
    listings: 30,
    value: "Product catalog + AI sales assist",
    features: ["Equipment Webstore", "AI recommendation engine", "Quotation assistance", "1 AI Sales Agent"],
    cta: "Start Sales Store",
  },
  {
    name: "Premium",
    price: 199,
    conversations: 100,
    storage: "1 GB",
    listings: 150,
    value: "Scalable product selling",
    popular: true,
    features: ["Everything in Basic", "AI quotation automation", "Lead analytics", "CRM integration"],
    cta: "Start Sales Store",
  },
  {
    name: "Pro",
    price: 399,
    conversations: 300,
    storage: "2 GB",
    listings: 300,
    value: "Full sales operations",
    features: ["Everything in Premium", "Advanced workflows", "Priority support", "Custom integrations"],
    cta: "Start Sales Store",
  },
];

const rentalPlans = [
  {
    name: "Basic",
    price: 299,
    conversations: 50,
    storage: "1 GB",
    listings: 30,
    value: "Availability + booking system",
    features: ["Rental Webstore", "Availability management", "AI recommendation engine", "1 AI Sales Agent"],
    cta: "Start Rental Store",
  },
  {
    name: "Premium",
    price: 499,
    conversations: 100,
    storage: "2 GB",
    listings: 150,
    value: "Full rental operations",
    popular: true,
    features: ["Everything in Basic", "Booking automation", "AI quotation", "Lead analytics"],
    cta: "Start Rental Store",
  },
  {
    name: "Pro",
    price: 699,
    conversations: 200,
    storage: "3 GB",
    listings: 300,
    value: "Enterprise rental platform",
    features: ["Everything in Premium", "CRM integration", "Priority support", "Custom workflows"],
    cta: "Start Rental Store",
  },
];

const bundlePlans = [
  {
    name: "Basic",
    price: 399,
    conversations: 100,
    storage: "1.5 GB",
    listings: 100,
    value: "Hybrid operations",
    features: ["Sales + Rental Webstore", "AI recommendation engine", "Quotation assistance", "Availability management", "1 AI Sales Agent"],
    cta: "Start with Bundle",
  },
  {
    name: "Premium",
    price: 599,
    conversations: 200,
    storage: "3 GB",
    listings: 300,
    value: "Full business engine",
    popular: true,
    features: ["Everything in Basic", "AI quotation automation", "Booking automation", "Lead analytics", "CRM integration"],
    cta: "Start with Bundle",
  },
  {
    name: "Pro",
    price: 899,
    conversations: 500,
    storage: "5 GB",
    listings: 600,
    value: "Complete enterprise solution",
    features: ["Everything in Premium", "Multi-agent support", "Priority support", "Custom integrations", "Dedicated account manager"],
    cta: "Start with Bundle",
  },
];

const topUps = [
  { qty: 25, price: 30 },
  { qty: 50, price: 55 },
  { qty: 100, price: 100 },
  { qty: 200, price: 180 },
];

const faqs = [
  { q: "What does the AI Sales Agent do?", a: "It answers customer inquiries, recommends equipment, supports quotation flow, captures leads, and guides booking conversations — 24/7." },
  { q: "Can I train the AI with my catalogue?", a: "Yes. Upload your product catalogue, manuals, FAQs, and pricing documents. The AI will respond based on your real products and business logic." },
  { q: "What happens if I exceed my conversation limit?", a: "You can purchase top-up packs anytime without changing plans. Conversations roll over within the billing cycle." },
  { q: "What's the difference between AI Agent Only and Webstore + AI?", a: "AI Agent Only adds sales automation to your existing website. Webstore + AI gives you a full equipment storefront with AI built in." },
  { q: "Does the AI support multiple languages?", a: "Yes. The AI handles multilingual conversations so you can serve customers across different markets." },
  { q: "Can I add more AI agents later?", a: "Yes. Each additional agent costs $49/month and gets its own knowledge base — great for different product lines or brands." },
];

/* ═══════════════════════ FEATURE COMPARISON DATA ═══════════════════════ */

type FeatureValue = "yes" | "no" | string;

interface ComparisonFeature {
  label: string;
  values: FeatureValue[];
}

const agentComparisonFeatures: ComparisonFeature[] = [
  { label: "Conversations", values: ["50", "150", "450", "1,000"] },
  { label: "Knowledge Storage", values: ["50 MB", "100 MB", "300 MB", "1 GB"] },
  { label: "Playground Sessions", values: ["20", "75", "200", "500"] },
  { label: "Knowledge Base", values: ["yes", "yes", "yes", "yes"] },
  { label: "Instruction/Scenario", values: ["yes", "yes", "yes", "yes"] },
  { label: "Playground", values: ["yes", "yes", "yes", "yes"] },
  { label: "Conversation Monitoring", values: ["yes", "yes", "yes", "yes"] },
  { label: "Notification", values: ["no", "yes", "yes", "yes"] },
  { label: "Inventory Sync", values: ["no", "yes", "yes", "yes"] },
  { label: "Workflow Control", values: ["no", "yes", "yes", "yes"] },
  { label: "Lead Intelligence", values: ["no", "yes", "yes", "yes"] },
  { label: "Multi Agent Support", values: ["no", "no", "yes", "yes"] },
  { label: "AI Learning", values: ["no", "no", "yes", "yes"] },
  { label: "Behaviour Insight", values: ["no", "no", "yes", "yes"] },
  { label: "Data Sync", values: ["no", "no", "yes", "yes"] },
  { label: "Reservation Order Panel", values: ["no", "no", "yes", "yes"] },
  { label: "Google Sheet Live Sync", values: ["no", "no", "yes", "yes"] },
];

const webstoreComparisonFeatures: ComparisonFeature[] = [
  { label: "Storage", values: ["100 MB", "300 MB", "1 GB"] },
  { label: "Total Listings (Bundle)", values: ["100", "300", "600"] },
  { label: "Knowledge Base", values: ["yes", "yes", "yes"] },
  { label: "Instruction/Scenario", values: ["yes", "yes", "yes"] },
  { label: "Playground", values: ["yes", "yes", "yes"] },
  { label: "Conversation Monitoring", values: ["yes", "yes", "yes"] },
  { label: "Notification", values: ["yes", "yes", "yes"] },
  { label: "Inventory Sync", values: ["yes", "yes", "yes"] },
  { label: "Workflow Control", values: ["yes", "yes", "yes"] },
  { label: "Lead Intelligence", values: ["yes", "yes", "yes"] },
  { label: "Multi Agent Support", values: ["no", "yes", "yes"] },
  { label: "AI Learning", values: ["no", "yes", "yes"] },
  { label: "Behaviour Insight", values: ["no", "yes", "yes"] },
  { label: "Data Sync", values: ["no", "yes", "yes"] },
  { label: "Reservation Order Panel", values: ["no", "yes", "yes"] },
  { label: "Google Sheet Live Sync", values: ["no", "yes", "yes"] },
];

const trustItems = [
  "Multilingual AI conversations",
  "Private knowledge base per tenant",
  "Buyer intent detection & analytics",
  "Encrypted & isolated data storage",
];

/* ═══════════════════════ HELPERS ═══════════════════════ */

function fmtPrice(price: number, billing: BillingCycle, currency: Currency = "SGD") {
  const val = billing === "annual" ? Math.round(price * (1 - annualDiscount)) : price;
  if (currency === "USD") {
    return `$${Math.round(val * SGD_TO_USD)}`;
  }
  return `S$${val}`;
}

function fmtAnnual(price: number, currency: Currency = "SGD") {
  const val = Math.round(price * 12 * (1 - annualDiscount));
  if (currency === "USD") {
    return `$${Math.round(val * SGD_TO_USD)}`;
  }
  return `S$${val}`;
}

/* ═══════════════════════ COMPONENTS ═══════════════════════ */

function AgentCard({ plan, billing, currency, onCompare }: { plan: typeof agentPlans[0]; billing: BillingCycle; currency: Currency; onCompare: () => void }) {
  return (
    <div className={`pricing-card ${plan.popular ? "pricing-card-featured" : ""}`}>
      {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}
      <div className="pricing-plan-name">{plan.name}</div>
      <div className="pricing-target">{plan.target}</div>
      <div className="pricing-price-row">
        <span className="pricing-price">{fmtPrice(plan.price, billing, currency)}</span>
        <span className="pricing-price-period">/ month</span>
      </div>
      {billing === "annual" && (
        <p className="pricing-annual-note">{fmtAnnual(plan.price, currency)} billed annually</p>
      )}
      <div className="pricing-divider" />
      <div className="pricing-included-list">
        <div className="pricing-included-item">
          <span className="pricing-included-label">Conversations</span>
          <span className="pricing-included-value">{plan.conversations}</span>
        </div>
        <div className="pricing-included-item">
          <span className="pricing-included-label">Knowledge Source</span>
          <span className="pricing-included-value">{plan.storage}</span>
        </div>
        <div className="pricing-included-item">
          <span className="pricing-included-label">Playground</span>
          <span className="pricing-included-value">{plan.playground}</span>
        </div>
      </div>
      <div className="pricing-divider" />
      <div className="pricing-features">
        {plan.features.map((f) => (
          <div key={f} className="pricing-feature-row">
            <span className="pricing-feature-check"><Check size={12} strokeWidth={3} /></span>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <button className={`pricing-cta ${plan.popular ? "pricing-cta-featured" : ""}`}>{plan.cta}</button>
      <button className="pricing-compare-btn" onClick={onCompare}>Compare Features</button>
    </div>
  );
}

function WebstoreCard({ plan, billing, currency, onCompare }: { plan: typeof bundlePlans[0]; billing: BillingCycle; currency: Currency; onCompare: () => void }) {
  return (
    <div className={`pricing-card ${plan.popular ? "pricing-card-featured" : ""}`}>
      {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}
      <div className="pricing-plan-name">{plan.name}</div>
      <div className="pricing-target">{plan.value}</div>
      <div className="pricing-price-row">
        <span className="pricing-price">{fmtPrice(plan.price, billing, currency)}</span>
        <span className="pricing-price-period">/ month</span>
      </div>
      {billing === "annual" && (
        <p className="pricing-annual-note">{fmtAnnual(plan.price, currency)} billed annually</p>
      )}
      <div className="pricing-divider" />
      <div className="pricing-included-list">
        <div className="pricing-included-item">
          <span className="pricing-included-label">Listings</span>
          <span className="pricing-included-value">{plan.listings}</span>
        </div>
        <div className="pricing-included-item">
          <span className="pricing-included-label">AI Conversations</span>
          <span className="pricing-included-value">{plan.conversations}</span>
        </div>
        <div className="pricing-included-item">
          <span className="pricing-included-label">Knowledge Source</span>
          <span className="pricing-included-value">{plan.storage}</span>
        </div>
      </div>
      <div className="pricing-divider" />
      <div className="pricing-features">
        {plan.features.map((f) => (
          <div key={f} className="pricing-feature-row">
            <span className="pricing-feature-check"><Check size={12} strokeWidth={3} /></span>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <button className={`pricing-cta ${plan.popular ? "pricing-cta-featured" : ""}`}>{plan.cta}</button>
      <button className="pricing-compare-btn" onClick={onCompare}>Compare Features</button>
    </div>
  );
}

function ComparisonTable({ title, planNames, features }: { title: string; planNames: string[]; features: ComparisonFeature[] }) {
  return (
    <div className="pricing-comparison-table-wrap">
      <h3 className="pricing-comparison-title">{title}</h3>
      <div className="pricing-comparison-scroll">
        <table className="pricing-comparison-table">
          <thead>
            <tr>
              <th className="pricing-comparison-feature-col">Feature</th>
              {planNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.label}>
                <td className="pricing-comparison-feature-label">{feature.label}</td>
                {feature.values.map((val, i) => (
                  <td key={i} className="pricing-comparison-value">
                    {val === "yes" ? (
                      <span className="pricing-comparison-yes"><Check size={16} strokeWidth={3} /></span>
                    ) : val === "no" ? (
                      <span className="pricing-comparison-no"><X size={16} strokeWidth={3} /></span>
                    ) : (
                      <span className="pricing-comparison-text">{val}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pricing-faq-item">
      <button type="button" className="pricing-faq-trigger" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="pricing-faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pricing-faq-answer"><p>{a}</p></div>}
    </div>
  );
}

/* ═══════════════════════ PAGE ═══════════════════════ */

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [webstoreTab, setWebstoreTab] = useState<WebstoreTab>("bundle");
  const [currency, setCurrency] = useState<Currency>("SGD");

  const currentWebstorePlans = webstoreTab === "bundle" ? bundlePlans : webstoreTab === "sales" ? salesPlans : rentalPlans;

  return (
    <div className="pricing-page">
      <nav className="pricing-nav">
        <Link to="/" className="pricing-back-link"><ArrowLeft size={18} /> <Bot size={20} /> Antbuildz</Link>
      </nav>

      <div className="pricing-container">
        {/* Hero */}
        <header className="pricing-hero">
          <h1>One Conversation.<br />Thousands in <span className="pricing-gradient-text">Revenue.</span></h1>
          <p className="pricing-hero-sub">Your AI sales agent qualifies enquiries, matches the right products, and generates quotations automatically — turning every conversation into a real sales opportunity.</p>
        </header>

        {/* Billing & Currency Controls */}
        <div className="pricing-controls-row">
          <div className="pricing-billing-toggle">
            <button className={`pricing-billing-btn ${billing === "monthly" ? "is-active" : ""}`} onClick={() => setBilling("monthly")}>Monthly</button>
            <button className={`pricing-billing-btn ${billing === "annual" ? "is-active" : ""}`} onClick={() => setBilling("annual")}>Annual <span className="pricing-billing-save">Save 20%</span></button>
          </div>
          <div className="pricing-currency-select-wrap">
            <select
              className="pricing-currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
            >
              <option value="SGD">SGD</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        {/* ═══ SECTION 1: AI Agent Only ═══ */}
        <section className="pricing-section">
          <div className="pricing-section-header">
            <span className="pricing-section-label">AI Agent Only</span>
            <h2>Deploy an AI Sales Agent on Your Existing Website</h2>
            <p>No webstore needed. Handle inquiries, qualify leads, and generate quotes automatically.</p>
          </div>
          <div className="pricing-grid-4">
            {agentPlans.map((plan) => (
              <AgentCard key={plan.name} plan={plan} billing={billing} currency={currency} />
            ))}
          </div>
        </section>

        {/* ═══ DIVIDER ═══ */}
        <div className="pricing-section-divider">
          <div className="pricing-divider-line" />
          <span className="pricing-divider-text">Or go further with a complete digital sales system</span>
          <div className="pricing-divider-line" />
        </div>

        {/* ═══ SECTION 2: Webstore + AI ═══ */}
        <section className="pricing-section">
          <div className="pricing-section-header">
            <span className="pricing-section-label">Webstore + AI</span>
            <h2>Launch a Full Equipment Webstore — Powered by AI</h2>
            <p>Sell and rent equipment with a complete digital sales system — including AI agent, listings, and transaction workflows.</p>
          </div>

          {/* Benefit bullets */}
          <div className="pricing-benefit-bullets">
            <div className="pricing-benefit-item"><Zap size={16} /> Includes AI Sales Agent</div>
            <div className="pricing-benefit-item"><ShoppingBag size={16} /> Manage listings and pricing</div>
            <div className="pricing-benefit-item"><Settings size={16} /> Handle rental and sales workflows</div>
          </div>

          <div className="pricing-sub-tabs">
            <button className={`pricing-sub-tab ${webstoreTab === "bundle" ? "is-active" : ""}`} onClick={() => setWebstoreTab("bundle")}>Bundle</button>
            <button className={`pricing-sub-tab ${webstoreTab === "sales" ? "is-active" : ""}`} onClick={() => setWebstoreTab("sales")}>Sales Store</button>
            <button className={`pricing-sub-tab ${webstoreTab === "rental" ? "is-active" : ""}`} onClick={() => setWebstoreTab("rental")}>Rental Store</button>
          </div>

          {webstoreTab === "bundle" && (
            <p className="pricing-webstore-note">Includes AI agent + webstore infrastructure</p>
          )}
          {webstoreTab === "rental" && (
            <p className="pricing-webstore-note">Built for rental operations & availability management</p>
          )}

          <div className="pricing-grid-3">
            {currentWebstorePlans.map((plan) => (
              <WebstoreCard key={plan.name} plan={plan} billing={billing} currency={currency} />
            ))}
          </div>
        </section>

        {/* ═══ Usage & Add-Ons ═══ */}
        <section className="pricing-section">
          <div className="pricing-section-header">
            <span className="pricing-section-label">Usage & Add-Ons</span>
            <h2>Scale as you grow — add capacity anytime</h2>
          </div>

          <div className="pricing-addons-grid">
            <div className="pricing-addon-card">
              <h3>Conversation Top-ups</h3>
              <p className="pricing-addon-desc">Add more AI conversations anytime without changing your plan.</p>
              <table className="pricing-topup-table">
                <thead>
                  <tr>
                    <th>Conversations</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {topUps.map((t) => (
                    <tr key={t.qty}>
                      <td>{t.qty} conversations</td>
                      <td>S${t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pricing-addon-card">
              <h3>Additional AI Agent</h3>
              <p className="pricing-addon-desc">Deploy another AI sales agent with a separate knowledge base — ideal for different product lines, brands, or business units.</p>
              <div className="pricing-agent-price">S$49 <span>/ month</span></div>
              <div style={{ marginTop: 16 }}>
                <button className="pricing-cta">Add Agent</button>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="pricing-section">
          <div className="pricing-section-header">
            <span className="pricing-section-label">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <div className="pricing-faq-list">
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* ═══ Enterprise Note ═══ */}
        <div className="pricing-enterprise-note">
          <p>Need a custom enterprise solution with higher volume or tailored features? <a href="mailto:hello@antbuildz.com" className="pricing-enterprise-link">Contact us</a> — we'll build the right plan for your business.</p>
        </div>

        {/* ═══ Bottom CTA ═══ */}
        <section className="pricing-section">
          <div className="pricing-bottom-cta">
            <h2>Ready to turn inquiries into sales?</h2>
            <p>Choose the plan that fits your business and start converting equipment buyers today.</p>
            <div className="pricing-bottom-cta-actions">
              <button className="pricing-cta-white">Get Started</button>
              <button className="pricing-cta-outline-white">Contact Sales</button>
            </div>
          </div>

          <div className="pricing-trust-grid">
            {trustItems.map((item) => (
              <div key={item} className="pricing-trust-item">
                <span className="pricing-trust-check">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
