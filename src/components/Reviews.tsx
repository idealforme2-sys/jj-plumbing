import { motion } from "motion/react";
import { BadgeCheck, Star } from "lucide-react";

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
    <section id="reviews" className="relative overflow-hidden bg-[#f5f0e8] py-20 text-[#0b1012] md:py-28">
      <div className="absolute inset-0 site-grid opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Header Block with Rating */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#517d35] md:text-sm">Straight From The Neighborhood</p>
            <h2 className="text-3xl font-extrabold text-[#0b1012] md:text-5xl leading-tight font-heading">
              Clean work. Honest pricing. On time.
            </h2>
          </div>
          
          <div className="rounded-2xl border border-[#0b1012]/15 bg-[#0b1012] px-6 py-5 shadow-lg text-left shrink-0">
            <p className="text-4xl font-black text-white font-heading">4.9/5</p>
            <div className="flex items-center gap-1 my-1.5 text-[#83c95b]">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#83c95b]">Verified Local Rating</p>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-[#0b1012]/10 bg-white p-7 shadow-sm md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center gap-0.5 text-[#83c95b]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-[#4f5a62] italic">&ldquo;{r.quote}&rdquo;</p>
              </div>

              <div className="flex items-center gap-3 border-t border-[#0b1012]/10 pt-4 mt-auto">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#83c95b]/10 text-[#517d35]">
                  <BadgeCheck size={16} />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0b1012]">{r.name}</p>
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
