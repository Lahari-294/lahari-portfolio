import React from 'react';
import { Award, CheckCircle, Shield, Network, Briefcase, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Certifications() {
  const { certifications } = resumeData;

  const getIcon = (title) => {
    if (title.toLowerCase().includes('management')) {
      return <Briefcase size={22} style={{ color: '#f59e0b' }} />;
    }
    return <Network size={22} style={{ color: '#38bdf8' }} />;
  };

  return (
    <section id="certifications" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-heading-badge">
            <Award size={13} />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Certifications
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Official professional certifications earned from premier recognized institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="card-glass"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header Icon & Issuer */}
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
                    {getIcon(cert.title)}
                  </div>

                  <span 
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#a5b4fc'
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#818cf8', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={14} />
                  <span>{cert.issuer}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {cert.focus}
                </p>
              </div>

              {/* Verified Badge */}
              <div 
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#34d399',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                <CheckCircle size={15} />
                <span>Verified Academic Certification</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
