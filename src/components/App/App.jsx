import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import { fetchContacts } from "../../redux/contactsOps";

import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBox />
      {loading && <b>Please wait..</b>}
      {error && <b>An error occured, please reload</b>}
      {contacts.length > 0 && !error && <ContactList />}
    </>
  );
}

export default App;
