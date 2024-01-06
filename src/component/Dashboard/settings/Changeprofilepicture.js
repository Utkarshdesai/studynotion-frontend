import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Changeprofilepicture = () => {

   const [image , setimage] = useState(null)
   const [previewSource , setpreview] = useState(null)

   
  //  const fileInputRef = useRef(null);

   const loading = useSelector ((state)=> state.profile.loading) 

  
   const showimage = () => {
     setpreview(true) 
   }

  

  return (
    <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5"> 

       <div className="flex items-center gap-x-4" >
         <img
         type='file'
         
         
         className="aspect-square w-[78px] rounded-full object-cover"
         />

        </div>
         <p> Change Profile Picture </p> 

         <button>
          Change 
         </button>

         <button>
          Remove
         </button>

         <div> 


       </div>

    </div>
  )
}
