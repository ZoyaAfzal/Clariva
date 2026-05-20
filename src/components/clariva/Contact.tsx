import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-ice">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="font-mono-accent text-ocean bg-sky/20 px-3 py-1 rounded-full text-xs">Contact Us</span>
            <motion.h2 variants={fadeUp} className="mt-5 font-display text-5xl lg:text-6xl leading-[1.05]">
              Let's start a <em className="text-sky not-italic">conversation</em>.
            </motion.h2>
            <p className="mt-6 text-lg text-river max-w-md leading-relaxed">
              Have questions about a policy? Need help with a claim? Our team is here to provide the clarity you deserve.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-ocean text-sky grid place-items-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Email Support</div>
                  <div className="text-xl font-display">hello@clariva.com</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-ocean text-sky grid place-items-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Claims Hotline</div>
                  <div className="text-xl font-display">1-800-CLARIVA</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-ocean text-sky grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Headquarters</div>
                  <div className="text-xl font-display text-balance">101 Skyline Ave, Austin TX 78701</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-soft relative overflow-hidden"
          >
            <div className="absolute inset-0 noise opacity-10 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="John Doe" required className="rounded-xl border-border/60" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" placeholder="john@example.com" required className="rounded-xl border-border/60" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Policy Inquiry" required className="rounded-xl border-border/60" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="How can we help you today?" required className="min-h-[150px] rounded-xl border-border/60 resize-none" />
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full h-14 rounded-xl bg-ocean text-sky font-medium flex items-center justify-center gap-2 hover:bg-ocean-deep transition-all shadow-lg"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-sky/30 border-t-sky rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-sky/20 text-ocean rounded-full grid place-items-center mx-auto mb-6">
                    <Check className="w-10 h-10" strokeWidth={3} />
                  </div>
                  <h3 className="font-display text-3xl mb-3">Message Sent!</h3>
                  <p className="text-river leading-relaxed max-w-xs mx-auto">
                    Thank you for reaching out. An advisor will review your message and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-ocean font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
