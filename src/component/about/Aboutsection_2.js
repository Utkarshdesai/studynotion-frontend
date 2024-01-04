import React from 'react'
import foundingstory from '../../assets/Images/FoundingStory.png'

export const Aboutsection_2 = () => {

    const achievment = [
        {
          numbers : "5k+" ,
          text : "Active students"
        }, 

         {
            numbers : "10+" ,
            text : "Mentors"
          },  

          {
            numbers : "200+" ,
            text : "Courses"
          },  

          {
            numbers : "50k+" ,
            text : "Awards"
          }, 

       

    ]
      
    


  return (
    <div className='flex flex-col'>

        <div className='flex flex-row gap-8'>

            <div>
                <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] "> 
                Our Founding Story 
                </h1>

               <p  className="text-base font-medium text-richblack-300 lg:w-[95%]"> 
               Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible,
                flexible, and high-quality learning opportunities in a rapidly evolving digital world.
               </p>

               <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
               As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge 
               these gaps and empower individuals from all walks of life to unlock their full potential.
               </p>
            </div>

            <div>
              <img src={foundingstory}
              className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
        </div>



        <div className="my-24 flex lg:w-[40%] flex-col gap-10" >

            <div className=''>
                <h1  className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
                </h1>

                <p className="text-base font-medium text-richblack-300 lg:w-[95%]"> 
                With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology 
                with engaging content, fostering a dynamic and interactive learning experience.
                </p> 

            </div>


            <div className="my-24 flex lg:w-[40%] flex-col gap-10" >
                <h1  className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
                </h1>

                <p className="text-base font-medium text-richblack-300 lg:w-[95%]"> 
                our mission goes beyond just delivering courses online. We wanted to create a 
                vibrant community of learners, where individuals can connect, collaborate, and learn from one another.
                 We believe that knowledge thrives in an environment of sharing and dialogue, and we foster
                 this spirit of collaboration through forums, live sessions, and networking opportunities.
                </p>

            </div>

            
        </div> 


        <div className='text-white bg-richblack-200 flex flex-row'>
            {
                achievment.map( (item) => {
                    return (<div className='flex flex-row w-full justify-evenly' key={achievment.numbers}> 
                      
                    <div>
                        <div className='flex flex-col '>
                        <h1>
                             {item.numbers}
                        </h1> 
                        <p>
                            {item.text}
                        </p>
                      </div>
                       

                     </div>
                       
                    </div>)
                })
            }
        </div>





    </div>
  )
}
