import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export const AnimatedHeroSection: React.FC<AnimatedHeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-[10px] bg-gradient-to-br from-[rgba(15,23,42,0.8)] to-[rgba(30,58,138,0.8)]" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 container text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg font-semibold mb-4 uppercase tracking-wider"
          style={{ color: 'var(--color-accent)' }}
        >
          {subtitle}
        </motion.p>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        {ctaText && (
          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <motion.a
              href={ctaLink || '#'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button inline-block"
            >
              {ctaText}
            </motion.a>
          </motion.div>
        )}
      </motion.div>

      {/* Floating Accent Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-screen opacity-10 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-screen opacity-10 blur-3xl"
      />
    </section>
  );
};

export default AnimatedHeroSection;
