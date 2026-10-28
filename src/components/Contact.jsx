import React, { useState } from 'react';
import { Mail, Copy, CheckCircle2, Send, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: ''
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || 'Recruiter'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.senderEmail}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: '5rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-heading-badge">
            <Mail size={13} />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Get in Touch
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Interested in discussing internship opportunities, engineering projects, or technical collaboration?
          </p>
        </div>

        {/* Contact Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          <style>{`
            @media (min-width: 900px) {
              .contact-grid {
                grid-template-columns: 1fr 1.2fr !important;
              }
            }
          `}</style>

          {/* Left Column: Direct Contact Info & Academic Affiliation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div 
              className="card-glass"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc' }}>
                Direct Communication
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Recruiters and engineers are welcome to reach out directly via email. I respond promptly to internship and project inquiries.
              </p>

              {/* Email Box */}
              <div 
                style={{
                  padding: '1.25rem',
                  background: 'rgba(99, 102, 241, 0.08)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#818cf8', fontWeight: 700, letterSpacing: '0.05em' }}>
                  Official Contact Email
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a 
                    href={`mailto:${resumeData.personal.email}`}
                    style={{
                      color: '#f8fafc',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      wordBreak: 'break-all'
                    }}
                  >
                    {resumeData.personal.email}
                  </a>

                  <button
                    onClick={handleCopy}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(99, 102, 241, 0.25)',
                      border: copied ? '1px solid #10b981' : '1px solid rgba(99, 102, 241, 0.4)',
                      color: copied ? '#34d399' : '#c7d2fe',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Institution Box */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <GraduationCap size={20} style={{ color: '#38bdf8', marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.9rem' }}>
                    Academic Institution
                  </div>
                  <div style={{ fontSize: '0.825rem', color: '#94a3b8' }}>
                    {resumeData.personal.college}
                  </div>
                  <div style={{ fontSize: '0.775rem', color: '#818cf8', marginTop: '0.2rem' }}>
                    Department of Computer Science & Engineering
                  </div>
                </div>
              </div>

              {/* Note on Profile URLs (Strict adherence: only real info) */}
              <div 
                style={{
                  fontSize: '0.775rem',
                  color: '#64748b',
                  lineHeight: 1.5,
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.01)',
                  borderRadius: '0.5rem'
                }}
              >
                <em>Note: In accordance with portfolio verification standards, external social profile links (GitHub / LinkedIn) will be enabled once authorized profile links are updated.</em>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div 
            className="card-glass"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>
                Send a Message
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                Fill out the quick form below to launch a pre-composed direct email.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. John Doe / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 11, 25, 0.8)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#f8fafc',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 11, 25, 0.8)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#f8fafc',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Software Engineering Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 11, 25, 0.8)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#f8fafc',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Hi Kamjula Lahari, we reviewed your work on Kisan Connect and your academic background..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(7, 11, 25, 0.8)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      borderRadius: '0.6rem',
                      color: '#f8fafc',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  <span>Send Direct Email</span>
                </button>
              </form>
            </div>

            {sentNotice && (
              <div 
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  borderRadius: '0.5rem',
                  color: '#34d399',
                  fontSize: '0.85rem',
                  textAlign: 'center'
                }}
              >
                Opening your email client to send message to kamjulalahari27@gmail.com...
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
