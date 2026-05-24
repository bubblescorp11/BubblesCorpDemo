import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

interface AnimatedStatsProps {
  stats: StatItem[];
}

const Counter: React.FC<{ value: number; suffix?: string; shouldCount: boolean }> = ({ value, suffix = '', shouldCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldCount) return;

    let current = 0;
    const increment = value / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [value, shouldCount]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const AnimatedStats: React.FC<AnimatedStatsProps> = ({ stats }) => {
  const [hasViewed, setHasViewed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasViewed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card"
            style={{ textAlign: 'center' }}
          >
            <div style={{ color: 'var(--color-accent)', fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {hasViewed ? <Counter value={stat.value} suffix={stat.suffix} shouldCount={hasViewed} /> : '0'}
            </div>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)' }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
