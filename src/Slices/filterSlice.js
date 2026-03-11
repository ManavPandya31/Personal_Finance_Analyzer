import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "all",
    month: "all"
}

const filterSlice  = createSlice({

    name : "filter",
    initialState,
    reducers : {
        setCategoryFilter : (state,actions)=>{
            state.category = actions.payload;
        },
         setMonthFilter : (state,actions)=>{
            state.month = actions.payload;
         }
    }

});

export const { setCategoryFilter , setMonthFilter } = filterSlice.actions;
export default filterSlice.reducer;