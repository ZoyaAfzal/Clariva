import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { viewportOnce } from "@/lib/animations";

export function CtaBanner() {
  return (
    <section className="relative h-[60vh] min-h-[480px] grid place-items-center bg-ocean-deep text-ice overflow-hidden">
      <div className="absolute inset-0 noise opacity-50" />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className="absolute"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
        >
          <Shield className="w-16 h-16 text-sky/20" strokeWidth={1} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-3xl mx-auto px-6"
      >
        <h2 className="font-display text-5xl lg:text-7xl leading-[1.05] text-balance">
          Your coverage journey starts <em className="text-sky not-italic">today</em>.
        </h2>
        <p className="mt-6 text-lg text-ice/70">Join thousands who chose clarity over confusion.</p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href="#quote"
          className="mt-10 inline-flex items-center gap-3 btn-shimmer text-ocean-deep font-medium px-10 py-5 rounded-full text-lg shadow-sky"
        >
          Get My Free Quote <ArrowRight className="w-5 h-5" />
        </motion.a>
        <p className="mt-6 text-sm text-ice/50">No credit card required · Cancel anytime · 5-min setup</p>
      </motion.div>
    </section>
  );
}
