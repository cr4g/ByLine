'use client';

import { useProgress } from './ProgressContext';

export default function Nav() {
  const { doneCount, modules, showPostTest } = useProgress();

  const learningLinks = [
    { id: 'intro', label: 'Introduction' },
    { id: 'lab', label: 'Source Lab' },
    { id: 'detective', label: 'Detective' },
    { id: 'clickbait', label: 'Clickbait' },
    { id: 'images', label: 'Images' },
    { id: 'scenarios', label: 'Scenarios' },
  ];

  const learningKeys = ['lab', 'detective', 'clickbait', 'images', 'scenarios'];
  const allLearningsDone = learningKeys.every(key => modules[key]);

  const postTestLinks = [
    { id: 'quiz', label: 'Post-Test' },
  ];

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(10,13,23,0.75)] border-b border-[var(--panel-border)]">
      <div className="nav-container">
        <div className="nav-logo">
          <span
            className="w-[34px] h-[34px] rounded-lg flex items-center justify-center font-mono-b text-[14px] font-bold text-[#0a0d17]"
            style={{ background: 'linear-gradient(135deg,var(--violet),var(--cyan))', transform: 'rotate(-6deg)' }}
          >
            B
          </span>
          <span>BYLINE</span>
        </div>
        
        <div className="hidden md:flex nav-links">
          {!modules.pretest && (
            <a onClick={() => scrollToId('pretest')}>
              Pre-Test
            </a>
          )}
          {modules.pretest && !showPostTest && (
            <>
              {learningLinks.map((l) => (
                <a key={l.id} onClick={() => scrollToId(l.id)}>
                  {l.label}
                </a>
              ))}
            </>
          )}
          {showPostTest && allLearningsDone && (
            <>
              {postTestLinks.map((l) => (
                <a key={l.id} onClick={() => scrollToId(l.id)}>
                  {l.label}
                </a>
              ))}
            </>
          )}
        </div>
        
        <div className="nav-progress">
          <span className="w-[8px] h-[8px] rounded-full bg-[var(--good)]" style={{ boxShadow: '0 0 8px var(--good)' }} />
          {showPostTest ? 'Post-Test' : `${doneCount}/7 completed`}
        </div>
      </div>
    </nav>
  );
}