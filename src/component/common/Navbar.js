import React, { useState } from 'react'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links'
import { useSelector, useDispatch } from 'react-redux'
import { Link, matchPath, useLocation } from 'react-router-dom'


export const Navbar = () => {

  const location = useLocation()
 
  
  const token = useSelector((state) => state.auth.token) 
  const userdata = useSelector ( (state) => state.auth.userdata)
 
  const changetab = (route) => {
    return matchPath ( {path: route} , location.pathname)
  }
  
  

  


  return (
    <div  className='flex flex-row justify-around'>
 
       <div className='w-[160px] '>
              <Link to={'/'}>
              <img src= {logo}/>
              </Link>
              
       </div> 
     
       <div className='w-[816px]  justify-evenly gap-[4px] flex flex-row text-white items-center'>
            {
               
                NavbarLinks.map ( (item) => {
                    return (
                        <div 
                        
                         key={item.path}
                        
                        >

                          
                           
                           {
                             item.title === "Catalog" ?  
                             <div>   </div> 
                             :  
                                 <Link to={item.path}>
                                 <div key={item.path}
                                
                                
                                 >
                                   {item.title}
                                 </div>
                                 </Link>
                             } 

                        </div>
                    )
                })
            }

       </div>

       {/* Login button */}

            {
               (token == null ) &&
                <div className='text-white'>
                 
                  <Link to='/login'>
                    
                    <button> 
                      Log IN 
                    </button>
                  
                  </Link>
                  
                </div>
            }

        {/* Sign up  */}

        {
               (token == null ) &&
                <div className='text-white'>
                 
                  <Link to='/signup'>
                    
                    <button> 
                      Sign UP
                    </button>
                  
                  </Link>
                  
                </div>
            }

             {/* Dashboard */}

             {
               (token && userdata ) &&
                <div className='text-white'>
                 
                  <Link to='/dashboard'>
                    
                 {/* new component render */}
                  
                  </Link>
                  
                </div>
            }




    </div>
  )
}
