import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  delay?: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, bio, delay = 0 }) => {
  return (
    <motion.div
      className="p-8 rounded-2xl text-center"
      style={{
        background: 'rgba(17, 26, 46, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(56, 189, 248, 0.1)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <div
        className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(129, 140, 248, 0.15))' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{name}</h3>
      <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-accent)' }}>{role}</p>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
