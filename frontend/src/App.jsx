import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import Newpost from "./Newpost";
import Browse from "./Browse";
import WorkFlow from "./WorkFlow";


function App() {
  return (
    <div className="w-full bg-gradient-to-b from-[#020202] to-[#0A274D] min-h-screen">
      <Nav />
    
        <Routes>
          <Route path="/" element={<WorkFlow/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="newpost" element={<Newpost/>} />
          <Route path="*" />
        </Routes>


   
    </div>
  );
}

export default App;
