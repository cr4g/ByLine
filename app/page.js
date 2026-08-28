'use client';

import { ProgressProvider } from '../components/ProgressContext';
import BackgroundField from '../components/BackgroundField';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import PreTest from '../components/PreTest';
import LearningPages from '../components/LearningPages';
import Quiz from '../components/Quiz';
import FinalChallenge from '../components/FinalChallenge';
import Footer from '../components/Footer';
import SequentialGate from '../components/SequentialGate';

export default function Home() {
  return (
    <ProgressProvider>
      <BackgroundField />
      <Nav />
      
      {/* Phase 1: Pre-Test */}
      <Hero />
      <PreTest />
      
      {/* Phase 2: Learnings (only visible after pretest done) */}
      <SequentialGate phase="learning">
        <LearningPages />
      </SequentialGate>
      
      {/* Phase 3: Post-Test */}
      <SequentialGate phase="posttest">
        <Quiz />
        <FinalChallenge />
      </SequentialGate>
      
      <Footer />
    </ProgressProvider>
  );
}