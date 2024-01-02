import "./App.css";
import { Route ,Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./component/common/Navbar";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Dashboard } from "./Pages/Dashboard";
import {Error} from '../src/Pages/Error'
import { Setting } from "./component/Dashboard/Setting";


function App() {
  return (
     <div className=" w-screen min-h-screen flex flex-col font-inter bg-richblack-900"> 
      <Navbar></Navbar>
      <Routes>
        <Route path="/"  element={<Home></Home>}></Route> 
        <Route path="/about" element ={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route> 
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route element={<Dashboard></Dashboard>}>   </Route>    
        <Route path="/dashboard/setting" element={<Setting></Setting>}> </Route>
        
 
       

          
        
        

         <Route path="*" element={<Error></Error>}></Route>
      </Routes> 
      
     
    </div>
  );
}

export default App;
