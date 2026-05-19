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

const ConversionWebsites = () => {
  const { openModal } = useModal();
  
  useEffect(() => {
    track('service_page_viewed', { service: 'Conversion Websites' });
  }, []);

  const seoProps = useSEO({
    title: "Conversion Website Design — WebDevGuru",
    description: "High-performance digital storefronts optimized for maximum conversion and user retention.",
    schema: getServiceSchema("Conversion Websites", "High-performance digital storefronts optimized for maximum conversion.")
  });

  const navLinks = [
    { label: "Home", href: "/", cursor: "Home" },
    { label: "Work", href: "/work", cursor: "Work" },
    { label: "About", href: "/about", cursor: "About" },
    { label: "SaaS", href: "/services/saas-landing-pages", cursor: "SaaS" },
    { label: "Shopify", href: "/services/d2c-shopify", cursor: "Shopify" }
  ];

  const deliverables = [
    { title: "Custom Editorial Design", desc: "Bespoke layouts tailored to your brand's unique narrative." },
    { title: "CRO Architecture", desc: "Every element positioned to guide the user towards the primary action." },
    { title: "Trust Framework", desc: "Strategic placement of social proof and authority signals." },
    { title: "LCP Optimization", desc: "Extreme performance engineering for sub-second loading." },
    { title: "Above-the-Fold Clarity", desc: "Immediate value proposition communication that reduces bounce rates." },
    { title: "Mobile-First UX", desc: "Seamless experiences across all devices without compromise." },
    { title: "SEO Foundation", desc: "Clean semantic HTML structure for maximum organic visibility." },
    { title: "Behavioral Analytics", desc: "Heatmaps and event tracking to monitor user journey." }
  ];

  const whoItsFor = [
    { title: "Established D2C Brands", desc: "Companies doing ₹5Cr+ in revenue that need to squeeze more ROI out of their current traffic." },
    { title: "Professional Service Firms", desc: "Lawyers, consultants, and agencies that require an authoritative digital presence." },
    { title: "B2B Market Leaders", desc: "Enterprises that need their website to reflect their market-leading status." }
  ];

  const process = [
    { title: "Strategy & Audit", desc: "We analyze your current performance and map out the new conversion architecture." },
    { title: "Visual Storytelling", desc: "We design a high-fidelity editorial experience that reflects your brand's authority." },
    { title: "Precision Engineering", desc: "We build the site using modern stacks for unmatched speed and security." },
    { title: "Launch & Optimize", desc: "We go live and monitor behavior to ensure all conversion goals are met." }
  ];

  return (
    <div className="service-detail">
      <SEO {...seoProps} />
      <Navbar customLinks={navLinks} />
      
      <section className="service-hero">
        <ScrollReveal>
          <span className="label-mono">Service</span>
        </ScrollReveal>
        <RevealText 
          text="Websites That Don't Just Look Good. They Close."
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
              <span className="result-value">3.4x</span>
              <span className="result-label">Avg Conversion Lift</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="result-card">
              <span className="result-value">98</span>
              <span className="result-label">Avg Lighthouse Score</span>
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

export default ConversionWebsites;
