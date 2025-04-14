import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div className={css.AuthNav}>
      <NavLink className={css.AuthNavButton} to="/register">
        Register
      </NavLink>
      <NavLink className={css.AuthNavButton} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
