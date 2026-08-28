'use client';

import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const ProgressContext = createContext(null);

const initialModules = {
  pretest: false,
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
  const [pretestScore, setPretestScoreState] = useState(null);
  const [finalScore, setFinalScore] = useState(null);
  const [showPostTest, setShowPostTest] = useState(false);
  const [postTestDone, setPostTestDone] = useState(false);

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

  const setPretestScore = useCallback((score) => {
    setPretestScoreState(score);
  }, []);

  const setFinalChallengeScore = useCallback((score) => {
    setFinalScore(score);
  }, []);

  const markLearningsComplete = useCallback(() => {
    setShowPostTest(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const markAllComplete = useCallback(() => {
    setPostTestDone(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    pretestScore,
    setPretestScore,
    finalScore,
    setFinalChallengeScore,
    doneCount,
    showPostTest,
    markLearningsComplete,
    postTestDone,
    markAllComplete,
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