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
  DollarSign, 
  AlertTriangle 
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
  const [scopeMultiplier, setScopeMultiplier] = useState(2); // 1 to 5
  const [contactData, setContactData] = useState({ name: '', phone: '', email: '' });
  const [estimateId, setEstimateId] = useState(0);

  // Dynamic cost calculation
  const calculateEstimate = () => {
    if (!selectedService) return { min: 0, max: 0 };
    const base = selectedService.basePrice;
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
      setEstimateId(Math.floor(1000 + Math.random() * 9000));
      setStep(3);
    }
  };

  const resetEstimator = () => {
    setStep(1);
    setSelectedService(null);
    setScopeMultiplier(2);
    setContactData({ name: '', phone: '', email: '' });
    setEstimateId(0);
  };

  return (
    <section id="quote" className="relative py-20 md:py-24 bg-[#f5f0e8] text-[#0b1012] overflow-hidden">
      <div id="quote-tool" className="absolute -top-20" />
      <div className="section-divider" />
      <div className="site-grid absolute inset-0 opacity-[0.08] pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[58%] bg-[#0b1012]/[0.06] [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[36%] bg-[#83c95b]/15 [clip-path:polygon(0_0,76%_0,100%_100%,0_100%)]"
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-kicker text-[#517d35]">Instant Pricing</p>
          <h2 className="section-title text-[#0b1012]">Get a State-of-the-Art Estimate</h2>
        </div>

        {/* Master Two-Column Grid */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Green Contour Callout Card (FinalCTA content made compact) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-[#0b1012] bg-[#83c95b] p-8 flex flex-col justify-between shadow-2xl shadow-black/10 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#0b1012] pointer-events-none" />
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#0b1012] border border-[#0b1012] px-3.5 py-1.5 rounded-full">
                <AlertTriangle size={16} className="text-[#83c95b]" />
                <span className="text-[#83c95b] font-bold text-xs uppercase tracking-wider">Preventive Action</span>
              </div>
              
              <h3 className="text-2xl font-black text-[#0b1012] leading-tight">
                A small drip today is a flooded floor tomorrow.
              </h3>
              
              <p className="text-sm text-[#1c292e] leading-relaxed">
                Catch it early. A same-week inspection costs far less than emergency water damage restoration — and it's a lot less stressful too.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 relative z-10">
              <button
                onClick={resetEstimator}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1012] hover:bg-[#1c292e] text-white font-extrabold py-3.5 text-sm transition-transform active:scale-95"
              >
                Schedule Service Now <ArrowRight size={16} />
              </button>
              <a
                href={brand.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#0b1012]/20 hover:border-[#0b1012]/50 bg-white/35 hover:bg-white/55 text-[#0b1012] font-bold py-3.5 text-sm transition-all"
              >
                <PhoneCall size={16} className="text-[#83c95b]" /> Call Dispatch
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Estimator Module */}
          <div className="rounded-3xl border-2 border-[#0b1012] bg-[#0b1012] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_36px_110px_rgba(11,16,18,.34)]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
              <motion.div 
                className="h-full bg-[#83c95b]"
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            <div className="flex-1 flex flex-col justify-center py-4">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-bold text-white mb-6">
                      What plumbing system requires attention?
                    </h4>
                    
                    <div className="grid gap-3 sm:grid-cols-2">
                      {SERVICE_OPTIONS.map((service) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service)}
                            className="flex items-start gap-4 text-left p-5 rounded-2xl border border-white/15 bg-white/[0.08] hover:bg-white/[0.13] hover:border-[#83c95b]/60 transition-all group"
                          >
                            <div className="bg-[#83c95b] p-2.5 rounded-lg group-hover:scale-105 transition-transform text-[#0b1012]">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h5 className="font-extrabold text-white text-base group-hover:text-[#83c95b] transition-colors">
                                {service.title}
                              </h5>
                              <p className="text-xs text-white/75 mt-1 leading-snug">
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
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-[1.2fr_0.8fr] gap-8"
                  >
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#83c95b]">
                          Category: {selectedService.title}
                        </span>
                        <h4 className="text-lg font-extrabold text-white mt-0.5">
                          Specify Issue Scale
                        </h4>
                      </div>

                      {/* Slider */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold text-white flex items-center gap-1.5">
                            <Sliders size={14} className="text-[#83c95b]" /> Multi-point complexity
                          </span>
                          <span className="font-bold text-[#83c95b]">
                            {scopeMultiplier === 1 && 'Single Fixture / Simple Repair'}
                            {scopeMultiplier === 2 && 'Standard Room / Dual Fixtures'}
                            {scopeMultiplier === 3 && 'Multi-Room / Mid-Scale Scope'}
                            {scopeMultiplier === 4 && 'High Complexity / Large Scale'}
                            {scopeMultiplier === 5 && 'Whole Home Diagnostic'}
                          </span>
                        </div>
                        
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={scopeMultiplier}
                          onChange={(e) => setScopeMultiplier(Number(e.target.value))}
                          className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#83c95b] focus:outline-none"
                        />
                      </div>

                      {/* Locked Form */}
                      <form onSubmit={handleFormSubmit} className="space-y-3">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <input
                            required
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={contactData.name}
                            onChange={handleFormChange}
                            className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#83c95b] transition-colors"
                          />
                          <input
                            required
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={contactData.phone}
                            onChange={handleFormChange}
                            className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#83c95b] transition-colors"
                          />
                        </div>
                        
                        <input
                          type="email"
                          name="email"
                          placeholder="Email (Optional)"
                          value={contactData.email}
                          onChange={handleFormChange}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#83c95b] transition-colors"
                        />

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#83c95b] hover:bg-[#97df6d] text-[#0b1012] font-bold py-3 text-xs transition-colors"
                        >
                          Lock in estimate range <ArrowRight size={14} />
                        </button>
                      </form>
                    </div>

                    {/* Cost Preview Panel */}
                    <div className="flex flex-col justify-center items-center bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center">
                      <div className="bg-[#83c95b]/10 p-2.5 rounded-full text-[#83c95b] mb-3">
                        <DollarSign size={20} />
                      </div>
                      
                      <span className="text-[10px] uppercase tracking-wider text-[#a8b0b8] font-bold">
                        Estimate Range
                      </span>

                      <div className="mt-2 space-y-1">
                        <motion.div 
                          key={`${min}-${max}`}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-3xl font-black text-white tracking-tight"
                        >
                          ${min} - ${max}
                        </motion.div>
                        <p className="text-[10px] text-[#a8b0b8]">Includes diagnostics & labor</p>
                      </div>

                      <div className="mt-4 border-t border-white/5 pt-4 w-full text-[10px] text-[#a8b0b8] text-left space-y-1.5">
                        <p className="flex items-center gap-1.5">
                          <CheckCircle size={12} className="text-[#83c95b]" /> Price locked for 30 days
                        </p>
                        <p className="flex items-center gap-1.5">
                          <CheckCircle size={12} className="text-[#83c95b]" /> Cleanliness guarantee
                        </p>
                      </div>

                      <button
                        onClick={() => setStep(1)}
                        className="mt-6 text-[10px] text-[#a8b0b8] hover:text-white transition-colors"
                      >
                        ← Choose service
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && selectedService && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-sm mx-auto py-6"
                  >
                    <div className="bg-[#83c95b]/10 p-3 rounded-full text-[#83c95b] inline-block mb-4">
                      <CheckCircle size={32} />
                    </div>
                    
                    <h4 className="text-xl font-black text-white mb-2">
                      Estimate Locked In!
                    </h4>
                    
                    <p className="text-xs text-[#a8b0b8] leading-relaxed mb-6">
                      Thanks <span className="text-white font-bold">{contactData.name}</span>. We have assigned estimate ID <span className="text-white font-mono font-bold">#JJ-{estimateId}</span> for your quote of <span className="text-[#83c95b] font-bold">${min}-${max}</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={brand.phoneHref}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#83c95b] hover:bg-[#97df6d] text-[#0b1012] font-bold py-3 text-xs rounded-lg transition-all"
                      >
                        <PhoneCall size={14} /> Call Dispatch
                      </a>
                      <button
                        onClick={resetEstimator}
                        className="flex-1 inline-flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white font-bold py-3 text-xs rounded-lg transition-all"
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
      </div>
    </section>
  );
}
