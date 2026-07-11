import { motion } from 'motion/react';
import { processSteps } from '../data/site';
import { CheckCircle2 } from 'lucide-react';

export function Process() {
  return (
    <section id="process" className="bg-[#0b1012] py-24 lg:py-32 text-white relative overflow-hidden">
      
      {/* Sleek, stylized orange separator at the top */}
      <div className="absolute inset-x-0 top-0 flex flex-col items-center pointer-events-none">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent opacity-80" />
        <div className="w-1/2 h-2 bg-[#EA580C] blur-sm opacity-40 rounded-full -translate-y-1" />
        <div className="w-[10%] h-[3px] bg-white rounded-b-full shadow-[0_0_15px_#EA580C] opacity-90" />
      </div>

      <div className="absolute inset-0 site-grid opacity-20 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-kicker text-[#83c95b] mb-4">No mystery invoices</p>
          <h2 className="section-title text-white text-4xl lg:text-5xl font-black">
            A cleaner service call from start to finish.
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-[#a8b0b8]">
            Every visit follows the same simple standard: protect the home, diagnose clearly, quote before repair, and clean the work area.
          </p>
        </div>
        
        {/* Sequential Vertical Workflow Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main Vertical Track */}
          <div className="absolute left-[27px] sm:left-1/2 sm:-translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#83c95b] via-[#83c95b]/40 to-transparent rounded-full" />
          
          <div className="space-y-12 sm:space-y-24">
            {processSteps.map(([num, title, text], index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article 
                  key={num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16 ${
                    isEven ? 'sm:flex-row-reverse text-left' : 'text-left sm:text-right'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center shrink-0 z-10">
                    <div className="w-14 h-14 rounded-full bg-[#141b1e] border-2 border-[#83c95b] shadow-[0_0_20px_rgba(131,201,91,0.2)] flex items-center justify-center">
                      <span className="text-[#83c95b] font-black text-lg">{num}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="pl-20 sm:pl-0 sm:w-1/2 group">
                    <div className={`p-8 rounded-3xl border border-white/10 bg-[#141b1e]/80 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-[#83c95b]/50 hover:bg-[#141b1e] hover:-translate-y-1`}>
                      
                      <div className={`flex items-center gap-3 mb-4 ${!isEven ? 'sm:justify-end' : ''}`}>
                        <div className="bg-[#83c95b]/20 p-2 rounded-full text-[#83c95b]">
                          <CheckCircle2 size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#83c95b]">
                          Stage {num}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                        {title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-[#a8b0b8]">
                        {text}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty space for the other half */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
