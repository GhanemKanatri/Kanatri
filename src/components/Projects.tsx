"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

// Maps slug → actual filename in /public/images/projects/
const projectImages: Record<string, string> = {
  "al-dandashi-villa":
    "/images/projects/AL DANDASHI VILLA.png",
  "mr-zaid-villa":
    "/images/projects/MR.ZAID VILLA.png",
  "emirates-keys":
    "/images/projects/Emirates Keys & Diagnostic Tools.png",
  "mr-ramzan-apartment":
    "/images/projects/MR.RAMZAN APARTMENT.png",
  "mr-omar-aslan":
    "/images/projects/MR.OMAR ASLAN.png",
  "al-bab-industrial-city-square":
    "/images/projects/Al BAB Industrial City Square.png",
  "al-kayalli-villa":
    "/images/projects/AL KAYALLI VILLA.png",
  "the-chedi-hegra":
    "/images/projects/The Chedi Hegra.png",
  "taiba-square":
    "/images/projects/TAIBA SQUARE.png",
  "ruby-jewelry-showroom":
    "/images/projects/Ruby Jewelry Showroom.png",
  "ms-ghader-mediterranean-villa":
    "/images/projects/ms-ghader-villa.jpeg",
  // 3d-design-series has no image — will show placeholder
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = projectImages[project.slug];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{
        background: "#ffffff",
        border: "1px solid #e5e5e5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Cover image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          background: "#f0f0f0",
          overflow: "hidden",
        }}
      >
        {imageSrc && !imgError ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "#cccccc",
                letterSpacing: "0.05em",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              {project.title}
            </span>
          </div>
        )}

        {/* Type badge */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "#000000",
            padding: "0.25rem 0.6rem",
          }}
        >
          {project.type}
        </div>
      </div>

      {/* Card info */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "#000000",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "#888888",
            letterSpacing: "0.04em",
          }}
        >
          {project.location}
        </p>

        <div style={{ marginTop: "auto", paddingTop: "1.25rem" }}>
          <Link
            href={`/projects/${project.slug}`}
            style={{
              fontFamily: "var(--font-body)",
              display: "inline-block",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#000000",
              textDecoration: "none",
              borderBottom: "1px solid #000000",
              paddingBottom: "2px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.5")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "8rem 2.5rem",
        background: "#ffffff",
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
          Portfolio
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#000000",
            marginBottom: "3.5rem",
            lineHeight: 1.1,
          }}
        >
          Selected Projects
        </motion.h2>

        {/* 3-col grid → 2 on tablet → 1 on mobile */}
        <div
          style={{ display: "grid", gap: "1.5rem" }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
