'use client';

import { motion } from 'framer-motion';
import { useProgress } from './ProgressContext';

export default function SequentialGate({ phase, children }) {
  const { modules, showLearnings, showPostTest, markLearningsComplete, doneCount } = useProgress();
  
  if (phase === 'learning') {
    if (!modules.pretest) return null;
    if (showPostTest) return null;
    return <>{children}</>;
  }
  
  if (phase === 'posttest') {
    if (!showPostTest) return null;
    return <>{children}</>;
  }
  
  return null;
}