import React, { useState } from 'react'

export const Codingcard = ({skill  }) => {

   

   

  return (
    <div className=' pl-[32px] pr-[52px] pb-[52px]  '>

        <div className='flex flex-row' >
            
          
               
                <div > 
                 
                 <p>{skill.heading} </p>
                 <p>{skill.description} </p> 
                 <p>{skill.level} </p> 
                 <p>{skill.lessionNumber} </p>


                 </div>
                 
                
             
        </div>

    </div>
  )
}
