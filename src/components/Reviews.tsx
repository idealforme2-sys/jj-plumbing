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
    <section id="reviews" className="relative py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-copper font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">Straight From The Neighborhood</p>
          <h2 className="text-3xl md:text-5xl font-extrabold">Clean work. Honest pricing. On time.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative bg-secondary rounded-[28px] border border-white/10 p-7 md:p-8"
            >
              <div className="flex items-center gap-1 mb-4 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-chrome text-sm md:text-base leading-relaxed mb-6">&ldquo;{r.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <span className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <BadgeCheck size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-text-muted">{r.area} &bull; Verified Job</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
