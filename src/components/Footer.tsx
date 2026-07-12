import { Phone } from "lucide-react";
import { brand } from "../data/site";

const COLUMNS = [
  {
    title: "Services",
    links: ["Emergency Repair", "Drain & Hydro-Jetting", "Camera Diagnostics", "Water Heaters", "Repiping"],
  },
  {
    title: "Company",
    links: ["Service Area", "Reviews", "FAQ", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Warranty Terms"],
  },
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 8.5V7.2c0-.7.5-1.2 1.2-1.2H17V3h-2.6C11.7 3 10 4.7 10 7.3v1.2H8v3h2V21h3.2v-9.5h2.7l.5-3H13.2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-28 lg:pb-16 border-t border-white/5">
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <a href="#top" className="flex items-center gap-3 mb-4">
              <img src={brand.logo} alt={`${brand.name} logo`} className="h-12 w-12 rounded-lg bg-white object-contain p-1 shadow-lg shadow-black/30" />
              <span className="font-heading font-bold text-lg text-white">
                JJ <span className="text-accent">PLUMBING</span>
              </span>
            </a>
            <p className="text-text-muted text-sm max-w-xs mb-5">
              Reliable. Honest. Quality. Licensed plumbing repair and installation, 24 hours a day.
            </p>
            <a href={brand.phoneHref} className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm font-bold text-accent hover:bg-accent hover:text-primary transition-colors">
              <Phone size={15} />
              {brand.phone}
            </a>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-white/[0.04] transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 hover:bg-white/[0.04] transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-text-muted text-sm hover:text-accent transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} JJ Plumbing. All rights reserved.</p>
          <p>Master Plumber License #MP-204817 &bull; Fully Licensed &amp; Insured</p>
        </div>
        <p className="mt-5 text-center text-xs font-semibold text-text-muted">
          Made By <span className="text-accent">CreativeWebflow Co.</span>
        </p>
      </div>
    </footer>
  );
}
