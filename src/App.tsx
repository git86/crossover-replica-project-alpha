
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Jobs from "./pages/Jobs";
import Assessment from "./pages/Assessment";
import CareerPaths from "./pages/CareerPaths";
import Talents from "./pages/Talents";
import HowItWorksHiring from "./pages/HowItWorksHiring";
import Enterprise from "./pages/Enterprise";
import SuccessStories from "./pages/SuccessStories";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import Careers from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/career-paths" element={<CareerPaths />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/how-it-works" element={<HowItWorksHiring />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
