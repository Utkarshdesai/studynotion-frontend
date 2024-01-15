import React, { useState } from 'react' 
import IconBtn from '../common/IconBtn'
import { useSelector } from 'react-redux'
import { CourseTable } from './CourseTable'
import { useNavigate } from 'react-router-dom'

export const Mycourses = () => {


    const token = useSelector( (state) => state.auth.token)
    const course = useSelector ( (state) = state.courses.course) 
    const navigate = useNavigate()
    const [courses , setcourses] = useState([])

    //fetch courses from backend 
  return (
    <>
     <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      
      {
         course && 
         <CourseTable courses = {courses} setcourss = {setcourses}/>
      }

    </>
  )
}
