'use client';

import { motion } from 'framer-motion';

export default function BackgroundField() {
  return (
    <div className="field" aria-hidden="true">
      <motion.div
        className="orb orb1"
        animate={{ y: [0, 40, 0], x: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb2"
        animate={{ y: [0, 40, 0], x: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: -6 }}
      />
      <motion.div
        className="orb orb3"
        animate={{ y: [0, 40, 0], x: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: -11 }}
      />
    </div>
  );
}
