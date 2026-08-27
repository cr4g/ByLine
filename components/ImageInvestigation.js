'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { imageSets } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

function CompareCard({ set, onHintRevealed }) {
  const [value, setValue] = useState(50);
  const [hintShown, setHintShown] = useState(false);
  const revealedRef = useRef(false);
  const { recordAttempt } = useProgress();

  function showHint() {
    setHintShown(true);
    if (!revealedRef.current) {
      revealedRef.current = true;
      recordAttempt(true);
      onHintRevealed?.();
    }
  }

  return (
    <div className="panel p-[22px]">
      <div className="relative w-full rounded-2xl overflow-hidden border border-[var(--panel-border)]" style={{ aspectRatio: '16/10' }}>
        <div className="absolute inset-0">
          <Image src={set.manipulated} alt={`${set.label} manipulated`} fill sizes="700px" style={{ objectFit: 'cover' }} />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <Image src={set.original} alt={`${set.label} original`} fill sizes="700px" style={{ objectFit: 'cover' }} />
        </div>
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none z-[4]"
          style={{ left: `${value}%`, transform: 'translateX(-1.5px)', boxShadow: '0 0 12px rgba(0,0,0,0.5)' }}
        />
        <span className="absolute top-3.5 left-3.5 font-mono-b text-[11px] uppercase tracking-[0.06em] px-2.5 py-1.5 rounded-md z-[6]" style={{ background: 'rgba(0,0,0,0.55)' }}>
          Original
        </span>
        <span className="absolute top-3.5 right-3.5 font-mono-b text-[11px] uppercase tracking-[0.06em] px-2.5 py-1.5 rounded-md z-[6]" style={{ background: 'rgba(0,0,0,0.55)' }}>
          Manipulated
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="compare-slider mt-3"
        aria-label={`Compare slider for ${set.label}`}
      />
      <div className="mt-[18px]">
        <button className="btn btn-ghost text-[13px] px-[18px] py-2.5" onClick={showHint}>
          Reveal hint
        </button>
        <AnimatePresence>
          {hintShown && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3.5 rounded-xl p-3.5 text-[13.5px] leading-relaxed"
              style={{ background: 'rgba(245,185,66,0.1)', border: '1px solid rgba(245,185,66,0.4)' }}
            >
              <b style={{ color: 'var(--amber)' }}>What gives it away:</b> {set.hint}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ImageInvestigation() {
  const [active, setActive] = useState(0);
  const [revealedSets, setRevealedSets] = useState(new Set());
  const [done, setDone] = useState(false);
  const { markDone } = useProgress();

  function handleHintRevealed(i) {
    setRevealedSets((prev) => {
      if (prev.has(i)) return prev;
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  }

  function finish() {
    markDone('images');
    setDone(true);
  }

  return (
    <section id="images" className="wrap">
      <SectionHeader
        num="Image Investigation"
        title="Drag to compare. Find the edit."
        description="Every 'original' has a manipulated twin. Slide to reveal the difference before reading the hint."
      />
      <div className="flex gap-2.5 mb-[22px] flex-wrap">
        {imageSets.map((set, i) => (
          <button
            key={set.key}
            className="px-4 py-2.5 rounded-full border text-[13px]"
            style={{
              borderColor: 'var(--panel-border)',
              background: active === i ? 'var(--violet)' : 'var(--panel)',
              color: active === i ? 'white' : 'var(--muted)',
            }}
            onClick={() => setActive(i)}
          >
            {set.label}
          </button>
        ))}
      </div>
      <Reveal>
        <CompareCard set={imageSets[active]} onHintRevealed={() => handleHintRevealed(active)} />
      </Reveal>
      <div className="text-center mt-[26px]">
        <motion.button
          whileHover={!done ? { y: -2 } : {}}
          whileTap={!done ? { scale: 0.97 } : {}}
          className="btn btn-primary"
          style={done ? { opacity: 0.7, cursor: 'default' } : {}}
          onClick={finish}
          disabled={done}
        >
          {done ? '✓ Module complete' : "✓ I've compared all three"}
        </motion.button>
      </div>
    </section>
  );
}
