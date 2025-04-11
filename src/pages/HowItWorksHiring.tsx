
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Users, Award, Briefcase, CheckCircle, Calendar, DollarSign, BarChart4 } from "lucide-react";

const HowItWorksHiring = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-teal-600" />,
      title: "Define Your Needs",
      description: "Tell us about your company needs and the roles you're looking to fill."
    },
    {
      icon: <Users className="h-10 w-10 text-teal-600" />,
      title: "We Find the Talent",
      description: "Our rigorous vetting process identifies the best candidates from our global talent pool."
    },
    {
      icon: <Award className="h-10 w-10 text-teal-600" />,
      title: "Quality Guaranteed",
      description: "Work with pre-vetted professionals backed by our performance guarantee."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-teal-600" />,
      title: "Scale Seamlessly",
      description: "Expand your team quickly with our large bench of ready-to-work talent."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How USS Agency Works for Employers</h1>
              <p className="text-xl mb-10 text-teal-100">
                We've simplified the process of finding and hiring top global talent, saving you time and resources.
              </p>
              <Button className="bg-white text-teal-600 hover:bg-teal-50">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Hiring Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A streamlined approach to finding the perfect talent for your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 relative hover:shadow-md transition-all"
                >
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The USS Agency Advantage</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Why thousands of companies choose USS Agency for their remote hiring needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <CheckCircle className="h-8 w-8 text-green-500" />,
                  title: "Rigorous Vetting",
                  description: "Every candidate goes through a multi-stage assessment process that evaluates both technical skills and work habits."
                },
                {
                  icon: <Calendar className="h-8 w-8 text-blue-500" />,
                  title: "Faster Hiring",
                  description: "Our pre-vetted talent pool means you can find the right person in days, not months."
                },
                {
                  icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
                  title: "Cost-Effective",
                  description: "Save on recruitment, onboarding, and overhead costs by leveraging our global talent solutions."
                },
                {
                  icon: <BarChart4 className="h-8 w-8 text-purple-500" />,
                  title: "Performance Tracking",
                  description: "Our proprietary productivity tools help you monitor and optimize team performance."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Options */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Flexible Hiring Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose the hiring model that works best for your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Individual Talent",
                  description: "Hire individual professionals to augment your existing team.",
                  features: [
                    "Single role hiring",
                    "Direct management",
                    "Flexible contracts",
                    "Pay-as-you-go pricing"
                  ],
                  cta: "Hire Individual Talent"
                },
                {
                  title: "Dedicated Teams",
                  description: "Entire cross-functional teams ready to tackle your projects.",
                  features: [
                    "Pre-assembled teams",
                    "Technical leadership included",
                    "Seamless collaboration",
                    "Fixed monthly pricing"
                  ],
                  cta: "Build a Team",
                  highlighted: true
                },
                {
                  title: "Enterprise Solutions",
                  description: "Custom talent solutions for large organizations.",
                  features: [
                    "Custom recruitment",
                    "Workforce planning",
                    "Dedicated account management",
                    "Enterprise-level agreements"
                  ],
                  cta: "Contact Enterprise Sales"
                }
              ].map((option, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden border ${option.highlighted 
                    ? 'border-teal-600 shadow-lg' 
                    : 'border-gray-200 shadow-sm'
                  }`}
                >
                  <div className={`p-6 ${option.highlighted ? 'bg-teal-600 text-white' : 'bg-gray-50 text-gray-900'}`}>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className={option.highlighted ? 'text-teal-100' : 'text-gray-600'}>{option.description}</p>
                  </div>
                  <div className="p-6 bg-white">
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${option.highlighted 
                        ? 'bg-teal-600 text-white hover:bg-teal-700' 
                        : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-50'
                      }`}
                    >
                      {option.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm relative">
              <div className="text-5xl text-gray-200 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  Working with USS Agency has transformed our hiring process. We've been able to find exceptional talent quickly, and the quality of work has exceeded our expectations. The streamlined process saved us countless hours and improved our team's capabilities.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Johnson</p>
                    <p className="text-teal-600">CTO, TechInnovate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
              <p className="text-xl text-teal-100 mb-8">
                Join thousands of companies that trust USS Agency to find their ideal talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-teal-600 hover:bg-teal-50">
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-teal-700">
                  Browse Talent
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksHiring;
