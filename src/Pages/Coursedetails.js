import React, { useEffect ,useState} from 'react' 
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
//import { ReactMarkdown } from "react-markdown/lib/react-markdown"s
import GetAvgRating from '../utils/avgRating' 
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
//import FormatDate from '../services/FormatDate'
import Ratingstar from '../component/common/Ratingstar'
import {Footer} from './Footer' 
import ConfirmationModal from '../component/common/ConfirmationModal'
import { Coursebuycard } from '../component/course/Coursebuycard'






export const Coursedetails = () => {   

    const token = useSelector ((state) => state.auth.token) 
    const payment = useSelector((state) => state.courses.payment)
    const user = useSelector ( (state) => state.profile.profiledata)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  

    // Getting courseId from url parameter
    const { courseId } = useParams()
    // console.log(`course id: ${courseId}`)  

    // Declear a state to save the course details
    const [response, setResponse] = useState(null)
    const [confirmationModal, setConfirmationModal] = useState(null) 

     // Calling fetchCourseDetails fucntion to fetch the details
    //  useEffect(() => {
    //     // Calling fetchCourseDetails fucntion to fetch the details
    //     ;(async () => {
    //       try {
    //         // const res = await fetchCourseDetails(courseId)

    //         // console.log("course details res: ", res)
    //         setResponse(res)
    //       } catch (error) {
    //         console.log("Could not fetch Course Details")
    //       }
    //     })()
    //   }, [courseId])
    

    // Calculating Avg Review count
    // const [avgReviewCount, setAvgReviewCount] = useState(0)
    // useEffect(() => {
    //     const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews)
    //     setAvgReviewCount(count)
    // }, [response])
    // // console.log("avgReviewCount: ", avgReviewCount) 


     const handleBuyCourse = () => {

     }
   
     if (payment) {
      // console.log("payment loading")
      return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      )
    }
  


    
  return (
    <>
        <div className={`relative w-full bg-richblack-800`}>
        {/* Hero Section */}
        <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
          <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            <div className="relative block max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                //src={thumbnail}
                alt="course thumbnail"
                className="aspect-auto w-full"
              />
            </div>
            <div
              className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
            >
              <div>
                <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                  {/* {courseName} */}
                </p>
              </div>
              {/* <p className={`text-richblack-200`}>{courseDescription}</p> */}
              <div className="text-md flex flex-wrap items-center gap-2">
                {/* <span className="text-yellow-25">{avgReviewCount}</span> */}
                {/* <RatingStar Review_Count={avgReviewCount} Star_Size={24} /> */}
                {/* <span>{`(${ratingAndReviews.length} reviews)`}</span> */}
                {/* <span>{`${studentsEnrolled.length} students enrolled`}</span> */}
              </div>
              <div>
                <p className="">
                  {/* Created By {`${instructor.firstName} ${instructor.lastName}`} */}
                </p>
              </div>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="flex items-center gap-2">
                  {" "}
                  {/* <BiInfoCircle /> Created at {formatDate(createdAt)} */}
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
              <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                {/* Rs. {price} */}
              </p>
              <button className="yellowButton" onClick={handleBuyCourse} >
                Buy Now
              </button>
              <button className="blackButton" >Add to Cart</button>
            </div>
          </div>
          {/* Courses Card */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
             <Coursebuycard
              // course={response?.data?.courseDetails}
              setConfirmationModal={setConfirmationModal}
              // handleBuyCourse={handleBuyCourse}
            /> 
          </div>
        </div>
      </div>
      <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          {/* What will you learn section */}
          <div className="my-8 border border-richblack-600 p-8">
            <p className="text-3xl font-semibold">What you'll learn</p>
            <div className="mt-5">
              {/* <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown> */}
            </div>
          </div>

          {/* Course Content Section */}
          <div className="max-w-[830px] ">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">Course Content</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2">
                  <span>
                    {/* {courseContent.length} {`section(s)`} */}
                  </span>
                  <span>
                    {/* {totalNoOfLectures} {`lecture(s)`} */}
                  </span>
                  {/* <span>{response.data?.totalDuration} total length</span> */}
                </div>
                <div>
                  <button
                    className="text-yellow-25"
                    // onClick={() => setIsActive([])}
                  >
                    Collapse all sections
                  </button>
                </div>
              </div>
            </div>

            {/* Course Details Accordion todo */}
            <div className="py-4">
              {/* {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))} */}
            </div>

            {/* Author Details */}
            <div className="mb-12 py-4">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img
                  // src={
                  //   instructor.image
                  //     ? instructor.image
                  //     : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                  // }
                  alt="Author"
                  className="h-14 w-14 rounded-full object-cover"
                />
                {/* <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p> */}
              </div>
              <p className="text-richblack-50">
                {/* {instructor?.additionalDetails?.about} */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
     {/* {
       ConfirmationModal && <ConfirmationModal modalData={confirmationModal} /> 
     } */}
      


         

      


    </>
  )
}
