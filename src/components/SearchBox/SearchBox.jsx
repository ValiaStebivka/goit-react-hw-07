import { useDispatch, useSelector } from "react-redux"; 
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.filter);
  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input type="text" id="searchBox" value={filter} onChange={handleSearch} />
    </div>
  );
};
