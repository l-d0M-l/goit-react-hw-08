import css from "./ContactsPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import Contact from "./Contact/Contact";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "./SearchBox/SearchBox";
import { selectNameFilter } from "../../redux/filters/selectors";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    const nameIncl = contact.name.toLowerCase().includes(filter.toLowerCase());
    const phoneIncl = contact.number.includes(filter);
    if (nameIncl || phoneIncl) {
      return contact;
    }
  });

  return (
    <>
      <ContactForm></ContactForm>
      <SearchBox />
      {!loading && !error ? (
        <ul className={css.contactsList}>
          {filteredContacts.map((person) => (
            <Contact key={person.id} person={person} />
          ))}
        </ul>
      ) : (
        <p>Please wait..</p>
      )}
      {error && <p>Something went wrong, please try again</p>}
    </>
  );
};
