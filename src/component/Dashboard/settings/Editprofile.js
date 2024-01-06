import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {IconBtn} from '../../common/IconBtn'


const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

export const Editprofile = () => { 

  const user = useSelector( (state) => state.auth.userdata)
  const token = useSelector( (state)=> state.auth.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // add default value

  const {register ,handleSubmit ,formState:{errors} } = useForm()

  const updateprofile = (data) => {
      console.log(data)
  }


  return (
    <div className='text-white'>
       <form onSubmit={handleSubmit(updateprofile)}> 
      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <h2 className="text-lg font-semibold text-richblack-5"> Profile information  </h2>
     
       {/*    Please enter your first name. */}
        <div className="flex flex-col gap-5 lg:flex-row" > 
          <div className="flex flex-col gap-2 lg:w-[48%]"> 
          <label htmlFor='name' className='label-style'> Display Name </label>
           <input
            type='text'
            placeholder='abc'
            name='displayname'
            id='name'
            defaultValue={'xyz'}
            {...register ('name' ,{required:true})}
             className='form-style'
           />
           {
             errors && (<span className="-mt-1 text-[12px] text-yellow-100" > enter display name </span>)
           }

          </div> 

           {/*   Please enter Profession. */}

          <div className="flex flex-col gap-2 lg:w-[48%]"> 
          <label htmlFor='professiontype' className='label-style'> Profession </label>
           <input
            type='text'
            placeholder='student'
            name='proffesion'
            id='proffesiontype'
            defaultValue={'xyzd'}
            {...register ('proffesion' ,{required:true})}
             className='form-style'
           />
           {
             errors && (<span className="-mt-1 text-[12px] text-yellow-100" > enter Profession </span>)
           }

          </div> 
         
        </div>  

          {/* Date of birth */} 

         <div> 
           
         <div className="flex flex-col gap-5 lg:w-[48%]"> 
          <label htmlFor='dob' className='label-style' > Date of Birth </label>
           <input
            type='date'
            placeholder='student'
            name='dateofbirth'
            id='dob'
            className='form-style'
            {...register ('dateofbirth' ,{required:{
              value:true ,
              message:"Please enter your Date of Birth.",
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
              
           <label htmlFor='sex' className='label-style' > Gender </label>
           
            <select
             type='text'
             name='gender' 
             id='sex'
             className="form-style" 
             {...register('gender' ,{required:true})}
             defaultValue={user?.additionalDetails?.gender} 
            >  
            {
             genders.map( (type ,i) => {
               return (
                  <option key={i}
                     value={type}
                  ></option>
               )
             })
            }  
            </select> 
           {
             errors && (<span className="-mt-1 text-[12px] text-yellow-100" > select gender  </span>)

           }

           </div>
         
          </div>

              {/* mob no */} 

      <div className="flex flex-col gap-5 lg:flex-row">
          
        <div className="flex flex-col gap-2 lg:w-[48%]"> 
          <label htmlFor='contactNumber' className='label-style' > Contact Number </label>
           <input
            type='tel'
            placeholder='enter contact number'
            name='phone'
            id='contactNumber'
            className='form-style'
            {...register ('phone' ,
            {required:{
              value:true ,
              message:"Please enter your contact number",
            },
             maxLength:{value:12 , message:'invalid contact number'},
             minLength:{value:10 , message:"invalid contact number"}
            })} 
            defaultValue={user?.additionalDetails?.contactnumber}
            
           />
           {
             errors && (<span className="-mt-1 text-[12px] text-yellow-100" > enter phone </span>)
           }

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
