import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalExpense : 0,
};

const analyticsSlice  = createSlice({

    name:"analytics",
    initialState,
    reducers :{
        calculateTotal  : (state,action)=>{
            state.totalExpense = action.payload.reduce(
                (acc,curr) => acc + curr.amount,
                0
            );
        }
    }
});

export const { calculateTotal } = analyticsSlice.actions;

export default analyticsSlice.reducer;