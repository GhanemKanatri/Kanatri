"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "info@kanatri.com",
    href: "mailto:info@kanatri.com",
    isNumber: false,
  },
  {
    icon: Phone,
    label: "Turkey",
    value: "+90 555 070 0003",
    href: "tel:+905550700003",
    isNumber: true,
  },
  {
    icon: Phone,
    label: "Saudi Arabia",
    value: "+966 571 170 003",
    href: "tel:+966571170003",
    isNumber: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Middle East",
    href: undefined,
    isNumber: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#f5f3ef",
        borderTop: "1px solid #e8e4de",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
        }}
        className="contact-grid"
      >
        {/* ── Left panel ── */}
        <div
          style={{
            padding: "8rem 4rem 8rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid #ddd9d2",
          }}
        >
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#999999",
                marginBottom: "2.5rem",
              }}
            >
              Contact
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 5vw, 5rem)",
                fontWeight: 600,
                color: "#111111",
                lineHeight: 1.05,
                marginBottom: "2rem",
              }}
            >
              Let&apos;s Build
              <br />
              Something
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>Together</em>
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                lineHeight: 1.85,
                color: "#777777",
                maxWidth: "320px",
              }}
            >
              Ready to bring your vision to life? Reach out through any of the
              channels below — we operate across the Middle East and beyond.
            </motion.p>
          </div>

          {/* Decorative large number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(6rem, 10vw, 11rem)",
              fontWeight: 700,
              color: "rgba(0,0,0,0.05)",
              lineHeight: 1,
              userSelect: "none",
              letterSpacing: "-0.02em",
            }}
          >
            09
          </motion.div>
        </div>

        {/* ── Right panel — contact items ── */}
        <div
          style={{
            padding: "8rem 2.5rem 8rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {contacts.map((item, i) => {
            const Icon = item.icon;
            const row = (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                style={{
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  borderTop: "1px solid #ddd9d2",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  cursor: item.href ? "pointer" : "default",
                }}
                className="contact-row"
              >
                <div style={{ flex: 1 }}>
                  {/* Row header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <Icon size={12} color="#aaaaaa" />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#aaaaaa",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Value */}
                  <p
                    style={{
                      fontFamily: item.isNumber
                        ? "var(--font-mono)"
                        : "var(--font-heading)",
                      fontSize: item.isNumber
                        ? "clamp(1.1rem, 2vw, 1.45rem)"
                        : "clamp(1.2rem, 2.2vw, 1.6rem)",
                      fontWeight: item.isNumber ? 400 : 300,
                      color: "#111111",
                      letterSpacing: item.isNumber ? "0.05em" : "0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.value}
                  </p>
                </div>

                {/* Arrow icon */}
                {item.href && (
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid #d0cbc4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "4px",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                    className="contact-arrow"
                  >
                    <ArrowUpRight size={14} color="#888888" />
                  </div>
                )}
              </motion.div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                {row}
              </a>
            ) : (
              <div key={item.label}>{row}</div>
            );
          })}

          {/* Last border */}
          <div style={{ borderTop: "1px solid #ddd9d2" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .contact-row:hover .contact-arrow {
          background: #111111;
          border-color: #111111;
        }
      `}</style>
    </section>
  );
}
