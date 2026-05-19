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

const SaaSLandingPages = () => {
  const { openModal } = useModal();

  useEffect(() => {
    track('service_page_viewed', { service: 'SaaS Landing Pages' });
  }, []);

  const seoProps = useSEO({
    title: "SaaS Landing Page Design — WebDevGuru",
    description: "Precision-engineered landing pages that turn cold traffic into recurring revenue machines.",
    schema: getServiceSchema("SaaS Landing Pages", "Precision-engineered landing pages for SaaS companies.")
  });

  const navLinks = [
    { label: "Home", href: "/", cursor: "Home" },
    { label: "Work", href: "/work", cursor: "Work" },
    { label: "About", href: "/about", cursor: "About" },
    { label: "Websites", href: "/services/conversion-websites", cursor: "Web" },
    { label: "Shopify", href: "/services/d2c-shopify", cursor: "Shopify" }
  ];

  const deliverables = [
    { title: "Trial-to-Paid Architecture", desc: "User flows engineered to minimize friction and maximize activation." },
    { title: "Pricing Page Strategy", desc: "Psychologically-driven tier structures and feature comparisons." },
    { title: "Feature Storytelling", desc: "Translating complex technical capabilities into tangible business outcomes." },
    { title: "Social Proof Integration", desc: "Strategic placement of logos, testimonials, and case study highlights." },
    { title: "Interactive Product Demos", desc: "Engaging visual walkthroughs that showcase the platform's value." },
    { title: "Performance Engineering", desc: "Lighting fast load times to ensure developers and buyers stay engaged." },
    { title: "Analytics Integration", desc: "Deep tracking of demo signups, trial starts, and scroll depth." },
    { title: "A/B Testing Ready", desc: "Clean code structure that allows for rapid experimentation and testing." }
  ];

  const whoItsFor = [
    { title: "Early-Stage VC Backed", desc: "SaaS companies that need to demonstrate traction and user activation to investors." },
    { title: "Growth-Stage Scaleups", desc: "Platforms moving upmarket that need a more professional, enterprise-grade presence." },
    { title: "Bootstrap Founders", desc: "Independent SaaS builders who need a high-converting front-end without the overhead." }
  ];

  const process = [
    { title: "Value Discovery", desc: "We identify the unique 'Aha!' moment of your software and build the page around it." },
    { title: "High-Fidelity Design", desc: "We design a slick, modern interface that matches the quality of your platform." },
    { title: "Frontend Engineering", desc: "We build the landing page using cutting-edge tech for peak performance." },
    { title: "Feedback & Refinement", desc: "We fine-tune the animations and interactions based on initial user feedback." }
  ];

  return (
    <div className="service-detail">
      <SEO {...seoProps} />
      <Navbar customLinks={navLinks} />
      
      <section className="service-hero">
        <ScrollReveal>
          <span className="label-mono">SaaS Service</span>
        </ScrollReveal>
        <RevealText 
          text="Turn Demo Traffic Into Paying Customers."
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
              <span className="result-value">+140%</span>
              <span className="result-label">Trial Activation Rate</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="result-card">
              <span className="result-value">22%</span>
              <span className="result-label">Avg CAC Reduction</span>
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

export default SaaSLandingPages;
