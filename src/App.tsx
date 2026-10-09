import { useState } from 'react';
import { myPortfolio } from './data';
import { Play, FileText, ExternalLink } from 'lucide-react';

export default function App() {
  const [entered, setEntered] = useState(false);

  // Netflix Profile Gate ("Who's watching?")
  if (!entered) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#141414', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 500, marginBottom: '2rem' }}>Who's watching?</h1>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Recruiter', color: '#E50914' },
            { label: 'Developer', color: '#0071eb' },
            { label: 'Guest', color: '#2bb872' },
          ].map((profile, i) => (
            <div
              key={i}
              onClick={() => setEntered(true)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', gap: '0.75rem' }}
            >
              <div style={{ width: '120px', height: '120px', backgroundColor: profile.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
                {profile.label[0]}
              </div>
              <span style={{ color: '#aaa', fontSize: '1rem' }}>{profile.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Netflix Main Page
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#141414', color: '#fff', fontFamily: 'sans-serif', paddingBottom: '4rem' }}>
      {/* Navbar */}
      <nav style={{ padding: '1.25rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222' }}>
        <span style={{ color: '#E50914', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '1px' }}>VIGNESH</span>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>

          <button onClick={() => setEntered(false)} style={{ background: '#333', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>Exit</button>
        </div>
      </nav>

      {/* Hero Banner */}
      <div style={{ padding: '3.5rem 2.5rem', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 500px' }}>
          <span style={{ color: '#E50914', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px' }}>SERIES PREMIERE</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, margin: '0.5rem 0' }}>{myPortfolio.name}</h1>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>{myPortfolio.subtitle}</p>
          <p style={{ color: '#ddd', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>{myPortfolio.bio}</p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fff', color: '#000', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>
              <Play size={18} fill="#000" /> View Episodes
            </a>
            <a href={myPortfolio.resumeUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(109, 109, 110, 0.7)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>
              <FileText size={18} /> Resume
            </a>
          </div>
        </div>

        {/* Profile Photo Card */}
        <div style={{ width: '260px', height: '340px', backgroundColor: '#222', borderRadius: '12px', overflow: 'hidden', border: '2px solid #333' }}>
          <img 
            src={myPortfolio.heroImage} 
            alt={myPortfolio.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }} 
          />
        </div>
      </div>

      {/* Projects Row */}
      <div id="projects" style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 2.5rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem' }}>Episodes: Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {myPortfolio.projects.map((proj, idx) => (
            <div key={idx} style={{ backgroundColor: '#1f1f1f', padding: '1.5rem', borderRadius: '8px', border: '1px solid #2d2d2d' }}>
              <span style={{ color: '#E50914', fontSize: '0.8rem', fontWeight: 700 }}>{proj.tagline}</span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{proj.title}</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.5' }}>{proj.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                {proj.tech.map((t, i) => (
                  <span key={i} style={{ backgroundColor: '#2a2a2a', color: '#ddd', fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px' }}>{t}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: '#E50914', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Watch Source Code <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Row */}
      <div style={{ maxWidth: '1100px', margin: '3rem auto', padding: '0 2.5rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, borderLeft: '4px solid #E50914', paddingLeft: '1rem', marginBottom: '1.5rem' }}>My Tech Universe</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {myPortfolio.skills.map((skill, idx) => (
            <span key={idx} style={{ backgroundColor: '#222', border: '1px solid #333', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#eee' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}