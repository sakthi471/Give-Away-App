import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { BiSolidUserPlus } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const WorkFlow = () => {
  const workFlow = [
    {
      id: 1,
      title: "post an item",
      desc: "Simply take a photo and briefly describe the item you're giving away.\n You can include any preferences you have about the pickup time or location.",
      icon: BsCheck2Square,
    },
    {
      id: 2,
      title: "choose a recipient",
      desc: "People in your area will message you if they are interested in your item.\n You choose who to gift your item to.",
      icon: BiSolidUserPlus,
    },
    {
      id: 3,
      title: "arrange pickup",
      desc: "Schedule a time and place for the other person to come pick up your item.\n Most pickups are left on a porch or at the curb or by meeting in a public place.",
      icon: TbTruckDelivery,
    },
    {
      id: 4,
      title: "repeat",
      desc: "Save money and keep usable items out of the trash by reusing them.\n And make new friends!",
      icon: BsArrowRepeat,
    },
  ]
  const [arrowToogle, setArrowToogle] = useState([false,false,false,false]);
  
  const handleToogle=(id)=>{
      const temp=[...arrowToogle]
      temp[id-1]=!temp[id-1]
      setArrowToogle(temp)
  }


  return (
    <div className="w-full py-8 text-white flex flex-col items-center gap-6 ">
      <h2 className=" p-4 font-bold text-lg">How It's Work</h2>

      {workFlow.map(({ id, title, icon,desc }) => {
        const Icon = icon;
        return (
          <div key={id} className="flex flex-col items-center gap-3 w-[80%]">
            <div className="flex gap-3 flex-row-reverse items-center ">
              <h3 className=" capitalize font-semibold">{title}</h3>
              <Icon className="text-2xl text-blue-500" />
            </div>
            {
              arrowToogle[id-1] && (
                <div className="p-2 bg-blue-600 rounded-sm shadow-lg shadow-blue-500/50 text-sm" >
                {desc}
               </div>
              )
            }
            <FaAngleDoubleRight
              onClick={() =>handleToogle(id)}
              className={ ` ${arrowToogle[id-1] ?"-rotate-90 text-white" : "rotate-90 text-blue-500"}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WorkFlow;
