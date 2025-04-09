
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ProfileSection from "@/components/dashboard/ProfileSection";
import ApplicationsSection from "@/components/dashboard/ApplicationsSection";
import MessagesSection from "@/components/dashboard/MessagesSection";
import SavedJobsSection from "@/components/dashboard/SavedJobsSection";
import SettingsSection from "@/components/dashboard/SettingsSection";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection />;
      case "applications":
        return <ApplicationsSection />;
      case "messages":
        return <MessagesSection />;
      case "saved":
        return <SavedJobsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="container-custom py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Applicant Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <DashboardSidebar 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
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
