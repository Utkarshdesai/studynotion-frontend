import React from 'react'
import { Contactform } from '../component/common/Contactform'

export const Contact = () => {

    const content = [
        {
          text : "Chat on us"  ,
          subtext :  "Our friendly team is here to he",
        },
 
        {
            text : "Visit us"  ,
            subtext :  "Come and say hello at our office HQ Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"

           
        }, 

        {
            text : "Call us"  ,
            subtext :  "Mon - Fri From 8am to 5pm +123 456 7869"
        },
        
    ]
  return (
    <div className='flex flex-row gap-8 text-white mx-auto w-[11/12]'>
   
       <div className='w-[40%]'>

        {
            content.map((ele)=> {
                return (<div  key={ele.text}> 
                    
                    <p> {ele.text}</p>
                    <p> {ele.subtext} </p>
                    
                     </div>)
            })
        }
       </div> 

        <div className='w-[60%]'>
            <Contactform heading={`Got a Idea? We've got the skills. Let's team up`} 
            subheading={`Tell us more about yourself and what you're got in mind.`}></Contactform>
        </div>



    </div>
  )
}
