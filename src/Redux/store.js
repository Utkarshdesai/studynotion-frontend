import { configureStore } from "@reduxjs/toolkit";
import authreducer from './slices/Authslice';
import profilereducer from './slices/Profileslice'

export const store = configureStore({
   reducer: {
      auth: authreducer ,
      profile : profilereducer
   },
});

