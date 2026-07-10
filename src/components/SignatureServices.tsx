import { motion } from "motion/react";
import { Flame, Wrench, Search, Wind } from "lucide-react";

const SERVICES = [
  {
    icon: Flame,
    title: "Emergency Service",
    desc: "Active leak stopping, burst pipes, and main shut-off repairs handled the moment you call.",
  },
  {
    icon: Wind,
    title: "Drain Clears & Hydro-Jetting",
    desc: "High-pressure cleaning that blasts away grease, scale, and roots for a drain that stays clear.",
  },
  {
    icon: Search,
    title: "Video Pipeline Audits",
    desc: "High-tech camera inspections locate the exact blockage before we ever pick up a wrench.",
  },
  {
    icon: Wrench,
    title: "Water Heater Solutions",
    desc: "Tankless upgrades and same-day heater swaps, sized right and installed to code.",
  },
];

export default function SignatureServices() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-copper font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">Signature Services</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Built for the jobs that can't wait.</h2>
          <p className="text-text-muted text-base md:text-lg">
            Four core disciplines, one standard of work: honest pricing up front, and a job site
            left cleaner than we found it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group bg-secondary rounded-[32px] border-metallic p-8 transition-all hover:-translate-y-2 hover:border-accent/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <s.icon size={26} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
