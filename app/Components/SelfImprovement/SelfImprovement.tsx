// export const SelfImprovement=()=>{
//     return (
//         <ul className="steps steps-vertical">
//   <li className="step step-primary">Register</li>
//   <li className="step step-primary">Choose plan</li>
//   <li className="step">Purchase</li>
//   <li className="step">Receive Product</li>
// </ul>
//     )
// }
'use client'
import React, { useState } from 'react';

const StepProgressBar = ({ steps }:any) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <div>
        {Array.from({ length: steps }).map((_, index) => (
          <div 
            key={index}
            className={`step ${index + 1 === currentStep ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button onClick={prevStep} disabled={currentStep === 1}>Previous</button>
      <button onClick={nextStep} disabled={currentStep === steps}>Next</button>
    </div>
  );
};

export default StepProgressBar;
