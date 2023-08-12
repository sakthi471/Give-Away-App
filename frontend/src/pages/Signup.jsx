import React from "react";

const Signup = () => {
  return (
    <div className="w-full text-white flex flex-col items-center py-14">
      <h2 className=" text-2xl font-semibold">Sign Up</h2>
      <form className="flex flex-col gap-8 items-center py-6 w-full px-3">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">Email</label>
          <input
            className=" outline-1 rounded-sm outline-none py-2 px-2 focus:outline-blue-600"
            type="text"
            placeholder="sakthi@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Password</label>
          <input
            className=" outline-1 rounded-sm outline-none py-2 px-2 focus:outline-blue-600"
            type="text"
            placeholder="Enter password"
          />
        </div>
        <button
          className="bg-gradient-to-r from-[#117EE2] to-[#4E54E5] px-12 py-1 
              rounded-sm "
        >
          Create Account
        </button>
      </form>
      <p className=" text-sm">
        Already have an account?
        <span className=" font-bold px-2 underline">Logini </span>{" "}
      </p>
    </div>
  );
};

export default Signup;
