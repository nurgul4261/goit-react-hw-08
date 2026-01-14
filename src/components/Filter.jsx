import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filters/slice";
import { selectFilter } from "../redux/filters/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Kişi Ara:
        <input
          type="text"
          value={filterValue}
          onChange={handleChange}
          placeholder="İsme veya numaraya göre ara..."
        />
      </label>
    </div>
  );
};

export default Filter;