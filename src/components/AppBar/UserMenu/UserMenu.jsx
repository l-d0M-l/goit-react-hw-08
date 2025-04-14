import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/operations";
import { selectPerson } from "../../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectPerson);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}</p>
      <button
        className={css.userMenuButton}
        type="button"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};
