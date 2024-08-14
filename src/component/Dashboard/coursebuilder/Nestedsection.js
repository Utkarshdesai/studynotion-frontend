import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {RxDropdownMenu} from "react-icons/rx"
import {MdEdit} from "react-icons/md"
import {RiDeleteBin6Line} from "react-icons/ri"
import {BiDownArrow} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import ConfirmamtionModal from '../../common/ConfirmationModal'


export const Nestedsection = ({handleeditsection}) => {

  const section = [ 
    {
      title : "html"
    },
    {
      title : "css"
    },
    {
      title : "js"
    },
  ]

  const token =  useSelector ( (state) => state.auth.token)
  const course  = useSelector ( (state) => state.courses.course) 

  const [addsubsection , setaddsubsection ] = useState(null)
  const [editsubsection , seteditsubsection] = useState(null)
  const [viewsubsection , setviewsubsection] = useState(null) 
  const [confirmamtionModal , setconfirmamtionModal] = useState(null) 

  const deletesection = () => {
    // handle asnyc opeation 
  } 

  const deletesubsection = () => {
    // handle asny operation
  }


  return (
    <div>
     {/* map on section field */}
        {
          course?.courseContent?.map( (section) => {
              return (<> 
              
              <div> 
               <div> 
                 <RxDropdownMenu/>
               </div>

               <p> 
                {section.sectionName}
               </p> 

               <button 
                onClick={() => handleeditsection ()}
               > 
                 <MdEdit/>
               </button> 

               <button 
                  onClick={ () => setconfirmamtionModal ({
                    text1 :" Delete this section" , 
                    text2 :"do you really want to delete this section" ,
                    btn1Text : 'yes' ,
                    btn2Text : 'cancel' ,
                    btn1Handler : deletesection(), 
                    btn2Handler : setconfirmamtionModal(null)
                  })}
                
               
               
               > 
                <RiDeleteBin6Line/>
               </button>

               <span>|</span>
                        
              <BiDownArrow className={`text-xl text-richblack-300`} />
          </div>
              
              
              
              </>)
          })
        }

        {/* sub section */} 

         {
           section?.subsection?.map( (data) => {
              return (<>
              
                  <div> 
 
                    <div> 
                     <BiDownArrow/>
                    </div>  

                    <p> {data.title} </p> 

                    <div>
                      <button> 
                        <MdEdit/>
                      </button> 
                    </div> 

                    <div> 
                      <button 
                       onClick ={ () => setconfirmamtionModal ( {
                        text1 :" Delete this Subsection" , 
                        text2 :"do you really want to delete this Subsection" ,
                        btn1Text : 'yes' ,
                        btn2Text : 'cancel' ,
                        btn1Handler : deletesubsection(), 
                        btn2Handler : setconfirmamtionModal(null)
                      })}
                    
                      > 
                      <RiDeleteBin6Line/>
                      </button>
                     
                    </div>




                  </div>
              
              
              
              </>)
           })
         }
        <div>

            <button
               className='mt-4 flex items-center gap-x-2 text-yellow-50'
               onClick={setaddsubsection()}
              > 
                  <AiOutlinePlus />
                   Add lecture
            </button>

        </div>

        
           { confirmamtionModal ? (
               <ConfirmamtionModal modalData={confirmamtionModal} />
          ) : (
            <></>
          )}
    
        

    </div>
  )
}
