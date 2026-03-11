import { useDispatch, useSelector } from "react-redux";
import { setBudget } from "../Slices/budgetSlice";

const BudgetPanel = () => {

  const dispatch = useDispatch();
  const budget = useSelector((state) => state.budget.monthlyBudget);

  const handleBudget = (e) => {
    dispatch(setBudget(Number(e.target.value)));
  };

  const clearBudget = () => {
    dispatch(setBudget(0));
  };

  return (
    <div className="card">

      <h3>Monthly Budget</h3>

      <input
        type="number"
        placeholder="Set Budget"
        onChange={handleBudget}
      />

      <p>Budget: Rs{budget}</p>

      <button onClick={clearBudget}>
        Clear Budget
      </button>

    </div>
  );
};

export default BudgetPanel;