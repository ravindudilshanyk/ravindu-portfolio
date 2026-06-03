import { useState } from "react";
import { projects } from "../data/portfolio";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface)" : "var(--bg2)",
        padding: "30px 28px 28px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "background 0.2s",
        borderBottom: "2px solid transparent",
      }}
    >
      {/* Bottom red bar on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--red)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s",
        }}
      />

      {/* Top badge row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 52,
            color: hovered ? "var(--red-deep)" : "var(--surface2)",
            lineHeight: 1,
            userSelect: "none",
            transition: "color 0.2s",
          }}
        >
          {project.num}
        </div>
        <div
          style={{
            fontSize: 10,
            color: "var(--red)",
            background: "var(--red-glow)",
            border: "1px solid var(--red-deep)",
            padding: "3px 9px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {project.type}
        </div>
      </div>

      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "var(--text)",
          marginBottom: 4,
        }}
      >
        {project.name}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--muted)",
          marginBottom: 12,
        }}
      >
        {project.period} · {project.location}
      </div>
      <p
        style={{
          fontSize: 13,
          color: "var(--muted)",
          lineHeight: 1.7,
          marginBottom: 16,
        }}
      >
        {project.desc}
      </p>

      {/* Tags */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}
      >
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--red)",
              background: "var(--red-glow)",
              border: "1px solid var(--red-deep)",
              padding: "3px 9px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Highlights (shown on hover) */}
      {hovered && (
        <ul style={{ marginBottom: 18, paddingLeft: 0, listStyle: "none" }}>
          {project.highlights.slice(0, 3).map((h, i) => (
            <li
              key={i}
              style={{
                fontSize: 12,
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 6,
                paddingLeft: 14,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--red)",
                  top: 0,
                }}
              >
                ›
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Links row */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 12,
            color: "var(--muted)",
            borderBottom: "1px solid var(--border)",
            paddingBottom: 2,
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--red)";
            e.currentTarget.style.borderColor = "var(--red)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--muted)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          GitHub →
        </a>

        {project.demo && (
          <a
            href={`/project/${project.num}`}
            style={{
              fontSize: 11,
              color: "var(--red)",
              background: "var(--red-glow)",
              border: "1px solid var(--red-deep)",
              padding: "4px 12px",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(226,75,74,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--red-glow)")
            }
          >
            ▶ Demo
          </a>
        )}

        <a
          href={`/project/${project.num}`}
          style={{
            fontSize: 12,
            color: "var(--muted)",
            marginLeft: "auto",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.06em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          Details →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg2)" }}>
      <div className="section-wrap">
        <div className="sec-label">03 — Work</div>
        <div className="sec-title">
          SELECTED <span>PROJECTS</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 2,
            background: "var(--border)",
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
