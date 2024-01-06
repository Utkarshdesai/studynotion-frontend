import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

export const Coursethumbnail = ({label,register,setvalue ,getvalue ,errors ,name}) => {

   const course = useSelector( (state) => state.course.courses)  

   const [selectedfile ,setselectedfile] = useState(null) 
   const [previewFile ,setpreviewFile] = useState(null)

//    const inputRef = useRef(null)


    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0]
        if (file) {
          previewFile(file)  
          setselectedfile(file)
        }
      }

      const { getRootProps, getInputProps, isDragActive } = useDropzone()
    
    
   

    return (
    <div className="flex flex-col space-y-2">

       <label className="text-sm text-richblack-5" htmlFor={name}>
          {label} <sup className="text-pink-200">*</sup>
       </label> 


    




    </div>
  )
}
