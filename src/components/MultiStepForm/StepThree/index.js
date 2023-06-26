import React, { useContext } from "react";
import { StepContext } from "../../../App";
import styles from "./index.module.css";

const StepThree = ({ formData }) => {
  const stepContext = useContext(StepContext);
  const { step, setStep } = stepContext;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("https://649753bb83d4c69925a39898.mockapi.io/registration/v1/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        nome: formData.name,
        cognome: formData.surname,
        datadinacita: formData.birthday.toDateString(),
        nazione: formData.nationality,
        email: formData.email,
        password: formData.password,
        telefono: `${formData.prefix}${formData.phone}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStep(step + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Riepilogo</h1>
      <div className={styles.generalInfo}>
        <div className={styles.top}>
          <p>Dati Personali</p>
          <button
            onClick={() => {
              setStep(1);
            }}
          >
            Modifica
          </button>
        </div>
        <div className={styles.data}>
          <p>Nome: {formData.name}</p>
          <p>Cognome: {formData.surname}</p>
          <p>
            Numero di telefono: {formData.prefix}
            {formData.phone}
          </p>
          <p>Data di nascita: {formData.birthday.toDateString()}</p>
          <p>Nazione di nascita: {formData.nationality}</p>
        </div>
      </div>
      <div className={styles.authInfo}>
        <div className={styles.top}>
          <p>Dati di accesso</p>
          <button
            onClick={() => {
              setStep(2);
            }}
          >
            Modifica
          </button>
        </div>
        <div className={styles.data}>
          <p>Email: {formData.email}</p>
          <p>Password: ***</p>
        </div>
      </div>
      <div className={styles.bottomPosition}>
        <p className={styles.privacyPolicy}>
          This site is protected by recaptcha and the Google <br />
          <a href="/">Privacy Policy</a> and <a href="">Terms of service </a>
          apply
        </p>
        <button onClick={handleSubmit}>Registrati</button>
      </div>
    </>
  );
};

export default StepThree;
