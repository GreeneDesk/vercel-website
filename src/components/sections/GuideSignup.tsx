import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const ROLES = [
  "Council or leisure centre",
  "YMCA or community operator",
  "Gym or fitness",
  "Swim school",
  "Retirement village or aged care",
  "Allied health",
  "Other",
];

export function GuideSignup() {
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setStatus("saving");
    const { error } = await supabase.from("guide_subscribers").insert({
      email,
      organisation: organisation || null,
      role,
    });
    setStatus(error ? "error" : "done");
  };

  if (status === "done") {
    return (
      <section className="mt-16 rounded-2xl border border-border bg-surface-section px-6 py-10 text-center sm:px-10">
        <h2 className="font-display text-2xl font-bold">You're on the list</h2>
        <p className="mt-2 text-muted-foreground">Thanks — we'll email you when new GreeneDesk guides are published.</p>
      </section>
    );
  }

  return (
    <section className="mt-16 rounded-2xl border border-border bg-surface-section px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-xl">
        <h2 className="font-display text-2xl font-bold text-center">Get new guides by email</h2>
        <p className="mt-2 text-center text-muted-foreground">
          We publish practical guides for leisure, fitness, swim and seniors programs. Leave your email and we'll send new ones as they land.
        </p>
        <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="gs-email" className="mb-1 block text-sm font-medium">Email *</label>
            <input
              id="gs-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="gs-org" className="mb-1 block text-sm font-medium">Organisation (optional)</label>
            <input
              id="gs-org"
              type="text"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="gs-role" className="mb-1 block text-sm font-medium">Your role</label>
            <select
              id="gs-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <label className="flex items-start gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            Email me new GreeneDesk guides and updates
          </label>
          {status === "error" && (
            <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === "saving"}
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "saving" ? "Signing up…" : "Sign me up"}
          </button>
        </form>
      </div>
    </section>
  );
}
