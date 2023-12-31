import React from 'react'
import { useState } from 'react' 
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from 'react-redux'
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { Backtobtn } from '../component/common/Backtobtn';

export const Resetpassword = () => {

    const [email ,setemail] = useState('')
    const [sentemail , setsentemail] = useState(true)

    const dispatch = useDispatch()

    console.log(email)

    const loading = useSelector ( (state) => state.auth.loading)


    const resetpassword = (e) => {
        e.PrevantDefault()
    }
    
  return (
    <div  className="grid min-h-[calc(100vh-3.5rem)] place-items-center">

    {
       loading ? 
       (<div> Loading... </div>) 

       : 

       (<div className="max-w-[500px] p-4 lg:p-8"> 
            
             <div>
                  <h1  className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5"> 
                 {
                    sentemail ?   "Check mail"   : "Reset your password"
                 }
                  </h1> 

                  <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">

                    {
                       (sentemail) ?  "We have sent the reset email to youremailaccount@gmail.com" 
                         
                         : "Have no fear. We will email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                    }

                  </p>

             </div> 

             <form onSubmit={resetpassword}>
             <div> 
               
                { !sentemail && 

                  (<div> 
                    <label>  </label>
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"> Email Address 
                    <sup className="text-pink-200">*</sup>
                    </p> 

                    <input
                    type='email' 
                    name='email' 
                    required 
                    placeholder='abc@gmail.com'
                    onChange={(event) => setemail(event.target.value)}
                    className="bg-richblack-800 w-[444px] h-[48px] gap-[12px] p-[12px] rounded-lg text-white"
                     />
                  </div>)

                }
                
              </div>

              
              <div>
                
                <button type='submit' 
                className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                >
                  {
                    sentemail ?  "Resend Email"  : "Reset password"
                  }
                </button>

                <div className="mt-6 flex items-center justify-between">
                       <Backtobtn linkto={'/login'} text={'back to login'}></Backtobtn>
                </div>

            </div>
              
              
             </form> 

             </div>)
    }

    </div>
  )
}
