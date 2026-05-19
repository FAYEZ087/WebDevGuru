import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import RevealText from '../components/RevealText';
import './Process.css';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your business goals, target audience, and conversion bottlenecks."
  },
  {
    number: "02",
    title: "Design",
    description: "High-fidelity editorial design focused on brand authority and user flow."
  },
  {
    number: "03",
    title: "Build",
    description: "Precision engineering with clean code, high performance, and SEO optimization."
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing, optimization, and successful deployment to your domain."
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="process" ref={containerRef}>
      <div className="section-header">
        <ScrollReveal>
          <span className="label-mono">Our Process</span>
        </ScrollReveal>
        <RevealText text="From Scope to Launch in 21 Days." className="section-title" tag="h2" />
      </div>

      <div className="process-timeline">
        <motion.div className="progress-line" style={{ scaleX }} />
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <ScrollReveal 
              key={index}
              className="process-step"
              delay={index * 0.2}
            >
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-dot"></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
