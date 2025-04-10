
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, TrendingUp } from "lucide-react";

const CareerPathsAll = () => {
  const allCareerTracks = [
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
    },
    {
      title: "Marketing",
      description: "Drive growth and brand awareness through innovative marketing strategies",
      levels: ["Marketing Specialist", "Marketing Manager", "Senior Marketing Manager", "Marketing Director", "CMO"],
      skills: ["Digital Marketing", "Content Strategy", "SEO", "Analytics", "Growth"],
      salaryRange: "$55K - $170K+"
    },
    {
      title: "Sales",
      description: "Connect clients with solutions that drive business value and growth",
      levels: ["Sales Development Rep", "Account Executive", "Senior Account Executive", "Sales Manager", "VP of Sales"],
      skills: ["Prospecting", "Relationship Building", "Negotiation", "Solution Selling", "CRM"],
      salaryRange: "$60K - $200K+"
    },
    {
      title: "Finance",
      description: "Optimize financial operations and drive strategic financial decisions",
      levels: ["Financial Analyst", "Senior Analyst", "Finance Manager", "Finance Director", "CFO"],
      skills: ["Financial Analysis", "Budgeting", "Forecasting", "Reporting", "Strategic Planning"],
      salaryRange: "$65K - $180K+"
    },
    {
      title: "Customer Success",
      description: "Ensure customers achieve their desired outcomes while using our products",
      levels: ["Customer Success Rep", "CS Manager", "Senior CS Manager", "CS Director", "VP of Customer Success"],
      skills: ["Relationship Management", "Product Knowledge", "Problem Solving", "Customer Advocacy", "Renewals"],
      salaryRange: "$50K - $160K+"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">All Career Tracks</h1>
              <p className="text-xl mb-10 text-indigo-100">
                Explore all available career paths and find the one that aligns with your skills and aspirations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCareerTracks.map((track, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 rounded-full p-3 mr-3">
                      <Briefcase className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{track.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{track.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Career Progression</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {track.levels.map((level, i) => (
                        <span key={i} className="inline-flex items-center text-xs">
                          {level}
                          {i < track.levels.length - 1 && <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-semibold">{track.salaryRange}</span>
                      <Link to={`/career-paths/${track.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/assessment">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 mr-4">
                  Take Assessment
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  View Job Openings
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareerPathsAll;
