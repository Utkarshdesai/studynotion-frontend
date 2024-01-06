import React, { useState } from 'react'

export const Requirement = ({name , label , setvalue , getvalues ,errors , register }) => {
 
    const [requirement , setrequirement] = useState('') 
    const [requirementlist, setrequirementlist ] = useState('')

    const addrequirement = ()=> {
      if(requirement)
      {
        setrequirementlist([...requirementlist , requirement])
        setrequirement('')
      }
    }

    const removerequirement = (index) => { 

        const updatedRequirements = [...requirementlist]
        updatedRequirements.splice(index, 1)
        setrequirementlist(updatedRequirements)

        
    }
    
 
 
    return (
    <div className="flex flex-col space-y-2">

     <label className="text-sm text-richblack-5"  htmlFor={name}> {label}   <sup className="text-pink-200">*</sup> </label> 
     <div> 
      <input
       type='text'
       placeholder='enter requirement'
       id='require'
       value={requirement}
       onChange={(e)=> setrequirement(e.target.value)}
      />

      <button
      type='button'
      className="font-semibold text-yellow-50"
       onClick={addrequirement}
      > 
        Add
      </button> 

     {
       requirementlist.length > 0 &&
       <ul className="mt-2 list-inside list-disc">

       {  
             requirementlist.map ( (item ,index) => {
                return (<li key={index} 
                className="flex items-center text-richblack-5"
                > 
                 
                 <span> 
                    {item}
                 </span> 
    
                 <button
                 type="button"
                 className="ml-2 text-xs text-pure-greys-300 "
                  onClick={(index) => removerequirement(index)}
                 > 
                   clear
                 </button>
    
    
                 </li>)
             })

        }

      </ul>
    }

     </div>
 
     {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}

    </div>
  )
}
