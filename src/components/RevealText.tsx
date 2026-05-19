import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, type ElementType } from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  mode?: 'line' | 'word' | 'char';
  tag?: ElementType;
}

const RevealText = ({ 
  text, 
  className = '', 
  once = true, 
  delay = 0,
  mode = 'line',
  tag: Tag = 'div'
}: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mode === 'char' ? 0.02 : 0.1,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const renderContent = () => {
    if (mode === 'line') {
      return text.split('\n').map((line, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'block' }}>
          <motion.span variants={childVariants} style={{ display: 'block' }}>
            {line}
          </motion.span>
        </span>
      ));
    }

    if (mode === 'word') {
      return text.split(' ').map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.25em' }}>
          <motion.span variants={childVariants} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        </span>
      ));
    }

    if (mode === 'char') {
      return text.split('').map((char, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span variants={childVariants} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ));
    }
  };

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={className}
      style={{ 
        display: mode === 'line' ? 'block' : 'inline-block',
        overflow: 'hidden'
      }}
    >
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ display: mode === 'line' ? 'block' : 'inline-block' }}
      >
        {renderContent()}
      </motion.span>
    </Component>
  );
};

export default RevealText;
