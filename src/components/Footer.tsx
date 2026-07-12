import { Phone, ShieldCheck } from "lucide-react";
import { brand } from "../data/site";

const SERVICES_LINKS = [
  { label: "Emergency Plumbing", href: "#services" },
  { label: "Drain & Sewer Cleaning", href: "#services" },
  { label: "Water Heaters", href: "#services" },
  { label: "Fixture & Pipework", href: "#services" },
];

const NEIGHBORHOODS_LINKS = [
  { label: "Oak Hollow", href: "#service-area" },
  { label: "Cedar Ridge", href: "#service-area" },
  { label: "Millbrook", href: "#service-area" },
  { label: "Riverside Park", href: "#service-area" },
];

const QUICK_LINKS = [
  { label: "Get Estimate", href: "#quote" },
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1012] border-t border-white/5 text-[#a8b0b8] pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-12 border-b border-white/5">
        
        {/* Column 1: Branding & Credentials */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={brand.logo} alt={`${brand.name} logo`} className="h-9 w-9 bg-white rounded-lg object-contain p-1" />
            <span className="font-heading font-extrabold text-white text-lg tracking-tight">
              JJ <span className="text-[#83c95b]">PLUMBING</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#a8b0b8]/80">
            Professional residential plumbing services. Built on upfront pricing, clean workmanship, and honest communication.
          </p>
          <div className="text-xs space-y-1 text-[#a8b0b8]/60 pt-2 border-t border-white/5">
            <p className="font-bold text-white/70">California C-36 License</p>
            <p>Lic #1085609</p>
            <p className="text-[10px] uppercase font-bold text-[#83c95b] flex items-center gap-1.5 mt-1">
              <ShieldCheck size={12} /> Certified & Insured
            </p>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-4">
          <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES_LINKS.map((link) => (
              <li key={link.label}>
                <button onClick={() => handleScroll(link.href)} className="hover:text-white transition-colors cursor-pointer text-left">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Neighborhoods */}
        <div className="space-y-4">
          <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-wider">Service Areas</h4>
          <ul className="space-y-2.5 text-sm">
            {NEIGHBORHOODS_LINKS.map((link) => (
              <li key={link.label}>
                <button onClick={() => handleScroll(link.href)} className="hover:text-white transition-colors cursor-pointer text-left">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-wider">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <button onClick={() => handleScroll(link.href)} className="hover:text-white transition-colors cursor-pointer text-left">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Live Dispatch */}
        <div className="space-y-4">
          <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-wider">Emergency Dispatch</h4>
          <div className="space-y-3">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#ff6d24] text-white font-extrabold text-sm py-2.5 px-4 rounded-lg shadow-md transition-colors"
            >
              <Phone size={14} className="animate-pulse" />
              <span>{brand.phone}</span>
            </a>
            <div className="text-xs text-[#a8b0b8]/80 space-y-1.5">
              <p className="flex items-center gap-1.5 text-white/95 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#83c95b]" /> Dispatch Office
              </p>
              <p>Active 24 Hours, 7 Days a week for water line and leak emergencies.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a8b0b8]/60">
        <p>&copy; {new Date().getFullYear()} JJ Plumbing. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made in California &bull; Licensed &bull; Insured
        </p>
      </div>
    </footer>
  );
}
