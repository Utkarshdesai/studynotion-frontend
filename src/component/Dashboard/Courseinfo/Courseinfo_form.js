import React from 'react'
import { useForm } from 'react-hook-form'

export const Courseinfo_form = () => {

    const { register , handleSubmit , formState: {errors}} = useForm()

    const createcourse = (data) => {
       console.log(data)
    }



  return (
    <div >
        <form onSubmit={handleSubmit(createcourse)}>

        <label htmlFor='coursetitle'> Course title  </label>   

        <input
         type='text' 
         required
         placeholder='enter title'
         name='title'
         id='coursetitle'
         {...register( 'title' , {required:true})}
         />

         {
           errors && (<p> enter a course title</p>)
         } 

        <label htmlFor='coursetitle'> enter short description  </label>   

         <textarea
         placeholder='enter description'
         name='description'
         id='coursetitle'
         {...register( 'description' , {required:true})} 
         />

         {
           errors && (<p> enter short description </p>)
         } 


        <label htmlFor='price'> enter short description  </label>   


        <input
         type='number' 
         required
         placeholder='enter price'
         name='price'
         id='price'
         {...register( 'price' , {required:true})}
         />

         {
           errors && (<p> enter a price</p>)
         } 

         {/* category pending */} 

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

         {/* add thumbnail */}

        
         <label htmlFor='benefit'> Benefit of course  </label>   

            
          <textarea
          required
          placeholder='choose a benefit'
          name='Benefit'
          id='benefit'
          {...register( 'Benefit' , {required:true})}
          />

          {
            errors && (<p> enter a benefit </p>)
          } 


        



        </form>
        



    </div>
  )
}
