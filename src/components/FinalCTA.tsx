import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] overflow-hidden bg-secondary border-metallic px-8 py-14 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-copper/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 max-w-2xl mx-auto">
              A small drip today is a flooded floor tomorrow.
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-10">
              Catch it early. A same-week inspection costs far less than emergency water damage
              restoration &mdash; and it's a lot less stressful too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold text-sm md:text-base px-7 py-4 rounded-full hover:scale-[1.04] active:scale-95 transition-transform"
              >
                Schedule Service Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:5555575862"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm md:text-base px-7 py-4 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                Call Dispatch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
