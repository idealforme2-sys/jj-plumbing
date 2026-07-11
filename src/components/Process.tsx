import { processSteps } from '../data/site';

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-y border-white/10 bg-[#0b1012] py-20 md:py-24">
      <div className="absolute inset-0 site-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#83c95b] pointer-events-none [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div>
          <p className="section-kicker text-[#83c95b]">No mystery invoices</p>
          <h2 className="section-title text-white">A cleaner service call from start to finish.</h2>
          <p className="mt-5 text-base leading-7 text-[#a8b0b8]">
            Every visit follows a simple standard: protect the home, diagnose clearly, quote the repair, clean the work area.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map(([num, title, text]) => (
            <article key={num} className="rounded-2xl border border-[#0b1012]/20 bg-white p-7 shadow-2xl shadow-black/15">
              <div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b1012] text-sm font-extrabold text-[#83c95b]">{num}</div>
              <h3 className="text-2xl font-extrabold text-[#0b1012]">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#4f5a62]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
