import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logoColor from "@/assets/brand/logo-color-horizontal.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const platformItems = [
  { title: "Platform Features", href: "/platform/features", description: "Full capabilities overview" },
  { title: "Workout Programming", href: "/platform/workout-programming", description: "Exercise library & programs" },
  { title: "Teacher & Trainer Tools", href: "/platform/teacher-trainer", description: "Assessments & mobile tools" },
  { title: "Roster & Scheduler", href: "/platform/roster-scheduler", description: "Trainer & resource scheduling" },
  { title: "Parent & Member Experience", href: "/platform/parent-member", description: "Member and family apps" },
  { title: "Analytics & Retention", href: "/platform/analytics", description: "Progress, insights & retention" },
  { title: "Communication", href: "/platform/communication", description: "Multi-channel messaging" },
  { title: "Payments & Billing", href: "/platform/payments", description: "Payment processing" },
  { title: "For Managers", href: "/platform/managers", description: "Dashboards & reporting" },
  { title: "For CEOs", href: "/platform/ceos", description: "Strategic visibility" },
  { title: "Data Residency", href: "/data-residency", description: "Hosted on AWS Sydney" },
  { title: "Integrations", href: "/integrations", description: "Systems we integrate with" },
];

const moreSolutionsItems = [
  { title: "SwimDesk", href: "/solutions/swimdesk", description: "Swim schools & aquatic centres" },
  { title: "SportDesk", href: "/solutions/sportdesk", description: "Squads, coaching & competitive sports" },
  { title: "School Programs", href: "/solutions/school-programs", description: "School swimming & sports" },
  { title: "Squads", href: "/solutions/squads", description: "Squad progression & tracking" },
  { title: "Council & Leisure Centres", href: "/solutions/council", description: "Multi-service centre operations" },
  { title: "Compare", href: "/compare", description: "How GreeneDesk compares" },
];

const primaryLinks = [
  { title: "FitDesk", href: "/solutions/fitdesk" },
  { title: "PerfectGym Integration", href: "/integrations/perfectgym" },
  { title: "Mywellness Alternative", href: "/technogym-mywellness-alternative" },
];

const secondaryLinks = [
  { title: "Customers", href: "/compare" },
  { title: "Pricing", href: "/pricing" },
  { title: "Resources", href: "/resources" },
];

const linkClass =
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoColor} alt="GreeneDesk" className="h-8 w-auto" />
        </Link>

        <NavigationMenu className="hidden lg:flex" aria-label="Main navigation">
          <NavigationMenuList>
            {primaryLinks.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link to={item.href}>
                  <NavigationMenuLink className={linkClass}>{item.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[560px] md:grid-cols-2">
                  {platformItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link to={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground">
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {secondaryLinks.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link to={item.href}>
                  <NavigationMenuLink className={linkClass}>{item.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger>More Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {moreSolutionsItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link to={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground">
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex">
          <Button variant="cta" asChild>
            <Link to="/demo">Book a Demo</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-4 mt-8">
              {primaryLinks.map((item) => (
                <Link key={item.href} to={item.href} className="text-lg font-semibold hover:text-primary" onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              ))}

              <Button variant="cta" asChild>
                <Link to="/demo" onClick={() => setIsOpen(false)}>Book a FitDesk Demo</Link>
              </Button>

              {secondaryLinks.map((item) => (
                <Link key={item.href} to={item.href} className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              ))}

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Platform</p>
                {platformItems.map((item) => (
                  <Link key={item.href} to={item.href} className="block pl-4 py-1 text-sm hover:text-primary" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">More Solutions</p>
                {moreSolutionsItems.map((item) => (
                  <Link key={item.href} to={item.href} className="block pl-4 py-1 text-sm hover:text-primary" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>

              <Link to="/" className="text-sm text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>FAQ</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
