import React from 'react'
import { Higlighttext } from '../homepagecorecomponet/Higlighttext'
import aboutimg_1 from '../../assets/Images/aboutus1.webp' 
import aboutimg_2 from '../../assets/Images/aboutus2.webp' 
import aboutimg_3 from '../../assets/Images/aboutus3.webp' 

export const Aboutsection_1 = () => {
  return (
    <div >
       <div className='gap-9'>
          <div>
              <h1 className='text-center text-white '> 
              Driving Innovation in Online Education for 
              <Higlighttext text={'bright Future'} ></Higlighttext>
              </h1>
          </div>

             <div className='mb-2'>
                 <p className='text-white'>
                 Studynotion is at the forefront of driving innovation in online education. 
                 We're passionate about creating a brighter future by 
                 offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                 </p>
            </div> 

            <div className='flex flex-row mx-auto'> 

               <div> 
                 <img src={aboutimg_1} alt='about1-img'/>
               </div>

               <div> 
                 <img src={aboutimg_2} alt='about1-img'/>
               </div> 

               <div> 
                 <img src={aboutimg_3} alt='about1-img'/>
               </div>

            </div> 

            <div className='mt-2'>
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
