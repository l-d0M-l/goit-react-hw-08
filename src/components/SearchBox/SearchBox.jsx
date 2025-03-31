import css from "./SearchBox.module.css";
import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/filtersSlice";
function SearchBox() {
  const dispatch = useDispatch();

  function onSearchContacts(searchValue) {
    dispatch(changeFilter(searchValue));
  }
  const filterValue = useSelector((state) => state.filter.name);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={(e) => onSearchContacts(e.target.value)}
      ></input>
    </label>
  );
}

export default SearchBox;
