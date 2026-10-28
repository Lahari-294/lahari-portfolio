import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Code2,
  Database,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export default function Hero({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 85,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#a855f7', '#38bdf8', '#34d399']
    });

    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.download = 'Kamjula_Lahari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(resumeData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section 
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Decorative ambient gradient glow orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
          filter: 'blur(55px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '5%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">

          {/* LEFT COLUMN: Name, Role, Introduction, Highlights, Action Buttons */}
          <div className="hero-text-col">
            
            {/* Status Pills */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.65rem' }}>
              <div className="badge-status">
                <span 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    display: 'inline-block' 
                  }} 
                />
                <span>Third-year B.Tech CSE &bull; Vignan's University (2024–2028)</span>
              </div>
              <div 
                className="badge-tag"
                style={{ 
                  background: 'rgba(16, 185, 129, 0.12)', 
                  borderColor: 'rgba(16, 185, 129, 0.3)',
                  color: '#6ee7b7'
                }}
              >
                <Award size={13} />
                <span>CGPA: 8.05 / 10</span>
              </div>
            </div>

            {/* Typography: Name and Role */}
            <div>
              <div 
                style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  textTransform: 'uppercase', 
                  color: '#818cf8',
                  marginBottom: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>Welcome to my Portfolio</span>
                <span style={{ height: '1px', width: '30px', background: 'rgba(129, 140, 248, 0.5)' }}></span>
              </div>

              <h1 
                className="gradient-text"
                style={{ 
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.025em', 
                  lineHeight: 1.1,
                  marginBottom: '0.75rem' 
                }}
              >
                KAMJULA LAHARI
              </h1>

              <h2 
                style={{ 
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
                  fontWeight: 600, 
                  color: '#c7d2fe',
                  lineHeight: 1.35,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.45rem'
                }}
              >
                <span>Computer Science Engineering Student</span>
                <span style={{ color: '#818cf8' }}>|</span>
                <span className="gradient-text-purple">Aspiring Software Developer</span>
              </h2>
            </div>

            {/* Short, Professional Introduction (Derived strictly from real Career Objective) */}
            <p 
              style={{ 
                fontSize: '0.975rem', 
                lineHeight: 1.65, 
                color: '#94a3b8', 
                maxWidth: '600px' 
              }}
            >
              Motivated third-year B.Tech Computer Science student at{' '}
              <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>
                Vignan’s Foundation for Science, Technology & Research
              </strong>{' '}
              (Current CGPA: <strong style={{ color: '#38bdf8' }}>8.05/10</strong>). Strong foundations in{' '}
              <span style={{ color: '#c7d2fe' }}>programming, web development, and database management</span>. 
              Creator of <span style={{ color: '#a78bfa', fontWeight: 600 }}>Kisan Connect</span> (Farmers Digital Marketplace). Seeking an internship opportunity to contribute to real-world software development projects.
            </p>

            {/* Resume Highlights Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '0.65rem',
                maxWidth: '560px'
              }}
            >
              <div 
                className="card-glass"
                style={{ padding: '0.65rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <div style={{ color: '#38bdf8' }}><GraduationCap size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Degree</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>B.Tech CSE</div>
                </div>
              </div>

              <div 
                className="card-glass"
                style={{ padding: '0.65rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <div style={{ color: '#10b981' }}><Award size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Performance</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>8.05 CGPA</div>
                </div>
              </div>

              <div 
                className="card-glass"
                style={{ padding: '0.65rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <div style={{ color: '#818cf8' }}><Code2 size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Core Stack</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>C &bull; Python &bull; DBMS</div>
                </div>
              </div>
            </div>

            {/* Action Buttons: "Explore My Work" and "Download Resume" */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                gap: '0.85rem',
                paddingTop: '0.25rem'
              }}
            >
              <a 
                href="#project" 
                className="btn-primary"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
              >
                <span>Explore My Work</span>
                <ArrowRight size={16} />
              </a>

              <button 
                onClick={handleDownloadResume} 
                className="btn-secondary"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
                title="Download Kamjula Lahari's Official Resume PDF"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.85rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  padding: '0.25rem 0.5rem'
                }}
              >
                Preview Resume
              </button>
            </div>

            {/* Verified Contact Details from Resume */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                alignItems: 'center', 
                gap: '1rem', 
                color: '#94a3b8', 
                fontSize: '0.825rem',
                paddingTop: '0.25rem'
              }}
            >
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={14} style={{ color: '#818cf8' }} />
                <a 
                  href={`mailto:${resumeData.personal.email}`}
                  style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 500 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {resumeData.personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'rgba(30, 41, 75, 0.6)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    borderRadius: '0.35rem',
                    padding: '0.15rem 0.45rem',
                    color: copiedEmail ? '#34d399' : '#94a3b8',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  title="Copy Email Address"
                >
                  {copiedEmail ? <CheckCircle2 size={11} /> : null}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={14} style={{ color: '#38bdf8' }} />
                <a 
                  href={`tel:${resumeData.personal.phone}`}
                  style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 500 }}
                >
                  {resumeData.personal.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  style={{
                    background: 'rgba(30, 41, 75, 0.6)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    borderRadius: '0.35rem',
                    padding: '0.15rem 0.45rem',
                    color: copiedPhone ? '#34d399' : '#94a3b8',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <CheckCircle2 size={11} /> : null}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Coding Profiles Listed in Resume */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Coding Profiles:
              </span>
              {resumeData.codingProfiles.map((p) => (
                <span
                  key={p.name}
                  className="badge-tag"
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.55rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderColor: 'rgba(99, 102, 241, 0.25)',
                    color: '#c7d2fe'
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Real Profile Photo Frame with Blue-Purple Glow & Hover Animation */}
          <div className="hero-photo-col">
            <div className="hero-photo-wrapper">
              
              {/* Subtle Blue-Purple Glow Backdrop */}
              <div className="hero-glow-bg" />

              {/* Portrait Frame */}
              <div className="hero-photo-frame">
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpg`} 
                  alt="Kamjula Lahari - Computer Science Engineering Student" 
                  className="hero-photo-img"
                />

                {/* Subtle Name Overlay Tag */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    padding: '0.6rem 0.85rem',
                    background: 'rgba(7, 11, 25, 0.88)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(99, 102, 241, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f8fafc' }}>
                      Kamjula Lahari
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#818cf8', fontWeight: 500 }}>
                      B.Tech CSE &bull; Vignan's University
                    </div>
                  </div>
                  <div 
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#10b981',
                      boxShadow: '0 0 8px #10b981'
                    }} 
                    title="Active Undergraduate"
                  />
                </div>
              </div>

              {/* Floating tech badge pills around the portrait frame */}
              <div 
                className="floating-pill floating-pill-top animate-float"
              >
                <Code2 size={14} style={{ color: '#a78bfa' }} />
                <span>C &bull; Python &bull; JS</span>
              </div>

              <div 
                className="floating-pill floating-pill-bottom animate-float"
              >
                <Database size={14} style={{ color: '#38bdf8' }} />
                <span>DBMS &bull; Data Structures</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
