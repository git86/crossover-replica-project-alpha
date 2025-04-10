
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-crossover-blue to-blue-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career or Find World-Class Talent?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of professionals and companies who have already taken the next step with USS Agency.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Button className="bg-white text-crossover-blue hover:bg-blue-50 py-3 px-8 text-base font-semibold">
              Find Remote Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-base font-semibold">
              Hire Top Talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
