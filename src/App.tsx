import React, { useState, useEffect } from "react";
import {
  Play,
  Info,
  ChevronRight,
  Mail,
  Volume2,
  VolumeX,
  Code2,
  Terminal,
  Layout,
  Database,
  Layers,
  Zap,
  Palette,
  Smartphone,
  Server,
  Network,
  Lock,
  GitBranch,
  Cloud,
  TerminalSquare,
  HardDrive,
  Award,
  ShieldCheck,
  BookOpen,
  Cpu,
  PlaySquare
} from "lucide-react";
import { portfolioData } from "./data";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Terminal: <Terminal size={20} />,
  Layout: <Layout size={20} />,
  Database: <Database size={20} />,
  Layers: <Layers size={20} />,
  Zap: <Zap size={20} />,
  Palette: <Palette size={20} />,
  Smartphone: <Smartphone size={20} />,
  Server: <Server size={20} />,
  Network: <Network size={20} />,
  Lock: <Lock size={20} />,
  GitBranch: <GitBranch size={20} />,
  Cloud: <Cloud size={20} />,
  TerminalSquare: <TerminalSquare size={20} />,
  HardDrive: <HardDrive size={20} />,
  Award: <Award size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  BookOpen: <BookOpen size={20} />,
  Cpu: <Cpu size={20} />,
  PlaySquare: <PlaySquare size={20} />
};

