import React from 'react'
import timeimg from   '../assets/Images/TimelineImage.png'
import logo1 from '../assets/TimeLineLogo/Logo1.svg'
import logo2 from '../assets/TimeLineLogo/Logo2.svg'
import logo3 from '../assets/TimeLineLogo/Logo3.svg'
import logo4 from '../assets/TimeLineLogo/Logo4.svg'


export const Timelinesection = () => {

    const skill = [
          {
             logo : logo1 ,
             typeofskill : "leadership" ,
             quoet:"fully commited to sucess company"
          },
          {
            logo : logo2 ,
            typeofskill : "leadership" ,
            quoet:"fully commited to sucess company"
         },
         {
            logo : logo3 ,
            typeofskill : "leadership" ,
            quoet:"fully commited to sucess company"
         },
         {
            logo : logo4 ,
            typeofskill : "leadership" ,
            quoet:"fully commited to sucess company"
         }
       ]
  return (
    <div>
       
       <div className='flex flex-row w-11/12 max-w-maxContent gap-10 mx-auto items-start mt-10 p-4'>
           
            <div  className='w-[410px] h-[432px] gap-[32px]  my-auto '>
               {
                skill.map((item ,index) => {
                     return (
                       <div className='flex flex-row  pl-[16px] pr-[12px] pt-[16px] pb-[12px] gap-[24px]' key={index} > 
                         
                         <div className='flex flex-col w-[22px] h-[22px]'> 
                            <img src={item.logo} />
                         </div>

                         <div className='flex flex-col'> 
                               <p> {item.typeofskill} </p>
                               <p> {item.quoet} </p>
                         </div>
                     </div>)
                     
                })
               }
           </div>

              <div className=''>

                  <img src={timeimg} alt='"timeline image w-[714px] h-[545px]'/> 
                 
                  <div className= 'relative  p-[42px] left-[10%] mt-[-20] bg-caribbeangreen-100 text-black justify-evenly flex flex-row h-[120px]  w-[511px] '>
                      <p> 10 </p> 
                      <p> years of experience </p>
                      <p> 250 </p>
                      <p> Types of courses </p>

                  </div>
               </div>

       </div>

    </div>
  )
}
