'use client';

import { motion } from 'framer-motion';
import { useProgress } from './ProgressContext';

export default function LearningsComplete() {
  const { modules, markLearningsComplete } = useProgress();
  
  const learningModules = ['lab', 'detective', 'clickbait', 'images', 'scenarios'];
  const completedCount = learningModules.filter(k => modules[k]).length;
  const totalModules = learningModules.length;
  
  return (
    <section className="wrap py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="panel p-[40px] text-center max-w-[680px] mx-auto"
      >
        <span className="stamp real" style={{ transform: 'rotate(-3deg)' }}>
          ✓ Learnings complete
        </span>
        
        <h2 className="font-display font-bold text-[clamp(26px,4vw,38px)] mt-[20px] mb-4">
          Ready for the Post-Test?
        </h2>
        
        <p className="text-[var(--muted)] text-[16px] leading-relaxed mb-8 max-w-[520px] mx-auto">
          You've completed {completedCount}/{totalModules} learning modules. 
          Time to take the same 12-question test again and see how much you've improved.
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex gap-2">
            {learningModules.map(key => (
              <span
                key={key}
                className="w-3 h-3 rounded-full"
                style={{
                  background: modules[key] ? 'var(--good)' : 'rgba(255,255,255,0.15)',
                  boxShadow: modules[key] ? '0 0 8px var(--good)' : 'none',
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary text-[16px] px-[36px] py-[16px]"
          onClick={markLearningsComplete}
        >
          Proceed to Post-Test →
        </motion.button>
      </motion.div>
    </section>
  );
}