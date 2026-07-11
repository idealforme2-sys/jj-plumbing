export function Guarantee() {
  const guaranteeSteps = [
    [
      '01',
      'Cleanliness Guarantee',
      "If we don't wear floor-saver boot covers or leave a single spot of dirt in your home, the diagnostic fee is completely waived.",
    ],
    [
      '02',
      '1-Year Warranty',
      'Every pipe fitting, fixture, valve, and repair we perform is backed by our full 12-month worry-free parts and labor warranty.',
    ],
    [
      '03',
      'Certified Pros',
      'Every technician is fully licensed, insured, drug-tested, and background-checked for absolute security and peace of mind.',
    ],
  ] as const;

  return (
    <section id="guarantee" className="relative overflow-hidden border-y border-[#0b1012]/10 bg-[#83c95b] py-20 md:py-24 text-[#0b1012]">
      <div className="absolute inset-0 site-grid opacity-[0.12] pointer-events-none" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div className="rounded-3xl border-2 border-[#0b1012] bg-[#0b1012] p-8 text-white shadow-2xl shadow-black/20">
          <p className="section-kicker text-[#83c95b]">Worry-free standards</p>
          <h2 className="section-title text-white">Our triple-check guarantee.</h2>
          <p className="mt-5 text-base leading-7 text-[#a8b0b8]">
            Every service call is backed by concrete promises. If we fail to meet these high finish standards, the job is on us.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          {guaranteeSteps.map(([num, title, text]) => (
            <article key={num} className="rounded-2xl border border-[#0b1012]/15 bg-white p-6 shadow-xl shadow-black/10">
              <div className="mb-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b1012] text-sm font-extrabold text-[#83c95b]">{num}</div>
              <h3 className="text-xl font-extrabold text-[#0b1012]">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#4f5a62]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
