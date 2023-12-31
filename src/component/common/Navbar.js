import React from 'react'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links'
import { Link } from 'react-router-dom'

export const Navbar = () => {

//    const tokenvalue = useSelector((state)=> state.auth.value) 
//    console.log(tokenvalue) 

  return (
    <div className='w-[1440px] h-[30px]  flex flex-row gap-[32px] pl-[20px] pt-[12px] pr-[120px] pb-[120px] bg-richblack-700 '>
 
       <div className='w-[160px] h-[132px]'>
              <Link to={'/'}>
              <img src= {logo}/>
              </Link>
              
       </div> 

       <div className='w-[816px] h-[32px] justify-evenly gap-[4px] flex flex-row text-white items-center'>
            {
                NavbarLinks.map ( (item) => {
                    return (
                        <div >
                           
                           {
                             item.title === "Catalog" ?  
                             <div>   </div> 
                             :  
                                 <Link to={item.path}>
                                 <div className='text-white'>
                                   {item.title}
                                 </div>
                                 </Link>
                             } 


                             {

                             }


                        </div>
                    )
                })
            }

       </div>




    </div>
  )
}