export default function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isIntroAnimating, setIsIntroAnimating] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] = useState<string>("Recruiter");
  const [activeSkillTab, setActiveSkillTab] = useState<string>("languages");
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Red mouse follower
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSelectProfile = (name: string) => {
    setSelectedProfile(name);

    // Play netflix.mp3 from public folder
    if (!isMuted && portfolioData.hero.audio) {
      const audio = new Audio(portfolioData.hero.audio);
      audio.volume = 0.8;
      audio.play().catch((err) => console.log("Audio play error:", err));
    }

    // 3-second cinematic zoom intro
    setIsIntroAnimating(true);
    setTimeout(() => {
      setIsIntroAnimating(false);
      setHasEntered(true);
    }, 3000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#111111", color: "#ffffff", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* 🔴 RED GLOWING MOUSE POINTER */}
      <div
        style={{
          position: "fixed",
          top: mousePos.y - 6,
          left: mousePos.x - 6,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#E50914",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 16px 4px rgba(229, 9, 20, 0.8)",
          transition: "transform 0.05s ease-out"
        }}
      />
      <div
        style={{
          position: "fixed",
          top: mousePos.y - 20,
          left: mousePos.x - 20,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid rgba(229, 9, 20, 0.4)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.15s ease-out, top 0.15s ease-out, left 0.15s ease-out"
        }}
      />

      <style>{`
        @keyframes netflixZoom {
          0% { transform: scale(0.6); opacity: 0; filter: blur(10px); }
          50% { transform: scale(1.1); opacity: 1; filter: blur(0px); letter-spacing: 12px; }
          100% { transform: scale(1.4); opacity: 0; filter: blur(6px); letter-spacing: 20px; }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .portfolio-desktop-nav {
            display: none !important;
          }
          .hero-flex-wrapper {
            flex-direction: column !important;
            text-align: center !important;
          }
          .hero-photo-wrapper {
            margin: 24px auto 0 !important;
            width: 240px !important;
            height: 300px !important;
          }
        }
      `}</style>

      {/* 🎬 3-SECOND CINEMATIC INTRO ANIMATION */}
      {isIntroAnimating && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#000000",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeInOut 3s forwards"
        }}>
          <h1 style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 900,
            color: "#E50914",
            letterSpacing: "6px",
            animation: "netflixZoom 3s ease-out forwards",
            textShadow: "0 0 40px rgba(229, 9, 20, 0.8)"
          }}>
            VIGNESH
          </h1>
          <p style={{
            marginTop: "16px",
            color: "#888",
            letterSpacing: "4px",
            fontSize: "13px",
            textTransform: "uppercase"
          }}>
            Original Portfolio Experience
          </p>
        </div>
      )}

      {/* PROFILE GATE */}
      {!hasEntered && !isIntroAnimating && (
        <div style={{
          minHeight: "100vh",
          background: "radial-gradient(circle at center, #1b0204 0%, #080808 80%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px"
        }}>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: "48px"
          }}>
            Who's watching?
          </h1>

          <div style={{
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "700px"
          }}>
            {[
              { name: "Recruiter", color: "#E50914", bg: "#B81D24" },
              { name: "Tech Lead", color: "#1E88E5", bg: "#1565C0" },
              { name: "Developer", color: "#43A047", bg: "#2E7D32" },
              { name: "Guest", color: "#FB8C00", bg: "#E65100" }
            ].map((profile) => (
              <div
                key={profile.name}
                onClick={() => handleSelectProfile(profile.name)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer"
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "8px",
                    background: `linear-gradient(135deg, ${profile.color}, ${profile.bg})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "42px",
                    fontWeight: 800,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                    transition: "transform 0.2s ease, border 0.2s ease",
                    border: "3px solid transparent"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.06)";
                    e.currentTarget.style.border = "3px solid #ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.border = "3px solid transparent";
                  }}
                >
                  {profile.name[0]}
                </div>
                <span style={{ color: "#aaa", fontSize: "16px" }}>{profile.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleSelectProfile("Recruiter")}
            style={{
              marginTop: "60px",
              background: "transparent",
              color: "#888",
              border: "1px solid #555",
              padding: "10px 28px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "4px"
            }}
          >
            Manage Profiles
          </button>
        </div>
      )}

      {/* MAIN PORTFOLIO */}
      {hasEntered && (
        <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
          {/* Header */}
          <header style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "64px",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 clamp(16px, 4vw, 48px)",
            background: "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0) 100%)",
            backdropFilter: "blur(12px)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", minWidth: 0, flexShrink: 1 }}>
              <span
                style={{
                  color: "#E50914",
                  fontSize: "clamp(20px, 4vw, 26px)",
                  fontWeight: 900,
                  letterSpacing: "2px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
                onClick={() => scrollTo("hero")}
              >
                VIGNESH
              </span>

              <nav
                style={{
                  display: "flex",
                  gap: "18px",
                  fontSize: "14px",
                  color: "#e5e5e5",
                  whiteSpace: "nowrap"
                }}
                className="portfolio-desktop-nav"
              >
                <span style={{ cursor: "pointer" }} onClick={() => scrollTo("hero")}>Home</span>
                <span style={{ cursor: "pointer" }} onClick={() => scrollTo("story")}>The Story</span>
                <span style={{ cursor: "pointer" }} onClick={() => scrollTo("skills")}>Skills</span>
                <span style={{ cursor: "pointer" }} onClick={() => scrollTo("projects")}>Projects</span>
                <span style={{ cursor: "pointer" }} onClick={() => scrollTo("contact")}>Contact</span>
              </nav>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
              <button
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <div
                onClick={() => setHasEntered(false)}
                title="Switch profile"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                  background: "#E50914",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                {selectedProfile[0]}
              </div>
            </div>
          </header>

          {/* 1. HERO BILLBOARD WITH YOUR PHOTO */}
          <section
            id="hero"
            style={{
              position: "relative",
              minHeight: "88vh",
              display: "flex",
              alignItems: "center",
              padding: "100px clamp(16px, 5vw, 64px) 40px",
              background: "linear-gradient(to right, #000 30%, rgba(0,0,0,0.7) 70%, transparent 100%), radial-gradient(circle at 85% 35%, #2a0306 0%, #111111 75%)"
            }}
          >
            <div
              className="hero-flex-wrapper"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                zIndex: 10,
                gap: "32px"
              }}
            >
              <div style={{ maxWidth: "620px" }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#E50914",
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "4px",
                  marginBottom: "12px"
                }}>
                  <span>{portfolioData.hero.badge}</span>
                </div>

                <h1 style={{
                  fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-1.5px",
                  margin: "0 0 16px 0",
                  textTransform: "uppercase",
                  textShadow: "0 4px 20px rgba(0,0,0,0.8)"
                }}>
                  {portfolioData.hero.title}
                </h1>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "20px",
                  flexWrap: "wrap"
                }}>
                  <span style={{ color: "#46d369" }}>{portfolioData.hero.matchScore}</span>
                  <span style={{ color: "#999" }}>{portfolioData.hero.year}</span>
                  <span style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    padding: "1px 6px",
                    borderRadius: "2px",
                    fontSize: "12px"
                  }}>
                    {portfolioData.hero.rating}
                  </span>
                  <span style={{ color: "#999" }}>{portfolioData.hero.seasons}</span>
                  <span style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    padding: "1px 5px",
                    borderRadius: "2px",
                    fontSize: "11px"
                  }}>
                    {portfolioData.hero.quality}
                  </span>
                </div>

                <p style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#d2d2d2",
                  marginBottom: "32px"
                }}>
                  {portfolioData.hero.synopsis}
                </p>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <button
                    onClick={() => scrollTo("projects")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "none",
                      borderRadius: "6px",
                      padding: "12px 28px",
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                  >
                    <Play fill="#000" size={18} /> Play Episodes
                  </button>

                  <button
                    onClick={() => scrollTo("story")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "rgba(109, 109, 110, 0.7)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "12px 28px",
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer",
                      backdropFilter: "blur(6px)"
                    }}
                  >
                    <Info size={18} /> More Info
                  </button>
                </div>
              </div>

              {/* Your photo from public/my-photo.jpg */}
              <div
                className="hero-photo-wrapper"
                style={{
                  position: "relative",
                  width: "340px",
                  height: "440px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
                  border: "2px solid rgba(255, 255, 255, 0.12)",
                  flexShrink: 0
                }}
              >
                <img
                  src={portfolioData.hero.photo}
                  alt={portfolioData.hero.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top"
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(17,17,17,0.85) 0%, transparent 40%), linear-gradient(to right, rgba(17,17,17,0.5) 0%, transparent 25%)"
                }} />
              </div>
            </div>
          </section>

          {/* 2. CONTINUE EXPLORING */}
          <section style={{ padding: "10px clamp(16px, 5vw, 64px) 40px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px", color: "#e5e5e5" }}>
              Continue Exploring
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px"
            }}>
              {portfolioData.exploreCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => scrollTo(card.id)}
                  style={{
                    background: "rgba(35, 35, 35, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "8px",
                    padding: "20px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{card.label}</div>
                    <div style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>{card.subtitle}</div>
                  </div>
                  <ChevronRight size={20} color="#E50914" />
                </div>
              ))}
            </div>
          </section>

          {/* 3. THE FULL STORY */}
          <section id="story" style={{ padding: "40px clamp(16px, 5vw, 64px)" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "20px", color: "#e5e5e5" }}>
              The Full Story
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              <div style={{
                background: "rgba(25, 25, 25, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "24px"
              }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#E50914", marginBottom: "16px" }}>
                  Education Timeline
                </h3>
                {portfolioData.story.education.map((item, idx) => (
                  <div key={idx} style={{ marginBottom: "20px", borderLeft: "2px solid #E50914", paddingLeft: "16px" }}>
                    <div style={{ fontSize: "16px", fontWeight: 700 }}>{item.degree}</div>
                    <div style={{ fontSize: "13px", color: "#aaa", marginTop: "2px" }}>{item.institution} • {item.period}</div>
                    <div style={{ fontSize: "14px", color: "#ccc", marginTop: "8px", lineHeight: 1.5 }}>{item.details}</div>
                  </div>
                ))}
              </div>

              <div style={{
                background: "rgba(25, 25, 25, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "24px"
              }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#E50914", marginBottom: "16px" }}>
                  Focus Areas & Certifications
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {portfolioData.story.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        background: "rgba(40,40,40,0.5)",
                        padding: "14px 18px",
                        borderRadius: "8px"
                      }}
                    >
                      <div style={{ color: "#E50914" }}>
                        {iconMap[item.icon] || <Award size={20} />}
                      </div>
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: 700 }}>{item.title}</div>
                        <div style={{ fontSize: "13px", color: "#888" }}>{item.org} • {item.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. MY SKILL UNIVERSE */}
          <section id="skills" style={{ padding: "40px clamp(16px, 5vw, 64px)" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "20px", color: "#e5e5e5" }}>
              My Skill Universe
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)) 3fr",
              gap: "24px",
              background: "rgba(20, 20, 20, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              padding: "24px"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {portfolioData.skillCategories.map((cat) => {
                  const active = cat.id === activeSkillTab;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveSkillTab(cat.id)}
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        borderRadius: "8px",
                        border: "none",
                        background: active ? "#E50914" : "rgba(35, 35, 35, 0.6)",
                        color: active ? "#ffffff" : "#aaa",
                        fontWeight: 700,
                        fontSize: "14px",
                        letterSpacing: "1px",
                        cursor: "pointer"
                      }}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "16px"
              }}>
                {(portfolioData.skillCategories.find((c) => c.id === activeSkillTab) || portfolioData.skillCategories[0]).skills.map((skill, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(30, 30, 30, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "8px",
                      padding: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px"
                    }}
                  >
                    <div style={{ color: "#E50914" }}>
                      {iconMap[skill.icon] || <Zap size={20} />}
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{skill.name}</div>
                      <div style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>{skill.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. FEATURED EPISODES */}
          <section id="projects" style={{ padding: "40px clamp(16px, 5vw, 64px)" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "20px", color: "#e5e5e5" }}>
              Season 1: Featured Episodes
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px"
            }}>
              {portfolioData.projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    background: "rgba(25, 25, 25, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div style={{
                    height: "160px",
                    background: "linear-gradient(135deg, #1f0103 0%, #300c0f 50%, #111 100%)",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{
                        background: "#E50914",
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "3px"
                      }}>
                        {project.badge || "ORIGINAL"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#aaa" }}>{project.season}</span>
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, margin: 0 }}>{project.title}</h3>
                  </div>

                  <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "10px", fontSize: "12px", marginBottom: "12px" }}>
                      <span style={{ color: "#46d369", fontWeight: 700 }}>{project.match}</span>
                      <span style={{ color: "#888" }}>{project.duration}</span>
                    </div>

                    <p style={{ fontSize: "14px", color: "#bbb", lineHeight: 1.5, flex: 1, marginBottom: "16px" }}>
                      {project.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            fontSize: "12px",
                            padding: "3px 8px",
                            borderRadius: "4px",
                            color: "#ccc"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "12px" }}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          flex: 1,
                          textAlign: "center",
                          background: "rgba(255,255,255,0.1)",
                          color: "#fff",
                          textDecoration: "none",
                          padding: "10px",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px"
                        }}
                      >
                        <Code2 size={16} /> Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            flex: 1,
                            textAlign: "center",
                            background: "#E50914",
                            color: "#fff",
                            textDecoration: "none",
                            padding: "10px",
                            borderRadius: "6px",
                            fontSize: "13px",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px"
                          }}
                        >
                          <Play size={14} fill="#fff" /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. TO BE CONTINUED... OUTRO */}
          <section
            id="contact"
            style={{
              padding: "80px clamp(16px, 5vw, 64px) 100px",
              textAlign: "center",
              background: "linear-gradient(180deg, #111111 0%, #1a0204 100%)",
              borderTop: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            <div style={{
              color: "#E50914",
              fontWeight: 800,
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "12px"
            }}>
              SEASON FINALE
            </div>

            <h2 style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-1px",
              marginBottom: "16px"
            }}>
              TO BE CONTINUED...
            </h2>

            <p style={{
              color: "#aaa",
              maxWidth: "520px",
              margin: "0 auto 36px",
              fontSize: "16px",
              lineHeight: 1.6
            }}>
              Looking to collaborate on exciting web applications or explore graduate opportunities?
            </p>

            <a
              href="mailto:vigneshsuprithb@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#E50914",
                color: "#ffffff",
                textDecoration: "none",
                padding: "14px 36px",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "1px",
                boxShadow: "0 6px 20px rgba(229, 9, 20, 0.4)"
              }}
            >
              <Mail size={18} /> GET IN TOUCH
            </a>

            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginTop: "40px"
            }}>
              <a
                href="https://github.com/vigneshSuprithB"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#aaa", textDecoration: "none" }}
                title="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#aaa", textDecoration: "none" }}
                title="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <div style={{ marginTop: "48px", fontSize: "12px", color: "#555" }}>
              © 2026 Vignesh Suprith. All rights reserved. Netflix is a registered trademark of Netflix, Inc.
            </div>
          </section>
        </div>
      )}
    </div>
  );
}