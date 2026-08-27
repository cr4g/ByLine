'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQs } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';
import { shuffleArray } from '../lib/shuffle';

export default function PreTest() {
  const [index, setIndex] = useState(0);
  const [pickedIdx, setPickedIdx] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const { markDone, setPretestScore } = useProgress();

  const q = quizQs[index];

  // Shuffle options after mount and when question changes
  useEffect(() => {
    if (q) {
      setShuffledOptions(shuffleArray(q.opts.map((opt, i) => ({ text: opt, originalIdx: i }))));
    }
  }, [index]);

  function answer(i) {
    if (pickedIdx !== null) return;
    setPickedIdx(i);
    
    // Check if the picked option is the correct one
    const selectedOpt = shuffledOptions[i];
    if (selectedOpt && selectedOpt.originalIdx === q.correct) {
      setCorrectCount((c) => c + 1);
    }
  }

  function next() {
    if (index + 1 >= quizQs.length) {
      markDone('pretest');
      setPretestScore(correctCount);
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setPickedIdx(null);
  }

  const pct = Math.round((100 * correctCount) / quizQs.length);

  return (
    <section id="pretest" className="wrap">
      <SectionHeader
        num="Before you start · Pre-Test"
        title="Let's see what you already know."
        description="Twelve quick questions, no explanations shown yet — this just sets your baseline. You'll take the same test again at the end so you can see how much you've learned."
      />
      <Reveal>
        <div className="panel p-[34px] max-w-[760px] mx-auto">
          {finished ? (
            <div className="text-center">
              <span className="stamp real">✓ Baseline recorded</span>
              <h2 className="mt-[18px] mb-1.5 text-2xl">
                {correctCount} / {quizQs.length} correct
              </h2>
              <p className="text-[var(--muted)] mb-0">
                Score: {pct}%. No worries if it's low — that's exactly what the lessons below are for. Scroll on
                to the Introduction to start building your media literacy skills.
              </p>
              <div className="mt-8">
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    const intro = document.getElementById('intro');
                    intro?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Learning ↓
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-5 text-[13px] text-[var(--muted)] font-mono-b">
                <span>
                  Question {index + 1} of {quizQs.length}
                </span>
                <span>Pre-Test</span>
              </div>
              <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden mb-[30px]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg,var(--violet),var(--cyan))' }}
                  animate={{ width: `${(index / quizQs.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="text-xl font-semibold mb-6 leading-snug">{q.q}</div>
              <div className="flex flex-col gap-3">
                {shuffledOptions.map((opt, i) => {
                  let style = {};
                  if (pickedIdx !== null) {
                    if (i === pickedIdx) {
                      style = opt.originalIdx === q.correct
                        ? { background: 'var(--good-soft)', borderColor: 'var(--good)' }
                        : { background: 'var(--bad-soft)', borderColor: 'var(--bad)' };
                    }
                  }
                  return (
                    <button
                      key={i}
                      className="text-left px-[18px] py-[15px] rounded-xl border border-[var(--panel-border)] bg-[rgba(255,255,255,0.03)] text-[var(--text)] text-[14.5px] disabled:cursor-default"
                      style={style}
                      onClick={() => answer(i)}
                      disabled={pickedIdx !== null}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {pickedIdx !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-[18px] p-4 rounded-xl bg-[rgba(255,255,255,0.04)] text-[13.5px] text-[var(--muted)] leading-relaxed"
                  >
                    Noted — you'll get the full explanation once you reach the Post-Test.
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-[22px] text-right">
                {pickedIdx !== null && (
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="btn btn-primary text-[13px] px-[22px] py-2.5"
                    onClick={next}
                  >
                    {index === quizQs.length - 1 ? 'See baseline' : 'Next question'} →
                  </motion.button>
                )}
              </div>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}