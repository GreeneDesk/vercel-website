import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoColor from "@/assets/brand/logo-color-horizontal.png";
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

const solutionsItems = [
  { title: "FitDesk", href: "/solutions/fitdesk", description: "Gym, wellness, rehab & active ageing" },
  { title: "SwimDesk", href: "/solutions/swimdesk", description: "Swim schools & aquatic centres" },
  { title: "SportDesk", href: "/solutions/sportdesk", description: "Squads, coaching & competitive sports" },
  { title: "School Programs", href: "/solutions/school-programs", description: "School swimming & sports" },
  { title: "Council & Leisure Centres", href: "/solutions/council", description: "Multi-service centre operations" },
  { title: "Squads", href: "/solutions/squads", description: "Squad progression & tracking" },
];

const platformItems = [
  { title: "Platform Features", href: "/platform/features", description: "Full capabilities overview" },
  { title: "Communication", href: "/platform/communication", description: "Multi-channel messaging" },
  { title: "Roster & Scheduler", href: "/platform/roster-scheduler", description: "Visual scheduling" },
  { title: "Teacher & Trainer Tools", href: "/platform/teacher-trainer", description: "Mobile-first instructor tools" },
  { title: "Parent & Member Experience", href: "/platform/parent-member", description: "Apps for families" },
  { title: "For Managers", href: "/platform/managers", description: "Dashboards & reporting" },
  { title: "For CEOs", href: "/platform/ceos", description: "Strategic visibility" },
  { title: "Payments & Billing", href: "/platform/payments", description: "Payment processing" },
  { title: "Analytics & Retention", href: "/platform/analytics", description: "Insights & retention" },
];

const directLinks = [
  { title: "Integrations", href: "/integrations" },
  { title: "Data Residency", href: "/data-residency" },
  { title: "Pricing", href: "/pricing" },
  { title: "Compare", href: "/compare" },
  { title: "FAQ", href: "/faq" },
  { title: "Resources", href: "/resources" },
];

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
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none">
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

            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
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

            {directLinks.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link to={item.href}>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none">
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
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
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Solutions</p>
                {solutionsItems.map((item) => (
                  <Link key={item.href} to={item.href} className="block pl-4 py-1 text-sm hover:text-primary" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Platform</p>
                {platformItems.map((item) => (
                  <Link key={item.href} to={item.href} className="block pl-4 py-1 text-sm hover:text-primary" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>

              {directLinks.map((item) => (
                <Link key={item.href} to={item.href} className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              ))}

              <Button variant="cta" className="mt-4" asChild>
                <Link to="/demo" onClick={() => setIsOpen(false)}>Book a Demo</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
