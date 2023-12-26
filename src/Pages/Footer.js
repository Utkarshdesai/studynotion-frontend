import React from 'react'
import logo from '../assets/Logo/Logo-Full-Light.png'

export const Footer = () => {
  return (
    <div>

      <div className='w-[1440px] h-[728px] flex flex-col gap-[32px] pl-[52px] pr-[120px] pt-[52px] pb-[120px] bg-richblack-600' >

      <div className='w-[1238px] h-[538px] gap-[52px] flex flex-row'>
         
          <div className='w-[54px] h-[332px] gap-[12px] flex flex-row'>
             
              <div className='flex flex-col w-[174px] h-[362px] gap-y-[12px]'>
                
                 <div className='w-[160px] h-[32px]'>
                    <img src = {logo}/>
                 </div> 

                 <div className='w-[174px] h-[24px] '>
                    <p className='text-md font-semibold font-inter leading-3 text-richblack-100'> Company </p>
                 </div>

                 <div className='w-[174px] h-[82px] gap-[8px] flex flex-col'>
                   <p className='text-sm text-richblack-400 font-inter h-[22px] leading-3'> About </p>
                   <p className='text-sm text-richblack-400 font-inter h-[22px] leading-3'> Careers </p>
                   <p className='text-sm text-richblack-400 font-inter h-[22px] leading-3'> Affiliates  </p>
                 </div> 

                 



              </div>

          </div>

      </div>


      </div>


    </div>
  )
}
 