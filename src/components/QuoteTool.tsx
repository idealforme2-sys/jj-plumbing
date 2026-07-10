import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, Droplets, Flame, Gauge, Hammer, Zap, Clock, CalendarClock, RotateCcw, PhoneCall } from "lucide-react";

type Symptom = "leak" | "clog" | "no-hot-water" | "pressure" | "new-install";
type Urgency = "emergency" | "urgent" | "standard";

const SYMPTOMS: { id: Symptom; label: string; icon: typeof Droplets }[] = [
  { id: "leak", label: "Active Pipe Leak / Burst", icon: Droplets },
  { id: "clog", label: "Backed Up Drain / Clog", icon: Hammer },
  { id: "no-hot-water", label: "No Hot Water", icon: Flame },
  { id: "pressure", label: "Low Pressure / Water Quality", icon: Gauge },
  { id: "new-install", label: "New Installation / Quote", icon: Zap },
];

const URGENCIES: { id: Urgency; label: string; icon: typeof Clock }[] = [
  { id: "emergency", label: "Immediate Emergency (Active Flooding)", icon: AlertTriangle },
  { id: "urgent", label: "Urgent (Disrupted Daily Routine)", icon: Clock },
  { id: "standard", label: "Standard (Flexible / Scheduled)", icon: CalendarClock },
];

function getDiagnosis(symptom: Symptom | null, urgency: Urgency | null) {
  if (symptom === "leak" && urgency === "emergency") {
    return {
      title: "Emergency Pipeline Dispatch Team Triggered",
      badge: "Priority 1",
      desc: "A dispatch team is prioritized for immediate response. Shut off your main valve if you're able, and keep your phone line open.",
    };
  }
  if (symptom === "clog" && urgency === "urgent") {
    return {
      title: "Hydro-Jetting & Drain Clearing Inspection Scheduled",
      badge: "Priority 2",
      desc: "We'll route a technician with camera and hydro-jetting equipment to clear the line and confirm nothing further is blocking flow.",
    };
  }
  return {
    title: "Multi-Point General System Evaluation",
    badge: "Standard",
    desc: "A technician will run a full diagnostic across your system and give you clear, up-front pricing before any work begins.",
  };
}

const stepVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export default function QuoteTool() {
  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState<Symptom | null>(null);
  const [urgency, setUrgency] = useState<Urgency | null>(null);

  const reset = () => {
    setStep(1);
    setSymptom(null);
    setUrgency(null);
  };

  const diagnosis = getDiagnosis(symptom, urgency);

  return (
    <section id="quote" className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-accent font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">The Valve Evaluator</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Get Matched In 30 Seconds</h2>
          <p className="text-text-muted text-base md:text-lg">Answer two quick questions and we'll route you to the right team.</p>
        </div>

        <div className="bg-secondary rounded-[40px] border border-accent/20 p-8 md:p-16 relative overflow-hidden min-h-[480px] flex flex-col">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60">
            <motion.div
              className="h-full bg-accent"
              animate={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
                  <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-2">Step 1 of 3 &mdash; The Symptom</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">What plumbing symptom are you experiencing?</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SYMPTOMS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSymptom(s.id);
                          setStep(2);
                        }}
                        className="flex items-center gap-3 text-left bg-primary/60 hover:bg-primary border border-white/10 hover:border-accent/50 rounded-2xl px-5 py-4 transition-colors"
                      >
                        <s.icon size={20} className="text-accent shrink-0" />
                        <span className="text-sm md:text-base font-medium text-chrome">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
                  <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-2">Step 2 of 3 &mdash; The Urgency</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">How quickly do you need a technician?</h3>
                  <div className="flex flex-col gap-3">
                    {URGENCIES.map((u) => (
                      <button
                        key={u.id}
                        onClick={() => {
                          setUrgency(u.id);
                          setStep(3);
                        }}
                        className="flex items-center gap-3 text-left bg-primary/60 hover:bg-primary border border-white/10 hover:border-accent/50 rounded-2xl px-5 py-4 transition-colors"
                      >
                        <u.icon size={20} className="text-accent shrink-0" />
                        <span className="text-sm md:text-base font-medium text-chrome">{u.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }} className="text-center">
                  <p className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-2">Step 3 of 3 &mdash; The Diagnosis</p>
                  <span className="inline-block bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5">
                    {diagnosis.badge}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold mb-4">{diagnosis.title}</h3>
                  <p className="text-text-muted text-base md:text-lg max-w-lg mx-auto mb-9">{diagnosis.desc}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:5555575862"
                      className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold text-sm md:text-base px-7 py-4 rounded-full hover:scale-[1.03] transition-transform"
                    >
                      <PhoneCall size={18} />
                      Book Priority Callback
                    </a>
                    <button
                      onClick={reset}
                      className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold text-sm md:text-base px-7 py-4 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      <RotateCcw size={16} />
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
