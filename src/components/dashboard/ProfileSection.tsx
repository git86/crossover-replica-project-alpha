
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, CheckCircle } from "lucide-react";

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Software Engineer",
    about: "Experienced software engineer with over 8 years of expertise in web development, specializing in React and TypeScript. Passionate about creating clean, efficient, and scalable code.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "GraphQL"],
    experience: [
      {
        company: "Tech Solutions Inc.",
        title: "Senior Software Engineer",
        period: "2020 - Present",
        description: "Led development of multiple web applications using React and TypeScript."
      },
      {
        company: "Digital Innovations",
        title: "Software Engineer",
        period: "2018 - 2020",
        description: "Worked on front-end development using Angular and React."
      }
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "M.S. Computer Science",
        year: "2018"
      },
      {
        institution: "University of California",
        degree: "B.S. Computer Science",
        year: "2016"
      }
    ]
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the profile data to a backend
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
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="font-bold text-lg"
                />
                <Input 
                  value={profile.title} 
                  onChange={(e) => setProfile({...profile, title: e.target.value})}
                />
                <Input 
                  value={profile.location} 
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
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
                onChange={(e) => setProfile({...profile, email: e.target.value})}
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
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
              />
            ) : (
              <p>{profile.phone}</p>
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
            onChange={(e) => setProfile({...profile, about: e.target.value})}
            className="w-full p-2 border rounded-md"
            rows={4}
          />
        ) : (
          <p className="text-gray-700">{profile.about}</p>
        )}
      </div>

      {/* Skills */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span key={index} className="bg-blue-50 text-crossover-blue px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-semibold mb-4">Experience</h3>
        <div className="space-y-4">
          {profile.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <h4 className="font-semibold">{exp.title}</h4>
              <p className="text-crossover-blue">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.period}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Education</h3>
        <div className="space-y-4">
          {profile.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-crossover-blue">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
