import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,14,26,0.92)] via-[rgba(9,14,26,0.82)] to-[rgba(9,14,26,0.97)]" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-[15%] w-64 h-64 rounded-full blur-[80px] opacity-20 z-[1]"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'var(--color-accent)' }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full blur-[100px] opacity-15 z-[1]"
        animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'var(--color-accent-secondary)' }}
      />

      <motion.div
        className="relative z-10 page-container text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        {subtitle && (
          <motion.p
            variants={itemVariants}
            className="inline-block text-sm md:text-base font-semibold mb-6 uppercase tracking-[0.2em] px-4 py-2 rounded-full border"
            style={{
              color: 'var(--color-accent)',
              borderColor: 'rgba(56, 189, 248, 0.25)',
              background: 'rgba(56, 189, 248, 0.08)',
            }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
          style={{ color: 'var(--color-text)' }}
        >
          {title.split(' ').map((word, i) =>
            i === title.split(' ').length - 1 ? (
              <span key={i}>
                {' '}
                <span style={{ color: 'var(--color-accent)' }}>{word}</span>
              </span>
            ) : i === 0 ? (
              <span key={i}>{word}</span>
            ) : (
              <span key={i}> {word}</span>
            )
          )}
        </motion.h1>

        {description && (
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {description}
          </motion.p>
        )}

        {ctaText && (
          <motion.div variants={itemVariants}>
            <motion.a
              href={ctaLink || '#'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))',
                boxShadow: '0 4px 24px var(--color-accent-glow)',
              }}
            >
              {ctaText}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10" />
    </section>
  );
};

export default ParallaxHero;
