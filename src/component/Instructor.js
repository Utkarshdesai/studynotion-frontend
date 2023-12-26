import React from 'react'
import instructorimg from '../assets/Images/Instructor.png'
import { Higlighttext } from './homepagecorecomponet/Higlighttext'
import { CTAbutton } from './homepagecorecomponet/CTAbutton'

export const Instructor = () => {
  return (
    <div>
        
        <div className='w-[1440px] h-[725] gap-[98px] bg-richblack-900 pl-[90px] pt-[90px] pr-[120px] pb-[120px] flex flex-row'>

           <div className='w-[616px] h-[545px]'>
             <img src= {instructorimg}/>
           </div>

           <div className='w-[486px] h-[284px] gap-[12px] flex flex-col my-auto'> 

              <div className='w-[486px] h-[88px]'>
               <p className='font-inter font-semibold text-3xl leading-4 text-white '> Become an </p>
               <p className='font-inter font-semibold text-3xl leading-4'><Higlighttext text={'instructor '}></Higlighttext> </p>
               
               
              </div> 

              <div className='w-[486px] h-[72px]'>
                <p className='font-inter font-semibold text-xs leading-2 text-richblack-300'>  Instructors from around the world teach millions of students
                     on StudyNotion. We provide the tools and skills to teach what you love.</p>
              </div>

              <div className='w-[211px] h-[100px] gap-[24px] pl-[52px]'>
                 <p className='text-sm'> 
                  <CTAbutton text={'start teaching today'} active={true} linkto={'/signup'} ></CTAbutton>
                 </p>
              </div>

           </div>

        </div>


    </div>
  )
}
