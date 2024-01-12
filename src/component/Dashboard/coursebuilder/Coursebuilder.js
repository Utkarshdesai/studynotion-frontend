import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {MdAddCircleOutline} from "react-icons/md"
import IconBtn from '../../common/IconBtn'
import { setstep  ,setcourses ,seteditcourse} from '../../../Redux/slices/Courseslice'
import { Nestedsection } from './Nestedsection'
export const Coursebuilder = () => {


const [editsection ,seteditsection] = useState(null)
const [loading ,setloading] = useState(false)

 const course = useSelector ((state) => state.courses.course) 
 const token  = useSelector ((state) => state.auth.token)
 const step  = useSelector ((state) => state.courses.step)
 const dispatch = useDispatch()

 const {register ,handleSubmit ,formState:{errors}} = useForm()

  const coursebuilder = (data) =>{
      console.log(data)
  } 

  const cancelEdit= () => {
    seteditsection(null)
  }

  const gobackbtn = () => {
    dispatch(setstep(1))
    dispatch(seteditcourse(true))
  }

  const nextbtn = () => {
     //at leaast one course section 
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
           name = "section"
           id='sectionname'
           {...register('section' , {required : true})}  
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
            <Nestedsection/>
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
