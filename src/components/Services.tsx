import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="relative bg-[#070a0c] py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="section-kicker mb-4 text-[#83c95b] uppercase tracking-widest font-bold text-sm">What we handle</p>
          <h2 className="section-title max-w-3xl text-white text-4xl md:text-5xl font-black tracking-tight">Serious plumbing, finished like millwork.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#fdfcfb] to-[#e2e8e6] p-8 shadow-xl shadow-black/20"
            >
              <div>
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[14px] bg-gradient-to-br from-white via-[#e2e8e6] to-[#c6d3d8] shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.05)] text-[#0b1012] transition-transform duration-300 group-hover:scale-110">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-xl font-black text-[#0b1012]">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[#4f5a62]">{service.text}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#0b1012]/10 pt-6 text-xs font-bold tracking-widest text-[#0b1012] uppercase transition-colors group-hover:text-[#517d35]">
                <span>Explore</span>
                <ArrowRight size={16} className="-translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
