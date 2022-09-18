import { createSlice } from "@reduxjs/toolkit";
import { tableData } from '../data/table';

export const staffSlice = createSlice({
    name:'staff',
    initialState: tableData,
    reducers:{
        add: (state, action)=>{
            return [...state, action.payload]
        }
    }
})

export const { add } = staffSlice.actions;
export default staffSlice.reducer;