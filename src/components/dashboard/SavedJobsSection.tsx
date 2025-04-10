
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, ExternalLink, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const SavedJobsSection = () => {
  const [savedJobs, setSavedJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved jobs from localStorage
    const loadSavedJobs = () => {
      try {
        // Get current user to find their saved jobs
        const currentUser = localStorage.getItem("currentUser");
        if (!currentUser) return;
        
        const userId = JSON.parse(currentUser).id;
        
        const savedJobsData = localStorage.getItem(`savedJobs_${userId}`);
        if (savedJobsData) {
          setSavedJobs(JSON.parse(savedJobsData));
        } else {
          // Set default mock data for first-time users
          const defaultSavedJobs = [
            {
              id: 1,
              position: "Senior React Developer",
              company: "USS AGENCY Inc.",
              location: "Remote",
              salary: "$120K - $150K",
              postedDate: "2023-11-10",
              logo: "UA"
            },
            {
              id: 2,
              position: "Frontend Engineer",
              company: "USS AGENCY Innovations",
              location: "Remote",
              salary: "$100K - $130K",
              postedDate: "2023-11-08",
              logo: "UA"
            }
          ];
          
          setSavedJobs(defaultSavedJobs);
          localStorage.setItem(`savedJobs_${userId}`, JSON.stringify(defaultSavedJobs));
        }
      } catch (error) {
        toast.error("Failed to load saved jobs data");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSavedJobs();
  }, []);

  const handleRemoveJob = (jobId: number) => {
    try {
      // Get current user to find their saved jobs
      const currentUser = localStorage.getItem("currentUser");
      if (!currentUser) return;
      
      const userId = JSON.parse(currentUser).id;
      
      const updatedJobs = savedJobs.filter(job => job.id !== jobId);
      setSavedJobs(updatedJobs);
      localStorage.setItem(`savedJobs_${userId}`, JSON.stringify(updatedJobs));
      toast.success("Job removed from saved list");
    } catch (error) {
      toast.error("Failed to remove job");
    }
  };

  const handleAddSavedJob = () => {
    try {
      // Get current user to find their saved jobs
      const currentUser = localStorage.getItem("currentUser");
      if (!currentUser) return;
      
      const userId = JSON.parse(currentUser).id;
      
      // Simple modal for adding a mock saved job
      const position = prompt("Enter job position:");
      const company = prompt("Enter company name:");
      
      if (position && company) {
        const newJob = {
          id: Date.now(),
          position,
          company,
          location: "Remote",
          salary: "$100K - $140K",
          postedDate: new Date().toISOString().split('T')[0],
          logo: company.split(' ').map((word: string) => word[0]).join('').toUpperCase()
        };
        
        const updatedJobs = [...savedJobs, newJob];
        setSavedJobs(updatedJobs);
        localStorage.setItem(`savedJobs_${userId}`, JSON.stringify(updatedJobs));
        toast.success("Job saved successfully");
      }
    } catch (error) {
      toast.error("Failed to add saved job");
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading saved jobs...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Saved Jobs</h2>
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {savedJobs.length} Jobs
          </span>
          <Button 
            size="sm" 
            onClick={handleAddSavedJob}
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            Add Saved Job
          </Button>
        </div>
      </div>
      
      {savedJobs.length > 0 ? (
        <div className="space-y-4">
          {savedJobs.map((job) => (
            <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-bold">
                  {job.logo}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{job.position}</h3>
                  <div className="text-blue-600">{job.company}</div>
                  <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-gray-600">
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                    <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                    <Link to={`/jobs/${job.id}`}>
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleRemoveJob(job.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">No Saved Jobs</h3>
          <p className="text-gray-500 mb-6">
            You haven't saved any jobs yet. Browse jobs and click the bookmark icon to save them for later.
          </p>
          <Button asChild>
            <Link to="/jobs">Browse Jobs</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default SavedJobsSection;
