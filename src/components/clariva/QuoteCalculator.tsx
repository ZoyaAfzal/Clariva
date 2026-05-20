import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Stethoscope, Home, Car, Briefcase, Plane, Check, ArrowRight, ArrowLeft, Minus, Plus } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { AnimatedCounter } from "./AnimatedCounter";
import { viewportOnce } from "@/lib/animations";

const types = [
  { id: "life", icon: Heart, label: "Life" },
  { id: "health", icon: Stethoscope, label: "Health" },
  { id: "home", icon: Home, label: "Home" },
  { id: "vehicle", icon: Car, label: "Vehicle" },
  { id: "business", icon: Briefcase, label: "Business" },
  { id: "travel", icon: Plane, label: "Travel" },
];

const addons = ["Critical Illness Rider", "Identity Theft", "Pet Coverage", "Roadside Assistance"];

export function QuoteCalculator() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("life");
  const [age, setAge] = useState([34]);
  const [deps, setDeps] = useState(2);
  const [coverage, setCoverage] = useState([250]);
  const [deductible, setDeductible] = useState("500");
  const [picks, setPicks] = useState<string[]>([]);

  const monthly = Math.round((coverage[0] * 0.18 + age[0] * 1.2 + deps * 6 + picks.length * 8) - parseInt(deductible) * 0.01);
  const progress = ((step + 1) / 4) * 100;

  return (
    <section id="quote" className="py-32 bg-ocean-deep text-ice overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono-accent text-sky">Quote Calculator</span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl leading-[1.05]">
            Get your <em className="text-sky not-italic">instant</em> estimate.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 bg-ocean/40 backdrop-blur rounded-3xl border border-ice/10 p-8 lg:p-10">
            <div className="flex items-center justify-between mb-2 text-sm text-ice/60">
              <span>Step {step + 1} of 4</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-ice/10 rounded-full overflow-hidden mb-10">
              <motion.div animate={{ width: `${progress}%` }} className="h-full bg-sky rounded-full" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                {step === 0 && (
                  <div>
                    <h3 className="font-display text-3xl mb-6">What are we protecting?</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {types.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setType(t.id)}
                          className={`p-5 rounded-2xl border transition text-left ${
                            type === t.id
                              ? "border-sky bg-sky/10"
                              : "border-ice/10 hover:border-ice/30"
                          }`}
                        >
                          <t.icon className={`w-7 h-7 mb-3 ${type === t.id ? "text-sky" : "text-ice/70"}`} />
                          <div className="font-display text-lg">{t.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div className="space-y-8">
                    <h3 className="font-display text-3xl">Tell us about you</h3>
                    <div>
                      <div className="flex justify-between mb-3"><span>Your age</span><span className="font-display text-2xl text-sky">{age[0]}</span></div>
                      <Slider value={age} onValueChange={setAge} min={18} max={75} step={1} />
                    </div>
                    <div>
                      <div className="mb-3">Dependents</div>
                      <div className="flex items-center gap-4">
                        <button onClick={() => setDeps(Math.max(0, deps - 1))} className="w-10 h-10 rounded-full border border-ice/20 grid place-items-center hover:bg-ice/5"><Minus className="w-4 h-4" /></button>
                        <span className="font-display text-3xl w-10 text-center">{deps}</span>
                        <button onClick={() => setDeps(deps + 1)} className="w-10 h-10 rounded-full border border-ice/20 grid place-items-center hover:bg-ice/5"><Plus className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-8">
                    <h3 className="font-display text-3xl">Coverage preferences</h3>
                    <div>
                      <div className="flex justify-between mb-3"><span>Coverage amount</span><span className="font-display text-2xl text-sky">${coverage[0]}K</span></div>
                      <Slider value={coverage} onValueChange={setCoverage} min={10} max={1000} step={10} />
                    </div>
                    <div>
                      <div className="mb-3">Deductible</div>
                      <div className="flex gap-2 flex-wrap">
                        {["250", "500", "1000", "2500"].map((d) => (
                          <button key={d} onClick={() => setDeductible(d)} className={`px-5 py-2 rounded-full border transition ${deductible === d ? "border-sky bg-sky text-ocean-deep" : "border-ice/20 hover:border-ice/40"}`}>${d}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">Add-ons</div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {addons.map((a) => {
                          const on = picks.includes(a);
                          return (
                            <button
                              key={a}
                              onClick={() => setPicks(on ? picks.filter((x) => x !== a) : [...picks, a])}
                              className={`flex items-center gap-3 p-3 rounded-xl border text-left transition ${on ? "border-sky bg-sky/10" : "border-ice/10 hover:border-ice/30"}`}
                            >
                              <span className={`w-5 h-5 rounded-md grid place-items-center ${on ? "bg-sky" : "border border-ice/30"}`}>{on && <Check className="w-3.5 h-3.5 text-ocean-deep" strokeWidth={3} />}</span>
                              <span className="text-sm">{a}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="text-center py-6">
                    <div className="font-mono-accent text-sky">Estimated monthly premium</div>
                    <div className="mt-4 font-display text-7xl lg:text-8xl text-sky">
                      $<AnimatedCounter value={Math.max(monthly, 24)} />
                    </div>
                    <div className="mt-3 text-ice/60">/ month, all-inclusive</div>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                      <button className="btn-shimmer text-ocean-deep font-medium px-7 py-3.5 rounded-full">Start Application</button>
                      <button className="px-7 py-3.5 rounded-full border border-ice/20 hover:bg-ice/5">Talk to an Advisor</button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex justify-between">
              <button
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full disabled:opacity-30 hover:bg-ice/5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < 3 && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sky text-ocean-deep font-medium"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 bg-gradient-to-br from-ocean to-ocean-deep border border-sky/20 rounded-3xl p-8">
              <div className="font-mono-accent text-sky">Your Plan</div>
              <h3 className="mt-3 font-display text-3xl">Live summary</h3>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  { l: "Type", v: types.find((t) => t.id === type)?.label },
                  { l: "Age", v: age[0] },
                  { l: "Dependents", v: deps },
                  { l: "Coverage", v: `$${coverage[0]}K` },
                  { l: "Deductible", v: `$${deductible}` },
                  { l: "Add-ons", v: picks.length },
                ].map((r) => (
                  <li key={r.l} className="flex items-center justify-between border-b border-ice/10 pb-3">
                    <span className="flex items-center gap-2 text-ice/70"><Check className="w-4 h-4 text-sky" />{r.l}</span>
                    <span className="font-medium">{r.v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-sky/20">
                <div className="text-xs text-ice/60">Estimated monthly</div>
                <div className="font-display text-5xl text-sky mt-1">${Math.max(monthly, 24)}</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
