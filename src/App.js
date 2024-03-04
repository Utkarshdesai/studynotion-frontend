import "./App.css";
import { useEffect } from "react";
import { Route ,Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import  Navbar  from "./component/common/Navbar";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import {Error} from '../src/Pages/Error'
import { Footer } from "./Pages/Footer";
import { useDispatch ,useSelector  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Catalog } from "./Pages/Catalog";
import { Coursedetails } from "./Pages/Coursedetails";
import { getUserDetails } from "./services/operations/profileAPI"
import { Myprofile } from "./component/Dashboard/Myprofile";
import { ACCOUNT_TYPE } from "./utils/constants"
import { Signup } from "./Pages/Signup";
import { Newpassword } from "./Pages/Newpassword";
import { Resetpassword } from "./Pages/Resetpassword";
import { Verifyemail } from "./Pages/Verifyemail";
import OpenRoute from "./component/auth/Openroute";
import PrivateRoute from './component/auth/PrivateRoute.js'
import { Viewcourse } from "./Pages/Viewcourse.js";
import Insturctor from "./component/Dashboard/Instructordashboard/Insturctor";
import {Setting} from '../src/component/Dashboard/Settingpage/Setting.js'
import { Mycourses } from "./component/Dashboard/Mycourses";
import { Enrolledcourse } from "./component/Dashboard/Enrolledcourse";
import CartItem from "./component/Dashboard/cart/CartItem";
import { Coursebuilder } from "./component/Dashboard/coursebuilder/Coursebuilder.js";


function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  return (
     <div className=" w-screen min-h-screen flex flex-col font-inter bg-richblack-900"> 
       <Navbar></Navbar>
      <Routes>
        <Route path="/"  element={<Home></Home>}></Route> 
        <Route path="/about" element ={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="courses/:courseId" element={<Coursedetails />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />

           {/* Open Route - for Only Non Logged in User */}
           <Route
          path="login"
          element={
           <OpenRoute>
            <Login/>
           </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
             <Resetpassword/>
           </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
            <Newpassword/>
          </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
            <Signup/>
          </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
             <Verifyemail/>
          </OpenRoute>
          }
        />

          {/* Private Route - for Only Logged in User */}
          <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<Myprofile />} />
          <Route  path="/dashboard/settings" element={<Setting/>}></Route>
          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              {/* <Route path="dashboard/instructor" element={<Insturctor />} />
              <Route path="dashboard/my-courses" element={<Mycourses />} />
              <Route path="dashboard/add-course" element={<Coursebuilder />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
    */}
    s
            </>
          )}
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={< Enrolledcourse/>}
              />
              <Route path="dashboard/cart" element={<CartItem />} />
            </>
          )}
           <Route path="dashboard/settings" element={<Setting />} /> 
        </Route>

        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <Viewcourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
             
            </>
          )}
        </Route>
    
        

         <Route path="*" element={<Error></Error>}></Route>
      </Routes> 
      
      
     
    </div>
  );
}

export default App;
