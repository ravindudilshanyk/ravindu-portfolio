import { skills } from "../data/portfolio";

const categories = [
  { label: "Proficient", key: "proficient", hot: true },
  { label: "Familiar", key: "familiar", hot: false },
  { label: "Practices", key: "practices", hot: false },
  { label: "Soft Skills", key: "softSkills", hot: false },
  { label: "Tools & Platforms", key: "tools", hot: false },
];

function Tag({ label, hot }) {
  return (
    <span style={{
      background: hot ? "var(--red-glow)" : "var(--surface)",
      border: `1px solid ${hot ? "var(--red-deep)" : "var(--border)"}`,
      color: hot ? "var(--red)" : "var(--muted)",
      fontFamily: "var(--font-mono)", fontSize: 12,
      padding: "5px 12px", letterSpacing: "0.04em",
      cursor: "default", transition: "all 0.2s",
      display: "inline-block",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--red)"; e.currentTarget.style.background = "var(--red-glow)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = hot ? "var(--red-deep)" : "var(--border)"; e.currentTarget.style.color = hot ? "var(--red)" : "var(--muted)"; e.currentTarget.style.background = hot ? "var(--red-glow)" : "var(--surface)"; }}>
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="sec-label">02 — Skills</div>
        <div className="sec-title">TECH <span>STACK</span></div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2, background: "var(--border)" }}>
          {categories.map(cat => (
            <div key={cat.key} style={{ background: "var(--bg2)", padding: "28px 28px 24px" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--red)", marginBottom: 18,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                {cat.label}
                <span style={{ flex: 1, height: 1, background: "var(--border)", display: "inline-block" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills[cat.key].map(s => <Tag key={s} label={s} hot={cat.hot} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
