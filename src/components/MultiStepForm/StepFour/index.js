import React from "react";
import confirmation from "./confirmation.png";

const StepFour = () => {
  return (
    <>
      <h1>Registrazione avvenuta!</h1>
      <p>Hai completato con successo la registrazione e aperto il tuo conto</p>
      <img src={confirmation} className="confirmation-image" />
      <button type="submit">Chiudi</button>
    </>
  );
};

export default StepFour;
