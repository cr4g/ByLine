'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { fakeNewsDefinition, fakeNewsTypes } from '../lib/data';
import { useProgress } from './ProgressContext';

export default function LearningPages() {
  const [currentPage, setCurrentPage] = useState(0);
  const { markLearningsComplete } = useProgress();

  const pages = [
    {
      id: 'intro',
      title: 'Introduction',
      subtitle: 'Definition of Fake News',
      content: (
        <div>
          <div className="panel" style={{ padding: '30px', marginBottom: '30px' }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--cyan)' }}>
              a. Definition of Fake News
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '16px' }}>
              {fakeNewsDefinition.intro}
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, margin: '0', fontWeight: 500 }}>
              {fakeNewsDefinition.definition}
            </p>
          </div>

          <div className="panel" style={{ padding: '30px' }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--cyan)' }}>
            Common Types of Fake News
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {fakeNewsTypes.map((t, i) => (
                <div key={t.num} style={{ 
                  display: 'flex', 
                  gap: '14px', 
                  padding: '14px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid var(--panel-border)'
                }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600 }}>
                      {t.num}. {t.title}
                    </h4>
                    <p style={{ margin: '0', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>{t.body}</p>
                    <p style={{ margin: '6px 0 0', fontSize: '12px', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.4 }}>
                      Example: {t.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Three General Types of Fake News */}
            <div style={{ 
              marginTop: '24px', 
              padding: '20px', 
              borderRadius: '12px', 
              background: 'rgba(34,211,238,0.05)', 
              border: '1px solid rgba(34,211,238,0.2)'
            }}>
              <h4 style={{ margin: '0 0 12px', fontSize: '15px', fontWeight: 700, color: 'var(--cyan)' }}>
                Three General Types of Fake News
              </h4>
              <p style={{ margin: '0 0 12px', fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
                Thompson Rivers University Library (2025) highlighted the three general types of fake news:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Clickbait', 'Sponsored content', 'Fabricated Journalism'].map((type, i) => (
                  <div key={type} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--panel-border)'
                  }}>
                    <span style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      background: 'var(--cyan)',
                      color: '#0a0d17',
                      fontSize: '12px',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Video Reference */}
            <div style={{ 
              marginTop: '16px', 
              padding: '20px', 
              borderRadius: '12px', 
              background: 'rgba(245,185,66,0.08)', 
              border: '1px solid rgba(245,185,66,0.3)'
            }}>
              <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>
                🎬 Watch: 7 Types of Misinformation
              </p>
              <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--muted)' }}>
                Keep It Real Online (2024) explains the different types of misinformation:
              </p>
              <a 
                href="https://www.youtube.com/watch?v=6qQV4-6N3oc" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--amber)', 
                  fontSize: '14px', 
                  fontWeight: 600,
                  textDecoration: 'underline',
                  wordBreak: 'break-all'
                }}
              >
                https://www.youtube.com/watch?v=6qQV4-6N3oc
              </a>
            </div>
            
            {/* Reference link */}
            <div style={{ 
              marginTop: '16px', 
              padding: '20px', 
              borderRadius: '12px', 
              background: 'rgba(124,92,252,0.08)', 
              border: '1px solid rgba(124,92,252,0.2)'
            }}>
              <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--muted)' }}>
                <strong>Learn more about the characteristics of fake news:</strong>
              </p>
              <a 
                href="https://libguides.tru.ca/fakenews/characteristics" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--cyan)', 
                  fontSize: '14px', 
                  textDecoration: 'underline',
                  wordBreak: 'break-all'
                }}
              >
                https://libguides.tru.ca/fakenews/characteristics
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'importance',
      title: 'Importance',
      subtitle: 'Why Identifying Fake News Matters',
      content: (
        <div className="panel" style={{ padding: '40px' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '24px', color: 'var(--cyan)' }}>
            Importance of Identifying Fake News
          </h3>
          <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text)' }}>
            <p style={{ marginBottom: '20px' }}>
              In this digital age, it is our responsibility to become a media literate citizen. The ability to differentiate between authentic and fabricated information is a cornerstone of media literacy.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Misleading content has the potential to erode public trust, distort democratic processes, and influence personal decisions in critical areas such as health, education, and politics.
            </p>
            <p style={{ marginBottom: '0' }}>
              Developing the skill to critically evaluate sources, cross-check information, and recognize the hallmarks of credible reporting enables individuals to safeguard themselves and their communities against the harmful effects of misinformation and disinformation.
            </p>
          </div>
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'var(--violet-soft)', 
            border: '1px solid rgba(124,92,252,0.3)' 
          }}>
            <p style={{ margin: '0', fontSize: '14px', fontWeight: 500 }}>
              💡 <strong>Key takeaway:</strong> Being media literate isn't just about knowing facts — it's about protecting yourself and your community from manipulation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'strategies',
      title: 'Fact-Checking Strategies',
      subtitle: 'How to Distinguish Real and Fake News',
      content: (
        <div className="panel" style={{ padding: '40px' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '24px', color: 'var(--cyan)' }}>
            Fact Checking Strategies
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>
            In a digital landscape filled with misinformation, algorithms, and AI-generated content, learning how to critically evaluate information is a key social responsibility. Every time we share a story or use a source, we act as 'cultural producers'.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.7, marginBottom: '30px', fontWeight: 500 }}>
            Use this reference guide to master two professional evaluation toolkits: <strong style={{ color: 'var(--cyan)' }}>SIFT</strong> (for quick digital verification) and <strong style={{ color: 'var(--violet)' }}>ACT UP</strong> (for deep source critique).
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px', 
            marginTop: '20px'
          }}>
            <div style={{ 
              padding: '20px', 
              borderRadius: '12px', 
              background: 'rgba(124,92,252,0.1)', 
              border: '1px solid rgba(124,92,252,0.3)'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>⚡</div>
              <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 700 }}>SIFT</h4>
              <p style={{ margin: '0', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>
                Quick digital verification for claims, articles, images, or quotes.
              </p>
            </div>
            <div style={{ 
              padding: '20px', 
              borderRadius: '12px', 
              background: 'rgba(34,211,238,0.1)', 
              border: '1px solid rgba(34,211,238,0.3)'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>📚</div>
              <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 700 }}>ACT UP</h4>
              <p style={{ margin: '0', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>
                Deep source critique for scholarly and academic research.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sift',
      title: 'The SIFT Quick-Check',
      subtitle: '4-Step Method for Digital Verification',
      content: (
        <div className="panel" style={{ padding: '40px' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: 'var(--cyan)' }}>
            THE SIFT QUICK-CHECK
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '30px' }}>
            Created by Mike Caulfield, SIFT is a 4-step method to quickly verify the accuracy of any digital claim, article, image, or quote before you share it or write about it.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                step: 'S',
                title: 'STOP',
                desc: 'Pause before you read, trust, or share. Ask if you know and trust the source.',
                tip: 'If you don\'t know the source, stop and use the other steps below. Don\'t share until you verify!'
              },
              {
                step: 'I',
                title: 'INVESTIGATE',
                desc: 'Find out who the author is and check their credentials and reputation.',
                tip: 'Look outside of their website! Search Wikipedia or Google the author to find out their expertise and slant.'
              },
              {
                step: 'F',
                title: 'FIND COVERAGE',
                desc: 'Look for other trusted news sites, experts, or organizations talking about the claim.',
                tip: 'Are independent, reputable media outlets corroborating the fact, or is only one random site sharing it?'
              },
              {
                step: 'T',
                title: 'TRACE CONTEXT',
                desc: 'Find the original source, research paper, quote, or image to check its details.',
                tip: 'Check dates! Trace old social posts and run a reverse image search (Google Images/TinEye) to see original context.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--panel-border)',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'var(--violet-soft)',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--violet)',
                  flexShrink: 0
                }}>
                  {item.step}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>{item.title}</h4>
                  <p style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--text)', lineHeight: 1.5 }}>{item.desc}</p>
                  <p style={{ margin: '0', fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.5, fontStyle: 'italic' }}>
                    💡 {item.tip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'actup',
      title: 'The ACT UP Code',
      subtitle: 'Deep Source Critique Framework',
      content: (
        <div className="panel" style={{ padding: '40px' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: 'var(--cyan)' }}>
            THE ACT UP CODE
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '30px' }}>
            Created by Dawn Stahara in 2017, the ACT UP strategy is a critical framework designed to push back against dominant narratives, challenge systemic inequalities, and dismantle hierarchies of knowledge in scholarly publishing.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                letter: 'A',
                title: 'Author',
                q: 'Who wrote the resource and what is their motivation?',
                focus: 'Google them. Look for hidden motives to sell or persuade. Uncover any conflicts of interest.'
              },
              {
                letter: 'C',
                title: 'Currency',
                q: 'When was this information originally written versus uploaded?',
                focus: 'Confirm original dates. Databases and websites often show \'re-upload\' or \'updated\' dates instead.'
              },
              {
                letter: 'T',
                title: 'Truth',
                q: 'Is this claim accurate, and how can I verify its semantics?',
                focus: 'Apply the Rule of Three: verify any major claim across three other independent, trusted sources.'
              },
              {
                letter: 'U',
                title: 'Unbiased',
                q: 'What biases are present and who funded the research?',
                focus: 'There is no such thing as an unbiased source. Follow the money. Watch out for confirmation bias.'
              },
              {
                letter: 'P',
                title: 'Privilege',
                q: 'Whose voices are represented, and who is missing from the database?',
                focus: 'Recognize publishing privilege favoring white, male scholars. Seek alternative media (zines, blogs, etc.).'
              }
            ].map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--panel-border)',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(34,211,238,0.15)',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--cyan)',
                  flexShrink: 0
                }}>
                  {item.letter}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>{item.title}</h4>
                  <p style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--text)', lineHeight: 1.5 }}>
                    <strong>Question:</strong> {item.q}
                  </p>
                  <p style={{ margin: '0', fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.5, fontStyle: 'italic' }}>
                    💡 {item.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'infographic',
      title: 'Fact-Checking Strategies',
      subtitle: 'Visual Infographic',
      content: (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="panel" style={{ padding: '30px', marginBottom: '24px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, margin: '0', color: 'var(--text)' }}>
              📊 Fact-Checking Strategies
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', margin: '8px 0 0' }}>
              Here are some effective fact-checking strategies you can use to evaluate online information and avoid falling for fake news.
            </p>
          </div>
          
          <div style={{ position: 'relative', width: '100%', aspectRatio: '0.5', borderRadius: '18px', overflow: 'hidden' }}>
            <Image
              src="/images/fact-checking-strategies.jpg"
              alt="Fact-Checking Strategies infographic"
              fill
              sizes="600px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      )
    },
    {
      id: 'references',
      title: 'References',
      subtitle: 'Sources & Further Reading',
      content: (
        <div className="panel" style={{ padding: '40px' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '24px', color: 'var(--cyan)' }}>
            REFERENCES
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ 
              padding: '20px', 
              borderRadius: '12px', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid var(--panel-border)'
            }}>
              <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>
                📺 YouTube Video
              </p>
              <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--muted)' }}>
                Keep It Real Online. (2024). <em>7 Types of Misinformation</em>.
              </p>
              <a 
                href="https://www.youtube.com/watch?v=6qQV4-6N3oc" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--amber)', 
                  fontSize: '14px', 
                  textDecoration: 'underline',
                  wordBreak: 'break-all'
                }}
              >
                https://www.youtube.com/watch?v=6qQV4-6N3oc
              </a>
            </div>

            <div style={{ 
              padding: '20px', 
              borderRadius: '12px', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid var(--panel-border)'
            }}>
              <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>
                📚 Journal Article
              </p>
              <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--muted)' }}>
                Thompson Rivers University Library. (2025). <em>Fake News</em>.
              </p>
              <a 
                href="https://libguides.tru.ca/fakenews/characteristics" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--cyan)', 
                  fontSize: '14px', 
                  textDecoration: 'underline',
                  wordBreak: 'break-all'
                }}
              >
                https://libguides.tru.ca/fakenews/characteristics
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  const totalPages = pages.length;
  const currentPageData = pages[currentPage];
  const isLastPage = currentPage === totalPages - 1;

  function goNext() {
    if (isLastPage) {
      markLearningsComplete();
    } else {
      setCurrentPage((p) => p + 1);
    }
  }

  function goPrev() {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
    }
  }

  return (
    <section id="learning" className="wrap" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      {/* Page Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '8px', 
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        {pages.map((page, i) => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(i)}
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              border: '1px solid var(--panel-border)',
              background: currentPage === i ? 'var(--violet)' : 'var(--panel)',
              color: currentPage === i ? 'white' : 'var(--muted)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {i + 1}. {page.title}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="panel"
          style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}
        >
          <div style={{ marginBottom: '20px' }}>
            <div className="sec-num" style={{ marginBottom: '8px' }}>{currentPageData.subtitle}</div>
            <h2 style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontWeight: 700, 
              fontSize: 'clamp(24px, 3vw, 34px)', 
              margin: '0'
            }}>
              {currentPageData.title}
            </h2>
          </div>
          
          {currentPageData.content}
        </motion.div>
      </AnimatePresence>

      {/* Prev/Next Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '30px',
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <button
          onClick={goPrev}
          disabled={currentPage === 0}
          className="btn btn-ghost"
          style={{ opacity: currentPage === 0 ? 0.4 : 1 }}
        >
          ← Previous
        </button>
        
        <div style={{ fontSize: '13px', color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
          Page {currentPage + 1} of {totalPages}
        </div>
        
        <button
          onClick={goNext}
          className="btn btn-primary"
        >
          {isLastPage ? 'Complete Learning →' : 'Next →'}
        </button>
      </div>
    </section>
  );
}