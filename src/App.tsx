import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";

const FitDesk = lazy(() => import("./pages/solutions/FitDesk"));
const SwimDesk = lazy(() => import("./pages/solutions/SwimDesk"));
const SportDesk = lazy(() => import("./pages/solutions/SportDesk"));
const SchoolPrograms = lazy(() => import("./pages/solutions/SchoolPrograms"));
const Squads = lazy(() => import("./pages/solutions/Squads"));
const Council = lazy(() => import("./pages/solutions/Council"));
const Compare = lazy(() => import("./pages/Compare"));
const Features = lazy(() => import("./pages/platform/Features"));
const Communication = lazy(() => import("./pages/platform/Communication"));
const RosterScheduler = lazy(() => import("./pages/platform/RosterScheduler"));
const TeacherTrainer = lazy(() => import("./pages/platform/TeacherTrainer"));
const ParentMember = lazy(() => import("./pages/platform/ParentMember"));
const Managers = lazy(() => import("./pages/platform/Managers"));
const CEOs = lazy(() => import("./pages/platform/CEOs"));
const Payments = lazy(() => import("./pages/platform/Payments"));
const Analytics = lazy(() => import("./pages/platform/Analytics"));
const WorkoutProgramming = lazy(() => import("./pages/platform/WorkoutProgramming"));
const Integrations = lazy(() => import("./pages/Integrations"));
const DataResidency = lazy(() => import("./pages/DataResidency"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Resources = lazy(() => import("./pages/Resources"));
const Partners = lazy(() => import("./pages/Partners"));
const Demo = lazy(() => import("./pages/Demo"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

// SEO Pages
const LeisureCentreSoftware = lazy(() => import("./pages/seo/LeisureCentreSoftware"));
const SwimSchoolSoftware = lazy(() => import("./pages/seo/SwimSchoolSoftware"));
const FitnessWellnessSoftware = lazy(() => import("./pages/seo/FitnessWellnessSoftware"));
const SportsFacilitySoftware = lazy(() => import("./pages/seo/SportsFacilitySoftware"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" role="status" aria-label="Loading page" />
    </div>
  );
}

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Solutions */}
            <Route path="/solutions/fitdesk" element={<FitDesk />} />
            <Route path="/solutions/swimdesk" element={<SwimDesk />} />
            <Route path="/solutions/sportdesk" element={<SportDesk />} />
            <Route path="/solutions/school-programs" element={<SchoolPrograms />} />
            <Route path="/solutions/squads" element={<Squads />} />
            <Route path="/solutions/council" element={<Council />} />
            <Route path="/solutions" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            
            {/* Platform */}
            <Route path="/platform/features" element={<Features />} />
            <Route path="/platform/communication" element={<Communication />} />
            <Route path="/platform/roster-scheduler" element={<RosterScheduler />} />
            <Route path="/platform/teacher-trainer" element={<TeacherTrainer />} />
            <Route path="/platform/parent-member" element={<ParentMember />} />
            <Route path="/platform/managers" element={<Managers />} />
            <Route path="/platform/ceos" element={<CEOs />} />
            <Route path="/platform/payments" element={<Payments />} />
            <Route path="/platform/analytics" element={<Analytics />} />
            <Route path="/platform/workout-programming" element={<WorkoutProgramming />} />
            
            {/* Other Pages */}
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/data-residency" element={<DataResidency />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* SEO Landing Pages */}
            <Route path="/leisure-centre-software-australia" element={<LeisureCentreSoftware />} />
            <Route path="/swim-school-software-australia" element={<SwimSchoolSoftware />} />
            <Route path="/fitness-wellness-software-australia" element={<FitnessWellnessSoftware />} />
            <Route path="/sports-facility-software" element={<SportsFacilitySoftware />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
