import React, { useState } from 'react'
import { Backtobtn } from '../component/common/Backtobtn'
import { useSelector} from 'react-redux/es/hooks/useSelector'

export const Newpassword = () => {
    const [formdata , setformdata] = useState( {
        password :  "" ,
        confirmpassword : '' ,

    })

    const loading = useSelector ( (state) => state.auth.loading)


    const updatepassword = (e) => {
        setformdata((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
          }))
      
    }
  
   return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        {
            loading ? 
            (<div> Loading... </div>) 
            : 
            
            (<div className="max-w-[500px] p-4 lg:p-8"> 

             <form onSubmit={updatepassword}> 
                
                <div> 
                    <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5"> Choose  new password  </h1> 
                    <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100"> Almost done. Enter your new password and youre all set.  </p>
                </div> 

             
            

                   <div> 

              
                    <label> 
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"> 
                         New password 
                         <sup className="text-pink-200">*</sup>
                         </p> 
                     
  
                        <input
                        type='password' 
                        required
                        placeholder='*****' 
                        name="password"
                        className='bg-richblack-800 w-[444px] h-[48px] gap-[12px] p-[12px] rounded-lg text-white'
                        onChange={(e) => updatepassword(e)}
                        /> 
                    </label> 

                    <label> 
                        <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'> 
                        confirm New password
                        <sup className="text-pink-200">*</sup>
                        </p> 

                        <input
                        type='password' 
                        required
                        placeholder='*****' 
                        name="confirmpassword"
                        className='bg-richblack-800 w-[444px] h-[48px] gap-[12px] p-[12px] rounded-lg text-white'
                        onChange={(e) => updatepassword(e)}
                        /> 
                    </label>
                </div>

                   <div > 
         
                    <button type='submit'
                     className='mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900'
                    > 
                        Reset password
                    </button>

                    <div className="mt-6 flex items-center justify-between"> 
                    <Backtobtn 
                        linkto= {'/login'}
                        text= {'Back to login'}
                        >
                    </Backtobtn>
                        
                    </div>
                    

                  </div>

                </form>   
            
            </div>)
        }
      
      </div>     
  )
}

