import { createSlice } from "@reduxjs/toolkit";


const initialState = [];


const updateSlice = createSlice({
    name:'update',
    initialState,
    reducers:{
        saveToState:(state,action) =>{
            state.push(action.payload);
        }
    }
})


export const{saveToState} = updateSlice.actions
export default updateSlice.reducer