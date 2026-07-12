import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/site";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f5f0e8] py-24 text-[#0b1012] lg:py-32">
      <div className="section-divider" />
      <div className="absolute inset-0 site-grid opacity-[0.06] pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[52%] bg-[#0b1012]/[0.055] [clip-path:polygon(16%_0,100%_0,100%_100%,28%_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[22%] bg-[#83c95b]/18 [clip-path:polygon(0_0,100%_0,58%_100%,0_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="max-w-md lg:sticky lg:top-32">
            <p className="section-kicker mb-4 font-bold uppercase tracking-[0.2em] text-[#517d35]">What we handle</p>
            <h2 className="section-title mb-6 text-4xl font-black leading-[1.1] text-[#0b1012] lg:text-5xl">
              Serious plumbing, finished like millwork.
            </h2>
            <p className="mb-10 text-base leading-relaxed text-[#4f5a62] lg:text-lg">
              emergency shut-offs polished fixture installs, every visit built around clear communication, absolute precision, clean finish that treats home respect.
            </p>
            <div className="hidden h-1 w-20 rounded-full bg-[#83c95b] lg:block" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ scale: 1.02 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-[#0b1012]/5 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-[#83c95b]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#83c95b]/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center text-[#83c95b] transition-all duration-300 group-hover:scale-110 group-hover:text-[#517d35]">
                    <service.icon size={36} strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-3 text-xl font-black tracking-tight text-[#0b1012] transition-colors group-hover:text-[#517d35]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#4f5a62]">{service.text}</p>
                </div>

                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-[#0b1012]/5 pt-6 text-xs font-bold uppercase tracking-widest text-[#0b1012]/30 transition-colors group-hover:text-[#517d35]">
                  <span>Explore</span>
                  <ArrowRight size={14} className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
