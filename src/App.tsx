import { useState } from 'react';
import { myPortfolio } from './data';
import { Play, FileText, ExternalLink, GraduationCap, Briefcase } from 'lucide-react';

export default function App() {
  const [entered, setEntered] = useState(false);

  // Netflix Profile Gate
  if (!entered) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#141414',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2.5rem', letterSpacing: '0.5px' }}>
          Who's watching?
        </h1>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Recruiter', color: '#E50914' },
            { label: 'Developer', color: '#0071eb' },
            { label: 'Guest', color: '#2bb872' },
          ].map((profile, i) => (
            <div
              key={i}
              onClick={() => setEntered(true)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                gap: '0.8rem',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
            >
              <div style={{
                width: '130px',
                height: '130px',
                backgroundColor: profile.color,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.8rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}>
                {profile.label[0]}
              </div>
              <span style={{ color: '#808080', fontSize: '1rem', fontWeight: 500 }}>
                {profile.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Main Netflix Portfolio View
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#141414',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '5rem'
    }}>
      {/* Sticky Top Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(20, 20, 20, 0.95)',
        backdropFilter: 'blur(8px)',
        padding: '1.2rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #222'
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
              background: '#2b2b2b',
              color: '#fff',
              border: '1px solid #444',
              padding: '6px 14px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 500
            }}
          >
            Exit
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
              padding: '3px 8px',
              borderRadius: '3px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '1px'
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
                padding: '0.75rem 1.75rem',
                borderRadius: '4px',
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
                backgroundColor: 'rgba(109, 109, 110, 0.7)',
                color: '#ffffff',
                padding: '0.75rem 1.75rem',
                borderRadius: '4px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <FileText size={18} /> View Resume
            </a>
          </div>
        </div>

        {/* Hero Photo Card */}
        <div style={{
          width: '280px',
          height: '360px',
          backgroundColor: '#1c1c1c',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #333',
          boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
          flexShrink: 0
        }}>
          <img
            src={myPortfolio.heroImage}
            alt={myPortfolio.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
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
                backgroundColor: '#181818',
                padding: '1.75rem',
                borderRadius: '8px',
                border: '1px solid #282828',
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
                        backgroundColor: '#262626',
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
          <div style={{ backgroundColor: '#181818', padding: '1.5rem', borderRadius: '8px', border: '1px solid #282828', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1rem' }}>
              <GraduationCap size={20} />
              <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>Education</h3>
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
          <div style={{ backgroundColor: '#181818', padding: '1.5rem', borderRadius: '8px', border: '1px solid #282828', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E50914', marginBottom: '1rem' }}>
              <Briefcase size={20} />
              <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>Experience</h3>
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

      {/* Tech Skills */}
      <section id="skills" style={{ maxWidth: '1150px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          Tech Universe
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {myPortfolio.skills.map((skill, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: '#1f1f1f',
                border: '1px solid #333',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                color: '#e0e0e0',
                fontWeight: 500
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