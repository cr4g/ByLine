'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { articles } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

function ArticleCard({ article, index, onAnswered }) {
  const [picked, setPicked] = useState(null); // 'real' | 'fake'
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
      <div className="panel p-6 flex flex-col gap-3.5">
        <div className="font-mono-b text-xs text-[var(--muted)]">{article.source}</div>
        <h4 className="m-0 text-[19px] leading-snug">{article.headline}</h4>
        <div className="text-sm text-[var(--muted)] leading-relaxed">{article.body}</div>
        <div className="flex gap-2.5">
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
              className="rounded-xl p-3.5 text-[13.5px] leading-relaxed"
              style={{ background: 'rgba(245,185,66,0.1)', border: '1px solid rgba(245,185,66,0.4)' }}
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
    <section id="detective" className="wrap">
      <SectionHeader
        num="Module 02 · Fake News Detective"
        title="Real story, or fabricated?"
        description="Read each snippet and make the call before you look at the evidence."
      />
      <div className="flex flex-col gap-4">
        {articles.map((a, i) => (
          <ArticleCard key={a.headline} article={a} index={i} onAnswered={onAnswered} />
        ))}
      </div>
    </section>
  );
}
