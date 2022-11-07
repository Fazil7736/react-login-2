import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";
import NotFoundPage from "./components/Pages/NotFoundPage";
import Home from "./components/Pages/Home";
// import SignoutSuccess from "./components/Pages/SignoutSuccess";
// import SigninSuccess from "./components/Pages/SigninSuccess";
// import SignupSuccess from "./components/Pages/SignupSuccess";





function App() {
  return (
    <div className="App">
      
      
      
      {/* <SignoutSuccess/>
      <SigninSuccess/>
      <SignupSuccess/> */}
      
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      
      
    </div>
  )
}

export default App;
