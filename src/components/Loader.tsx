import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import RevealText from './RevealText';
import './Loader.css';

const Loader = ({ onFinished }: { onFinished: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsReady(true), 500);
          setTimeout(onFinished, 2000);
          return 100;
        }
        // Varied speed for more "organic" feel
        const diff = Math.random() * 5;
        return Math.min(100, prev + diff);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div 
      className="loader-container"
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      <div className="loader-scanline" />
      
      <div className="loader-content">
        <div className="loader-brand-wrapper">
          <RevealText 
            text="WEBDEVGURU" 
            mode="char" 
            className="loader-brand" 
            delay={0.2}
          />
          <motion.div 
            className="loader-tagline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            PRECISION DIGITAL ENGINEERING
          </motion.div>
        </div>
        
        <div className="loader-progress-section">
          <div className="loader-bar-wrapper">
            <motion.div 
              className="loader-bar" 
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="loader-stats">
            <span className="label-mono">{Math.round(progress)}%</span>
            <span className="label-mono">INITIALIZING ASSETS</span>
          </div>
        </div>
      </div>
      
      <div className="loader-background">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="loader-panel"
            initial={{ scaleY: 1 }}
            exit={{ 
              scaleY: 0,
              transition: { 
                duration: 1, 
                delay: i * 0.05, 
                ease: [0.76, 0, 0.24, 1] 
              }
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {isReady && (
          <motion.div 
            className="loader-final-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="reveal-text">READY. LET'S DO SOME WORK!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Loader;
