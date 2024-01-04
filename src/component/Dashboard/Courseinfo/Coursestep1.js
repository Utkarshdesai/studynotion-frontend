import React from 'react'
import { Courseinfo_form } from './Courseinfo_form' 
import { Courseupload_tips } from './Courseupload_tips'
import { useSelector } from 'react-redux'
import { Coursebuilder } from '../coursebuilder/Coursebuilder'
import { Publish } from '../coursepublish/Publish'

export const Coursestep1 = () => {

    const step = useSelector((state) => state.course.step)
 
    const steptimeline = [
        { 
           id: 1 ,
           title: "course information"

        },
      
        { 
            id: 2 ,
            title: "course builder"
 
        },

        { 
            id: 3 ,
            title: "publish"
 
        },
       
    ]



  return (
    <div >

        <div className="relative mb-2 flex w-full justify-center"> 

        {
            steptimeline.map ( (item) => {
                return ( <div key={item.id}> 
                    
                    <div> {item.id} </div> 
                     <p>  {item.title} </p>
                    
                    
                 </div>)
            })
        }

      </div>
   
        <div> 
        <Courseupload_tips></Courseupload_tips>
       </div>

  
   {/* Render specific component based on current step */}

     
       { step  === 1 &&  <Courseinfo_form> </Courseinfo_form> }
      
       { step  === 2  &&  <Coursebuilder></Coursebuilder> }  

       { step  === 3   &&  <Publish></Publish> }

    </div>
  )
}
