import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Search, 
  Gauge, 
  Wrench, 
  ArrowRight, 
  CheckCircle, 
  PhoneCall, 
  Sliders,
  DollarSign
} from 'lucide-react';
import { brand } from '../data/site';

interface ServiceOption {
  id: string;
  title: string;
  basePrice: number;
  icon: typeof Flame;
  desc: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { 
    id: 'emergency', 
    title: 'Emergency Plumbing', 
    basePrice: 180, 
    icon: Flame,
    desc: 'Burst pipes, active leaks, shut-off failures' 
  },
  { 
    id: 'drain', 
    title: 'Drain & Sewer', 
    basePrice: 130, 
    icon: Search,
    desc: 'Camera inspection, root removal, hydro-jetting' 
  },
  { 
    id: 'heaters', 
    title: 'Water Heaters', 
    basePrice: 240, 
    icon: Gauge,
    desc: 'Repair, replacement, flushing, installation' 
  },
  { 
    id: 'fixture', 
    title: 'Fixture & Pipework', 
    basePrice: 90, 
    icon: Wrench,
    desc: 'Faucet installs, valve replacement, copper/PEX' 
  }
];

export default function QuoteTool() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [scopeMultiplier, setScopeMultiplier] = useState(2); // 1 to 5 (represents complexity/fixtures)
  const [contactData, setContactData] = useState({ name: '', phone: '', email: '' });

  // Dynamic cost calculation
  const calculateEstimate = () => {
    if (!selectedService) return { min: 0, max: 0 };
    const base = selectedService.basePrice;
    // Base price scales with scope multiplier
    const min = base + (scopeMultiplier - 1) * 75;
    const max = min + 120 + scopeMultiplier * 20;
    return { min, max };
  };

  const { min, max } = calculateEstimate();

  const handleServiceSelect = (service: ServiceOption) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactData.name && contactData.phone) {
      setStep(3);
    }
  };

  const resetEstimator = () => {
    setStep(1);
    setSelectedService(null);
    setScopeMultiplier(2);
    setContactData({ name: '', phone: '', email: '' });
  };

  return (
    <section id="quote" className="relative py-24 bg-[#0b1012]">
      <div id="quote-tool" className="absolute -top-20" />
      {/* Visual background details */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="site-grid absolute inset-0 opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker text-[#83c95b]">Instant Pricing</p>
          <h2 className="section-title text-white">Get a State-of-the-Art Estimate</h2>
          <p className="mt-4 text-base text-[#a8b0b8] max-w-xl mx-auto">
            Get an instant pricing guide in under 30 seconds. Move the sliders to match your scope and get a guaranteed lock-in option.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="site-card rounded-2xl p-6 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col justify-between">
          {/* Header Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
            <motion.div 
              className="h-full bg-[#83c95b]"
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center py-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                    Select the service you need help with:
                  </h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    {SERVICE_OPTIONS.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service)}
                          className="flex items-start gap-4 text-left p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#83c95b]/50 transition-all group"
                        >
                          <div className="bg-[#83c95b]/10 p-3 rounded-lg group-hover:scale-110 transition-transform text-[#83c95b]">
                            <Icon size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-base group-hover:text-[#83c95b] transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-xs text-[#a8b0b8] mt-1">
                              {service.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && selectedService && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="grid md:grid-cols-[1.2fr_0.8fr] gap-8"
                >
                  {/* Left Column: Interactive Controls */}
                  <div className="space-y-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#83c95b]">
                        Service: {selectedService.title}
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white mt-1">
                        Adjust Your Estimate Scope
                      </h3>
                    </div>

                    {/* Scope slider */}
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <Sliders size={16} className="text-[#83c95b]" /> Complexity & scale
                        </span>
                        <span className="font-bold text-[#83c95b]">
                          {scopeMultiplier === 1 && 'Single Fixture / Simple Fix'}
                          {scopeMultiplier === 2 && 'Standard Repair / Dual Fixtures'}
                          {scopeMultiplier === 3 && 'Multi-Room / Mid-Scale Scope'}
                          {scopeMultiplier === 4 && 'High Complexity / Large Scale'}
                          {scopeMultiplier === 5 && 'Whole Home Overhaul'}
                        </span>
                      </div>
                      
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={scopeMultiplier}
                        onChange={(e) => setScopeMultiplier(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#83c95b] focus:outline-none"
                      />
                      
                      <div className="flex justify-between text-xs text-[#a8b0b8] px-1">
                        <span>Minor</span>
                        <span>Standard</span>
                        <span>Major</span>
                      </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <h4 className="text-sm font-bold uppercase text-white tracking-wider border-b border-white/5 pb-2">
                        Lock in this estimate
                      </h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={contactData.name}
                          onChange={handleFormChange}
                          className="bg-white/[0.04] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#83c95b] transition-colors"
                        />
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={contactData.phone}
                          onChange={handleFormChange}
                          className="bg-white/[0.04] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#83c95b] transition-colors"
                        />
                      </div>
                      
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address (Optional)"
                        value={contactData.email}
                        onChange={handleFormChange}
                        className="w-full bg-white/[0.04] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#83c95b] transition-colors"
                      />

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#83c95b] hover:bg-[#97df6d] text-[#0b1012] font-bold py-4 transition-colors"
                      >
                        Lock in estimate range <ArrowRight size={18} />
                      </button>
                    </form>
                  </div>

                  {/* Right Column: Dynamic Price Gauge */}
                  <div className="flex flex-col justify-center items-center bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center">
                    <div className="bg-[#83c95b]/10 p-3 rounded-full text-[#83c95b] mb-4">
                      <DollarSign size={28} />
                    </div>
                    
                    <span className="text-xs uppercase tracking-[0.18em] text-[#a8b0b8] font-semibold">
                      Estimated Cost Guide
                    </span>

                    {/* Dynamic Range Display */}
                    <div className="mt-4 space-y-1">
                      <motion.div 
                        key={`${min}-${max}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl lg:text-5xl font-black text-white tracking-tight"
                      >
                        ${min} - ${max}
                      </motion.div>
                      <p className="text-xs text-[#a8b0b8]">Includes basic parts & labor</p>
                    </div>

                    <div className="mt-6 border-t border-white/5 pt-6 w-full text-xs text-[#a8b0b8] text-left space-y-2">
                      <p className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#83c95b]" /> Price locked for 30 days
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#83c95b]" /> Final onsite confirmation
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#83c95b]" /> Boot cover cleanup guarantee
                      </p>
                    </div>

                    <button
                      onClick={() => setStep(1)}
                      className="mt-8 text-xs text-[#a8b0b8] hover:text-white transition-colors"
                    >
                      ← Choose another service
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && selectedService && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center max-w-md mx-auto py-8"
                >
                  <div className="bg-[#83c95b]/15 p-4 rounded-full text-[#83c95b] inline-block mb-6 shadow-[0_0_20px_rgba(131,201,91,0.2)]">
                    <CheckCircle size={40} />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                    Estimate Locked In!
                  </h3>
                  
                  <p className="text-sm text-[#a8b0b8] mb-6">
                    Thanks <span className="text-white font-bold">{contactData.name}</span>. We've assigned ticket number <span className="text-white font-mono font-bold">#JJ-{(Math.random()*10000).toFixed(0)}</span> for your estimate of <span className="text-[#83c95b] font-bold">${min}-${max}</span>.
                  </p>

                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-left text-xs text-[#a8b0b8] space-y-2 mb-8">
                    <p className="flex items-center gap-2"><CheckCircle size={14} className="text-[#83c95b]" /> **Priority Route**: Technician will contact you shortly</p>
                    <p className="flex items-center gap-2"><CheckCircle size={14} className="text-[#83c95b]" /> **Dispatch Time**: Under 45 minutes dispatch active</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={brand.phoneHref}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#83c95b] hover:bg-[#97df6d] text-[#0b1012] font-bold py-4 px-6 rounded-lg transition-all"
                    >
                      <PhoneCall size={18} /> Book dispatch: {brand.phone}
                    </a>
                    <button
                      onClick={resetEstimator}
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white font-bold py-4 px-6 rounded-lg transition-all"
                    >
                      New Estimate
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
