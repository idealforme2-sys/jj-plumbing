import { motion } from "motion/react";
import { Sparkles, ShieldCheck, BadgeCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden py-20 lg:py-28 bg-[#0b1012] text-white">
      {/* Background radial gradient & grid */}
      <div aria-hidden className="absolute inset-0 site-grid opacity-[0.08] pointer-events-none" />
      
      {/* The angled/divided background split layout exception */}
      <div aria-hidden className="absolute inset-y-0 right-0 w-[58%] pointer-events-none hidden md:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-[1fr_2.4fr] gap-12 items-center">
        
        {/* Left Column Heading */}
        <div className="space-y-4">
          <p className="section-kicker font-extrabold tracking-[0.2em] text-[#83c95b]">Our Guarantees</p>
          <h2 className="section-title text-3xl md:text-5xl font-black leading-tight font-heading text-white">
            The JJ Plumbing Promise
          </h2>
          <p className="text-sm text-[#a8b0b8] leading-relaxed hidden md:block">
            We hold ourselves to a higher standard of workmanship, licensing, and cleanliness on every visit.
          </p>
        </div>

        {/* Right Column Cards - Equal heights guaranteed by CSS Grid items-stretch */}
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          
          {/* Card 1: Clean Home Promise */}
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-2xl p-7 shadow-lg text-[#0b1012]"
          >
            <div>
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b1012]/5 text-[#517d35]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2 font-heading">
                Clean Home Promise
              </h3>
              <p className="text-xs leading-relaxed text-[#4f5a62]">
                Our technicians wear boot covers, lay down floor protective mats, and vacuum clean the service area after completing the repair.
              </p>
            </div>
            <span className="block mt-6 text-[10px] font-extrabold uppercase tracking-widest text-[#517d35]">
              Zero Mess Left Behind
            </span>
          </motion.article>

          {/* Card 2: Parts & Labor Covered */}
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl p-7 shadow-lg"
          >
            <div>
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EA580C]/10 text-[#EA580C]">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2 font-heading text-white">
                Parts & Labor Covered
              </h3>
              <p className="text-xs leading-relaxed text-[#a8b0b8]">
                We guarantee all materials and repair services with a full 2-year labor warranty. If a repair fails, we come back and fix it free.
              </p>
            </div>
            <span className="block mt-6 text-[10px] font-extrabold uppercase tracking-widest text-[#EA580C]">
              2-Year Warranty Lock
            </span>
          </motion.article>

          {/* Card 3: Licensed & Verified */}
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl p-7 shadow-lg"
          >
            <div>
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#83c95b]/10 text-[#83c95b]">
                <BadgeCheck size={20} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2 font-heading text-white">
                Licensed & Insured
              </h3>
              <p className="text-xs leading-relaxed text-[#a8b0b8]">
                Every technician dispatched to your home is a background-checked, drug-tested, and state-certified professional tradesperson.
              </p>
            </div>
            <span className="block mt-6 text-[10px] font-extrabold uppercase tracking-widest text-[#83c95b]">
              Technician Verified
            </span>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
