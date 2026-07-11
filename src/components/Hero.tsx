import { motion } from "motion/react";
import { Phone, ArrowRight, Wrench, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
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
  { icon: CheckCircle2, value: "Clean closeout", label: "photo verified" },
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
    <section id="top" className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-[linear-gradient(115deg,#0b1012_0%,#0b1012_56%,rgba(131,201,91,.16)_56%,rgba(131,201,91,.05)_100%)]">
      <div className="absolute inset-0 site-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <FlagWatermark />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-12 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent text-primary font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 shadow-[0_0_28px_rgba(131,201,91,.25)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Reliable. Honest. Quality. &bull; 24/7 Response
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.02] mb-6"
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
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold text-sm md:text-base px-7 py-4 rounded-full transition-transform hover:scale-[1.04] active:scale-95 shadow-[0_0_25px_rgba(132,204,22,0.25)]"
            >
              Schedule Service Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm md:text-base px-7 py-4 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
            >
              <Phone size={18} />
              Call Dispatch: {brand.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-2 max-w-xl"
          >
            {[
              ['45 min', 'priority arrival'],
              ['4.9/5', 'local rating'],
              ['1 year', 'repair warranty'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4">
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
          className="relative w-full max-w-[620px] lg:ml-auto"
        >
          <div className="rounded-[32px] border border-white/10 bg-secondary/80 p-3 shadow-[0_40px_120px_rgba(0,0,0,.45)] backdrop-blur">
            <div className="grid gap-3 md:grid-cols-[0.82fr_1fr]">
              <div className="rounded-[24px] border border-white/10 bg-primary p-4">
                <p className="text-xs font-extrabold uppercase tracking-[.18em] text-accent">Dispatch board</p>
                <div className="mt-5 space-y-3">
                  {DISPATCH_STATS.map(({ icon: Icon, value, label }) => (
                    <div key={value} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                      <Icon size={18} className="text-accent" />
                      <div>
                        <p className="text-sm font-extrabold text-white">{value}</p>
                        <p className="text-[11px] uppercase tracking-[.12em] text-text-muted">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[24px] p-1.5 bg-gradient-to-br from-copper via-accent/60 to-transparent">
                <div className="relative rounded-[20px] overflow-hidden bg-secondary border border-white/10 aspect-[4/5] md:aspect-[4/5]">
                  <img
                    src="/JJPLB.jpg"
                    alt="Technician performing a clean, precise pipe repair"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/5 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-primary/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                    <Wrench size={16} className="text-accent shrink-0" />
                    <span className="text-xs md:text-sm text-chrome font-medium">Live diagnostic feed &mdash; camera-verified repairs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -left-2 md:-left-8 -top-6 bg-accent text-primary rounded-2xl px-4 py-3 shadow-2xl max-w-[210px]"
          >
            <p className="font-extrabold text-xs uppercase tracking-wide mb-1">Under 45 Minutes</p>
            <p className="text-primary/75 text-xs leading-snug">Guaranteed dispatch for emergencies, day or night.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="absolute -right-3 md:-right-8 top-[58%] bg-secondary border border-copper/40 rounded-2xl px-4 py-3 shadow-2xl max-w-[220px]"
          >
            <p className="text-copper font-bold text-xs uppercase tracking-wide mb-1">100% Cleanliness</p>
            <p className="text-text-muted text-xs leading-snug">Boot covers &amp; drop cloths every visit &mdash; or the job's free.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-12 md:mt-16 border-y border-white/5 bg-secondary/40 py-4 overflow-hidden">
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
