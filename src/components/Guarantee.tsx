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
    <section id="guarantee" className="border-y border-[#0b1012]/10 bg-[#83c95b] py-20 text-[#0b1012]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-kicker text-[#3e6826]">Worry-free standards</p>
          <h2 className="section-title text-[#0b1012]">Our triple-check guarantee.</h2>
          <p className="mt-5 text-base leading-7 text-[#1c292e]">
            Every service call is backed by concrete promises. If we fail to meet these high finish standards, the job is on us.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          {guaranteeSteps.map(([num, title, text]) => (
            <article key={num} className="rounded-lg border border-[#0b1012]/15 bg-white p-6 shadow-lg shadow-black/5">
              <div className="mb-10 text-sm font-extrabold text-[#3e6826]">{num}</div>
              <h3 className="text-xl font-extrabold text-[#0b1012]">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#4f5a62]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
