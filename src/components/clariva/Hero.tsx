import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, Check, ArrowRight, X } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { fadeUp, stagger } from "@/lib/animations";

const stats = [
  { value: 50, suffix: "K+", label: "Clients Protected" },
  { value: 98, suffix: "%", label: "Claim Approval Rate" },
  { value: 24, suffix: "/7", label: "Expert Support" },
];

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <>
      <section ref={ref} className="relative min-h-screen bg-ocean-deep text-ice overflow-hidden pt-28 lg:pt-32">
        <div className="absolute inset-0 noise opacity-60" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-ocean blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-sky/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center pb-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky/30 bg-sky/5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky" />
              </span>
              Trusted by 50,000+ families
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] text-balance"
            >
              Protection That <em className="text-sky not-italic font-normal">Moves</em> With Your Life.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg lg:text-xl text-ice/70 max-w-xl leading-relaxed">
              Clariva offers intelligent insurance solutions tailored for individuals, families, and businesses — with clarity, care, and zero hassle.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#quote"
                className="btn-shimmer text-ocean-deep font-medium px-7 py-4 rounded-full shadow-sky inline-flex items-center gap-2"
              >
                Get My Free Quote <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.button
                onClick={() => setVideoOpen(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-ice/20 hover:border-sky/60 hover:bg-ice/5 transition"
              >
                <Play className="w-4 h-4 fill-sky text-sky" /> Watch How It Works
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {stats.map((s) => (
                <div key={s.label} className="group">
                  <div className="font-display text-4xl lg:text-5xl text-ice">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs text-ice/60 leading-snug">{s.label}</div>
                  <div className="mt-3 h-px bg-sky/40 w-0 group-hover:w-full transition-all duration-700" style={{ width: "60%" }} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative h-[520px] hidden lg:block"
          >
            {/* Rotating arcs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 grid place-items-center"
            >
              <svg viewBox="0 0 400 400" className="w-[500px] h-[500px] opacity-30">
                <circle cx="200" cy="200" r="180" fill="none" stroke="var(--sky)" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="140" fill="none" stroke="var(--sky)" strokeWidth="1" />
              </svg>
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 grid place-items-center"
            >
              <div className="w-[380px] h-[380px] rounded-full border border-sky/20" />
            </motion.div>

            {/* Family card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-8 right-0 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800" 
                  alt="Happy Family" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-mono-accent text-sky mb-2">Family Plan</div>
                  <div className="font-display text-2xl text-ice leading-tight">Sarah & James, plus two kids</div>
                </div>
              </div>
            </motion.div>

            {/* Coverage summary card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute bottom-0 left-0 w-80 bg-ice text-charcoal rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-mono-accent text-muted-foreground">Coverage Summary</div>
                <div className="text-xs px-2 py-0.5 rounded-full bg-sky/20 text-ocean font-medium">Active</div>
              </div>
              <div className="space-y-3">
                {["Life Insurance", "Health Insurance", "Home Coverage"].map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-ocean grid place-items-center">
                      <Check className="w-3.5 h-3.5 text-sky" strokeWidth={3} />
                    </div>
                    {p}
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Monthly</div>
                  <div className="font-display text-3xl text-ocean">$148</div>
                </div>
                <div className="text-xs text-muted-foreground">Renews May 2027</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust marquee */}
        <div className="relative border-y border-ice/10 bg-ocean-deep/60 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-5">
            <div className="font-mono-accent text-ice/40">Featured & Trusted By</div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, j) => (
                <div key={j} className="flex gap-16 items-center">
                  {["FORBES", "BLOOMBERG", "REUTERS", "WIRED", "FAST CO.", "WSJ", "TECHCRUNCH", "TIME"].map((b) => (
                    <span key={`${j}-${b}`} className="font-display text-2xl text-ice/40 tracking-widest">
                      {b}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ocean-deep/95 backdrop-blur flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card w-full max-w-3xl rounded-3xl p-8 border border-ice/10 text-center"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-3xl">How Clariva Works</h3>
                <button onClick={() => setVideoOpen(false)} className="p-2 rounded-full hover:bg-ocean/20"><X className="w-6 h-6" /></button>
              </div>
              <div className="aspect-video bg-ocean rounded-2xl flex items-center justify-center text-ice/50">
                Coming Soon — Stay Tuned!
              </div>
              <p className="mt-6 text-ice/70">Our team is putting the final touches on our new explainer video. Check back soon!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
