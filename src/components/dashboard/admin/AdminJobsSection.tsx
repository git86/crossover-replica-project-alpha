
import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

// Sample job data
const initialJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
    postedDate: "2025-03-20",
    applicants: 12,
    status: "Active",
  },
  {
    id: "2",
    title: "Backend Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    postedDate: "2025-03-15",
    applicants: 8,
    status: "Active",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    location: "New York, NY",
    type: "Contract",
    postedDate: "2025-03-10",
    applicants: 15,
    status: "Closed",
  },
];

const AdminJobsSection = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  
  // New job form state
  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    type: "Full-time",
    status: "Active",
  });

  const handleAddJob = () => {
    if (!newJob.title || !newJob.location) {
      toast.error("Please fill in all required fields");
      return;
    }

    const job = {
      id: Date.now().toString(),
      title: newJob.title,
      location: newJob.location,
      type: newJob.type,
      postedDate: new Date().toISOString().split("T")[0],
      applicants: 0,
      status: newJob.status,
    };

    setJobs([job, ...jobs]);
    setNewJob({
      title: "",
      location: "",
      type: "Full-time",
      status: "Active",
    });
    setIsAddingJob(false);
    toast.success("Job listing added successfully");
  };

  const handleDeleteJob = (id: string) => {
    setJobs(jobs.filter(job => job.id !== id));
    toast.success("Job listing deleted successfully");
  };

  const handleUpdateJobStatus = (id: string, newStatus: string) => {
    setJobs(
      jobs.map(job => 
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
    toast.success(`Job status updated to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Manage Job Listings</h2>
        <Button onClick={() => setIsAddingJob(!isAddingJob)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Job
        </Button>
      </div>

      {isAddingJob && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <h3 className="text-lg font-medium mb-4">Add New Job Listing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title*
              </label>
              <input
                type="text"
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="e.g. Senior Frontend Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location*
              </label>
              <input
                type="text"
                value={newJob.location}
                onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="e.g. Remote, New York, NY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                value={newJob.type}
                onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={newJob.status}
                onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsAddingJob(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddJob}>Save Job</Button>
          </div>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Posted Date</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>{job.postedDate}</TableCell>
                <TableCell>{job.applicants}</TableCell>
                <TableCell>
                  <select
                    value={job.status}
                    onChange={(e) => handleUpdateJobStatus(job.id, e.target.value)}
                    className="p-1 border border-gray-300 rounded text-sm"
                  >
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                    <option value="Closed">Closed</option>
                  </select>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => setEditingJobId(job.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteJob(job.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminJobsSection;
