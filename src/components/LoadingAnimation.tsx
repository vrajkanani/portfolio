"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // If the user has already visited in this session, don't show the loader
    if (sessionStorage.getItem("hasVisited")) {
      if (isMounted) setLoading(false);
      return;
    }

    const handleLoad = () => {
      if (isMounted) {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }
    };

    // If the page is already fully loaded by the time this runs
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Otherwise wait for the load event
      window.addEventListener("load", handleLoad);
      
      // Fallback timeout just in case the load event is delayed indefinitely
      const fallbackTimer = setTimeout(handleLoad, 4000);
      
      return () => {
        isMounted = false;
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
    
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <style>{`
        .md-spinner {
          animation: md-spinner-rotate 2s linear infinite;
        }
        .md-spinner-circle {
          stroke-dasharray: 1, 150;
          stroke-dashoffset: 0;
          animation: md-spinner-dash 1.5s ease-in-out infinite;
          stroke-linecap: round;
        }
        @keyframes md-spinner-rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes md-spinner-dash {
          0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
          }
        }
      `}</style>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-200 flex items-center justify-center overflow-hidden bg-[var(--bg-gradient)] backdrop-blur-md"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center gap-6">
              <svg 
                className="h-16 w-16 md-spinner" 
                viewBox="25 25 50 50"
              >
                <circle
                  className="stroke-[var(--accent-1)] md-spinner-circle"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="4"
                />
              </svg>
              <motion.p 
                className="text-lg font-medium tracking-widest text-foreground uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Loading
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
