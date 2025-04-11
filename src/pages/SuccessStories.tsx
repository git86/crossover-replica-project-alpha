
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      title: "How TechSolutions Scaled Their Development Team",
      category: "Enterprise",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      summary: "TechSolutions needed to double their engineering capacity within 3 months. Using USS Agency, they onboarded 25 senior developers who seamlessly integrated with their existing teams.",
      results: [
        "Reduced time-to-hire by 70%",
        "Saved $1.2M in recruitment costs",
        "Accelerated product roadmap by 40%"
      ]
    },
    {
      title: "FinanceApp's Journey to 24/7 Customer Support",
      category: "Customer Service",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      summary: "FinanceApp wanted to provide round-the-clock support without the complexity of managing global offices. USS Agency built them a distributed customer service team across multiple time zones.",
      results: [
        "Achieved 24/7 coverage with just 12 team members",
        "Improved customer satisfaction by 35%",
        "Reduced operational costs by 45%"
      ]
    },
    {
      title: "MarketingPro's Remote Design Team Success",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      summary: "MarketingPro struggled to find quality designers locally. With USS Agency, they built a remote creative team that revolutionized their brand and marketing materials.",
      results: [
        "Increased design output by 200%",
        "Expanded capabilities to include motion design and 3D",
        "Won industry award for rebranding project"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Working with USS Agency has transformed our business. We now have access to talent we simply couldn't find locally, and the quality has exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechSolutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The caliber of professionals we've hired through USS Agency is outstanding. They integrate seamlessly with our teams and consistently deliver high-quality work.",
      author: "Michael Chen",
      position: "VP of Engineering, DataStream",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "USS Agency's talent assessment process is truly rigorous. Every professional we've hired has been pre-vetted and ready to contribute from day one.",
      author: "Elena Rodriguez",
      position: "Director of HR, GlobalFinance",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl mb-10 text-indigo-100">
                See how companies have transformed their workforce and achieved their goals with USS Agency's talent solutions.
              </p>
              <Button className="bg-white text-indigo-700 hover:bg-indigo-50">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Success Stories */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Featured Success Stories</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Real results from companies that have partnered with USS Agency to build their remote teams.
              </p>
            </div>

            <div className="space-y-12">
              {stories.map((story, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 bg-gray-200 lg:h-auto h-64">
                      <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="lg:w-3/5 p-8">
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                          {story.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{story.title}</h3>
                      <p className="text-gray-600 mb-6">{story.summary}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Results:</h4>
                        <ul className="space-y-2">
                          {story.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-indigo-600 mr-2">•</span>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                View All Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-indigo-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear directly from the companies that have built successful remote teams with USS Agency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm relative">
                  <Quote className="h-10 w-10 text-indigo-100 absolute top-4 left-4" />
                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic relative z-10">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-indigo-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Impact of Remote Talent</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Companies that work with USS Agency consistently report impressive results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "40%", description: "Average cost savings compared to traditional hiring" },
                { metric: "75%", description: "Reduction in time-to-hire for specialized roles" },
                { metric: "94%", description: "Client satisfaction rate with their USS Agency talent" },
                { metric: "3.5x", description: "Average productivity increase reported" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                  <p className="text-4xl font-bold text-indigo-600 mb-2">{stat.metric}</p>
                  <p className="text-gray-700">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join the companies that have transformed their workforce with USS Agency's global talent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-indigo-700">
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

export default SuccessStories;
