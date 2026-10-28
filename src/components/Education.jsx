import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2, BookOpen, School } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-heading-badge">
            <GraduationCap size={13} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Education
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Academic history spanning B.Tech engineering, intermediate, and secondary school achievements.
          </p>
        </div>

        {/* Education Timeline */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {education.map((item, index) => (
            <div 
              key={index}
              className="card-glass"
              style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                background: item.current 
                  ? 'linear-gradient(145deg, rgba(16, 26, 60, 0.85), rgba(8, 12, 30, 0.95))'
                  : 'rgba(12, 18, 40, 0.6)',
                border: item.current 
                  ? '1px solid rgba(99, 102, 241, 0.35)'
                  : '1px solid rgba(255, 255, 255, 0.07)'
              }}
            >
              {/* Left Accent indicator */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: item.current ? '5px' : '3px',
                  background: item.current 
                    ? 'linear-gradient(to bottom, #6366f1, #8b5cf6, #38bdf8)' 
                    : 'rgba(99, 102, 241, 0.4)'
                }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: item.current ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.current ? '#818cf8' : '#94a3b8',
                      flexShrink: 0
                    }}
                  >
                    {item.current ? <GraduationCap size={22} /> : <School size={20} />}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                      <span 
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.15rem 0.55rem',
                          borderRadius: '9999px',
                          background: item.current ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                          color: item.current ? '#a5b4fc' : '#94a3b8'
                        }}
                      >
                        {item.type}
                      </span>
                      {item.current && (
                        <span 
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            padding: '0.15rem 0.5rem',
                            borderRadius: '9999px',
                            background: 'rgba(16, 185, 129, 0.15)',
                            color: '#34d399',
                            border: '1px solid rgba(16, 185, 129, 0.3)'
                          }}
                        >
                          In Progress
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
                      {item.degree}
                    </h3>

                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#38bdf8', marginBottom: '0.25rem' }}>
                      {item.institution}
                    </h4>

                    {item.branch && (
                      <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                        Stream: {item.branch}
                      </div>
                    )}
                  </div>
                </div>

                {/* Score and Period */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      fontWeight: 700,
                      fontSize: '0.9rem'
                    }}
                  >
                    <Award size={15} />
                    <span>{item.score}</span>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      color: '#64748b'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>

              {/* Extra details for B.Tech */}
              {item.current && (
                <div 
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.25rem',
                    fontSize: '0.85rem',
                    color: '#94a3b8'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                    <span>Core Subjects: Data Structures, Database Management Systems (DBMS)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={14} style={{ color: '#818cf8' }} />
                    <span>Programming Languages: C, Python</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
