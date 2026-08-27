'use client';

import { useProgress } from './ProgressContext';

const links = [
  { id: 'pretest', label: 'Pre-Test' },
  { id: 'intro', label: 'Introduction' },
  { id: 'lab', label: 'Source Lab' },
  { id: 'detective', label: 'Detective' },
  { id: 'clickbait', label: 'Clickbait' },
  { id: 'images', label: 'Images' },
  { id: 'scenarios', label: 'Scenarios' },
  { id: 'quiz', label: 'Post-Test' },
  { id: 'final', label: 'Final Test' },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Nav() {
  const { doneCount } = useProgress();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(10,13,23,0.55)] border-b border-[var(--panel-border)]">
      <div className="max-w-[1180px] mx-auto px-7 py-3.5 flex items-center justify-between gap-5">
        <div className="flex items-center gap-2.5 font-bold text-[19px]">
          <span
            className="w-[30px] h-[30px] rounded-lg flex items-center justify-center font-mono-b text-[13px] font-bold text-[#0a0d17]"
            style={{ background: 'linear-gradient(135deg,var(--violet),var(--cyan))', transform: 'rotate(-6deg)' }}
          >
            B
          </span>
          BYLINE
        </div>
        <div className="hidden md:flex gap-6 text-sm text-[var(--muted)]">
          {links.map((l) => (
            <a
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="cursor-pointer hover:text-[var(--text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-[var(--panel)] border border-[var(--panel-border)] px-3.5 py-1.5 rounded-full text-[13px]">
          <span className="w-[7px] h-[7px] rounded-full bg-[var(--good)]" style={{ boxShadow: '0 0 8px var(--good)' }} />
          {doneCount}/7 modules
        </div>
      </div>
    </nav>
  );
}
