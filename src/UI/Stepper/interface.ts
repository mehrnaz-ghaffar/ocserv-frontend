export interface Step {
  name: string; // Name of the step
  component: React.ReactNode; // Component to render for this step
}

export interface StepperProps {
  steps: Step[]; // Array of steps
  nextButtonStyle?: string; // Custom style for the next button
  previousButtonStyle?: string; // Custom style for the previous button
  stepCircleStyle?: string; // Custom style for the step circle
  stepLineStyle?: string; // Custom style for the step line
  stepNameStyle?: string; // Custom style for the step name
}
