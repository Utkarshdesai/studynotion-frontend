import React, { useState ,useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { FiUploadCloud } from "react-icons/fi"
// import "video-react/dist/video-react.css"
// import { Player } from "video-react"

export const Coursethumbnail = ({label,register,setValue ,getvalue ,errors ,name ,viewData=null ,editData=null}) => {

   const course = useSelector( (state) => state.courses.course)  

   const [selectedfile ,setselectedfile] = useState(null) 
   const [preview ,setpreview] = useState(viewData ? viewData : editData ? editData : ""
   )


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
    
      const previewFile = (file) => {
        // console.log(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
          setpreview(reader.result)
        }
      } 

      useEffect(() => {
        register(name, { required: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [register])
    
      useEffect(() => {
        setValue(name, setselectedfile)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [setselectedfile, setValue])
    
    
    

    return (
      <> 
        <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>
      <div
        className={`${
          isDragActive ? "bg-richblack-600" : "bg-richblack-700"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
      >
        {preview ? (
          <div className="flex w-full flex-col p-6">
           
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
           
              {/* <Player aspectRatio="16:9" playsInline src={preview} /> */}
          
            {!viewData && (
              <button
                type="button"
                onClick={() => {
                  setpreview("")
                  setselectedfile(null)
                  setValue(name, null)
                }}
                className="mt-3 text-richblack-400 underline"
              >
                Cancel
              </button>
            )}
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()}
          >
            <input {...getInputProps()} ref={inputRef} />
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              {/* Drag and drop an {video ? "image" : "video"}, or click to{" "} */}
              <span className="font-semibold text-yellow-50">Browse</span> a
              file
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>

         








        






     









      </>
  )
}
