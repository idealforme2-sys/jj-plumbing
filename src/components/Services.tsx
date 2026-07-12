import { motion } from 'motion/react';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="relative bg-[#0b1012] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker text-[#83c95b]">What we handle</p>
            <h2 className="section-title max-w-2xl text-white">Serious plumbing, finished like millwork.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#a8b0b8]">
            From emergency shut-offs to polished fixture installs, every visit is built around clear communication and a clean finish.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
              className="site-card rounded-lg p-6"
            >
              <service.icon className="mb-8 text-[#8fb3c7]" size={30} />
              <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#a8b0b8]">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
