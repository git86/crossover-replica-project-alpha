
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Help = () => {
  const navigate = useNavigate();
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);
  const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");
  const [callDate, setCallDate] = useState("");
  const [callTime, setCallTime] = useState("");
  const [callReason, setCallReason] = useState("");

  const faqCategories = [
    {
      category: "For Talents",
      questions: [
        {
          question: "How do I apply for jobs on USS Agency?",
          answer: "To apply for jobs, create an account, complete your profile, and browse our job listings. When you find a position that matches your skills, click the 'Apply' button and follow the application process."
        },
        {
          question: "What is the assessment process like?",
          answer: "Our assessment process typically includes a review of your qualifications, technical skills testing, and a paid trial period to evaluate your performance in a real work environment. The specific assessments vary by role."
        },
        {
          question: "How long does the hiring process take?",
          answer: "The hiring process typically takes 1-3 weeks, depending on the role and how quickly you complete each stage of the assessment. We strive to make decisions promptly to respect your time."
        },
        {
          question: "How do I get paid for my work?",
          answer: "USS Agency offers multiple payment methods including direct bank transfers, PayPal, and other options depending on your location. Payments are processed weekly or monthly depending on your contract."
        }
      ]
    },
    {
      category: "For Companies",
      questions: [
        {
          question: "How does USS Agency vet talent?",
          answer: "We use a data-driven assessment process that includes skills testing, personality assessments, and paid trial periods to identify top performers. Only the top 1% of applicants make it through our rigorous vetting."
        },
        {
          question: "What happens if I'm not satisfied with a hire?",
          answer: "We offer a satisfaction guarantee. If you're not satisfied with a hire within the first 30 days, we'll work with you to find a replacement at no additional cost."
        },
        {
          question: "How quickly can I get talent onboarded?",
          answer: "Most clients can have pre-vetted talent ready to start within days of selecting a candidate. Our efficient onboarding process ensures a smooth transition into your team."
        },
        {
          question: "Can I hire teams or just individuals?",
          answer: "Both options are available. We can provide individual contributors for specific roles or assembled teams with complementary skills for larger projects or departments."
        }
      ]
    }
  ];

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send data to the server
    toast({
      title: "Ticket Submitted",
      description: "Your support ticket has been submitted. We'll respond within 24 hours.",
    });
    setIsTicketDialogOpen(false);
    setTicketSubject("");
    setTicketMessage("");
    navigate("/contact", { state: { ticketSubmitted: true } });
  };

  const handleBookCall = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send data to the server
    toast({
      title: "Call Scheduled",
      description: `Your call has been scheduled for ${callDate} at ${callTime}.`,
    });
    setIsCallDialogOpen(false);
    setCallDate("");
    setCallTime("");
    setCallReason("");
    navigate("/contact", { state: { callBooked: true } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Help Center</h1>
              <p className="text-xl text-gray-600 mb-10">
                Find answers to common questions or get in touch with our support team.
              </p>
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search for help..." 
                  className="pl-10 py-6 text-lg rounded-md"
                />
                <Button className="absolute right-1.5 top-1.5 bg-crossover-blue hover:bg-blue-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-900">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border bg-gray-50 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-lg font-medium text-gray-900 py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Still Need Help?</h2>
              <p className="text-gray-600">
                Our support team is ready to assist you with any questions or concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Support</h3>
                <p className="text-gray-600 mb-6">
                  Submit a ticket and our team will get back to you within 24 hours.
                </p>
                <Button 
                  className="w-full bg-crossover-blue hover:bg-blue-700"
                  onClick={() => setIsTicketDialogOpen(true)}
                >
                  Submit a Ticket
                </Button>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Schedule a Call</h3>
                <p className="text-gray-600 mb-6">
                  Book a call with our support team for personalized assistance.
                </p>
                <Button 
                  className="w-full bg-crossover-blue hover:bg-blue-700"
                  onClick={() => setIsCallDialogOpen(true)}
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Submit Ticket Dialog */}
      <Dialog open={isTicketDialogOpen} onOpenChange={setIsTicketDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Submit a Support Ticket</DialogTitle>
            <DialogDescription>
              Please provide details about your issue and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitTicket} className="space-y-4 mt-4">
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input 
                id="subject" 
                value={ticketSubject} 
                onChange={(e) => setTicketSubject(e.target.value)} 
                placeholder="Brief description of your issue" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                value={ticketMessage} 
                onChange={(e) => setTicketMessage(e.target.value)} 
                placeholder="Please provide details about your issue" 
                rows={5} 
                required 
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsTicketDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-crossover-blue hover:bg-blue-700">
                Submit Ticket
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Book Call Dialog */}
      <Dialog open={isCallDialogOpen} onOpenChange={setIsCallDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Schedule a Support Call</DialogTitle>
            <DialogDescription>
              Select a date and time for your call with our support team.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBookCall} className="space-y-4 mt-4">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">Preferred Date</label>
              <Input 
                id="date" 
                type="date" 
                value={callDate} 
                onChange={(e) => setCallDate(e.target.value)} 
                required 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium">Preferred Time</label>
              <Input 
                id="time" 
                type="time" 
                value={callTime} 
                onChange={(e) => setCallTime(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="reason" className="text-sm font-medium">Reason for Call</label>
              <Textarea 
                id="reason" 
                value={callReason} 
                onChange={(e) => setCallReason(e.target.value)} 
                placeholder="Please briefly describe what you'd like to discuss" 
                rows={3} 
                required 
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsCallDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-crossover-blue hover:bg-blue-700">
                Book Call
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Help;
