import { useEffect, useRef, useState } from "react";
import { personal } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const USERNAME = "ravindudilshanyk";
const CONTRIB_API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const REST_API = `https://api.github.com/users/${USERNAME}`;
const REPOS_API = `https://api.github.com/users/${USERNAME}/repos?per_page=100`;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const LEVEL_COLORS = ["#1e1414", "#501313", "#791f1f", "#A32D2D", "#E24B4A"];

const LANG_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572A5",
  PHP: "#4F5D95",
  Java: "#b07219",
  "C#": "#239120",
  Vue: "#41b883",
};

export default function Github() {
  const ref = useScrollAnimation();

  const gridRef = useRef(null);
  const monthRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stats, setStats] = useState({
    total: "—",
    repos: "—",
    followers: "—",
    stars: "—",
  });
  const [langs, setLangs] = useState([]);
  const [gridReady, setGridReady] = useState(false);

  // ── Render the heatmap cells into the DOM refs ──────────────────────────
  function renderGrid(flat) {
    if (!gridRef.current || !monthRef.current) return;

    const weeks = [];
    for (let i = 0; i < flat.length; i += 7) weeks.push(flat.slice(i, i + 7));

    // Month labels
    monthRef.current.innerHTML = "";
    let lastMonth = -1;
    weeks.forEach((w) => {
      const m = new Date(w[0].date).getMonth();
      const el = document.createElement("div");
      el.style.cssText =
        "width:16px;font-family:var(--font-mono);font-size:10px;" +
        "color:var(--faint);text-align:center;flex-shrink:0;letter-spacing:0.04em;";
      el.textContent = m !== lastMonth ? MONTHS[m] : "";
      if (m !== lastMonth) lastMonth = m;
      monthRef.current.appendChild(el);
    });

    // Day cells
    gridRef.current.innerHTML = "";
    weeks.forEach((w) => {
      const col = document.createElement("div");
      col.style.cssText = "display:flex;flex-direction:column;gap:3px;";
      w.forEach((day) => {
        const cell = document.createElement("div");
        cell.title = `${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`;
        cell.style.cssText =
          `width:13px;height:13px;border-radius:2px;` +
          `background:${LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]};` +
          `cursor:default;transition:transform 0.15s;flex-shrink:0;`;
        cell.onmouseenter = () => {
          cell.style.transform = "scale(1.4)";
        };
        cell.onmouseleave = () => {
          cell.style.transform = "scale(1)";
        };
        col.appendChild(cell);
      });
      gridRef.current.appendChild(col);
    });

    setGridReady(true);
  }

  useEffect(() => {
    async function load() {
      try {
        // 1. Contribution heatmap
        const contribRes = await fetch(CONTRIB_API);
        if (!contribRes.ok) throw new Error("contrib");
        const contribData = await contribRes.json();
        const flat = contribData.contributions;
        const total = flat.reduce((s, d) => s + d.count, 0);

        // refs are mounted now — render immediately
        renderGrid(flat);

        // 2. User profile (public REST — no token)
        const userRes = await fetch(REST_API);
        const userData = await userRes.json();

        // 3. Repos list (public REST — no token)
        const reposRes = await fetch(REPOS_API);
        const reposData = await reposRes.json();

        const stars = Array.isArray(reposData)
          ? reposData.reduce((s, r) => s + (r.stargazers_count || 0), 0)
          : 0;

        // Language frequency across repos
        const langCount = {};
        if (Array.isArray(reposData)) {
          reposData.forEach((r) => {
            if (r.language)
              langCount[r.language] = (langCount[r.language] || 0) + 1;
          });
        }
        const totalLR = Object.values(langCount).reduce((a, b) => a + b, 0);
        const topLangs = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            pct: Math.round((count / totalLR) * 100),
            color: LANG_COLORS[name] || "#888",
          }));

        setStats({
          total,
          repos: userData.public_repos ?? reposData.length,
          followers: userData.followers ?? "—",
          stars,
        });
        if (topLangs.length > 0) setLangs(topLangs);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const statCards = [
    { num: stats.total, label: "Contributions" },
    { num: stats.repos, label: "Public Repos" },
    { num: stats.followers, label: "Followers" },
    { num: stats.stars, label: "Total Stars" },
  ];

  const displayLangs =
    langs.length > 0
      ? langs
      : [
          { name: "JavaScript", pct: 45, color: "#f7df1e" },
          { name: "TypeScript", pct: 25, color: "#3178c6" },
          { name: "CSS / HTML", pct: 18, color: "#E24B4A" },
          { name: "PHP / Other", pct: 12, color: "#4F5D95" },
        ];

  return (
    <section id="github" style={{ background: "var(--bg2)" }}>
      <div className="section-wrap">
        <div ref={ref} className="scroll-fade">
          <div className="sec-label">05 — GitHub</div>
          <div className="sec-title">
            CONTRIBUTION <span>GRAPH</span>
          </div>

          {/* ── Stats row ──────────────────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              gap: 2,
              marginBottom: 40,
              background: "var(--border)",
              flexWrap: "wrap",
            }}
          >
            {statCards.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--bg2)",
                  padding: "18px 28px",
                  flex: 1,
                  minWidth: 110,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 34,
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {loading ? <span style={{ opacity: 0.3 }}>—</span> : s.num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Heatmap label ──────────────────────────────────────────────── */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Activity — last 12 months ·{" "}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--red)", fontSize: 11 }}
            >
              github.com/{USERNAME}
            </a>
          </div>

          {error && (
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--red)",
                padding: "14px 18px",
                color: "var(--muted)",
                fontSize: 13,
                marginBottom: 16,
              }}
            >
              ⚠ Could not load GitHub data. Check your connection and try again.
            </div>
          )}

          {/* ── Heatmap — ALWAYS rendered so refs attach before data arrives ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              visibility: gridReady
                ? "visible"
                : "hidden" /* hide until cells painted */,
              minHeight: gridReady ? "auto" : 120,
            }}
          >
            <div style={{ overflowX: "auto", width: "100%", paddingBottom: 8 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "inline-flex", flexDirection: "column" }}
                >
                  {/* refs — always in DOM */}
                  <div
                    ref={monthRef}
                    style={{ display: "flex", gap: 3, marginBottom: 4 }}
                  />
                  <div
                    ref={gridRef}
                    style={{
                      display: "flex",
                      gap: 3,
                      alignItems: "flex-start",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Legend */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 10,
                fontSize: 11,
                color: "var(--muted)",
              }}
            >
              <span>Less</span>
              {LEVEL_COLORS.map((c) => (
                <div
                  key={c}
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 2,
                    background: c,
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Loading pulse — shown while invisible */}
          {loading && !error && (
            <div
              style={{
                textAlign: "center",
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                padding: "12px 0",
              }}
            >
              Loading contribution data...
            </div>
          )}

          {/* ── Language breakdown ─────────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              gap: 2,
              marginTop: 32,
              background: "var(--border)",
              flexWrap: "wrap",
            }}
          >
            {displayLangs.map((l) => (
              <div
                key={l.name}
                style={{
                  background: "var(--bg2)",
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flex: 1,
                  minWidth: 130,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: l.color,
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text)",
                  }}
                >
                  {l.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    color: "var(--red)",
                    marginLeft: "auto",
                  }}
                >
                  {l.pct}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
