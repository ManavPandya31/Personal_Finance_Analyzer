import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartView = () => {

  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  // Calculate category totals
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (!categoryTotals[t.category]) {
      categoryTotals[t.category] = 0;
    }

    categoryTotals[t.category] += t.amount;
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0"
        ]
      }
    ]
  };

  return (
    <div className="card">

      <h3>Expense Analytics</h3>

      {transactions.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <Pie data={data} />
      )}

    </div>
  );
};

export default ChartView;