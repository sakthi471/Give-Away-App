import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import {  Link } from "react-router-dom";



const Nav = () => {
  const [nav, setNav] = useState(false);
  const links=[
    {
      id:1,
      link:'/'
    },
    {
      id:2,
      link:'newpost'
    },
    {
      id:3,
      link:'login'
    },
    {
      id:4,
      link:'signup'
    },
    {
      id:5,
      link:'workflow'
    },
    {
      id:6,
      link:'browse'
    }
    
  ]

  return (
    <div className="w-full">
      <div className="w-full bg-gradient-to-r from-[#117EE2] to-[#4E54E5] flex justify-between px-7 py-3 items-center">
       <Link to="/" >
       <div className="flex gap-3 items-center">
          <FaRecycle className="text-white text-xl" />
          <p className="text-white">Give Away </p>
        </div></Link>
        <div onClick={()=> setNav(!nav)}>
          {nav ? (
            <MdClear className="text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="text-white text-xl" />
          )}
        </div>
      </div>
         { nav &&    <div className=" bg-gradient-to-r from-[#117EE2] to-[#4E54E5] absolute w-full py-10 bg-zinc-100 text-white flex justify-center z-20">
        <ul className="flex flex-col py-3 gap-4 text-center capitalize font-bold text-base">
            { links.map(({id,link})=>(
              <li onClick={()=>setNav(!nav)} key={id}> <Link to={link}> {link==='/'?'Home':link}</Link> </li>
            ))}
        </ul>
      </div>}
    </div>
  );
};

export default Nav;
