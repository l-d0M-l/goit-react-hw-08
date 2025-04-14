import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import { RegistrationPage } from "../../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { refreshUser } from "../../redux/auth/operations";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { HomePage } from "../../pages/HomePage/HomePage";
import { Layout } from "../Layout/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
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
                component={<RegistrationPage />}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          ></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
