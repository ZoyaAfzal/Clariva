import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { viewportOnce } from "@/lib/animations";

const faqs = [
  ["How fast can I get covered?", "Most policies activate within 24 hours of acceptance, often the same day."],
  ["What if I already have insurance?", "We help you transition seamlessly and often save you 15–30% in the process."],
  ["Are quotes binding?", "No. Quotes are estimates. Your final premium is set after underwriting review."],
  ["Can I change my policy later?", "Yes. You can adjust coverage, add riders, or cancel anytime from your dashboard."],
  ["How are claims handled?", "Submit via the app in under 3 minutes. A human reviewer responds within 24 hours."],
  ["Do you offer bundled discounts?", "Absolutely bundling life + home or auto typically saves 10–25%."],
  ["Is my data secure?", "We use bank-grade encryption and never sell your data to third parties."],
  ["What regions do you cover?", "All 50 U.S. states, with international travel coverage available."],
  ["Do you work with brokers?", "Yes, independent brokers can partner with us through our Pro program."],
  ["How do I contact support?", "24/7 chat, phone, and email answered by humans, not bots."],
];

export function Faq() {
  const [chat, setChat] = useState(false);
  return (
    <section className="py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="text-center mb-14">
          <span className="font-mono-accent text-ocean bg-sky/20 px-3 py-1 rounded-full">FAQ</span>
          <h2 className="mt-5 font-display text-5xl lg:text-6xl">Questions, <em className="text-sky not-italic">answered</em>.</h2>
        </motion.div>

        <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-8">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-b border-border">
              <AccordionTrigger className="font-display text-lg text-left hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Live chat bubble */}
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {chat && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-16 right-0 bg-card border border-border rounded-2xl p-4 shadow-soft w-64"
            >
              <div className="font-display text-base">Chat with an advisor</div>
              <div className="text-xs text-muted-foreground mt-1">Usually replies in 2 min</div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setChat(true)}
          onMouseLeave={() => setChat(false)}
          className="w-14 h-14 rounded-full bg-ocean text-sky grid place-items-center shadow-2xl"
          aria-label="Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
