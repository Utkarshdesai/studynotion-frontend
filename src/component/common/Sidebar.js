import React from 'react'
import  {sidebarLinks}  from '../../data/dashboard-links'
import { useSelector } from 'react-redux'
import { Sidetab } from '../Dashboard/Sidetab'
import { VscSignOut} from 'react-icons/vsc'
import ConfirmationModal from '../common/ConfirmationModal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Sidebar = () => {

    const userdata = useSelector((state) => state.auth.userdata)
    const loading = useSelector((state)  => state.auth.loading) 
    // to keep track of confirmation modal
    const [confirmationModal, setConfirmationModal] = useState(null)

     const dispatch = useDispatch()
     const navigate = useNavigate()
    


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
                     
        <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => navigate('/dashboard/my-profile'),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>

          {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}

         
    </div>

  
               
            

   
  )
}
