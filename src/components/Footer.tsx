import { Droplet, MessageCircle, Camera, Send } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-28 lg:pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <a href="#top" className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                <Droplet size={18} strokeWidth={2.5} fill="currentColor" />
              </span>
              <span className="font-heading font-bold text-lg text-white">
                JJ <span className="text-accent">PLUMBING</span>
              </span>
            </a>
            <p className="text-text-muted text-sm max-w-xs mb-5">
              Reliable. Honest. Quality. Licensed plumbing repair and installation, 24 hours a day.
            </p>
            <div className="flex items-center gap-3">
              {[MessageCircle, Camera, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </a>
              ))}
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
      </div>
    </footer>
  );
}
