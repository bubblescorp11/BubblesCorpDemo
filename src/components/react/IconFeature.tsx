import React from 'react';
import { motion } from 'framer-motion';

interface IconFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const IconFeature: React.FC<IconFeatureProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      className="flex gap-5 p-6 rounded-2xl items-start"
      style={{
        background: 'rgba(17, 26, 46, 0.5)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(56, 189, 248, 0.08)',
      }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ x: 4 }}
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--color-accent)' }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{description}</p>
      </div>
    </motion.div>
  );
};

export default IconFeature;
