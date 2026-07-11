import { motion } from 'motion/react';
import { processSteps } from '../data/site';

export function Process() {
  return (
    <section id="process" className="border-y border-white/5 bg-[#f5f0e8] py-24 text-[#0b1012] relative overflow-hidden">
      <div className="absolute inset-0 site-grid opacity-[0.05] pointer-events-none" />
      
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 relative z-10">
        {/* Left Column Text */}
        <div className="space-y-4">
          <p className="section-kicker text-[#517d35]">No mystery invoices</p>
          <h2 className="section-title text-[#0b1012]">A cleaner service call from start to finish.</h2>
          <p className="text-base leading-relaxed text-[#4f5a62] max-w-md">
            Every visit follows the same simple standard: protect the home, diagnose clearly, quote before repair, and clean the work area.
          </p>
        </div>
        
        {/* Right Column Step Cards with Connector Lines */}
        <div className="relative">
          {/* Desktop connecting pipeline line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#83c95b]/40 via-[#83c95b] to-[#83c95b]/40 pointer-events-none z-0" />
          
          <div className="grid gap-6 md:grid-cols-3 relative z-10">
            {processSteps.map(([num, title, text], index) => (
              <motion.article 
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  y: { type: 'spring', stiffness: 200, damping: 15 } 
                }}
                className="rounded-2xl border border-[#0b1012]/10 bg-white p-7 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:shadow-[#83c95b]/10 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="mb-8 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#83c95b]/15 text-[#517d35] font-black text-sm relative">
                    <span className="absolute inset-0 rounded-full bg-[#83c95b] opacity-10 animate-ping" />
                    {num}
                  </div>
                  
                  <h3 className="text-xl font-black text-[#0b1012] tracking-tight">
                    {title}
                  </h3>
                  
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#4f5a62]">
                    {text}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#0b1012]/5 pt-4 text-[10px] font-extrabold uppercase tracking-widest text-[#517d35]">
                  Stage {num} Complete
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
