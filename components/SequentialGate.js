'use client';

import { useProgress } from './ProgressContext';

export default function SequentialGate({ phase, children }) {
  const { modules, showPostTest, postTestDone } = useProgress();
  
  if (phase === 'pretest') {
    if (modules.pretest) return null;
    return <>{children}</>;
  }
  
  if (phase === 'learning') {
    if (!modules.pretest) return null;
    if (showPostTest) return null;
    return <>{children}</>;
  }
  
  if (phase === 'posttest') {
    if (!showPostTest) return null;
    if (postTestDone) return null;
    return <>{children}</>;
  }
  
  if (phase === 'complete') {
    if (!postTestDone) return null;
    return <>{children}</>;
  }
  
  return null;
}