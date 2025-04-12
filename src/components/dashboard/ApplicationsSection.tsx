
import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Application, Job } from "@/types";

const ApplicationsSection = () => {
  const [applications, setApplications] = useState<(Application & { job: Job })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        
        const { data: session } = await supabase.auth.getSession();
        if (!session.session) return;
        
        // Fetch applications with job details using a join
        const { data, error } = await supabase
          .from('applications')
          .select(`
            id,
            user_id,
            job_id,
            status,
            applied_date,
            created_at,
            updated_at,
            job:jobs(
              id,
              title,
              company
            )
          `)
          .eq('user_id', session.session.user.id);
          
        if (error) throw error;
        
        // Ensure data matches our expected type structure
        const typedData = data?.map(item => ({
          ...item,
          user_id: item.user_id,
          job_id: item.job_id,
          created_at: item.created_at,
          updated_at: item.updated_at
        })) || [];
        
        setApplications(typedData as (Application & { job: Job })[]);
      } catch (error) {
        console.error("Error fetching applications:", error);
        toast.error("Failed to load applications");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchApplications();
  }, []);

  const handleStatusChange = async (applicationId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', applicationId);
        
      if (error) throw error;
      
      // Update local state
      setApplications(applications.map(app => 
        app.id === applicationId ? { ...app, status: newStatus } : app
      ));
      
      toast.success("Application status updated");
    } catch (error) {
      console.error("Error updating application status:", error);
      toast.error("Failed to update application status");
    }
  };

  // Get the appropriate color for status badges
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied": return "bg-gray-100 text-gray-800";
      case "In Review": return "bg-yellow-100 text-yellow-800";
      case "Interview Scheduled": return "bg-blue-100 text-blue-800";
      case "Accepted": return "bg-green-100 text-green-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Get the next status in the cycle
  const getNextStatus = (currentStatus: string) => {
    const statuses = [
      "Applied", 
      "In Review", 
      "Interview Scheduled", 
      "Accepted", 
      "Rejected"
    ];
    
    const currentIndex = statuses.indexOf(currentStatus);
    return statuses[(currentIndex + 1) % statuses.length];
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading applications...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Applications</h2>
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-crossover-blue px-3 py-1 rounded-full text-sm">
            {applications.length} Applications
          </span>
        </div>
      </div>
      
      {applications.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.job.title}</TableCell>
                  <TableCell>{app.job.company}</TableCell>
                  <TableCell>{new Date(app.applied_date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <button 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(app.status)} cursor-pointer`}
                      onClick={() => handleStatusChange(app.id, getNextStatus(app.status))}
                      title="Click to change status"
                    >
                      {app.status}
                    </button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <button 
                        className="text-gray-500 hover:text-blue-600"
                        title="View details"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                      <Link 
                        to={`/jobs/${app.job_id}`}
                        className="text-gray-500 hover:text-blue-600"
                        title="View job posting"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg bg-gray-50">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">No Applications Yet</h3>
          <p className="text-gray-500 mb-6">
            Start applying to jobs to track your application status here.
          </p>
          <Button asChild>
            <Link to="/jobs">Browse Jobs</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApplicationsSection;
