'use client';

import { motion } from 'framer-motion';

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ num, title, description }) {
  return (
    <Reveal className="mb-[50px] max-w-[640px]">
      <div className="sec-num">{num}</div>
      <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] mb-3.5">{title}</h2>
      <p className="text-[var(--muted)] text-[16px] leading-relaxed m-0">{description}</p>
    </Reveal>
  );
}
