import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  //   contacts.map((element) => {
  //     console.log(element);
  //   });

  return (
    <>
      {/* <Contact></Contact> */}
      <ul className={css.contactsList}>
        {contacts.map((person) => (
          <Contact key={person.id} person={person} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
