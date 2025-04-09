import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsOps";
function Contact({ person }) {
  const dispatch = useDispatch();
  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteContact(person.id));
  }

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
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Contact;
