import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import { updateProfile } from '../../../services/operations/SettingsAPI'


const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

export const Editprofile = () => { 

  const user = useSelector( (state) => state.auth.userdata)
  const token = useSelector( (state)=> state.auth.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // add default value

  const {register ,handleSubmit ,formState:{errors} } = useForm()

  const updateprofile = async (data) => {
       console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }

  }


  return (
    <div className='text-white'>
       <form onSubmit={handleSubmit(updateprofile)}> 
      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5"> Profile information  </h2>
     
       {/*    Please enter your first name. */}
        <div className="flex flex-col gap-5 lg:flex-row" > 
          <div className="flex flex-col gap-2 lg:w-[48%]"> 
          <label htmlFor="firstName"  className='label-style'> Display Name </label>
           <input
            type='text'
            placeholder='abc'
            name="firstName"
            id="firstName"

            defaultValue={user?.firstName}
            {...register ('firstName' ,{required:true})}
             className='form-style'
           />
           {
             errors && (<span className="-mt-1 text-[12px] text-yellow-100" > enter display name </span>)
           }

          </div> 

           {/*   Please enter Profession. */}

          <div className="flex flex-col gap-2 lg:w-[48%]"> 
          <label htmlFor="lastName" className='label-style'> Last name </label>
           <input
            type='text'
            placeholder='student'
            name="lastName"
            id="lastName"

            {...register("lastName", { required: true })}
            defaultValue={user?.lastName}
             className='form-style'
           />
           {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your last name.
                </span>
              )}


          </div> 
         
        </div>  

          {/* Date of birth */} 

         <div> 
           
         <div className="flex flex-col gap-5 lg:w-[48%]"> 
          <label htmlFor="dateOfBirth" className='label-style' > Date of Birth </label>
           <input
            type='date'
            placeholder='student'
            name='dateOfbirth'
            id= "dateOfBirth"
            className='form-style'
            {...register("dateOfBirth", {
              required: {
                value: true,
                message: "Please enter your Date of Birth.",
              },
            max:{
              value: new Date().toISOString().split("T")[0],
              message: "Date of Birth cannot be in the future.",
            },    
            })} 
            defaultValue={user?.additionalDetails?.dateOfBirth}
            
           />
           {
             errors && (<span className="-mt-1 text-[12px] text-yellow-100" > enter proffesion </span>)
           }

          </div>  

          {/* gender */} 
           
          <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="gender" className="lable-style">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="form-style"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>
              {errors.gender && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Date of Birth.
                </span>
              )}
            </div>

         
          </div>


      <div className="flex flex-col gap-5 lg:flex-row">

             {/* mob no */} 
           <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="lable-style">
                Contact Number
              </label>
              <input
                type="te"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="form-style"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>


              {/* about */} 

         <div className="flex flex-col gap-2 lg:w-[48%]">

         <label htmlFor='bio' className='label-style' > About </label>
           <input
            type='text'
            placeholder='enter bio '
            name='about'
            id='bio'
            className='form-style'
            {...register ('about' ,
            {required:{
              value:true ,
              message:"Please enter bio",
            },
             
            })} 
            defaultValue={user?.additionalDetails?.about}
            
           />
           {
             errors && (<span className="-mt-1 text-[12px] text-yellow-100" > about </span>)
           }
  
         </div>
       
        </div> 

        <div className="flex justify-end gap-2"> 
          <button 
            onClick={ () => {navigate('/dashboard/my-profile')}}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
            >
              cancel
          </button> 

          <IconBtn type="submit" text="Save" />

      </div>
         
      </div> 
      </form>


    </div>
  )
}
