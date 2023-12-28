import React from 'react'
import { CTAbutton } from '../homepagecorecomponet/CTAbutton';
import { Higlighttext } from '../homepagecorecomponet/Higlighttext';

export const Gridsection = () => {

    const LearningGridArray = [
        {
          order: -1,
          heading: "World-Class Learning for",
          highlightText: "Anyone, Anywhere",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
          BtnText: "Learn More",
          BtnLink: "/",
        },
        {
          order: 1,
          heading: "Curriculum Based on Industry Needs",
          description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
        },
        {
          order: 2,
          heading: "Our Learning Methods",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 3,
          heading: "Certification",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 4,
          heading: `Rating "Auto-grading"`,
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
        {
          order: 5,
          heading: "Ready to Work",
          description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
        },
      ];


  return (
    <div className='grid grid-rows-2 grid-cols-4 w-[1440px]  mt-2'>

        {
            LearningGridArray.map ( (item ,index) => {
                return (<div  key={item.order} 
                
                 
                    className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                    ${
                        item.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
                    }
                    ${item.order === 3 && "lg:col-start-2"}
                    ${item.order < 0 && "bg-transparent"}
                    `}
                    >
  
                    {
                        (item.order < 0 ) ?  

                        (<div className='col-span-2 '> 
                        
                           
                                <h1 className='text-white'> {item.heading} </h1> 
                                 <h1  className='text-white'> 
                                    <Higlighttext text={item.highlightText} ></Higlighttext> 
                                </h1>
                                <p  className='text-white'>  {item.description}</p>
                                <CTAbutton text={'Learn more'} linkto={'/signup'} active={true}></CTAbutton>
                        
                         </div>) : 
                        
                        (<div> 
                          
                        
                             <div className='text-whitw'> 
                                 <h1 className='text-white'> {item.heading} </h1> 
                                 <p className='text-white'> {item.description}</p>
                                
                             </div>
                          
                        </div>)
                    }
                    
                     </div>)
            })
        }





    </div>
  )
}
