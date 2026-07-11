import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { brand } from "../data/site";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/88 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20" : "bg-primary/35 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img src={brand.logo} alt={`${brand.name} logo`} className="h-11 w-11 rounded-lg bg-white object-contain p-1 shadow-lg shadow-black/30" />
          <span className="font-heading font-bold text-lg md:text-xl text-white tracking-tight">
            JJ <span className="text-accent">PLUMBING</span>
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button onClick={() => handleNav(l.href)} className="text-sm font-medium text-text-muted hover:text-white transition-colors">
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://www.instagram.com/j_j_plumbing_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-muted hover:border-accent/50 hover:text-accent transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://web.facebook.com/p/JJ-Plumbing-100075805388351/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-muted hover:border-accent/50 hover:text-accent transition-colors">
              <FacebookIcon />
            </a>
          </div>
          <a
            href={brand.phoneHref}
            className="hidden sm:flex items-center gap-2 rounded-full border border-accent/40 text-accent font-semibold text-sm px-4 py-2 hover:bg-accent hover:text-primary transition-colors"
          >
            <Phone size={15} />
            {brand.phone}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden bg-primary/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="flex flex-col px-5 py-4 gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <button onClick={() => handleNav(l.href)} className="w-full text-left py-2.5 text-base font-medium text-text-muted hover:text-white transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="flex gap-2 py-2">
                <a href="https://www.instagram.com/j_j_plumbing_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-muted hover:text-accent transition-colors">
                  <InstagramIcon />
                </a>
                <a href="https://web.facebook.com/p/JJ-Plumbing-100075805388351/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-muted hover:text-accent transition-colors">
                  <FacebookIcon />
                </a>
              </li>
              <li className="pt-2 flex flex-col gap-2">
                <a href={brand.phoneHref} className="w-full flex items-center justify-center gap-2 rounded-full border border-white/10 text-white font-semibold text-sm px-4 py-3">
                  <Phone size={15} />
                  {brand.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
