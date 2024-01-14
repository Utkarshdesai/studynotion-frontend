import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   step: 2 ,
   courses : null ,
   payment : false ,
   editcourse : false ,
   loading : false
    
}


const courseslice = createSlice({
   name: "course" ,
   initialState ,
   reducers : {
      setstep : (state , action) => {
            state.step = action.payload
           
      } ,
      setloading : (state , action ) => {
         state.loading = action.payload
       
      },
      setpayment : (state , action ) => {
        state.payment = action.payload
      
     }, 
     seteditcourse : (state , action ) => {
        state.editcourse = action.payload
      
     },
     setcourses : (state , action ) => {
        state.courses = action.payload
      
     },

   }
});

export const {setstep, setloading , setpayment, seteditcourse,setcourses } = courseslice.actions

export default courseslice.reducer  
