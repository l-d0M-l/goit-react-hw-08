import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";

import { selectNameFilter } from "../../redux/filters/selectors";
function SearchBox() {
  const dispatch = useDispatch();

  function onSearchContacts(searchValue) {
    dispatch(changeFilter(searchValue));
  }

  const filterValue = useSelector(selectNameFilter);

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
