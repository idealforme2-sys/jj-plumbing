import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { brand } from '../data/site';

const LOAD_DURATION = 1500; // 1.5 seconds max

export default function CinematicEntrance({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion, just show it briefly then exit
    const duration = prefersReducedMotion ? 500 : LOAD_DURATION;
    
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onDone, 500); // 500ms fade out transition
    }, duration);
    
    return () => clearTimeout(timer);
  }, [onDone, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b1012] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {prefersReducedMotion ? (
            // Static fallback for reduced motion
            <div className="flex flex-col items-center">
              <img src={brand.logo} alt="JJ Plumbing" className="h-16 w-16 mb-4 object-contain" />
              <h1 className="text-xl font-extrabold text-white tracking-[0.2em] uppercase">JJ Plumbing</h1>
              <p className="mt-2 text-xs text-[#83c95b]">Getting everything flowing...</p>
            </div>
          ) : (
            // Full Plumbing Animation Sequence
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Brand Logo */}
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                src={brand.logo}
                alt="JJ Plumbing"
                className="h-14 w-14 object-contain mb-8"
              />

              {/* Pipe & Water Animation Container */}
              <div className="relative w-48 h-20 flex flex-col items-center">
                
                {/* The Pipe (Empty) */}
                <motion.div 
                  className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* The Water Filling */}
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0EA5E9] to-[#83c95b]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* The Droplet falling from the center of the pipe */}
                <motion.div 
                  className="absolute top-[3px] w-2 h-2 rounded-full bg-[#83c95b]"
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [0, 0, 40, 45], scale: [0, 1, 1, 0.5] }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeIn" }}
                />

                {/* The Ripple on the ground */}
                <motion.div 
                  className="absolute top-[42px] w-8 h-2 rounded-full border border-[#83c95b]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0, 0.8, 0], scale: [0.2, 0.2, 2, 2.5] }}
                  transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                />
              </div>

              {/* Typography Branding */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center -mt-2"
              >
                <h1 className="text-base md:text-lg font-extrabold text-white tracking-[0.2em] uppercase">
                  JJ Plumbing
                </h1>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#83c95b] font-medium">
                  Getting everything flowing...
                </p>
              </motion.div>

            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
