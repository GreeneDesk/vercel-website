import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [status, setStatus] = useState<Status>("loading");
  const [processing, setProcessing] = useState(false);
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: SUPABASE_ANON_KEY },
    })
      .then(r => r.json())
      .then(data => {
        if (data.valid === false && data.reason === "already_unsubscribed") setStatus("already");
        else if (data.valid) setStatus("valid");
        else setStatus("invalid");
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const handleUnsubscribe = async () => {
    setProcessing(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      setStatus(data?.success ? "success" : "error");
    } catch { setStatus("error"); }
    setProcessing(false);
  };

  return (
    <Layout>
      <SEO title="Unsubscribe – GreeneDesk" description="Manage your email preferences." />
      <section className="section-padding">
        <div className="container-wide max-w-lg mx-auto text-center">
          {status === "loading" && <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />}
          {status === "valid" && (
            <>
              <h1 className="font-display text-2xl font-bold mb-4">Unsubscribe from emails</h1>
              <p className="text-muted-foreground mb-6">Click below to stop receiving these emails.</p>
              <Button variant="destructive" onClick={handleUnsubscribe} disabled={processing}>
                {processing ? "Processing…" : "Confirm Unsubscribe"}
              </Button>
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="font-display text-2xl font-bold mb-2">You've been unsubscribed</h1>
              <p className="text-muted-foreground">You won't receive these emails any more.</p>
            </>
          )}
          {status === "already" && (
            <>
              <CheckCircle2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h1 className="font-display text-2xl font-bold mb-2">Already unsubscribed</h1>
              <p className="text-muted-foreground">You've already opted out of these emails.</p>
            </>
          )}
          {(status === "invalid" || status === "error") && (
            <>
              <XCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h1 className="font-display text-2xl font-bold mb-2">Invalid link</h1>
              <p className="text-muted-foreground">This unsubscribe link is invalid or has expired.</p>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;
