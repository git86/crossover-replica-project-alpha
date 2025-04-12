
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepIndicator from "@/components/auth/StepIndicator";
import BasicInfoForm from "@/components/auth/BasicInfoForm";
import VerificationForm from "@/components/auth/VerificationForm";
import { useSignUp } from "@/hooks/useSignUp";

const SignUp = () => {
  const {
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
  } = useSignUp();

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
            <StepIndicator 
              currentStep={step} 
              totalSteps={2} 
              labels={["Basic Info", "Verification"]} 
            />

            {step === 1 ? (
              <BasicInfoForm 
                formData={formData}
                onInputChange={handleInputChange}
                onContinue={handleNextStep}
                isLoading={isLoading}
                termsAccepted={termsAccepted}
                onTermsChange={setTermsAccepted}
                onSocialSignUp={handleSocialSignUp}
              />
            ) : (
              <VerificationForm 
                selfiePreview={selfiePreview}
                passportPreview={passportPreview}
                onFileChange={handleFileChange}
                onPrevious={handlePreviousStep}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
