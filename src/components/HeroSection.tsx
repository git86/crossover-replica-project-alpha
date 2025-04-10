
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Find Your Next Remote <span className="text-crossover-blue">Role</span> With USS AGENCY
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Join our global talent network to work with world-class teams, earn competitive salaries, and build your career from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-primary text-base">
                Find Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="btn-secondary text-base">
                For Employers
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                  <span className="font-bold text-2xl text-crossover-blue">100k+</span>
                </div>
                <p className="ml-3 text-gray-700">Talented professionals</p>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                  <span className="font-bold text-2xl text-crossover-blue">1000+</span>
                </div>
                <p className="ml-3 text-gray-700">Remote positions</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="rounded-lg bg-white p-2 shadow-xl w-full max-w-lg">
              <div className="aspect-video bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Remote team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Find Your Perfect Role</h3>
                <p className="text-gray-600 text-sm mb-4">Our data-driven matching helps you find the perfect fit with top companies worldwide.</p>
                <Link to="/jobs" className="text-crossover-blue font-medium text-sm inline-flex items-center">
                  View Jobs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
