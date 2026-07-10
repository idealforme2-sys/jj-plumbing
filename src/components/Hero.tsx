import { motion } from 'motion/react';
import { ArrowRight, Clock, PhoneCall, ShieldCheck, Star } from 'lucide-react';
import { brand } from '../data/site';
import { BrandLogo } from './BrandLogo';

export function Hero() {
  return (
    <section className="relative min-h-[94vh] overflow-hidden pt-20">
      {/* Background Image & Overlays */}
      <img
        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=88&w=1800"
        alt="Professional plumber working"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,16,18,.96),rgba(11,16,18,.78)_48%,rgba(11,16,18,.28))]" />
      <div className="site-grid absolute inset-0 opacity-30" />
      
      <div className="relative mx-auto grid min-h-[calc(94vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_360px] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[.18em] text-[#f5f0e8]">
            <Clock size={15} className="text-[#83c95b]" />
            24/7 emergency dispatch
          </div>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[.96] tracking-normal text-white sm:text-6xl lg:text-8xl">
            Plumbing done clean.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7dde2] sm:text-xl">
            Premium residential plumbing for leaks, drains, water heaters, and finish-quality repairs. Clear pricing, tidy work, warrantied results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote-tool" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#83c95b] px-6 py-3 text-sm font-bold text-[#0b1012] transition hover:bg-[#97df6d]">
              Schedule service <ArrowRight size={18} />
            </a>
            <a href={brand.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15">
              <PhoneCall size={18} /> Call {brand.phone}
            </a>
          </div>
          
          {/* Quick Metrics (45 min, 4.9/5, 1 year warranty) */}
          <div className="mt-10 grid max-w-2xl grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-5">
            {[
              ['45 min', 'priority arrival'],
              ['4.9/5', 'local rating'],
              ['1 year', 'repair warranty'],
            ].map(([value, label]) => (
              <div key={value} className="px-4 first:pl-0">
                <div className="text-2xl font-extrabold text-white">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[.16em] text-[#a8b0b8]">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Sidebar Info Card (Logo, Credentials list) */}
        <motion.aside
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="hidden rounded-lg border border-white/15 bg-[#0b1012]/78 p-6 shadow-2xl shadow-black/40 backdrop-blur lg:block"
        >
          <BrandLogo />
          <div className="mt-8 space-y-4">
            {[
              [ShieldCheck, 'Licensed, insured, background-checked technicians'],
              [Star, 'Premium finish standards on every repair'],
              [Clock, 'Live dispatch for active leaks and no-water calls'],
            ].map(([Icon, text]) => (
              <div key={text as string} className="flex gap-3 rounded-md border border-white/10 bg-white/[.04] p-4">
                <Icon className="mt-0.5 shrink-0 text-[#83c95b]" size={20} />
                <p className="text-sm font-semibold leading-6 text-[#d7dde2]">{text as string}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
