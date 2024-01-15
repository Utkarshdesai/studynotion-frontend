import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setstep } from '../../../Redux/slices/Courseslice'
import IconBtn from '../../common/IconBtn'

export const Publish = () => {

  const [loading , setloading] = useState(false)
  const dispatch = useDispatch()
  const token  = useSelector ((state) => state.auth.token)
  const {register ,formState:{errors} , handleSubmit} = useForm() 

  //need to send data to backend
  const publishcourse = (data) => {
     console.log(data)
  } 

  const goback = () => {
    dispatch(setstep(2))
  } 



  return (
    <>
    
    <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"> 

       <h1 className="text-2xl font-semibold text-richblack-5"> Publish settings</h1> 

      <form onSubmit={handleSubmit (publishcourse)}> 

      <div  className="my-6 mb-8">   
        <label htmlFor='text' className="inline-flex items-center text-lg">  
            <input
              type='checkbox'
              id='text'
              {...register('text' , {required:true})}
              className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"

                
            /> 
             <span className="ml-2 text-richblack-400"> 
             Make this Course Public
             </span>
            </label>


      </div>  

       <div className="ml-auto flex max-w-max items-center gap-x-4"> 
         <button 
         disabled = {loading}
         type='button'
         className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
         onClick={goback}
         >
           Back
         </button>  

        
        <IconBtn
          disabled = {loading} text='Save changes'/>

       </div>
    </form>

    </div>
    
    
    
    
    
    </>
  )
}
