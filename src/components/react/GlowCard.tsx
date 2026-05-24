import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
  as?: 'div';
}

export const GlowCard: React.FC<GlowCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group p-8 rounded-2xl transition-shadow duration-300 ${className}`}
      style={{
        background: 'rgba(17, 26, 46, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(56, 189, 248, 0.12)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.08), transparent 70%)',
        }}
      />

      <div className="relative z-10">
        {icon && (
          <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--color-accent)' }}>
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
          {title}
        </h3>
        <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
      />
    </motion.div>
  );
};

export default GlowCard;
