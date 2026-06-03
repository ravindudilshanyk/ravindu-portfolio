import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "28px 64px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      position: "relative", zIndex: 1, flexWrap: "wrap", gap: 12,
      background: "var(--bg2)",
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--red)", letterSpacing: 2 }}>
        RDK
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {[
          { label: "GitHub", href: personal.github },
          { label: "LinkedIn", href: personal.linkedin },
          { label: "Email", href: `mailto:${personal.email}` },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
             style={{ fontSize: 12, color: "var(--faint)", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
             onMouseEnter={e => e.target.style.color = "var(--red)"}
             onMouseLeave={e => e.target.style.color = "var(--faint)"}>
            {l.label}
          </a>
        ))}
      </div>
      <div style={{ fontSize: 12, color: "var(--faint)" }}>
        © 2025 Ravindu Dilshan Karunathilaka · Built in 🇱🇰
      </div>
    </footer>
  );
}
