import React from 'react';
import { X, Download, FileText, Printer, Award, GraduationCap, Code2, Briefcase, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 85,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#38bdf8', '#34d399']
    });

    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.download = 'Kamjula_Lahari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '820px',
          width: '95%',
          maxHeight: '92vh',
          background: '#090e23',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Top Header */}
        <div 
          style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 23, 42, 0.85)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={20} style={{ color: '#818cf8' }} />
            <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1.05rem' }}>
              Kamjula Lahari &mdash; Official Resume
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handleDownload}
              className="btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                padding: '0.45rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div 
          style={{
            padding: '2.5rem',
            overflowY: 'auto',
            background: '#ffffff',
            color: '#1e293b',
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              {resumeData.personal.name}
            </h1>
            <div style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span>{resumeData.personal.phone}</span>
              <span>|</span>
              <span>{resumeData.personal.email}</span>
              <span>|</span>
              <span>LinkedIn</span>
              <span>|</span>
              <span>GitHub</span>
            </div>
          </div>

          {/* Career Objective */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              Career Objective
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.55 }}>
              {resumeData.personal.objective}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* B.Tech */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                  <span>Bachelor of Technology (B.Tech) – Computer Science and Engineering</span>
                  <span>2024–2028</span>
                </div>
                <div style={{ fontSize: '0.825rem', color: '#334155' }}>Vignan’s Foundation for Science, Technology & Research</div>
                <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#2563eb' }}>Current CGPA: 8.05/10</div>
              </div>

              {/* Intermediate */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                  <span>Intermediate (MPC)</span>
                  <span>94.5%</span>
                </div>
                <div style={{ fontSize: '0.825rem', color: '#334155' }}>Sri Chaitanya Junior College</div>
              </div>

              {/* SSC */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                  <span>SSC</span>
                  <span>92.3%</span>
                </div>
                <div style={{ fontSize: '0.825rem', color: '#334155' }}>ZPHS Chirumamilla</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Technical Skills
            </h2>
            <div style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div><strong>Programming Languages:</strong> {resumeData.skills.languages.join(', ')}</div>
              <div><strong>Web Technologies:</strong> {resumeData.skills.webDevelopment.join(', ')}</div>
              <div><strong>Core Subjects:</strong> {resumeData.skills.coreCS.join(', ')}</div>
              <div><strong>Tools:</strong> {resumeData.skills.tools.join(', ')}</div>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Projects
            </h2>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                {resumeData.featuredProject.title} – {resumeData.featuredProject.subtitle}
              </div>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.825rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {resumeData.featuredProject.bulletPoints.map((bp, i) => (
                  <li key={i}>{bp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              Certifications
            </h2>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.825rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {resumeData.certifications.map((cert, i) => (
                <li key={i}>{cert.title}</li>
              ))}
            </ul>
          </div>

          {/* Extra-Curricular Activities */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              Extra-Curricular Activities
            </h2>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.825rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {resumeData.extracurricular.map((act, i) => (
                <li key={i}>{act.description}</li>
              ))}
            </ul>
          </div>

          {/* Profiles & Soft Skills */}
          <div>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
              Profiles & Soft Skills
            </h2>
            <div style={{ fontSize: '0.825rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div><strong>Coding Profiles:</strong> {resumeData.codingProfiles.map(p => p.name).join(' • ')}</div>
              <div><strong>Soft Skills:</strong> {resumeData.skills.softSkills.join(' • ')}</div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div 
          style={{
            padding: '0.75rem 1.5rem',
            background: 'rgba(15, 23, 42, 0.9)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            color: '#94a3b8'
          }}
        >
          <span>Verified official resume &bull; Kamjula Lahari</span>
          <button 
            onClick={handleDownload}
            className="btn-primary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
          >
            <Download size={14} />
            <span>Download .PDF File</span>
          </button>
        </div>
      </div>
    </div>
  );
}
