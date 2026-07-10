import { motion } from "motion/react";
import { PhoneCall, Video, SprayCan } from "lucide-react";

const STEPS = [
  {
    icon: PhoneCall,
    label: "Step 1",
    title: "Rapid Booking",
    desc: "Call dispatch or grab an open service slot online. We confirm your window in minutes.",
  },
  {
    icon: Video,
    label: "Step 2",
    title: "Transparent Camera Diagnostic",
    desc: "Your tech arrives, runs a video line inspection, and walks you through options with up-front pricing before any work starts.",
  },
  {
    icon: SprayCan,
    label: "Step 3",
    title: "Clean Execution",
    desc: "The repair is made with premium copper or PEX materials, then the work area is fully sanitized and inspected.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">The JJ Diagnostics Cycle</p>
          <h2 className="text-3xl md:text-5xl font-extrabold">How It Works</h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="hidden md:block absolute top-7 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-accent/40 via-copper/40 to-accent/40" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="relative z-10 w-14 h-14 rounded-full bg-primary border-2 border-accent flex items-center justify-center mb-6">
                <s.icon size={24} className="text-accent" />
              </div>
              <p className="text-copper font-bold text-xs uppercase tracking-widest mb-2">{s.label}</p>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
