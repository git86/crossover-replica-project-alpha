
// Custom type definitions for our application

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary_range: string;
  description: string;
  category: string;
  tags: string[];
  status: string;
  posted_date: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
  title: string | null;
  location: string | null;
  phone: string | null;
  about: string | null;
  skills: string[] | null;
  experience: Experience[] | null;
  education: Education[] | null;
  created_at: string;
  updated_at: string;
  selfie_verification: string | null;
  passport_verification: string | null;
  verification_status: string | null;
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Application {
  id: string;
  user_id: string;
  job_id: string;
  status: string;
  applied_date: string;
  created_at: string;
  updated_at: string;
}

export interface SavedJob {
  id: string;
  user_id: string;
  job_id: string;
  created_at: string;
}
