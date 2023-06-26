import React, { useContext } from "react";
import { userAuth } from "../../../schemas/user";
import { Formik, Field, ErrorMessage } from "formik";
import { StepContext } from "../../../App";

const StepTwo = ({ onNextStep }) => {
  const stepContext = useContext(StepContext);
  const { formData } = stepContext;

  const handleSubmit = (values) => {
    console.log(values);
    onNextStep(values);
  };

  return (
    <>
      <h1>Inserici le credenciali di accesso</h1>
      <Formik
        initialValues={{
          email: formData.email != undefined ? formData.email : "",
          password: formData.password != undefined ? formData.password : "",
        }}
        validationSchema={userAuth}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, isSubmitting, dirty, isValid }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-field-wrap">
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field-wrap">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
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

export default StepTwo;
