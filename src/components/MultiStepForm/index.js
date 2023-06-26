import React, { useState, useContext } from "react";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import { StepContext } from "../../App";
import StepFour from "./StepFour";

const MultiStepForm = () => {
  const stepContext = useContext(StepContext);
  const { step, setStep, formData, setFormData } = stepContext;
  // const [formData, setFormData] = useState({});

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne onNextStep={handleNextStep} />;
      case 2:
        return <StepTwo onNextStep={handleNextStep} />;
      case 3:
        return <StepThree formData={formData} />;

      case 4:
        return <StepFour />;
      default:
        return null;
    }
  };

  return <div className="multiStepForm">{renderStep()}</div>;
};

export default MultiStepForm;
