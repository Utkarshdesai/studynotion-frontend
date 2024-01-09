import React from 'react'
import { Contactform } from '../component/common/Contactform'
import Contactdetail from '../component/common/Contactdetail'

export const Contact = () => {

   
        
   
  return (
      <>
       <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <Contactdetail/>
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <Contactform></Contactform>
        </div>
      </div>
    
      
      
      
      
      
      
      </>
  )


}
