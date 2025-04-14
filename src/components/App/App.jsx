import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

// import { fetchContacts } from "../../redux/contacts/operations";

import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { refreshUser } from "../../redux/auth/operations";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { HomePage } from "../pages/HomePage/HomePage";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Phonebook</h1>
              <HomePage />
            </>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        ></Route>
        {/* <Route
          path="/contacts"
          element={<> {contacts.length > 0 && <ContactsPage />}</>}
        ></Route> */}
      </Routes>
    </>
  );
}

export default App;
