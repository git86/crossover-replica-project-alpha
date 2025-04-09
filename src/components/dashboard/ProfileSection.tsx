
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface ProfileSectionProps {
  user: any;
  setUser: (user: any) => void;
}

const ProfileSection = ({ user, setUser }: ProfileSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    about: "",
    skills: [] as string[],
    experience: [] as any[],
    education: [] as any[]
  });

  // Initialize profile from user data or default values
  useEffect(() => {
    if (user) {
      // Load user profile from localStorage if it exists
      const savedProfile = localStorage.getItem(`profile_${user.id}`);
      
      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      } else {
        // Initialize with user data and defaults
        setProfile({
          name: user.fullName || "",
          email: user.email || "",
          phone: user.phone || "",
          location: user.location || "",
          title: user.title || "Job Seeker",
          about: user.about || "Tell us about yourself...",
          skills: user.skills || ["JavaScript", "React", "Web Development"],
          experience: user.experience || [
            {
              company: "Previous Company",
              title: "Job Title",
              period: "2020 - Present",
              description: "Describe your responsibilities and achievements."
            }
          ],
          education: user.education || [
            {
              institution: "University Name",
              degree: "Degree",
              year: "Graduation Year"
            }
          ]
        });
      }
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    
    try {
      // Save profile to localStorage
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(profile));
      
      // Update user object with profile changes
      const updatedUser = {
        ...user,
        fullName: profile.name,
        email: profile.email
      };
      
      // Update user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      
      // Update users array
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = users.map((u: any) => 
        u.id === user.id ? { ...u, fullName: profile.name, email: profile.email } : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      
      // Update parent component
      setUser(updatedUser);
      
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to save profile changes");
    }
  };

  const handleChange = (field: string, value: any) => {
    setProfile({
      ...profile,
      [field]: value
    });
  };

  const handleSkillAdd = () => {
    const newSkill = prompt("Enter new skill:");
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill]
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Profile</h2>
        {isEditing ? (
          <Button onClick={handleSave} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Save Changes
          </Button>
        ) : (
          <Button onClick={handleEdit} className="flex items-center gap-2">
            <Pencil className="w-4 h-4" />
            Edit Profile
          </Button>
        )}
      </div>

      {/* Basic Info */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-3xl font-bold">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            {isEditing ? (
              <div className="space-y-2">
                <Input 
                  value={profile.name} 
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="font-bold text-lg"
                />
                <Input 
                  value={profile.title} 
                  onChange={(e) => handleChange("title", e.target.value)}
                />
                <Input 
                  value={profile.location} 
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold">{profile.name}</h3>
                <p className="text-crossover-blue">{profile.title}</p>
                <p className="text-gray-600">{profile.location}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            {isEditing ? (
              <Input 
                value={profile.email} 
                onChange={(e) => handleChange("email", e.target.value)}
              />
            ) : (
              <p>{profile.email}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            {isEditing ? (
              <Input 
                value={profile.phone} 
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            ) : (
              <p>{profile.phone || "Not provided"}</p>
            )}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        {isEditing ? (
          <textarea 
            value={profile.about} 
            onChange={(e) => handleChange("about", e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={4}
          />
        ) : (
          <p className="text-gray-700">{profile.about}</p>
        )}
      </div>

      {/* Skills */}
      <div className="border-b pb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Skills</h3>
          {isEditing && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSkillAdd}
            >
              Add Skill
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span key={index} className="bg-blue-50 text-crossover-blue px-3 py-1 rounded-full text-sm">
              {skill}
              {isEditing && (
                <button 
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => {
                    const updatedSkills = [...profile.skills];
                    updatedSkills.splice(index, 1);
                    handleChange("skills", updatedSkills);
                  }}
                >
                  ×
                </button>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="border-b pb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Experience</h3>
          {isEditing && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const newExperience = {
                  company: "Company Name",
                  title: "Job Title",
                  period: "Start - End",
                  description: "Job Description"
                };
                handleChange("experience", [...profile.experience, newExperience]);
              }}
            >
              Add Experience
            </Button>
          )}
        </div>
        <div className="space-y-4">
          {profile.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              {isEditing ? (
                <div className="space-y-2">
                  <Input 
                    value={exp.title} 
                    onChange={(e) => {
                      const updated = [...profile.experience];
                      updated[index] = { ...exp, title: e.target.value };
                      handleChange("experience", updated);
                    }}
                    placeholder="Job Title"
                  />
                  <Input 
                    value={exp.company} 
                    onChange={(e) => {
                      const updated = [...profile.experience];
                      updated[index] = { ...exp, company: e.target.value };
                      handleChange("experience", updated);
                    }}
                    placeholder="Company"
                  />
                  <Input 
                    value={exp.period} 
                    onChange={(e) => {
                      const updated = [...profile.experience];
                      updated[index] = { ...exp, period: e.target.value };
                      handleChange("experience", updated);
                    }}
                    placeholder="Period (e.g., 2020 - Present)"
                  />
                  <textarea 
                    value={exp.description} 
                    onChange={(e) => {
                      const updated = [...profile.experience];
                      updated[index] = { ...exp, description: e.target.value };
                      handleChange("experience", updated);
                    }}
                    className="w-full p-2 border rounded-md"
                    rows={2}
                    placeholder="Description"
                  />
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => {
                      const updated = [...profile.experience];
                      updated.splice(index, 1);
                      handleChange("experience", updated);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <>
                  <h4 className="font-semibold">{exp.title}</h4>
                  <p className="text-crossover-blue">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Education</h3>
          {isEditing && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const newEducation = {
                  institution: "University Name",
                  degree: "Degree",
                  year: "Graduation Year"
                };
                handleChange("education", [...profile.education, newEducation]);
              }}
            >
              Add Education
            </Button>
          )}
        </div>
        <div className="space-y-4">
          {profile.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              {isEditing ? (
                <div className="space-y-2">
                  <Input 
                    value={edu.degree} 
                    onChange={(e) => {
                      const updated = [...profile.education];
                      updated[index] = { ...edu, degree: e.target.value };
                      handleChange("education", updated);
                    }}
                    placeholder="Degree"
                  />
                  <Input 
                    value={edu.institution} 
                    onChange={(e) => {
                      const updated = [...profile.education];
                      updated[index] = { ...edu, institution: e.target.value };
                      handleChange("education", updated);
                    }}
                    placeholder="Institution"
                  />
                  <Input 
                    value={edu.year} 
                    onChange={(e) => {
                      const updated = [...profile.education];
                      updated[index] = { ...edu, year: e.target.value };
                      handleChange("education", updated);
                    }}
                    placeholder="Year"
                  />
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => {
                      const updated = [...profile.education];
                      updated.splice(index, 1);
                      handleChange("education", updated);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-crossover-blue">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
