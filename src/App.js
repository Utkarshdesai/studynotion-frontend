import "./App.css";
import { Route ,Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Footer } from "./Pages/Footer";
import { Navbar } from "./component/common/Navbar";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

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
      </Routes> 
      <Footer></Footer>
     
    </div>
  );
}

export default App;
