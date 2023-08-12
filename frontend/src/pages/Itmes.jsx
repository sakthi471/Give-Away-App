import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiPinDistanceFill } from "react-icons/ri";
import { PiShareFat } from "react-icons/pi";
import { GoReport } from "react-icons/go";
import { BiBookmark } from "react-icons/bi";
import oldBook from "/items img/old Book.jpg";
import algebra from "/items img/algebra.jpg";
import chopper from "/items img/chopper.jpg";
import realEs from "/items img/realEs.jpeg";
import tablet from "/items img/tablet.jpg";
import { useParams } from "react-router-dom";

const Itmes = () => {
  const BrowseItems = [
    {
      id: 1,
      title: "Old computer/programming books ",
      location: "Brooklyn",
      img: oldBook,
      dis: 12,
    },
    {
      id: 2,
      title: "Android or Apple tablet ",
      location: "Manhattan",
      img: tablet,
      dis: 15,
    },

    {
      id: 3,
      title: "Algebra 1 - Regents Exams",
      location: "Stuyvesant Town",
      img: algebra,
      dis: 55,
      disc: "Brand-new book! Algebra 1 regents is on June 15th, you still have 10 days to prepare! 😊",
    },
    {
      id: 4,
      title: "Real estate books, manuals",
      location: "UpperWest Side",
      img: realEs,
      dis: 55,
    },
    {
      id: 5,
      title: "multichopper",
      location: "Washington",
      img: chopper,
      dis: 44,
    },
  ];
  const [replay, setReplay] = useState(false);

  const { id } = useParams();
  const item = BrowseItems.find((item) => item.id.toString() === id);

  return (
    <div className="w-ful flex flex-col items-center pt-5 pb-16">
      {item && (
        <div className="w-[95%] min-h-[500px] bg-[#F6F1F1] rounded-md pb-2">
          <img src={item.img} className="w-full h-[270px]" />
          <div className="text-black border-l flex flex-col gap-2 px-3 py-1">
            <p className=" font-semibold text-lg">{item.title}</p>
            <div className="flex gap-2 items-center">
              <MdOutlineLocationOn className=" font-bold text-xl" />
              <p className="text-sm text-gray-800">{item.location}</p>
            </div>

            <div className="flex gap-2 items-center">
              <RiPinDistanceFill className=" text-xl" />
              <p className="text-sm text-gray-800">{`${item.dis} km away`}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-800 py-2">
                Brand-new book! Algebra 1 regents is on June 15th, you still
                have 10 days to prepare! 😊
              </p>
            </div>
            <h3 className="text-[#025099] font-bold text-lg">
              Interested in this offer ?
            </h3>

            <button
              onClick={() => setReplay(!replay)}
              className="bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-12 py-1 
            rounded-sm  text-white"
            >
              Replay
            </button>

            <div className="flex justify-end gap-3 py-2">
              <BiBookmark className="text-xl font-bold" />
              <PiShareFat className="text-xl font-bold" />
              <GoReport className="text-xl font-bold" />
            </div>
          </div>
          {replay && (
            <div className="w-full flex flex-col items-center gap-4 px-2  pt-8 pb-3">
              <div className="px-3 py-4 bg-orange-200 rounded-sm">
                <h3 className=" font-bold">Guidelines</h3>
                <ul className=" list-disc pl-5 text-sm">
                  <li>Say what day and time you can collect</li>
                  <li>Be polite by saying please and thank you</li>
                  <li>
                    Don't try to collect before a pickup time and place are
                    agreed on
                  </li>
                  <li>
                    If you intend to resell an item, say so in your first
                    message
                  </li>
                </ul>
              </div>
              <form className=" flex flex-col items-center gap-3">
                <textarea
                  className="p-3 border-2 rounded-sm border-blue-600 resize-none outline-orange-300"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
                <button
                  className="bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-12 py-1 
              rounded-sm  text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Itmes;
