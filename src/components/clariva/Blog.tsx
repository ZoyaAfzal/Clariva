import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const posts = [
  { 
    cat: "Life", 
    title: "5 myths about life insurance, debunked.", 
    excerpt: "What every adult should actually know about term vs whole life.", 
    author: "Maya Chen", 
    date: "May 12, 2026", 
    img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600",
    content: "Life insurance is often shrouded in mystery and misinformation. The most common myth is that it's only for the elderly or those with families. In reality, locking in a policy while you're young and healthy is the smartest financial move you can make. Another myth is that employer-provided insurance is 'enough'—but those policies rarely travel with you if you change jobs. We break down why term life is usually better for younger adults, how much coverage you actually need (hint: it's more than you think), and how to navigate the underwriting process without the stress."
  },
  { 
    cat: "Claims", 
    title: "How to file a claim in under 3 minutes.", 
    excerpt: "A walk-through of our new mobile claim flow — with screenshots.", 
    author: "Liam Park", 
    date: "Apr 28, 2026", 
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
    content: "When disaster strikes, the last thing you want is a mountain of paperwork. Our new mobile claims engine uses AI to verify damage through your smartphone camera in real-time. Simply open the app, snap a few photos of the incident, and answer four basic questions. Our system instantly matches your data against your policy limits and initiates the payout process. For 85% of minor claims, funds are approved and dispatched to your linked bank account before you even hang up the phone. This guide shows you exactly how to prepare your digital evidence for the fastest possible resolution."
  },
  { 
    cat: "Home", 
    title: "What flood coverage really includes.", 
    excerpt: "The fine print, translated into plain English. Spoiler: it matters.", 
    author: "Ana Ortiz", 
    date: "Apr 14, 2026", 
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    content: "Standard homeowners insurance almost never covers flood damage, a fact many learn too late. We explain the critical difference between 'water damage' (like a burst pipe) and 'flooding' (surface water from storms). Our specialized flood riders cover everything from structural repairs and electrical system replacement to your high-value basement appliances. We also detail how the National Flood Insurance Program (NFIP) interacts with private policies, and why living outside a high-risk zone doesn't mean you're safe from rising waters. Learn how to audit your property's risk and get the right level of protection before the next season hits."
  },
];

export function Blog() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  const handleRead = (post: typeof posts[0]) => {
    setSelectedPost(post);
    setTimeout(() => {
      document.getElementById("article-reader")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section id="blog" className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono-accent text-ocean bg-sky/20 px-3 py-1 rounded-full">Insights</span>
            <h2 className="mt-5 font-display text-5xl lg:text-6xl leading-[1.05]">Smarter decisions start <em className="text-sky not-italic">here</em>.</h2>
          </div>
          <a href="#" className="text-ocean font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">All articles <ArrowRight className="w-4 h-4" /></a>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <motion.article 
              key={p.title} 
              variants={fadeUp} 
              onClick={() => handleRead(p)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ocean/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 noise opacity-20" />
                <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-ice/90 text-ocean-deep font-medium backdrop-blur">{p.cat}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-snug group-hover:text-ocean transition">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ocean text-sky grid place-items-center text-xs">{p.author.split(" ").map((s) => s[0]).join("")}</div>
                  <div>
                    <div className="font-medium">{p.author}</div>
                    <div className="text-xs text-muted-foreground">{p.date}</div>
                  </div>
                </div>
                <span className="relative text-ocean font-medium">Read<span className="absolute left-0 -bottom-0.5 h-px w-0 bg-sky group-hover:w-full transition-all duration-300" /></span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Article Reader Section */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              id="article-reader"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-20 p-8 lg:p-12 rounded-3xl bg-ice border border-sky/20 relative"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-8 right-8 text-river hover:text-ocean transition-colors font-medium flex items-center gap-1"
              >
                Close Article <Check className="w-4 h-4 rotate-45" />
              </button>
              
              <div className="max-w-3xl">
                <span className="font-mono-accent text-ocean bg-sky/20 px-3 py-1 rounded-full text-xs">{selectedPost.cat}</span>
                <h3 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">{selectedPost.title}</h3>
                
                <div className="mt-8 flex items-center gap-4 border-b border-sky/10 pb-8">
                  <div className="w-12 h-12 rounded-full bg-ocean text-sky grid place-items-center">{selectedPost.author.split(" ").map((s) => s[0]).join("")}</div>
                  <div>
                    <div className="font-display text-lg">{selectedPost.author}</div>
                    <div className="text-sm text-muted-foreground">Published on {selectedPost.date} · 5 min read</div>
                  </div>
                </div>

                <div className="mt-10 text-lg text-river leading-relaxed space-y-6">
                  {selectedPost.content}
                </div>
                
                <div className="mt-12 pt-8 border-t border-sky/10 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Share this article:</div>
                  <div className="flex gap-4">
                    {["Twitter", "LinkedIn", "Copy Link"].map((s) => (
                      <button key={s} className="text-ocean text-sm font-medium hover:text-sky transition-colors">{s}</button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="mt-20 relative overflow-hidden rounded-3xl bg-ocean-deep text-ice p-10 lg:p-14"
        >
          <div className="absolute inset-0 noise opacity-50" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-sky/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-display text-4xl lg:text-5xl leading-[1.1]">Weekly insurance wisdom, in your inbox.</h3>
              <p className="mt-4 text-ice/70">No spam. Just clear, useful insights, twice a month.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-ice/5 border-ice/20 text-ice placeholder:text-ice/40 h-14 rounded-full px-6"
              />
              <button type="submit" className="h-14 px-8 rounded-full bg-sky text-ocean-deep font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap">
                {submitted ? (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex items-center gap-2"><Check className="w-5 h-5" /> Subscribed</motion.span>
                ) : (
                  <>Subscribe <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
