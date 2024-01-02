import React from 'react'
import { Aboutsection_1 } from '../component/about/Aboutsection_1'
import { Aboutsection_2 } from '../component/about/Aboutsection_2'
import { Gridsection } from '../component/about/Gridsection'
import { Contactform } from '../component/common/Contactform'
import { useLocation } from 'react-router-dom'
export const About = () => {
  
 
  return (
    <div className='mx-auto mt-[100px] text-white'>
  
     
       {/* secction 1  */} 
       <Aboutsection_1></Aboutsection_1> 
         {/* secction 2  */} 
         <Aboutsection_2></Aboutsection_2>
           {/* secction 3  */} 
           <Gridsection></Gridsection> 
             {/* secction 4  */}
             <Contactform
              heading = {'Get in touch'} 
             subheading ={ "We'd love to here for you, Please fill out this form."}>
             </Contactform>
    
        
    </div>
  )
}
