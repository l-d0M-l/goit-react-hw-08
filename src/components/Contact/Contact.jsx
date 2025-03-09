import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
function Contact({ person, onDelete }) {
  //   console.log(person);
  return (
    <li className={css.card}>
      <ul className={css.namesList}>
        <li>
          <IoPersonCircle className={css.icon} size="16" />
          {person.name}
        </li>
        <li>
          <FaPhoneAlt className={css.icon} size="14" />
          {person.number}
        </li>
      </ul>
      <button onClick={() => onDelete(person.id)}>Delete</button>
    </li>
  );
}

export default Contact;
