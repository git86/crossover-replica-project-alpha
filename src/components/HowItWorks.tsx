
import { Users, Search, Award, Briefcase } from 'lucide-react';

const HowItWorks = () => {
  const forEmployers = [
    {
      icon: <Search className="h-10 w-10 text-crossover-blue" />,
      title: 'Define Your Needs',
      description: 'Tell us about your company needs and the roles you\'re looking to fill.'
    },
    {
      icon: <Users className="h-10 w-10 text-crossover-blue" />,
      title: 'We Find the Talent',
      description: 'Our rigorous vetting process identifies the best candidates from our global talent pool.'
    },
    {
      icon: <Award className="h-10 w-10 text-crossover-blue" />,
      title: 'Quality Guaranteed',
      description: 'Work with pre-vetted professionals backed by our performance guarantee.'
    },
    {
      icon: <Briefcase className="h-10 w-10 text-crossover-blue" />,
      title: 'Scale Seamlessly',
      description: 'Expand your team quickly with our large bench of ready-to-work talent.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How USS Agency Works</h2>
          <p className="section-subtitle">
            We've simplified the process of finding and hiring top global talent, saving you time and resources.
          </p>
        </div>

        {/* For Employers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">For Employers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {forEmployers.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 relative group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-crossover-blue"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-crossover-blue font-bold">
                  {index + 1}
                </div>
                
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-crossover-blue">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Divider */}
        <div className="relative h-px w-full bg-gray-200 my-12">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8">
            <span className="text-crossover-blue font-semibold">Trusted by leading companies worldwide</span>
          </div>
        </div>

        {/* Company Logos */}
        <div className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="h-12 w-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Company {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
