import { configureStore } from "@reduxjs/toolkit";
import authreducer from './slices/Authslice';
import profilereducer from './slices/Profileslice'
import coursereducer from '../Redux/slices/Courseslice'

export const store = configureStore({
   reducer: {
      auth: authreducer ,
      profile : profilereducer ,
      course : coursereducer ,
   },
});

