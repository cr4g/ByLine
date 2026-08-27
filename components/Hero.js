'use client';

import { motion } from 'framer-motion';
import { useProgress } from './ProgressContext';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const { modules, showPostTest } = useProgress();

  const ctaText = !modules.pretest 
    ? 'Start Pre-Test →'
    : showPostTest 
      ? 'Take Post-Test →'
      : 'Continue Learning →';

  const ctaTarget = !modules.pretest 
    ? 'pretest'
    : showPostTest 
      ? 'quiz'
      : 'intro';

  return (
    <section className="wrap hero-section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono-b text-[12.5px] tracking-[0.14em] uppercase text-[var(--cyan)] flex items-center gap-3 hero-badge"
      >
        <span className="w-[22px] h-px bg-[var(--cyan)]" />
        Media Literacy Field Training · Pilipinas Edition
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-bold text-[clamp(38px,6vw,72px)] leading-[1.08] hero-title max-w-[820px]"
      >
        Anyone can post.
        <br />
        Learn to tell what&apos;s{' '}
        <span
          style={{
            background: 'linear-gradient(120deg,var(--violet),var(--cyan))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          actually true.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-[18px] text-[var(--muted)] max-w-[560px] leading-relaxed hero-desc"
      >
        Enhance your media literacy skills in just 30 minutes. Take a quick pre-test, 
        learn to spot fake news, and prove your skills with a post-test.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="hero-buttons"
      >
        <motion.button
          whileHover={{ y: -2, boxShadow: '0 14px 30px -6px rgba(124,92,252,0.7)' }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary"
          onClick={() => scrollToId(ctaTarget)}
        >
          {ctaText}
        </motion.button>
        {!modules.pretest && (
          <motion.button
            whileHover={{ background: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-ghost"
            onClick={() => scrollToId('pretest')}
          >
            View Pre-Test
          </motion.button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="hero-cards"
      >
        <motion.div
          whileHover={{ y: -6 }}
          className="panel p-[26px]"
          style={{ borderColor: 'rgba(52,211,153,0.35)' }}
        >
          <span className="font-mono-b text-[11px] text-[var(--muted)] uppercase tracking-[0.08em] block mb-3">
            Case 014
          </span>
          <span className="stamp real">✓ Verified</span>
          <h4 className="mt-4 mb-3 text-[16px] font-semibold font-body">
            &quot;PAGASA: Signal No. 2 raised over Bicol region as typhoon nears&quot;
          </h4>
          <p className="m-0 text-[13.5px] text-[var(--muted)] leading-relaxed">
            Named agency, dated bulletin, cross-published by ABS-CBN, GMA News, and PNA.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -6 }}
          className="panel p-[26px]"
          style={{ borderColor: 'rgba(251,113,133,0.35)' }}
        >
          <span className="font-mono-b text-[11px] text-[var(--muted)] uppercase tracking-[0.08em] block mb-3">
            Case 014
          </span>
          <span className="stamp fake">✕ Fabricated</span>
          <h4 className="mt-4 mb-3 text-[16px] font-semibold font-body">
            &quot;PAGASA &apos;hiding&apos; true typhoon strength, mga eksperto raw &apos;shocked&apos;&quot;
          </h4>
          <p className="m-0 text-[13.5px] text-[var(--muted)] leading-relaxed">
            No named source, scare quotes, zero linked bulletin — same story, rewritten to provoke.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}