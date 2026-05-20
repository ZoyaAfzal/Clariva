import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const team = [
  { name: "Eleanor Vance", title: "Head of Advisory", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Marcus Reid", title: "Claims Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Priya Shankar", title: "Lead Underwriter", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { name: "Jonas Weber", title: "Customer Care", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
];

export function Team() {
  return (
    <section className="py-32 bg-ice">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="font-mono-accent text-ocean bg-sky/20 px-3 py-1 rounded-full">Our team</span>
          <h2 className="mt-5 font-display text-5xl lg:text-6xl leading-[1.05]">
            Built by people who care about <em className="text-sky not-italic">people</em>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-md">
            Clariva is a team of advisors, claims specialists, and engineers obsessed with making insurance feel human again.
          </p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 text-ocean font-medium hover:gap-3 transition-all">Meet the full team <ArrowRight className="w-4 h-4" /></a>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              whileHover={{ rotate: 1, y: -6 }}
              className="bg-card rounded-2xl p-5 border border-border shadow-soft text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-sky/60 ring-offset-2 ring-offset-card shadow-lg">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="mt-4 font-display text-lg">{m.name}</h4>
              <div className="font-mono-accent text-muted-foreground text-[0.65rem]">{m.title}</div>
              <Linkedin className="w-4 h-4 mx-auto mt-3 text-ocean hover:text-sky cursor-pointer transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
