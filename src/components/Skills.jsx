import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Cpu,
  Brain,
  Users,
  Lightbulb,
  Clock,
  Compass
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 size={20} style={{ color: '#818cf8' }} />,
      description: 'Foundational languages for systems programming and algorithm implementation',
      skills: [
        { name: 'C', level: 'Core', details: 'Pointers, Memory Management, Procedural Logic, Data Manipulation' },
        { name: 'Python', level: 'Proficient', details: 'Object-Oriented Programming, Scripting, Problem Solving, Data Analysis' }
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Globe size={20} style={{ color: '#38bdf8' }} />,
      description: 'Frontend building blocks used in creating responsive web interfaces',
      skills: [
        { name: 'HTML', level: 'Proficient', details: 'Semantic Markup, Accessible Forms, Web Page Structure' },
        { name: 'CSS', level: 'Proficient', details: 'Responsive Layouts, Flexbox, Grid, Custom Styling & Animations' },
        { name: 'JavaScript', level: 'Proficient', details: 'DOM Manipulation, Event Handling, ES6+ Syntax, Client-Side Logic' }
      ]
    },
    {
      id: 'core',
      title: 'Computer Science Core',
      icon: <Database size={20} style={{ color: '#a78bfa' }} />,
      description: 'Theoretical foundations and database management concepts',
      skills: [
        { name: 'Data Structures', level: 'Advanced Core', details: 'Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting Algorithms' },
        { name: 'DBMS', level: 'Core', details: 'Relational Schema Design, SQL Queries, Normalization, Data Integrity' }
      ]
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      icon: <Terminal size={20} style={{ color: '#34d399' }} />,
      description: 'Standard version control and modern development environments',
      skills: [
        { name: 'GitHub', level: 'Essential', details: 'Version Control, Branching, Pull Requests, Repository Collaboration' },
        { name: 'Visual Studio Code', level: 'Primary IDE', details: 'Extensions, Debugging, Code Formatting, Multi-file Workspace' }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Brain size={18} style={{ color: '#818cf8' }} />, desc: 'Decomposing complex engineering challenges into modular, testable steps.' },
    { name: 'Analytical Thinking', icon: <Lightbulb size={18} style={{ color: '#f59e0b' }} />, desc: 'Evaluating algorithmic efficiency and database access patterns.' },
    { name: 'Team Collaboration', icon: <Users size={18} style={{ color: '#38bdf8' }} />, desc: 'Collaborating on team academic projects and technical symposiums.' },
    { name: 'Effective Communication', icon: <Compass size={18} style={{ color: '#34d399' }} />, desc: 'Articulating technical designs and presenting project deliverables.' },
    { name: 'Time Management', icon: <Clock size={18} style={{ color: '#c084fc' }} />, desc: 'Balancing rigorous university coursework, lab sessions, and independent coding.' },
    { name: 'Adaptability', icon: <Layers size={18} style={{ color: '#fb7185' }} />, desc: 'Quickly mastering new programming languages, frameworks, and tools.' }
  ];

  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-heading-badge">
            <Cpu size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Technical & Soft Skills
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
            Skills verified from academic curriculum, certifications, and project implementations.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="card-glass"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.825rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {category.description}
                </p>

                {/* Skill Badges List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      style={{
                        padding: '0.75rem 0.9rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(99, 102, 241, 0.18)',
                        borderRadius: '0.625rem',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.95rem' }}>
                          {skill.name}
                        </span>
                        <span 
                          style={{ 
                            fontSize: '0.7rem', 
                            color: '#818cf8', 
                            background: 'rgba(99, 102, 241, 0.12)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '9999px',
                            fontWeight: 600
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.775rem', color: '#94a3b8', lineHeight: 1.4 }}>
                        {skill.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div 
          className="card-glass"
          style={{
            padding: '2.5rem 2rem',
            background: 'linear-gradient(145deg, rgba(14, 22, 48, 0.7), rgba(9, 14, 32, 0.8))',
            borderColor: 'rgba(99, 102, 241, 0.25)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.5rem' }}>
              Professional & Soft Skills
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
              Essential interpersonal and operational abilities reinforced through engineering teamwork and NPTEL Management principles.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {softSkills.map((item) => (
              <div 
                key={item.name}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '0.75rem'
                }}
              >
                <div 
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(99, 102, 241, 0.1)',
                    marginTop: '0.1rem'
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.2rem' }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.45 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
