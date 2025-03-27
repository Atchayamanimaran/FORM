import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik, Form } from "formik";

function EmployeeFeedbackForm(props) {
  const initialValues = {
    name: "",
    email: "",
    rating: "",
    department: "",
    feedback: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    department: Yup.string().required("Department is required"),
    rating: Yup.number()
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5")
      .required("Rating is required"),
    feedback: Yup.string().max(100, "Feedback should be under 100 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <h2>Employee Feedback Form</h2>
            <div>
              <label>Full Name: </label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label>Email: </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label>Rating: </label>
              <Field type="number" name="rating" />
              <ErrorMessage name="rating" component="div" className="error" />
            </div>
            <div>
              <label>Department: </label>
              <Field as="select" name="department">
                <option value="">Select</option>
                <option value="IT">IT</option>
                <option value="CSE">CSE</option>
                <option value="AIDS">AIDS</option>
                <option value="AIML">AIML</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
              </Field>
              <ErrorMessage name="department" component="div" className="error" />
            </div>
            <div>
              <label>Feedback: </label>
              <Field as="textarea" name="feedback" />
              <ErrorMessage name="feedback" component="div" className="error" />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmployeeFeedbackForm;