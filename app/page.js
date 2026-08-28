'use client';

import { ProgressProvider } from '../components/ProgressContext';
import BackgroundField from '../components/BackgroundField';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import PreTest from '../components/PreTest';
import LearningPages from '../components/LearningPages';
import SourceLab from '../components/SourceLab';
import FakeNewsDetective from '../components/FakeNewsDetective';
import ClickbaitChallenge from '../components/ClickbaitChallenge';
import ImageInvestigation from '../components/ImageInvestigation';
import ScenarioSimulator from '../components/ScenarioSimulator';
import Quiz from '../components/Quiz';
import FinalChallenge from '../components/FinalChallenge';
import CompletionScreen from '../components/CompletionScreen';
import Footer from '../components/Footer';
import SequentialGate from '../components/SequentialGate';

export default function Home() {
  return (
    <ProgressProvider>
      <BackgroundField />
      <Nav />
      
      {/* Phase 1: Pre-Test (only shown before pretest is done) */}
      <SequentialGate phase="pretest">
        <Hero />
        <PreTest />
      </SequentialGate>
      
      {/* Phase 2: Learnings (only visible after pretest done) */}
      <SequentialGate phase="learning">
        <LearningPages />
      </SequentialGate>
      
      {/* Phase 3: Post-Test (includes all activities) */}
      <SequentialGate phase="posttest">
        <SourceLab />
        <FakeNewsDetective />
        <ClickbaitChallenge />
        <ImageInvestigation />
        <ScenarioSimulator />
        <Quiz />
        <FinalChallenge />
      </SequentialGate>
      
      {/* Phase 4: Completion Screen (shown after post-test is done) */}
      <SequentialGate phase="complete">
        <CompletionScreen />
      </SequentialGate>
      
      <Footer />
    </ProgressProvider>
  );
}