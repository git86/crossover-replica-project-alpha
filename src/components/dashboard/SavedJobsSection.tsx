
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, ExternalLink, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SavedJob, Job } from "@/types";

const SavedJobsSection = () => {
  const [savedJobs, setSavedJobs] = useState<(SavedJob & { job: Job })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        setIsLoading(true);
        
        const { data: session } = await supabase.auth.getSession();
        if (!session.session) return;
        
        // Fetch saved jobs with job details using a join
        const { data, error } = await supabase
          .from('saved_jobs')
          .select(`
            id,
            job_id,
            created_at,
            job:jobs(
              id,
              title,
              company,
              location,
              salary_range,
              posted_date
            )
          `)
          .eq('user_id', session.session.user.id);
          
        if (error) throw error;
        
        setSavedJobs(data || []);
      } catch (error) {
        console.error("Error fetching saved jobs:", error);
        toast.error("Failed to load saved jobs");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSavedJobs();
  }, []);

  const handleRemoveJob = async (savedJobId: string) => {
    try {
      const { error } = await supabase
        .from('saved_jobs')
        .delete()
        .eq('id', savedJobId);
        
      if (error) throw error;
      
      // Update local state
      setSavedJobs(savedJobs.filter(job => job.id !== savedJobId));
      toast.success("Job removed from saved list");
    } catch (error) {
      console.error("Error removing saved job:", error);
      toast.error("Failed to remove job");
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
        </div>
      </div>
      
      {savedJobs.length > 0 ? (
        <div className="space-y-4">
          {savedJobs.map((savedJob) => (
            <div key={savedJob.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-bold">
                  {savedJob.job.company.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{savedJob.job.title}</h3>
                  <div className="text-blue-600">{savedJob.job.company}</div>
                  <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-gray-600">
                    <span>{savedJob.job.location}</span>
                    <span>{savedJob.job.salary_range}</span>
                    <span>Posted {new Date(savedJob.job.posted_date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                    <Link to={`/jobs/${savedJob.job_id}`}>
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleRemoveJob(savedJob.id)}
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
