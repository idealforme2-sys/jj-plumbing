import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Flame, Gauge, Minus, Phone, Plus, Search, Wrench } from "lucide-react";
import { brand } from "../data/site";

const FAQS = [
  {
    q: "Does the camera diagnostic cost extra?",
    a: "The video pipeline audit is included any time it's needed to confirm a diagnosis. You'll always see the footage and the price before we start work.",
    icon: Search,
  },
  {
    q: "What's covered under warranty?",
    a: "All repairs carry a 2-year labor warranty and manufacturer warranties on parts, typically 5-12 years depending on the component installed.",
    icon: Gauge,
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes. Every technician is state-licensed, background-checked, and fully insured, with license numbers listed in the footer of this site.",
    icon: Check,
  },
  {
    q: "How does emergency dispatch actually work?",
    a: "Emergency calls are routed to the nearest available technician immediately. We guarantee arrival within 45 minutes across our standard service radius, any hour of the day.",
    icon: Flame,
  },
  {
    q: "Do you give up-front pricing before starting work?",
    a: "Always. After the diagnostic, you'll get a flat, written price for the repair itself, with no hourly surprises added afterward.",
    icon: Wrench,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-secondary/40 pt-18 pb-16 md:pt-24 md:pb-22">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-copper" />
      <div aria-hidden className="absolute inset-0 bg-dots opacity-[0.08]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">Questions</p>
          <h2 className="section-title max-w-xl">Frequently Asked Questions</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-text-muted md:text-base">
            Quick answers about pricing, warranties, video diagnostics, emergency arrival windows, and what to expect before work begins.
          </p>

          <div className="mt-8 rounded-lg border border-white/10 bg-primary/70 p-5">
            <div className="mb-4 h-1 w-12 rounded-full bg-copper" />
            <p className="text-sm font-extrabold text-white">Still have a question?</p>
            <p className="mt-1 text-sm text-text-muted">Talk to a local plumbing dispatcher.</p>
            <a
              href={brand.phoneHref}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-extrabold text-primary transition-colors hover:bg-accent-hover"
            >
              <Phone size={16} />
              Call {brand.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const Icon = f.icon;

            return (
              <article
                key={f.q}
                className={[
                  "relative overflow-hidden rounded-lg border transition-colors",
                  isOpen
                    ? "border-accent/35 bg-[#10191b]"
                    : "border-white/10 bg-[#101619] hover:border-accent/25",
                ].join(" ")}
              >
                {isOpen && <div aria-hidden className="absolute inset-y-0 left-0 w-1 bg-copper" />}
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left md:px-5 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-accent">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-copper/90">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-sm font-bold leading-snug text-white md:text-base">{f.q}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary"
                  >
                    {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-5 pl-[4.75rem] text-sm leading-7 text-text-muted md:px-5 md:pb-6 md:pl-[5.25rem]">
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
