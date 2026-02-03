import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const solutionsItems: { title: string; href: string; description: string; external?: boolean }[] = [
  { title: "Gyms & Fitness", href: "/solutions/fitdesk", description: "FitDesk for gyms and recreation centres" },
  { title: "Swim Schools", href: "/solutions/swimdesk", description: "SwimDesk for learn-to-swim programs" },
  { title: "School Programs", href: "/solutions/school-programs", description: "Manage school swimming and sports" },
  { title: "Squads", href: "/solutions/squads", description: "Squad progression and tracking" },
  { title: "Martial Arts & Sports", href: "/solutions/sportdesk", description: "SportDesk for structured sports" },
  { title: "AI Safety (SooperVision)", href: "https://soopervision.com", description: "AI-powered supervision for childcare", external: true },
];

const platformItems = [
  { title: "Communication", href: "/platform/communication", description: "Multi-channel messaging and automation" },
  { title: "Roster & Scheduler", href: "/platform/roster-scheduler", description: "Visual scheduling and capacity management" },
  { title: "Teacher & Trainer Tools", href: "/platform/teacher-trainer", description: "Mobile-first tools for instructors" },
  { title: "Parent & Member Experience", href: "/platform/parent-member", description: "Apps and engagement for families" },
  { title: "For Managers", href: "/platform/managers", description: "Dashboards, alerts, and reporting" },
  { title: "For CEOs", href: "/platform/ceos", description: "Strategic visibility and governance" },
  { title: "Payments & Billing", href: "/platform/payments", description: "Integrated payment processing" },
  { title: "Analytics & Retention", href: "/platform/analytics", description: "Insights and retention tools" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">G</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground">GreeneDesk</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none",
                  location.pathname === "/" && "text-primary"
                )}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {solutionsItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                          >
                            <div className="text-sm font-medium leading-none flex items-center gap-1">
                              {item.title}
                              <span className="text-xs text-muted-foreground">↗</span>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        )}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {platformItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/integrations">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none">
                  Integrations
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/data-residency">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none">
                  Data Residency
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/pricing">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none">
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/resources">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none">
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Button variant="cta" asChild>
            <Link to="/demo">Request a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Solutions</p>
                {solutionsItems.map((item) => (
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pl-4 py-1 text-sm hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title} ↗
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block pl-4 py-1 text-sm hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Platform</p>
                {platformItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block pl-4 py-1 text-sm hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <Link to="/integrations" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Integrations
              </Link>
              <Link to="/data-residency" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Data Residency
              </Link>
              <Link to="/pricing" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="/resources" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Resources
              </Link>

              <Button variant="cta" className="mt-4" asChild>
                <Link to="/demo" onClick={() => setIsOpen(false)}>Request a Demo</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}