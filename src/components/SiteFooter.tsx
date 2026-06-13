import { Link } from "@tanstack/react-router";
import { Truck, Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80 mt-0">
      <div className="container-x py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-[var(--gradient-gold)] text-white">
              <Truck className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-bold text-white">SUVISHESH YASHOM LLP</div>
              <div className="text-xs text-gold tracking-[0.2em] uppercase">Logistics & Supply Chain</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            A registered LLP delivering reliable, technology-driven logistics and supply chain
            solutions to businesses across India — from first mile to last.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/15 text-white/70 hover:border-gold hover:text-gold transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link to="/why-us" className="hover:text-gold transition">Why Choose Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="hover:text-gold transition">Freight Management</Link></li>
            <li><Link to="/services" className="hover:text-gold transition">Supply Chain Consulting</Link></li>
            <li><Link to="/services" className="hover:text-gold transition">Warehousing</Link></li>
            <li><Link to="/services" className="hover:text-gold transition">Last-Mile Delivery</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Reach Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Delhi, India</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <a href="mailto:contact@suvisheshyashom.in" className="hover:text-gold break-all">contact@suvisheshyashom.in</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> +91 — —</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/55 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Suvishesh Yashom LLP. All rights reserved.</p>
          <p>Incorporated July 2025 · Registered under the Registrar of Companies, Delhi</p>
        </div>
      </div>
    </footer>
  );
}
