import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const generalInfo = Yup.object().shape({
  name: Yup.string().required("Il nome è obbligatorio"),
  surname: Yup.string().required("Il cognome è obbligatorio"),
  phone: Yup.string()
    .matches(phoneRegExp, "Il numero di telefono non è valido")
    .required("Il numero di telefono è obbligatorio"),
  birthday: Yup.date()
    .required("Seleziona la tua data di nascita.")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "L'età deve essere maggiore di 18 anni"
    ),
  nationality: Yup.string().required("È richiesta la nazionalità"),
});

export const userAuth = Yup.object().shape({
  email: Yup.string()
    .email("Indirizzo email non valido")
    .required("L'e-mail è obbligatoria"),
  password: Yup.string()
    .required("Nessuna password fornita.")
    .min(8, "La password è troppo corta - deve contenere almeno 8 caratteri.")
    .matches(/[a-zA-Z]/, "La password può contenere solo lettere latine."),
});
