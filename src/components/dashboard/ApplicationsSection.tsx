
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

const ApplicationsSection = () => {
  // Mock data for applications
  const applications = [
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
    },
    {
      id: 3,
      position: "React Developer",
      company: "Digital Creations",
      appliedDate: "2023-11-05",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800"
    },
    {
      id: 4,
      position: "UI/UX Developer",
      company: "Crossover",
      appliedDate: "2023-11-01",
      status: "Accepted",
      statusColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Applications</h2>
        <span className="bg-blue-100 text-crossover-blue px-3 py-1 rounded-full text-sm">
          {applications.length} Applications
        </span>
      </div>
      
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
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.statusColor}`}>
                    {app.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="text-gray-500 hover:text-crossover-blue">
                      <FileText className="w-4 h-4" />
                    </button>
                    <button className="text-gray-500 hover:text-crossover-blue">
                      <ExternalLink className="w-4 h-4" />
                    </button>
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

export default ApplicationsSection;
