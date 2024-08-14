import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Requirement } from './Requirement'
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import { Coursethumbnail } from './Coursethumbnail'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from  '../../../slices/courseSlice'
import IconBtn from '../../common/IconBtn'
import { MdNavigateNext } from "react-icons/md"
import { Chipinput } from './Chipinput'

export const Courseinfo_form = () => {

    const [loading , setloading] = useState(false)
    const [catagory , setcatagory] = useState([])
    const { register , handleSubmit , setValue, getValues , formState: {errors}} = useForm() 
    const dispatch = useDispatch()
    const {course , editcourse} = useSelector( (state) => state.courses)

    const createcourse = (data) => {
       console.log(data)
    } 

    const getcatagory = async () => 
    {
         setloading(true) 

         //call backend 
         //set values

         setloading(false)
    }

    // useEffect ( () => {
    //  getcatagory()
    // } ,[])

    


  return (
     <form 
     className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
     onSubmit={handleSubmit(createcourse)}>

         {/* course title */}
       <div className="flex flex-col space-y-2">   

        <label className='text-sm text-richblack-5'
        htmlFor='coursetitle'> Course title  
        <sup className="text-pink-200">*</sup>
        </label>   

        <input
         type='text' 
         required
         placeholder='enter title'
         name='title'
         id='coursetitle'
         {...register( 'title' , {required:true})}
         className="form-style w-full"

         />

         {
           errors.title && (<span className="ml-2 text-xs tracking-wide text-pink-200"> enter a course title</span>)
         } 

      </div> 

       
       <div className="flex flex-col space-y-2"> 

        <label htmlFor='coursetitle'
         className="text-sm text-richblack-5" 
        > enter short description  <sup className="text-pink-200">*</sup> </label>   

         <textarea
         placeholder='enter description'
         name='description'
         id='coursetitle'
         {...register( 'description' , {required:true})} 
         className="form-style resize-x-none min-h-[130px] w-full"

         />

         {
           errors.description && (<span className="ml-2 text-xs tracking-wide text-pink-200"
           > enter short description </span>)
         } 

      </div>

        
       {/* Course Price */}


      <div  className="flex flex-col space-y-2">  
        <label htmlFor='price' 
        className='text-sm text-richblack-5'
        >
        price <sup className="text-pink-200">*</sup>
       </label>   


        <input
         type='number' 
         required
         placeholder='1123'
         name='price'
         id='price'
         {...register( 'price' , {required:true,
         valueAsNumber:true
         })}
         className="form-style w-full !pl-12"


         />
        <HiOutlineCurrencyRupee className="left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />


         {
           errors.price && (<span className="ml-2 text-xs tracking-wide text-pink-200"> enter a price</span>)
         } 



         {/* category */}  
        <div className="flex flex-col space-y-2">
        
         <label className="text-sm text-richblack-5" htmlFor="courseCategory">
          Course Category <sup className="text-pink-200">*</sup>
         </label>
         
          <select 
           defaultValue=""
           id='courseCategory'   
           className="form-style w-full" 
           {...register('courseCategory' , {required:true})}
                
          >
            <option > 
              choose a Category
            </option> 

             {/* {
              loading ? (<div className='loading'> </div>) 
               : ( 
                    {
                      // map on category 
                      //add options
                    }
               )
             } */}
      
          </select> 

          {errors.courseCategory && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Course Category is required
            </span>
          )}
         </div>
    
        </div > 

          
        {/* tags */}
          <Chipinput
               label="Tags"
               name="courseTags"
               placeholder="Enter Tags and press Enter"
               register={register}
               errors={errors}
               setValue={setValue}
               getValues={getValues}
                
          />

         {/* add thumbnail
          */}

          <Coursethumbnail
           name = "thumbnail"
           setValue= {setValue}
           getValues= {getValues} 
           label='Coursethumbnail'
           errors={errors}
           editData={editcourse ? course?.thumbnail : null}
          
          />

         {/* benefit of course */}

        <div className="flex flex-col space-y-2">          
         <label htmlFor='benefit'
          className='text-sm text-richblack-5'
         > Benefit of course  </label>   

            
          <textarea
          required
          placeholder='choose a benefit'
          name='Benefit'
          id='benefit'
          {...register( 'Benefit' , {required:true})}
          className="form-style resize-x-none min-h-[130px] w-full"
          />

          {
            errors.Benefit && (<span 
            className='ml-2 text-xs tracking-wide text-pink-200'
            > enter a benefit </span>)
          } 

        </div>

          <Requirement
           name='courserequirement'
           setValue ={setValue} 
           getValues = {getValues}
           errors = {errors} 
           register = {register} 
           label = 'requirement/instruction'
          /> 

          {/* next button  */}
         
        <div className="flex justify-end gap-x-2">
        {editcourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Continue Wihout Saving
          </button>
        )}
        <IconBtn
          disabled={loading}
          text={!editcourse ? "Next" : "Save Changes"}
        >
          <MdNavigateNext />
        </IconBtn>
      </div>





        </form>
        



 
  )
}
