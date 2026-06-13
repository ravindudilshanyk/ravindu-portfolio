import { experience, workExperience } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const ref = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section id="experience">
      <div className="section-wrap">
        <div ref={ref} className="scroll-fade">
          <div className="sec-label">04 — Experience</div>
          <div className="sec-title">
            MY <span>JOURNEY</span>
          </div>

          {/* ── Work Experience ── */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--red)",
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
                background: "var(--red)",
                display: "inline-block",
              }}
            />
            Work Experience
          </div>

          {workExperience.map((e, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--red)",
                padding: "28px 28px 24px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {e.period}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "var(--red-glow)",
                    color: "var(--red)",
                    border: "1px solid var(--red-deep)",
                    padding: "2px 9px",
                  }}
                >
                  {e.badge}
                </span>
              </div>

              <div
                style={{
                  fontSize: 19,
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: 3,
                }}
              >
                {e.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--red)",
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                {e.company}
              </div>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 16,
                }}
              >
                {e.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--red)",
                      background: "var(--red-glow)",
                      border: "1px solid var(--red-deep)",
                      padding: "3px 9px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: 16,
                }}
              >
                {e.highlights.map((h, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.75,
                      marginBottom: 6,
                      paddingLeft: 16,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--red)",
                      }}
                    >
                      ›
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Links row */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {e.repo && (
                  <a
                    href={e.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      borderBottom: "1px solid var(--border)",
                      paddingBottom: 2,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(ev) => {
                      ev.currentTarget.style.color = "var(--red)";
                      ev.currentTarget.style.borderColor = "var(--red)";
                    }}
                    onMouseLeave={(ev) => {
                      ev.currentTarget.style.color = "var(--muted)";
                      ev.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    GitHub →
                  </a>
                )}

                {/* Demo button — navigates to project detail page */}
                {(e.demo || e.slug) && (
                  <button
                    onClick={() => navigate(`/project/${e.slug}`)}
                    style={{
                      fontSize: 11,
                      color: "var(--red)",
                      background: "var(--red-glow)",
                      border: "1px solid var(--red-deep)",
                      padding: "4px 12px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(ev) =>
                      (ev.currentTarget.style.background =
                        "rgba(226,75,74,0.2)")
                    }
                    onMouseLeave={(ev) =>
                      (ev.currentTarget.style.background = "var(--red-glow)")
                    }
                  >
                    ▶ Demo
                  </button>
                )}

                {/* Details link */}
                <button
                  onClick={() => navigate(`/project/${e.slug}`)}
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.06em",
                    marginLeft: "auto",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(ev) =>
                    (ev.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(ev) =>
                    (ev.currentTarget.style.color = "var(--muted)")
                  }
                >
                  Details →
                </button>
              </div>
            </div>
          ))}

          {/* ── Education & Volunteering ── */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--red)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              margin: "40px 0 20px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 20,
                height: 1,
                background: "var(--red)",
                display: "inline-block",
              }}
            />
            Education & Volunteering
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 1,
                background: "var(--border)",
              }}
            />

            {experience.map((e, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 0 28px 40px",
                  position: "relative",
                  borderBottom:
                    i < experience.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -5,
                    top: 38,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "var(--red)",
                    border: "2px solid var(--bg)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 6,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--muted)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {e.period}
                  </span>
                  {e.badge && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: "var(--red-glow)",
                        color: "var(--red)",
                        border: "1px solid var(--red-deep)",
                        padding: "2px 9px",
                      }}
                    >
                      {e.badge}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 19,
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: 3,
                  }}
                >
                  {e.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--red)",
                    marginBottom: 10,
                    fontWeight: 500,
                  }}
                >
                  {e.company}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    maxWidth: 680,
                  }}
                >
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #experience .section-wrap { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  );
}
