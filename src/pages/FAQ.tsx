
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  
  const categories = [
    { id: "general", name: "General" },
    { id: "candidates", name: "For Candidates" },
    { id: "companies", name: "For Companies" },
    { id: "payment", name: "Payment & Billing" },
    { id: "technical", name: "Technical" },
  ];
  
  const faqs = {
    general: [
      {
        question: "What is Crossover?",
        answer: "Crossover is a global talent platform that connects the world's top talent with the most innovative companies. We specialize in remote work opportunities across various domains including software development, product management, marketing, design, and finance."
      },
      {
        question: "How does Crossover work?",
        answer: "Crossover uses a rigorous, data-driven assessment process to identify the top 1% of global talent. Candidates go through an application review, technical assessment, and trial period before being hired. Companies can access this pre-vetted talent pool to quickly scale their teams with high-quality remote professionals."
      },
      {
        question: "Where is Crossover located?",
        answer: "Crossover is a global company with offices in multiple countries, but our primary operations are conducted remotely. Our talent pool and client companies span over 100 countries worldwide."
      },
      {
        question: "Does Crossover offer full-time positions?",
        answer: "Yes, the majority of positions offered through Crossover are full-time, long-term roles. We also occasionally offer project-based or part-time opportunities depending on client needs."
      }
    ],
    candidates: [
      {
        question: "How do I apply for jobs through Crossover?",
        answer: "Visit our jobs page, browse available positions that match your skills, and click 'Apply' on positions that interest you. You'll need to create a profile, submit your application, and go through our assessment process."
      },
      {
        question: "What is the assessment process like?",
        answer: "Our assessment process typically consists of three stages: 1) Application review, 2) Technical skills assessment specific to your field, and 3) A paid trial project. This process helps us ensure we're matching the right talent with the right opportunities."
      },
      {
        question: "How long does the hiring process take?",
        answer: "The hiring process typically takes 1-3 weeks from application to offer, depending on the position and how quickly you complete the assessment stages."
      },
      {
        question: "What types of roles does Crossover offer?",
        answer: "Crossover offers roles across various domains including software development, product management, design, marketing, finance, customer support, and more. All positions are remote, allowing you to work from anywhere."
      }
    ],
    companies: [
      {
        question: "How does Crossover help companies hire talent?",
        answer: "Crossover provides access to a global pool of pre-vetted, high-performing talent. We handle the entire recruitment process including sourcing, screening, assessment, and ongoing performance monitoring, significantly reducing your hiring time and costs."
      },
      {
        question: "What kind of talent can I hire through Crossover?",
        answer: "You can hire a wide range of professionals including software developers, product managers, designers, marketers, finance specialists, customer support representatives, and more. All our talent has been rigorously assessed to ensure they meet the highest standards."
      },
      {
        question: "How quickly can I scale my team with Crossover?",
        answer: "Most companies can start interviewing pre-vetted candidates within days of signing up, and many positions can be filled within 1-2 weeks. Our large bench of ready-to-work talent makes scaling fast and efficient."
      },
      {
        question: "Does Crossover offer any guarantees on hired talent?",
        answer: "Yes, we offer a performance guarantee for all placements. If a hired professional doesn't meet your expectations, we'll replace them at no additional cost within a specified timeframe."
      }
    ],
    payment: [
      {
        question: "How does payment work for hired talent?",
        answer: "Professionals hired through Crossover are typically paid weekly based on tracked productive time. All payments are processed through our secure platform."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept bank transfers, PayPal, and other major payment methods depending on your location."
      },
      {
        question: "Are there any additional fees beyond the stated rates?",
        answer: "Crossover's fees are transparent and included in the rates you see. There are no hidden charges or additional fees."
      },
      {
        question: "How does billing work for companies?",
        answer: "Companies are typically billed monthly based on the hours worked by their hired professionals. Detailed invoices provide transparency into all charges."
      }
    ],
    technical: [
      {
        question: "What technical requirements do I need to work through Crossover?",
        answer: "You'll need a reliable internet connection, a modern computer with webcam, and any specific software required for your role. Crossover provides access to additional tools needed for tracking time and managing work."
      },
      {
        question: "How does Crossover track working hours?",
        answer: "Crossover uses a proprietary productivity tracking tool that monitors active work time. This ensures transparency for both talent and clients."
      },
      {
        question: "Is my data secure with Crossover?",
        answer: "Yes, Crossover takes data security seriously and implements industry-standard security measures to protect all personal and business information."
      },
      {
        question: "What kind of technical support does Crossover provide?",
        answer: "We offer technical support through our help center, email support, and live chat during business hours to resolve any issues quickly."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about Crossover
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crossover-blue focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`rounded-full px-6 ${
                    activeCategory === category.id 
                      ? 'bg-crossover-blue text-white' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-crossover-blue">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                We're here to help. Contact our support team for assistance.
              </p>
              <Button className="btn-primary">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
