import React from 'react'
import { Sidebar } from '../component/common/Sidebar'
import { Link, Outlet } from 'react-router-dom'


export const Dashboard = () => {

    return (
    <div className='flex flex-row'>

        <div>
            <Sidebar></Sidebar>
      

         
       
          <Outlet></Outlet>            
        </div>
       
     

    </div>
    )
}
