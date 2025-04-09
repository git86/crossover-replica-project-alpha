
import { CheckCircle, Award, Clock, BarChart } from 'lucide-react';

const AssessmentProcess = () => {
  const steps = [
    {
      icon: <CheckCircle className="h-10 w-10 text-crossover-blue" />,
      title: 'Application Review',
      description: 'Submit your profile and we\'ll review your qualifications to determine fit for open positions.'
    },
    {
      icon: <BarChart className="h-10 w-10 text-crossover-blue" />,
      title: 'Technical Assessment',
      description: 'Showcase your skills through our proprietary testing platform that evaluates real-world abilities.'
    },
    {
      icon: <Clock className="h-10 w-10 text-crossover-blue" />,
      title: 'Trial Period',
      description: 'Work on a paid trial project to demonstrate your capabilities in a real work environment.'
    },
    {
      icon: <Award className="h-10 w-10 text-crossover-blue" />,
      title: 'Offer and Onboarding',
      description: 'Receive a competitive offer and join our global community of remote professionals.'
    }
  ];

  const stats = [
    { value: '37k+', label: 'Candidates Screened Monthly' },
    { value: '48', label: 'Countries Represented' },
    { value: '92%', label: 'Hire Success Rate' },
    { value: '$120k', label: 'Average Annual Salary' }
  ];

  return (
    <section className="py-20 bg-crossover-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Data-Driven Assessment Process</h2>
          <p className="section-subtitle">
            We've built a rigorous screening process that identifies the top 1% of global talent to ensure the best match for both candidates and companies.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all relative"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-crossover-blue font-bold">
                {index + 1}
              </div>
              
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-crossover-blue mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentProcess;
