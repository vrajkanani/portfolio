"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    // Disable if prefers-reduced-motion is enabled
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const visibilityFrame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX - 16, y: e.clientY - 16 };

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        mouseX.set(positionRef.current.x);
        mouseY.set(positionRef.current.y);
        frameRef.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(visibilityFrame);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="motion-layer fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-100 hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        background: "var(--accent-1)",
        opacity: 0.3,
        filter: "blur(4px)",
      }}
    />
  );
}
