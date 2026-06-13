import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Suvishesh Yashom LLP | Get a Logistics Quote" },
      { name: "description", content: "Get in touch with Suvishesh Yashom LLP for freight, warehousing, consulting and last-mile delivery. Based in Delhi — pan-India operations. Reply within one business day." },
      { property: "og:title", content: "Contact Suvishesh Yashom LLP" },
      { property: "og:description", content: "Share your logistics requirement and our team will respond within one business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});


const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  company: z.string().trim().max(150, "Company name too long").optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30, "Phone number too long").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message is too long"),
});

function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setStatus("loading");
    const { error: insertErr } = await supabase.from("leads").insert({
      name: parsed.data.name,
      company: parsed.data.company || null,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      message: parsed.data.message,
    });
    if (insertErr) {
      setStatus("error");
      setError(insertErr.message);
      return;
    }
    setStatus("success");
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
  }

  const field = "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition";

  return (
    <>
      <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 30%, var(--gold), transparent 55%)" }} />
        <div className="container-x relative">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold max-w-3xl">Let's talk logistics.</h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            Share a few details about your requirement and our team will get back to you shortly.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Reach our office</h2>
            <p className="mt-3 text-muted-foreground">We typically respond within one business day.</p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-gold"><MapPin className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Office</div>
                  <div className="text-navy font-semibold">Delhi, India</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-gold"><Mail className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Email</div>
                  <a href="mailto:contact@suvisheshyashom.in" className="text-navy font-semibold hover:text-gold break-all">contact@suvisheshyashom.in</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy text-gold"><Phone className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Phone</div>
                  <div className="text-navy font-semibold">+91 — —</div>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/911234567890?text=Hi%20Suvishesh%20Yashom%20LLP%2C%20I%27d%20like%20to%20discuss%20a%20logistics%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] hover:opacity-95 transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.523 5.276l-.999 3.648 3.965-1.623z"/></svg>
              Chat on WhatsApp
            </a>

            <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elegant)]">
              <iframe
                title="Office location — Delhi"
                src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>


          <Reveal delay={120} className="lg:col-span-3">
            {status === "success" ? (
              <div className="rounded-2xl border border-gold/40 bg-card p-10 text-center shadow-[var(--shadow-elegant)]">
                <CheckCircle2 className="h-14 w-14 text-gold mx-auto" />
                <h3 className="mt-5 text-2xl font-bold text-navy">Message received</h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 md:p-10 shadow-[var(--shadow-elegant)]">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-navy">Name *</label>
                    <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`mt-2 ${field}`} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy">Company</label>
                    <input maxLength={150} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={`mt-2 ${field}`} placeholder="Company name" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy">Email *</label>
                    <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`mt-2 ${field}`} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy">Phone</label>
                    <input maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`mt-2 ${field}`} placeholder="+91 ..." />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="text-sm font-semibold text-navy">Message *</label>
                  <textarea required rows={5} maxLength={5000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`mt-2 ${field} resize-none`} placeholder="Tell us about your logistics requirement..." />
                </div>

                {error && (
                  <div className="mt-5 rounded-md bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm text-destructive">{error}</div>
                )}

                <button type="submit" disabled={status === "loading"} className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-gold)] hover:opacity-95 transition disabled:opacity-60">
                  {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                <p className="mt-3 text-xs text-muted-foreground">Your details are stored securely and only used to respond to your enquiry.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
