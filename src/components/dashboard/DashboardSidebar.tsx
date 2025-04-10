
import { UserCircle, FileText, MessageSquare, Bookmark, Settings, LogOut, Briefcase, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onSignOut: () => void;
  isAdmin?: boolean;
}

const DashboardSidebar = ({ activeSection, setActiveSection, onSignOut, isAdmin = false }: DashboardSidebarProps) => {
  // Menu items for regular users
  const userMenuItems = [
    { id: "profile", label: "My Profile", icon: <UserCircle /> },
    { id: "applications", label: "Applications", icon: <FileText /> },
    { id: "messages", label: "Messages", icon: <MessageSquare /> },
    { id: "saved", label: "Saved Jobs", icon: <Bookmark /> },
    { id: "settings", label: "Settings", icon: <Settings /> },
  ];

  // Menu items for admin users
  const adminMenuItems = [
    { id: "profile", label: "My Profile", icon: <UserCircle /> },
    { id: "manage-jobs", label: "Manage Jobs", icon: <Briefcase /> },
    { id: "manage-applicants", label: "Manage Applicants", icon: <Users /> },
    { id: "manage-interviews", label: "Manage Interviews", icon: <Calendar /> },
    { id: "settings", label: "Settings", icon: <Settings /> },
  ];

  // Use different menu items based on user role
  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-colors ${
              activeSection === item.id
                ? "bg-blue-50 text-crossover-blue font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
        
        <div className="pt-6 mt-6 border-t">
          <Button 
            variant="outline" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={onSignOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
