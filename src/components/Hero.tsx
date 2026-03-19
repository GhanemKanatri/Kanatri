"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/projects/ms-ghader-villa.jpeg"
        alt="Architecture background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 2rem",
          maxWidth: "980px",
          width: "100%",
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1, delay: 2.3 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "2rem",
          }}
        >
          Portfolio
        </motion.p>

        {/* Name — bold, large serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.45, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(4rem, 11vw, 9.5rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            lineHeight: 0.95,
            color: "#ffffff",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          Ahmad
          <br />
          Kamal
        </motion.h1>

        {/* Thin gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.9, ease: "easeOut" }}
          style={{
            width: "80px",
            height: "1px",
            background: "rgba(255,255,255,0.5)",
            margin: "0 auto 1.75rem",
            transformOrigin: "center",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.05 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.75rem, 1.6vw, 0.9rem)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 400,
            marginBottom: "3.5rem",
          }}
        >
          Project Architect &amp; Interior Designer
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.25 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* View Our Work */}
          <button
            onClick={scrollToProjects}
            style={{
              padding: "1rem 2.5rem",
              background: "#ffffff",
              color: "#000000",
              border: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.25s, color 0.25s",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.85)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#ffffff";
            }}
          >
            View Our Work
            <span style={{ fontSize: "1rem", lineHeight: 1 }}>→</span>
          </button>

          {/* Download Portfolio */}
          <a
            href="/kanatriPortfolio.pdf"
            download="AhmadKamal_Portfolio.pdf"
            style={{
              padding: "1rem 2.5rem",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.5)",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              transition: "border-color 0.25s, background 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#ffffff";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            ↓ Download Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.7, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.58rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
