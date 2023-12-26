import React, { useState } from 'react'
import { Higlighttext } from './homepagecorecomponet/Higlighttext'
import { HomePageExplore } from '../data/homepage-explore'
import { Codingcard } from './Codingcard'

export const CourseCard = () => {

    const [currenttag , setcurrenttag] = useState(HomePageExplore[0].tag)
    const [currentcourse , setcurrentcourse] = useState(HomePageExplore[0].courses)

   console.log(currentcourse )

    const changetag = (value) => {
          setcurrenttag (HomePageExplore[value].tag) 
         
          setcurrentcourse (HomePageExplore[value].courses)
          
         
    }
  return (
    <div>

       <div className='w-[1440px] h-[820px] gap-[92px] pl-[90px] pr-[120px] pt-[90px] pb-[120px]'>
           
            <div className='w-[1200px] h-[560px] gap-[36px] flex flex-col'>
                <div className='w-[1200px] h-[76px] gap-[8px] '>
                    <p className='text-center font-inter font-semibold leading-3 text-white text-3xl'> Unlock the power </p>
                    <p className='mx-auto font-inter font-semibold leading-3 text-3xl'> 
                      <Higlighttext  text={'of code'}></Higlighttext> </p> 
                    <p className='text-richblack-300 font-inter text-md font-sm text-center'>
                    Learn to Build Anything You Can Imagine
                    </p>
                </div>

                <div className='w-[70%] h-[8%] gap-16 bg-richblack-600 mx-auto rounded-md flex flex-row justify-evenly p-2' >
                   {
                     HomePageExplore.map((element , index)=>{
                         return (
                             <div className='bg-richblack-900 rounded-md pl-2 pr-2' key={index}
                               onClick={()=> changetag(index)}
                              > 
                                {element.tag}
                            </div>
                         )
                     })
                   }

                </div> 

                <div className='flex flex-row'>
 
                        {
                        currentcourse.map( (ele ) => {
                            return (
                                <div>
                                <Codingcard skill={ele} key={ele.heading}></Codingcard>
                                </div>
                            )
                        })
                    }


                </div>
           

            </div>

       </div>


    </div>
  )
}

