import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./auth/signup";
import Signin from "./auth/signin";

import Site from "./Admin/site";

import About from "./protected/dashboard/routes/about/about";
import Home from "./protected/dashboard/routes/home/home";
import Shop from "./protected/dashboard/routes/shop/shop";
import Contact from "./protected/dashboard/routes/contact/contact";

import Homepage from "./Admin/aroutes/homepage";
import Dashboard from "./Admin/aroutes/dashboard";
import Feedback from "./Admin/aroutes/feedback";
import View from "./Admin/aroutes/view";
import Adminsigin from "./Admin/componets/adminsigin";

import Add from "./Admin/data/add";
import Update from "./Admin/data/update";
import Addtocart from "./protected/dashboard/routes/shop/addtocart";


// import { Navbar } from "./protected/dashboard/_components/navbar";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Site />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Adminsigin />} />
          

          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />        
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/view" element={<View/>} />
        

          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/cart" element={<Addtocart/>} />



        </Routes>
      </BrowserRouter>



    </>
  );
}
export default App;
