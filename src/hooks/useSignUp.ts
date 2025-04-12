
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const useSignUp = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [verificationData, setVerificationData] = useState({
    selfie: null as File | null,
    passportPhoto: null as File | null,
  });
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);
  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'selfie' | 'passportPhoto') => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Update verification data
      setVerificationData(prev => ({
        ...prev,
        [type]: file
      }));
      
      // Create and set preview URL
      const previewUrl = URL.createObjectURL(file);
      if (type === 'selfie') {
        setSelfiePreview(previewUrl);
      } else {
        setPassportPreview(previewUrl);
      }
    }
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate verification uploads
    if (!verificationData.selfie || !verificationData.passportPhoto) {
      toast.error("Please upload both required verification photos");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Step 1: Register the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      });

      if (authError) {
        throw new Error(authError.message);
      }

      if (!authData.user) {
        throw new Error("Failed to create user account");
      }

      // Step 2: Upload verification photos to Supabase Storage
      let selfieUrl = null;
      let passportUrl = null;

      if (verificationData.selfie) {
        const selfieFileName = `verification/${authData.user.id}/selfie-${Date.now()}`;
        const { data: selfieData, error: selfieError } = await supabase.storage
          .from('verifications')
          .upload(selfieFileName, verificationData.selfie);
        
        if (selfieError) {
          console.error("Error uploading selfie:", selfieError);
        } else {
          selfieUrl = selfieData.path;
        }
      }

      if (verificationData.passportPhoto) {
        const passportFileName = `verification/${authData.user.id}/passport-${Date.now()}`;
        const { data: passportData, error: passportError } = await supabase.storage
          .from('verifications')
          .upload(passportFileName, verificationData.passportPhoto);
        
        if (passportError) {
          console.error("Error uploading passport photo:", passportError);
        } else {
          passportUrl = passportData.path;
        }
      }

      // Step 3: Update the user's profile with verification details
      const { error: updateError } = await supabase.rpc('update_profile_verification', {
        user_id: authData.user.id,
        selfie_path: selfieUrl,
        passport_path: passportUrl,
        verification_status: 'pending'
      });

      if (updateError) {
        console.error("Error updating profile with verification details:", updateError);
        // Still proceed even if verification update fails
      }

      toast.success("Account created successfully! Your verification is pending review.");
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error((error as Error).message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        throw error;
      }
      // The redirect is handled by Supabase
    } catch (error) {
      console.error(`${provider} sign up error:`, error);
      toast.error(`Failed to sign up with ${provider}`);
      setIsLoading(false);
    }
  };

  return {
    step,
    formData,
    isLoading,
    termsAccepted,
    selfiePreview,
    passportPreview,
    handleInputChange,
    handleFileChange,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
    handleSocialSignUp,
    setTermsAccepted
  };
};
