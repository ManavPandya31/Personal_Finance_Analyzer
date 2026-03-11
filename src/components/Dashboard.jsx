import ExpenseForm from "../pages/ExpenseForm";
import TransactionList from "../pages/TransactionList";
import BudgetPanel from "../pages/BudgetPanel";
import ChartView from "../pages/ChartView";
import FilterPanel from "../pages/FilterPanel"; 
import MonthlyReport from "../pages/MonthlyReport";

const Dashboard = () => {
  return (
    <div className="container">

      <h1>Personal Finance Analyzer</h1>

      <BudgetPanel />

      <ExpenseForm />

      <FilterPanel />

      <MonthlyReport />

      <TransactionList />

      <ChartView />

    </div>
  );
};

export default Dashboard;