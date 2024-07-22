import React from "react";

const Newpost = () => {
  return (
    <div className="w-full text-white flex flex-col items-center py-14">
      <h2 className=" text-2xl font-semibold">New post</h2>
      <form className="flex flex-col gap-8 items-center w-[50%] px-5 py-6 ">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">Post title</label>
          <input
            className=" outline-1 rounded-md outline-none py-2 text-black px-2 focus:outline-blue-600"
            type="text"
            placeholder="old programing books"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Post Description</label>
          <textarea
            className=" rounded-md text-black p-4 w-100 h-52  outline-1 focus:outline-blue-600 resize-none"
            name=""
            id=""
            placeholder="Type something about the item......."
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Location</label>
          <input
            className="text-black outline-1  rounded-md outline-none py-2 px-2 focus:outline-blue-600"
            type="text"
            placeholder="Thiruparankunram"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Upload image</label>
          <input className=" outline-none 
         rounded-md w-56" type="file" />
        </div>

        <button
          className="bg-gradient-to-r from-[#117EE2] to-[#4E54E5] w-full px-12 py-2 
            rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newpost;
