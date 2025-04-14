import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import { AuthNav } from "./AuthNav/AuthNav";
import { UserMenu } from "./UserMenu/UserMenu";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.navigationBtn}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.navigationBtn}>
            Contacts
          </NavLink>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav></AuthNav> */}
    </header>
  );
};
