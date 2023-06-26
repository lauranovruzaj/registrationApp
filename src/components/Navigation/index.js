import React, { useContext } from "react";
import { StepContext } from "../../App";
import styles from "./index.module.css";

const Navigation = () => {
  const stepContext = useContext(StepContext);
  const { step, setStep } = stepContext;

  const handleClick = () => {
    setStep(step - 1);
  };

  return (
    <div className={styles.topNavigation}>
      {step != 1 && step != 4 && (
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z" />
          </svg>
        </button>
      )}
      <span>Registrazione</span>
    </div>
  );
};

export default Navigation;
