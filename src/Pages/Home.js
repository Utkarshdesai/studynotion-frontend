import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import banner from '../assets/Images/banner.mp4'
import { Codecomponent } from '../component/Codecomponent';
import { Higlighttext } from '../component/homepagecorecomponet/Higlighttext';
import { CTAbutton } from '../component/homepagecorecomponet/CTAbutton';
import { Timelinesection } from '../component/Timelinesection';
import { Courseinfo } from '../component/Courseinfo';
import { Instructor } from '../component/Instructor';
import { Slider } from '../component/Slider';
import { CourseCard } from '../component/CourseCard';
import { useLocation } from 'react-router-dom';

export const Home = () => {

   const location = useLocation() 
  
  return (
    <div >
    
      {/* //section1  */}

       <div className=' relative flex flex-col items-center mx-auto w-11/12 max-w-maxContent gap-[38px] text-white'>

         <div  className='group flex items-center justify-center rounded-full mt-6 p-2 gap-2 
         bg-richblack-800 hover:scale-95 hover:bg-richblack-900 cursor-pointer mx-auto'> 

               <p className='text-richblack-200 font-inter text-md rounded-full font-semibold leading-4 tracking-tighter gap-2 group-hover:bg-richblack-900'> Become an Instructor </p> 
               <AiOutlineArrowRight className='w-[16px] h-[16px] text-white'></AiOutlineArrowRight>
          </div> 

         <div className='flex flex-col gap-[5px] items-center justify-center '> 

            <p className=' flex flex-row gap-2 mt-2 font-Inter text-3xl font-semibold leading-6 tracking-tighter text-white mb-2'> 
            Empower Your Future with 

            <Higlighttext text = {"coding skills"}></Higlighttext>

            </p>

            <p className='mt-3 w-[90%] font-Inter text-md font-semibold leading-4 text-center text-richblack-300 tracking-tighter ml-2 mr-2'>  
                With our online coding courses, you can learn at your own pace, from anywhere in the world, 
                and get access to a wealth of resources,
                including hands-on projects, quizzes, and personalized feedback from instructors. 
            </p>

         </div>


         <div className='flex flex-row gap-[24px] '> 
            
            {/* component */}
             <CTAbutton active={true} linkto={'/signup'} text={"Learn more"}>
              
            </CTAbutton>    

            <CTAbutton active={false} linkto={'/login'} text={"Book a demo"}>
              
              </CTAbutton>  


         </div> 

         <div className='mx-auto'>
            <video 
            autoPlay
            loop
            muted
            controls> 
               <source src= {banner}  type='video/mp4' ></source>
            </video>
         </div>

         <div>
           <Codecomponent 
             heading={
              <div className=''>
                 {`Unlock your`}
                 <Higlighttext text={"Coding potential"}></Higlighttext> 
                 {`with our online courses`}
              </div>
             }
             subheading = 
             {"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
             position = {"flex-row"} 
             ctabutton1={{text : "Try it yourself" ,linkto : "/signup" , active:"true"}}
             ctabutton2={{text : "learn more" , linkto : "/login" , active : "false"}}

             codeblock={`<!DOCTYPE html>\n <html lang="en">\n <meta charset="UTF-8">\n
             <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
             <meta http-equiv="X-UA-Compatible" content="ie=edge">\n 
             <title>HTML 5 Boilerplate</title>\n
             <link rel="stylesheet" href="style.css">\n
             </head>\n  
             `}

             codecolor = {"text-yellow-200"}


           ></Codecomponent>
         
        </div>

        <div>
           <Codecomponent 
             heading={
              <div className=''>
                 {`start`}
                 <Higlighttext text={"Coding "}></Higlighttext> 
                 {`in seconds`}
              </div>
             }
             subheading = 
             {"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
             position = {"flex-row-reverse"} 
             ctabutton1={{text : "countinue lesson" ,linkto : "/signup" , active:"true"}}
             ctabutton2={{text : "learn more" , linkto : "/login" , active : "false"}}

             codeblock={`<!DOCTYPE html>\n <html lang="en">\n <meta charset="UTF-8">\n
             <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
             <meta http-equiv="X-UA-Compatible" content="ie=edge">\n 
             <title>HTML 5 Boilerplate</title>\n
             <link rel="stylesheet" href="style.css">\n
             </head>\n  
             `}

             codecolor = {"text-yellow-200"}


           ></Codecomponent>
         
        </div>
       
        {/* Coursecard */}

        
        <CourseCard></CourseCard>

       </div>  

      

      

    {/* //section 2  */}

    {/* white background */} 

    <div className='text-richblack-900 bg-pure-greys-5'>

       <div class='bg_img'>

       </div>
            
            <div className='w-11/12 max-w-maxContent gap-4 font-inter '>
            
              <div className='flex flex-row justify-center items-center h-[250px] gap-4'> 

               <CTAbutton text={'explore full catlog'} linkto={'/signup'} active={true}></CTAbutton> 

               <CTAbutton text={'Learn more'} linkto={'/login'} active={false}></CTAbutton>
             
              </div>
    

            </div> 
       
          
          <div className='flex flex-row w-11/12 max-w-maxContent mx-auto justify-center items-center'>
            
            <div className='w-[45%]'>
               <p className='font-semibold text-md text-4xl leading-5 font-inter text-richblack-900 mb-4'> Get the skill for </p> 
                <p className='font-semibold text-md text-4xl leading-5 font-inter'> <Higlighttext text={'job that is in demand'}></Higlighttext> </p>
            </div>

            <div className='flex flex-col items-start w-[45%]'>
                   <div className='mb-6 text-richblack-150 text-sm '> The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div> 
                    <CTAbutton text={'Learn more'} linkto={'/login'} active={true}></CTAbutton>
            </div>

          </div>

          <Timelinesection></Timelinesection> 
          <Courseinfo></Courseinfo>
          <Instructor></Instructor> 
           <Slider></Slider>

       </div>
      


    {/* //section 3  */}    
    </div>
  )
}
