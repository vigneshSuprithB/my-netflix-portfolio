import { useState } from 'react';
import { myPortfolio } from './data';
import { Play, FileText, ExternalLink, GraduationCap, Briefcase } from 'lucide-react';

export default function App() {
  const [entered, setEntered] = useState(false);

  // Play local authentic Netflix sound
  const handleProfileSelect = () => {
    try {
      const audio = new Audio('/netflix.mp3');
      audio.volume = 0.7;
      audio.play().catch(() => {
        // Fallback if browser blocks sound
      });
    } catch {
      // Ignore audio errors
    }
    setEntered(true);
  };

  // Netflix Profile Selection Screen ("Who's watching?")
  if (!entered) {
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
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
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

  // Main Dark Glass Netflix Portfolio
  return (
    <div style={{ minHeight: '100vh', color: '#ffffff', paddingBottom: '5rem' }}>
      {/* Frosted Glass Navbar */}
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
          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.9rem' }}>
            <a href="#about" style={{ color: '#e5e5e5', textDecoration: 'none' }}>Home</a>
            <a href="#projects" style={{ color: '#aaa', textDecoration: 'none' }}>Episodes</a>
            <a href="#background" style={{ color: '#aaa', textDecoration: 'none' }}>Background</a>
            <a href="#skills" style={{ color: '#aaa', textDecoration: 'none' }}>Skills</a>
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
            onClick={() => setEntered(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
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
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)'
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
                WebkitBackdropFilter: 'blur(10px)',
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

        {/* Frosted Glass Photo Card */}
        <div style={{
          width: '280px',
          height: '360px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          flexShrink: 0
        }}>
          <img
            src={myPortfolio.heroImage}
            alt={myPortfolio.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* Featured Projects / Episodes */}
      <section id="projects" style={{ maxWidth: '1150px', margin: '3rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Season 1: Featured Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {myPortfolio.projects.map((proj, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(24, 24, 27, 0.55)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                padding: '1.8rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
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

      {/* Education & Experience Rows */}
      <section id="background" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Behind the Scenes: Background
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Education */}
          <div style={{
            backgroundColor: 'rgba(24, 24, 27, 0.45)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '1.8rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            textAlign: 'left'
          }}>
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
          <div style={{
            backgroundColor: 'rgba(24, 24, 27, 0.45)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '1.8rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            textAlign: 'left'
          }}>
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

      {/* Glass Tech Skills */}
      <section id="skills" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Tech Universe
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {myPortfolio.skills.map((skill, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.6rem 1.2rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                color: '#e5e5e5',
                fontWeight: 500,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}