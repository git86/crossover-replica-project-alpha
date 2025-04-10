
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Check, BookOpen, TrendingUp, Users, Award } from "lucide-react";

const CareerPathDetail = () => {
  const { pathId } = useParams<{ pathId: string }>();
  
  // In a real application, this would fetch from an API
  // For now, we'll just use mock data
  const pathData = {
    title: pathId ? pathId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Career Path',
    description: "Build and maintain software applications for global clients, working with the latest technologies to solve complex problems.",
    levels: [
      {
        title: "Junior Developer",
        salary: "$60K - $80K",
        experience: "1-2 years",
        responsibilities: [
          "Write clean, maintainable code under supervision",
          "Fix bugs and implement small features",
          "Participate in code reviews and learn from feedback",
          "Assist with testing and documentation"
        ],
        skills: ["JavaScript", "HTML/CSS", "Basic React", "Git", "Unit Testing"]
      },
      {
        title: "Mid-level Developer",
        salary: "$80K - $120K",
        experience: "3-5 years",
        responsibilities: [
          "Independently develop features and components",
          "Solve moderately complex technical problems",
          "Participate actively in technical discussions",
          "Help mentor junior developers"
        ],
        skills: ["Advanced JavaScript", "React/Redux", "API Design", "Performance Optimization", "CI/CD"]
      },
      {
        title: "Senior Developer",
        salary: "$120K - $160K",
        experience: "5+ years",
        responsibilities: [
          "Design and implement complex features and systems",
          "Make high-level architectural decisions",
          "Mentor other team members",
          "Drive technical discussions and improvements"
        ],
        skills: ["System Architecture", "Technical Leadership", "Advanced React Patterns", "Performance Tuning", "Security Best Practices"]
      },
      {
        title: "Architect",
        salary: "$160K - $180K",
        experience: "8+ years",
        responsibilities: [
          "Define overall technical vision and architecture",
          "Make strategic technical decisions",
          "Guide multiple teams on technical implementation",
          "Evaluate new technologies and approaches"
        ],
        skills: ["Enterprise Architecture", "Technical Strategy", "Cross-team Coordination", "Scalability Planning", "Technology Roadmapping"]
      },
      {
        title: "CTO",
        salary: "$180K - $200K+",
        experience: "10+ years",
        responsibilities: [
          "Set technical strategy and vision",
          "Lead and develop engineering organization",
          "Make technology investment decisions",
          "Represent technology in executive discussions"
        ],
        skills: ["Technical Leadership", "Strategic Planning", "Team Building", "Business Acumen", "Executive Communication"]
      }
    ],
    requiredSkills: ["Problem Solving", "Communication", "Teamwork", "Learning Agility", "Attention to Detail"],
    assessmentProcess: [
      "Technical Skills Assessment",
      "Problem Solving Evaluation",
      "System Design Challenge",
      "Code Review Exercise",
      "Cultural Fit Interview"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-4 text-indigo-200">
                <Link to="/career-paths" className="hover:text-white">Career Paths</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>{pathData.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{pathData.title} Career Path</h1>
              <p className="text-xl mb-10 text-indigo-100">
                {pathData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/assessment">
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                    Take Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/jobs">
                  <Button variant="outline" className="border-white text-white hover:bg-indigo-700">
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Career Levels */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">Career Progression</h2>
            
            <div className="space-y-8">
              {pathData.levels.map((level, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{level.title}</h3>
                    <div className="text-xl font-bold text-green-600">{level.salary}</div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">Typical experience: {level.experience}</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-indigo-600" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {level.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-indigo-600" />
                        Required Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {level.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {index < pathData.levels.length - 1 && (
                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
                      <div className="flex flex-col items-center">
                        <TrendingUp className="h-6 w-6 text-indigo-600 mb-2" />
                        <span className="text-sm text-gray-500">Progression Path</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Process */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Assessment Process</h2>
              <p className="text-gray-600 mb-10">
                Our rigorous assessment process ensures that we identify candidates with the right skills and attributes for success in this career path.
              </p>
              
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-indigo-600" />
                  How We Evaluate Candidates
                </h3>
                
                <div className="space-y-6">
                  {pathData.assessmentProcess.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step}</h4>
                        <p className="text-gray-600 text-sm">
                          {/* Sample description - would be replaced with real content */}
                          This step helps us evaluate your skills and experience to ensure you're a good fit for the role.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Take the first step toward advancing your career in {pathData.title}.
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

export default CareerPathDetail;
