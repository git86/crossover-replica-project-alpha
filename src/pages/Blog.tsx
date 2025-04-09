
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Calendar, User, Clock, Tag } from "lucide-react";

const Blog = () => {
  const featuredPosts = [
    {
      title: "The Future of Remote Work: Trends to Watch in 2025",
      excerpt: "Remote work continues to evolve. Here are the key trends shaping the future of distributed teams and what they mean for your organization.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Alex Morgan",
      date: "April 2, 2025",
      readTime: "8 min read",
      category: "Trends"
    },
    {
      title: "Building High-Performance Remote Teams: A Practical Guide",
      excerpt: "Learn proven strategies for assembling, managing, and optimizing remote teams that consistently outperform traditional office-based teams.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sophia Chen",
      date: "March 28, 2025",
      readTime: "12 min read",
      category: "Management"
    },
    {
      title: "Remote Work Productivity Tools in 2025: What's Worth Using",
      excerpt: "With thousands of tools claiming to boost remote work productivity, which ones actually deliver? Our comprehensive review of the best options.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Marcus Johnson",
      date: "March 15, 2025",
      readTime: "10 min read",
      category: "Tools"
    }
  ];

  const recentPosts = [
    {
      title: "Global Compensation Strategies for Remote Teams",
      excerpt: "How to structure fair and competitive compensation packages for globally distributed team members.",
      image: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Elena Rodriguez",
      date: "April 5, 2025",
      readTime: "7 min read",
      category: "HR"
    },
    {
      title: "Remote Onboarding: First 90 Days Success Blueprint",
      excerpt: "A step-by-step guide to onboarding remote employees that ensures productivity and engagement from day one.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Thomas Wright",
      date: "April 3, 2025",
      readTime: "9 min read",
      category: "Onboarding"
    },
    {
      title: "Building a Strong Remote Work Culture: Beyond Virtual Happy Hours",
      excerpt: "Meaningful ways to build connection, belonging, and shared purpose in distributed teams.",
      image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Aisha Johnson",
      date: "March 30, 2025",
      readTime: "6 min read",
      category: "Culture"
    },
    {
      title: "The Data is In: Remote Work Productivity Metrics from 1000+ Companies",
      excerpt: "New research reveals what actually drives productivity in remote teams - and it's not what most managers think.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "David Chen",
      date: "March 24, 2025",
      readTime: "11 min read",
      category: "Research"
    }
  ];

  const categories = [
    "All Topics", "Remote Work", "Management", "Productivity", 
    "Hiring", "Culture", "Technology", "Case Studies"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">The Crossover Blog</h1>
                <p className="text-xl text-gray-600">
                  Insights, strategies, and best practices for building and managing high-performance remote teams.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Featured Articles</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-50">
                      Read Article
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Recent Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
              <p className="text-blue-100 mb-8">
                Get the latest remote work insights, strategies, and best practices delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Popular Topics</h2>
              <p className="text-gray-600">
                Explore our most-read categories to find the information you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: <Tag className="h-6 w-6" />, name: "Remote Hiring", count: 42 },
                { icon: <Tag className="h-6 w-6" />, name: "Team Management", count: 38 },
                { icon: <Tag className="h-6 w-6" />, name: "Productivity", count: 31 },
                { icon: <Tag className="h-6 w-6" />, name: "Global Payroll", count: 27 },
                { icon: <Tag className="h-6 w-6" />, name: "Remote Culture", count: 24 },
                { icon: <Tag className="h-6 w-6" />, name: "Career Growth", count: 19 },
                { icon: <Tag className="h-6 w-6" />, name: "Technology", count: 16 },
                { icon: <Tag className="h-6 w-6" />, name: "Case Studies", count: 12 }
              ].map((topic, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">{topic.icon}</span>
                    <span className="font-medium">{topic.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{topic.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
