import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../Slices/transactionSlice.js";

const ExpenseForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category
    };

    dispatch(addTransaction(transaction));

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>

      <h3>Add Expense</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button>Add</button>

    </form>
  );
};

export default ExpenseForm;