'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sites } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

function SiteCard({ site, index, onAnswered }) {
  const [picked, setPicked] = useState(null); // 'credible' | 'not'
  const { recordAttempt } = useProgress();

  function judge(guessCredible) {
    if (picked) return;
    const correct = guessCredible === site.credible;
    setPicked(guessCredible ? 'credible' : 'not');
    recordAttempt(correct);
    onAnswered();
  }

  return (
    <Reveal delay={(index % 3) * 0.05}>
      <motion.div whileHover={{ y: -4 }} className="panel p-[22px] h-full">
        <div className="font-mono-b text-[13.5px] text-[var(--cyan)] mb-3 break-all">{site.url}</div>
        <div className="text-[15.5px] font-semibold mb-2 leading-snug">{site.headline}</div>
        <div className="text-[12.5px] text-[var(--muted)] mb-4">{site.byline}</div>
        <div className="flex gap-2.5">
          <button
            className={`chip-btn ${picked && site.credible === true && picked === 'credible' ? 'picked-good' : ''} ${picked === 'credible' && !site.credible ? 'picked-bad' : ''}`}
            disabled={!!picked}
            onClick={() => judge(true)}
          >
            Credible
          </button>
          <button
            className={`chip-btn ${picked === 'not' && !site.credible ? 'picked-good' : ''} ${picked === 'not' && site.credible ? 'picked-bad' : ''}`}
            disabled={!!picked}
            onClick={() => judge(false)}
          >
            Not credible
          </button>
        </div>
        <AnimatePresence>
          {picked && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3.5 p-3.5 rounded-xl text-[13.5px] leading-relaxed"
              style={{
                background: site.credible ? 'var(--good-soft)' : 'var(--bad-soft)',
                border: `1px solid ${site.credible ? 'rgba(52,211,153,0.4)' : 'rgba(251,113,133,0.4)'}`,
              }}
            >
              <span className={`stamp ${site.credible ? 'real' : 'fake'}`}>
                {site.credible ? '✓ Credible' : '✕ Not credible'}
              </span>
              <br />
              <br />
              {site.explain}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Reveal>
  );
}

export default function SourceLab() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const { markDone } = useProgress();

  function onAnswered() {
    setAnsweredCount((c) => {
      const next = c + 1;
      if (next === sites.length) markDone('lab');
      return next;
    });
  }

  return (
    <section id="lab" className="wrap">
      <SectionHeader
        num="Module 01 · Source Verification Lab"
        title="Click a source. Judge its credibility."
        description="Six sites covering the same Philippine news story. Look at the domain, the byline, the tone — then decide if you'd trust it, and see what actually mattered."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5" style={{ gap: '18px' }}>
        {sites.map((site, i) => (
          <SiteCard key={site.url} site={site} index={i} onAnswered={onAnswered} />
        ))}
      </div>
    </section>
  );
}
