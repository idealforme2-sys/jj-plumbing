import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, ClipboardList } from "lucide-react";
import { processSteps } from "../data/site";

export function Process() {
  const icons = [ClipboardList, ShieldCheck, CheckCircle2];

  return (
    <section id="process" className="relative overflow-hidden bg-[#0b1012] py-20 text-white lg:py-28">
      <div aria-hidden className="absolute inset-0 site-grid opacity-[0.08] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="section-kicker font-extrabold tracking-[0.2em] text-[#83c95b]">No Mystery Invoices</p>
          <h2 className="section-title text-4xl font-black text-white lg:text-5xl leading-tight font-heading">
            A cleaner service call from start to finish.
          </h2>
          <p className="text-sm leading-relaxed text-[#a8b0b8] md:text-base">
            Every home visit follows the same simple standard: protect the home, diagnose clearly, quote before repair, and clean the work area.
          </p>
        </div>

        {/* 3-Step Process Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map(([num, title, text], index) => {
            const Icon = icons[index] || CheckCircle2;
            return (
              <motion.article
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative rounded-2xl border border-white/5 bg-[#141b1e]/90 p-8 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-[#83c95b]/20 tracking-tight font-heading">0{num}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#83c95b]/10 text-[#83c95b]">
                      <Icon size={22} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-white mb-4 font-heading">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#a8b0b8]">{text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
