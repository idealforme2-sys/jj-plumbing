import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Minus, Plus } from "lucide-react";
import { brand } from "../data/site";

const FAQS = [
  {
    q: "Does the camera diagnostic cost extra?",
    a: "The video pipeline audit is included any time it's needed to confirm a diagnosis. You'll always see the footage and the price before we start work.",
  },
  {
    q: "What's covered under warranty?",
    a: "All repairs carry a 2-year labor warranty and manufacturer warranties on parts, typically 5-12 years depending on the component installed.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes. Every technician is state-licensed, background-checked, and fully insured, with license numbers listed in the footer of this site.",
  },
  {
    q: "How does emergency dispatch actually work?",
    a: "Emergency calls are routed to the nearest available technician immediately. We guarantee arrival within 45 minutes across our standard service radius, any hour of the day.",
  },
  {
    q: "Do you give up-front pricing before starting work?",
    a: "Always. After the diagnostic, you'll get a flat, written price for the repair itself, with no hourly surprises added afterward.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0b1012] py-20 md:py-28 text-white">
      <div aria-hidden className="absolute inset-0 site-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#83c95b]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Two-column layout in a centered content container */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        
        {/* Left Column: Intro & Contact CTA */}
        <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
          <div>
            <p className="section-kicker font-extrabold tracking-[0.2em] text-[#83c95b]">Questions</p>
            <h2 className="section-title text-4xl font-black text-white lg:text-5xl font-heading leading-tight mt-2">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#a8b0b8] md:text-base">
              Quick answers about pricing, warranties, diagnostics, emergency dispatch arrival windows, and what to expect before work begins.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#141b1e]/90 p-6 shadow-lg max-w-md">
            <p className="text-sm font-bold text-white mb-1">Still have a question?</p>
            <p className="text-xs text-[#a8b0b8] leading-relaxed mb-5">Talk to a local plumbing dispatcher right now.</p>
            
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-[#83c95b] hover:bg-[#97df6d] text-[#0b1012] font-black text-xs md:text-sm py-3 px-5 transition-colors shadow-md"
            >
              <Phone size={14} className="animate-bounce shrink-0" />
              <span>Call Dispatch: {brand.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;

            return (
              <article
                key={f.q}
                className={`relative overflow-hidden rounded-xl border transition-all ${
                  isOpen
                    ? "border-[#83c95b]/30 bg-[#141b1e]/90 shadow-md"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
              >
                {isOpen && <div aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[#83c95b]" />}
                
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#83c95b]/80">
                      Question {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1.5 block text-base font-bold leading-snug text-white font-heading">{f.q}</span>
                  </span>
                  
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-[#83c95b] text-[#0b1012]" : "bg-white/5 text-[#a8b0b8]"
                  }`}>
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pt-1 text-sm leading-relaxed text-[#a8b0b8]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
