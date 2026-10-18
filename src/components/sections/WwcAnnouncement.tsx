import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./WwcAnnouncement.css";

// Set to false to remove the announcement from the homepage.
export const WWC_ANNOUNCEMENT_ENABLED = true;

export function WwcAnnouncement() {
  const [dismissed, setDismissed] = useState(false);
  if (!WWC_ANNOUNCEMENT_ENABLED || dismissed) return null;
  return (
    <aside className="wwc-announcement" aria-label="WWC Connect announcement">
      <div className="container-wide flex items-center justify-center gap-3 py-2">
        <Link to="/guides/wwc-connect-victorian-swim-schools" className="min-w-0 text-sm font-medium leading-relaxed hover:underline">
          New in Victoria from 19 October: WWC Connect. Free checklist for swim schools →
        </Link>
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-inherit hover:bg-background/20" aria-label="Dismiss WWC Connect announcement" title="Dismiss announcement" onClick={() => setDismissed(true)}>
          <X aria-hidden="true" />
        </Button>
      </div>
    </aside>
  );
}