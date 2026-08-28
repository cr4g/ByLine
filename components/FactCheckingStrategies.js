'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader, Reveal } from './Reveal';

export default function FactCheckingStrategies() {
  return (
    <section id="strategies" className="wrap" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <SectionHeader
        num="Fact-Checking Strategies"
        title="How to verify what you see online."
        description="Here are some effective fact-checking strategies you can use to evaluate online information and avoid falling for fake news."
      />
      
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '0.5' }}>
            <Image
              src="/images/fact-checking-strategies.jpg"
              alt="Fact-Checking Strategies infographic showing 6 strategies: Verify the source, Check date and context, Beware of Sensational Headlines, Analyze Writing Style and URL, Check for Bias and Intent, and Analyze Visuals Critically"
              fill
              sizes="600px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}