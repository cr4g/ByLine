'use client';

import { ProgressProvider } from '../components/ProgressContext';
import BackgroundField from '../components/BackgroundField';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SourceLab from '../components/SourceLab';
import FakeNewsDetective from '../components/FakeNewsDetective';
import ClickbaitChallenge from '../components/ClickbaitChallenge';
import ImageInvestigation from '../components/ImageInvestigation';
import ScenarioSimulator from '../components/ScenarioSimulator';
import Quiz from '../components/Quiz';
import Dashboard from '../components/Dashboard';
import FinalChallenge from '../components/FinalChallenge';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ProgressProvider>
      <BackgroundField />
      <Nav />
      <Hero />
      <SourceLab />
      <FakeNewsDetective />
      <ClickbaitChallenge />
      <ImageInvestigation />
      <ScenarioSimulator />
      <Quiz />
      <Dashboard />
      <FinalChallenge />
      <Footer />
    </ProgressProvider>
  );
}
