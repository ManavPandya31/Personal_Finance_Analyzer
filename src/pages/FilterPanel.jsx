import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../Slices/filterSlice.js";

const FilterPanel = () => {

  const dispatch = useDispatch();

  const handleCategory = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  return (
    <div className="card">

      <h3>Filter By Category</h3>

      <select onChange={handleCategory}>
        <option value="all">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Bills">Rent</option>
      </select>

    </div>
  );
};

export default FilterPanel;