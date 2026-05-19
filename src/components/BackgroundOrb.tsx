import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import './BackgroundOrb.css';

const BackgroundOrb = () => {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // All hooks must be at the top level and called unconditionally
  const orb1X = useSpring(mouseX, { damping: 30, stiffness: 50 });
  const orb1Y = useSpring(mouseY, { damping: 30, stiffness: 50 });
  
  const orb2X = useSpring(mouseX, { damping: 40, stiffness: 40 });
  const orb2Y = useSpring(mouseY, { damping: 40, stiffness: 40 });
  
  const orb3X = useSpring(mouseX, { damping: 50, stiffness: 30 });
  const orb3Y = useSpring(mouseY, { damping: 50, stiffness: 30 });
  
  const orb4X = useSpring(mouseX, { damping: 60, stiffness: 20 });
  const orb4Y = useSpring(mouseY, { damping: 60, stiffness: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.1;
      const y = (e.clientY - window.innerHeight / 2) * 0.1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="background-orb-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <motion.div 
        className="floating-orb orb-1"
        style={{ x: orb1X, y: orb1Y }}
      />
      <motion.div 
        className="floating-orb orb-2"
        style={{ x: orb2X, y: orb2Y }}
      />
      
      {/* Conditionally render the JSX, but the hooks above are always called */}
      {theme === 'neon' && (
        <>
          <motion.div 
            className="floating-orb orb-neon-3"
            style={{ x: orb3X, y: orb3Y }}
          />
          <motion.div 
            className="floating-orb orb-neon-4"
            style={{ x: orb4X, y: orb4Y }}
          />
        </>
      )}
      
      <div className="ambient-glow" />
    </motion.div>
  );
};

export default BackgroundOrb;
