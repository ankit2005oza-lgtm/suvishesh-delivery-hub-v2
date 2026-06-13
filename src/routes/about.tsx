import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Building2, Calendar, MapPin, User, ShieldCheck, Eye as Transparency, Zap, Heart, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Suvishesh Yashom LLP | Logistics Partner India" },
      { name: "description", content: "Suvishesh Yashom LLP, incorporated July 2025, is a Delhi-based logistics & supply chain firm built on reliability, transparency and customer-first execution." },
      { property: "og:title", content: "About Suvishesh Yashom LLP" },
      { property: "og:description", content: "Mission, vision, values and leadership of a trusted Indian logistics LLP." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Reliability", desc: "We commit to clear SLAs and deliver on them — every shipment, every time." },
  { icon: Transparency, title: "Transparency", desc: "Open communication, visible processes and honest reporting at every stage." },
  { icon: Zap, title: "Efficiency", desc: "Lean operations and smart technology that compress cost and time." },
  { icon: Heart, title: "Customer Satisfaction", desc: "We measure success by the long-term partnerships we earn." },
];

function About() {
  return (
    <>
      <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 80% 20%, var(--gold), transparent 50%)" }} />
        <div className="container-x relative">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">About Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold max-w-3xl">Building trust, one shipment at a time.</h1>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-2xl">
            Suvishesh Yashom LLP is a registered Limited Liability Partnership delivering modern logistics
            and supply chain solutions for businesses across India.
          </p>
        </div>
      </section>

      {/* Company facts */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {[
            { icon: Calendar, label: "Incorporated", value: "July 2025" },
            { icon: Building2, label: "Entity Type", value: "Limited Liability Partnership (LLP)" },
            { icon: MapPin, label: "Registered With", value: "Registrar of Companies, Delhi" },
          ].map((d, i) => (
            <Reveal key={d.label} delay={i * 80}>
              <div className="rounded-xl border border-border bg-card p-7 h-full hover:border-gold transition">
                <d.icon className="h-7 w-7 text-gold" />
                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{d.label}</div>
                <div className="mt-1 text-lg font-bold text-navy">{d.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Story</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy leading-tight">
              Founded with a clear conviction: India's businesses deserve better logistics.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Suvishesh Yashom LLP was incorporated in July 2025 with one purpose — to build a
                logistics partner that businesses can genuinely trust. Founded by industry practitioners,
                the firm pairs operational discipline with modern technology to deliver predictable outcomes.
              </p>
              <p>
                From freight movement to warehousing and last-mile delivery, we work as an extension
                of our clients' teams: responsive, accountable and relentlessly focused on the
                metrics that matter — on-time delivery, accuracy and cost-to-serve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl bg-navy text-white p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full" style={{ background: "var(--gradient-gold)", opacity: 0.2, filter: "blur(40px)" }} />
              <Target className="h-9 w-9 text-gold relative" />
              <h3 className="mt-5 text-2xl md:text-3xl font-bold relative">Our Mission</h3>
              <p className="mt-4 text-white/80 leading-relaxed relative">
                To simplify and strengthen India's supply chains through dependable execution,
                transparent processes and a partnership-first approach — so our clients can grow with confidence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-card border border-border p-8 md:p-10 h-full">
              <Eye className="h-9 w-9 text-gold" />
              <h3 className="mt-5 text-2xl md:text-3xl font-bold text-navy">Our Vision</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To be recognised as one of India's most trusted logistics partners — known for
                operational excellence, pan-India reach and the quiet reliability that makes us
                the first call our clients make.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Core Values</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">The principles that drive every mile.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-xl bg-card border border-border p-7 hover:border-gold hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-gold">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Leadership</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Guided by experienced leadership</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 max-w-2xl rounded-2xl border border-border bg-card p-8 md:p-10 grid grid-cols-[auto_minmax(0,1fr)] gap-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--gradient-gold)] text-white">
                <User className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-navy">Sugandh Gulati</h3>
                <p className="text-xs sm:text-sm text-gold font-semibold uppercase tracking-wider mt-1">Designated Partner</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Leading the firm with a vision for operational excellence and customer-first logistics,
                  Sugandh Gulati steers Suvishesh Yashom LLP's growth as a trusted partner in the
                  Indian supply chain industry.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full" style={{ background: "var(--gradient-gold)", opacity: 0.18, filter: "blur(60px)" }} />
        <div className="container-x relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <h2 className="text-2xl md:text-4xl font-bold max-w-2xl">Partner with a logistics team that puts you first.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-7 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-gold)] hover:opacity-95 transition w-fit">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
