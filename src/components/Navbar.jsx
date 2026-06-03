import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 64px",
        background: scrolled ? "rgba(10,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          letterSpacing: 3,
          color: "var(--red)",
        }}
      >
        RDK
      </a>

      {/* Desktop links */}
      <div
        style={{ display: "flex", gap: 32, alignItems: "center" }}
        className="nav-desktop-links"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "var(--muted)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--red)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/Ravindu_Dilshan_CV.pdf"
          download="Ravindu_Dilshan_Karunathilaka_CV.pdf"
          className="btn-outline"
          style={{ padding: "8px 16px", fontSize: 12 }}
        >
          ↓ Download CV
        </a>
        <a
          className="btn-primary"
          href={`mailto:${personal.email}`}
          style={{
            padding: "8px 20px",
            fontSize: 12,
            clipPath:
              "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--text)",
          cursor: "pointer",
          fontSize: 22,
        }}
        className="nav-hamburger"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            background: "var(--bg2)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            padding: "16px 20px",
            gap: 16,
            zIndex: 99,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--muted)",
                fontSize: 14,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: block !important; }
          nav { padding: 14px 20px !important; }
        }
      `}</style>
    </nav>
  );
}
