
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Sparkles, BadgeCheck } from "lucide-react";

const Hire = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-crossover-blue" />,
      title: "Pre-vetted Talent",
      description: "Access to top 1% of global talent, thoroughly assessed and ready to work."
    },
    {
      icon: <Clock className="h-8 w-8 text-crossover-blue" />,
      title: "Fast Hiring",
      description: "Hire top talent in days, not months, with our streamlined process."
    },
    {
      icon: <Shield className="h-8 w-8 text-crossover-blue" />,
      title: "Risk-free Guarantee",
      description: "Our talent is backed by our satisfaction guarantee for peace of mind."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-crossover-blue" />,
      title: "Global Expertise",
      description: "Diverse talent pool covering all major tech stacks and business functions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hire the Top 1% of Global Talent</h1>
              <p className="text-xl mb-10 text-blue-100">
                Access pre-vetted, exceptional remote professionals for your business needs.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Start Hiring
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Hire Through USS Agency</h2>
              <p className="text-gray-600">
                We've revolutionized remote hiring to make it efficient, reliable, and successful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Build Your Dream Team?</h2>
              <p className="text-gray-600 mb-8">
                Join thousands of companies that have transformed their business with USS Agency talent.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-crossover-blue text-white hover:bg-blue-700">
                  Hire Talent Now
                </Button>
                <Button variant="outline" className="border-crossover-blue text-crossover-blue">
                  Schedule a Consultation
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

export default Hire;
