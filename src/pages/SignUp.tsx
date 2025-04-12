import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User, Camera, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";

const SignUp = () => {
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
    // Validate form
    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    
    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      handleNextStep();
      return;
    }
    
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

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        throw error;
      }
      // The redirect is handled by Supabase
    } catch (error) {
      console.error("Google sign up error:", error);
      toast.error("Failed to sign up with Google");
      setIsLoading(false);
    }
  };

  const handleGitHubSignUp = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        throw error;
      }
      // The redirect is handled by Supabase
    } catch (error) {
      console.error("GitHub sign up error:", error);
      toast.error("Failed to sign up with GitHub");
      setIsLoading(false);
    }
  };

  const renderBasicInfoStep = () => (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
      <div className="space-y-1">
        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            id="fullName" 
            type="text" 
            placeholder="John Doe" 
            className="pl-10"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
            className="pl-10"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            id="password" 
            type={showPassword ? "text" : "password"} 
            placeholder="••••••••" 
            className="pl-10"
            value={formData.password}
            onChange={handleInputChange}
            required
            minLength={8}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Password must be at least 8 characters and include a number
        </p>
      </div>

      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          checked={termsAccepted}
          onChange={() => setTermsAccepted(!termsAccepted)}
          required
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the{" "}
          <Link to="/terms" className="text-blue-600 hover:text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
            Privacy Policy
          </Link>
        </label>
      </div>

      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700" 
        disabled={isLoading}
        type="submit"
      >
        Continue to Verification
      </Button>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign up with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            type="button"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleGitHubSignUp}
            disabled={isLoading}
            type="button"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </Button>
        </div>
      </div>
    </form>
  );

  const renderVerificationStep = () => (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Identity Verification</h2>
        <p className="text-sm text-gray-600">
          Please upload the required photos to verify your identity
        </p>
      </div>

      {/* Selfie Upload */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          Upload a Selfie
        </label>
        <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
          {selfiePreview ? (
            <div className="mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={selfiePreview} alt="Selfie preview" />
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <Camera className="h-12 w-12 text-gray-400 mb-2" />
          )}
          <p className="text-sm text-gray-500 mb-2">
            Take a clear photo of your face
          </p>
          <div className="relative">
            <input
              id="selfie-upload"
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange(e, 'selfie')}
              required={!selfiePreview}
            />
            <Button type="button" variant="outline" className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              {selfiePreview ? "Change Photo" : "Upload Selfie"}
            </Button>
          </div>
        </div>
      </div>

      {/* Passport Photo */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          Upload a Photo Holding Your Passport
        </label>
        <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
          {passportPreview ? (
            <div className="mb-4">
              <img 
                src={passportPreview} 
                alt="Passport verification preview" 
                className="max-h-40 rounded-md object-contain"
              />
            </div>
          ) : (
            <img 
              src="https://via.placeholder.com/200x150?text=You+holding+passport" 
              alt="Passport sample" 
              className="h-28 mb-2 rounded-md"
            />
          )}
          <p className="text-sm text-gray-500 mb-2">
            Take a photo of yourself holding your international passport with the photo page visible
          </p>
          <div className="relative">
            <input
              id="passport-upload"
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange(e, 'passportPhoto')}
              required={!passportPreview}
            />
            <Button type="button" variant="outline" className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              {passportPreview ? "Change Photo" : "Upload Passport Photo"}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button 
          type="button" 
          variant="outline" 
          className="flex-1"
          onClick={handlePreviousStep}
          disabled={isLoading}
        >
          Back
        </Button>
        <Button 
          type="submit" 
          className="flex-1 bg-blue-600 hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Complete Verification"}
        </Button>
      </div>

      <p className="mt-4 text-sm text-gray-600 text-center">
        Your information is secure and will only be used for verification purposes.
      </p>
    </form>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="container-custom max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2 text-gray-900">Create an Account</h1>
              <p className="text-gray-600">
                Join USS Agency to access global remote opportunities
              </p>
            </div>

            {/* Step indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    1
                  </div>
                  <span className="text-xs mt-1">Basic Info</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    2
                  </div>
                  <span className="text-xs mt-1">Verification</span>
                </div>
              </div>
            </div>

            {step === 1 ? renderBasicInfoStep() : renderVerificationStep()}

            {step === 1 && (
              <p className="mt-8 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
