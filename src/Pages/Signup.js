import React from 'react'
import {Index} from '../component/Dashboard/Settingpage/Setting'
import { CourseTable } from '../component/Dashboard/Instructorcourse/CourseTable'
import { Coursethumbnail } from '../component/Dashboard/Courseinfo/Coursethumbnail'
import { Catalog } from './Catalog'
import { Viewcourse } from './Viewcourse'
import Template from '../component/auth/Template'
import signupImg from '../assets/Images/signup.webp'


export const Signup = () => {
  return (
    <div >
     <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
 
   
    </div>
  )
}
