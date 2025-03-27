import { ErrorMessage, Field } from "formik";
import React from "react";
import { Form, Formik } from "formik";

function StudentRegistrationForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    course: "",
    terms: false,
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Full Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/) {
      errors.phone = "Invalid Phone number";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!values.course) {
      errors.course = "Select a course";
    }

    if (!values.terms) {
      errors.terms = "Please agree to terms & Conditions";
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    alert("Form submitted Successfully!");
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
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
            <label>Phone: </label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <div>
            <label>Password: </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label>Confirm Password: </label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <div>
            <label>Course: </label>
            <Field as="select" name="course">
              <option value="">Select</option>
              <option value="Web Development">Web Development</option>
              <option value="AI">AI</option>
              <option value="Data Science">Data Science</option>
            </Field>
            <ErrorMessage name="course" component="div" className="error" />
          </div>

          <div>
            <Field type="checkbox" name="terms" />
            I agree to the terms & Conditions
            <ErrorMessage name="terms" component="div" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default StudentRegistrationForm;