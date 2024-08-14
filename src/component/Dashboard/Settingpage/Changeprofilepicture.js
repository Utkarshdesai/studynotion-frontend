import React, { useState ,useRef ,useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import IconBtn from '../../common/IconBtn'
import { FiUpload } from "react-icons/fi"
import { updateDisplayPicture } from '../../../services/operations/SettingsAPI'



export const Changeprofilepicture = () => {

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()



   const [image , setimage] = useState(null)
   const [preview , setpreview] = useState(null)
   const [loading ,setLoading] = useState(false)

   
    const fileInputRef = useRef(null);

 

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
    try {
      console.log("uploading...")
      setLoading(true)
      const formData = new FormData()
      formData.append("displayPicture", image)
      // console.log("formdata", formData)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }

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
          src={preview || user?.image}
          alt={`profile-${user?.firstName}`}
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
