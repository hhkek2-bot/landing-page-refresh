import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Check } from "lucide-react";
import "./pricing.css";

type BillingCycle = "monthly" | "annual";
type TopTab = "agent" | "webstore";
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
    target: "Testing & individuals",
    features: ["AI equipment recommendation", "Quotation assistance", "1 AI Sales Agent"],
    cta: "Get Started",
  },
  {
    name: "Starter",
    price: 149,
    conversations: 150,
    storage: "500 MB",
    playground: 75,
    target: "Small teams",
    features: ["Everything in Pilot", "Lead intent detection", "Email notifications", "1 AI Sales Agent"],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: 399,
    conversations: 450,
    storage: "2 GB",
    playground: 200,
    target: "Scaling SMEs",
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
    target: "Heavy users & enterprises",
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

const trustItems = [
  "Multilingual AI conversations",
  "Private knowledge base per tenant",
  "Buyer intent detection & analytics",
  "Encrypted & isolated data storage",
];

/* ═══════════════════════ HELPERS ═══════════════════════ */

function fmtPrice(price: number, billing: BillingCycle) {
  const val = billing === "annual" ? Math.round(price * (1 - annualDiscount)) : price;
  return `$${val}`;
}

/* ═══════════════════════ COMPONENTS ═══════════════════════ */

function AgentCard({ plan, billing }: { plan: typeof agentPlans[0]; billing: BillingCycle }) {
  return (
    <div className={`pricing-card ${plan.popular ? "pricing-card-featured" : ""}`}>
      {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}
      <div className="pricing-plan-name">{plan.name}</div>
      <div className="pricing-target">{plan.target}</div>
      <div className="pricing-price-row">
        <span className="pricing-price">{fmtPrice(plan.price, billing)}</span>
        <span className="pricing-price-period">/ month</span>
      </div>
      {billing === "annual" && (
        <p className="pricing-annual-note">${Math.round(plan.price * 12 * (1 - annualDiscount))} billed annually</p>
      )}
      <div className="pricing-divider" />
      <div className="pricing-included-list">
        <div className="pricing-included-item">
          <span className="pricing-included-label">Conversations</span>
          <span className="pricing-included-value">{plan.conversations}</span>
        </div>
        <div className="pricing-included-item">
          <span className="pricing-included-label">Storage</span>
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
    </div>
  );
}

function WebstoreCard({ plan, billing }: { plan: typeof bundlePlans[0]; billing: BillingCycle }) {
  return (
    <div className={`pricing-card ${plan.popular ? "pricing-card-featured" : ""}`}>
      {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}
      <div className="pricing-plan-name">{plan.name}</div>
      <div className="pricing-target">{plan.value}</div>
      <div className="pricing-price-row">
        <span className="pricing-price">{fmtPrice(plan.price, billing)}</span>
        <span className="pricing-price-period">/ month</span>
      </div>
      {billing === "annual" && (
        <p className="pricing-annual-note">${Math.round(plan.price * 12 * (1 - annualDiscount))} billed annually</p>
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
          <span className="pricing-included-label">Storage</span>
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
  const [topTab, setTopTab] = useState<TopTab>("webstore");
  const [webstoreTab, setWebstoreTab] = useState<WebstoreTab>("bundle");

  const currentWebstorePlans = webstoreTab === "bundle" ? bundlePlans : webstoreTab === "sales" ? salesPlans : rentalPlans;

  return (
    <div className="pricing-page">
      <nav className="pricing-nav">
        <Link to="/" className="pricing-back-link"><ArrowLeft size={18} /> <Bot size={20} /> Antbuildz</Link>
      </nav>

      <div className="pricing-container">
        {/* Hero */}
        <header className="pricing-hero">
          <h1>Pricing built for equipment businesses to scale with AI</h1>
          <p className="pricing-hero-sub">From AI-powered conversations to full business operations — choose what fits your growth.</p>
          <p className="pricing-hero-trust">No hidden fees. Scale as you grow.</p>
        </header>

        {/* Top Tabs */}
        <div className="pricing-top-tabs">
          <button className={`pricing-top-tab ${topTab === "agent" ? "is-active" : ""}`} onClick={() => setTopTab("agent")}>AI Agent Only</button>
          <button className={`pricing-top-tab ${topTab === "webstore" ? "is-active" : ""}`} onClick={() => setTopTab("webstore")}>Webstore + AI</button>
        </div>

        {/* Billing Toggle */}
        <div className="pricing-billing-row">
          <div className="pricing-toggle">
            <button className={`pricing-toggle-btn ${billing === "monthly" ? "is-active" : ""}`} onClick={() => setBilling("monthly")}>Monthly</button>
            <button className={`pricing-toggle-btn ${billing === "annual" ? "is-active" : ""}`} onClick={() => setBilling("annual")}>Annual</button>
          </div>
          {billing === "annual" && <span className="pricing-save-badge">Save 20%</span>}
        </div>

        {/* ═══ AI Agent Only ═══ */}
        {topTab === "agent" && (
          <section className="pricing-section">
            <div className="pricing-section-header">
              <span className="pricing-section-label">AI Agent Only</span>
              <h2>Automate inquiries with an AI sales agent on your existing website</h2>
              <p>No webstore needed. Deploy a trained AI agent that handles equipment inquiries, quotes, and leads.</p>
            </div>
            <div className="pricing-grid-4">
              {agentPlans.map((plan) => (
                <AgentCard key={plan.name} plan={plan} billing={billing} />
              ))}
            </div>
          </section>
        )}

        {/* ═══ Webstore + AI ═══ */}
        {topTab === "webstore" && (
          <section className="pricing-section">
            <div className="pricing-section-header">
              <span className="pricing-section-label">Webstore + AI</span>
              <h2>A complete digital storefront with AI-powered sales built in</h2>
              <p>Launch your equipment webstore with AI that handles inquiries, recommendations, and quotes automatically.</p>
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
                <WebstoreCard key={plan.name} plan={plan} billing={billing} />
              ))}
            </div>
          </section>
        )}

        {/* ═══ Usage & Add-Ons ═══ */}
        <section className="pricing-section">
          <div className="pricing-section-header">
            <span className="pricing-section-label">Usage & Add-Ons</span>
            <h2>Scale as you grow — add capacity anytime</h2>
          </div>

          <div className="pricing-addons-grid">
            {/* Top-up packs */}
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
                      <td>${t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional Agent */}
            <div className="pricing-addon-card">
              <h3>Additional AI Agent</h3>
              <p className="pricing-addon-desc">Deploy another AI sales agent with a separate knowledge base — ideal for different product lines, brands, or business units.</p>
              <div className="pricing-agent-price">$49 <span>/ month</span></div>
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
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
