import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { VideoDetailsSidebar } from '../component/Videopage/VideoDetailsSidebar';
import { CourseReviewModal } from '../component/Videopage/CourseReviewModal';

export const Viewcourse = () => {
    const [reviewModal, setReviewModal] = useState(false);
    const {courseId} = useParams();
    const token = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch(); 

    //api call 



  return (
    <>
        <div className="relative flex min-h-[calc(100vh-3.5rem)]">
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
            <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
              <div className="mx-6">
            <Outlet />
          </div>
        </div>
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}

    </>
  )
}

