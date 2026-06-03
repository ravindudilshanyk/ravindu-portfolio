import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 64px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, #2a1c1c 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.5,
        }}
      />

      {/* red glow — centered between columns */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(226,75,74,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Full-width two-column grid ── */}
      <div className="hero-layout">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-tag-line" />
            Available for Internship &amp; Full Stack Developer Roles
          </div>

          <h1 className="hero-name">
            RAVINDU <span>DILSHAN</span>
          </h1>
          <h2 className="hero-surname">KARUNATHILAKA</h2>

          <div className="hero-role-row">
            <span className="hero-role-text">{personal.role}</span>
            <span className="hero-role-divider" />
            <span className="hero-role-sub">UWU · Sri Lanka</span>
          </div>

          <p className="hero-desc">{personal.summary}</p>

          <div className="hero-ctas">
            <a className="btn-primary" href="#projects">
              View My Work →
            </a>
            <a className="btn-outline" href={`mailto:${personal.email}`}>
              Get In Touch
            </a>
            <a
              className="btn-outline"
              href="/Ravindu_Dilshan_Karunathilaka_Software_Engineer.pdf"
              download="Ravindu_Dilshan_Karunathilaka_Software_Engineer.pdf"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              ↓ Download CV
            </a>
          </div>

          <div className="hero-stats-inline">
            {[
              { num: "5+", label: "Projects" },
              { num: "3.39", label: "GPA / 4.0" },
              { num: "10+", label: "Tech Stacks" },
            ].map((s) => (
              <div key={s.label} className="hero-stat-inline">
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero-right">
          <div className="hero-photo-outer">
            <div className="hero-spin-ring" />
            <div className="hero-accent-ring" />

            <div className="hero-photo-box">
              <img
                src="/ravindu.jpg"
                alt="Ravindu Dilshan"
                className="hero-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="hero-img-placeholder">
                <span>RDK</span>
                <small>place ravindu.jpg in src/assets/</small>
              </div>
            </div>

            {/* Open to Work */}
            <div className="hero-badge hero-badge-bl">
              <span className="hero-badge-dot" />
              Open to Work
            </div>

            {/* Sri Lanka flag */}
            <div className="hero-badge hero-badge-tr">
              Sri Lanka{" "}
              <img
                src="https://flagcdn.com/w40/lk.png"
                alt="Sri Lanka Flag"
                style={{
                  width: 22,
                  height: "auto",
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 6,
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Layout: equal halves, no fixed px column ── */
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        /* ── Left ── */
        .hero-left { display: flex; flex-direction: column; }

        .hero-tag {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 11px;
          color: var(--red); letter-spacing: 0.15em;
          text-transform: uppercase; margin-bottom: 20px;
        }
        .hero-tag-line {
          display: inline-block; width: 32px; height: 1px;
          background: var(--red); flex-shrink: 0;
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(48px, 6.5vw, 104px);
          line-height: 0.9; letter-spacing: 2px;
          color: var(--text); margin-bottom: 2px;
        }
        .hero-name span { color: var(--red); }

        .hero-surname {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.8vw, 60px);
          line-height: 0.9; letter-spacing: 2px;
          color: var(--text); margin-bottom: 20px;
        }

        .hero-role-row {
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap; margin-bottom: 22px;
        }
        .hero-role-text {
          font-family: var(--font-mono); font-size: 13px;
          color: var(--muted); letter-spacing: 0.1em;
        }
        .hero-role-divider {
          display: inline-block; width: 60px; height: 1px;
          background: var(--border);
        }
        .hero-role-sub {
          font-family: var(--font-mono); font-size: 11px; color: var(--faint);
        }

        .hero-desc {
          font-size: 14px; color: var(--muted);
          max-width: 520px; line-height: 1.8; margin-bottom: 36px;
        }

        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px; }

        .hero-stats-inline {
          display: flex; border: 1px solid var(--border); width: fit-content;
        }
        .hero-stat-inline {
          padding: 13px 24px; border-right: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 2px;
        }
        .hero-stat-inline:last-child { border-right: none; }
        .hero-stat-num {
          font-family: var(--font-display); font-size: 28px;
          color: var(--text); line-height: 1;
        }
        .hero-stat-label {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* ── Right: photo centred in its half ── */
        .hero-right {
          display: flex;
          align-items: center;
          justify-content: center;   /* true center of the right half */
        }

        .hero-photo-outer {
          position: relative;
          width: 340px;
          height: 340px;
        }

        .hero-spin-ring {
          position: absolute; inset: -18px; border-radius: 50%;
          border: 1.5px dashed var(--red-dark);
          animation: heroSpin 10s linear infinite; pointer-events: none;
        }
        .hero-accent-ring {
          position: absolute; inset: -8px; border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: var(--red); border-right-color: var(--red);
          pointer-events: none;
        }
        @keyframes heroSpin { to { transform: rotate(360deg); } }

        .hero-photo-box {
          width: 100%; height: 100%; border-radius: 50%;
          overflow: hidden; background: var(--surface);
          border: 3px solid var(--border2);
          position: relative; z-index: 1;
        }
        .hero-img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: center top; display: block;
          transition: transform 0.4s ease;
        }
        .hero-img:hover { transform: scale(1.04); }

        .hero-img-placeholder {
          display: none; flex-direction: column;
          align-items: center; justify-content: center;
          width: 100%; height: 100%;
        }
        .hero-img-placeholder span {
          font-family: var(--font-display); font-size: 56px;
          color: var(--red); opacity: 0.35;
        }
        .hero-img-placeholder small {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--faint); margin-top: 8px;
          text-align: center; padding: 0 20px;
        }

        .hero-badge {
          position: absolute;
          background: var(--surface); border: 1px solid var(--border2);
          font-family: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", var(--font-mono);
          font-size: 11px; color: var(--text);
          padding: 7px 14px; white-space: nowrap; z-index: 2;
          display: flex; align-items: center; gap: 7px;
          letter-spacing: 0.05em; backdrop-filter: blur(8px);
        }
        .hero-badge-bl { bottom: 16px; left: -24px; }
        .hero-badge-tr { top: 20px; right: -20px; }
        .hero-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--red); box-shadow: 0 0 6px var(--red);
          animation: pulse 2s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .hero-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          #hero { padding: 110px 40px 60px !important; }
          .hero-right { justify-content: flex-start !important; }
          .hero-photo-outer { width: 240px !important; height: 240px !important; }
          .hero-badge-tr { top: 10px; right: -10px; }
          .hero-badge-bl { bottom: 8px; left: -12px; }
        }
        @media (max-width: 600px) {
          #hero { padding: 100px 20px 56px !important; }
          .hero-right { justify-content: center !important; }
          .hero-photo-outer { width: 210px !important; height: 210px !important; }
          .hero-stats-inline { width: 100%; }
          .hero-stat-inline { flex: 1; padding: 12px 10px; }
          .hero-ctas { flex-direction: column; }
          .hero-ctas a { text-align: center; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
