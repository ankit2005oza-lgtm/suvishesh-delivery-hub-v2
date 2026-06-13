import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, Building2, MessageSquare, Trash2, Check, LogOut, Loader2, Inbox, ShieldAlert, RefreshCw } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Suvishesh Yashom LLP" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [userEmail, setUserEmail] = useState<string>("");

  async function checkAdminAndLoad() {
    setLoading(true);
    setError(null);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return;
    setUserEmail(userData.user.email ?? "");

    const { data: roles, error: roleErr } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user.id);
    if (roleErr) {
      setError(roleErr.message);
      setLoading(false);
      return;
    }
    const admin = roles?.some((r) => r.role === "admin") ?? false;
    setIsAdmin(admin);

    if (admin) {
      const { data, error: fetchErr } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (fetchErr) setError(fetchErr.message);
      else setLeads((data ?? []) as Lead[]);
    }
    setLoading(false);
  }

  useEffect(() => {
    checkAdminAndLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function toggleRead(lead: Lead) {
    const next = !lead.is_read;
    setLeads((ls) => ls.map((l) => (l.id === lead.id ? { ...l, is_read: next } : l)));
    const { error } = await supabase.from("leads").update({ is_read: next }).eq("id", lead.id);
    if (error) {
      setLeads((ls) => ls.map((l) => (l.id === lead.id ? { ...l, is_read: !next } : l)));
      setError(error.message);
    }
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    const prev = leads;
    setLeads((ls) => ls.filter((l) => l.id !== id));
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) {
      setLeads(prev);
      setError(error.message);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const filtered = leads.filter((l) =>
    filter === "all" ? true : filter === "unread" ? !l.is_read : l.is_read
  );
  const unreadCount = leads.filter((l) => !l.is_read).length;

  if (loading && isAdmin === null) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <Loader2 className="h-8 w-8 animate-spin text-gold" />
      </div>
    );
  }

  if (isAdmin === false) {
    return (
      <div className="min-h-[60vh] grid place-items-center px-5">
        <div className="max-w-md text-center rounded-2xl border border-border bg-card p-10">
          <ShieldAlert className="h-10 w-10 text-gold mx-auto" />
          <h1 className="mt-4 text-2xl font-bold text-navy">Not authorised</h1>
          <p className="mt-2 text-muted-foreground">Your account does not have admin access to this dashboard.</p>
          <button onClick={signOut} className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary min-h-[calc(100vh-5rem)]">
      <div className="container-x py-10 md:py-14">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Admin Dashboard</span>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-navy">Leads Inbox</h1>
            <p className="mt-1 text-sm text-muted-foreground truncate">Signed in as {userEmail}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={checkAdminAndLoad} className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-navy hover:border-gold transition">
              <RefreshCw className="h-4 w-4" /> <span className="hidden sm:inline">Refresh</span>
            </button>
            <button onClick={signOut} className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition">
              <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Total Leads" value={leads.length} />
          <Stat label="Unread" value={unreadCount} accent />
          <Stat label="Read" value={leads.length - unreadCount} />
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {(["all", "unread", "read"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md text-sm font-semibold capitalize transition ${
                filter === f
                  ? "bg-navy text-white"
                  : "bg-card border border-border text-navy hover:border-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {error && (
          <div className="mt-6 rounded-md bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm text-destructive">{error}</div>
        )}

        {/* Leads list */}
        <div className="mt-6 grid gap-4">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <Inbox className="h-10 w-10 mx-auto text-muted-foreground" />
              <p className="mt-3 font-semibold text-navy">No leads to show</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Submissions from the <Link to="/contact" className="text-gold underline">contact form</Link> appear here.
              </p>
            </div>
          ) : (
            filtered.map((lead) => (
              <article
                key={lead.id}
                className={`rounded-xl border bg-card p-5 md:p-6 transition ${
                  lead.is_read ? "border-border opacity-80" : "border-gold/40 shadow-[var(--shadow-elegant)]"
                }`}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-start">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-navy text-lg truncate">{lead.name}</h3>
                      {!lead.is_read && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold px-2 py-0.5 rounded">New</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {new Date(lead.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => toggleRead(lead)} title={lead.is_read ? "Mark unread" : "Mark read"} className="grid h-9 w-9 place-items-center rounded-md border border-border text-navy hover:border-gold hover:text-gold transition">
                      <Check className="h-4 w-4" />
                    </button>
                    <button onClick={() => deleteLead(lead.id)} title="Delete" className="grid h-9 w-9 place-items-center rounded-md border border-border text-destructive hover:bg-destructive hover:text-destructive-foreground transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
                  <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-navy hover:text-gold min-w-0">
                    <Mail className="h-4 w-4 text-gold shrink-0" /> <span className="truncate">{lead.email}</span>
                  </a>
                  {lead.phone && (
                    <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-navy hover:text-gold min-w-0">
                      <Phone className="h-4 w-4 text-gold shrink-0" /> <span className="truncate">{lead.phone}</span>
                    </a>
                  )}
                  {lead.company && (
                    <div className="flex items-center gap-2 text-navy min-w-0">
                      <Building2 className="h-4 w-4 text-gold shrink-0" /> <span className="truncate">{lead.company}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 rounded-lg bg-secondary p-4 border border-border">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    <MessageSquare className="h-3.5 w-3.5" /> Message
                  </div>
                  <p className="text-sm text-navy whitespace-pre-wrap break-words leading-relaxed">{lead.message}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-5 ${accent ? "bg-navy text-white border-navy" : "bg-card border-border"}`}>
      <div className={`text-xs uppercase tracking-wider font-semibold ${accent ? "text-gold" : "text-muted-foreground"}`}>{label}</div>
      <div className={`mt-2 text-3xl font-bold ${accent ? "text-white" : "text-navy"}`}>{value}</div>
    </div>
  );
}
