"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) { setLoading(false); return; }

    // Animate progress bar
    let start: number | null = null;
    const duration = 1600;
    const raf = requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      if (elapsed < duration) requestAnimationFrame(step);
      else {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const letters = ["V", "K", "."];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "var(--bg-gradient)" }}
          exit={{ opacity: 0, filter: "blur(16px)", scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background orbs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
            style={{ background: "radial-gradient(circle, #0A84FF 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], x: [-40, 40, -40], y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-[90px]"
            style={{ background: "radial-gradient(circle, #5E5CE6 0%, transparent 70%)" }}
            animate={{ scale: [1.2, 1, 1.2], x: [40, -40, 40], y: [30, -30, 30] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central glass card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-8 px-16 py-12 rounded-[32px]"
            style={{
              background: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(40px) saturate(200%)",
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "inset 0 1.5px 1px rgba(255,255,255,0.9), 0 24px 64px rgba(31,38,135,0.12)",
            }}
          >
            {/* Specular highlight */}
            <div
              className="absolute top-0 left-[10%] w-[80%] h-[30%] pointer-events-none"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
                borderRadius: "50% 50% 100% 100% / 60% 60% 100% 100%",
                filter: "blur(3px)",
              }}
            />

            {/* Animated logo letters */}
            <div className="flex items-end gap-1">
              {letters.map((letter, i) => (
                <motion.span
                  key={letter + i}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.3 + i * 0.12,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-black leading-none select-none"
                  style={{
                    fontSize: letter === "." ? "3.5rem" : "5rem",
                    background: "linear-gradient(135deg, #0A84FF 0%, #60BFFF 20%, #ffffff 32%, #0A84FF 44%, #5E5CE6 70%, #a8a0ff 82%, #ffffff 90%, #5E5CE6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 2px 12px rgba(10,132,255,0.5))",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--text-secondary)] select-none"
            >
              Full-Stack Engineer
            </motion.p>

            {/* Progress bar */}
            <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(10,132,255,0.12)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #0A84FF, #5E5CE6)",
                  boxShadow: "0 0 12px rgba(10,132,255,0.6)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
