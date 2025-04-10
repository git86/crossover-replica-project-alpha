
import { UserCircle, FileText, MessageSquare, Bookmark, Settings } from "lucide-react";

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onSignOut: () => void;
}

const DashboardSidebar = ({ activeSection, setActiveSection, onSignOut }: DashboardSidebarProps) => {
  const menuItems = [
    { id: "profile", label: "My Profile", icon: <UserCircle /> },
    { id: "applications", label: "Applications", icon: <FileText /> },
    { id: "messages", label: "Messages", icon: <MessageSquare /> },
    { id: "saved", label: "Saved Jobs", icon: <Bookmark /> },
    { id: "settings", label: "Settings", icon: <Settings /> },
  ];

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
      </div>
    </div>
  );
};

export default DashboardSidebar;
