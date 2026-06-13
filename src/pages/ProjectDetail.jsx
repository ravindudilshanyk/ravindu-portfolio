import { useParams, useNavigate } from "react-router-dom";
import { projects, workExperience } from "../data/portfolio";

function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

export default function ProjectDetail() {
  const { num } = useParams();
  const navigate = useNavigate();

  // Search in both projects and workExperience
  const project =
    projects.find((p) => p.num === num) ||
    workExperience.find((p) => p.slug === num);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg)",
          color: "var(--muted)",
          fontFamily: "var(--font-mono)",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "var(--red)",
            fontFamily: "var(--font-display)",
          }}
        >
          404
        </div>
        <div style={{ marginBottom: 24 }}>Project not found</div>
        <button className="btn-outline" onClick={() => navigate("/#projects")}>
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  const videoId = getYouTubeId(project.demo);

  return (
    <div
      style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: 80 }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(10,8,8,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 48px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--muted)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          ← Back
        </button>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            color: "var(--red)",
            letterSpacing: 2,
          }}
        >
          RDK
        </div>
        <div style={{ width: 140 }} />
      </div>

      <div
        style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 48px 96px" }}
      >
        {/* ── Project header ── */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--red)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1,
                background: "var(--red)",
                display: "inline-block",
              }}
            />
            {project.type || project.badge} · {project.period}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1,
              letterSpacing: 2,
              color: "var(--text)",
              marginBottom: 12,
            }}
          >
            {project.name.toUpperCase()}
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: 680,
              marginBottom: 24,
            }}
          >
            {project.desc}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 28,
            }}
          >
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--red)",
                  background: "var(--red-glow)",
                  border: "1px solid var(--red-deep)",
                  padding: "4px 12px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {project.repo && (
              <a
                className="btn-primary"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            )}
            {project.demo && (
              <a
                className="btn-outline"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                ▶ Watch on YouTube
              </a>
            )}
          </div>
        </div>

        {/* ── Video player ── */}
        {videoId ? (
          <div style={{ marginBottom: 56 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 1,
                  background: "var(--border)",
                  display: "inline-block",
                }}
              />
              Demo Video
            </div>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                border: "1px solid var(--border)",
                borderTop: "2px solid var(--red)",
                background: "var(--bg2)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
                title={project.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              border: "1px solid var(--border)",
              borderTop: "2px solid var(--faint)",
              background: "var(--bg2)",
              padding: "48px 32px",
              textAlign: "center",
              marginBottom: 56,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--faint)",
              }}
            >
              No demo video available for this project yet
            </div>
          </div>
        )}

        {/* ── Highlights ── */}
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 20,
                height: 1,
                background: "var(--border)",
                display: "inline-block",
              }}
            />
            Key Features
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 2,
              background: "var(--border)",
            }}
          >
            {project.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg2)",
                  padding: "18px 20px",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--red)",
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {h}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Other projects ── */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 20,
                height: 1,
                background: "var(--border)",
                display: "inline-block",
              }}
            />
            Other Projects
          </div>
          <div
            style={{
              display: "flex",
              gap: 2,
              background: "var(--border)",
              flexWrap: "wrap",
            }}
          >
            {/* Work experience entries */}
            {workExperience
              .filter((p) => p.slug !== num)
              .map((p) => (
                <button
                  key={p.slug}
                  onClick={() => navigate(`/project/${p.slug}`)}
                  style={{
                    flex: 1,
                    minWidth: 160,
                    background: "var(--bg2)",
                    border: "none",
                    cursor: "pointer",
                    padding: "16px 20px",
                    textAlign: "left",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--surface)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--bg2)")
                  }
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--red)",
                      marginBottom: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Freelance
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text)",
                      fontWeight: 600,
                    }}
                  >
                    {p.name}
                  </div>
                  {p.demo && (
                    <div
                      style={{
                        fontSize: 10,
                        color: "var(--red)",
                        fontFamily: "var(--font-mono)",
                        marginTop: 4,
                      }}
                    >
                      ▶ has demo
                    </div>
                  )}
                </button>
              ))}
            {/* Regular projects */}
            {projects
              .filter((p) => p.num !== num)
              .map((p) => (
                <button
                  key={p.num}
                  onClick={() => navigate(`/project/${p.num}`)}
                  style={{
                    flex: 1,
                    minWidth: 160,
                    background: "var(--bg2)",
                    border: "none",
                    cursor: "pointer",
                    padding: "16px 20px",
                    textAlign: "left",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--surface)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--bg2)")
                  }
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 11,
                      color: "var(--red)",
                      marginBottom: 4,
                    }}
                  >
                    {p.num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text)",
                      fontWeight: 600,
                    }}
                  >
                    {p.name}
                  </div>
                  {p.demo && (
                    <div
                      style={{
                        fontSize: 10,
                        color: "var(--red)",
                        fontFamily: "var(--font-mono)",
                        marginTop: 4,
                      }}
                    >
                      ▶ has demo
                    </div>
                  )}
                </button>
              ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #project-detail > div:last-child { padding: 32px 20px 64px !important; }
        }
      `}</style>
    </div>
  );
}
