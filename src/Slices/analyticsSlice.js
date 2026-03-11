import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalExpense : 0,
};

const analyticsSlice  = createSlice({

    name:"analytics",
    initialState,
    reducers :{
        //State = Current data stored in Redux.
        //Action = An object that sends data to Redux to update state.
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