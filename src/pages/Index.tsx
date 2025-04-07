
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JobListings from "@/components/JobListings";
import AssessmentProcess from "@/components/AssessmentProcess";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <JobListings />
        <HowItWorks />
        <AssessmentProcess />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
