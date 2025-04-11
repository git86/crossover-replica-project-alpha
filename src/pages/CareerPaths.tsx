
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CareerPaths = () => {
  const careerTracks = [
    {
      title: "Software Development",
      description: "Build and maintain software applications for global clients",
      levels: ["Junior Developer", "Mid-level Developer", "Senior Developer", "Architect", "CTO"],
      skills: ["JavaScript", "React", "Node.js", "Python", "Cloud Services"],
      salaryRange: "$60K - $200K+"
    },
    {
      title: "Product Management",
      description: "Guide product strategy and development from concept to launch",
      levels: ["Associate PM", "Product Manager", "Senior PM", "Director of Product", "CPO"],
      skills: ["User Research", "Roadmapping", "Agile", "Analytics", "Strategy"],
      salaryRange: "$70K - $180K+"
    },
    {
      title: "Design",
      description: "Create exceptional user experiences and visual designs",
      levels: ["Junior Designer", "Designer", "Senior Designer", "Design Lead", "Design Director"],
      skills: ["UI/UX", "Figma", "User Research", "Design Systems", "Prototyping"],
      salaryRange: "$50K - $160K+"
    },
    {
      title: "Data Science",
      description: "Extract insights and value from complex data sets",
      levels: ["Data Analyst", "Data Scientist", "Senior Data Scientist", "Lead Data Scientist", "Chief Data Scientist"],
      skills: ["Python", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
      salaryRange: "$65K - $190K+"
    }
  ];

  const handleExploreOpportunities = () => {
    window.scrollTo({
      top: document.getElementById('career-tracks')?.offsetTop - 100,
      behavior: 'smooth'
    });
  };

  const handleTakeAssessment = () => {
    toast.success("Redirecting to assessment page");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Global Career</h1>
              <p className="text-xl mb-10 text-indigo-100">
                Explore structured career paths that allow you to grow professionally while working remotely.
              </p>
              <Button 
                className="bg-white text-indigo-600 hover:bg-indigo-50"
                onClick={handleExploreOpportunities}
              >
                Explore Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose USS Agency Career Path?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our structured career paths offer clear progression, competitive compensation, and the freedom of remote work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
                  title: "Clear Growth Trajectory",
                  description: "Follow a defined path from entry-level to leadership roles with transparent requirements for advancement."
                },
                {
                  icon: <DollarSign className="h-10 w-10 text-green-500" />,
                  title: "Competitive Compensation",
                  description: "Earn market-rate or above salaries regardless of your geographic location."
                },
                {
                  icon: <Award className="h-10 w-10 text-blue-500" />,
                  title: "Merit-Based Advancement",
                  description: "Progress based on your skills and performance, not politics or tenure."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Tracks */}
        <section id="career-tracks" className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Available Career Tracks</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our most popular career tracks and find the path that matches your skills and aspirations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {careerTracks.map((track, index) => (
                <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{track.title}</h3>
                    <p className="text-gray-600 mb-4">{track.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Career Levels</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.levels.map((level, i) => (
                          <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                            {level}
                            {i < track.levels.length - 1 && <ArrowRight className="ml-1 h-3 w-3" />}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map((skill, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Salary Range</h4>
                        <span className="text-lg font-bold text-green-600">{track.salaryRange}</span>
                      </div>
                      <Link to={`/career-paths/${track.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/career-paths/all">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                  View All Career Tracks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="bg-indigo-50 rounded-lg p-8 md:p-12 relative">
              <div className="text-5xl text-indigo-200 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  Joining USS Agency completely transformed my career trajectory. I started as a mid-level developer and within 3 years, I advanced to an architect role with a 150% salary increase. The structured career path and feedback made all the difference.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-gray-900">Michael Rodriguez</p>
                    <p className="text-indigo-600">Software Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of professionals who are growing their careers with USS Agency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment">
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                    Take Assessment
                  </Button>
                </Link>
                <Link to="/jobs">
                  <Button variant="outline" className="text-white border-white hover:bg-indigo-700">
                    Browse Job Openings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareerPaths;
