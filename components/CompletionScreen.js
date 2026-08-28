'use client';

import { motion } from 'framer-motion';
import { useProgress } from './ProgressContext';

export default function CompletionScreen() {
  const { pretestScore, quizScore, finalScore } = useProgress();

  const pretestPct = pretestScore !== null ? Math.round((100 * pretestScore) / 12) : 0;
  const quizPct = quizScore !== null ? Math.round((100 * quizScore) / 12) : 0;
  const improvement = pretestScore !== null && quizScore !== null ? quizScore - pretestScore : 0;
  
  const finalPct = finalScore !== null ? Math.round((100 * finalScore) / 8) : 0;

  return (
    <section className="wrap" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="panel"
        style={{ 
          padding: '60px', 
          maxWidth: '700px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}
      >
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎉</div>
        
        <span className="stamp real" style={{ transform: 'rotate(-3deg)' }}>
          ✓ Training Complete
        </span>
        
        <h2 style={{ 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontWeight: 700, 
          fontSize: 'clamp(28px, 4vw, 42px)', 
          margin: '24px 0 16px' 
        }}>
          Congratulations!
        </h2>
        
        <p style={{ 
          fontSize: '16px', 
          color: 'var(--muted)', 
          lineHeight: 1.7, 
          marginBottom: '30px' 
        }}>
          You've completed all the training modules and assessments. 
          You now have the skills to identify fake news and verify information online.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '16px', 
          marginBottom: '30px' 
        }}>
          <div style={{ 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--panel-border)' 
          }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--cyan)' }}>
              {pretestScore !== null ? `${pretestScore}/12` : '—'}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
              Pre-Test Score
            </div>
          </div>
          
          <div style={{ 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--panel-border)' 
          }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--good)' }}>
              {quizScore !== null ? `${quizScore}/12` : '—'}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
              Post-Test Score
            </div>
          </div>
          
          <div style={{ 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--panel-border)' 
          }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--violet)' }}>
              {finalScore !== null ? `${finalScore}/8` : '—'}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
              Final Challenge
            </div>
          </div>
          
          <div style={{ 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid var(--panel-border)' 
          }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--amber)' }}>
              {improvement >= 0 ? `+${improvement}` : improvement}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
              Improvement
            </div>
          </div>
        </div>
        
        <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '30px' }}>
          {improvement > 0 
            ? `Great job! You improved by ${improvement} points from your pre-test.`
            : improvement === 0
            ? 'You maintained your score. Keep practicing to improve further!'
            : 'Don\'t worry - review the learning materials and try again!'}
        </p>
        
        <button 
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Start Over
        </button>
      </motion.div>
    </section>
  );
}