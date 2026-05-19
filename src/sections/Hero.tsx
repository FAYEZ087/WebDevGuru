import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import RevealText from '../components/RevealText';
import ContactForm from '../components/ContactForm';
import { useModal } from '../context/ModalContext';
import { track } from '../utils/analytics';
import './Hero.css';

const Hero = () => {
  const { openModal } = useModal();
  const { scrollY } = useScroll();
  
  // Parallax offsets
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero">
      <motion.div style={{ y: yText, opacity }} className="hero-content">
        <motion.span 
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Elite Digital Engineering
        </motion.span>
        
        <RevealText 
          text={"We Engineer\nWebsites That\nClose."}
          className="hero-title"
          delay={0.6}
          tag="h1"
        />
        
        <RevealText 
          text={"Bespoke digital storefronts for D2C brands and SaaS companies\nthat need more than a pretty site."}
          className="hero-description"
          delay={1}
          tag="p"
        />
        
        <motion.div 
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <MagneticButton dataCursor="Book">
              <button 
                onClick={() => {
                  track('hero_cta_clicked', { cta: 'primary' });
                  openModal(<ContactForm />);
                }} 
                className="cta-primary sheen"
              >
              <span className="btn-label">
                <span className="btn-text-reveal" data-text="Book Scope Call">Book Scope Call</span>
              </span>
            </button>
          </MagneticButton>

          <MagneticButton dataCursor="Work">
            <a 
              href="/#work" 
              className="cta-secondary sheen"
              onClick={() => track('hero_cta_clicked', { cta: 'secondary' })}
            >
              <span className="btn-label">
                <span className="btn-text-reveal" data-text="See Our Work">See Our Work</span>
              </span>
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <div className="hero-stats">
        <div className="stats-track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="stats-group">
              <span className="stat-item">48 Projects Delivered</span>
              <span className="stat-dot"></span>
              <span className="stat-item">₹10Lac+ Revenue Generated</span>
              <span className="stat-dot"></span>
              <span className="stat-item">94% Client Retention</span>
              <span className="stat-dot"></span>
              <span className="stat-item">Avg 4.2x ROI</span>
              <span className="stat-dot"></span>
              <span className="stat-item">Top 10 Web Design Agency</span>
              <span className="stat-dot"></span>
              <span className="stat-item">97% Happy Clients</span>
              <span className="stat-dot"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
