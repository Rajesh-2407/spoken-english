import React from 'react'
import { Nav } from './Component/Nav'
import FileUploader from './Component/FileUploader'
import Otp from './Component/Otp'
import Home from './Component/Home'
import {Footer} from './Component/Footer'
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'; 

function App(){
  const location = useLocation();
  console.log("Current Path:", location.pathname);
  const isSignInPage = location.pathname === "/otp";
  return (
    <>
    {!isSignInPage && <Nav />}
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/otp" element={<Otp/>} />
      </Routes>
      {!isSignInPage && <FileUploader />}
      {!isSignInPage && <Footer />}
  
    
    
    

    </>
  )
}

export default App