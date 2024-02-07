import { configureStore } from "@reduxjs/toolkit";
import authreducer from './slices/Authslice';
import profilereducer from './slices/Profileslice'
import coursereducer from '../Redux/slices/Courseslice'
import viewCourseReducer from '../Redux/slices/viewCourseslice'

export const store = configureStore({ 
   reducer: {
      auth: authreducer ,
      profile : profilereducer ,
      courses : coursereducer ,
      viewCourse:viewCourseReducer,

   },
});

