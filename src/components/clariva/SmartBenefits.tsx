import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Zap, Sliders, LayoutDashboard, Check, ChevronDown } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const features = [
  { 
    icon: Layers, 
    title: "Pre-designed Coverage Plans", 
    desc: "Tailored bundles covering life, health, property, and more — ready in minutes.",
    details: "Choose from our 'Essentials', 'Family Plus', or 'Executive' bundles. Each is designed by experts to provide maximum value with zero overlapping coverage."
  },
  { 
    icon: Zap, 
    title: "Smooth Digital Claims", 
    desc: "File claims from your phone in under 3 minutes. Track in real time.",
    details: "Our AI-powered engine processes simple claims instantly. For complex cases, you'll be connected to a dedicated human advocate within 24 hours."
  },
  { 
    icon: Sliders, 
    title: "Fully Customizable Policies", 
    desc: "Adjust deductibles, coverage limits, and riders to fit your budget.",
    details: "Your life isn't static, and your insurance shouldn't be either. Dial up your coverage during high-risk seasons and down when you need to save."
  },
  { 
    icon: LayoutDashboard, 
    title: "Integrated Policy Dashboard", 
    desc: "One dashboard. All your policies, renewals, and documents in one place.",
    details: "Say goodbye to scattered PDFs and paper folders. Access digital proof of insurance, billing history, and one-click renewals from any device."
  },
];

const steps = ["Get a Quote", "Choose a Plan", "Get Covered", "File Claims Easily"];

export function SmartBenefits() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <section className="relative py-32 bg-ice">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <span className="inline-block font-mono-accent text-ocean bg-sky/20 px-3 py-1 rounded-full">Smart Benefits</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7 }}
              className="mt-5 font-display text-5xl lg:text-6xl leading-[1.05] text-balance"
            >
              Powerful features that simplify <em className="text-sky not-italic">coverage</em>.
            </motion.h2>
            <p className="mt-6 text-lg text-river max-w-md">
              Modern tools meet human expertise — built for clarity, designed for life.
            </p>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7 space-y-4"
        >
          {features.map(({ icon: Icon, title, desc, details }) => {
            const isExpanded = activeTab === title;
            return (
              <motion.div
                key={title}
                variants={fadeUp}
                onClick={() => setActiveTab(isExpanded ? null : title)}
                className={`group relative bg-card rounded-3xl p-8 border border-border border-l-4 transition-all cursor-pointer ${
                  isExpanded ? "border-l-sky shadow-2xl ring-1 ring-sky/10" : "border-l-sky/30 shadow-soft hover:shadow-xl hover:border-l-sky"
                }`}
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    animate={isExpanded ? { scale: 1.1 } : { scale: 1 }}
                    className={`w-14 h-14 rounded-2xl grid place-items-center shrink-0 transition-colors ${
                      isExpanded ? "bg-sky text-ocean-deep" : "bg-ocean text-sky"
                    }`}
                  >
                    <Icon className="w-7 h-7" strokeWidth={1.8} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl">{title}</h3>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-river"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-border/50 text-river leading-relaxed">
                            {details}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="mt-32 max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          className="relative"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute top-7 left-[6%] right-[6%] h-px bg-gradient-to-r from-sky/20 via-sky to-sky/20 hidden md:block"
          />
          <motion.ol
            variants={{ show: { transition: { staggerChildren: 0.18 } } }}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid md:grid-cols-4 gap-10"
          >
            {steps.map((s, i) => (
              <motion.li
                key={s}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-ocean text-sky grid place-items-center font-display text-xl shadow-soft border-2 border-sky/30">
                  {i + 1}
                </div>
                <div className="mt-5 font-display text-xl">{s}</div>
                <Check className="mt-2 w-4 h-4 text-sky" />
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </div>
    </section>
  );
}
