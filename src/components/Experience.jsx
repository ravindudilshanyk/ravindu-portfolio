import { experience } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Experience() {
  const ref = useScrollAnimation();
  return (
    <section id="experience">
      <div className="section-wrap">
        <div ref={ref} className="scroll-fade">
          <div className="sec-label">04 — Experience</div>
          <div className="sec-title">
            MY <span>JOURNEY</span>
          </div>

          <div style={{ position: "relative" }}>
            {/* vertical line */}
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
                {/* dot */}
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
    </section>
  );
}
