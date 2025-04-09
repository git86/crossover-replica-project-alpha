
import { Button } from "@/components/ui/button";
import { Bookmark, ExternalLink, Trash2 } from "lucide-react";

const SavedJobsSection = () => {
  // Mock data for saved jobs
  const savedJobs = [
    {
      id: 1,
      position: "Senior React Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      salary: "$120K - $150K",
      postedDate: "2023-11-10",
      logo: "TS"
    },
    {
      id: 2,
      position: "Frontend Engineer",
      company: "Global Innovations",
      location: "Remote",
      salary: "$100K - $130K",
      postedDate: "2023-11-08",
      logo: "GI"
    },
    {
      id: 3,
      position: "Full Stack Developer",
      company: "Digital Creations",
      location: "Remote",
      salary: "$110K - $140K",
      postedDate: "2023-11-05",
      logo: "DC"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Saved Jobs</h2>
        <span className="bg-blue-100 text-crossover-blue px-3 py-1 rounded-full text-sm">
          {savedJobs.length} Jobs
        </span>
      </div>
      
      <div className="space-y-4">
        {savedJobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-bold">
                {job.logo}
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{job.position}</h3>
                <div className="text-crossover-blue">{job.company}</div>
                <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-gray-600">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                  <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <ExternalLink className="w-4 h-4" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {savedJobs.length === 0 && (
        <div className="text-center py-12">
          <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">No Saved Jobs</h3>
          <p className="text-gray-500 mb-6">
            You haven't saved any jobs yet. Browse jobs and click the bookmark icon to save them for later.
          </p>
          <Button>
            Browse Jobs
          </Button>
        </div>
      )}
    </div>
  );
};

export default SavedJobsSection;
