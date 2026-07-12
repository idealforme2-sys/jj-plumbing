import { Phone } from "lucide-react";
import { brand } from "../data/site";

const COLUMNS = [
  {
    title: "Services",
    links: ["Emergency Plumbing", "Drain & Sewer", "Camera Diagnostics", "Water Heaters", "Fixture & Pipework"],
  },
  {
    title: "Company",
    links: ["Service Area", "Reviews", "FAQ"],
  },
  {
    title: "Service Area",
    links: ["Riverside County", "Temecula", "Murrieta", "Corona", "Moreno Valley"],
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
    <>
      <section className="relative overflow-hidden bg-chrome py-10 text-primary md:py-12">
        <div aria-hidden className="absolute left-0 top-0 h-full w-1 bg-copper md:w-2" />
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#3f6829]">Emergency dispatch</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-primary md:text-4xl">Have a leak that cannot wait?</h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-[#435057] md:text-base">
              Talk to a local dispatcher now. We will triage the issue, confirm the arrival window, and send the right technician.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={brand.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors hover:bg-[#1a2428]"
            >
              <Phone size={17} />
              Call {brand.phone}
            </a>
            <a
              href="#quote"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/15 px-6 text-sm font-extrabold text-primary transition-colors hover:border-accent hover:bg-accent/20"
            >
              Request an Estimate
            </a>
          </div>

          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#4f5a62] lg:col-span-2">
            Licensed &bull; Insured &bull; Fast response
          </p>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-white/10 bg-primary pt-12 pb-28 lg:pb-12">
        <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.9fr_0.8fr]">
            <div>
              <a href="#top" className="mb-5 flex items-center gap-3">
                <img src={brand.logo} alt={`${brand.name} logo`} className="h-14 w-14 rounded-lg bg-white object-contain p-1.5 shadow-lg shadow-black/30" />
                <span className="font-heading text-xl font-black text-white">
                  JJ <span className="text-accent">PLUMBING</span>
                </span>
              </a>
              <p className="max-w-sm text-sm leading-7 text-text-muted">
                Reliable. Honest. Quality. Premium local plumbing repairs, diagnostics, water heaters, and emergency response.
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                Master Plumber License #MP-204817
              </p>
              <p className="mt-1 text-xs font-semibold text-text-muted">Fully Licensed &amp; Insured</p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href={brand.phoneHref} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-extrabold text-primary transition-colors hover:bg-accent-hover">
                  <Phone size={16} />
                  {brand.phone}
                </a>
                <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-text-muted transition-colors hover:border-accent/50 hover:text-accent" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-text-muted transition-colors hover:border-accent/50 hover:text-accent" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              </div>
            </div>

            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  <h4 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">{col.title}</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm font-medium text-text-muted transition-colors hover:text-accent">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
              <p>&copy; {new Date().getFullYear()} JJ Plumbing. All rights reserved.</p>
              <p>License #MP-204817 &bull; Fully Licensed &amp; Insured</p>
              <p>
                Made By <span className="font-bold text-accent">CreativeWebflow Co.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
