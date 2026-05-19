import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import Navbar from '../../components/Navbar';
import ScrollReveal from '../../components/ScrollReveal';
import RevealText from '../../components/RevealText';
import MagneticButton from '../../components/MagneticButton';
import ContactForm from '../../components/ContactForm';
import SEO from '../../components/SEO';
import { useSEO } from '../../hooks/useSEO';
import { track } from '../../utils/analytics';
import './Work.css';

const projects = [
  { id: 'aurelia', name: "Aurelia Store", category: "D2C", metric: "+340% Conversion Rate" },
  { id: 'pipeline', name: "PipelineHQ", category: "SaaS", metric: "4.1x Trial-to-Paid Rate" },
  { id: 'velour', name: "Velour Brand", category: "Brand", metric: "2.8x Avg Session Duration" },
  { id: 'cartstack', name: "CartStack", category: "SaaS", metric: "68% Bounce Rate Reduction" },
  { id: 'nativa', name: "Nativa Foods", category: "D2C", metric: "₹2.1Cr Revenue at Launch" },
  { id: 'monochrome', name: "Monochrome Studio", category: "Brand", metric: "AWWWARDS Honorable Mention" }
];

const Work = () => {
  const { openModal } = useModal();
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    track('page_view', { path: '/work' });
  }, []);

  const seoProps = useSEO({
    title: "Our Work — 48 Projects, One Standard: Results",
    description: "Every site we ship is engineered to convert, built to load fast, and designed to look expensive."
  });

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const navLinks = [
    { label: "Home", href: "/", cursor: "Home" },
    { label: "Work", href: "/work", cursor: "Work" },
    { label: "About", href: "/about", cursor: "About" }
  ];

  const handleFilter = (f: string) => {
    setFilter(f);
    track('work_filter_used', { filter: f });
  };

  return (
    <div className="work-page">
      <SEO {...seoProps} />
      <Navbar customLinks={navLinks} />

      <section className="work-hero">
        <ScrollReveal>
          <span className="label-mono gold">OUR WORK</span>
        </ScrollReveal>
        <RevealText 
          text="48 Projects. One Standard: Results."
          tag="h1"
          className="work-title"
        />
        <ScrollReveal delay={0.4}>
          <p className="work-subtext">
            Every site we ship is engineered to convert, built to load fast, and designed to look expensive.
          </p>
        </ScrollReveal>
      </section>

      <section className="work-filter-section">
        <div className="filter-bar">
          {['All', 'D2C', 'SaaS', 'Brand'].map(f => (
            <button 
              key={f}
              className={`filter-pill ${filter === f ? 'active' : ''}`}
              onClick={() => handleFilter(f)}
              data-cursor="Filter"
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="work-grid-section">
        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="project-card-wrapper"
              >
                <div className="project-card-v2" data-category={project.category}>
                  <div className="project-image-placeholder">
                    <div className="category-pill">{project.category}</div>
                  </div>
                  <div className="project-info-v2">
                    <h3 className="project-name-v2">{project.name}</h3>
                    <span className="project-metric">{project.metric}</span>
                    <a href={`/project/${project.id}`} className="view-case-link" data-cursor="View">
                      View Case Study <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="work-cta-strip">
        <ScrollReveal>
          <div className="cta-strip-content">
            <h2>Have a project in mind?</h2>
            <MagneticButton dataCursor="Book">
              <button 
                onClick={() => openModal(<ContactForm />)} 
                className="cta-button-main sheen"
              >
                <span className="btn-label">
                  <span className="btn-text-reveal" data-text="Book Scope Call">Book Scope Call</span>
                </span>
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Work;
