import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import logoWhite from "@/assets/brand/logo-white-horizontal.png";

const solutionsLinks = [
  { title: "FitDesk", href: "/solutions/fitdesk" },
  { title: "SwimDesk", href: "/solutions/swimdesk" },
  { title: "SportDesk", href: "/solutions/sportdesk" },
  { title: "School Programs", href: "/solutions/school-programs" },
  { title: "Council & Leisure Centres", href: "/solutions/council" },
  { title: "Squads", href: "/solutions/squads" },
];

const platformLinks = [
  { title: "Platform Features", href: "/platform/features" },
  { title: "Communication", href: "/platform/communication" },
  { title: "Roster & Scheduler", href: "/platform/roster-scheduler" },
  { title: "Teacher & Trainer Tools", href: "/platform/teacher-trainer" },
  { title: "Parent & Member Experience", href: "/platform/parent-member" },
  { title: "Payments & Billing", href: "/platform/payments" },
  { title: "Analytics & Retention", href: "/platform/analytics" },
];

const moreLinks = [
  { title: "Integrations", href: "/integrations" },
  { title: "Data Residency", href: "/data-residency" },
  { title: "Pricing", href: "/pricing" },
  { title: "Resources", href: "/resources" },
  { title: "Partners", href: "/partners" },
  { title: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-text-on-dark">
      <div className="container-wide py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoWhite} alt="GreeneDesk" className="h-8 w-auto" />
            </Link>
            <p className="text-text-on-dark-muted max-w-sm mb-4">
              Multi-sport operations platform that works alongside your existing management software. Scheduling, engagement, and program delivery for sports and leisure centres.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-on-dark-muted">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Built and hosted in Australia.</span>
            </div>
          </div>

          <nav aria-label="Solutions">
            <p className="font-display font-semibold mb-4">Solutions</p>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Platform">
            <p className="font-display font-semibold mb-4">Platform</p>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="More">
            <p className="font-display font-semibold mb-4">Company</p>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-text-on-dark-muted/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-on-dark-muted">
              © {new Date().getFullYear()} GreeneDesk. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
