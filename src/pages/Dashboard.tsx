
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ProfileSection from "@/components/dashboard/ProfileSection";
import ApplicationsSection from "@/components/dashboard/ApplicationsSection";
import MessagesSection from "@/components/dashboard/MessagesSection";
import SavedJobsSection from "@/components/dashboard/SavedJobsSection";
import SettingsSection from "@/components/dashboard/SettingsSection";
import { toast } from "sonner";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem("currentUser");
    
    if (!currentUser) {
      toast.error("Please sign in to access the dashboard");
      navigate("/sign-in");
      return;
    }
    
    try {
      // Parse user data
      const userData = JSON.parse(currentUser);
      setUser(userData);
    } catch (error) {
      // If error parsing user data, redirect to sign in
      localStorage.removeItem("currentUser");
      toast.error("Session expired. Please sign in again");
      navigate("/sign-in");
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    toast.success("Signed out successfully");
    navigate("/sign-in");
  };

  const renderSection = () => {
    if (isLoading) {
      return <div className="flex justify-center items-center h-64">Loading...</div>;
    }
    
    switch (activeSection) {
      case "profile":
        return <ProfileSection user={user} setUser={setUser} />;
      case "applications":
        return <ApplicationsSection userId={user?.id} />;
      case "messages":
        return <MessagesSection userId={user?.id} />;
      case "saved":
        return <SavedJobsSection userId={user?.id} />;
      case "settings":
        return <SettingsSection onSignOut={handleSignOut} />;
      default:
        return <ProfileSection user={user} setUser={setUser} />;
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="container-custom py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Applicant Dashboard</h1>
            <div className="text-sm text-gray-500">
              Welcome back, <span className="font-semibold">{user?.fullName}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <DashboardSidebar 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
              onSignOut={handleSignOut}
            />
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow p-6">
                {renderSection()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
