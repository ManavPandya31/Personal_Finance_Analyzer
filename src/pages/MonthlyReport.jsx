import { useSelector } from "react-redux";

const MonthlyReport = () => {

  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  const budget = useSelector(
    (state) => state.budget.monthlyBudget
  );

  const totalExpense = transactions.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const remaining = budget - totalExpense;

  return (
    <div className="card">

      <h3>Monthly Report</h3>

      <p>Total Expense: ₹{totalExpense}</p>

      <p>Budget: ₹{budget}</p>

      <p>Remaining: ₹{remaining}</p>

    </div>
  );
};

export default MonthlyReport;