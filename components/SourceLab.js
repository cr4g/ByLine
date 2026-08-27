'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sites } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

function SiteCard({ site, index, onAnswered }) {
  const [picked, setPicked] = useState(null);
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
      <motion.div whileHover={{ y: -4 }} className="panel" style={{ padding: '22px', height: '100%' }}>
        <div className="font-mono-b text-[13.5px] text-[var(--cyan)] mb-3 break-all">{site.url}</div>
        <div style={{ fontSize: '15.5px', fontWeight: 600, marginBottom: '8px', lineHeight: 1.4 }}>{site.headline}</div>
        <div style={{ fontSize: '12.5px', color: 'var(--muted)', marginBottom: '16px' }}>{site.byline}</div>
        <div style={{ display: 'flex', gap: '10px' }}>
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
              className="mt-3.5"
              style={{
                marginTop: '14px',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '13.5px',
                lineHeight: 1.6,
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
    <section id="lab" className="wrap" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <SectionHeader
        num="Source Verification Lab"
        title="Click a source. Judge its credibility."
        description="Six sites covering the same Philippine news story. Look at the domain, the byline, the tone — then decide if you'd trust it, and see what actually mattered."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '18px' }}>
        {sites.map((site, i) => (
          <SiteCard key={site.url} site={site} index={i} onAnswered={onAnswered} />
        ))}
      </div>
    </section>
  );
}