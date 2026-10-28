import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Layers, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Database, 
  Sparkles,
  ArrowRight,
  Maximize2,
  X
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ProjectSection() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const { featuredProject } = resumeData;

  const mockProduce = [
    { name: 'Organic Wheat', category: 'Grains', price: '₹2,450 / Quintal', farmer: 'Ramesh K.', status: 'In Stock' },
    { name: 'Fresh Tomatoes', category: 'Vegetables', price: '₹28 / kg', farmer: 'Lakshmi N.', status: 'Harvested Today' },
    { name: 'Basmati Paddy', category: 'Paddy & Rice', price: '₹3,200 / Quintal', farmer: 'Venkatesh P.', status: 'Verified' },
    { name: 'Farm Fresh Potatoes', category: 'Vegetables', price: '₹22 / kg', farmer: 'Suresh B.', status: 'Direct from Farm' }
  ];

  return (
    <section id="project" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-heading-badge">
            <ShoppingBag size={13} />
            <span>Featured Capstone Project</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            {featuredProject.title}
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>{featuredProject.subtitle}</span> &mdash; {featuredProject.tagline}
          </p>
        </div>

        {/* Featured Project Showcase Container */}
        <div 
          className="card-glass"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(13, 20, 48, 0.9) 0%, rgba(9, 14, 34, 0.95) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.15)'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
            className="project-grid"
          >
            <style>{`
              @media (min-width: 1024px) {
                .project-grid {
                  grid-template-columns: 1.15fr 0.85fr !important;
                }
              }
            `}</style>

            {/* Left Column: Problem, Solution, Highlights, Tech Stack */}
            <div>
              {/* Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span className="badge-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}>
                  <TrendingUp size={13} />
                  <span>Farmers Digital Marketplace</span>
                </span>
                <span className="badge-tag" style={{ background: 'rgba(99, 102, 241, 0.15)', borderColor: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc' }}>
                  <Users size={13} />
                  <span>Direct-to-Consumer</span>
                </span>
                <span className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8' }}>
                  <ShieldCheck size={13} />
                  <span>Fair Pricing</span>
                </span>
              </div>

              {/* Title & Summary */}
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem', lineHeight: 1.25 }}>
                Online Marketplace Platform for Farmers and Consumers
              </h3>
              
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {featuredProject.summary}
              </p>

              {/* Exact Resume Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                {featuredProject.bulletPoints.map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '0.2rem' }} />
                    <div style={{ fontSize: '0.925rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                      {point}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                  Technologies & Development Tools
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {featuredProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      style={{
                        padding: '0.35rem 0.75rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                        borderRadius: '0.5rem',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: '#c7d2fe'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Trigger */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.4rem' }}
                >
                  <Maximize2 size={16} />
                  <span>Launch Marketplace Preview</span>
                </button>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Interactive UI mockup of Kisan Connect
                </span>
              </div>
            </div>

            {/* Right Column: Simulated Live Marketplace UI */}
            <div>
              <div 
                style={{
                  background: 'rgba(7, 11, 25, 0.95)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)'
                }}
              >
                {/* Mock Window Header */}
                <div 
                  style={{
                    background: 'rgba(15, 23, 42, 0.8)',
                    padding: '0.75rem 1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginLeft: '0.5rem', fontFamily: 'monospace' }}>
                      kisan-connect.app/browse
                    </span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
                    Online Marketplace
                  </div>
                </div>

                {/* Mock Marketplace Body */}
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>
                        Browse Agricultural Products
                      </div>
                      <div style={{ fontSize: '0.725rem', color: '#64748b' }}>
                        Direct listings by local farmers
                      </div>
                    </div>
                    <span 
                      style={{ 
                        fontSize: '0.725rem', 
                        background: 'rgba(16, 185, 129, 0.15)', 
                        color: '#34d399', 
                        padding: '0.2rem 0.5rem', 
                        borderRadius: '0.375rem',
                        fontWeight: 600 
                      }}
                    >
                      Direct Trade
                    </span>
                  </div>

                  {/* Produce Table Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {mockProduce.map((item, i) => (
                      <div 
                        key={i}
                        style={{
                          padding: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: '0.6rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.85rem' }}>
                            {item.name}
                          </div>
                          <div style={{ fontSize: '0.725rem', color: '#818cf8' }}>
                            Producer: {item.farmer} &bull; {item.category}
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontWeight: 700, color: '#38bdf8', fontSize: '0.85rem' }}>
                            {item.price}
                          </div>
                          <div style={{ fontSize: '0.675rem', color: '#10b981' }}>
                            {item.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Metric Footer */}
                  <div 
                    style={{ 
                      marginTop: '1rem', 
                      padding: '0.75rem', 
                      background: 'rgba(99, 102, 241, 0.08)', 
                      borderRadius: '0.6rem',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem'
                    }}
                  >
                    <span style={{ color: '#c7d2fe' }}>Navigation:</span>
                    <strong style={{ color: '#34d399', fontWeight: 700 }}>Mobile & Desktop Responsive</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Modal for Kisan Connect */}
      {showDemoModal && (
        <div className="modal-overlay" onClick={() => setShowDemoModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShoppingBag size={22} style={{ color: '#10b981' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc' }}>
                  Kisan Connect &mdash; Farmers Digital Marketplace
                </h3>
              </div>
              <button
                onClick={() => setShowDemoModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '0.35rem'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ color: '#34d399', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Project Overview
                </h4>
                <p>
                  A responsive web application enabling farmers to browse and purchase agricultural products online, structured with clean navigation and accessibility.
                </p>
              </div>

              <div>
                <h4 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Verified Features (From Resume)
                </h4>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong style={{ color: '#cbd5e1' }}>Responsive Web Application:</strong> Developed using HTML, CSS, and JavaScript.</li>
                  <li><strong style={{ color: '#cbd5e1' }}>Online Catalog & Marketplace:</strong> Designed a user-friendly platform for farmers to browse and purchase agricultural products online.</li>
                  <li><strong style={{ color: '#cbd5e1' }}>User Experience:</strong> Focused on responsive design, mobile friendliness, and intuitive navigation.</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Technologies & Development Tools
                </h4>
                <p style={{ color: '#cbd5e1' }}>
                  HTML, CSS, JavaScript, DBMS, GitHub, Visual Studio Code.
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="btn-primary"
                  style={{ padding: '0.5rem 1.25rem' }}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
