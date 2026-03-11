import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../Slices/transactionSlice.js";
import budgetReducer  from "../Slices/budgetSlice.js";
import filterReducer  from "../Slices/filterSlice.js";
import analyticsReducer from "../Slices/analyticsSlice.js";

const loadState = () => {
  const data = localStorage.getItem("financeState");
  return data ? JSON.parse(data) : undefined;
};

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    budget: budgetReducer,
    filters: filterReducer,
    analytics: analyticsReducer
  },
  preloadedState: loadState()
});

store.subscribe(() => {
  localStorage.setItem(
    "financeState",
    JSON.stringify(store.getState())
  );
});