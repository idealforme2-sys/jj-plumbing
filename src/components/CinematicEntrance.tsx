import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { brand } from '../data/site';
import { ShieldCheck, Droplet, Eye, CheckCircle2 } from 'lucide-react';

const DURATION = 3800; // 3.8s for smooth, readable text transitions

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
        setTimeout(onDone, 750);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  // Determine stage based on progress percent
  const getStageInfo = () => {
    if (progress < 25) {
      return { 
        text: 'Live Dispatch Desk & Triage Active', 
        sub: 'Mapping closest technician route...', 
        icon: ShieldCheck 
      };
    } else if (progress < 55) {
      return { 
        text: 'Deploying Pipe Audit & Camera Scans', 
        sub: 'Checking line obstructions & joints...', 
        icon: Eye 
      };
    } else if (progress < 80) {
      return { 
        text: 'Calibrating System Flow & Pressure', 
        sub: 'Diagnosing psi levels & pressure leaks...', 
        icon: Droplet 
      };
    } else if (progress < 100) {
      return { 
        text: 'Locking Flat Price Estimate', 
        sub: 'Finalizing guaranteed quotes...', 
        icon: CheckCircle2 
      };
    } else {
      return { 
        text: 'System Ready', 
        sub: 'Clean finish closeout loaded.', 
        icon: CheckCircle2 
      };
    }
  };

  const stage = getStageInfo();
  const CurrentIcon = stage.icon;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b1012] overflow-hidden"
          exit={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            y: '-5vh'
          }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Visual Textures */}
          <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />
          <div className="absolute inset-0 bg-dots opacity-[0.15] pointer-events-none" />
          
          {/* Ambient Glowing Green Beacons */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#83c95b]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#83c95b]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Large dynamic background watermark representing progress */}
          <span
            aria-hidden
            className="absolute select-none font-black text-[#83c95b]/[0.02] leading-none pointer-events-none select-none font-mono"
            style={{ fontSize: '38vw', bottom: '-8vw', right: '-8vw' }}
          >
            {progress.toString().padStart(3, '0')}
          </span>

          <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-xl">
            
            {/* Logo and Brand Heading */}
            <div className="overflow-hidden flex flex-col items-center mb-12">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.div 
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(131,201,91,0.2)', '0 0 35px rgba(131,201,91,0.4)', '0 0 20px rgba(131,201,91,0.2)']
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-2xl border-2 border-[#83c95b] bg-[#0b1012] p-3 w-16 h-16 flex items-center justify-center"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider font-heading uppercase mt-2">
                  JJ Plumbing
                </h1>
              </motion.div>
            </div>

            {/* Diagnostic Stage Card (Obsidian glass style) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full bg-[#141b1e]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#83c95b]/30 to-transparent" />
              
              <div className="flex items-center gap-4">
                <div className="bg-[#83c95b]/10 border border-[#83c95b]/20 p-3 rounded-xl text-[#83c95b] shrink-0 animate-pulse">
                  <CurrentIcon size={20} />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-widest text-[#83c95b] font-extrabold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#83c95b] inline-block animate-ping" />
                    Diagnostics &bull; {progress}%
                  </div>
                  <h2 className="text-sm sm:text-base font-bold text-white mt-1 truncate">
                    {stage.text}
                  </h2>
                  <p className="text-[11px] text-[#a8b0b8] mt-0.5 truncate">
                    {stage.sub}
                  </p>
                </div>
              </div>

              {/* Progress track inside the card */}
              <div className="mt-5 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#83c95b] rounded-full shadow-[0_0_8px_#83c95b]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </motion.div>

          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
