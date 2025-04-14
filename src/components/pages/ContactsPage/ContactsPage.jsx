import css from "./ContactsPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../../redux/contacts/selectors";
import Contact from "./Contact/Contact";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";
import { fetchContacts } from "../../../redux/contacts/operations";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
//   console.log("contacts", contacts);
  return (
    <>
      <ContactForm></ContactForm>
      <ul className={css.contactsList}>
        {contacts.map((person) => (
          <Contact key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
};
