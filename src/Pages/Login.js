import React, { useState } from 'react'
import  {Verifyemail} from './Verifyemail'
import { useSelector } from 'react-redux'
import { Resetpassword } from './Resetpassword'
import { Newpassword } from './Newpassword'
import { Dashboard } from './Dashboard'

export const Login = () => {


  return (
    <div> 
      
      <Dashboard></Dashboard>
    </div>
  )
}
