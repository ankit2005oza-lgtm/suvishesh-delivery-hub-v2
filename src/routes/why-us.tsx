import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Globe2, Radar, Headphones, Wallet, Cpu, Users, Lock, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Suvishesh Yashom LLP | Trusted Logistics India" },
      { name: "description", content: "Pan-India reach, real-time tracking, dedicated support and technology-driven operations — discover why businesses partner with Suvishesh Yashom LLP." },
      { property: "og:title", content: "Why Choose Suvishesh Yashom LLP" },
      { property: "og:description", content: "Eight reasons businesses across India trust us with their supply chain." },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUs,
});

const reasons = [
  { icon: Globe2, title: "Pan-India Reach", desc: "Deep operational coverage across metros, tier-2 and tier-3 cities — wherever your customers are." },
  { icon: ShieldCheck, title: "Reliable Operations", desc: "On-time, in-full execution backed by clear SLAs and accountable ownership at every stage." },
  { icon: Radar, title: "Real-Time Tracking", desc: "Live shipment visibility, milestone alerts and digital proof of delivery on every consignment." },
  { icon: Headphones, title: "Dedicated Customer Support", desc: "A single point of contact, fast turnaround and proactive communication — no chasing." },
  { icon: Wallet, title: "Cost Efficient Solutions", desc: "Lean routing, smart consolidation and optimised networks that reduce total cost-to-serve." },
  { icon: Cpu, title: "Technology Driven Logistics", desc: "Tracking, analytics and automation built into every workflow for predictable outcomes." },
  { icon: Users, title: "Experienced Team", desc: "Operations led by industry practitioners with hands-on supply chain expertise." },
  { icon: Lock, title: "Secure Delivery Network", desc: "Vetted partners, controlled handovers and compliance discipline that protect your goods." },
];

function WhyUs() {
  return (
    <>
      <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 50% 30%, var(--gold), transparent 55%)" }} />
        <div className="container-x relative">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Why Choose Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold max-w-3xl">The difference is in how we deliver.</h1>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl">
            Eight reasons businesses across India trust Suvishesh Yashom LLP with their supply chain.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 md:p-7 hover:border-gold hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--gradient-gold)", filter: "blur(40px)" }} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold group-hover:bg-[var(--gradient-gold)] group-hover:text-white transition">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full" style={{ background: "var(--gradient-gold)", opacity: 0.18, filter: "blur(60px)" }} />
        <div className="container-x relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">Let's build a logistics partnership that lasts.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-7 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-gold)] hover:opacity-95 transition">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
