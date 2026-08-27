'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articles } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

function ArticleCard({ article, index, onAnswered }) {
  const [picked, setPicked] = useState(null);
  const { recordAttempt } = useProgress();

  function judge(guessReal) {
    if (picked) return;
    const correct = guessReal === article.real;
    setPicked(guessReal ? 'real' : 'fake');
    recordAttempt(correct);
    onAnswered();
  }

  return (
    <Reveal delay={index * 0.04}>
      <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div className="font-mono-b text-xs text-[var(--muted)]">{article.source}</div>
        <h4 style={{ margin: '0', fontSize: '19px', lineHeight: 1.4 }}>{article.headline}</h4>
        <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>{article.body}</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className={`chip-btn ${picked === 'real' && article.real ? 'picked-good' : ''} ${picked === 'real' && !article.real ? 'picked-bad' : ''}`}
            disabled={!!picked}
            onClick={() => judge(true)}
          >
            Real
          </button>
          <button
            className={`chip-btn ${picked === 'fake' && !article.real ? 'picked-good' : ''} ${picked === 'fake' && article.real ? 'picked-bad' : ''}`}
            disabled={!!picked}
            onClick={() => judge(false)}
          >
            Fake
          </button>
        </div>
        <AnimatePresence>
          {picked && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl"
              style={{
                padding: '14px',
                fontSize: '13.5px',
                lineHeight: 1.6,
                background: 'rgba(245,185,66,0.1)',
                border: '1px solid rgba(245,185,66,0.4)',
              }}
            >
              <b style={{ color: 'var(--amber)' }}>Clues:</b> {article.clues}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function FakeNewsDetective() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const { markDone } = useProgress();

  function onAnswered() {
    setAnsweredCount((c) => {
      const next = c + 1;
      if (next === articles.length) markDone('detective');
      return next;
    });
  }

  return (
    <section id="detective" className="wrap" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <SectionHeader
        num="Fake News Detective"
        title="Real story, or fabricated?"
        description="Read each snippet and make the call before you look at the evidence."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {articles.map((a, i) => (
          <ArticleCard key={a.headline} article={a} index={i} onAnswered={onAnswered} />
        ))}
      </div>
    </section>
  );
}