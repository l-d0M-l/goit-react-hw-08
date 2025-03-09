import css from "./SearchBox.module.css";
import { Field, Formik, Form } from "formik";
function SearchBox({ value, onFilter }) {
//   function handleChange(e) {
//     console.log(e.target.value);
//   }
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      ></input>
    </label>
  );
}

export default SearchBox;
