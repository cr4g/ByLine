'use client';

import { motion } from 'framer-motion';
import { useProgress } from './ProgressContext';

export default function LearningsComplete() {
  const { modules, markLearningsComplete } = useProgress();
  
  const learningModules = [
    { key: 'lab', label: 'Source Verification Lab' },
    { key: 'detective', label: 'Fake News Detective' },
    { key: 'clickbait', label: 'Clickbait Challenge' },
    { key: 'images', label: 'Image Investigation' },
    { key: 'scenarios', label: 'Scenario Simulator' },
  ];
  
  const completedCount = learningModules.filter(m => modules[m.key]).length;
  const totalModules = learningModules.length;
  const allComplete = completedCount === totalModules;
  
  return (
    <section className="wrap py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="panel p-[40px] text-center max-w-[680px] mx-auto"
      >
        <span className={`stamp ${allComplete ? 'real' : 'fake'}`} style={{ transform: 'rotate(-3deg)' }}>
          {allComplete ? '✓ All sections complete' : `${completedCount}/${totalModules} sections complete`}
        </span>
        
        <h2 className="font-display font-bold text-[clamp(26px,4vw,38px)] mt-[20px] mb-4">
          {allComplete ? 'Ready for the Post-Test?' : 'Complete all sections first'}
        </h2>
        
        <p className="text-[var(--muted)] text-[16px] leading-relaxed mb-8 max-w-[520px] mx-auto">
          {allComplete 
            ? "You've completed all learning sections. Time to take the same 12-question test again and see how much you've improved."
            : `You still need to complete ${totalModules - completedCount} more section(s) before you can take the Post-Test.`}
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex gap-2">
            {learningModules.map(m => (
              <div key={m.key} className="flex flex-col items-center gap-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: modules[m.key] ? 'var(--good)' : 'rgba(255,255,255,0.15)',
                    boxShadow: modules[m.key] ? '0 0 8px var(--good)' : 'none',
                  }}
                />
                <span className="text-[10px] text-[var(--muted)]">{m.label.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {allComplete ? (
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary text-[16px] px-[36px] py-[16px]"
            onClick={markLearningsComplete}
          >
            Ready for Post-Test →
          </motion.button>
        ) : (
          <div className="text-[var(--muted)] text-sm">
            <p className="mb-3">Sections still to complete:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {learningModules.filter(m => !modules[m.key]).map(m => (
                <span 
                  key={m.key}
                  className="px-3 py-1.5 rounded-full border border-[var(--panel-border)] text-[12px]"
                >
                  {m.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}