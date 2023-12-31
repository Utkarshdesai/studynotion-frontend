import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userdata : null ,
   token : null,
   loading : false
    
}


const authslice = createSlice({
   name: "auth" ,
   initialState ,
   reducers : {
      settoken : (state , action) => {
            state.userdata = action.payload
            console.log(state.userdata)
      } ,
      setloading : (state , action ) => {
         state.loading = action.payload
         console.log(state.loading)
      }
   }
});

export const {settoken , setloading} = authslice.actions

export default authslice.reducer  



