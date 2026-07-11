import { motion } from 'motion/react';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f5f0e8] py-24 text-[#0b1012]">
      {/* Decorative top header bar */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#83c95b] to-transparent" />
      <div className="absolute inset-0 site-grid opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[#517d35]">What we handle</p>
            <h2 className="section-title max-w-2xl text-[#0b1012]">Serious plumbing, finished like millwork.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#4f5a62]">
            From emergency shut-offs to polished fixture installs, every visit is built around clear communication and a clean finish.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                y: { type: 'spring', stiffness: 200, damping: 15 } 
              }}
              className="group min-h-[300px] flex flex-col justify-between rounded-2xl border border-[#0b1012]/10 bg-white p-7 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:shadow-black/[0.06] transition-all"
            >
              <div>
                {/* Icon Circle */}
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0b1012] text-[#83c95b] shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon size={26} />
                </div>
                
                <h3 className="text-xl font-black text-[#0b1012] tracking-tight group-hover:text-[#517d35] transition-colors">
                  {service.title}
                </h3>
                
                <p className="mt-4 text-sm leading-relaxed text-[#4f5a62]">
                  {service.text}
                </p>
              </div>

              {/* Dynamic bottom bar indicator */}
              <div className="mt-8 relative h-1 w-full bg-[#0b1012]/5 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-16 bg-[#83c95b] rounded-full group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
