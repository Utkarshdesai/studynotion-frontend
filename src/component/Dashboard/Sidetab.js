import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as Icons from "react-icons/vsc" 
import { matchPath } from 'react-router-dom'

export const Sidetab = ({name ,icon ,path}) => {

    const location = useLocation()

    const Icon = Icons[icon]

    const currenttab = (route) => {
        return matchPath( {path : route} , location.pathname)
    }

  return (
    <div className= 'text-white'>
        
       
        <NavLink to={path}
        className={`relative px-8 py-2 text-sm font-medium ${currenttab(path)? "text-yellow-50"
         : "bg-opacity-0 text-richblack-300"} transition-all duration-200`}
        
        >

            <span
            className={`
            absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50
            ${ currenttab(path) ? "opacity-100" :'opacity-0' }`}
            >
               
            </span>

            <div className="flex items-center gap-x-2">
              
              <Icon className= "text-lg"></Icon>
           

              <span>
                {name}
              </span>


            </div>
            
             </NavLink>
           
        
      

    </div>
  )
}
