"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/arc.ahmadkamal/" },
  { label: "WhatsApp", href: "https://wa.me/966571170003" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "3rem 2.5rem",
        background: "#ffffff",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Name + title */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              fontSize: "1.25rem",
              letterSpacing: "0.05em",
              color: "#000000",
              marginBottom: "0.2rem",
            }}
          >
            Ahmad Kamal
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
            }}
          >
            Project Architect &amp; Interior Designer
          </div>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "#aaaaaa",
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} KANATRI. All rights reserved.
        </p>

        {/* Social links */}
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#888888",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#000000")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#888888")
              }
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
