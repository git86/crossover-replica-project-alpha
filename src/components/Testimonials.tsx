
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Crossover changed my life. I went from working at a local company to earning 3x my previous salary while working remotely for a top tech firm in Silicon Valley.",
      author: "Maria Rodriguez",
      position: "Senior Software Engineer",
      company: "Based in Mexico City",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 2,
      text: "The assessment was challenging but fair. It tested my actual skills rather than theoretical knowledge. Now I work with an amazing team and have the flexibility to spend more time with my family.",
      author: "David Chen",
      position: "Product Manager",
      company: "Based in Singapore",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      text: "After 10 years in traditional office jobs, Crossover helped me transition to remote work. The pay is better, the work is more challenging, and I can live wherever I want.",
      author: "Olga Petrova",
      position: "UX/UI Designer",
      company: "Based in Ukraine",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from talented professionals who have transformed their careers through Crossover.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonials[activeIndex].author}
                </h3>
                <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                <p className="text-crossover-blue font-medium">{testimonials[activeIndex].company}</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
              "{testimonials[activeIndex].text}"
            </blockquote>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-crossover-gray text-gray-700 flex items-center justify-center hover:bg-crossover-blue hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === activeIndex ? 'bg-crossover-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-crossover-gray text-gray-700 flex items-center justify-center hover:bg-crossover-blue hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
