
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssessmentProcess from "@/components/AssessmentProcess";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Assessment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Assessment Process</h1>
              <p className="text-xl mb-10 text-blue-100">
                We&apos;ve developed a rigorous, data-driven process to identify the top 1% of global talent.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Start Your Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Main Assessment Process Component */}
        <AssessmentProcess />

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of Our Assessment</h2>
              <p className="text-gray-600">
                Our assessment process provides value for both job seekers and employers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">For Job Seekers</h3>
                <ul className="space-y-4">
                  {[
                    "Objective evaluation of your skills",
                    "Detailed feedback on your strengths and areas for improvement",
                    "Credible certification to showcase to employers",
                    "Access to exclusive high-paying job opportunities",
                    "Fair assessment regardless of your location or background"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">For Employers</h3>
                <ul className="space-y-4">
                  {[
                    "Pre-vetted candidates with verified skills",
                    "Significant reduction in hiring time and costs",
                    "Decreased risk of bad hires",
                    "Access to a global talent pool",
                    "Data-driven matching of candidates to your specific needs"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Showcase Your Skills?</h2>
              <p className="text-gray-600 mb-8">
                Join thousands of professionals who have advanced their careers through our assessment process.
              </p>
              <Button className="bg-crossover-blue text-white hover:bg-blue-700">
                Begin Assessment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
