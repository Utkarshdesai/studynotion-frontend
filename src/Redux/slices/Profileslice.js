import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   profiledata : null ,
   loading : false
    
}


const profileslice = createSlice({
   name: "profile" ,
   initialState ,
   reducers : {
      setuser : (state , action) => {
            state.userdata = action.payload
            
      } ,
      setloading : (state , action ) => {
         state.loading = action.payload
         
      }
   }
});

export const {setloading , setuser} = profileslice.actions

export default profileslice.reducer  

