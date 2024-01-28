import React, { useState } from 'react'
import  {Verifyemail} from './Verifyemail'
import { useSelector } from 'react-redux'
import { Resetpassword } from './Resetpassword'
import { Newpassword } from './Newpassword'
import { Dashboard } from './Dashboard'
import {Renderstep} from '../component/Dashboard/Courseinfo/Renderstep'
import { Courseinfo_form } from '../component/Dashboard/Courseinfo/Courseinfo_form'
import { Coursedetails } from './Coursedetails'

export const Login = () => {


  return (
    <div> 
      
    <Coursedetails></Coursedetails>
  
    </div>
  )
}
