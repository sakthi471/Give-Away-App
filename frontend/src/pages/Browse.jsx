import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiAdjustments } from "react-icons/hi";
import {MdOutlineLocationOn} from 'react-icons/md'
import {RiPinDistanceFill} from 'react-icons/ri'
import oldBook from '/items img/old Book.jpg'
import algebra from '/items img/algebra.jpg'
import chopper from '/items img/chopper.jpg'
import realEs from '/items img/realEs.jpeg'
import tablet from '/items img/tablet.jpg'


const Browse = () => {

   const BrowseItems=[
    {
      id:1,
      title:"Old computer/programming books ",
      location:"Brooklyn",
      img:oldBook,
      dis:12
    },
    {
      id:2,
      title:"Android or Apple tablet ",
      location:"Manhattan",
      img:tablet,
      dis:15
    },

    {
      id:3,
      title:"Algebra 1 - Regents Exams",
      location:"Stuyvesant Town",
      img:algebra,
      dis:55
    },
    {
      id:4,
      title:"Real estate books, manuals",
      location:"UpperWest Side",
      img:realEs,
      dis:55
    },
    {
      id:5,
      title:"multichopper",
      location:"Washington",
      img:chopper,
      dis:44
    },
    
   ]

   
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

      <div className="w-full p-1 flex flex-col items-center gap-12 py-8">
             {
              BrowseItems.map(({id,title,location,img,dis})=>{
                return(<div key={id} className="w-[95%] bg-[#F6F1F1] rounded-md shadow-lg shadow-blue-400/90">
                <img src={img} className="w-full h-[250px]" />
          
            <div className="text-black border-l flex flex-col gap- p-2">
                <p className=" font-semibold  text-sm">{title} </p>
                 <div className="flex gap-2 items-center" >
                   <MdOutlineLocationOn className=" font-bold"/>
                   <p className="text-sm text-gray-800">{location}</p>
                 </div>
                 <div className="flex gap-2 items-center" >
                   <RiPinDistanceFill className=" font-bold"/>
                   <p className="text-sm text-gray-800">{`${dis} km away`}</p>
                 </div>
               </div>
            </div >)
              })
             }            
      </div>
    </div>
  );
};

export default Browse;
