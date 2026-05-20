import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Heart, Stethoscope, Car, Briefcase, Plane, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const services = [
  { 
    icon: Home, 
    title: "Home & Property", 
    desc: "Protect your house, belongings, and peace of mind against the unexpected.", 
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=600", 
    highlights: "Theft, Fire, Liability, Natural Disaster", 
    target: "Homeowners & Renters", 
    cost: "$45 – $180",
    longDesc: "Our home insurance goes beyond basic structure protection. We provide comprehensive coverage for your personal belongings, detached structures like garages or sheds, and even temporary living expenses if your home becomes uninhabitable. Additionally, our liability protection shields you from legal costs if someone is injured on your property. Whether you own a suburban estate or rent a downtown apartment, we have a plan that fits your specific needs."
  },
  { 
    icon: Heart, 
    title: "Life Insurance", 
    desc: "Secure your family's future with flexible term and whole life options.", 
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600", 
    highlights: "Financial Security, Debt Coverage, Legacy", 
    target: "Families & Individuals", 
    cost: "$25 – $300",
    longDesc: "Planning for the future means ensuring your loved ones are taken care of, no matter what happens. Our life insurance policies offer financial security that can cover mortgage payments, college tuition, and daily living expenses for your beneficiaries. We offer both Term Life for affordable, high-coverage protection during your peak earning years, and Whole Life options that build cash value over time. Our advisors work with you to calculate exactly how much coverage your family needs to maintain their standard of living."
  },
  { 
    icon: Stethoscope, 
    title: "Health Insurance", 
    desc: "Comprehensive medical coverage with access to top-rated networks.", 
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600", 
    highlights: "Doctor Visits, Surgery, Prescription Drugs", 
    target: "Families & Employees", 
    cost: "$200 – $600",
    longDesc: "Navigate the complexities of healthcare with confidence. Our health plans provide access to an extensive network of top-tier hospitals and specialists, ensuring you get the best care available. From preventative screenings and routine check-ups to major surgical procedures and chronic disease management, we've got you covered. We also include mental health support and wellness programs at no extra cost, because we believe true health is about more than just treating illness—it's about staying well."
  },
  { 
    icon: Car, 
    title: "Vehicle Insurance", 
    desc: "Coverage that keeps you moving — auto, motorcycle, and rideshare.", 
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600", 
    highlights: "Collision, Theft, Roadside Assistance", 
    target: "Drivers & Owners", 
    cost: "$60 – $250",
    longDesc: "Whether you're commuting to work or embarking on a cross-country road trip, our vehicle insurance provides the ultimate safety net. We offer robust collision and comprehensive coverage to repair or replace your vehicle, along with high-limit liability protection. Our unique 'Rideshare Rider' ensures you're protected even when you're driving for work. Plus, every policy includes 24/7 premium roadside assistance, so you're never stranded if you have a flat tire, dead battery, or empty tank."
  },
  { 
    icon: Briefcase, 
    title: "Business Insurance", 
    desc: "From liability to property, protect what you've built — at every scale.", 
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", 
    highlights: "Professional Liability, Cyber, Property", 
    target: "Business Owners & Startups", 
    cost: "$150 – $800",
    longDesc: "Protect your hard-earned business from modern threats. Our commercial policies are tailored to your industry, covering everything from general liability and property damage to specialized professional indemnity. In today's digital landscape, our comprehensive cyber insurance is essential, protecting you against data breaches and digital extortion. We also offer workers' compensation and business interruption insurance, ensuring your operations can continue even after an unexpected setback or disaster."
  },
  { 
    icon: Plane, 
    title: "Travel Insurance", 
    desc: "Worry-free journeys with global medical, trip, and luggage coverage.", 
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600", 
    highlights: "Trip Cancellation, Medical Evac, Lost Bags", 
    target: "Travelers", 
    cost: "$20 – $150",
    longDesc: "Travel the world with total peace of mind. Our international plans cover unexpected trip cancellations, delays, and lost or stolen luggage. Most importantly, we provide emergency medical coverage and evacuation services that your standard health insurance likely won't cover abroad. Whether it's a weekend getaway or a year-long expedition, we ensure that a small mishap doesn't turn into a financial catastrophe. Access our 24/7 global concierge for help with lost passports, medical referrals, or emergency translations."
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<string | undefined>(undefined);

  const handleViewDetails = (id: string, index: number) => {
    setActiveService(`s-${index}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="services" className="relative py-32 bg-ocean-deep text-ice overflow-hidden">
      <div className="absolute inset-0 noise opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="font-mono-accent text-sky">Our Services</span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl leading-[1.05] text-balance">
            Coverage for every <em className="text-sky not-italic">chapter</em> of life.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, desc, img }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative bg-ocean/40 backdrop-blur rounded-3xl p-0 border border-ice/10 hover:border-sky/60 transition-all overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-ocean-deep/40 group-hover:bg-ocean-deep/20 transition-colors" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-12 h-12 rounded-xl bg-sky/90 text-ocean-deep grid place-items-center backdrop-blur shadow-lg">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-ice/65 leading-relaxed">{desc}</p>
                <div className="mt-6 overflow-hidden h-6">
                  <button 
                    onClick={() => handleViewDetails(`details-${title.toLowerCase().replace(/ & /g, '-')}`, i)}
                    className="flex items-center gap-2 text-sky text-sm -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accordion detail */}
        <div id="service-details" className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono-accent text-sky">Service Details</span>
            <h3 className="mt-3 font-display text-3xl">Explore each coverage type</h3>
          </div>
          <Accordion 
            type="single" 
            collapsible 
            value={activeService}
            onValueChange={setActiveService}
            className="space-y-3"
          >
            {services.map((s, i) => (
              <AccordionItem
                key={s.title}
                value={`s-${i}`}
                className="bg-ocean/30 border border-ice/10 rounded-2xl px-6 data-[state=open]:border-sky/40"
              >
                <AccordionTrigger id={`details-${s.title.toLowerCase().replace(/ & /g, '-')}`} className="font-display text-xl hover:no-underline">
                  <div className="flex items-center gap-3">
                    <s.icon className="w-5 h-5 text-sky" /> {s.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-ice/70">
                  <div className="space-y-6 pt-2">
                    <p className="leading-relaxed text-ice/90">
                      {s.longDesc}
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-ice/10">
                      <div>
                        <div className="font-mono-accent text-sky mb-1">Highlights</div>
                        <div className="text-sm">{s.highlights}</div>
                      </div>
                      <div>
                        <div className="font-mono-accent text-sky mb-1">Who it's for</div>
                        <div className="text-sm">{s.target}</div>
                      </div>
                      <div>
                        <div className="font-mono-accent text-sky mb-1">Avg. monthly</div>
                        <div className="font-display text-2xl text-ice">{s.cost}</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
