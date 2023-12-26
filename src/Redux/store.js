import { configureStore } from "@reduxjs/toolkit"; 
import { RootReducer } from "./Rootreducer";


 export const store = configureStore({
   reducer : RootReducer
})