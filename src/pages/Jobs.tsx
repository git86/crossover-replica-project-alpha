
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobListings from "@/components/JobListings";

const Jobs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container-custom py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Find Your Perfect Remote Job</h1>
            <p className="text-xl text-gray-600">
              Browse through hundreds of high-paying remote positions for top talent around the world.
            </p>
          </div>
        </div>
        <JobListings />
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
