import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import ContactForm from '../../components/ContactForm';
import MagneticButton from '../../components/MagneticButton';
import SEO from '../../components/SEO';
import { useSEO } from '../../hooks/useSEO';
import './NotFound.css';

const NotFound = () => {
  const { openModal } = useModal();
  const seoProps = useSEO({
    title: "Page Not Found — WebDevGuru",
    description: "The page you're looking for doesn't exist.",
    noindex: true
  });

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="not-found-page"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <SEO {...seoProps} />
      <div className="not-found-watermark">404</div>
      
      <div className="not-found-content">
        <motion.span className="label-mono gold" variants={itemVariants}>
          ERROR · PAGE NOT FOUND
        </motion.span>
        
        <motion.h1 className="not-found-headline" variants={itemVariants}>
          You've wandered off the blueprint.
        </motion.h1>
        
        <motion.p className="not-found-subtext" variants={itemVariants}>
          The page you're looking for doesn't exist — but a ₹35,000 website might.
        </motion.p>
        
        <motion.div className="not-found-ctas" variants={itemVariants}>
          <MagneticButton dataCursor="Home">
            <Link to="/" className="cta-primary sheen">
              <span className="btn-label">
                <span className="btn-text-reveal" data-text="Back to Home">Back to Home</span>
              </span>
            </Link>
          </MagneticButton>

          <MagneticButton dataCursor="Book">
            <button 
              onClick={() => openModal(<ContactForm />)} 
              className="cta-secondary sheen"
            >
              <span className="btn-label">
                <span className="btn-text-reveal" data-text="Book Scope Call">Book Scope Call</span>
              </span>
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
