
import { useState } from "react";
import { Check, X, ChevronRight, FileText, Mail } from "lucide-react";
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

// Sample applicant data
const initialApplicants = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    position: "Senior Frontend Developer",
    appliedDate: "2025-04-05",
    status: "Pending",
    resumeUrl: "#",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    position: "Backend Engineer",
    appliedDate: "2025-04-03",
    status: "Interview",
    resumeUrl: "#",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    position: "UI/UX Designer",
    appliedDate: "2025-04-01",
    status: "Rejected",
    resumeUrl: "#",
  },
  {
    id: "4",
    name: "Sara Williams",
    email: "sara@example.com",
    position: "Senior Frontend Developer",
    appliedDate: "2025-03-29",
    status: "Hired",
    resumeUrl: "#",
  },
];

const AdminApplicantsSection = () => {
  const [applicants, setApplicants] = useState(initialApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState<string | null>(null);

  const handleUpdateStatus = (id: string, newStatus: string) => {
    setApplicants(
      applicants.map(applicant => 
        applicant.id === id ? { ...applicant, status: newStatus } : applicant
      )
    );
    toast.success(`Applicant status updated to ${newStatus}`);
  };

  const handleViewDetails = (id: string) => {
    setSelectedApplicant(id === selectedApplicant ? null : id);
  };

  const handleSendEmail = (email: string) => {
    // In a real app, this would open an email form or interface
    toast.success(`Email dialog opened for ${email}`);
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Interview":
        return "bg-blue-100 text-blue-800";
      case "Hired":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Manage Applicants</h2>
        <div className="flex items-center space-x-2">
          <select 
            className="p-2 border border-gray-300 rounded text-sm"
            onChange={(e) => {
              if (e.target.value === "all") {
                setApplicants(initialApplicants);
              } else {
                setApplicants(initialApplicants.filter(a => a.status === e.target.value));
              }
            }}
            defaultValue="all"
          >
            <option value="all">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Interview">Interview</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Applied Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applicants.map((applicant) => (
              <>
                <TableRow key={applicant.id}>
                  <TableCell className="font-medium">{applicant.name}</TableCell>
                  <TableCell>{applicant.position}</TableCell>
                  <TableCell>{applicant.appliedDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(applicant.status)}`}>
                      {applicant.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => handleSendEmail(applicant.email)}>
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleViewDetails(applicant.id)}>
                        <ChevronRight className={`h-4 w-4 transition-transform ${selectedApplicant === applicant.id ? 'rotate-90' : ''}`} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                {selectedApplicant === applicant.id && (
                  <TableRow>
                    <TableCell colSpan={5} className="bg-gray-50 p-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Full Name</p>
                            <p>{applicant.name}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <p>{applicant.email}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Position</p>
                            <p>{applicant.position}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Applied Date</p>
                            <p>{applicant.appliedDate}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            View Resume
                          </Button>
                        </div>

                        <div className="border-t pt-4">
                          <p className="text-sm font-medium mb-2">Update Application Status</p>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleUpdateStatus(applicant.id, "Pending")}
                              className={applicant.status === "Pending" ? "bg-yellow-100" : ""}
                            >
                              Pending
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleUpdateStatus(applicant.id, "Interview")}
                              className={applicant.status === "Interview" ? "bg-blue-100" : ""}
                            >
                              Interview
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleUpdateStatus(applicant.id, "Hired")}
                              className={applicant.status === "Hired" ? "bg-green-100" : ""}
                            >
                              <Check className="mr-1 h-3 w-3" />
                              Hired
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleUpdateStatus(applicant.id, "Rejected")}
                              className={applicant.status === "Rejected" ? "bg-red-100" : ""}
                            >
                              <X className="mr-1 h-3 w-3" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminApplicantsSection;
