import { motion } from "motion/react";
import { BadgeCheck, Gauge, ShieldCheck, Sparkles } from "lucide-react";

export function Guarantee() {
  const guaranteeSteps = [
    {
      num: "01",
      title: "Cleanliness Guarantee",
      text: "If we don't wear floor-saver boot covers or leave a single spot of dirt in your home, the diagnostic fee is completely waived.",
      Icon: Sparkles,
      tone: "bg-chrome text-primary border-transparent",
      badge: "bg-accent text-primary",
      label: "CLEAN HOME PROMISE",
    },
    {
      num: "02",
      title: "1-Year Warranty",
      text: "Every pipe fitting, fixture, valve, and repair we perform is backed by our full 12-month worry-free parts and labor warranty.",
      Icon: Gauge,
      tone: "bg-[#10191b] text-white border-white/10",
      badge: "bg-copper text-white",
      label: "PARTS & LABOR COVERED",
    },
    {
      num: "03",
      title: "Certified Pros",
      text: "Every technician is fully licensed, insured, drug-tested, and background-checked for absolute security and peace of mind.",
      Icon: ShieldCheck,
      tone: "bg-[#132018] text-white border-accent/20",
      badge: "bg-accent text-primary",
      label: "LICENSED • INSURED • VERIFIED",
    },
  ] as const;

  return (
    <section id="guarantee" className="relative overflow-hidden bg-primary pt-18 pb-16 md:pt-22 md:pb-20">
      <div aria-hidden className="absolute inset-x-0 top-0 z-20 h-px bg-copper" />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[58%] w-full bg-accent/90 [clip-path:polygon(0_16%,100%_0,100%_100%,0_100%)] md:inset-y-0 md:h-auto md:w-[58%] md:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
      />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-8">
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#101719] p-6 md:p-8">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
              <BadgeCheck size={22} strokeWidth={3} />
            </div>
            <p className="section-kicker">OUR GUARANTEES</p>
            <h2 className="section-title max-w-lg">The JJ Plumbing Promise.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-text-muted md:text-base">
              Every service call is backed by concrete promises for clean work, warrantied repairs, and technicians you can trust inside your home.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
            {["Clean", "Covered", "Certified"].map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {guaranteeSteps.map(({ num, title, text, Icon, tone, badge, label }, index) => (
            <motion.article
              key={num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.42,
                delay: index * 0.06,
                y: { type: "spring", stiffness: 220, damping: 18 },
              }}
              className={`flex min-h-[330px] flex-col rounded-lg border p-5 shadow-xl shadow-black/15 ${tone}`}
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${badge}`}>
                  <Icon size={20} strokeWidth={2.6} />
                </span>
                <span className="font-heading text-4xl font-black leading-none opacity-20">{num}</span>
              </div>

              <h3 className="text-xl font-black tracking-tight text-inherit">{title}</h3>
              <p className="mt-4 text-sm leading-7 opacity-75">{text}</p>

              <div className="mt-auto flex items-center gap-3 border-t border-current/10 pt-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] opacity-70">{label}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
