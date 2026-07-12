import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { processSteps } from "../data/site";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-primary py-20 text-white lg:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-copper" />
      <div aria-hidden className="absolute inset-0 site-grid opacity-[0.12]" />
      <div aria-hidden className="absolute right-[-16%] top-0 h-full w-[56%] -skew-x-12 bg-secondary/80" />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[46%] bg-accent/10 [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-kicker">No mystery invoices</p>
            <h2 className="section-title max-w-xl">A cleaner service call from start to finish.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-muted md:text-base">
            Every visit follows the same simple standard: protect the home, diagnose clearly, quote before repair, and clean the work area.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 lg:grid-cols-3">
          <div aria-hidden className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-accent via-copper to-accent lg:block" />

          {processSteps.map(([num, title, text], index) => (
            <motion.article
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative rounded-lg border border-white/10 bg-[#101719]/90 p-6 shadow-xl shadow-black/20"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/35 bg-primary text-lg font-black text-accent">
                  {num}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-copper">
                  Stage {num}
                </span>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-accent" strokeWidth={2.7} />
                <h3 className="text-2xl font-black text-white">{title}</h3>
              </div>
              <p className="text-sm leading-7 text-text-muted">{text}</p>

              {index < processSteps.length - 1 && (
                <span aria-hidden className="mt-6 block h-px w-full bg-white/10 lg:hidden" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
