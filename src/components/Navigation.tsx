import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Droplet, Phone, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
];

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
        scrolled ? "bg-primary/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent">
            <Droplet size={18} strokeWidth={2.5} fill="currentColor" />
          </span>
          <span className="font-heading font-bold text-lg md:text-xl text-white tracking-tight">
            JJ <span className="text-accent">PLUMBING</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-text-muted hover:text-white transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="tel:5555575862"
            className="hidden sm:flex items-center gap-2 rounded-full border border-accent/40 text-accent font-semibold text-sm px-4 py-2 hover:bg-accent hover:text-primary transition-colors"
          >
            <Phone size={15} />
            Call (555) JJ-PLUMB
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white"
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
            className="lg:hidden overflow-hidden bg-primary/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="flex flex-col px-5 py-4 gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full text-left py-2.5 text-base font-medium text-text-muted hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="tel:5555575862"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent text-primary font-bold text-sm px-4 py-3"
                >
                  <Phone size={15} />
                  Call (555) JJ-PLUMB
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
