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
import AdminJobsSection from "@/components/dashboard/admin/AdminJobsSection";
import AdminApplicantsSection from "@/components/dashboard/admin/AdminApplicantsSection";
import AdminInterviewsSection from "@/components/dashboard/admin/AdminInterviewsSection";
import { toast } from "sonner";
import { useAuth } from "@/components/AuthProvider";

interface User {
  id: string;
  full_name: string | null;
  email: string | null;
  role?: string;
  profilePicture?: string | null;
  [key: string]: any; // Allow for additional properties
}

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { session, signOut } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!session) {
          // No session, redirect to sign in
          toast.error("Please sign in to access the dashboard");
          navigate("/sign-in");
          return;
        }

        // Fetch user data from localStorage or handle session refresh
        const currentUser = localStorage.getItem("currentUser");
        if (currentUser) {
          setUser(JSON.parse(currentUser));
        } else {
          toast.error("Unable to load user profile. Please sign in again.");
          await signOut();
          navigate("/sign-in");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        toast.error("Session expired. Please sign in again.");
        navigate("/sign-in");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate, session, signOut]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/sign-in");
  };

  const renderSection = () => {
    if (isLoading) {
      return <div className="flex justify-center items-center h-64">Loading...</div>;
    }

    const adminSections = {
      profile: <ProfileSection user={user} setUser={setUser} />,
      "manage-jobs": <AdminJobsSection />,
      "manage-applicants": <AdminApplicantsSection />,
      "manage-interviews": <AdminInterviewsSection />,
      settings: <SettingsSection onSignOut={handleSignOut} />,
    };

    const userSections = {
      profile: <ProfileSection user={user} setUser={setUser} />,
      applications: <ApplicationsSection />,
      messages: <MessagesSection />,
      saved: <SavedJobsSection />,
      settings: <SettingsSection onSignOut={handleSignOut} />,
    };

    return isAdmin(user) ? adminSections[activeSection] || adminSections.profile : userSections[activeSection] || userSections.profile;
  };

  const isAdmin = (user: User | null) => user?.role === "admin";

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="container-custom py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {isAdmin(user) ? "USS AGENCY Admin Dashboard" : "USS AGENCY Applicant Dashboard"}
            </h1>
            <div className="text-sm text-gray-500">
              Welcome back, <span className="font-semibold">{user?.full_name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <DashboardSidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              onSignOut={handleSignOut}
              isAdmin={isAdmin(user)}
            />

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow p-6">{renderSection()}</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;