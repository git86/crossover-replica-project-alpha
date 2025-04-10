
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const JobListings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Jobs' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'product', name: 'Product' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'finance', name: 'Finance' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote, Worldwide',
      salary: '$100K - $150K USD',
      type: 'Full-time',
      category: 'engineering',
      tags: ['React', 'TypeScript', 'Redux'],
      description: 'We\'re looking for a Senior Frontend Developer with strong React experience to join our team.',
      postedDate: '2d ago'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateX',
      location: 'Remote, Americas',
      salary: '$110K - $140K USD',
      type: 'Full-time',
      category: 'product',
      tags: ['Product Strategy', 'Agile', 'SaaS'],
      description: 'Work with cross-functional teams to drive the product roadmap for our flagship SaaS platform.',
      postedDate: '5d ago'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'DesignForward',
      location: 'Remote, Europe',
      salary: '$90K - $120K USD',
      type: 'Full-time',
      category: 'design',
      tags: ['Figma', 'User Research', 'UI Systems'],
      description: 'Create exceptional user experiences for our suite of enterprise products.',
      postedDate: '1w ago'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'CloudNative Ltd',
      location: 'Remote, Worldwide',
      salary: '$120K - $160K USD',
      type: 'Full-time',
      category: 'engineering',
      tags: ['AWS', 'Kubernetes', 'CI/CD'],
      description: 'Help build and maintain our cloud infrastructure and deployment pipelines.',
      postedDate: '3d ago'
    },
    {
      id: 5,
      title: 'Growth Marketing Manager',
      company: 'GrowthBoost',
      location: 'Remote, Asia-Pacific',
      salary: '$85K - $110K USD',
      type: 'Full-time',
      category: 'marketing',
      tags: ['SEO', 'Content Strategy', 'Analytics'],
      description: 'Drive our customer acquisition strategy across multiple channels.',
      postedDate: '1d ago'
    },
    {
      id: 6,
      title: 'Financial Analyst',
      company: 'Global Finance Partners',
      location: 'Remote, Americas',
      salary: '$95K - $125K USD',
      type: 'Full-time',
      category: 'finance',
      tags: ['Financial Modeling', 'Excel', 'Reporting'],
      description: 'Support decision-making through financial analysis and reporting.',
      postedDate: '6d ago'
    },
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeFilter);

  const handleViewDetails = (jobId: number) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Browse Remote Job Opportunities</h2>
          <p className="section-subtitle">
            Discover your next career move with companies that value your talent, regardless of location.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search for jobs, skills, or companies"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crossover-blue focus:border-transparent"
            />
          </div>
          <Button className="flex items-center space-x-2 bg-crossover-gray text-gray-700 hover:bg-gray-200 px-4">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === category.id 
                  ? 'bg-crossover-blue text-white' 
                  : 'bg-crossover-gray text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="group bg-white border border-gray-200 hover:border-crossover-blue rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <div className="mb-4">
                <div className="h-10 w-10 rounded-md bg-crossover-gray flex items-center justify-center text-lg font-bold text-crossover-blue mb-4">
                  {job.company.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-crossover-blue">
                  {job.title}
                </h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="text-sm">{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{job.type} • Posted {job.postedDate}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-crossover-blue text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{job.description}</p>
              
              <Button 
                className="w-full group-hover:bg-crossover-blue group-hover:text-white border border-crossover-blue text-crossover-blue bg-white"
                onClick={() => handleViewDetails(job.id)}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link to="/jobs">
            <Button className="btn-primary inline-flex items-center">
              View All Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
