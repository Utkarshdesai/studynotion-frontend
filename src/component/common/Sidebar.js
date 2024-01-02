import React from 'react'
import  {sidebarLinks}  from '../../data/dashboard-links'
import { useSelector } from 'react-redux'
import { Sidetab } from '../Dashboard/Sidetab'
import { VscSignOut} from 'react-icons/vsc'

export const Sidebar = () => {

    const userdata = useSelector((state) => state.auth.userdata)
    const loading = useSelector((state)  => state.auth.loading) 

    


  return (
    <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 px-5">
        
       <div className='flex flex-col'>
        {
          sidebarLinks.map( (item) => {
            // check account type
            return (<div >  

                <Sidetab key={item.id} 
                name = {item.name} 
                path={item.path} 
                icon={item.icon}></Sidetab>

            </div>)
          } )  
        } 
    </div> 

        <Sidetab
        name={'Setting'}
        path={'/dashboard/setting'}
        icon ={"VscSettingsGear"}
        />
                     
     
          <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span className='text-white'> Logout</span>
            </div>
         
    </div>

  
               
            

   
  )
}
