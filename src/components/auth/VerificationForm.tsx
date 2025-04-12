
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, Upload, User } from "lucide-react";

interface VerificationFormProps {
  selfiePreview: string | null;
  passportPreview: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>, type: 'selfie' | 'passportPhoto') => void;
  onPrevious: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const VerificationForm: React.FC<VerificationFormProps> = ({
  selfiePreview,
  passportPreview,
  onFileChange,
  onPrevious,
  onSubmit,
  isLoading
}) => {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
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
              onChange={(e) => onFileChange(e, 'selfie')}
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
              onChange={(e) => onFileChange(e, 'passportPhoto')}
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
          onClick={onPrevious}
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
};

export default VerificationForm;
