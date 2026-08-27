'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { headlines } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

function HeadlineCard({ item, index }) {
  const [flagged, setFlagged] = useState(false);
  const { recordAttempt } = useProgress();

  function flag() {
    if (flagged) return;
    setFlagged(true);
    recordAttempt(item.bait);
  }

  const correct = flagged && item.bait;
  const wrong = flagged && !item.bait;

  return (
    <Reveal delay={index * 0.03}>
      <div className="panel px-[22px] py-5 flex items-center justify-between gap-4 flex-wrap">
        <h4 className="m-0 text-[17px] font-semibold max-w-[480px]">&quot;{item.text}&quot;</h4>
        <button
          className="rounded-full border border-[var(--panel-border)] px-[18px] py-2.5 text-[13px] font-semibold whitespace-nowrap"
          style={{
            background: correct ? 'var(--good-soft)' : wrong ? 'var(--bad-soft)' : 'rgba(255,255,255,0.04)',
            borderColor: correct ? 'var(--good)' : wrong ? 'var(--bad)' : undefined,
            color: 'var(--text)',
          }}
          onClick={flag}
          disabled={flagged}
        >
          {flagged ? (correct ? '✓ Correctly flagged' : '✕ Not actually clickbait') : '🚩 Flag as clickbait'}
        </button>
        <AnimatePresence>
          {flagged && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-[13.5px] text-[var(--muted)] pt-3 border-t border-[var(--panel-border)] leading-relaxed"
            >
              <b style={{ color: 'var(--cyan)' }}>{item.bait ? 'Technique used:' : "Why it's not bait:"}</b>{' '}
              {item.technique}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function ClickbaitChallenge() {
  const [done, setDone] = useState(false);
  const { markDone } = useProgress();

  function finish() {
    markDone('clickbait');
    setDone(true);
  }

  return (
    <section id="clickbait" className="wrap">
      <SectionHeader
        num="Clickbait Challenge"
        title="Spot the bait."
        description="Flag the headlines written to manipulate a click rather than inform you."
      />
      <div className="flex flex-col gap-4">
        {headlines.map((h, i) => (
          <HeadlineCard key={h.text} item={h} index={i} />
        ))}
      </div>
      <div className="text-center mt-[26px]">
        <motion.button
          whileHover={!done ? { y: -2 } : {}}
          whileTap={!done ? { scale: 0.97 } : {}}
          className="btn btn-primary"
          style={done ? { opacity: 0.7, cursor: 'default' } : {}}
          onClick={finish}
          disabled={done}
        >
          {done ? '✓ Module complete' : "✓ I've reviewed all headlines"}
        </motion.button>
      </div>
    </section>
  );
}
