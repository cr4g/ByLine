'use client';

import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const ProgressContext = createContext(null);

const initialModules = {
  lab: false,
  detective: false,
  clickbait: false,
  images: false,
  scenarios: false,
  quiz: false,
};

export function ProgressProvider({ children }) {
  const [modules, setModules] = useState(initialModules);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [quizScore, setQuizScore] = useState(null);

  const markDone = useCallback((key) => {
    setModules((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  }, []);

  const recordAttempt = useCallback((correct) => {
    setTotalAttempts((n) => n + 1);
    if (correct) setTotalCorrect((n) => n + 1);
  }, []);

  const setFinalQuizScore = useCallback((score) => {
    setQuizScore(score);
  }, []);

  const doneCount = useMemo(
    () => Object.values(modules).filter(Boolean).length,
    [modules]
  );

  const accuracy = totalAttempts ? Math.round((100 * totalCorrect) / totalAttempts) : 0;

  const value = {
    modules,
    markDone,
    recordAttempt,
    totalCorrect,
    totalAttempts,
    accuracy,
    quizScore,
    setFinalQuizScore,
    doneCount,
  };

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
