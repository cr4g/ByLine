'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { badgeDefs, moduleNames } from '../lib/data';
import { SectionHeader, Reveal } from './Reveal';
import { useProgress } from './ProgressContext';

ChartJS.register(ArcElement, Tooltip);

export default function Dashboard() {
  const { modules, accuracy, quizScore } = useProgress();

  const doughnutData = {
    labels: ['Accuracy', 'Remaining'],
    datasets: [
      {
        data: [accuracy, 100 - accuracy],
        backgroundColor: ['#7C5CFC', 'rgba(255,255,255,0.08)'],
        borderWidth: 0,
        cutout: '72%',
      },
    ],
  };

  const doughnutOptions = {
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section id="dashboard" className="wrap">
      <SectionHeader
        num="Your Progress"
        title="Learning Dashboard"
        description="Everything you've completed, your accuracy, and the press credentials you've earned so far."
      />
      <div className="grid md:grid-cols-[1.2fr_1fr] grid-cols-1 gap-[22px]">
        <Reveal>
          <div className="panel p-[26px] h-full">
            <h3 className="m-0 mb-1 text-base">Module completion</h3>
            <div>
              {Object.entries(moduleNames).map(([key, name]) => (
                <div key={key} className="flex items-center justify-between py-3 border-b border-[var(--panel-border)] last:border-b-0 text-sm">
                  <span>{name}</span>
                  <span
                    className="font-mono-b text-[11.5px] px-2.5 py-1 rounded-md uppercase"
                    style={{
                      background: modules[key] ? 'var(--good-soft)' : 'rgba(255,255,255,0.06)',
                      color: modules[key] ? 'var(--good)' : 'var(--muted)',
                    }}
                  >
                    {modules[key] ? 'Complete' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative rounded-2xl p-4.5 bg-[rgba(255,255,255,0.03)] border border-[var(--panel-border)] flex items-center gap-3" style={{ padding: '18px' }}>
                <div style={{ width: 56, height: 56 }}>
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">{accuracy}%</div>
                  <div className="text-[12.5px] text-[var(--muted)] mt-1">Overall accuracy</div>
                </div>
              </div>
              <div className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[var(--panel-border)]" style={{ padding: '18px' }}>
                <div className="font-display text-[30px] font-bold">{quizScore === null ? '—' : `${quizScore}/12`}</div>
                <div className="text-[12.5px] text-[var(--muted)] mt-1">Quiz score</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="panel p-[26px] h-full">
            <h3 className="m-0 mb-1 text-base">Press credentials earned</h3>
            <p className="text-[var(--muted)] text-[13px] m-0 mb-1">Unlock badges by completing modules above.</p>
            <div className="grid grid-cols-4 gap-3 mt-3.5">
              {badgeDefs.map((b) => (
                <div
                  key={b.key}
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-1.5 text-center p-1.5 border transition-opacity"
                  style={{
                    background: modules[b.key]
                      ? 'linear-gradient(160deg, rgba(124,92,252,0.18), rgba(34,211,238,0.12))'
                      : 'rgba(255,255,255,0.03)',
                    borderColor: modules[b.key] ? 'rgba(124,92,252,0.5)' : 'var(--panel-border)',
                    opacity: modules[b.key] ? 1 : 0.35,
                  }}
                >
                  <div className="text-[22px]">{b.icon}</div>
                  <div className="text-[10.5px]">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
