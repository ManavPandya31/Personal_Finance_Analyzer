import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, clearTransactions } from "../Slices/transactionSlice.js";

const TransactionList = () => {

  const dispatch = useDispatch();

  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  const categoryFilter = useSelector(
    (state) => state.filters.category
  );

  const filteredTransactions =
    categoryFilter === "all"
      ? transactions
      : transactions.filter((t) => t.category === categoryFilter);

  const handleClearAll = () => {
    dispatch(clearTransactions());
  };

  return (
    <div className="card">

      <h3>Transactions</h3>

      {transactions.length > 0 && (
        <button onClick={handleClearAll}>
          Clear All
        </button>
      )}

      {filteredTransactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        filteredTransactions.map((t) => (

          <div key={t.id} className="transaction">

            <span>{t.title}</span>
            <span>₹{t.amount}</span>
            <span>{t.category}</span>

            <button
              onClick={() => dispatch(deleteTransaction(t.id))}
            >
              Delete
            </button>

          </div>

        ))
      )}

    </div>
  );
};

export default TransactionList;