
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Jobs from "./pages/Jobs";
import Assessment from "./pages/Assessment";
import CareerPaths from "./pages/CareerPaths";
import CareerPathsAll from "./pages/CareerPathsAll";
import CareerPathDetail from "./pages/CareerPathDetail";
import Talents from "./pages/Talents";
import HowItWorksHiring from "./pages/HowItWorksHiring";
import Enterprise from "./pages/Enterprise";
import SuccessStories from "./pages/SuccessStories";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Careers from "./pages/Careers";
import Hire from "./pages/Hire";
import Testimonials from "./pages/Testimonials";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
import Dashboard from "./pages/Dashboard";
import JobDetail from "./pages/JobDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="/career-paths/all" element={<CareerPathsAll />} />
            <Route path="/career-paths/:pathId" element={<CareerPathDetail />} />
            <Route path="/talents" element={<Talents />} />
            <Route path="/how-it-works" element={<HowItWorksHiring />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
