'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { finalItems } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

const DURATION = 60;

function ConfettiCanvas({ trigger }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const colors = ['#7C5CFC', '#22D3EE', '#34D399', '#F5B942', '#FB7185'];
    const pieces = [];
    for (let i = 0; i < 160; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.3,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 10,
        rot: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const tweens = pieces.map((p) =>
      gsap.to(p, {
        y: canvas.height + 40,
        x: p.x + (-80 + Math.random() * 160),
        rot: p.rot + (-360 + Math.random() * 720),
        duration: 2.6 + Math.random() * 1.4,
        ease: 'power1.in',
      })
    );

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const cleanupTimer = setTimeout(() => {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 4200);

    return () => {
      tweens.forEach((t) => t.kill());
      cancelAnimationFrame(raf);
      clearTimeout(cleanupTimer);
    };
  }, [trigger]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[200]"
      aria-hidden="true"
    />
  );
}

export default function FinalChallenge() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(DURATION);
  const [ended, setEnded] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const intervalRef = useRef(null);
  const { recordAttempt, markAllComplete, setFinalChallengeScore } = useProgress();

  const endFinal = useCallback((finalScore) => {
    clearInterval(intervalRef.current);
    setEnded(true);
    const pct = Math.round((100 * finalScore) / finalItems.length);
    recordAttempt(true);
    setFinalChallengeScore(finalScore);
    if (pct >= 70) setConfettiTrigger((n) => n + 1);
    
    // If passed (70%+), mark all complete to show completion screen
    if (finalScore >= 6) {
      markAllComplete();
    }
  }, [recordAttempt, setFinalChallengeScore, markAllComplete]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  function start() {
    setStarted(true);
    setEnded(false);
    setIndex(0);
    setScore(0);
    setTimer(DURATION);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          setEnded(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  function answer(guessReal) {
    const item = finalItems[index];
    let finalScoreLocal = score;
    if (guessReal === item.real) {
      finalScoreLocal = score + 1;
      setScore(finalScoreLocal);
    }
    if (index + 1 >= finalItems.length) {
      endFinal(finalScoreLocal);
    } else {
      setIndex((i) => i + 1);
    }
  }

  useEffect(() => {
    if (started && timer === 0 && !ended) {
      endFinal(score);
    }
  }, [timer, started, ended, endFinal, score]);

  const pct = Math.round((100 * score) / finalItems.length);
  let rank = 'Trainee';
  if (pct >= 90) rank = 'Chief Fact-Checker';
  else if (pct >= 70) rank = 'Senior Correspondent';
  else if (pct >= 50) rank = 'Staff Writer';
  else rank = 'Intern Reporter';

  const item = finalItems[index];
  const passed = score >= 6; // 70% of 8 = 5.6, so 6 is passing

  return (
    <section id="final" className="wrap">
      <ConfettiCanvas trigger={confettiTrigger} />
      <SectionHeader
        num="Final Assessment · 60 Seconds"
        title="The Final Verification Test"
        description="Eight mixed cases — sources, headlines, and images. Rate each REAL or FAKE before the clock runs out."
      />
      <Reveal>
        <div className="panel p-[30px]">
          {!started && !ended && (
            <div className="text-center py-5">
              <button className="btn btn-primary" onClick={start}>
                Start 60-second test
              </button>
            </div>
          )}
          {started && !ended && (
            <>
              <div className="flex justify-between items-center mb-6">
                <div className="font-mono-b text-[13px] text-[var(--muted)]">
                  Item {index + 1} / {finalItems.length}
                </div>
                <div className="font-mono-b text-[22px] font-bold" style={{ color: 'var(--cyan)' }}>
                  {timer}s
                </div>
              </div>
              <div className="text-center py-5">
                <div className="font-mono-b text-xs text-[var(--muted)] uppercase tracking-[0.08em] mb-3.5">
                  {item.label}
                </div>
                <div className="text-[19px] font-semibold mb-[30px] max-w-[600px] mx-auto">{item.text}</div>
                <div className="flex gap-2.5 max-w-[340px] mx-auto">
                  <button className="chip-btn" onClick={() => answer(true)}>
                    Real
                  </button>
                  <button className="chip-btn" onClick={() => answer(false)}>
                    Fake
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Reveal>
      {ended && (
        <Reveal>
          <div className="panel text-center p-[50px_30px] mt-[22px]">
            <span className={`stamp ${pct >= 70 ? 'real' : 'fake'}`} style={{ fontSize: 15 }}>
              Final Score: {score}/{finalItems.length}
            </span>
            <div className="text-[34px] font-bold my-3.5 font-display">{rank}</div>
            <p className="text-[var(--muted)] max-w-[440px] mx-auto mb-6">
              You correctly identified {pct}% of cases within the time limit.{' '}
              {pct >= 70
                ? "Sharp eye — you're reading past the surface of a story."
                : 'You need to score at least 70% to pass. Review the strategies and try again.'}
            </p>
            {!passed && (
              <button className="btn btn-primary" onClick={start}>
                Try again (Need 70%+ to pass)
              </button>
            )}
          </div>
        </Reveal>
      )}
    </section>
  );
}