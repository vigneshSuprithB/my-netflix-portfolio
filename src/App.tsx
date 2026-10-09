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

  // 1. Netflix Profile Gate
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
        <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2.5rem', letterSpacing: '0.5px' }}>
          Who's watching?
        </h1>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                gap: '0.8rem',
                transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
            >
              <div style={{
                width: '130px',
                height: '130px',
                backgroundColor: profile.color,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.8rem',
                fontWeight: 'bold',
                boxShadow: '0 12px 30px rgba(0,0,0,0.5)'
              }}>
                {profile.label[0]}
              </div>
              <span style={{ color: '#999', fontSize: '1rem', fontWeight: 500 }}>
                {profile.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Video Intro Screen
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
            bottom: '40px',
            right: '40px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
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
      {/* Sticky Glass Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(12, 12, 12, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '1.2rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{ color: '#E50914', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
            VIGNESH
          </span>
          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: '#e5e5e5', textDecoration: 'none' }}>Home</a>
            <a href="#about-me" style={{ color: '#aaa', textDecoration: 'none' }}>Overview</a>
            <a href="#projects" style={{ color: '#aaa', textDecoration: 'none' }}>Episodes</a>
            <a href="#top-tech" style={{ color: '#aaa', textDecoration: 'none' }}>Top 10</a>
            <a href="#background" style={{ color: '#aaa', textDecoration: 'none' }}>History</a>
            <a href="#honors" style={{ color: '#aaa', textDecoration: 'none' }}>Honors</a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a href={myPortfolio.socials.github} target="_blank" rel="noreferrer" style={{ color: '#aaa', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
            GitHub
          </a>
          <a href={myPortfolio.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: '#aaa', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
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
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 500
            }}
          >
            Switch Profile
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{
        maxWidth: '1150px',
        margin: '0 auto',
        padding: '4rem 2rem 3rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3.5rem',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ flex: '1 1 520px', textAlign: 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{
              backgroundColor: 'rgba(229, 9, 20, 0.2)',
              color: '#E50914',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '1px',
              border: '1px solid rgba(229, 9, 20, 0.3)'
            }}>
              NETFLIX ORIGINAL
            </span>
            <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: 600 }}>
              {myPortfolio.subtitle}
            </span>
          </div>

          <h1 style={{ fontSize: '3.8rem', fontWeight: 900, lineHeight: 1.1, margin: '0 0 1.25rem' }}>
            {myPortfolio.name}
          </h1>

          <p style={{ color: '#cccccc', fontSize: '1.15rem', lineHeight: '1.6', maxWidth: '580px', marginBottom: '2rem' }}>
            {myPortfolio.bio}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '0.8rem 1.8rem',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <Play size={18} fill="#000" /> View Episodes
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
                padding: '0.8rem 1.8rem',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <FileText size={18} /> View CV
            </a>
          </div>
        </div>

        {/* Frosted Photo Card */}
        <div style={{
          width: '280px',
          height: '360px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          flexShrink: 0
        }}>
          <img
            src={myPortfolio.heroImage}
            alt={myPortfolio.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* NEW: About Me / Plot Summary */}
      <section id="about-me" style={{ maxWidth: '1150px', margin: '3rem auto 0', padding: '0 2rem' }}>
        <div
          className="netflix-card"
          style={{
            backgroundColor: 'rgba(24, 24, 27, 0.5)',
            backdropFilter: 'blur(14px)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '2rem 2.5rem',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '0.75rem' }}>
            <User size={20} />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Series Overview & Storyline
            </span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Behind the Developer</h2>
          <p style={{ color: '#bbb', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '900px', marginBottom: '1.5rem' }}>
            {myPortfolio.aboutExtended}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', fontSize: '0.85rem' }}>
            <MapPin size={16} color="#E50914" />
            <span>Based in {myPortfolio.location} • Actively Open to Software Engineering Opportunities</span>
          </div>
        </div>
      </section>

      {/* Featured Projects / Episodes */}
      <section id="projects" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Season 1: Featured Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {myPortfolio.projects.map((proj, idx) => (
            <div
              key={idx}
              className="netflix-card"
              style={{
                backgroundColor: 'rgba(24, 24, 27, 0.55)',
                backdropFilter: 'blur(14px)',
                padding: '1.8rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left'
              }}
            >
              <div>
                <span style={{ color: '#E50914', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  {proj.tagline}
                </span>
                <h3 style={{ fontSize: '1.35rem', margin: '0.5rem 0' }}>{proj.title}</h3>
                <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  {proj.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#ccc',
                        fontSize: '0.75rem',
                        padding: '4px 10px',
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
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Inspect Code <ExternalLink size={14} color="#E50914" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Top 10 Today Tech Stack */}
      <section id="top-tech" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <Flame size={24} color="#E50914" />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: 0 }}>
            Top 10 Today in Tech Stack
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {myPortfolio.topTech.map((item, idx) => (
            <div
              key={idx}
              className="netflix-card"
              style={{
                backgroundColor: 'rgba(24, 24, 27, 0.45)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#E50914',
                lineHeight: 1,
                letterSpacing: '-2px'
              }}>
                {idx + 1}
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#e5e5e5' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes: Education & Experience */}
      <section id="background" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Behind the Scenes: Background
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Education */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.8rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1.25rem' }}>
              <GraduationCap size={22} />
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Education</h3>
            </div>
            {myPortfolio.education?.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{edu.period}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '4px 0 6px' }}>{edu.institution}</p>
                <p style={{ color: '#777', fontSize: '0.82rem', lineHeight: '1.4' }}>{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.8rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1.25rem' }}>
              <Briefcase size={22} />
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Experience</h3>
            </div>
            {myPortfolio.experience?.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{exp.role}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{exp.period}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '4px 0 6px' }}>{exp.company}</p>
                <p style={{ color: '#777', fontSize: '0.82rem', lineHeight: '1.4' }}>{exp.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Achievements & Certifications ("Awards & Nominations") */}
      <section id="honors" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Awards & Certifications
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Achievements */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.8rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1.25rem' }}>
              <Trophy size={22} />
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Key Milestones</h3>
            </div>
            {myPortfolio.achievements?.map((ach, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{ach.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{ach.period}</span>
                </div>
                <p style={{ color: '#E50914', fontSize: '0.8rem', fontWeight: 600, margin: '2px 0 4px' }}>{ach.subtitle}</p>
                <p style={{ color: '#777', fontSize: '0.82rem', lineHeight: '1.4' }}>{ach.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div
            className="netflix-card"
            style={{
              backgroundColor: 'rgba(24, 24, 27, 0.45)',
              backdropFilter: 'blur(12px)',
              padding: '1.8rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1.25rem' }}>
              <Award size={22} />
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>Official Certifications</h3>
            </div>
            {myPortfolio.certifications?.map((cert, idx) => (
              <div key={idx} style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600 }}>{cert.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#888' }}>{cert.year}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.82rem', margin: '3px 0 2px' }}>{cert.issuer}</p>
                <span style={{ color: '#666', fontSize: '0.75rem', fontFamily: 'monospace' }}>ID: {cert.id}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Skills Cloud */}
      <section id="skills" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Additional Tech Universe
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {myPortfolio.skills.map((skill, idx) => (
            <span
              key={idx}
              className="skill-pill"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
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

      {/* NEW: Get in Touch / Press Inquiries */}
      <section style={{ maxWidth: '1150px', margin: '5rem auto 0', padding: '0 2rem' }}>
        <div
          className="netflix-card"
          style={{
            backgroundColor: 'rgba(24, 24, 27, 0.6)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '3rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span style={{ color: '#E50914', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Production Inquiries
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, margin: '0.5rem 0 1rem' }}>Ready to Collaborate?</h2>
          <p style={{ color: '#aaa', fontSize: '1.05rem', maxWidth: '550px', marginBottom: '2rem' }}>
            Interested in hiring for a role, discussing a software project, or viewing code repositories? Send a direct message.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={myPortfolio.socials.email}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#E50914',
                color: '#ffffff',
                padding: '0.85rem 2rem',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <Mail size={18} /> Send Email
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
                padding: '0.85rem 2rem',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}