import React from 'react'
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const Backtobtn = ({linkto , text}) => {
  return (
    <div >
        <Link to = {linkto}>
                        <p className="text-richblack-5 flex items-center gap-x-2">
                        <BiArrowBack /> 
                       {text}
                      </p >
        </Link>
    </div>
  )
}
