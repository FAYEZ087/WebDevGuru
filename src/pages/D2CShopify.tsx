import { useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { getServiceSchema } from '../utils/schemas';
import { track } from '../utils/analytics';
import './ServiceDetail.css';

const D2CShopify = () => {
  const { openModal } = useModal();

  useEffect(() => {
    track('service_page_viewed', { service: 'D2C Shopify Experiences' });
  }, []);

  const seoProps = useSEO({
    title: "D2C Shopify Experience Design — WebDevGuru",
    description: "Custom Shopify stores built for scale, speed, and unforgettable brand storytelling.",
    schema: getServiceSchema("D2C Shopify Experiences", "Custom Shopify stores built for scale and storytelling.")
  });

  const navLinks = [
    { label: "Home", href: "/", cursor: "Home" },
    { label: "Work", href: "/work", cursor: "Work" },
    { label: "About", href: "/about", cursor: "About" },
    { label: "Websites", href: "/services/conversion-websites", cursor: "Web" },
    { label: "SaaS", href: "/services/saas-landing-pages", cursor: "SaaS" }
  ];

  const deliverables = [
    { title: "Custom Shopify OS 2.0 Build", desc: "Modular, high-performance themes built with the latest Shopify features." },
    { title: "AOV Lift Strategy", desc: "Strategic cross-sells, upsells, and bundle architectures to increase order value." },
    { title: "Product Page Mastery", desc: "High-converting PDPs that balance technical specs with emotional brand story." },
    { title: "Checkout Optimization", desc: "Reducing friction at the final step to minimize cart abandonment." },
    { title: "Brand Narrative Design", desc: "Editorial-grade visuals that communicate your brand's unique authority." },
    { title: "Speed & Performance", desc: "Optimized for mobile-first shoppers with sub-2 second load times." },
    { title: "App Stack Consolidation", desc: "Reducing bloat by replacing unnecessary apps with custom code." },
    { title: "Inventory & ERP Sync", desc: "Seamless integration with your backend operations and warehouse." }
  ];

  const whoItsFor = [
    { title: "Scaling D2C Brands", desc: "Brands doing ₹10Cr+ in annual sales that have outgrown their basic Shopify theme." },
    { title: "Luxury Retailers", desc: "High-end product companies that need their digital store to feel like a premium boutique." },
    { title: "Omnichannel Brands", desc: "Companies selling across multiple platforms that need a unified digital flagship." }
  ];

  const process = [
    { title: "Store Audit", desc: "We identify performance bottlenecks and UX friction in your current store." },
    { title: "Design Systems", desc: "We build a reusable UI kit for your brand to ensure consistency across all pages." },
    { title: "Shopify Engineering", desc: "We build your store using clean, maintainable Liquid and custom JS." },
    { title: "Conversion Launch", desc: "We go live with a focus on stable transition and immediate performance lift." }
  ];

  return (
    <div className="service-detail">
      <SEO {...seoProps} />
      <Navbar customLinks={navLinks} />
      
      <section className="service-hero">
        <ScrollReveal>
          <span className="label-mono">Shopify Service</span>
        </ScrollReveal>
        <RevealText 
          text="Shopify Stores Built for Scale, Speed, and Story."
          tag="h1"
          className="service-title"
        />
        <ScrollReveal delay={0.4}>
          <div className="service-hero-ctas">
            <MagneticButton dataCursor="Book">
              <button onClick={() => openModal(<ContactForm />)} className="cta-primary sheen">
                <span className="btn-label">
                  <span className="btn-text-reveal" data-text="Book Scope Call">Book Scope Call</span>
                </span>
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>

      <section className="section-padding">
        <ScrollReveal>
          <span className="label-mono">The Deliverables</span>
          <h2 className="section-title">What's Included</h2>
        </ScrollReveal>
        <div className="included-grid">
          {deliverables.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="included-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-warm">
        <ScrollReveal>
          <span className="label-mono">Ideal Partners</span>
          <h2 className="section-title">Who It's For</h2>
        </ScrollReveal>
        <div className="who-grid">
          {whoItsFor.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="who-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <ScrollReveal>
          <span className="label-mono">The Roadmap</span>
          <h2 className="section-title">Our Process</h2>
        </ScrollReveal>
        <div className="process-list">
          {process.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="process-step">
                <div className="step-number">0{i + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-warm">
        <ScrollReveal>
          <span className="label-mono">Impact</span>
          <h2 className="section-title">The Results</h2>
        </ScrollReveal>
        <div className="results-stats">
          <ScrollReveal>
            <div className="result-card">
              <span className="result-value">+85%</span>
              <span className="result-label">Avg AOV Increase</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="result-card">
              <span className="result-value">312%</span>
              <span className="result-label">Avg Sales Growth</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="final-cta-section">
        <ScrollReveal>
          <h2>Ready to build?</h2>
          <MagneticButton dataCursor="Book">
            <button onClick={() => openModal(<ContactForm />)} className="cta-button-main sheen">
              <span className="btn-label">
                <span className="btn-text-reveal" data-text="Book Scope Call">Book Scope Call</span>
              </span>
            </button>
          </MagneticButton>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default D2CShopify;
