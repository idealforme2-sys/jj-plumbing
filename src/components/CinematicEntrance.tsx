import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Droplet } from "lucide-react";

const DURATION = 3500;

export default function CinematicEntrance({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;
    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);
      if (elapsed < DURATION) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(onDone, 650);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary overflow-hidden"
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-noise pointer-events-none" />
          <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

          <span
            aria-hidden
            className="absolute select-none font-black text-accent/[0.05] leading-none pointer-events-none"
            style={{ fontSize: "35vw" }}
          >
            {progress}
          </span>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                  className="text-accent"
                >
                  <Droplet size={34} strokeWidth={2.5} fill="currentColor" className="md:w-10 md:h-10" />
                </motion.span>
                <h1
                  className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tight"
                  style={{ filter: "drop-shadow(0 6px 22px rgba(132,204,22,0.45))" }}
                >
                  JJ PLUMBING
                </h1>
              </motion.div>
            </div>

            <div className="overflow-hidden mt-3 md:mt-5">
              <motion.p
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="text-stroke-accent text-sm sm:text-lg md:text-2xl font-bold tracking-[0.3em] uppercase"
              >
                Reliable. Honest. Quality.
              </motion.p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary">
            <motion.div
              className="h-full bg-accent shadow-[0_0_15px_#84CC16]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
