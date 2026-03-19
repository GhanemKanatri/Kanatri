"use client";

import { motion } from "framer-motion";
import { Building2, Box, Sofa, FolderKanban } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "From concept to detailed development across residential, commercial, and mixed-use projects.",
    skills: ["AutoCAD", "Revit", "BIM"],
  },
  {
    icon: Box,
    title: "3D Visualization",
    description:
      "High-end renders, walkthroughs, and animations for realistic and compelling project presentations.",
    skills: ["3ds Max", "SketchUp", "Lumion", "D5 Render"],
  },
  {
    icon: Sofa,
    title: "Interior & Fit-out",
    description:
      "Bespoke interior spaces paired with precision woodwork engineering and technical documentation.",
    skills: ["Woodwork", "Shop Drawings", "Material Submittals"],
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "Leading design and execution teams, coordinating schedules, budgets, and quality standards.",
    skills: ["Coordination", "Scheduling", "Quality Control"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "8rem 2.5rem",
        background: "#fafafa",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
          Expertise
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#000000",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          What I Do
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "#666666",
            marginBottom: "4rem",
            maxWidth: "520px",
            lineHeight: 1.75,
          }}
        >
          Comprehensive architectural services from concept to completion,
          blending creativity with technical precision.
        </motion.p>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "#e5e5e5",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: "2.5rem 2rem",
                background: "#fafafa",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#fafafa")
              }
            >
              <service.icon
                size={24}
                strokeWidth={1.5}
                style={{ color: "#000000", marginBottom: "1.25rem" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#000000",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.01em",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "#666666",
                  marginBottom: "1.25rem",
                }}
              >
                {service.description}
              </p>
              {/* Skills tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#555555",
                      border: "1px solid #cccccc",
                      padding: "0.2rem 0.6rem",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
