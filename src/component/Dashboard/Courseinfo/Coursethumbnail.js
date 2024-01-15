import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { FiUploadCloud } from "react-icons/fi"

export const Coursethumbnail = ({label,register,setvalue ,getvalue ,errors ,name}) => {

   const course = useSelector( (state) => state.courses.course)  

   const [selectedfile ,setselectedfile] = useState(null) 
   const [previewFile ,setpreviewFile] = useState(null)

  const inputRef = useRef(null)


    const onDrop = (acceptedFiles) => {
      console.log(acceptedFiles)
        const file = acceptedFiles[0]
        if (file) {
          previewFile(file)  
          setselectedfile(file)
        }
      }

      const { getRootProps, getInputProps, isDragActive } = useDropzone(ondrop)
    
     console.log({getInputProps})
     console.log(getRootProps)

    return (
      <> 
       <div className="flex flex-col space-y-2"> 
        <label className="text-sm text-richblack-5" htmlFor={name}> 
            {label} 
        </label>
        <div 
         {...getRootProps()}
        >
        
        <input
         {...getInputProps()}
        /> 
         <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>



        </div>






       </div>









      </>
  )
}
