import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  //   contacts.map((element) => {
  //     console.log(element);
  //   });
  const contactsNew = useSelector((state) => state.contacts.items);
  // console.log(contactsNew);
  const filterValue = useSelector((state) => state.filter.name);
  let visbleContacts = contactsNew.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <>
      {/* <Contact></Contact> */}
      <ul className={css.contactsList}>
        {visbleContacts.map((person) => (
          <Contact key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
