import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {MdAddCircleOutline} from "react-icons/md"
import IconBtn from '../../common/IconBtn'
import { setstep ,setcourses ,seteditcourse} from '../../../Redux/slices/Courseslice'
import { Nestedsection } from './Nestedsection'
export const Coursebuilder = () => {


const [editsection ,seteditsection] = useState(true)
const [loading ,setloading] = useState(false)

 const course = useSelector ((state) => state.courses.course) 
 const token  = useSelector ((state) => state.auth.token)
 const step  = useSelector ((state) => state.courses.step)
 const dispatch = useDispatch()

 const {register ,handleSubmit , setValue, formState:{errors}} = useForm()

  // submit data to backend
  const coursebuilder = (data) =>{
      console.log(data)

      // check that form is edit , created
  } 

  const cancelEdit= () => {
    seteditsection(null)
    setValue("sectionName" , '')
  }

  const gobackbtn = () => {
    dispatch(setstep(1))
    dispatch(seteditcourse(true))
  }

  const nextbtn = () => {
     //at leaast one course section 
  }

  // edit section name 
  const handleeditsection = (sectionId ,sectionName) => {
    
  }


  return (
   <>
    <div> 
    
       <div> 
          <h1> Course builder </h1>
       </div> 

      <form onSubmit={handleSubmit(coursebuilder)}> 
        <label htmlFor='sectionname'>  Create Course  <sup>*</sup> </label>
          <input
           type='text'
           placeholder='enter section name'
           name = "sectionName"
           id='sectionname'
           {...register('sectionName' , {required : true})}  
          />

          {
            errors && (<span> enter section name</span>)
          }
  
     <div className='mt-10 flex w-full'>
          <IconBtn 
            type="Submit"
            text={editsection ? "Edit Section Name" : "Create Section"}
            outline={true}
            customClasses={"text-white"}
          >
            <MdAddCircleOutline className='text-yellow-50' size={20}/>

          </IconBtn>
          {editsection && (
            <button
            type='button'
            onClick={cancelEdit}
            className='text-sm text-richblack-300 underline ml-10'
            >
              Cancel Edit
            </button>
          )}
        </div>

          <div>
            {/* check coursecontent legth >0  */}

            {
               course?.CourseContent.length > 0 && ( <Nestedsection  handleeditsection = {handleeditsection} />)
            }
          
          </div>

       <div>
         <button onClick={gobackbtn}> 
           Go back 
         </button>

         <button onClick={nextbtn}> 
           Next 
         </button>
       </div>

        

      </form>

    

    </div>
   </>
  )
}
