import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Newpost from "./pages/Newpost";
import Browse from "./pages/Browse";
import WorkFlow from "./pages/WorkFlow";
import Itmes from "./pages/Itmes";


function App() {
  return (
    
    <div className="w-full bg-gradient-to-b from-[#020202] to-[#0A274D] min-h-screen">
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/browse/:id" element={<Itmes/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/workflow" element={<WorkFlow/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/newpost" element={<Newpost/>} />
          <Route path="*" />
        </Routes>   
    </div>
  );
}

export default App;
