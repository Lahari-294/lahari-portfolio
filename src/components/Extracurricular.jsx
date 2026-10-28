import React from 'react';
import { Sparkles, Trophy, Award, HeartHandshake, Users } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Extracurricular() {
  const { extracurricular } = resumeData;

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Trophy size={22} style={{ color: '#f59e0b' }} />;
      case 1:
        return <Award size={22} style={{ color: '#38bdf8' }} />;
      default:
        return <HeartHandshake size={22} style={{ color: '#34d399' }} />;
    }
  };

  return (
    <section id="extracurricular" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-heading-badge">
            <Sparkles size={13} />
            <span>Campus Leadership & Involvement</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Extra-Curricular Activities
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Leadership roles, institutional coordination, and campus community volunteering.
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            maxWidth: '1050px',
            margin: '0 auto'
          }}
        >
          {extracurricular.map((act, index) => (
            <div 
              key={index}
              className="card-glass"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(index)}
                  </div>

                  <span 
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    {act.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                  {act.title}
                </h3>

                <div style={{ fontSize: '0.825rem', color: '#818cf8', fontWeight: 600, marginBottom: '1rem' }}>
                  {act.organization}
                </div>

                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {act.description}
                </p>
              </div>

              <div 
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                  fontSize: '0.8rem',
                  color: '#6ee7b7',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>&bull; Verified Resume Activity</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
