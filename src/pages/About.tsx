
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { value: '2014', label: 'Founded' },
    { value: '45+', label: 'Countries' },
    { value: '10,000+', label: 'Remote workers placed' },
    { value: '100M+', label: 'Hours worked' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Crossover</h1>
              <p className="text-xl text-gray-600 mb-10">
                We connect the world's top talent with the world's most innovative companies.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-crossover-blue mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Crossover was founded in 2014 with a mission to connect the most talented people around the world with the most innovative companies, regardless of location.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that talent is equally distributed around the world, but opportunity is not. Our platform aims to bridge this gap by providing remote work opportunities that match skilled professionals with companies that value their talents.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've developed a rigorous assessment process that identifies top performers across various domains, ensuring that our clients receive the absolute best talent for their needs.
                </p>
                <div className="mt-8">
                  <Link to="/careers">
                    <Button className="btn-primary">Join Our Team</Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Values</h2>
              <p className="text-gray-600">
                These principles guide everything we do at Crossover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Meritocracy',
                  description: 'We believe in equal opportunity and that people should be rewarded based on their skills and contributions, not their location or background.'
                },
                {
                  title: 'Global Talent',
                  description: 'We harness the power of a global workforce, connecting the best talent from around the world with opportunities they deserve.'
                },
                {
                  title: 'Data-Driven Decisions',
                  description: 'Our assessment process is rooted in objective data, ensuring that we match the right talent with the right opportunities.'
                },
                {
                  title: 'Continuous Improvement',
                  description: 'We're committed to helping our talent and clients grow through ongoing feedback and development opportunities.'
                },
                {
                  title: 'Transparency',
                  description: 'We believe in clear, honest communication with both our talents and our client companies.'
                },
                {
                  title: 'Work-Life Balance',
                  description: 'We promote flexible remote work that allows professionals to balance their career goals with personal fulfillment.'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-crossover-blue">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team (Placeholder) */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Leadership Team</h2>
              <p className="text-gray-600">
                Meet the people driving our mission forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Executive Name</h3>
                  <p className="text-crossover-blue">Position Title</p>
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

export default About;
