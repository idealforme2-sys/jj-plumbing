import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, CheckCircle2, XCircle, Phone } from "lucide-react";
import { brand } from "../data/site";

const CITIES = [
  "Oak Hollow", "Cedar Ridge", "Millbrook", "Riverside Park", "Highland Terrace",
  "Brookfield", "Westgate", "Sunridge", "Fairview Heights", "Lakeview District",
];

const COVERED_PREFIXES = ["55", "56"];

export default function ServiceArea() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<"idle" | "covered" | "not-covered">("idle");

  const checkZip = () => {
    if (zip.length !== 5) return;
    const covered = COVERED_PREFIXES.some((p) => zip.startsWith(p));
    setResult(covered ? "covered" : "not-covered");
  };

  return (
    <section id="service-area" className="relative overflow-hidden py-20 md:py-28 bg-[#0b1012] text-white">
      <div className="absolute inset-0 site-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#83c95b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Local Neighborhoods Card */}
        <div className="rounded-2xl border border-white/5 bg-[#141b1e]/90 p-8 shadow-xl">
          <p className="font-extrabold text-xs md:text-sm uppercase tracking-[0.2rem] mb-3 text-[#83c95b]">Service Area</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-heading text-white">Local techs, real neighborhoods.</h2>
          <p className="text-[#a8b0b8] text-sm md:text-base mb-8 max-w-md leading-relaxed">
            JJ Plumbing dispatches from a local base, keeping drive times short and emergency response times fast across all service neighborhoods.
          </p>

          {/* Styled Neighborhood List */}
          <div className="flex flex-wrap gap-2.5">
            {CITIES.map((c) => (
              <span key={c} className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-full px-4 py-2 text-xs md:text-sm text-[#a8b0b8]">
                <MapPin size={13} className="text-[#83c95b]" />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: ZIP Code Checker Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/5 bg-[#141b1e]/90 p-8 shadow-xl md:p-10"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 font-heading text-white">Check Your Zip Code</h3>
          <p className="text-[#a8b0b8] text-sm mb-6 leading-relaxed">See if your home is inside our guaranteed fast-response radius.</p>

          <form onSubmit={(e) => { e.preventDefault(); checkZip(); }} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={zip}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, ""));
                setResult("idle");
              }}
              placeholder="Enter 5-digit zip"
              className="min-w-0 flex-1 bg-black/40 border border-white/10 focus:border-[#83c95b]/60 rounded-xl px-5 py-3.5 text-sm md:text-base text-white placeholder:text-white/30 outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-[#83c95b] hover:bg-[#97df6d] text-[#0b1012] font-black text-sm md:text-base px-6 py-3.5 rounded-xl transition-colors shrink-0 cursor-pointer shadow-md"
            >
              Check Area
            </button>
          </form>

          {result === "covered" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-5 text-[#83c95b] text-sm font-bold"
            >
              <CheckCircle2 size={18} className="shrink-0" />
              <span>You're in our fast-response zone &mdash; we can dispatch today.</span>
            </motion.div>
          )}
          {result === "not-covered" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-3 mt-5 p-4 rounded-xl border border-dashed border-[#EA580C]/20 bg-[#EA580C]/5 text-white text-sm"
            >
              <div className="flex items-center gap-2 font-bold text-[#EA580C]">
                <XCircle size={18} className="shrink-0" />
                <span>Just outside our standard radius</span>
              </div>
              <p className="text-xs text-[#a8b0b8] leading-relaxed">
                We still might be able to help you. Give our dispatch desk a quick call to check current technician availability.
              </p>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#EA580C] text-white hover:bg-[#ff6d24] font-extrabold text-xs py-2 px-4 self-start shadow-sm transition-colors"
              >
                <Phone size={12} /> Call Dispatch
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
