import { processSteps } from '../data/site';

export function Process() {
  return (
    <section id="process" className="border-y border-white/10 bg-[#f5f0e8] py-20 text-[#0b1012]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-kicker text-[#517d35]">No mystery invoices</p>
          <h2 className="section-title text-[#0b1012]">A cleaner service call from start to finish.</h2>
          <p className="mt-5 text-base leading-7 text-[#4f5a62]">
            Every visit follows the same simple standard: protect the home, diagnose clearly, quote before repair, and clean the work area.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map(([num, title, text]) => (
            <article key={num} className="rounded-lg border border-[#0b1012]/15 bg-white p-6">
              <div className="mb-10 text-sm font-extrabold text-[#517d35]">{num}</div>
              <h3 className="text-xl font-extrabold text-[#0b1012]">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#4f5a62]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
