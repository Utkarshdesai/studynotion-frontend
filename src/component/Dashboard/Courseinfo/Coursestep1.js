import React from 'react'
import { Courseupload_tips } from './Courseupload_tips'
import { Renderstep } from './Renderstep'

export const Coursestep1 = () => {

  return (
    <div >
      <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Course
          </h1>
          <div className="flex-1">
            <Renderstep />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div> 
        <Courseupload_tips></Courseupload_tips>
       </div> */
        
      </div>
    </>

        
      


  
   
    </div>
  )
}
