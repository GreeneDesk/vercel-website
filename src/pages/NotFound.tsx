import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide text-center">
          <div className="max-w-md mx-auto">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 mb-8">
              <span className="text-5xl font-bold text-primary">404</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Page not found
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" asChild>
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/demo">
                  Request a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
