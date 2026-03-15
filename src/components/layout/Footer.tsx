import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const solutionsLinks: { title: string; href: string; external?: boolean }[] = [
  { title: "Gyms & Fitness (FitDesk)", href: "/solutions/fitdesk" },
  { title: "Swim Schools (SwimDesk)", href: "/solutions/swimdesk" },
  { title: "School Programs", href: "/solutions/school-programs" },
  { title: "Squads", href: "/solutions/squads" },
  { title: "Martial Arts & Sports (SportDesk)", href: "/solutions/sportdesk" },
  { title: "AI Safety (SooperVision)", href: "https://soopervision.com", external: true },
];

const platformLinks = [
  { title: "Communication", href: "/platform/communication" },
  { title: "Roster & Scheduler", href: "/platform/roster-scheduler" },
  { title: "Teacher & Trainer Tools", href: "/platform/teacher-trainer" },
  { title: "Parent & Member Experience", href: "/platform/parent-member" },
  { title: "For Managers", href: "/platform/managers" },
  { title: "For CEOs", href: "/platform/ceos" },
];

const companyLinks = [
  { title: "Integrations", href: "/integrations" },
  { title: "Data Residency", href: "/data-residency" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-text-on-dark">
      <div className="container-wide py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">G</span>
              </div>
              <span className="font-display text-xl font-bold">GreeneDesk</span>
            </Link>
            <p className="text-text-on-dark-muted max-w-sm mb-4">
              Comprehensive software for gyms, swim schools, gymnastics centres and sports academies. Each solution is purpose-built for your specific operations.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-on-dark-muted">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Built in Australia for the World.</span>
            </div>
          </div>

          {/* Solutions */}
          <nav aria-label="Solutions">
            <p className="font-display font-semibold mb-4">Solutions</p>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors"
                    >
                      {link.title} ↗
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Platform */}
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

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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