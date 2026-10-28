import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectSection from './components/ProjectSection';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-grid-pattern text-slate-100 flex flex-col">
      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* FIRST PAGE / HERO SECTION - MOST IMPORTANT */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* About Me */}
        <About />

        {/* Technical & Soft Skills */}
        <Skills />

        {/* Featured Project: Kisan Connect – Farmers Digital Marketplace */}
        <ProjectSection />

        {/* Education */}
        <Education />

        {/* Certifications */}
        <Certifications />

        {/* Extracurricular Activities */}
        <Extracurricular />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
