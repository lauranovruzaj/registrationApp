import React, { useContext, useState, useRef } from "react";
import { generalInfo } from "../../../schemas/user";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, ErrorMessage } from "formik";
import { StepContext } from "../../../App";

const StepOne = ({ onNextStep }) => {
  const stepContext = useContext(StepContext);
  const { formData } = stepContext;

  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleSubmit = (values) => {
    console.log(values);
    onNextStep(values);
  };

  const prefixOptions = [
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+61", label: "+61" },
    // Add more prefix options as needed
  ];

  const countries = [
    { value: "Albania", label: "Albania" },
    { value: "Italy", label: "Italy" },
    { value: "USA", label: "USA" },
    { value: "England", label: "England" },
    { value: "Turkey", label: "Turkey" },
    // Add more prefix options as needed
  ];

  return (
    <>
      <h1>Inserici i tuoi dati</h1>
      <Formik
        initialValues={{
          name: formData.name != undefined ? formData.name : "",
          surname: formData.surname != undefined ? formData.surname : "",
          phone: formData.phone != undefined ? formData.phone : "",
          birthday: formData.birthday != undefined ? formData.birthday : null,
          nationality:
            formData.nationality != undefined ? formData.nationality : "",
          prefix: formData.prefix != undefined ? formData.prefix : "",
        }}
        validationSchema={generalInfo}
        onSubmit={handleSubmit}
      >
        {({
          values,
          setFieldValue,
          handleSubmit,
          isSubmitting,
          dirty,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-field-wrap">
              <Field type="text" name="name" placeholder="Nome" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field-wrap">
              <Field type="text" name="surname" placeholder="Cognome" />
              <ErrorMessage
                name="surname"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-field-wrap prefix">
              <Field name="prefix" as="select">
                {prefixOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            </div>

            <div className="form-field-wrap">
              <Field
                type="text"
                name="phone"
                placeholder="Numero di telefono"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field-wrap">
              <DatePicker
                name="birthday"
                id="birthday"
                selected={values.birthday}
                onChange={(birthday) => setFieldValue("birthday", birthday)}
                ref={datePickerRef}
                dateFormat="dd/MM/yyyy"
                placeholderText="Data di nascita"
                shouldCloseOnSelect={false}
              >
                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    setSelectedDate(null);
                    setFieldValue("birthday", selectedDate);
                  }}
                >
                  Anulla
                </button>
                <button
                  type="button"
                  className="add"
                  onClick={() => {
                    if (datePickerRef.current) {
                      datePickerRef.current.setOpen(false);
                    }
                  }}
                >
                  Applica
                </button>
              </DatePicker>
              <ErrorMessage
                name="birthday"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field-wrap">
              <Field
                type="text"
                name="nationality"
                as="select"
                placeholder="Nazione di nascita"
              >
                <option value="">Nazione di nascita</option>
                {countries.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="nationality"
                component="div"
                className="error-message"
              />
            </div>

            <button
              type="submit"
              disabled={!(dirty && isValid) || isSubmitting}
            >
              Continue
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default StepOne;
