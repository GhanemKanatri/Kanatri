"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      style={{
        padding: "8rem 2.5rem",
        background: "#ffffff",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section label */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#888888",
            marginBottom: "0.75rem",
          }}
        >
          About
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#000000",
            marginBottom: "4rem",
            lineHeight: 1.1,
          }}
        >
          Who am I?
        </motion.h2>

        {/* Two-column layout: photo + text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
          }}
          className="md:grid-cols-[380px_1fr]"
        >
          {/* Photo */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "380px",
              aspectRatio: "3/4",
              background: "#f5f5f5",
              overflow: "hidden",
            }}
          >
            {!imgError ? (
              <Image
                src="/images/Ahmadkanatri.png"
                alt="Ahmad Kamal"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 380px"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#cccccc",
                    letterSpacing: "0.1em",
                  }}
                >
                  Ahmad Kamal
                </span>
              </div>
            )}
          </motion.div>

          {/* Text content */}
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "#333333",
                marginBottom: "1.75rem",
              }}
            >
              I am Ahmad Kamal, an Architect and 3D Visualizer. I graduated in
              2018 from Al-Ahliyya Amman University in Jordan, ranking second in
              my class. With 9 years of professional experience, I have been
              involved in large-scale projects across Saudi Arabia, Turkey,
              Syria, and Jordan.
            </motion.p>

            {/* Mission & Vision */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  padding: "1.75rem",
                  border: "1px solid #e5e5e5",
                  borderTop: "2px solid #000000",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#000000",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  Mission
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "#555555",
                  }}
                >
                  To design and deliver innovative, functional, and
                  aesthetically refined architectural and visualization
                  solutions. I aim to bridge creativity with practicality,
                  ensuring every project meets the highest standards of quality
                  and client satisfaction.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  padding: "1.75rem",
                  border: "1px solid #e5e5e5",
                  borderTop: "2px solid #000000",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#000000",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  Vision
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "#555555",
                  }}
                >
                  To establish myself as a leading architect and 3D visualizer
                  in the Middle East, recognized for excellence in project
                  management, specialized woodwork engineering, and creative
                  design that shapes modern living and working environments.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
