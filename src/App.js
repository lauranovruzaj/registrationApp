import React, { useState } from "react";
import MultiStepForm from "./components/MultiStepForm";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";

export const StepContext = React.createContext();

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  return (
    <div className="wrapper">
      <StepContext.Provider
        value={{
          step,
          setStep,
          formData,
          setFormData,
        }}
      >
        <Navigation />
        <ProgressBar />
        <MultiStepForm />
      </StepContext.Provider>
    </div>
  );
};

export default App;
