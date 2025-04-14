import css from "./RegistartionForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../../../redux/auth/operations";
export const RegistartionForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    dispatch(register(values));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.signupForm}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" className={css.formInput} />
        <ErrorMessage
          name="name"
          component="div"
          className={css.errorMessage}
        />

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
          Submit
        </button>
      </Form>
    </Formik>
  );
};
