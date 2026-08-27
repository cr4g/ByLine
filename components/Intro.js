'use client';

import { motion } from 'framer-motion';
import { fakeNewsDefinition, fakeNewsTypes } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';

export default function Intro() {
  return (
    <section id="intro" className="wrap" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <SectionHeader
        num="Introduction"
        title="What actually is “fake news”?"
        description="Before the labs, a quick grounding in the terms and the shapes fake news usually takes."
      />

      <Reveal>
        <div className="panel" style={{ padding: '30px', maxWidth: '860px', margin: '0 auto 40px' }}>
          <div className="sec-num" style={{ marginBottom: '12px' }}>1.1 Definition of Fake News</div>
          <p className="text-[15.5px] text-[var(--muted)] leading-relaxed mb-4">
            {fakeNewsDefinition.intro}
          </p>
          <p className="text-[16px] leading-relaxed m-0">
            <strong>{fakeNewsDefinition.definition}</strong>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div style={{ maxWidth: '860px', margin: '0 auto 28px' }}>
          <div className="sec-num" style={{ marginBottom: '4px' }}>1.2 Common Types of Fake News</div>
          <p className="text-[15.5px] text-[var(--muted)] leading-relaxed m-0">
            Seven patterns to recognize — memorize the shape, not just the examples.
          </p>
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
        {fakeNewsTypes.map((t, i) => (
          <motion.div
            key={t.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -5 }}
            className="panel"
            style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '19px',
                  background: 'var(--violet-soft)',
                }}
              >
                {t.icon}
              </span>
              <span className="font-mono-b text-[11px] text-[var(--muted)] tracking-[0.1em]">
                {t.num}/07
              </span>
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px', fontWeight: 600, margin: '0' }}>{t.title}</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6, margin: '0' }}>{t.body}</p>
            <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--panel-border)', fontSize: '12.5px', lineHeight: 1.6, fontStyle: 'italic' }}>
              {t.example}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}