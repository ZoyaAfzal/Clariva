import { Shield, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const cols = [
  { title: "Services", items: ["Life", "Health", "Home", "Vehicle", "Business", "Travel"] },
  { title: "Company", items: ["About", "Careers", "Press", "Partners"] },
  { title: "Resources", items: ["Blog", "FAQ", "Glossary", "Claims Portal"] },
  { title: "Contact", items: ["hello@clariva.com", "101 Skyline Ave, Austin TX"] },
];

export function Footer() {
  return (
    <footer className="bg-ocean-deep text-ice pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-ocean grid place-items-center">
              <Shield className="w-5 h-5 text-sky" strokeWidth={2.2} />
            </span>
            <span className="font-display text-2xl text-white">Clariva</span>
          </div>
          <p className="mt-4 text-ice/60 max-w-sm leading-relaxed">
            Clear coverage. Total confidence. Insurance built for the way you actually live.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-ice/15 grid place-items-center hover:border-sky hover:text-sky transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono-accent text-sky mb-4">{c.title}</div>
              <ul className="space-y-2.5 text-sm text-ice/70">
                {c.items.map((i) => (
                  <li key={i}><a href="#" className="hover:text-sky transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-sky/40 to-transparent" />
        <div className="mt-6 flex flex-wrap items-center justify-end gap-4 text-xs text-ice/50">
          <div className="flex gap-6 items-center">
            <a 
              href="https://axistechgroup.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-sky transition-colors flex items-center gap-1 font-medium"
            >
              Powered by <span className="text-white">AxisTechGroup</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
