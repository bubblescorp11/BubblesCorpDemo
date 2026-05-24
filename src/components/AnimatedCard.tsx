import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: '0 12px 48px rgba(6, 182, 212, 0.3)' 
      }}
      style={{ cursor: 'pointer' }}
    >
      {icon && (
        <div
          style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}
        >
          {icon}
        </div>
      )}
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ lineHeight: '1.75', color: 'var(--color-text-secondary)' }}>{description}</p>
    </motion.div>
  );
};

export default AnimatedCard;
