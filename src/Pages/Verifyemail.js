import React, { useState } from 'react'
import Otpinput from "react-otp-input"
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from 'react-redux'
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch } from 'react-redux'; 
import { Backtobtn } from '../component/common/Backtobtn';

export const Verifyemail = () => {

  const [otp , setotp] = useState('') 

  const loading = useSelector( (state) => state.auth.loading) 

  const userdata = useSelector((state) => state.auth.loading)

  const verifyemailand_submit = (e) => {
    e.PrevantDefault()
  }

  

  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center"> 

     {
        loading ?
        
        <div className='text-white'> Loading... </div>
        
        :
        (
        <div> 
    
            <div>
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"> Verify email </h1> 
            <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100"> A verification code has been sent to you. 
                Enter the code below </p>
            </div> 


            <form onSubmit={verifyemailand_submit}>
                <div > 
                    <Otpinput 
                         value={otp}
                         onChange={setotp}
                         numInputs={6}
                         renderInput={(props) => (
                           <input
                             {...props}
                             placeholder="-"
                             style={{
                               boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                             }}
                             className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                           />
                         )}
                         containerStyle={{
                           justifyContent: "space-between",
                           gap: "0 6px",
                         }}
         
                    />

                   

                </div>

       
                    <button onClick='submit'
                    className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
                     >
                        Verify Email
                    </button>
                            

                 <div className="mt-6 flex items-center justify-between"> 
                            <Backtobtn 
                            linkto={'/login'}
                            text= {'Back to login'}
                            >
                            </Backtobtn>


                     <button  
                     className="flex items-center text-blue-100 gap-x-2"
                     >
                            
                        <RxCountdownTimer />
                        Resend it
                
                     </button>

                </div>
                        
                    </form>
 


            </div>
        )
     }

       
   
        
     


    </div>
  )
}
