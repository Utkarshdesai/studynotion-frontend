import React from 'react'
import { Higlighttext } from '../component/homepagecorecomponet/Higlighttext'
import know_yourprogress from '../assets/Images/Know_your_progress.png'
import compare_with_others from '../assets/Images/Compare_with_others.png'
import plan_your_lesson from '../assets/Images/Plan_your_lessons.png'
import { CTAbutton } from './homepagecorecomponet/CTAbutton'

export const Courseinfo = () => {
  return (
    <div>

        <div className=' w-[1440px] h-[940px] pl-[90px] pt-[90px] pr-[120px] pb-[120px] gap-[52px] flex flex-col max-w-maxContent'>
          
          <div className='w-[1200px] h-[104px] gap-[12px] pl-[220px] pr-[220px] flex flex-col'>
             
                <div className='flex flex-row gap-1 pl-14  w-[760px] h-[44px] font-inter  '> 
                 <p className='font-inter font-semibold text-richblack-900 leading-4 text-center text-3xl'> Your swiss knife for  </p> 
                  <p className='font-inter font-semibold text-richblack-900 leading-4  text-3xl'>  <Higlighttext  text = {"learning any language "}></Higlighttext> </p> 
                </div>

                 <div className='w-[760px] h-[48px] gap-[12px]'>
                  <p className='text-center text-md font-inter text-richblack-700 leading-'> Using spin making learning multiple languages easy. 
                  with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
                 </div>

          </div>

          <div className='w-[1102px] h-[468px] flex flex-row'>

             <div >
               <img src={know_yourprogress}/>
             </div>

             <div className='mr-[20px]'>
               <img src={compare_with_others}/>
             </div> 

             <div >
               <img src={plan_your_lesson}/>
             </div>

          </div>

          <div className='w-[1200px] h-[84px] gap-[22px] pl-[36px] mx-auto'>
             <div className='w-[160px] h-[48px] pl-[12px] pr-[24px] pt-[12px] pb-[24px] mx-auto'>
                <p className='text-xs'> <CTAbutton active={true} linkto={'/signup'} text={'Learn more'}></CTAbutton> </p> 
             </div>
          </div>

       </div>


    </div>
  )
}
