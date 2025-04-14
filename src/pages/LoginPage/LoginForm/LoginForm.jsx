import css from "./LoginForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { login } from "../../../../redux/auth/operations";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // console.log("Form data:", values);
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.loginForm}>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" className={css.formInput} />
        <ErrorMessage
          name="email"
          component="div"
          className={css.errorMessage}
        />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" className={css.formInput} />
        <ErrorMessage
          name="password"
          component="div"
          className={css.errorMessage}
        />

        <button type="submit" className={css.submitButton}>
          Login
        </button>
      </Form>
    </Formik>
  );
};
