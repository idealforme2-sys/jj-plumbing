import { motion } from 'motion/react';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f5f0e8] py-20 text-[#0b1012] md:py-24">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#83c95b]" />
      <div className="absolute inset-0 site-grid opacity-[0.08] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[#517d35]">What we handle</p>
            <h2 className="section-title max-w-2xl text-[#0b1012]">Serious plumbing, finished like millwork.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#4f5a62]">
            From emergency shut-offs to polished fixture installs, every visit is built around clear communication and a clean finish.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.02 }}
              className="group min-h-[280px] rounded-xl border border-[#0b1012]/10 bg-white p-6 shadow-xl shadow-black/5"
            >
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#0b1012] text-[#83c95b] transition-transform group-hover:scale-105">
                <service.icon size={30} />
              </div>
              <h3 className="text-xl font-extrabold text-[#0b1012]">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#4f5a62]">{service.text}</p>
              <div className="mt-8 h-1 w-16 rounded-full bg-[#83c95b]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
