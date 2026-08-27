'use client';

import { ProgressProvider } from './ProgressContext';
import BackgroundField from './BackgroundField';
import Nav from './Nav';
import Hero from './Hero';
import PreTest from './PreTest';
import Intro from './Intro';
import SourceLab from './SourceLab';
import FakeNewsDetective from './FakeNewsDetective';
import ClickbaitChallenge from './ClickbaitChallenge';
import ImageInvestigation from './ImageInvestigation';
import ScenarioSimulator from './ScenarioSimulator';
import Quiz from './Quiz';
import FinalChallenge from './FinalChallenge';
import Footer from './Footer';
import SequentialGate from './SequentialGate';
import LearningsComplete from './LearningsComplete';

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
        <Intro />
        <SourceLab />
        <FakeNewsDetective />
        <ClickbaitChallenge />
        <ImageInvestigation />
        <ScenarioSimulator />
        <LearningsComplete />
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