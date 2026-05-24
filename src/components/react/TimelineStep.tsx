import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
  delay?: number;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  title,
  description,
  isLast = false,
  delay = 0,
}) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))',
            color: '#fff',
            boxShadow: '0 4px 16px var(--color-accent-glow)',
          }}
        >
          {step}
        </div>
        {!isLast && (
          <motion.div
            className="w-0.5 mt-2 mb-2"
            style={{ background: 'var(--color-accent)', opacity: 0.3, height: '40px' }}
            initial={{ height: 0 }}
            whileInView={{ height: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        )}
      </div>
      <div className="pb-10">
        <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text)' }}>{title}</h4>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
