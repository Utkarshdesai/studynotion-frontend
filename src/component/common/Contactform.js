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
    <div className='flex flex-col mt-7 mx-auto justify-center items-center gap-8 h-[700px]'>
        <h1 className='text-white'> 
           {heading}
        </h1> 
        
        <p className='text-white'>
         {subheading}
        </p>

        <form onSubmit={handleSubmit (submitcontact)}> 

         <div className='mb-8'> 
           <label className='text-white'> Firstname </label>

            <input
                type='text'
                name='firstname'
                required
                placeholder='enter your first name'
                {...register ('firstname' , {
                    required :true ,
                })}

                
                />

                  {
                        errors.firstname && (
                            <span>
                                Please enter Your name
                            </span>
                        )
                    }

         </div>
           
            
         <div className='mb-8'> 
           <label className='text-white'> lastname </label>

            <input
                type='text'
                name='lastname'
                required
                placeholder='enter your first name'
                {...register ('lastname' , {
                    required :true ,
                })}
                />

                
                    {
                        errors.lastname && (
                            <span>
                                Please enter Your lastname
                            </span>
                        )
                    }


         </div>


         <div className='mb-8'> 
           <label className='text-white'> email </label>

            <input
                type='email'
                name='email'
                required
                placeholder='enter your first name'
                {...register ('email' , {
                    required :true ,
                })}

                 />
                
                 
                   {
                        errors.email && (
                            <span>
                                Please enter Your email
                            </span>
                        )
                    }


         </div>

         <div>
          <label className='text-white'> phone Number </label> 

           <div className='flex flex-row'>
            { <select 
              name='dropdown' 
              id='dropdown'
              className='bg-richblack-300 w-[80px]'
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

        <div className='mt-8'> 
      
        <label className='text-white'> enter your message</label>
        <textarea
            name='message'
            cols='10'
            required
            placeholder='enter your message'
            {...register ('message' , {
                
            })}
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
