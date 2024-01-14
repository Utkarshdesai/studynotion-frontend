import React from 'react'
import { useSelector } from 'react-redux'
import { Coursebuilder } from '../coursebuilder/Coursebuilder'
import { Publish } from '../coursepublish/Publish'
import { Courseinfo_form } from './Courseinfo_form'

export const Renderstep = () => {
 
    const step = useSelector((state) => state.courses.step)
 
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
    <div> 

        <div > 

            {
                steptimeline.map ( (item) => {
                    return ( <div key={item.id}> 
                        
                        <div> {item.id} </div> 
                        <p>  {item.title} </p>
                        
                        
                    </div>)
                })
            }

            </div>


            {/* Render specific component based on current step */}

                
               { step  === 1 &&  (<Courseinfo_form> </Courseinfo_form>) }
                
                { step  === 2  &&  (<Coursebuilder></Coursebuilder>) }  

                { step  === 3   &&  (<Publish></Publish>) }



                </div>
  )
}
