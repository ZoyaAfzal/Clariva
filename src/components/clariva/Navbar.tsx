import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronDown, Menu, X } from "lucide-react";

const services = [
  "Life Insurance",
  "Health Insurance",
  "Home & Property",
  "Business Insurance",
  "Vehicle Insurance",
  "Travel Insurance",
];

const links = ["Home", "About", "Claims", "Blog", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-ice/80 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="relative w-9 h-9 rounded-lg bg-ocean grid place-items-center shadow-soft">
              <Shield className="w-5 h-5 text-sky" strokeWidth={2.2} />
            </span>
            <span className="font-display text-2xl font-medium tracking-tight">Clariva</span>
          </a>

          <div className="hidden lg:flex items-center gap-9 text-sm">
            {links.slice(0, 2).map((l) => (
              <NavLink key={l} label={l} />
            ))}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                  >
                    <div className="bg-card rounded-2xl shadow-soft border border-border p-2">
                      {services.map((s) => (
                        <a
                          key={s}
                          href="#services"
                          className="block px-4 py-2.5 text-sm rounded-lg hover:bg-secondary transition"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {links.slice(2).map((l) => (
              <NavLink key={l} label={l} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#quote"
              className="hidden sm:inline-flex btn-shimmer text-ocean-deep font-medium px-6 py-3 rounded-full text-sm shadow-sky"
            >
              Get Free Quote
            </motion.a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary"
              onClick={() => setMobile(true)}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ocean-deep text-ice"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-2xl">Clariva</span>
              <button onClick={() => setMobile(false)} aria-label="Close">
                <X className="w-7 h-7" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="px-8 mt-10 space-y-6"
            >
              {[...links.slice(0, 2), "Services", ...links.slice(2)].map((l) => (
                <motion.li
                  key={l}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="font-display text-4xl"
                >
                  <a href="#" onClick={() => setMobile(false)}>
                    {l}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="relative text-foreground/80 hover:text-foreground transition group"
    >
      {label}
      <span className="absolute left-0 -bottom-1 h-px w-0 bg-sky transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
