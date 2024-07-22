import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import {  Link } from "react-router-dom";
import useAuth from '../hooks/useAuth'
import axios from "axios";
  
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
    link:'register'
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

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { isAuthenticated, user, setIsAuthenticated} = useAuth();

  const logout = async () => {
      console.log('Logout');
      try {
        const res = await axios.get('http://localhost:5000/logout', { withCredentials: true });
        console.log(res.data);
      //   navigate('/login');
      setIsAuthenticated(false);
      
       
      } catch (error) {
  console.log(error.message);
      }
    }

  return (
   <div className="w-full bg-gradient-to-r from-[#117EE2] to-[#4E54E5]  flex  justify-center">
      <div className="w-[80%] flex justify-between px-7 py-3 items-center">
       <Link to="/" >
       <div className="flex gap-3 items-center">
          <FaRecycle className="text-white text-xl" />
          <p className="text-white">EcoSwap </p>
        </div></Link>

        <div className=" sm:hidden" onClick={()=> setNav(!nav)}>
          {nav ? (
            <MdClear className="text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="text-white text-xl" />
          )}
        </div>
        <ul className="flex gap-5 items-center text-white">
        { links.map(({id,link})=>(
              <li className=" capitalize" key={id}> <Link to={link}> {link==='/'?'Home':link}</Link> </li>
            ))}
        </ul>
        <div className=' flex  items-center gap-5'>
            {
                    user && <p className=' font-semibold text-white  text-sm'>Logged as {user.username}</p>
                }
                { isAuthenticated && <button onClick={logout} className=' bg-white text-blue-500 py-1 px-3 rounded-md  font-semibold text-sm hover:bg-blue-300  hover:text-white'>Logout</button>
                }
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
