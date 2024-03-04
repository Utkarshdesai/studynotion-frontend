import React, { useState } from 'react'
import  {Verifyemail} from './Verifyemail'
import { useSelector } from 'react-redux'
import { Resetpassword } from './Resetpassword'
import { Newpassword } from './Newpassword'
import { Dashboard } from './Dashboard'
import {Renderstep} from '../component/Dashboard/Courseinfo/Renderstep'
import { Courseinfo_form } from '../component/Dashboard/Courseinfo/Courseinfo_form'
import { Coursedetails } from './Coursedetails'
import loginImg from '../assets/Images/login.webp'
import Template from '../component/auth/Template'

export const Login = () => {


  return (
    <div> 
     <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />

    
  
    </div>
  )
}
