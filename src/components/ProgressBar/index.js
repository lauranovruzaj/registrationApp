import React, { useContext } from "react";
import styles from "./index.module.css";
import { StepContext } from "../../App";

const ProgressBar = () => {
  const stepContext = useContext(StepContext);
  const { step } = stepContext;

  return <div className={`${styles.progressBar}  step${step}`}></div>;
};

export default ProgressBar;
