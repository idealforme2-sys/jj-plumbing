import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { brand } from "../data/site";

const LOAD_DURATION = 1600;
const STEPS = ["🔧", "💧", "🚿", "✅"];

export default function CinematicEntrance({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setExiting(true);
      window.setTimeout(onDone, 420);
    }, prefersReducedMotion ? 500 : LOAD_DURATION);

    return () => window.clearTimeout(timer);
  }, [onDone, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#0b1012]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: "easeInOut" }}
        >
          <div aria-hidden className="absolute inset-0 bg-dots opacity-[0.12]" />
          <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-[#EA580C]" />

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 flex w-[min(86vw,420px)] flex-col items-center rounded-2xl border border-white/10 bg-[#101719]/95 p-8 text-center shadow-2xl shadow-black/45"
          >
            <img
              src={brand.logo}
              alt="JJ Plumbing"
              className="h-24 w-24 rounded-2xl bg-white object-contain p-2 shadow-xl shadow-black/35"
            />

            <h1 className="mt-5 font-heading text-2xl font-black uppercase tracking-[0.16em] text-white">
              JJ Plumbing
            </h1>
            <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#83c95b]">
              Getting everything flowing
            </p>

            <div className="relative mt-7 w-full px-3">
              <div className="absolute left-8 right-8 top-1/2 h-2 -translate-y-1/2 overflow-hidden rounded-full bg-white/10" />
              <motion.div
                aria-hidden
                className="absolute left-8 right-8 top-1/2 h-2 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-[#83c95b] via-[#d9a537] to-[#EA580C]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.25 : 1.25, ease: "easeInOut" }}
              />
              {!prefersReducedMotion && (
                <motion.div
                  aria-hidden
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#EA580C] shadow-[0_0_18px_rgba(234,88,12,.75)]"
                  initial={{ left: "10%" }}
                  animate={{ left: "88%" }}
                  transition={{ duration: 1.15, ease: "easeInOut" }}
                />
              )}
              <div className="relative flex items-center justify-between">
                {STEPS.map((step, index) => (
                  <motion.span
                    key={step}
                    initial={prefersReducedMotion ? false : { opacity: 0.45, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.18, duration: 0.25 }}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#0b1012] text-2xl"
                  >
                    {step}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="mt-7 text-xs font-semibold text-white/55">Loading your service experience...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
