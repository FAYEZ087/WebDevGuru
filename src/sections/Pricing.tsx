import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import { Check } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import RevealText from '../components/RevealText';
import { track } from '../utils/analytics';
import './Pricing.css';

const plans = [
  {
    name: "Launch",
    price: "₹15,000",
    description: "Perfect for new brands needing a high-impact presence.",
    features: [
      "Custom Editorial Design",
      "Mobile Optimization",
      "5 Core Pages",
      "Basic SEO Setup",
      "21-Day Delivery",
      "Email Support"
    ],
    featured: false
  },
  {
    name: "Growth",
    price: "₹35,000",
    description: "Engineered for scaling brands that need performance.",
    features: [
      "Everything in Launch",
      "Conversion Optimization",
      "Unlimited Pages",
      "Advanced Animations",
      "Priority Support",
      "CMS Integration"
    ],
    featured: true
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Bespoke solutions for enterprise-level demands.",
    features: [
      "Everything in Growth",
      "Custom WebGL Visuals",
      "Third-party API Integration",
      "Performance Audit",
      "Dedicated Account Manager",
      "Post-launch Strategy"
    ],
    featured: false
  }
];

const Pricing = () => {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="pricing">
      <div className="section-header">
        <ScrollReveal>
          <span className="label-mono">Investment</span>
        </ScrollReveal>
        <RevealText text="Transparent Pricing. No Surprises." className="section-title" tag="h2" />
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <ScrollReveal 
            key={index} 
            delay={index * 0.1}
            onViewportEnter={() => track('pricing_plan_viewed', { plan: plan.name })}
          >
            <TiltCard 
              key={index}
              className={`pricing-card ${plan.featured ? 'featured' : ''} sheen`}
            >
              {plan.featured && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check size={16} className="text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton className="full-width" dataCursor="Book">
                <button 
                  onClick={() => openModal(<ContactForm />)} 
                  className={`plan-cta ${plan.featured ? 'primary' : 'secondary'} sheen`}
                >
                  <span className="btn-label">
                    <span className="btn-text-reveal" data-text="Book Scope Call" data-cursor="Book Call">Book Scope Call</span>
                  </span>
                </button>
              </MagneticButton>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="pricing-footer text-center">
        <p>Not sure which plan? <button onClick={() => openModal(<ContactForm />)} className="text-gold text-link" data-cursor="Talk">Let's talk. →</button></p>
      </ScrollReveal>
    </section>
  );
};

export default Pricing;
