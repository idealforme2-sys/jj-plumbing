import { motion } from "motion/react";
import { Phone, ArrowRight, Wrench, Clock, ShieldCheck, CheckCircle, Radio } from "lucide-react";
import { brand } from "../data/site";

const MARQUEE_ITEMS = [
  "Emergency Service",
  "Drain Cleaning",
  "Leak Detection",
  "Water Heaters",
  "Repiping",
  "Camera Diagnostics",
  "Sewer Line Repairs",
  "Hydro-Jetting",
  "Licensed & Insured",
  "We Leave It Cleaner Than We Found It!",
];

const DISPATCH_STATS = [
  { icon: Clock, value: "45 min", label: "priority arrival" },
  { icon: ShieldCheck, value: "Licensed", label: "insured technicians" },
  { icon: CheckCircle, value: "Clean closeout", label: "photo verified" },
];

function FlagWatermark() {
  return (
    <svg
      viewBox="0 0 900 500"
      className="absolute -right-24 -top-10 w-[70vw] max-w-[900px] opacity-[0.03] pointer-events-none select-none"
      aria-hidden
    >
      {Array.from({ length: 13 }).map((_, i) => (
        <rect key={i} x="0" y={i * (500 / 13)} width="900" height={500 / 13} fill={i % 2 === 0 ? "#E2E8F0" : "transparent"} />
      ))}
      <rect x="0" y="0" width="360" height={500 * (7 / 13)} fill="#84CC16" />
      {Array.from({ length: 24 }).map((_, i) => {
        const row = Math.floor(i / 6);
        const col = i % 6;
        return (
          <circle
            key={i}
            cx={40 + col * 58}
            cy={35 + row * 52}
            r="9"
            fill="#09090B"
          />
        );
      })}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#0b1012]">
      {/* Dynamic Background Layout */}
      <div className="absolute inset-0 site-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <FlagWatermark />
      
      {/* Floating Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#83c95b]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#EA580C]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1012] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Column (Content) */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#83c95b]/20 bg-[#83c95b]/10 text-[#83c95b] font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm mb-8 shadow-[0_0_30px_rgba(131,201,91,.15)]"
          >
            <Radio size={12} className="animate-pulse text-[#83c95b]" />
            <span>Reliable. Honest. Quality. &bull; 24/7 Dispatch active</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white"
          >
            No Drips. No Mess.<br />
            Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83c95b] to-[#97df6d]">Quality Plumbing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a8b0b8] text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Local, licensed technicians who show up on time, explain every option in plain English, and treat your home like their own &mdash; boot covers and drop cloths on every job, guaranteed.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 bg-[#83c95b] hover:bg-[#97df6d] text-[#0b1012] font-black text-sm md:text-base px-8 py-4.5 rounded-xl transition-all shadow-[0_4px_30px_rgba(131,201,91,0.25)] hover:shadow-[0_4px_40px_rgba(131,201,91,0.4)]"
            >
              Schedule Service Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#83c95b]/30 bg-white/[0.02] hover:bg-white/[0.06] text-white font-bold text-sm md:text-base px-8 py-4.5 rounded-xl transition-all"
            >
              <Phone size={18} className="text-[#83c95b]" />
              Call Dispatch: {brand.phone}
            </a>
          </motion.div>

          {/* Minimal stats block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 max-w-lg"
          >
            {[
              ['45 min', 'priority arrival'],
              ['4.9/5', 'local rating'],
              ['1 year', 'repair warranty'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left shadow-inner">
                <div className="text-2xl font-black text-white font-heading">{value}</div>
                <div className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-[#a8b0b8]">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column (Hologram Console Mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[620px] lg:ml-auto"
        >
          <div className="rounded-[36px] border border-white/10 bg-[#141b1e]/75 p-4 shadow-[0_40px_100px_rgba(0,0,0,.6)] backdrop-blur-xl relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83c95b]/30 to-transparent" />
            
            <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
              {/* Dispatch Stats Dashboard */}
              <div className="rounded-2xl border border-white/5 bg-[#0b1012]/80 p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-noise opacity-[0.03]" />
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#83c95b]">SLA Dispatch Board</p>
                    <span className="w-2 h-2 rounded-full bg-[#83c95b] animate-ping" />
                  </div>
                  <div className="mt-6 space-y-4">
                    {DISPATCH_STATS.map(({ icon: Icon, value, label }) => (
                      <div key={value} className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 shadow-sm">
                        <div className="bg-[#83c95b]/10 p-2 rounded-lg text-[#83c95b]">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-white leading-none">{value}</p>
                          <p className="text-[10px] uppercase tracking-wider text-[#a8b0b8] mt-1">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 border-t border-white/5 pt-4">
                  <p className="text-[10px] text-[#a8b0b8] leading-relaxed">
                    All technicians are tracked in real-time. Estimate locked via secure digital signature.
                  </p>
                </div>
              </div>

              {/* Graphic Monitor Feed */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-br from-[#EA580C]/20 via-[#83c95b]/30 to-transparent">
                <div className="relative rounded-[18px] overflow-hidden bg-[#141b1e] border border-white/10 aspect-[4/5]">
                  <img
                    src="/JJPLB.jpg"
                    alt="Technician performing a clean, precise pipe repair"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[15%] brightness-[95%] hover:scale-105 transition-transform duration-700"
                  />
                  {/* Digital overlay grids and brackets */}
                  <div className="absolute inset-0 bg-dots opacity-[0.12] pointer-events-none" />
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#83c95b]/70" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#83c95b]/70" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#83c95b]/70" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#83c95b]/70" />
                  
                  <div className="absolute inset-x-0 bottom-4 px-4 pointer-events-none">
                    <div className="flex items-center gap-2.5 bg-[#0b1012]/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 shadow-2xl">
                      <Wrench size={14} className="text-[#83c95b] shrink-0 animate-bounce" />
                      <span className="text-[11px] text-white font-bold tracking-wide">Live diagnostic scan feed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Absolute floating detail cards */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -left-6 -top-6 bg-[#0b1012] border border-[#83c95b]/20 text-white rounded-2xl px-5 py-4.5 shadow-2xl max-w-[210px] hidden sm:block backdrop-blur-md"
          >
            <p className="font-black text-xs uppercase tracking-wider text-[#83c95b] mb-1">Under 45 Minutes</p>
            <p className="text-[#a8b0b8] text-[11px] leading-relaxed">Guaranteed dispatch for emergencies, day or night.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="absolute -right-6 top-[55%] bg-[#0b1012] border border-[#EA580C]/20 rounded-2xl px-5 py-4.5 shadow-2xl max-w-[220px] hidden sm:block backdrop-blur-md"
          >
            <p className="text-[#EA580C] font-black text-xs uppercase tracking-wider mb-1">100% Cleanliness</p>
            <p className="text-[#a8b0b8] text-[11px] leading-relaxed">Boot covers &amp; drop cloths every visit &mdash; or the job's free.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker Tape Marquee */}
      <div className="relative mt-16 md:mt-24 border-y border-white/5 bg-[#141b1e]/40 py-4.5 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        <motion.div
          className="flex whitespace-nowrap gap-12 text-xs md:text-sm font-extrabold uppercase tracking-widest"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-12 text-[#a8b0b8]">
              {item}
              <span className="text-[#83c95b] font-bold">&bull;</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
