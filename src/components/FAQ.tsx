import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">Questions</p>
          <h2 className="text-3xl md:text-5xl font-extrabold">Frequently Asked</h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="bg-secondary rounded-2xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white text-sm md:text-base">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-accent shrink-0">
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-text-muted text-sm md:text-base leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
