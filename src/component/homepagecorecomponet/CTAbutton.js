import React from 'react'

export const CTAbutton = ({text , active , linkto}) => {
  return (
    <div className={` hover:scale-95 gap-2 hover:cursor-pointer text-xl font-inter justify-center items-center rounded-md p-2 
         ${active ? "bg-yellow-100 text-black"  : "bg-richblack-800 text-white" }`}>
        {text} 
    </div>
  )
}
