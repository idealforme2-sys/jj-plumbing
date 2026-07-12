import { Phone, Calendar, Clock } from "lucide-react";
import { brand } from "../data/site";

export function PreFooterCTA() {
  const handleScrollToQuote = () => {
    document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#EA580C] text-white py-12 md:py-16 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/25 rounded-full px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-wider">
            <Clock size={12} className="animate-pulse" />
            <span>Emergency Dispatch Active</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight leading-tight">
            Urgent leak or active plumbing emergency?
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-xl">
            Don't wait for water damage to spread. Call our live dispatch desk now to send the closest technician in under 45 minutes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
          <a
            href={brand.phoneHref}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-[#EA580C] font-black text-base md:text-lg px-8 py-4.5 rounded-xl shadow-lg transition-all"
          >
            <Phone size={20} className="animate-bounce shrink-0" />
            <span>Call Now: {brand.phone}</span>
          </a>
          <button
            onClick={handleScrollToQuote}
            className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold text-sm md:text-base px-8 py-4.5 rounded-xl transition-all cursor-pointer"
          >
            <Calendar size={18} />
            <span>Book Online</span>
          </button>
        </div>
      </div>
    </section>
  );
}
