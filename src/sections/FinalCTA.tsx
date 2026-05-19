import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import ContactForm from '../components/ContactForm';
import { useModal } from '../context/ModalContext';
import './FinalCTA.css';

const FinalCTA = () => {
  const { openModal } = useModal();

  return (
    <section id="contact" className="final-cta">
      <div className="cta-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-mono">Ready to Scale?</span>
          <h2 className="cta-headline">
            Let's Engineer Your <br />
            Next <span className="text-gold">Breakthrough.</span>
          </h2>
          <p className="cta-subtext">Secure your discovery call today.
          </p>
          
          <div className="cta-button-wrapper">
            <MagneticButton dataCursor="Book">
              <button 
                onClick={() => openModal(<ContactForm />)} 
                className="cta-button-main sheen"
              >
                <span className="btn-label">
                  <span className="btn-text-reveal" data-text="Book Your Scope Call">Book Your Scope Call</span>
                </span>
                <span className="btn-glow"></span>
              </button>
            </MagneticButton>
          </div>
        </motion.div>
        
        <div className="cta-background-elements">
          <div className="cta-glow-1"></div>
          <div className="cta-glow-2"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
