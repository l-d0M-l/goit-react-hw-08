import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {
  const visbleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactsList}>
        {visbleContacts.map((person) => (
          <Contact key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
