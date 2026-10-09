import { useState, useRef } from 'react';
import { myPortfolio } from './data';
import { 
  Play, 
  FileText, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Trophy, 
  User, 
  Mail, 
  MapPin, 
  Flame 
} from 'lucide-react';

export default function App() {
  const [profileSelected, setProfileSelected] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [entered, setEntered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleProfileSelect = () => {
    setProfileSelected(true);
    setShowIntroVideo(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          handleIntroEnd();
        });
      }
    }, 50);
  };

  const handleIntroEnd = () => {
    setShowIntroVideo(false);
    setEntered(true);
  };

  // 1. Netflix Profile Gate ("Who's watching?")
  if (!profileSelected) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '0.5px' }}>
          Who's watching?
        </h1>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Recruiter', color: 'rgba(229, 9, 20, 0.85)' },
            { label: 'Developer', color: 'rgba(0, 113, 235, 0.85)' },
            { label: 'Guest', color: 'rgba(43, 184, 114, 0.85)' },
          ].map((profile, i) => (
            <div
              key={i}
              onClick={handleProfileSelect}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                gap: '0.6rem',
                transition: 'transform 0.25s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
            >
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: profile.color,
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}>
                {profile.label[0]}
              </div>
              <span style={{ color: '#999', fontSize: '0.9rem', fontWeight: 500 }}>
                {profile.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Fullscreen Video Intro Screen
  if (showIntroVideo && !entered) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <video
          ref={videoRef}
          src="https://raw.githubusercontent.com/vigneshSuprithB/assets/main/netflix-intro.mp4"
          onEnded={handleIntroEnd}
          playsInline
          style={{ width: '100vw', height: '100vh', objectFit: 'contain' }}
        />
        <button
          onClick={handleIntroEnd}
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '25px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '8px 18px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 600,
            backdropFilter: 'blur(6px)'
          }}
        >
          Skip Intro
        </button>
      </div>
    );
  }

  // 3. Main Netflix Portfolio App
  return (
    <div className="animate-entrance" style={{ minHeight: '100vh', color: '#ffffff', paddingBottom: '6rem' }}>
      {/* Responsive Netflix Frosted Glass Navbar */}
      <nav className="nav-container">
        {/* Top Header Row */}
        <div className="nav-top-row">
          <span style={{ color: '#E50914', fontSize: '1.7rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
            VIGNESH
          </span>
          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
            <a 
              href={myPortfolio.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: '#ccc', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}
            >
              GitHub
            </a>
            <a 
              href={myPortfolio.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: '#ccc', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}
            >
              LinkedIn
            </a>
            <button
              onClick={() => {
                setProfileSelected(false);
                setEntered(false);
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                padding: '5px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              Switch
            </button>
          </div>
        </div>

        {/* Categories / Navigation Chips (Horizontally Scrollable on Mobile) */}
        <div className="nav-categories">
          <a href="#about" className="nav-chip">Home</a>
          <a href="#about-me" className="nav-chip">Overview</a>
          <a href="#projects" className="nav-chip">Episodes</a>
          <a href="#top-tech" className="nav-chip">Top 10</a>
          <a href="#background" className="nav-chip">History</a>
          <a href="#honors" className="nav-chip">Honors</a>
          <a href="#skills" className="nav-chip">Skills</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        <div className="hero-text-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{
              backgroundColor: 'rgba(229, 9, 20, 0.2)',
              color: '#E50914',
              padding: '3px 8px',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '1px',
              border: '1px solid rgba(229, 9, 20, 0.3)'
            }}>
              NETFLIX ORIGINAL
            </span>
            <span style={{ color: '#888', fontSize: '0.75rem', fontWeight: 600 }}>
              {myPortfolio.subtitle}
            </span>
          </div>

          <h1 className="hero-title">
            {myPortfolio.name}
          </h1>

          <p style={{ color: '#cccccc', fontSize: '1rem', lineHeight: '1.6', maxWidth: '580px', margin: '0 auto 1.75rem' }}>
            {myPortfolio.bio}
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '0.7rem 1.4rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <Play size={16} fill="#000" /> Episodes
            </a>
            <a
              href={myPortfolio.resumeUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '0.7rem 1.4rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <FileText size={16} /> CV
            </a>
          </div>
        </div>

        {/* Responsive Photo Card */}
        <div
          className="hero-image-card"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.6)',
            flexShrink: 0
          }}
        >
          <img
            src={myPortfolio.heroImage}
            alt={myPortfolio.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* About Me / Overview */}
      <section id="about-me" className="section-wrapper" style={{ maxWidth: '1150px', margin: '3rem auto 0' }}>
        <div
          className="netflix-card"
          style={{
            backgroundColor: 'rgba(24, 24, 27, 0.5)',
            backdropFilter: 'blur(14px)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1.5rem',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '0.5rem' }}>
            <User size={18} />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Series Overview & Storyline
            </span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Behind the Developer</h2>
          <p style={{ color: '#bbb', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            {myPortfolio.aboutExtended}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', fontSize: '0.8rem' }}>
            <MapPin size={15} color="#E50914" />
            <span>Based in {myPortfolio.location} • Actively Open to Opportunities</span>
          </div>
        </div>
      </section>

      {/* Projects / Episodes */}
      <section id="projects" className="section-wrapper" style={{ maxWidth: '1150px', margin: '3rem auto 0' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '0.75rem', marginBottom: '1.25rem', textAlign: 'left' }}>
          Season 1: Featured Projects
        </h2>
        <div className="two-col-grid">
          {myPortfolio.projects.map((proj, idx) => (
            <div
              key={idx}
              className="netflix-card"
              style={{
                backgroundColor: 'rgba(24, 24, 27, 0.55)',
                backdropFilter: 'blur(14px)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left'
              }}
            >
              <div>
                <span style={{ color: '#E50914', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  {proj.tagline}
                </span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.4rem 0' }}>{proj.title}</h3>
                <p style={{ color: '#999', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                  {proj.description}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#ccc',
                        fontSize: '0.7rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontWeight: 500
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Inspect Code <ExternalLink size={13} color="#E50914" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Top 10 Stack */}
      <section id="top-tech" className="section-wrapper" style={{ maxWidth: '1150px', margin: '3rem auto 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', textAlign: 'left' }}>
          <Flame size={20} color="#E50914" />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
            Top 10 Today in Tech Stack
          </h2>
        </div>
        <div className="top-tech-grid">
          {myPortfolio.topTech.map((item, idx) => (
            <div
              key={idx}
              className="netflix-card"
              style={{
                backgroundColor: 'rgba(24, 24, 27, 0.45)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <span style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: '#E50914',
                lineHeight: 1,
                letterSpacing: '-1px'
              }}>
                {idx + 1}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e5e5e5' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Background (Education & Experience) */}
      <section id="background" className="section-wrapper" style={{ maxWidth: '1150px', margin: '3rem auto 0' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '0.75rem', marginBottom: '1.25rem', textAlign: 'left' }}>
          Behind the Scenes: Background
        </h2>
        <div className="two-col-grid">
          {/* Education */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1rem' }}>
              <GraduationCap size={20} />
              <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>Education</h3>
            </div>
            {myPortfolio.education?.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{edu.period}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.82rem', margin: '3px 0 5px' }}>{edu.institution}</p>
                <p style={{ color: '#777', fontSize: '0.8rem', lineHeight: '1.4' }}>{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1rem' }}>
              <Briefcase size={20} />
              <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>Experience</h3>
            </div>
            {myPortfolio.experience?.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{exp.role}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{exp.period}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.82rem', margin: '3px 0 5px' }}>{exp.company}</p>
                <p style={{ color: '#777', fontSize: '0.8rem', lineHeight: '1.4' }}>{exp.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section id="honors" className="section-wrapper" style={{ maxWidth: '1150px', margin: '3rem auto 0' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '0.75rem', marginBottom: '1.25rem', textAlign: 'left' }}>
          Awards & Certifications
        </h2>
        <div className="two-col-grid">
          {/* Achievements */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1rem' }}>
              <Trophy size={20} />
              <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>Key Milestones</h3>
            </div>
            {myPortfolio.achievements?.map((ach, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{ach.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{ach.period}</span>
                </div>
                <p style={{ color: '#E50914', fontSize: '0.78rem', fontWeight: 600, margin: '2px 0 4px' }}>{ach.subtitle}</p>
                <p style={{ color: '#777', fontSize: '0.8rem', lineHeight: '1.4' }}>{ach.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1rem' }}>
              <Award size={20} />
              <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>Certifications</h3>
            </div>
            {myPortfolio.certifications?.map((cert, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{cert.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{cert.year}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.8rem', margin: '2px 0 2px' }}>{cert.issuer}</p>
                <span style={{ color: '#666', fontSize: '0.72rem', fontFamily: 'monospace' }}>ID: {cert.id}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills Cloud */}
      <section id="skills" className="section-wrapper" style={{ maxWidth: '1150px', margin: '3rem auto 0' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '0.75rem', marginBottom: '1.25rem', textAlign: 'left' }}>
          Additional Tech Universe
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {myPortfolio.skills.map((skill, idx) => (
            <span
              key={idx}
              className="skill-pill"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.45rem 0.9rem',
                borderRadius: '16px',
                fontSize: '0.8rem',
                color: '#e5e5e5',
                fontWeight: 500,
                cursor: 'default'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-wrapper" style={{ maxWidth: '1150px', margin: '4rem auto 0' }}>
        <div
          className="netflix-card"
          style={{
            backgroundColor: 'rgba(24, 24, 27, 0.6)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span style={{ color: '#E50914', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Production Inquiries
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0.4rem 0 0.8rem' }}>Ready to Collaborate?</h2>
          <p style={{ color: '#aaa', fontSize: '0.95rem', maxWidth: '480px', marginBottom: '1.5rem' }}>
            Interested in hiring for a role or discussing a project? Send a direct message.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={myPortfolio.socials.email}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#E50914',
                color: '#ffffff',
                padding: '0.75rem 1.6rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <Mail size={16} /> Send Email
            </a>
            <a
              href={myPortfolio.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '0.75rem 1.6rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}