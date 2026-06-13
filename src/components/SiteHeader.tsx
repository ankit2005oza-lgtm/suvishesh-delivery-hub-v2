import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-[var(--shadow-elegant)]" : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[var(--gradient-gold)] text-white shadow-[var(--shadow-gold)]">
            <Truck className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm md:text-base font-bold text-white tracking-wide">
              SUVISHESH YASHOM
            </div>
            <div className="text-[10px] md:text-xs text-gold tracking-[0.2em] uppercase">LLP</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-md bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-gold)] hover:opacity-95 transition"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-white/85 hover:bg-white/5 hover:text-gold transition"
                activeProps={{ className: "px-3 py-3 rounded-md text-gold bg-white/5 font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
