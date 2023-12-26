import { createSlice } from "@reduxjs/toolkit"

const Intialstate = {
   token : "hi"
} 

const authslice = createSlice({
   name:"auth" ,
   Intialstate ,
   reducers :{       
     
   },
  
})

export const {verifytoken} = authslice.actions

export default authslice.reducer