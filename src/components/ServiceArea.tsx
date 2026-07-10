import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, CheckCircle2, XCircle } from "lucide-react";

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
    <section id="service-area" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-accent font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">Service Area</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Local techs, real neighborhoods.</h2>
          <p className="text-text-muted text-base md:text-lg mb-8 max-w-md">
            JJ Plumbing dispatches from a single home base, which keeps drive times short and
            response times fast across the metro.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {CITIES.map((c) => (
              <span key={c} className="flex items-center gap-1.5 bg-secondary border border-white/10 rounded-full px-4 py-2 text-xs md:text-sm text-chrome">
                <MapPin size={13} className="text-accent" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-secondary rounded-[32px] border-metallic p-8 md:p-10"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">Check your zip code</h3>
          <p className="text-text-muted text-sm mb-6">See if you're inside our fast-response radius.</p>

          <div className="flex gap-3">
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
              className="flex-1 bg-primary border border-white/10 focus:border-accent/60 rounded-full px-5 py-3.5 text-sm md:text-base text-white placeholder:text-text-muted outline-none transition-colors"
            />
            <button
              onClick={checkZip}
              className="bg-accent text-primary font-bold text-sm md:text-base px-6 py-3.5 rounded-full hover:bg-accent-hover transition-colors shrink-0"
            >
              Check
            </button>
          </div>

          {result === "covered" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-5 text-accent text-sm font-medium"
            >
              <CheckCircle2 size={18} />
              You're in our fast-response zone &mdash; we can dispatch today.
            </motion.div>
          )}
          {result === "not-covered" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-5 text-copper text-sm font-medium"
            >
              <XCircle size={18} />
              Just outside our standard radius &mdash; call dispatch and we'll do our best.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
