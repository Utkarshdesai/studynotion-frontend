import React, { useState ,useRef ,useEffect } from 'react'
import { useSelector  } from 'react-redux'
import IconBtn from '../../common/IconBtn'
import { FiUpload } from "react-icons/fi"

export const Changeprofilepicture = () => {

   const [image , setimage] = useState(null)
   const [preview , setpreview] = useState(null)

   
    const fileInputRef = useRef(null);

   const loading = useSelector ((state)=> state.profile.loading)  

   const handleclick = () => {
    fileInputRef.current.click()

    
  }

   // remove first img and add another img
   const handlefilechange = (e)=>{
    const file = e.target.files[0]
   
    if (file) {
      setimage(file)
      setpreview(file)
    }
   } 

   // preview file
   const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setpreview(reader.result)
    }
    console.log(preview)
  }


  // upload file
   const handleupload = () =>{
      const formdata = new FormData() 
      formdata.append ('display-pic' , image)
     console.log("formdata", formdata)
   }

   useEffect(() => {
    if (image) {
      previewFile(image)
    }
  }, [image])
   
   
  

  return (
    <>
    <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
      <div className="flex items-center gap-x-4">
        <img
          src={preview}             // get it from user state
          className="aspect-square w-[78px] rounded-full object-cover"
        />
        <div className="space-y-2">
          <p>Change Profile Picture</p>
          <div className="flex flex-row gap-3">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlefilechange}
              accept="image/png, image/gif, image/jpeg"
            />
            <button
              onClick={handleclick}
              disabled={loading}
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
            >
              Select
            </button>
            <IconBtn
             onclick={handleupload}
             
             text={loading ? "Uploading..." : "Upload"}

            >
              {!loading && (
                  <FiUpload className="text-lg text-richblack-900" />
                )}

            </IconBtn>
          </div>
        </div>
      </div>
    </div>
  </>

  )
}
