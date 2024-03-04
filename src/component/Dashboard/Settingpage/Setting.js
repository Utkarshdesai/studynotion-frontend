import React from 'react'
import { Changeprofilepicture } from './Changeprofilepicture'
import { Editprofile } from './Editprofile'
import { Updatepassword } from './Updatepassword'
import { Deleteaccount } from './Deleteaccount'

export const Setting = () => {
  return (
    <div>
      <h1  className="mb-14 text-3xl font-medium text-richblack-5"> Edit profile </h1>

      {/* Change Profile Picture */}
     <Changeprofilepicture></Changeprofilepicture>
      {/* Profile */}
      <Editprofile></Editprofile>
      {/* Password */}
      < Updatepassword></Updatepassword>
      {/* Delete Account */}
      <Deleteaccount></Deleteaccount>

    </div>
  )
}
