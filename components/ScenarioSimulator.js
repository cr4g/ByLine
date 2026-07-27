'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarios } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

export default function ScenarioSimulator() {
  const [index, setIndex] = useState(0);
  const [pickedIdx, setPickedIdx] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { recordAttempt, markDone } = useProgress();

  const s = scenarios[index];

  function pick(i) {
    if (pickedIdx !== null) return;
    setPickedIdx(i);
    const opt = s.options[i];
    recordAttempt(opt.good);
    if (opt.good) setScore((sc) => sc + 1);
  }

  function next() {
    if (index + 1 >= scenarios.length) {
      markDone('scenarios');
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setPickedIdx(null);
  }

  return (
    <section id="scenarios" className="wrap">
      <SectionHeader
        num="Module 05 · Scenario Simulator"
        title="Your Facebook feed. Your call."
        description="Realistic Filipino Facebook posts, real decisions: share, verify, or scroll past. Every choice has a consequence."
      />
      <Reveal>
        <div className="panel grid md:grid-cols-[1.1fr_0.9fr] grid-cols-1 overflow-hidden">
          {finished ? (
            <div className="p-[50px] text-center col-span-full">
              <span className="stamp real" style={{ transform: 'rotate(-3deg)' }}>
                Scenarios complete
              </span>
              <h3 className="mt-[18px] mb-2 text-xl">
                You made the right call on {score}/{scenarios.length}
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Good instincts come from pausing before you share — that pause is the whole skill.
              </p>
            </div>
          ) : (
            <>
              <div className="p-[30px] border-b md:border-b-0 md:border-r border-[var(--panel-border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-[42px] h-[42px] rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,var(--violet),var(--cyan))' }}
                  />
                  <div>
                    <div className="font-semibold text-[14.5px]">{s.who}</div>
                    <div className="text-[12.5px] text-[var(--muted)]">{s.handle}</div>
                  </div>
                </div>
                <div className="text-[15px] leading-relaxed mb-4">{s.body}</div>
                <div className="flex gap-4.5 text-[12.5px] text-[var(--muted)] font-mono-b flex-wrap" style={{ gap: '18px' }}>
                  {s.stats.map((st) => (
                    <span key={st}>{st}</span>
                  ))}
                </div>
              </div>
              <div className="p-[30px]">
                <div className="font-semibold mb-[18px] text-[15px]">{s.question}</div>
                <div>
                  {s.options.map((opt, i) => (
                    <button
                      key={opt.text}
                      className="block w-full text-left px-4 py-3.5 rounded-xl border border-[var(--panel-border)] bg-[rgba(255,255,255,0.03)] text-[var(--text)] mb-2.5 text-sm disabled:cursor-default"
                      onClick={() => pick(i)}
                      disabled={pickedIdx !== null}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
                <AnimatePresence>
                  {pickedIdx !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-xl text-[13.5px] leading-relaxed"
                      style={{
                        background: s.options[pickedIdx].good ? 'var(--good-soft)' : 'var(--bad-soft)',
                        border: `1px solid ${s.options[pickedIdx].good ? 'rgba(52,211,153,0.4)' : 'rgba(251,113,133,0.4)'}`,
                      }}
                    >
                      {s.options[pickedIdx].feedback}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex justify-between items-center mt-[22px]">
                  <div className="flex gap-1.5">
                    {scenarios.map((_, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: i < index ? 'var(--good)' : i === index ? 'var(--cyan)' : 'rgba(255,255,255,0.15)',
                        }}
                      />
                    ))}
                  </div>
                  {pickedIdx !== null && (
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="btn btn-primary text-[13px] px-5 py-2.5"
                      onClick={next}
                    >
                      Next →
                    </motion.button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
