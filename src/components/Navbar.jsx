import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Featured Project', href: '#project' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 11, 25, 0.92)' : 'rgba(7, 11, 25, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Brand / Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '0.05em',
              color: '#ffffff',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            KL
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>KAMJULA LAHARI</span>
            </div>
            <div style={{ fontSize: '0.725rem', color: '#818cf8', fontWeight: 500 }}>
              B.Tech CSE Undergraduate
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <style>{`
            @media (min-width: 900px) {
              .desktop-nav { display: flex !important; align-items: center; gap: 1.5rem; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '0.4rem 0.6rem',
                borderRadius: '0.5rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#a5b4fc')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              {link.label}
            </a>
          ))}

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '0.5rem' }}>
            <button
              onClick={onOpenResumeModal}
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              title="Preview & Download Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem' }}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(30, 41, 75, 0.7)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            color: '#cbd5e1',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 11, 25, 0.98)',
            borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#e2e8f0',
                textDecoration: 'none',
                padding: '0.5rem 0'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FileText size={16} />
              <span>Preview & Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
