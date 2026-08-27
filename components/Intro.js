'use client';

import { motion } from 'framer-motion';
import { fakeNewsDefinition, fakeNewsTypes } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';

export default function Intro() {
  return (
    <section id="intro" className="wrap">
      <SectionHeader
        num="1. Introduction"
        title="What actually is “fake news”?"
        description="Before the labs, a quick grounding in the terms and the shapes fake news usually takes."
      />

      <Reveal>
        <div className="panel p-[30px] md:p-[38px] max-w-[860px] mx-auto mb-[46px]">
          <div className="sec-num" style={{ marginBottom: 12 }}>1.1 Definition of Fake News</div>
          <p className="text-[15.5px] text-[var(--muted)] leading-relaxed mb-4">
            {fakeNewsDefinition.intro}
          </p>
          <p className="text-[16px] leading-relaxed m-0">
            <strong>{fakeNewsDefinition.definition}</strong>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="max-w-[860px] mx-auto mb-7">
          <div className="sec-num" style={{ marginBottom: 4 }}>1.2 Common Types of Fake News</div>
          <p className="text-[15.5px] text-[var(--muted)] leading-relaxed m-0">
            Seven patterns to recognize — memorize the shape, not just the examples.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
        {fakeNewsTypes.map((t, i) => (
          <motion.div
            key={t.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -5 }}
            className="panel p-5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[19px]"
                style={{ background: 'var(--violet-soft)' }}
              >
                {t.icon}
              </span>
              <span className="font-mono-b text-[11px] text-[var(--muted)] tracking-[0.1em]">
                {t.num}/07
              </span>
            </div>
            <h3 className="font-display text-[17px] font-semibold m-0">{t.title}</h3>
            <p className="text-[13.5px] text-[var(--muted)] leading-relaxed m-0">{t.body}</p>
            <div className="mt-auto pt-3 border-t border-[var(--panel-border)] text-[12.5px] leading-relaxed italic text-[var(--text)]">
              {t.example}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
