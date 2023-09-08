import { configureStore } from "@reduxjs/toolkit";
import updateReducer from "./updateSlice";

export const store = configureStore({
    reducer:{
       update:updateReducer,
    }
});