import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

function ContactForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(addContact(values));

    actions.resetForm();
  }

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "To short")
      .max(50, "Too long")
      .required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field
              type="text"
              className={css.input}
              name="name"
              autoComplete="off"
            ></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label}>
            Number
            <Field
              type="text"
              className={css.input}
              name="number"
              autoComplete="off"
            ></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
