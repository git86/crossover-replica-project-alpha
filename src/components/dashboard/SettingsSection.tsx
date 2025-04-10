
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Shield, Eye, EyeOff, LogOut } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface SettingsSectionProps {
  onSignOut: () => void;
}

const SettingsSection = ({ onSignOut }: SettingsSectionProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  // Notification preferences
  const [notifications, setNotifications] = useState({
    jobAlerts: true,
    applicationUpdates: true,
    messages: true,
    marketing: false
  });
  
  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleUpdatePassword = () => {
    // Mock implementation
    toast.success("Password updated successfully");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmed) {
      toast.success("Account deletion requested");
      // In a real app, we would make an API call to delete the account
      // For now, just sign out
      setTimeout(() => {
        onSignOut();
        navigate("/");
      }, 1500);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
      
      {/* Account Settings */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-crossover-blue" />
          Account Security
        </h3>
        
        <div className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input id="email" type="email" value="john.doe@example.com" readOnly />
            <p className="mt-1 text-sm text-gray-500">
              Your email is used for login and notifications
            </p>
          </div>
          
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Change Password
            </label>
            <div className="space-y-3">
              <div className="relative">
                <Input 
                  id="current-password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Current password" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              <Input 
                id="new-password" 
                type={showPassword ? "text" : "password"}
                placeholder="New password" 
              />
              <Input 
                id="confirm-password" 
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password" 
              />
            </div>
          </div>
          
          <Button className="w-full sm:w-auto" onClick={handleUpdatePassword}>
            Update Password
          </Button>
        </div>
      </div>
      
      {/* Notification Settings */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5 text-crossover-blue" />
          Notification Preferences
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Job Alerts</h4>
              <p className="text-sm text-gray-500">Receive notifications about new job opportunities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.jobAlerts}
                onChange={() => handleNotificationChange('jobAlerts')}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crossover-blue"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Application Updates</h4>
              <p className="text-sm text-gray-500">Receive updates on your application status</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.applicationUpdates}
                onChange={() => handleNotificationChange('applicationUpdates')}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crossover-blue"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Messages</h4>
              <p className="text-sm text-gray-500">Receive notifications about new messages</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.messages}
                onChange={() => handleNotificationChange('messages')}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crossover-blue"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Marketing Communications</h4>
              <p className="text-sm text-gray-500">Receive updates about new features and promotions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.marketing}
                onChange={() => handleNotificationChange('marketing')}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crossover-blue"></div>
            </label>
          </div>
        </div>
      </div>
      
      {/* Account Management */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <LogOut className="w-5 h-5 text-crossover-blue" />
          Account Management
        </h3>
        
        <div className="space-y-4">
          <Button 
            variant="outline" 
            onClick={onSignOut}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
      
      {/* Danger Zone */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
        <div className="border border-red-200 rounded-lg p-4 bg-red-50">
          <h4 className="font-medium mb-2">Delete Account</h4>
          <p className="text-sm text-gray-600 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="destructive" onClick={handleDeleteAccount}>Delete My Account</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
