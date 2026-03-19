"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Design & Planning",
    items: [
      "Conceptual & Detailed Design",
      "Interior & Exterior Visualization",
      "Space Planning & Functional Design",
      "3D Renders & Animation",
    ],
  },
  {
    category: "Project Management",
    items: [
      "Project Coordination",
      "Technical Supervision",
      "Woodwork & Fit-out Works",
      "Shop Drawings & Submittals",
    ],
  },
  {
    category: "Technical Proficiency",
    items: [
      "BIM (Revit) & AutoCAD",
      "3ds Max & SketchUp",
      "D5 Render & Lumion",
      "Photoshop & Illustrator",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "8rem 2rem",
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          Skills
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            color: "var(--text)",
            marginBottom: "4rem",
            lineHeight: 1.1,
          }}
        >
          Tools &{" "}
          <span style={{ fontWeight: 600, color: "var(--accent)" }}>
            Expertise
          </span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              style={{
                padding: "2rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1.5rem",
                  fontWeight: 600,
                }}
              >
                {group.category}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {group.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
