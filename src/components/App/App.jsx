import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";

import ContactList from "../ContactList/ContactList";

import SearchBox from "../SearchBox/SearchBox";
function App() {
  // const [contacts, setContacts] = useState(() => {
  //   //check if contacts are in localStorage
  //   const savedContants = localStorage.getItem("contacts");
  //   if (savedContants) {
  //     return JSON.parse(savedContants);
  //   }
  //   //if nothing in local storage, then initiate as standart
  //   return [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ];
  // });
  
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
  
  // const [filter, setFilter] = useState("");
  // function addPerson(newPerson) {
  //   setContacts((previousPeople) => {
  //     return [...previousPeople, { ...newPerson, id: nanoid() }];
  //   });
  // }
  // function deletePerson(personId) {
  //   setContacts((previousPeople) => {
  //     return previousPeople.filter((person) => person.id !== personId);
  //   });
  // }
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBox />

      <ContactList></ContactList>
    </>
  );
}

export default App;
