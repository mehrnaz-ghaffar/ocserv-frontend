import React, { useState } from "react";
import { StepperProps } from "./interface";

let defaultNextButtonStyle = "bg-blue-500 text-white hover:bg-blue-600";

let defaultPreviousButtonStyle = "bg-blue-500 text-white hover:bg-blue-600";

let defaultCircleStyle =
  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold";

let defaultLineStyle = "flex-1 h-1 mx-2";

let defaultNameStyle = "mt-2 text-sm";

export default function Stepper({
  steps,
  nextButtonStyle = defaultNextButtonStyle,
  previousButtonStyle = defaultPreviousButtonStyle,
  stepCircleStyle = defaultCircleStyle,
  stepLineStyle = defaultLineStyle,
  stepNameStyle = defaultNameStyle,
}: StepperProps) {
  // Manage the current step internally
  const [currentStep, setCurrentStep] = useState(0);

  // Handle next button click
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Handle previous button click
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Stepper UI */}
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Circle and Label */}
            <div className="flex flex-col items-center">
              <div
                className={`${stepCircleStyle} ${
                  index <= currentStep
                    ? "bg-blue-500 text-white" // Active or completed step
                    : "bg-gray-300 text-gray-600" // Inactive step
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`${stepNameStyle} ${
                  index <= currentStep ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
            </div>

            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div
                className={`${stepLineStyle} ${
                  index < currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Render the component for the current step */}
      <div className="mt-8">{steps[currentStep].component}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0} // Disable if on the first step
          className={`px-4 py-2 rounded ${
            currentStep === 0
              ? "bg-gray-300 cursor-not-allowed" // Disabled state
              : previousButtonStyle
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1} // Disable if on the last step
          className={`px-4 py-2 rounded ${
            currentStep === steps.length - 1
              ? "bg-gray-300 cursor-not-allowed" // Disabled state
              : nextButtonStyle
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
