import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#040711',
        borderTop: '1px solid rgba(99, 102, 241, 0.15)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Col 1: Brand & Role */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: '#ffffff'
                }}
              >
                KL
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#f8fafc', letterSpacing: '-0.01em' }}>
                KAMJULA LAHARI
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              {resumeData.personal.role}
            </p>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
              {resumeData.personal.college} &bull; CGPA: {resumeData.personal.cgpa}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <a href="#hero" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a>
              </li>
              <li>
                <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Me</a>
              </li>
              <li>
                <a href="#skills" style={{ color: '#94a3b8', textDecoration: 'none' }}>Technical Skills</a>
              </li>
              <li>
                <a href="#project" style={{ color: '#94a3b8', textDecoration: 'none' }}>Featured Project: Kisan Connect</a>
              </li>
              <li>
                <a href="#education" style={{ color: '#94a3b8', textDecoration: 'none' }}>Education & Certifications</a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiry */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Direct Reachout
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Mail size={16} style={{ color: '#818cf8' }} />
              <a 
                href={`mailto:${resumeData.personal.email}`}
                style={{ color: '#38bdf8', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500 }}
              >
                {resumeData.personal.email}
              </a>
            </div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.65rem',
                borderRadius: '0.375rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#34d399',
                fontSize: '0.75rem'
              }}
            >
              <ShieldCheck size={14} />
              <span>100% Resume-Verified Information</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back-To-Top */}
        <div 
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: '#64748b'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Kamjula Lahari. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.775rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
