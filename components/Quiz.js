'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQs } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [pickedIdx, setPickedIdx] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const { recordAttempt, markDone, setFinalQuizScore } = useProgress();

  const q = quizQs[index];

  function answer(i) {
    if (pickedIdx !== null) return;
    setPickedIdx(i);
    const correct = i === q.correct;
    if (correct) setCorrectCount((c) => c + 1);
    recordAttempt(correct);
  }

  function next() {
    if (index + 1 >= quizQs.length) {
      markDone('quiz');
      setFinalQuizScore(correctCount);
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setPickedIdx(null);
  }

  function retake() {
    setIndex(0);
    setPickedIdx(null);
    setCorrectCount(0);
    setFinished(false);
  }

  const pct = Math.round((100 * correctCount) / quizQs.length);

  return (
    <section id="quiz" className="wrap">
      <SectionHeader
        num="Module 06 · Knowledge Quiz"
        title="Twelve questions. Lock in what you've learned."
        description="Instant feedback after every answer, with your accuracy tracked live."
      />
      <Reveal>
        <div className="panel p-[34px] max-w-[760px] mx-auto">
          {finished ? (
            <div className="text-center">
              <span className={`stamp ${pct >= 70 ? 'real' : 'fake'}`}>
                {pct >= 70 ? '✓ Passed' : 'Keep practicing'}
              </span>
              <h2 className="mt-[18px] mb-1.5 text-2xl">
                {correctCount} / {quizQs.length} correct
              </h2>
              <p className="text-[var(--muted)]">Accuracy: {pct}%</p>
              <button className="btn btn-ghost mt-5" onClick={retake}>
                Retake quiz
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-5 text-[13px] text-[var(--muted)] font-mono-b">
                <span>
                  Question {index + 1} of {quizQs.length}
                </span>
                <span>{correctCount} correct so far</span>
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
                {q.opts.map((opt, i) => {
                  let style = {};
                  if (pickedIdx !== null) {
                    if (i === q.correct) style = { background: 'var(--good-soft)', borderColor: 'var(--good)' };
                    else if (i === pickedIdx) style = { background: 'var(--bad-soft)', borderColor: 'var(--bad)' };
                  }
                  return (
                    <button
                      key={opt}
                      className="text-left px-[18px] py-[15px] rounded-xl border border-[var(--panel-border)] bg-[rgba(255,255,255,0.03)] text-[var(--text)] text-[14.5px] disabled:cursor-default"
                      style={style}
                      onClick={() => answer(i)}
                      disabled={pickedIdx !== null}
                    >
                      {opt}
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
                    {q.explain}
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
                    {index === quizQs.length - 1 ? 'See results' : 'Next question'} →
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
