
import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Plus } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ApplicationsSectionProps {
  userId: string;
}

const ApplicationsSection = ({ userId }: ApplicationsSectionProps) => {
  const [applications, setApplications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load applications from localStorage
    const loadApplications = () => {
      try {
        const savedApplications = localStorage.getItem(`applications_${userId}`);
        if (savedApplications) {
          setApplications(JSON.parse(savedApplications));
        } else {
          // Set default mock data for first-time users
          const defaultApplications = [
            {
              id: 1,
              position: "Senior Frontend Developer",
              company: "Tech Innovations Inc.",
              appliedDate: "2023-11-15",
              status: "In Review",
              statusColor: "bg-yellow-100 text-yellow-800"
            },
            {
              id: 2,
              position: "Full Stack Engineer",
              company: "Global Solutions",
              appliedDate: "2023-11-10",
              status: "Interview Scheduled",
              statusColor: "bg-blue-100 text-blue-800"
            }
          ];
          
          setApplications(defaultApplications);
          localStorage.setItem(`applications_${userId}`, JSON.stringify(defaultApplications));
        }
      } catch (error) {
        toast.error("Failed to load applications data");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadApplications();
  }, [userId]);

  const handleStatusChange = (applicationId: number) => {
    // Simple mock of status change cycling through statuses
    const statuses = [
      { status: "Applied", color: "bg-gray-100 text-gray-800" },
      { status: "In Review", color: "bg-yellow-100 text-yellow-800" },
      { status: "Interview Scheduled", color: "bg-blue-100 text-blue-800" },
      { status: "Accepted", color: "bg-green-100 text-green-800" },
      { status: "Rejected", color: "bg-red-100 text-red-800" }
    ];
    
    const updatedApplications = applications.map(app => {
      if (app.id === applicationId) {
        const currentStatusIndex = statuses.findIndex(s => s.status === app.status);
        const nextStatusIndex = (currentStatusIndex + 1) % statuses.length;
        return {
          ...app,
          status: statuses[nextStatusIndex].status,
          statusColor: statuses[nextStatusIndex].color
        };
      }
      return app;
    });
    
    setApplications(updatedApplications);
    localStorage.setItem(`applications_${userId}`, JSON.stringify(updatedApplications));
    toast.success("Application status updated");
  };

  const handleAddApplication = () => {
    // Simple modal for adding a mock application
    const position = prompt("Enter job position:");
    const company = prompt("Enter company name:");
    
    if (position && company) {
      const newApplication = {
        id: Date.now(),
        position,
        company,
        appliedDate: new Date().toISOString().split('T')[0],
        status: "Applied",
        statusColor: "bg-gray-100 text-gray-800"
      };
      
      const updatedApplications = [...applications, newApplication];
      setApplications(updatedApplications);
      localStorage.setItem(`applications_${userId}`, JSON.stringify(updatedApplications));
      toast.success("Application added successfully");
    }
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
          <Button 
            size="sm" 
            onClick={handleAddApplication}
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            Add Application
          </Button>
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
                  <TableCell className="font-medium">{app.position}</TableCell>
                  <TableCell>{app.company}</TableCell>
                  <TableCell>{new Date(app.appliedDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <button 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.statusColor} cursor-pointer`}
                      onClick={() => handleStatusChange(app.id)}
                      title="Click to change status"
                    >
                      {app.status}
                    </button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <button 
                        className="text-gray-500 hover:text-crossover-blue"
                        title="View details"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-gray-500 hover:text-crossover-blue"
                        title="View job posting"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
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
          <Link to="/jobs">
            <Button>
              Browse Jobs
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ApplicationsSection;
