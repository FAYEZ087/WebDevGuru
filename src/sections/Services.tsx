import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import { Target, Layout, ShoppingBag, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import RevealText from '../components/RevealText';
import './Services.css';

const services = [
  {
    title: "Conversion Websites",
    slug: "conversion-websites",
    description: "High-performance digital storefronts optimized for maximum conversion and user retention.",
    icon: <Target className="service-icon" />,
  },
  {
    title: "SaaS Landing Pages",
    slug: "saas-landing-pages",
    description: "Precision-engineered landing pages that turn cold traffic into recurring revenue machines.",
    icon: <Layout className="service-icon" />,
  },
  {
    title: "D2C Shopify Experiences",
    slug: "d2c-shopify",
    description: "Custom Shopify stores built for scale, speed, and unforgettable brand storytelling.",
    icon: <ShoppingBag className="service-icon" />,
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <ScrollReveal>
          <span className="label-mono">What We Build</span>
        </ScrollReveal>
        <RevealText text="Every Pixel. Every Line. Engineered." className="section-title" tag="h2" />
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <Link to={`/services/${service.slug}`} className="service-card-link">
              <TiltCard className="service-card sheen">
                <div className="card-border-top"></div>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-footer" data-cursor="Explore">
                  <span>Explore</span>
                  <ArrowRight size={18} />
                </div>
              </TiltCard>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
