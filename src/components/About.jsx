import { personal, certifications, languages } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();
  return (
    <section id="about" style={{ background: "var(--bg2)" }}>
      <div className="section-wrap">
        <div ref={ref} className="scroll-fade">
          <div className="sec-label">01 — About</div>
          <div className="sec-title">
            WHO I <span>AM</span>
          </div>

          <div className="about-grid">
            {/* Left */}
            <div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  marginBottom: 16,
                }}
              >
                I'm a{" "}
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                  final-year Computer Science & Technology undergraduate
                </strong>{" "}
                at Uva Wellassa University of Sri Lanka, passionate about
                building clean, functional, and visually refined software.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  marginBottom: 16,
                }}
              >
                I've shipped real production systems — including{" "}
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                  Pinklet POS
                </strong>
                , a full-stack desktop POS app currently live in a Sri Lankan
                bakery business — and I'm currently building{" "}
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                  Smart Route LK
                </strong>
                , an intelligent bus booking platform.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  marginBottom: 32,
                }}
              >
                I care deeply about the full picture — from database schema
                design to pixel-perfect UI. I'm a strong believer in shipping
                real things, not just side-project demos.
              </p>

              {[
                { icon: "📍", key: "Location", val: personal.location },
                {
                  icon: "🎓",
                  key: "University",
                  val: "Uva Wellassa University of Sri Lanka",
                },
                // { icon: "📊", key: "GPA", val: "3.39 / 4.0" },
                {
                  icon: "🔍",
                  key: "Status",
                  val: "Seeking Internship / Full Stack Developer Role",
                },
                { icon: "📞", key: "Phone", val: personal.phone },
              ].map((f) => (
                <div key={f.key} className="about-fact-row">
                  <span style={{ fontSize: 15 }}>{f.icon}</span>
                  <span className="about-fact-key">{f.key}</span>
                  <span className="about-fact-val">{f.val}</span>
                </div>
              ))}
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  title: "Full Stack Development",
                  body: "React, Node.js, Electron, PostgreSQL, TypeScript — I build end-to-end and like owning the full stack.",
                },
                {
                  title: "UI/UX Design",
                  body: "I use Figma for wireframes and care about color systems, spacing, and the feeling an interface creates at first glance.",
                },
                {
                  title: "Real-World Impact",
                  body: "Every project I list is deployed or in active development — not just demos. Pinklet POS is live in a real shop today.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "20px 22px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "var(--red)",
                    }}
                  />
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: 6,
                    }}
                  >
                    {c.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}

              {/* Certifications */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--red)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 14,
                  }}
                >
                  Certifications
                </div>
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    style={{
                      marginBottom: 10,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--text)",
                        lineHeight: 1.5,
                      }}
                    >
                      {c.name}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--red)",
                        background: "var(--red-glow)",
                        border: "1px solid var(--red-deep)",
                        padding: "2px 8px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div style={{ display: "flex", gap: 8 }}>
                {languages.map((l) => (
                  <div
                    key={l.lang}
                    style={{
                      flex: 1,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      padding: "14px 16px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        color: "var(--text)",
                      }}
                    >
                      {l.lang}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {l.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about-fact-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 11px 16px;
          margin-bottom: 8px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid var(--red);
        }
        .about-fact-key {
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          min-width: 80px;
          flex-shrink: 0;
        }
        .about-fact-val {
          font-size: 13px;
          color: var(--text);
          font-weight: 500;
          word-break: break-word;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          #about .section-wrap { padding: 64px 20px !important; }
          .about-fact-row { flex-wrap: wrap; gap: 8px; }
          .about-fact-key { min-width: 60px; }
          .about-fact-val { font-size: 12px; }
        }
      `}</style>
    </section>
  );
}
