import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monthlyBudget : 0
}

const budgetSlice = createSlice({
    name : "budget",
    initialState,
    reducers:{
        setBudget : (state,action)=>{
            state.monthlyBudget = action.payload;
        }
    }
});

export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;