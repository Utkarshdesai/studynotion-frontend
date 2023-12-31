import { configureStore } from "@reduxjs/toolkit";
import auth from './slices/Authslice';

export const store = configureStore({
   reducer: {
      auth: auth
   },
});

