"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Count up from 0 to 100 over ~1.8s to match the bar animation
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    const hideTimer = setTimeout(() => setVisible(false), 2000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#000000",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            KANATRI
          </motion.h1>

          {/* Progress bar + percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.4rem",
              width: "clamp(160px, 30vw, 260px)",
            }}
          >
            {/* Percentage label */}
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                color: "#aaaaaa",
                tabularNums: "tabular-nums",
              } as React.CSSProperties}
            >
              {progress}%
            </span>

            {/* Track */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "#e5e5e5",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Fill */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  background: "#000000",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
