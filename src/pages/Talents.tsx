
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Globe, Star, ShieldCheck } from "lucide-react";

const Talents = () => {
  const talents = [
    {
      role: "Senior Frontend Developer",
      skills: ["React", "TypeScript", "GraphQL", "NextJS"],
      experience: "8+ years",
      timeZone: "GMT-5 (Eastern US)",
      rate: "$75-85/hr"
    },
    {
      role: "DevOps Engineer",
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
      experience: "6+ years",
      timeZone: "GMT+1 (Central Europe)",
      rate: "$70-80/hr"
    },
    {
      role: "UX/UI Designer",
      skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
      experience: "5+ years",
      timeZone: "GMT+8 (Asia Pacific)",
      rate: "$65-75/hr"
    },
    {
      role: "Product Manager",
      skills: ["Agile", "Product Strategy", "User Stories", "Roadmapping"],
      experience: "7+ years",
      timeZone: "GMT-8 (Pacific US)",
      rate: "$80-90/hr"
    },
    {
      role: "Data Scientist",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      experience: "6+ years",
      timeZone: "GMT+5:30 (India)",
      rate: "$70-85/hr"
    },
    {
      role: "Full Stack Developer",
      skills: ["Node.js", "React", "MongoDB", "Express"],
      experience: "5+ years",
      timeZone: "GMT+3 (Eastern Europe)",
      rate: "$65-80/hr"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Access Elite Global Talent</h1>
              <p className="text-xl mb-10 text-blue-100">
                Work with the top 1% of remote professionals, thoroughly vetted and ready to join your team.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Request Talent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Our Talent */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What Makes Our Talent Different</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We rigorously screen every professional to ensure they meet our high standards for technical skills, communication, and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="h-10 w-10 text-yellow-500" />,
                  title: "Top 1% of Applicants",
                  description: "Only the best make it through our rigorous multi-stage assessment process."
                },
                {
                  icon: <Globe className="h-10 w-10 text-blue-500" />,
                  title: "Global Reach",
                  description: "Access talent from over 100 countries, working across all time zones."
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
                  title: "Performance Guarantee",
                  description: "We stand behind our talent with a 2-week trial period and ongoing performance monitoring."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Talent */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Available Talent</h2>
                <p className="text-gray-600">
                  Browse a sample of our pre-vetted professionals ready to join your team.
                </p>
              </div>
              <div className="mt-4 md:mt-0 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by skill or role"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talents.map((talent, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{talent.role}</h3>
                    
                    <div className="flex flex-wrap gap-2 my-3">
                      {talent.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mt-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience:</span>
                        <span className="font-medium">{talent.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time Zone:</span>
                        <span className="font-medium">{talent.timeZone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rate:</span>
                        <span className="font-bold text-green-600">{talent.rate}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white">View Profile</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                View All Available Talent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Hire Our Talent</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A simple, streamlined process to add top talent to your team.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  step: 1,
                  title: "Consult with Our Team",
                  description: "Tell us about your needs, timeline, and budget."
                },
                {
                  step: 2,
                  title: "Review Candidates",
                  description: "We'll match you with pre-vetted professionals that fit your requirements."
                },
                {
                  step: 3,
                  title: "Trial Period",
                  description: "Work with selected talent for 2 weeks with our satisfaction guarantee."
                },
                {
                  step: 4,
                  title: "Ongoing Support",
                  description: "We provide continuous management and support for your talent."
                }
              ].map((step, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="bg-gray-50 rounded-lg p-6 h-full">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
              <p className="text-xl text-teal-100 mb-8">
                Get started today and see the difference that top talent can make for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-teal-600 hover:bg-teal-50">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-teal-700">
                  Learn More
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

export default Talents;
