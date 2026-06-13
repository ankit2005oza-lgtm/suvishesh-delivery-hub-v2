import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Truck, Loader2 } from "lucide-react";
import { z } from "zod";

const searchSchema = z.object({ redirect: z.string().optional() });

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Admin Login — Suvishesh Yashom LLP" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  // If already signed in, bounce away
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: search.redirect ?? "/admin", replace: true });
    });
  }, [navigate, search.redirect]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        setInfo("Account created. Signing you in...");
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        navigate({ to: search.redirect ?? "/admin", replace: true });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: search.redirect ?? "/admin", replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  const field = "w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition";

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-5 py-12 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, var(--gold), transparent 55%)" }} />
      <div className="relative w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="grid h-12 w-12 place-items-center rounded-md bg-[var(--gradient-gold)] text-white shadow-[var(--shadow-gold)]">
            <Truck className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-white">SUVISHESH YASHOM</div>
            <div className="text-[11px] text-gold tracking-[0.25em] uppercase">Admin Portal</div>
          </div>
        </div>

        <div className="rounded-2xl bg-navy-light/40 border border-white/10 backdrop-blur p-8 shadow-[var(--shadow-elegant)]">
          <h1 className="text-2xl font-bold text-white">
            {mode === "signin" ? "Sign in to dashboard" : "Create admin account"}
          </h1>
          <p className="mt-1 text-sm text-white/60">
            {mode === "signin" ? "Enter your credentials to manage leads." : "The first signup is granted admin access."}
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-semibold text-white/80 uppercase tracking-wider">Email</label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`mt-2 ${field}`} placeholder="admin@suvisheshyashom.in" autoComplete="email" />
            </div>
            <div>
              <label className="text-xs font-semibold text-white/80 uppercase tracking-wider">Password</label>
              <input required type="password" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className={`mt-2 ${field}`} placeholder="••••••••" autoComplete={mode === "signin" ? "current-password" : "new-password"} />
            </div>

            {error && <div className="rounded-md bg-destructive/15 border border-destructive/40 px-3 py-2 text-sm text-destructive-foreground">{error}</div>}
            {info && <div className="rounded-md bg-gold/15 border border-gold/40 px-3 py-2 text-sm text-gold">{info}</div>}

            <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-gold)] disabled:opacity-60 hover:opacity-95 transition">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <button onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); setInfo(null); }} className="mt-5 w-full text-center text-sm text-white/65 hover:text-gold transition">
            {mode === "signin" ? "First time? Create the admin account →" : "Already have an account? Sign in →"}
          </button>
        </div>
      </div>
    </div>
  );
}
