import React from 'react'
import {useForm} from 'react-hook-form'
import countrycode from '../../data/countrycode.json'


export const Contactform = ({heading , subheading}) => {

    const {
    register ,
    handleSubmit ,
    formState : {errors}  } = useForm () ;

   console.log(useForm()) 

   const submitcontact = (data) => {
    console.log(data)
   }

  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
        <h1 className="text-4xl leading-10 font-semibold text-richblack-5"> 
           {heading}
        </h1> 
        
        <p >
         {subheading}
        </p>

        <form 
          className="flex flex-col gap-7"
          onSubmit={handleSubmit (submitcontact)}> 

        {/* first name */}
         <div className="flex flex-col gap-5 lg:flex-row"> 
         <div className="flex flex-col gap-2 lg:w-[48%]"> 
           <label className='text-white'> Firstname </label>

            <input
                type='text'
                name='firstname'
                required
                placeholder='enter your first name'
                {...register ('firstname' , {
                    required :true ,

                })}

                className="form-style w-full"
                />

                  {
                        errors.firstname && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter Your name
                            </span>
                        )
                    }

         </div>
           
            {/*last name  */}
         <div className="flex flex-col gap-2 lg:w-[48%]"> 
           <label className='text-white'> lastname </label>

            <input
                type='text'
                name='lastname'
                required
                placeholder='enter your first name'
                {...register ('lastname' , {
                    required :true ,
                })}
                className="form-style w-full"
                />

                
                    {
                        errors.lastname && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter Your lastname
                            </span>
                        )
                    }

    
         </div> 
         </div>




         <div className="flex flex-col gap-2 lg:w-[48%]" > 
           <label className='text-white'> email </label>

            <input
                type='email'
                name='email'
                required
                placeholder='enter your first name'
                {...register ('email' , {
                    required :true ,
                })}

                className="form-style w-full"
                 />
                
                 
                   {
                        errors.email && (
                            <span>
                                Please enter Your email
                            </span>
                        )
                    }


         </div>

         <div className="flex flex-col gap-2 lg:w-[48%]">
          <label className='text-white'> phone Number </label> 

           <div className='flex flex-row'>
            { <select 
              name='dropdown' 
              id='dropdown'
            
              {...register("countrycode", {required:true})}

            >
                
                    {
                        countrycode.map( (item , index) => {
                            return (
                                <option value={item.code}>
                                <p  className='bg-yellow-50 text-white'> {item.code} - {item.country} </p> 
                                </option>
                            
                           )
                        })
                    }

       
            </select> }

           
            <input
             type='number'
             name='Phoneumber'
             required
             placeholder='enter your number'
             {...register ('phonenumber' , {
                 required :true ,
                 maxLength : {value:10 ,message:"number is not correct"},
                 minLength : {value:8 , message:"invalid"}
             })}
            
            className="form-style w-full"
             /> 

                    {
                        errors.phonenumber && (
                            <span>
                              enter your phone 
                            </span>
                        )
                    }
                   


        
           </div>

         </div> 

        <div className="flex flex-col gap-2 lg:w-[48%]"> 
      
        <label className='text-white'> enter your message</label>
        <textarea
            name='message'
            cols='10'
            required
            placeholder='enter your message'
            {...register ('message' , {
                
            })}
            className="form-style w-full"
           />

                     {
                        errors.message && (
                            <span>
                                Please enter Your message
                            </span>
                        )
                     }
                   

        </div> 

        <div>
          <button type='submit' className='bg-yellow-200 text-black'>  send message </button>
        </div>
         

         


        </form>
  </div>
  )
}
