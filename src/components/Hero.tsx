import { motion } from "motion/react";
import { Phone, ArrowRight, Wrench } from "lucide-react";

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

function FlagWatermark() {
  return (
    <svg
      viewBox="0 0 900 500"
      className="absolute -right-24 -top-10 w-[70vw] max-w-[900px] opacity-[0.05] pointer-events-none select-none"
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
    <section id="top" className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <FlagWatermark />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent font-bold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Reliable. Honest. Quality. &bull; 24/7 Response
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.04] mb-6"
          >
            No Drips. No Mess.
            <br />
            Just <span className="text-accent">Quality Plumbing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-text-muted text-base md:text-lg max-w-xl mb-9"
          >
            Local, licensed technicians who show up on time, explain every option in plain
            English, and treat your home like their own &mdash; boot covers and drop cloths on
            every job, guaranteed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold text-sm md:text-base px-7 py-4 rounded-full transition-transform hover:scale-[1.04] active:scale-95 shadow-[0_0_25px_rgba(132,204,22,0.25)]"
            >
              Schedule Service Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:5555575862"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm md:text-base px-7 py-4 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
            >
              <Phone size={18} />
              Call Dispatch: (555) JJ-PLUMB
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-5 max-w-xl"
          >
            {[
              ['45 min', 'priority arrival'],
              ['4.9/5', 'local rating'],
              ['1 year', 'repair warranty'],
            ].map(([value, label]) => (
              <div key={value} className="px-4 first:pl-0">
                <div className="text-2xl font-extrabold text-white">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[.16em] text-text-muted">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative rounded-[32px] p-1.5 bg-gradient-to-br from-copper via-copper/40 to-transparent">
            <div className="relative rounded-[28px] overflow-hidden bg-secondary border border-white/10 aspect-[4/5] md:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                alt="Technician performing a clean, precise pipe repair"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 bg-primary/70 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                <Wrench size={16} className="text-accent shrink-0" />
                <span className="text-xs md:text-sm text-chrome font-medium">Live diagnostic feed &mdash; camera-verified repairs</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -left-4 md:-left-10 top-8 bg-secondary border-metallic rounded-2xl px-4 py-3 shadow-2xl max-w-[210px]"
          >
            <p className="text-accent font-bold text-xs uppercase tracking-wide mb-1">Under 45 Minutes</p>
            <p className="text-text-muted text-xs leading-snug">Guaranteed dispatch for emergencies, day or night.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="absolute -right-3 md:-right-8 bottom-10 bg-secondary border border-copper/30 rounded-2xl px-4 py-3 shadow-2xl max-w-[220px]"
          >
            <p className="text-copper font-bold text-xs uppercase tracking-wide mb-1">100% Cleanliness</p>
            <p className="text-text-muted text-xs leading-snug">Boot covers &amp; drop cloths every visit &mdash; or the job's free.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 md:mt-24 border-y border-white/5 bg-secondary/40 py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-10 text-sm md:text-base font-semibold uppercase tracking-wide"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-text-muted">
              {item}
              <span className="text-accent">&bull;</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
