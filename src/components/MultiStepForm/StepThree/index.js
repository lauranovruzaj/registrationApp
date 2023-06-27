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
        <button onClick={handleSubmit}>
          Registrati
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default StepThree;
