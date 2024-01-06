import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {IconBtn} from '../../common/IconBtn'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"



export const Updatepassword = () => {

   
  const user = useSelector( (state) => state.auth.userdata)
  const token = useSelector( (state)=> state.auth.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //password state 
  const [showoldpassword , setoldpassword] = useState(true)
  const [shownewpassword , setnewpassword] = useState(false)
 

  // add default value

  const {register ,handleSubmit ,formState:{errors} } = useForm()

  const updatedpasword = (data) => {
      console.log(data)
  }


  return (
    <div>
 
      <form onSubmit={handleSubmit(updatedpasword)}> 
 
           <div>
           <h2 className="text-lg font-semibold text-richblack-5">Password</h2>
               {/* old password */}

             <div className="flex flex-col gap-5 lg:flex-row">
                 <div className="relative flex flex-col gap-2 lg:w-[48%]"> 

                     <label htmlFor='oldpassword'> 
                       Current password
                     </label>

                     <input 
                      type={ showoldpassword ? 'text' : 'password'}
                      placeholder='***'
                      id='oldpassword'
                      name='old'
                      {...register('old' ,{required:true})}
                      
                     />
                     <span
                      onClick={()=> setoldpassword ( (prev)=> !prev)} 
                      className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                     >
                      {
                        showoldpassword ? <AiOutlineEye fontSize={24} fill="#AFB2BF" />  : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      }
                     </span> 

                     {
                       errors && (<span className="-mt-1 text-[12px] text-yellow-100"> check current password </span>)
                     }

                     </div> 

                     {/* new password */}

                    <div className="relative flex flex-col gap-2 lg:w-[48%]">
                        
                         <label htmlFor='newpassword'> 
                             New password
                         </label>

                       <input 
                      type={ shownewpassword? 'password' : 'text'}
                      placeholder='***'
                      id='newpassword'
                      name='new'
                      {...register('new' ,{required:true})}
                      
                     />
                     <span
                      onClick={()=> setnewpassword ( (prev)=> !prev)} 
                      className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                     >
                      {
                        shownewpassword ?  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />     
                      }
                     </span> 

                     {
                       errors && (<span className="-mt-1 text-[12px] text-yellow-100"> check new password </span>)
                     }

                     </div>
              </div>

                    <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        navigate("/dashboard/my-profile")
                      }}
                      className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                    >
                      Cancel
                    </button>
                    <IconBtn type="submit" text="Update" />
                    </div>


           </div>




      </form>
        



    </div>
  )
}
