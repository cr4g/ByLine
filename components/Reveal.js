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
    <div className="section-header" style={{ marginBottom: '50px', maxWidth: '640px' }}>
      <div className="sec-num" style={{ marginBottom: '12px' }}>{num}</div>
      <h2 style={{ 
        fontFamily: "'Space Grotesk', sans-serif", 
        fontWeight: 700, 
        fontSize: 'clamp(26px, 4vw, 38px)', 
        marginBottom: '12px',
        marginTop: '0'
      }}>{title}</h2>
      <p style={{ 
        color: 'var(--muted)', 
        fontSize: '15px', 
        lineHeight: 1.6, 
        margin: '0' 
      }}>{description}</p>
    </div>
  );
}