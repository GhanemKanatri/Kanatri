"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

const projectImages: Record<string, string> = {
  "al-dandashi-villa": "/images/projects/AL DANDASHI VILLA.png",
  "mr-zaid-villa": "/images/projects/MR.ZAID VILLA.png",
  "emirates-keys": "/images/projects/Emirates Keys & Diagnostic Tools.png",
  "mr-ramzan-apartment": "/images/projects/MR.RAMZAN APARTMENT.png",
  "mr-omar-aslan": "/images/projects/MR.OMAR ASLAN.png",
  "al-bab-industrial-city-square": "/images/projects/Al BAB Industrial City Square.png",
  "al-kayalli-villa": "/images/projects/AL KAYALLI VILLA.png",
  "the-chedi-hegra": "/images/projects/The Chedi Hegra.png",
  "taiba-square": "/images/projects/TAIBA SQUARE.png",
  "ruby-jewelry-showroom": "/images/projects/Ruby Jewelry Showroom.png",
  "ms-ghader-mediterranean-villa": "/images/projects/ms-ghader-villa.jpeg",
};

const projectGalleries: Record<string, string[]> = {
  "ms-ghader-mediterranean-villa": [
    "/images/projects/ms-ghader-villa/01.jpeg",
    "/images/projects/ms-ghader-villa/02.jpeg",
    "/images/projects/ms-ghader-villa/03.jpeg",
    "/images/projects/ms-ghader-villa/04.jpeg",
    "/images/projects/ms-ghader-villa/05.jpeg",
    "/images/projects/ms-ghader-villa/06.jpeg",
    "/images/projects/ms-ghader-villa/07.jpeg",
  ],
};

export default function ProjectPageClient({ slug }: { slug: string }) {
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  const [imgError, setImgError] = useState(false);
  const imageSrc = projectImages[slug];
  const gallery = projectGalleries[slug] ?? [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % gallery.length : null));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-body)",
          color: "#000000",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1rem", color: "#888888", marginBottom: "1.5rem" }}>
            Project not found.
          </p>
          <button
            onClick={() => router.push("/#projects")}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#000000",
              background: "none",
              border: "1px solid #000000",
              padding: "0.75rem 1.5rem",
              cursor: "pointer",
            }}
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          padding: "1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            router.push("/");
            setTimeout(() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }, 300);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#000000",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <ArrowLeft size={14} />
          Back to Projects
        </button>

        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: "0.18em",
            color: "#000000",
          }}
        >
          KANATRI
        </span>
      </div>

      {/* Hero image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(280px, 55vw, 600px)",
          background: "#f0f0f0",
          overflow: "hidden",
        }}
      >
        {imageSrc && !imgError ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority
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
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#cccccc",
                letterSpacing: "0.08em",
              }}
            >
              {project.title}
            </span>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2.5rem",
            right: "2.5rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "0.5rem",
            }}
          >
            {project.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* Project details */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid #e5e5e5",
            marginBottom: "3.5rem",
          }}
        >
          {[
            { label: "Type", value: project.type },
            { label: "Location", value: project.location },
            { label: "Role", value: project.role },
          ].map((m) => (
            <div key={m.label}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#aaaaaa",
                  marginBottom: "0.3rem",
                }}
              >
                {m.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#000000" }}>
                {m.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1rem",
            }}
          >
            Project Overview
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#333333" }}
          >
            {project.overview}
          </p>
        </motion.section>

        {/* Key Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1.25rem",
            }}
          >
            Key Achievements
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {project.achievements.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "#000000",
                    borderRadius: "50%",
                    marginTop: "0.6rem",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: "#333333",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            padding: "2rem",
            border: "1px solid #e5e5e5",
            borderLeft: "3px solid #000000",
            marginBottom: gallery.length > 0 ? "4rem" : 0,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1rem",
            }}
          >
            Impact
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "#333333" }}
          >
            {project.impact}
          </p>
        </motion.section>

        {/* Gallery */}
        {gallery.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#888888",
                marginBottom: "1.5rem",
              }}
            >
              Gallery
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {gallery.map((src, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(i)}
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    background: "#f0f0f0",
                    cursor: "zoom-in",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
                    }
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && gallery[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#ffffff",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          >
            <X size={20} />
          </button>

          {gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: "absolute",
                left: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              <ChevronLeft size={22} />
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "88vh",
              width: "1000px",
              height: "700px",
            }}
          >
            <Image
              src={gallery[lightboxIndex]}
              alt={`${project.title} — ${lightboxIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
              priority
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
            }}
          >
            {lightboxIndex + 1} / {gallery.length}
          </div>

          {gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: "absolute",
                right: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      )}
    </main>
  );
}
