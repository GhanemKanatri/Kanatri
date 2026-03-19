"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Proven Experience",
    description:
      "9 years of professional experience across Saudi Arabia, Turkey, Syria, and Jordan.",
  },
  {
    number: "02",
    title: "Multi-Role Expertise",
    description:
      "From architectural design and 3D visualization to project management and specialized woodwork engineering.",
  },
  {
    number: "03",
    title: "High-Quality Delivery",
    description:
      "Consistently producing innovative, functional, and visually striking design solutions.",
  },
  {
    number: "04",
    title: "Adaptability",
    description:
      "Skilled at working across diverse environments, adapting to client needs and regional standards.",
  },
  {
    number: "05",
    title: "Commitment",
    description:
      "Dedicated to excellence, deadlines, and continuous professional growth.",
  },
];

export default function WhyHireMe() {
  return (
    <section
      id="why-hire-me"
      style={{
        padding: "8rem 2.5rem",
        background: "#000000",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#666666",
            marginBottom: "0.75rem",
          }}
        >
          Why Work With Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#ffffff",
            marginBottom: "4rem",
            lineHeight: 1.1,
          }}
        >
          Why Hire Me
        </motion.h2>

        {/* Reasons list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: "2rem",
                padding: "2rem 0",
                borderBottom: "1px solid #222222",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  color: "#444444",
                  paddingTop: "0.2rem",
                }}
              >
                {reason.number}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                    lineHeight: 1.2,
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "#888888",
                  }}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
