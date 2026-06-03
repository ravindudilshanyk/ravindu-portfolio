import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personal } from "../data/portfolio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function Contact() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputStyle = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    padding: "12px 16px",
    outline: "none",
    resize: "none",
    transition: "border-color 0.2s",
  };

  function handleFocus(e) {
    e.target.style.borderColor = "var(--red)";
  }
  function handleBlur(e) {
    e.target.style.borderColor = "var(--border)";
  }

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus(STATUS.SENDING);

    try {
      // emailjs.send() — no form element needed, just a plain object
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name.trim(),
          from_email: email.trim(),
          message: message.trim(),
          to_email: personal.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus(STATUS.SUCCESS);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);
    }
  }

  const contactCards = [
    {
      icon: "✉",
      label: "Email",
      val: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: "in",
      label: "LinkedIn",
      val: "linkedin.com/in/ravindudilshany",
      href: personal.linkedin,
    },
    {
      icon: "GH",
      label: "GitHub",
      val: "github.com/ravindudilshanyk",
      href: personal.github,
    },
    {
      icon: "📞",
      label: "Phone",
      val: personal.phone,
      href: `tel:${personal.phone}`,
    },
  ];

  const ref = useScrollAnimation();

  return (
    <section id="contact">
      <div className="section-wrap">
        <div ref={ref} className="scroll-fade">
          <div className="sec-label">06 — Contact</div>
          <div className="sec-title">
            GET IN <span>TOUCH</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            {/* ── Left: info cards ── */}
            <div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.85,
                  marginBottom: 32,
                }}
              >
                I'm actively looking for{" "}
                <strong style={{ color: "var(--text)" }}>
                  Software Engineering Internship
                </strong>{" "}
                and <strong style={{ color: "var(--text)" }}>Full Stack Developer Internship</strong>{" "}
                opportunities. If you have a project, an opening, or just want
                to talk code — reach out.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {contactCards.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderLeft: "3px solid var(--red)",
                      padding: "16px 20px",
                      textDecoration: "none",
                      transition: "background 0.2s, transform 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--surface2)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--surface)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span
                      style={{
                        color: "var(--red)",
                        fontSize: 18,
                        minWidth: 24,
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: 2,
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          fontWeight: 500,
                        }}
                      >
                        {c.val}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: form ── */}
            <div>
              {status === STATUS.SUCCESS ? (
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--red)",
                    padding: "48px 32px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 48,
                      color: "var(--red)",
                      marginBottom: 12,
                    }}
                  >
                    SENT!
                  </div>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: 14,
                      lineHeight: 1.7,
                      marginBottom: 24,
                    }}
                  >
                    Thanks! I'll get back to you at{" "}
                    <strong style={{ color: "var(--text)" }}>
                      {personal.email}
                    </strong>{" "}
                    soon.
                  </p>
                  <button
                    className="btn-outline"
                    onClick={() => setStatus(STATUS.IDLE)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 6,
                      }}
                    >
                      Name
                    </div>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      disabled={status === STATUS.SENDING}
                    />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 6,
                      }}
                    >
                      Email
                    </div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      disabled={status === STATUS.SENDING}
                    />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 6,
                      }}
                    >
                      Message
                    </div>
                    <textarea
                      placeholder="Tell me about the opportunity..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      disabled={status === STATUS.SENDING}
                    />
                  </div>

                  {status === STATUS.ERROR && (
                    <div
                      style={{
                        background: "var(--red-glow)",
                        border: "1px solid var(--red-deep)",
                        borderLeft: "3px solid var(--red)",
                        padding: "12px 16px",
                        fontSize: 13,
                        color: "var(--red)",
                      }}
                    >
                      ⚠ Failed to send. Email me directly at{" "}
                      <a
                        href={`mailto:${personal.email}`}
                        style={{
                          color: "var(--red)",
                          textDecoration: "underline",
                        }}
                      >
                        {personal.email}
                      </a>
                    </div>
                  )}

                  <button
                    className="btn-primary"
                    onClick={handleSubmit}
                    disabled={status === STATUS.SENDING}
                    style={{
                      alignSelf: "flex-start",
                      opacity: status === STATUS.SENDING ? 0.7 : 1,
                      cursor:
                        status === STATUS.SENDING ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === STATUS.SENDING
                      ? "Sending..."
                      : "Send Message →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .section-wrap > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
