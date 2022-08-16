import React, { useState } from "react";
import './App.css';

/*react router  ekleme 10*/
import Home from "./components/Home";
import About from "./components/About";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/Login";

function App() {

  const [isAuth, setIsAuth] = useState(false)


  return (
      
   
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </>
    

  
  );
}

export default App;