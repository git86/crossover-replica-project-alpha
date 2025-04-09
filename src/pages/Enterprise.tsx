
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building, Users, Globe, BarChart, Shield, Badge, CheckCircle } from "lucide-react";

const Enterprise = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Talent Solutions</h1>
                <p className="text-xl mb-8 text-slate-300">
                  Custom workforce solutions for companies looking to scale with top global talent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-slate-700">
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-slate-700 p-8 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Users className="h-8 w-8 text-blue-400" />, text: "Scalable Teams" },
                      { icon: <Globe className="h-8 w-8 text-green-400" />, text: "Global Talent" },
                      { icon: <BarChart className="h-8 w-8 text-purple-400" />, text: "Performance Analytics" },
                      { icon: <Shield className="h-8 w-8 text-orange-400" />, text: "Enterprise Security" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center bg-slate-800 p-4 rounded-lg">
                        {item.icon}
                        <span className="ml-3 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Challenges */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Enterprise Challenges We Solve</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Common workforce challenges faced by enterprise organizations and how Crossover addresses them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building className="h-10 w-10 text-blue-500" />,
                  title: "Talent Acquisition",
                  problem: "Difficulty finding specialized skills at scale",
                  solution: "Access to our pre-vetted global talent pool of 10,000+ professionals"
                },
                {
                  icon: <Users className="h-10 w-10 text-purple-500" />,
                  title: "Scaling Teams",
                  problem: "Long recruitment cycles for rapid growth needs",
                  solution: "Ready-to-deploy teams that can start within days, not months"
                },
                {
                  icon: <Badge className="h-10 w-10 text-green-500" />,
                  title: "Quality Assurance",
                  problem: "Inconsistent quality when scaling teams",
                  solution: "Standardized assessment process ensures consistent high-quality talent"
                }
              ].map((challenge, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="mb-4">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{challenge.title}</h3>
                  <div className="mb-4 p-3 bg-red-50 rounded-md">
                    <p className="text-sm font-medium text-red-800">Challenge:</p>
                    <p className="text-gray-700">{challenge.problem}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-md">
                    <p className="text-sm font-medium text-green-800">Crossover Solution:</p>
                    <p className="text-gray-700">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Enterprise Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Customized approaches to meet your organization's specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Team Augmentation",
                  description: "Seamlessly add specialized talent to your existing teams.",
                  features: [
                    "Flexible scaling up or down",
                    "Specialized skill acquisition",
                    "Reduced management overhead",
                    "Pay-per-use model"
                  ]
                },
                {
                  title: "Managed Teams",
                  description: "Fully assembled, self-contained teams with dedicated management.",
                  features: [
                    "End-to-end delivery capabilities",
                    "Technical leadership included",
                    "Comprehensive project management",
                    "Predictable monthly costs"
                  ],
                  highlighted: true
                },
                {
                  title: "Workforce Transformation",
                  description: "Strategic solution for moving to a distributed workforce model.",
                  features: [
                    "Change management support",
                    "Process optimization",
                    "Documentation and knowledge transfer",
                    "Long-term talent strategy"
                  ]
                }
              ].map((solution, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden border ${solution.highlighted 
                    ? 'border-blue-600 shadow-lg transform lg:-translate-y-4' 
                    : 'border-gray-200'
                  }`}
                >
                  <div className={`p-6 ${solution.highlighted ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'}`}>
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className={solution.highlighted ? 'text-blue-100' : 'text-gray-600'}>{solution.description}</p>
                  </div>
                  <div className="p-6 bg-white">
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${solution.highlighted 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                    }`}>
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Trusted by Leading Enterprises</h2>
              <p className="text-gray-600">
                We work with forward-thinking organizations across industries.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-100 h-16 w-32 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Logo {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Success Stories</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                See how enterprises have transformed their workforce with Crossover.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 bg-gray-200 lg:min-h-[400px] flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Case Study Image</span>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Technology Sector
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">How TechGiant Scaled Their Development Team by 300%</h3>
                  <p className="text-gray-600 mb-6">
                    TechGiant needed to rapidly expand their development capabilities while maintaining quality. Using Crossover's enterprise solutions, they were able to onboard 150 high-performing engineers in just 3 months, achieving project milestones ahead of schedule.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">300%</p>
                      <p className="text-sm text-gray-600">Team Growth</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">42%</p>
                      <p className="text-sm text-gray-600">Cost Reduction</p>
                    </div>
                  </div>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-800 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise Workforce?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Schedule a consultation with our enterprise solutions team to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Request a Consultation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-slate-700">
                  Download Enterprise Brochure
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

export default Enterprise;
