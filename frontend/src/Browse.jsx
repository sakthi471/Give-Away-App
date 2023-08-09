import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiAdjustments } from "react-icons/hi";
import oldBook from "../public/old Book.jpg";

const Browse = () => {
  return (
    <div className="w-full  p-2 text-white flex flex-col gap-3">
      <h2 className=" font-bold py-4 space-y-5">
        Free Stuff Near <span> Madurai,TN</span>
      </h2>
      <div className="flex items-center px-1">
        <div className=" relative ">
          <input
            className=" rounded-sm px-3 py-1 w-[90%] text-black outline-blue-500 z-0"
            type="text"
            placeholder="Search what you want"
          />
          <AiOutlineSearch className=" text-gray-800 font-bold text-xl absolute top-2 right-9" />
        </div>
        <HiAdjustments className="text-3xl" />
      </div>
      <div className="w-full bg-gray-600 p-1">
            <div className="w-full h-[230px] bg-white">
            {/* <img src={oldBook} alt="" className=" object-cover" width={100px} /> */}
            <div className="text-black">
                <p>Old Programing/Java </p>
               </div>
            </div >
              
      </div>
    </div>
  );
};

export default Browse;
