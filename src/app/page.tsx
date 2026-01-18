'use client';

import React, { useState, useEffect } from 'react';
import DottedGlowBackground from '@/components/DottedGlowBackground';
import { 
    CodeIcon, 
    SparklesIcon, 
    ArrowRightIcon, 
    PipelineIcon, 
    CloudIcon,
    TerminalIcon,
    MailIcon,
    GitHubIcon,
    LinkedInIcon
} from '@/components/Icons';
import { siteContent } from '@/data/content';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    };
  };

  const githubUrl = siteContent.socials.find(s => s.platform === 'github')?.url || 'https://github.com';
  const linkedinUrl = siteContent.socials.find(s => s.platform === 'linkedin')?.url || 'https://linkedin.com';

  return (
    <>
      <DottedGlowBackground 
          gap={24} 
          radius={1.5} 
          color="rgba(255, 255, 255, 0.03)" 
          glowColor="rgba(56, 189, 248, 0.15)" 
          speedScale={0.3} 
      />

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="brand">
            <span className="cursor-blink">_</span>{siteContent.profile.name.split(' ')[0].toUpperCase()}.DATA
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
            <button onClick={() => scrollToSection('projects')}>Work</button>
            <button className="cta-btn" onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      <main className="portfolio-container">
        
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <div className="terminal-badge">
              <TerminalIcon /> <span>{siteContent.profile.tagline}</span>
            </div>
            <h1>
              Turning Raw Noise into <br />
              <span className="gradient-text">Scalable Intelligence.</span>
            </h1>
            <p className="hero-sub">
              {siteContent.about.headline}
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollToSection('projects')}>
                View Case Studies <ArrowRightIcon />
              </button>
              <button className="secondary-btn" onClick={() => scrollToSection('experience')}>
                <CodeIcon /> View Experience
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">PB+</span>
                <span className="stat-label">Data Architected</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">40%</span>
                <span className="stat-label">Efficiency Gains</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="section-header">
            <h2>About</h2>
            <p>Architecting the future of data platforms.</p>
          </div>
          <div className="about-content">
            {siteContent.about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-text-secondary leading-relaxed text-lg">
                {p}
              </p>
            ))}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteContent.about.bullets?.map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-color" />
                  <span className="text-text-secondary">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="section-header">
            <h2>Technical Arsenal</h2>
            <p>Built for scale, speed, and reliability.</p>
          </div>
          <div className="skills-grid">
            {siteContent.skillCategories.slice(0, 3).map((category, idx) => (
              <div key={category.name} className="skill-card">
                <div className="skill-icon">
                  {idx === 0 ? <CodeIcon /> : idx === 1 ? <PipelineIcon /> : <CloudIcon />}
                </div>
                <h3>{category.name}</h3>
                <div className="tag-container">
                  {category.skills.map(s => <span key={s.name} className="tag">{s.name}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="section-header">
            <h2>Professional Journey</h2>
            <p>Delivering measurable impact at enterprise scale.</p>
          </div>
          <div className="projects-list">
            {siteContent.experience.entries.map((exp, idx) => (
              <div key={idx} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{exp.company}</h3>
                    <span className="role-badge">{exp.role}</span>
                  </div>
                  <p className="mb-4 text-sm text-text-secondary">{exp.startDate} — {exp.endDate || 'Present'}</p>
                  <ul className="mb-6 space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-text-secondary text-sm flex gap-2">
                        <span className="text-accent-color mt-1">▹</span>
                        <span>{ach.description} {ach.metric && <span className="text-accent-color font-semibold">[{ach.metric}]</span>}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="project-stack">
                    {exp.techStack?.map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-header">
            <h2>Selected Engineering</h2>
            <p>Solving complex data problems with elegant architecture.</p>
          </div>
          <div className="projects-list">
            {siteContent.projects.entries.map((project, idx) => (
              <div key={idx} className="project-card" onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="role-badge">{project.type}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="metrics-list">
                    {project.impact && (
                      <div className="metric-item">
                        <SparklesIcon /> {project.impact}
                      </div>
                    )}
                    {project.scale && (
                      <div className="metric-item">
                        <SparklesIcon /> {project.scale}
                      </div>
                    )}
                  </div>
                  <div className="project-stack">
                    {project.techStack.map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                </div>
                {project.liveUrl && (
                  <div className="project-action">
                    <ArrowRightIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-wrapper">
            <h2>Let's Build Something Scalable</h2>
            <p>{siteContent.contact.description}</p>
            <div className="contact-links">
               <a href={`mailto:${siteContent.contact.email}`} className="contact-btn">
                 <MailIcon /> Email Me
               </a>
               <a href={githubUrl} target="_blank" rel="noreferrer" className="contact-btn secondary">
                 <GitHubIcon /> GitHub
               </a>
               <a href={linkedinUrl} target="_blank" rel="noreferrer" className="contact-btn secondary">
                 <LinkedInIcon /> LinkedIn
               </a>
            </div>
          </div>
        </section>
        
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} {siteContent.profile.name}. Data Engineer & Solutions Architect.</p>
        </footer>

      </main>
    </>
  );
}
