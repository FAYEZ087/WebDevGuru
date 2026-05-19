import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  dataCursor?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', dataCursor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Pull factor (0.2 = 20% movement)
    const pullX = (clientX - centerX) * 0.2;
    const pullY = (clientY - centerY) * 0.2;
    
    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-wrapper ${className}`}
      style={{ 
        display: 'inline-flex', 
        position: 'relative', 
        cursor: 'pointer',
        padding: '15px', // Creates a generous invisible hit area
        margin: '-15px'  // Offsets the padding so layout doesn't change
      }}
    >
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        className={isHovered ? 'hovered' : ''} 
        data-cursor={dataCursor}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MagneticButton;
