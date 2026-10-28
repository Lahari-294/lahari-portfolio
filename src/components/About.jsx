import React from 'react';
import { BookOpen, User, Sparkles, GraduationCap, Code2, Target, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-heading-badge">
            <User size={13} />
            <span>Profile & Background</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            About Me
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
            Get to know my academic journey, core engineering competencies, and professional aspirations.
          </p>
        </div>

        {/* Content Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Card 1: Narrative / Bio */}
          <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8',
                  marginBottom: '1.25rem'
                }}
              >
                <BookOpen size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1rem' }}>
                Engineering Undergraduate
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                I am a dedicated third-year Computer Science and Engineering student at{' '}
                <strong style={{ color: '#e2e8f0' }}>Vignan’s Foundation for Science, Technology & Research</strong>, 
                holding an academic record with a current <strong style={{ color: '#38bdf8' }}>CGPA of 8.05/10</strong>.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                My technical pursuits revolve around designing structured, efficient algorithms using <span style={{ color: '#c7d2fe' }}>C and Python</span>, 
                organizing complex data architectures with <span style={{ color: '#c7d2fe' }}>DBMS</span>, and crafting responsive user experiences using 
                modern web technologies.
              </p>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c7d2fe', fontSize: '0.85rem' }}>
                <Sparkles size={16} style={{ color: '#f59e0b' }} />
                <span>Goal: To contribute effectively to high-impact software engineering teams.</span>
              </div>
            </div>
          </div>

          {/* Card 2: Academic & Technical Pillars */}
          <div className="card-glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={20} style={{ color: '#8b5cf6' }} />
              <span>Core Academic Pillars</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Pillar 1 */}
              <div 
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  borderRadius: '0.75rem'
                }}
              >
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Foundational Computing</span>
                  <span style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 500 }}>C & Python</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Strong theoretical and implementation skills in core programming paradigms, memory organization, and algorithms.
                </p>
              </div>

              {/* Pillar 2 */}
              <div 
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  borderRadius: '0.75rem'
                }}
              >
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Data Structures & DBMS</span>
                  <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 500 }}>Relational Models</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  In-depth study of linear/non-linear data structures, relational database normalization, query design, and ACID transactions.
                </p>
              </div>

              {/* Pillar 3 */}
              <div 
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  borderRadius: '0.75rem'
                }}
              >
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Real-World Application</span>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 500 }}>Kisan Connect</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Synthesized technical skills into building a real-world digital marketplace project for farmers, solving direct trade challenges.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
