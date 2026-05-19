import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LiquidTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        prevPath.current = location.pathname;
      }, 1600); // Total animation time
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 20000,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: [0, 1, 1, 0],
                originX: [0, 0, 1, 1]
              }}
              transition={{
                duration: 1.6,
                times: [0, 0.4, 0.6, 1],
                delay: i * 0.05,
                ease: [0.76, 0, 0.24, 1]
              }}
              style={{
                flex: 1,
                backgroundColor: 'var(--gold)',
                width: '100%',
                opacity: 0.8 + (i * 0.04)
              }}
            />
          ))}
          
          {/* Logo overlay during transition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.3, 0.7, 1],
              delay: 0.2,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'var(--bg)',
              fontSize: '24px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              zIndex: 20001
            }}
          >
            WEBDEVGURU
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LiquidTransition;
