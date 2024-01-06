import React from 'react'
import { useForm } from 'react-hook-form'
import { Requirement } from './Requirement'
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import { Coursethumbnail } from './Coursethumbnail'

export const Courseinfo_form = () => {

    const { register , handleSubmit , setValue, getValues , formState: {errors}} = useForm()

    const createcourse = (data) => {
       console.log(data)
    }



  return (
     <form className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
        
        onSubmit={handleSubmit(createcourse)}>


       <div className="flex flex-col space-y-2">   

        <label className='"text-sm text-richblack-5"'
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
           errors && (<span className="ml-2 text-xs tracking-wide text-pink-200"> enter a course title</span>)
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
           errors && (<span className="ml-2 text-xs tracking-wide text-pink-200"
           > enter short description </span>)
         } 

      </div>

        
       {/* Course Price */}


      <div  className="flex flex-col space-y-2">  
        <label htmlFor='price'> 
        className="text-sm text-richblack-5"
        enter short description <sup className="text-pink-200">*</sup>
       </label>   


        <input
         type='number' 
         required
         placeholder='enter price'
         name='price'
         id='price'
         {...register( 'price' , {required:true,
         valueAsNumber:true
         })}
         className="form-style w-full !pl-12"


         />
        <HiOutlineCurrencyRupee className="left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />


         {
           errors && (<span className="ml-2 text-xs tracking-wide text-pink-200"> enter a price</span>)
         } 

         {/* category pending */} 

      </div>

        <label htmlFor='tags'> Tags  </label>   

  
         <input
         type='text' 
         required
         placeholder='choose a tag'
         name='tags'
         id='tags'
         {...register( 'price' , {required:true})}
         />

         {
           errors && (<p> enter a tags </p>)
         } 

         {/* add thumbnail
          */}

          <Coursethumbnail
           name = "thumbnail"
           setValue= {setValue}
           getValues= {getValues} 
           label='Coursethumbnail'
           errors={errors}

          
          />



        <div className="flex flex-col space-y-2">          
         <label htmlFor='benefit'> Benefit of course  </label>   

            
          <textarea
          required
          placeholder='choose a benefit'
          name='Benefit'
          id='benefit'
          {...register( 'Benefit' , {required:true})}
          className="form-style resize-x-none min-h-[130px] w-full"
          />

          {
            errors && (<span 
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
        



        </form>
        



 
  )
}
