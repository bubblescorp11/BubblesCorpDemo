import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'glass' | 'gradient';
  id?: string;
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {},
  glass: {
    backdropFilter: 'blur(var(--glass-blur))',
    background: 'rgba(255, 255, 255, var(--glass-opacity-dark))',
    border: 'var(--glass-border-subtle)',
    borderRadius: 'var(--radius-xl)',
  },
  gradient: {
    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.04), rgba(129, 140, 248, 0.04))',
  },
};

export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  className = '',
  delay = 0,
  variant = 'default',
  id,
}) => {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      style={variantStyles[variant]}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="page-container">{children}</div>
    </motion.section>
  );
};

export default ScrollRevealSection;
