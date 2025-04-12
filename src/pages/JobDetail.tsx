import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2, MapPin, Building, Clock, DollarSign, Send } from "lucide-react";
import { toast } from "sonner";
import JobApplicationForm from "@/components/JobApplicationForm";
import { supabase } from "@/integrations/supabase/client";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setIsLoading(true);
        
        const { data: sessionData } = await supabase.auth.getSession();
        const userId = sessionData.session?.user.id;
        
        setTimeout(() => {
          const mockJob = {
            id: id,
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            location: "Remote (Worldwide)",
            salary: "$120,000 - $150,000",
            type: "Full-time",
            posted: "2 weeks ago",
            applicants: 45,
            description: `
              <p>We're looking for a talented Senior Frontend Developer to join our growing team. In this role, you'll be responsible for building and maintaining the user interfaces for our flagship products.</p>
              
              <h4>What you'll do:</h4>
              <ul>
                <li>Build responsive and high-performance web applications</li>
                <li>Collaborate with designers and backend developers</li>
                <li>Optimize applications for maximum speed and scalability</li>
                <li>Work with modern frontend frameworks like React</li>
                <li>Participate in code reviews and mentor junior developers</li>
              </ul>
              
              <h4>Requirements:</h4>
              <ul>
                <li>5+ years of experience in frontend development</li>
                <li>Strong proficiency in JavaScript, HTML, and CSS</li>
                <li>Experience with React and state management libraries</li>
                <li>Knowledge of responsive design principles</li>
                <li>Understanding of RESTful APIs and how to integrate them</li>
              </ul>
              
              <h4>Benefits:</h4>
              <ul>
                <li>Competitive salary with annual reviews</li>
                <li>Flexible working hours and remote-first culture</li>
                <li>Health insurance and wellness programs</li>
                <li>Professional development budget</li>
                <li>Annual team retreats</li>
              </ul>
            `,
            skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Responsive Design", "RESTful APIs"]
          };
          
          setJob(mockJob);
          
          if (userId) {
            checkIfJobIsSaved(userId);
            checkIfUserHasApplied(userId);
          } else {
            const savedJobs = JSON.parse(localStorage.getItem("savedJobs_user123") || "[]");
            const jobIsSaved = savedJobs.some((savedJob: any) => savedJob.id.toString() === id);
            setIsSaved(jobIsSaved);
            
            const applications = JSON.parse(localStorage.getItem("applications_user123") || "[]");
            const hasAppliedToJob = applications.some((app: any) => 
              app.position === mockJob.title && app.company === mockJob.company
            );
            setHasApplied(hasAppliedToJob);
          }
          
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        toast.error("Failed to load job details");
        setIsLoading(false);
      }
    };
    
    fetchJobDetails();
  }, [id]);

  const checkIfJobIsSaved = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('saved_jobs')
        .select('id')
        .eq('user_id', userId)
        .eq('job_id', id)
        .maybeSingle();
        
      if (error) throw error;
      
      setIsSaved(!!data);
    } catch (error) {
      console.error("Error checking if job is saved:", error);
    }
  };

  const checkIfUserHasApplied = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('id')
        .eq('user_id', userId)
        .eq('job_id', id)
        .maybeSingle();
        
      if (error) throw error;
      
      setHasApplied(!!data);
    } catch (error) {
      console.error("Error checking if user has applied:", error);
    }
  };

  const handleSaveJob = async () => {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user.id;
      
      if (!userId) {
        handleSaveJobLocally();
        return;
      }
      
      if (isSaved) {
        const { error } = await supabase
          .from('saved_jobs')
          .delete()
          .eq('user_id', userId)
          .eq('job_id', id);
          
        if (error) throw error;
        
        setIsSaved(false);
        toast.success("Job removed from saved jobs");
      } else {
        const { error } = await supabase
          .from('saved_jobs')
          .insert({
            user_id: userId,
            job_id: id
          });
          
        if (error) throw error;
        
        setIsSaved(true);
        toast.success("Job saved successfully");
      }
    } catch (error) {
      console.error("Error saving job:", error);
      toast.error("Failed to save job");
    }
  };

  const handleSaveJobLocally = () => {
    try {
      const userId = "user123"; // In a real app, this would come from auth
      const savedJobs = JSON.parse(localStorage.getItem(`savedJobs_${userId}`) || "[]");
      
      if (isSaved) {
        const updatedJobs = savedJobs.filter((savedJob: any) => savedJob.id.toString() !== id);
        localStorage.setItem(`savedJobs_${userId}`, JSON.stringify(updatedJobs));
        setIsSaved(false);
        toast.success("Job removed from saved jobs");
      } else {
        const jobToSave = {
          id: job.id,
          position: job.title,
          company: job.company,
          location: job.location,
          salary: job.salary,
          postedDate: new Date().toISOString().split('T')[0],
          logo: job.company.split(' ').map((word: string) => word[0]).join('').toUpperCase()
        };
        
        savedJobs.push(jobToSave);
        localStorage.setItem(`savedJobs_${userId}`, JSON.stringify(savedJobs));
        setIsSaved(true);
        toast.success("Job saved successfully");
      }
    } catch (error) {
      toast.error("Failed to save job");
    }
  };

  const handleApply = () => {
    setShowApplicationForm(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this job: ${job.title} at ${job.company}`,
        url: window.location.href,
      })
      .then(() => toast.success("Shared successfully"))
      .catch(() => toast.error("Error sharing"));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Link copied to clipboard"))
        .catch(() => toast.error("Failed to copy link"));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <div className="container-custom py-20">
            <div className="flex justify-center">
              <div className="animate-pulse w-full max-w-3xl">
                <div className="h-12 bg-gray-200 rounded-md mb-6"></div>
                <div className="h-8 bg-gray-200 rounded-md w-2/3 mb-10"></div>
                <div className="h-72 bg-gray-200 rounded-md mb-6"></div>
                <div className="h-12 bg-gray-200 rounded-md w-1/2"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container-custom py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex text-sm mb-6 text-gray-500">
              <Link to="/jobs" className="hover:text-crossover-blue">Jobs</Link>
              <span className="mx-2">/</span>
              <span>{job.title}</span>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
              <div className="flex items-center text-xl text-crossover-blue mb-4">
                {job.company}
              </div>
              
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Posted {job.posted}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {job.salary}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  className="flex-1 sm:flex-none"
                  onClick={handleApply}
                  disabled={hasApplied}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {hasApplied ? "Already Applied" : "Apply Now"}
                </Button>
                <Button
                  variant="outline"
                  className={isSaved ? "text-yellow-600 hover:text-yellow-700" : ""}
                  onClick={handleSaveJob}
                >
                  <Bookmark className={`mr-2 h-4 w-4 ${isSaved ? 'fill-yellow-600' : ''}`} />
                  {isSaved ? "Saved" : "Save"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleShare}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: job.description }}
              ></div>
            </div>
            
            <div className="bg-white rounded-lg border p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-blue-50 text-crossover-blue px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Interested in this position?</h3>
              <p className="text-gray-600 mb-4">
                Submit your application today to be considered for this role.
              </p>
              <Button 
                size="lg"
                onClick={handleApply}
                disabled={hasApplied}
              >
                <Send className="mr-2 h-4 w-4" />
                {hasApplied ? "You've Already Applied" : "Apply for this Position"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <JobApplicationForm
        isOpen={showApplicationForm}
        onClose={() => setShowApplicationForm(false)}
        jobId={id || ""}
        jobTitle={job?.title || ""}
        company={job?.company || ""}
      />
    </div>
  );
};

export default JobDetail;
