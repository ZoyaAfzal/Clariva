import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { viewportOnce } from "@/lib/animations";

const reviews = [
  { name: "Sarah K.", loc: "Austin, TX", quote: "Filing my claim took under 4 minutes. I was floored — every other insurer made me wait weeks.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
  { name: "Marcus L.", loc: "Brooklyn, NY", quote: "Their advisor walked me through everything. I finally understand my own policy.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
  { name: "Priya N.", loc: "Seattle, WA", quote: "Bundled life + home and saved 23%. The dashboard is genuinely beautiful.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" },
  { name: "Diego R.", loc: "Miami, FL", quote: "When the storm hit, they were the first to call me. Not a chatbot — a real human.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
  { name: "Anna J.", loc: "Chicago, IL", quote: "Switched our small business policy here. Zero downtime, smarter coverage.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
  { name: "Tom F.", loc: "Denver, CO", quote: "Twenty years with another insurer. Wish I'd moved to Clariva sooner.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" },
  { name: "Emma S.", loc: "Portland, OR", quote: "Clear premiums. Clear coverage. Clear claims. Refreshingly honest.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" },
  { name: "Luis G.", loc: "Phoenix, AZ", quote: "Best customer service I've experienced in any industry, period.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" },
];

function Card({ name, loc, quote, img }: (typeof reviews)[number]) {
  return (
    <div className="w-[380px] shrink-0 bg-card rounded-2xl p-7 border border-border shadow-soft mx-3">
      <div className="flex gap-0.5 text-sky mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-sky" />
        ))}
      </div>
      <p className="italic text-foreground/85 leading-relaxed">"{quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-sky/20">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">{loc}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = reviews;
  const row2 = [...reviews].reverse();
  return (
    <section className="py-32 bg-ice overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        className="text-center max-w-3xl mx-auto px-6"
      >
        <span className="font-mono-accent text-ocean bg-sky/20 px-3 py-1 rounded-full">Real stories</span>
        <h2 className="mt-5 font-display text-5xl lg:text-6xl leading-[1.05] text-balance">
          50,000 families <em className="text-sky not-italic">trust</em> Clariva.
        </h2>
        <p className="mt-5 text-lg text-river">Real people. Real protection. Real peace of mind.</p>
      </motion.div>

      <div className="mt-16 space-y-6 marquee-pause">
        <div className="overflow-hidden">
          <div className="flex animate-marquee w-max">
            {[...row1, ...row1].map((r, i) => <Card key={i} {...r} />)}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse w-max">
            {[...row2, ...row2].map((r, i) => <Card key={i} {...r} />)}
          </div>
        </div>
      </div>

      {/* Video testimonial */}
      <div className="mt-24 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
            alt="Video testimonial background" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-ocean-deep/50" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-sky"
              />
              <div className="relative w-20 h-20 rounded-full bg-sky grid place-items-center shadow-sky">
                <Play className="w-8 h-8 fill-ocean-deep text-ocean-deep ml-1" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-ice">
            <div className="font-mono-accent text-sky">Watch</div>
            <div className="font-display text-3xl mt-1 text-white">Sarah's Story →</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
