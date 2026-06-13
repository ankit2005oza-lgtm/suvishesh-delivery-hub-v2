import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Warehouse, Network, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Freight, Warehousing, Last-Mile | Suvishesh Yashom LLP" },
      { name: "description", content: "End-to-end logistics services across India: freight management, supply chain consulting, warehousing and last-mile delivery — built for enterprise reliability." },
      { property: "og:title", content: "Logistics Services — Suvishesh Yashom LLP" },
      { property: "og:description", content: "Freight, warehousing, consulting and last-mile delivery — pan-India." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Truck,
    title: "Freight Management",
    desc: "Reliable movement of goods across India through road, rail and multimodal transport, backed by real-time tracking and proactive coordination.",
    points: ["FTL & LTL road freight", "Multimodal solutions", "Real-time shipment visibility", "Dedicated account management"],
    benefits: ["Predictable transit times", "Lower cost-to-serve", "Single point of accountability"],
  },
  {
    icon: Network,
    title: "Supply Chain Consulting",
    desc: "Strategic and operational consulting to optimise cost, speed and resilience across your end-to-end supply chain.",
    points: ["Network design & optimisation", "Cost-to-serve analysis", "Process & SOP design", "Vendor & partner strategy"],
    benefits: ["Quantified cost savings", "Faster lead times", "Risk-resilient operations"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Strategically located warehousing with inventory accuracy, robust controls and the flexibility to scale with demand.",
    points: ["Strategic storage locations", "Inventory accuracy & control", "Pick, pack & dispatch", "Compliance & safety"],
    benefits: ["Higher fill rates", "Reduced shrinkage", "Scalable on demand"],
  },
  {
    icon: MapPin,
    title: "Last-Mile Delivery",
    desc: "Fast, trackable last-mile execution that reaches your customer's doorstep — reliably, every time.",
    points: ["Same-day & next-day delivery", "Live tracking & PODs", "Reverse logistics", "Pan-India coverage"],
    benefits: ["Higher customer NPS", "Reduced RTO rates", "Transparent proof of delivery"],
  },
];

function Services() {
  return (
    <>
      <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 20% 20%, var(--gold), transparent 50%)" }} />
        <div className="container-x relative">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Services</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold max-w-3xl">End-to-end logistics, engineered for outcomes.</h1>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl">
            From first mile to last, we design and operate logistics solutions that move your business forward — with reliability you can plan around.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 md:p-9 hover:border-gold hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold group-hover:bg-[var(--gradient-gold)] group-hover:text-white transition-colors">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-navy">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid gap-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-navy/85">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">Key Benefits</div>
                  <div className="flex flex-wrap gap-2">
                    {s.benefits.map((b) => (
                      <span key={b} className="text-xs font-medium bg-secondary text-navy px-3 py-1.5 rounded-full border border-border">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container-x grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy">Have a specific requirement?</h3>
            <p className="mt-2 text-muted-foreground">We design bespoke logistics solutions tailored to your business.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-gold)] hover:opacity-95 transition w-fit">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
