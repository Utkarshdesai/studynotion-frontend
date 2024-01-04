import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Progressbar from '@ramonak/react-progress-bar'

export const Enrolledcourse = () => {

    const [enrollstudent ,setenrollstudent] = useState([])

    const loading = useSelector((state)=> state.auth.loading)

    // get data from backend call API 

  return (
    <div className='text-white'>

       <div>
          <h1> Enrolledcourse </h1>
       </div> 

      {
        loading ?  ( <div className='spinner'> Loading... </div>) :
        (

            // check empthy course 
            <div>

                <div className='flex flex-row gap-4'> 
                    <div> All </div> 
                    <div> pending </div> 
                    <div> completed </div>
                </div>

                <div> 
                   {/* itrate over course */}


                 <div> 
                    <p> course duration </p>
                 </div>

                 <div> 
                   <Progressbar
                    completed={60}
                    height='8px'
                    isLabelVisible={false} 
                   
                   />
                 </div>

                </div>
                
            </div>
        )
      }



    </div>
  )
}
