
import { FC } from "react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

const StepIndicator: FC<StepIndicatorProps> = ({ currentStep, totalSteps, labels }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {labels.map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {index + 1}
            </div>
            <span className="text-xs mt-1">{label}</span>
          </div>
        ))}
        {totalSteps > 1 && Array.from({ length: totalSteps - 1 }).map((_, index) => (
          <div 
            key={`line-${index}`}
            className={`flex-1 h-1 mx-2 ${
              currentStep > index + 1 ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
