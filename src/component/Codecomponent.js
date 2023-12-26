import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { CTAbutton } from './homepagecorecomponet/CTAbutton'
import { AiOutlineArrowRight } from "react-icons/ai";

export const Codecomponent = ({heading , position, subheading, ctabutton1  ,ctabutton2 ,codeblock , codecolor, bggradient , }) => {
  return (
    <div className= {`gap-10 flex ${position} justify-between`}>
        
        {/* left side block */}
        <div className='w-[50%] flex flex-col gap-8'>

           <div className='font-inter h-[20%] text-2xl leading-4 text-left mb-3'> 
                    {heading} 
           </div> 

           <div className='text-richblack-300 font-inter text-md text-sm leading-4 mb-5'> 
           
                  {subheading} 
           </div> 

           <div className='flex flex-row gap-8 mb-5'> 

           <CTAbutton active={ctabutton1.active} text={ctabutton1.text} linkto={ctabutton1.linkto} >
              
                <div className='flex gap-2 items-center'>
                <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
              
           </CTAbutton>

            <CTAbutton active={ctabutton2.active} text={ctabutton2.text} linkto={ctabutton2.linkto}></CTAbutton>
         
          
           </div>

   
        </div>

        {/* type animation */}

        <div className='flex flex-row w-[100%] h-fit text-[10px] py-4 lg:w-[500px]'>
            <div className='flex flex-col text-richblack-400 font-inter w-[10%] font-bold'> 
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            </div>
           
            <div className={`flex flex-col font-mono ${codecolor} gap-2 font-bold pr-2 w-[90%]`} > 
            <TypeAnimation 
            sequence={
              [codeblock ,2000 , "" ]}
               repeat={'Infinity'}
               speed={20}
               cursor ={true}
               style={{ whiteSpace : "pre-line" , display:"block" }} 
               omitDeletionAnimation = {true}
             
               >    
            </TypeAnimation>
            </div>
        </div>

       



    </div>
  )
}
