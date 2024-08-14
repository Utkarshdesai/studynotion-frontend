import React from 'react'
import { Higlighttext } from '../homepagecorecomponet/Higlighttext'
import aboutimg_1 from '../../assets/Images/aboutus1.webp' 
import aboutimg_2 from '../../assets/Images/aboutus2.webp' 
import aboutimg_3 from '../../assets/Images/aboutus3.webp' 

export const Aboutsection_1 = () => {
  return (
    <div >
       <div   >
          <div>
              <h1 className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'> 
              Driving Innovation in Online Education for 
              <Higlighttext text={'bright Future'} ></Higlighttext>
              </h1>
          </div>

             <div>
                 <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'>
                 Studynotion is at the forefront of driving innovation in online education. 
                 We're passionate about creating a brighter future by 
                 offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                 </p>
            </div> 

            <div className="sm:h-[70px] lg:h-[150px]"> 

               <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5"> 
                 <img src={aboutimg_1} alt='about1-img' loading='lazy'/>
               

               
                 <img src={aboutimg_2} alt='about1-img'/>
              

               
                 <img src={aboutimg_3} alt='about1-img'/>
               </div>

            </div> 

            <div className='m'>
                 <p className='text-white'> 
                 We are passionate about revolutionizing the way we learn. 
                 Our innovative platform combines technology, expertise, 
                 and community to create an unparalleled educational experience.
                 </p>
               </div>

       </div>
    </div>
  )
}
