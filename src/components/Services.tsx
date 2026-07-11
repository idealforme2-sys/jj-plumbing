import { motion } from 'motion/react';
import { services } from '../data/site';
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f5f0e8] py-24 lg:py-32 text-[#0b1012]">
      <div className="section-divider" />
      <div className="absolute inset-0 site-grid opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Anchor & Sticky Header */}
          <div className="lg:sticky lg:top-32 max-w-md">
            <p className="section-kicker text-[#517d35] mb-4 uppercase tracking-[0.2em] font-bold">What we handle</p>
            <h2 className="section-title text-[#0b1012] mb-6 font-black text-4xl lg:text-5xl leading-[1.1]">
              Serious plumbing, finished like millwork.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-[#4f5a62] mb-10">
              From emergency shut-offs to polished fixture installs, every visit is built around clear communication, absolute precision, and a clean finish that treats your home with respect.
            </p>
            <div className="hidden lg:block w-20 h-1 bg-[#83c95b] rounded-full" />
          </div>

          {/* Right Column: Sleek 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#0b1012]/5 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#83c95b]/10 transition-all overflow-hidden min-h-[280px]"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#83c95b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Clean, large icon treatment */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center text-[#83c95b] group-hover:scale-110 group-hover:text-[#517d35] transition-all duration-300">
                    <service.icon size={36} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-black text-[#0b1012] tracking-tight mb-3 group-hover:text-[#517d35] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-[#4f5a62]">
                    {service.text}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-6 border-t border-[#0b1012]/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#0b1012]/30 group-hover:text-[#517d35] transition-colors">
                  <span>Explore</span>
                  <ArrowRight size={14} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
