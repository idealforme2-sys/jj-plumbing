import { motion } from "motion/react";
import { Star, BadgeCheck } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    area: "Oak Hollow",
    quote: "Showed up in boot covers before I even said a word. Fixed the burst line under my sink in under an hour and left it spotless.",
  },
  {
    name: "Priya S.",
    area: "Cedar Ridge",
    quote: "They ran a camera down the line and showed me the blockage on a tablet before quoting anything. No surprises on the bill.",
  },
  {
    name: "Dan W.",
    area: "Millbrook",
    quote: "Called at 11pm for a burst pipe, tech was in my driveway in 38 minutes. Clean work, fair price, would call again in a heartbeat.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-20 md:py-24 bg-[#f5f0e8] text-[#0b1012]">
      <div className="section-divider" />
      <div className="absolute inset-0 site-grid opacity-[0.08] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
          <p className="text-[#83c95b] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">Straight From The Neighborhood</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1012]">Clean work. Honest pricing. On time.</h2>
          </div>
          <div className="rounded-2xl border border-[#0b1012]/10 bg-[#0b1012] px-6 py-5 shadow-xl shadow-black/10">
            <p className="text-4xl font-extrabold text-white">4.9/5</p>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#83c95b]">verified local rating</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, delay: i * 0.02 }}
              className="relative rounded-2xl border border-[#0b1012]/10 bg-white p-7 shadow-xl shadow-black/5 md:p-8"
            >
              <div className="flex items-center gap-1 mb-4 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[#1c292e] text-sm md:text-base leading-relaxed mb-6">&ldquo;{r.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#0b1012]/10">
                <span className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-[#517d35]">
                  <BadgeCheck size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0b1012]">{r.name}</p>
                  <p className="text-xs text-[#4f5a62]">{r.area} &bull; Verified Job</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
