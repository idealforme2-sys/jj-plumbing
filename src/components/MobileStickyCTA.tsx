import { Phone, CalendarCheck } from "lucide-react";
import { brand } from "../data/site";

export default function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3">
      <div className="flex items-stretch gap-2 bg-primary/85 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
        <a
          href={brand.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm rounded-xl py-3"
        >
          <Phone size={16} />
          Call Dispatch
        </a>
        <a
          href="#quote"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-primary font-bold text-sm rounded-xl py-3"
        >
          <CalendarCheck size={16} />
          Book Service
        </a>
      </div>
    </div>
  );
}
