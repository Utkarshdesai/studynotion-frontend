import React, { useEffect, useState } from 'react'
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux"

export const Chipinput = ({label ,name ,placeholder , register , errors , setValue , getValues}) => {

  const [chip , setchip] = useState([]) 

  const {editcourse ,course } = useSelector ((state)=> state.courses)

  useEffect(() => {
    if (editcourse) {
      // console.log(course)
      setchip(course?.tag)
    }
    register(name, { required: true, validate: (value) => value.length > 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


    const addchip = (e) => {
        if(e.key == "enter" || e.key == "") 
        {
            e.preventDefault()
            // Get the input value and remove any leading/trailing spaces
            const chipValue = e.target.value.trim()
            // Check if the input value exists and is not already in the chips array
            if (chipValue && !chip.includes(chipValue)) {
                // Add the chip to the array and clear the input
                const newChips = [...chip, chipValue]
                setchip(newChips)
                e.target.value = ""
              }
        

        } 
    }

    const removetag = (value) => {
        const updatetag = chip.filter( (item) => item.index !== value)
        setchip(updatetag)
    }

    useEffect ( ()=> {
        setValue(name ,chip)
    },[chip])

  return (
   <>
    <div  className="flex flex-col space-y-2"> 
      <label className="text-sm text-richblack-5" htmlFor={name}> 
         {label}  <sup className="text-pink-200">*</sup>
      </label> 

          {/* Render the chips and input */}  
          <div className="flex w-full flex-wrap gap-y-2"> 

            {/*  map on it */} 

             {  
                chip.map ( (item , index) => {
                    return (
                    <div 
                    className="m-1 flex items-center rounded-full bg-yellow-400 px-2 py-1 text-sm text-richblack-5"
                    key={index}  
                    >  
                {/* Render the chip value */}
                    {item}

             {/* Render the button to delete the chip */}
                     <button 
                        className="ml-2 focus:outline-none"
                        onClick={() => removetag(index)}
                       >        
                           <MdClose className="text-sm" />
                      </button>
                    
                    
                    </div>)
                })
             }

             {/* input field */} 
             <input 
              name={name} 
              placeholder = {placeholder} 
              type='text'
              id={name}
              className="form-style w-full" 
              onKeyDown={addchip}
                         
             />
          </div>

            {/* Render an error message if the input is required and not filled */}
            {errors[name] && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                {label} is required
                </span>
            )}

    </div>

   </>
  )
}

