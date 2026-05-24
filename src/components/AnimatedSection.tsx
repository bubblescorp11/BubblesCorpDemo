import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'glass' | 'gradient';
  [key: string]: unknown;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  variant = 'default',
  ...motionProps
}) => {
  const variantClasses = {
    default: 'section',
    glass: 'section glass-section',
    gradient: 'section',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {},
    glass: {},
    gradient: {
      background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(6, 182, 212, 0.1))',
    },
  };

  return (
    <motion.section
      className={`${variantClasses[variant]} ${className}`}
      style={variantStyles[variant]}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
