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
      className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl"
      style={{
        background: 'rgba(17, 26, 46, 0.5)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(56, 189, 248, 0.08)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
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
