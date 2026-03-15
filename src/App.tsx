import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import FitDesk from "./pages/solutions/FitDesk";
import SwimDesk from "./pages/solutions/SwimDesk";
import SportDesk from "./pages/solutions/SportDesk";
import SchoolPrograms from "./pages/solutions/SchoolPrograms";
import Squads from "./pages/solutions/Squads";
import Features from "./pages/platform/Features";
import Communication from "./pages/platform/Communication";
import RosterScheduler from "./pages/platform/RosterScheduler";
import TeacherTrainer from "./pages/platform/TeacherTrainer";
import ParentMember from "./pages/platform/ParentMember";
import Managers from "./pages/platform/Managers";
import CEOs from "./pages/platform/CEOs";
import Payments from "./pages/platform/Payments";
import Analytics from "./pages/platform/Analytics";
import Integrations from "./pages/Integrations";
import DataResidency from "./pages/DataResidency";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Solutions */}
          <Route path="/solutions/fitdesk" element={<FitDesk />} />
          <Route path="/solutions/swimdesk" element={<SwimDesk />} />
          <Route path="/solutions/sportdesk" element={<SportDesk />} />
          <Route path="/solutions/school-programs" element={<SchoolPrograms />} />
          <Route path="/solutions/squads" element={<Squads />} />
          <Route path="/solutions" element={<Home />} />
          
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
          
          {/* Other Pages */}
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/data-residency" element={<DataResidency />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;