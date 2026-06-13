import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Truck, Warehouse, Network, MapPin, ShieldCheck, Users, Globe2,
  Star, Quote, Plus, Minus, Clock, BarChart3, PackageCheck,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-logistics.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suvishesh Yashom LLP — Pan-India Logistics & Supply Chain Partner" },
      { name: "description", content: "Premium pan-India logistics & supply chain solutions: freight management, warehousing, consulting and last-mile delivery — built for enterprise reliability." },
      { property: "og:title", content: "Suvishesh Yashom LLP — Logistics & Supply Chain India" },
      { property: "og:description", content: "Enterprise-grade freight, warehousing and last-mile delivery across India. Reliable. Trackable. Compliant." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Suvishesh Yashom LLP",
          url: "https://suvishesh-delivery-hub.lovable.app",
          logo: "https://suvishesh-delivery-hub.lovable.app/favicon.ico",
          description: "Pan-India logistics and supply chain company offering freight management, warehousing, consulting and last-mile delivery.",
          address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
          sameAs: [],
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Truck, title: "Freight Management", desc: "End-to-end road, rail and multimodal freight movement across India." },
  { icon: Network, title: "Supply Chain Consulting", desc: "Data-driven strategy to optimise cost, speed and resilience." },
  { icon: Warehouse, title: "Warehousing", desc: "Strategically located storage with inventory visibility and control." },
  { icon: MapPin, title: "Last-Mile Delivery", desc: "Fast, trackable last-mile execution to your customer's doorstep." },
];

const stats = [
  { value: "Pan-India", label: "Operational Reach", icon: Globe2 },
  { value: "99%+", label: "On-Time Delivery Target", icon: Clock },
  { value: "24/7", label: "Operations Support", icon: ShieldCheck },
  { value: "100%", label: "Compliant LLP", icon: PackageCheck },
];

const trust = [
  { icon: ShieldCheck, title: "Reliable Operations" },
  { icon: Globe2, title: "Pan-India Network" },
  { icon: Users, title: "Experienced Team" },
  { icon: BarChart3, title: "Technology Driven" },
];

const testimonials = [
  { name: "Rajeev Malhotra", role: "Head of Operations", company: "BrightLine Retail", rating: 5,
    quote: "Suvishesh Yashom transformed our distribution. Shipments are predictable, communication is sharp, and SLAs are met without us chasing." },
  { name: "Priya Krishnan", role: "Supply Chain Director", company: "Northwind Industries", rating: 5,
    quote: "Their consulting team mapped our network end-to-end and shaved meaningful cost without compromising service. Genuine partners." },
  { name: "Amit Banerjee", role: "Founder", company: "Kavya Naturals", rating: 5,
    quote: "From warehousing to last-mile, the experience is seamless. They feel like an extension of our own ops team." },
];

const faqs = [
  { q: "What logistics services do you offer?", a: "We provide freight management (road, rail, multimodal), supply chain consulting, warehousing and last-mile delivery — across India." },
  { q: "What are typical delivery timelines?", a: "Timelines depend on origin, destination and mode. We commit to clear SLAs upfront and provide same-day and next-day options on key lanes." },
  { q: "Do you provide shipment tracking?", a: "Yes. Every consignment is trackable, with proactive milestone updates and digital proof of delivery." },
  { q: "Can you handle warehousing for my business?", a: "Yes. We offer strategically located storage with inventory accuracy, pick-pack-dispatch and full compliance controls." },
  { q: "How do business partnerships work?", a: "Share your requirement via the contact form. We respond within one business day with a tailored proposal and onboarding plan." },
  { q: "What kind of customer support do you provide?", a: "Dedicated account management, responsive operations support and an escalation path that keeps you informed at every step." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Pan-India logistics hub with cargo trucks at dusk" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy" />

        <div className="container-x relative py-28 md:py-40 lg:py-48">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Logistics & Supply Chain · India
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05]">
              Moving India's Business <span className="text-gold">Forward</span>, Mile After Mile.
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Suvishesh Yashom LLP is your enterprise-grade logistics partner — precision freight,
              intelligent warehousing and last-mile delivery built on trust, technology and pan-India reach.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[var(--shadow-gold)] hover:opacity-95 transition">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="px-4 md:px-6 py-8 md:py-10 text-center">
              <s.icon className="h-7 w-7 text-gold mx-auto" />
              <div className="mt-3 text-2xl md:text-3xl font-extrabold text-navy">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground font-medium">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Who We Are</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-navy leading-tight">
              A new generation logistics partner, built for modern India.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Incorporated in July 2025 and registered under the Registrar of Companies, Delhi,
              Suvishesh Yashom LLP brings together operational rigour and technology to deliver
              dependable logistics outcomes — from a single shipment to enterprise-scale supply chains.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition">
              Learn about us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">What We Do</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Services that move your business forward</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-xl bg-card border border-border p-7 hover:border-gold hover:-translate-y-1 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold group-hover:bg-[var(--gradient-gold)] group-hover:text-white transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition">
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-background py-14 md:py-16">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-gold shrink-0">
                  <t.icon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-navy text-sm md:text-base">{t.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Client Voices</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Trusted by businesses across India</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <article className="h-full rounded-2xl bg-card border border-border p-7 hover:border-gold hover:shadow-[var(--shadow-elegant)] transition">
                  <Quote className="h-7 w-7 text-gold" />
                  <p className="mt-4 text-navy/85 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Questions, answered.</h2>
            <p className="mt-4 text-muted-foreground">Can't find what you're looking for? <Link to="/contact" className="text-gold font-semibold hover:underline">Reach out</Link>.</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full" style={{ background: "var(--gradient-gold)", opacity: 0.18, filter: "blur(70px)" }} />
        <div className="container-x relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">Ready to move smarter? Let's talk logistics.</h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">Tell us about your supply chain — we'll build a plan that delivers.</p>
          <Link to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-7 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-gold)] hover:opacity-95 transition">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left">
        <span className="font-semibold text-navy text-base md:text-lg">{q}</span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-gold">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && <div className="px-5 md:px-6 pb-6 text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
