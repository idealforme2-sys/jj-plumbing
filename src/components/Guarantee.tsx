import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Guarantee() {
  const guaranteeSteps = [
    [
      '01',
      'Cleanliness Guarantee',
      "If we don't wear floor-saver boot covers or leave a single spot of dirt in your home, the diagnostic fee is completely waived.",
    ],
    [
      '02',
      '1-Year Warranty',
      'Every pipe fitting, fixture, valve, and repair we perform is backed by our full 12-month worry-free parts and labor warranty.',
    ],
    [
      '03',
      'Certified Pros',
      'Every technician is fully licensed, insured, drug-tested, and background-checked for absolute security and peace of mind.',
    ],
  ] as const;

  return (
    <section id="guarantee" className="border-y border-[#0b1012]/10 bg-[#83c95b] py-24 text-[#0b1012] relative overflow-hidden">
      {/* Decorative inner glow flare */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 relative z-10">
        {/* Left column info */}
        <div className="space-y-4">
          <p className="section-kicker text-[#3e6826] font-extrabold uppercase">Worry-free standards</p>
          <h2 className="section-title text-[#0b1012] font-black leading-tight">Our triple-check guarantee.</h2>
          <p className="text-base leading-relaxed text-[#1c292e] max-w-md">
            Every service call is backed by concrete promises. If we fail to meet these high finish standards, the job is on us.
          </p>
        </div>
        
        {/* Right column cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {guaranteeSteps.map(([num, title, text], index) => (
            <motion.article 
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                y: { type: 'spring', stiffness: 200, damping: 15 } 
              }}
              className="group rounded-2xl border border-[#0b1012]/10 bg-white p-7 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Step label */}
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#3e6826]">
                    Guarantee {num}
                  </span>
                  
                  {/* Glowing Checkmark */}
                  <div className="bg-[#83c95b]/10 p-1.5 rounded-full text-[#3e6826] group-hover:bg-[#83c95b] group-hover:text-white transition-colors duration-300">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#0b1012] tracking-tight">
                  {title}
                </h3>
                
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#4f5a62]">
                  {text}
                </p>
              </div>

              <div className="mt-8 border-t border-[#0b1012]/5 pt-4 text-[10px] font-extrabold uppercase tracking-widest text-[#3e6826]">
                100% Guaranteed
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
