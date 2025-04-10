
import { useState } from "react";
import { Calendar, Clock, User, Check, X, Video, Phone } from "lucide-react";
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

// Sample interview data
const initialInterviews = [
  {
    id: "1",
    candidateName: "John Doe",
    position: "Senior Frontend Developer",
    date: "2025-04-15",
    time: "10:00 AM",
    type: "Video Call",
    status: "Scheduled",
  },
  {
    id: "2",
    candidateName: "Jane Smith",
    position: "Backend Engineer",
    date: "2025-04-16",
    time: "11:30 AM",
    type: "Phone Call",
    status: "Scheduled",
  },
  {
    id: "3",
    candidateName: "Mike Johnson",
    position: "UI/UX Designer",
    date: "2025-04-10",
    time: "2:00 PM",
    type: "Video Call",
    status: "Completed",
  },
  {
    id: "4",
    candidateName: "Sara Williams",
    position: "Frontend Developer",
    date: "2025-04-12",
    time: "9:30 AM",
    type: "Video Call",
    status: "Canceled",
  },
];

const AdminInterviewsSection = () => {
  const [interviews, setInterviews] = useState(initialInterviews);
  const [isAddingInterview, setIsAddingInterview] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  
  // New interview form state
  const [newInterview, setNewInterview] = useState({
    candidateName: "",
    position: "",
    date: "",
    time: "",
    type: "Video Call",
  });

  const handleAddInterview = () => {
    if (!newInterview.candidateName || !newInterview.position || !newInterview.date || !newInterview.time) {
      toast.error("Please fill in all required fields");
      return;
    }

    const interview = {
      id: Date.now().toString(),
      candidateName: newInterview.candidateName,
      position: newInterview.position,
      date: newInterview.date,
      time: newInterview.time,
      type: newInterview.type,
      status: "Scheduled",
    };

    setInterviews([interview, ...interviews]);
    setNewInterview({
      candidateName: "",
      position: "",
      date: "",
      time: "",
      type: "Video Call",
    });
    setIsAddingInterview(false);
    toast.success("Interview scheduled successfully");
  };

  const handleUpdateStatus = (id: string, newStatus: string) => {
    setInterviews(
      interviews.map(interview => 
        interview.id === id ? { ...interview, status: newStatus } : interview
      )
    );
    toast.success(`Interview status updated to ${newStatus}`);
  };

  const handleFilterByDate = (date: string) => {
    setSelectedDate(date);
  };

  const filteredInterviews = selectedDate 
    ? interviews.filter(interview => interview.date === selectedDate)
    : interviews;

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getInterviewTypeIcon = (type: string) => {
    return type === "Video Call" ? <Video className="h-4 w-4" /> : <Phone className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Manage Interviews</h2>
        <Button onClick={() => setIsAddingInterview(!isAddingInterview)}>
          Schedule New Interview
        </Button>
      </div>

      {isAddingInterview && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <h3 className="text-lg font-medium mb-4">Schedule New Interview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Candidate Name*
              </label>
              <input
                type="text"
                value={newInterview.candidateName}
                onChange={(e) => setNewInterview({ ...newInterview, candidateName: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position*
              </label>
              <input
                type="text"
                value={newInterview.position}
                onChange={(e) => setNewInterview({ ...newInterview, position: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="e.g. Frontend Developer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date*
              </label>
              <input
                type="date"
                value={newInterview.date}
                onChange={(e) => setNewInterview({ ...newInterview, date: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time*
              </label>
              <input
                type="time"
                value={newInterview.time}
                onChange={(e) => setNewInterview({ ...newInterview, time: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interview Type
              </label>
              <select
                value={newInterview.type}
                onChange={(e) => setNewInterview({ ...newInterview, type: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="Video Call">Video Call</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsAddingInterview(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddInterview}>Schedule Interview</Button>
          </div>
        </div>
      )}

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">Filter by date:</span>
        </div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleFilterByDate(e.target.value)}
          className="p-2 border border-gray-300 rounded text-sm"
        />
        {selectedDate && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSelectedDate("")}
            className="text-xs"
          >
            Clear Filter
          </Button>
        )}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInterviews.map((interview) => (
              <TableRow key={interview.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-gray-400" />
                    {interview.candidateName}
                  </div>
                </TableCell>
                <TableCell>{interview.position}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3 text-gray-400" />
                      {interview.date}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <Clock className="mr-1 h-3 w-3" />
                      {interview.time}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {getInterviewTypeIcon(interview.type)}
                    <span className="ml-1">{interview.type}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(interview.status)}`}>
                    {interview.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    {interview.status === "Scheduled" && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-green-600"
                          onClick={() => handleUpdateStatus(interview.id, "Completed")}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="text-red-600"
                          onClick={() => handleUpdateStatus(interview.id, "Canceled")}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {interview.status === "Completed" && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-xs"
                      >
                        View Notes
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredInterviews.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No interviews found for the selected criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminInterviewsSection;
