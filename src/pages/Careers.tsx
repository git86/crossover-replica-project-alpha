
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award, BarChart, Heart, BookOpen } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Talent Acquisition Specialist",
      department: "People Operations",
      location: "Remote, Americas",
      type: "Full-time"
    },
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote, Worldwide",
      type: "Full-time"
    },
    {
      title: "Community Manager",
      department: "Marketing",
      location: "Remote, Europe",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Product",
      location: "Remote, Worldwide",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl mb-10 text-blue-100">
                Help us build the future of work by connecting the world's top talent with innovative companies.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Crossover, we believe that talent is equally distributed around the world, but opportunity is not. Our mission is to bridge this gap by building technology that connects the best talent with the most innovative companies, regardless of location.
                </p>
                <p className="text-gray-600 mb-4">
                  We're creating a future where work is defined by skills and contributions rather than geography. By doing so, we're enabling a more inclusive and efficient global economy.
                </p>
                <p className="text-gray-600">
                  If you're passionate about transforming how work happens and creating opportunity for talented people everywhere, we'd love for you to join us.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-80">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Join Crossover</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Working at Crossover means being part of a global team that's changing how work happens around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-blue-500" />,
                  title: "Global Impact",
                  description: "Your work will help create economic opportunity for talented people everywhere, regardless of where they live."
                },
                {
                  icon: <Users className="h-10 w-10 text-purple-500" />,
                  title: "Remote-First Culture",
                  description: "We practice what we preach with a fully distributed team spread across the globe. Work from anywhere."
                },
                {
                  icon: <Award className="h-10 w-10 text-green-500" />,
                  title: "Meritocratic Environment",
                  description: "We believe in recognizing and rewarding excellence based on performance and contributions."
                },
                {
                  icon: <BarChart className="h-10 w-10 text-orange-500" />,
                  title: "Growth Opportunities",
                  description: "Continuous learning is built into our DNA, with clear paths for advancement and skill development."
                },
                {
                  icon: <Heart className="h-10 w-10 text-red-500" />,
                  title: "Comprehensive Benefits",
                  description: "Competitive compensation, flexible schedules, and benefits designed for a global, remote workforce."
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-yellow-500" />,
                  title: "Innovation Focus",
                  description: "We're building cutting-edge technology to solve complex problems in the future of work."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Open Positions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Join our team and help build the future of remote work. We're always looking for talented people who share our mission.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {openPositions.map((position, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{position.title}</h3>
                      <p className="text-gray-600 mb-4 md:mb-0">{position.department} • {position.location} • {position.type}</p>
                    </div>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      View Position
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Employee Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm relative">
              <div className="text-6xl text-gray-200 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  Working at Crossover has been transformative for my career. I get to collaborate with brilliant colleagues from all over the world while building technology that creates opportunities for thousands. The remote-first culture truly embodies the future of work we're helping to create.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-gray-900">Maria Santos</p>
                    <p className="text-blue-600">Engineering Manager, 3 years at Crossover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Hiring Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Hiring Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We've designed our hiring process to be thorough yet efficient, helping us find the right people to join our team.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  step: 1,
                  title: "Application Review",
                  description: "We review your application to assess your qualifications and fit for the role."
                },
                {
                  step: 2,
                  title: "Initial Interview",
                  description: "A conversation with our recruiting team to learn more about your experience and aspirations."
                },
                {
                  step: 3,
                  title: "Skills Assessment",
                  description: "A practical exercise or technical interview to evaluate your expertise in relevant areas."
                },
                {
                  step: 4,
                  title: "Team Interview",
                  description: "Meet with team members to discuss collaboration, culture fit, and dive deeper into the role."
                },
                {
                  step: 5,
                  title: "Offer & Onboarding",
                  description: "We present an offer and start the onboarding process to welcome you to the team."
                }
              ].map((step, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="bg-gray-50 rounded-lg p-6 h-full">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 4 && (
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
        <section className="py-16 bg-blue-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Us in Transforming the Future of Work</h2>
              <p className="text-xl text-blue-100 mb-8">
                Become part of a team that's breaking down geographic barriers and creating opportunities for talented people everywhere.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
