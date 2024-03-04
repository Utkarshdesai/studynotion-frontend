import React, { useState } from 'react' 
import IconBtn from '../common/IconBtn'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { VscAdd } from 'react-icons/vsc'
export const Mycourses = () => {


  
    const navigate = useNavigate()
    const [courses , setcourses] = useState([])
    const { token } = useSelector((state) => state.auth) 

    //fetch courses from backend  
    // useEffect(() => {
    //   const fetchCourses = async () => {
    //     const result = await fetchInstructorCourses(token)
    //     if (result) {
    //       setCourses(result)
    //     }
    //   }
    //   fetchCourses()
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
  



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
      
      {/* {
         courses && 
         <CourseTable courses = {courses} setcourss = {setcourses}/>
      } */}

    </>
  )
}
