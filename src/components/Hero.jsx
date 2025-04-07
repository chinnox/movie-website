import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Hero = ({ handleChange }) => {
  return (
    <section>
      <div className="relative">
        <div className="flex flex-col items-center justify-center z-2 pt-10">
          <h1 className="flex flex-wrap text-slate-50 text-[22px] md:text-5xl md:w-150 pl-4 mt-20 mb-15 font-mono font-bold items-center justify-center text-center">
            Experience the
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-yellow-300">
              magic
            </span>
            on the silver screen!
          </h1>
          <div className="flex w-70 mx-auto md:w-140 items-center justify-between bg-slate-700 rounded-3xl">
            <input
              type="search"
              placeholder="Search..."
              className="text-white rounded-3xl pl-3 py-2 md:w-140 outline-none"
              onChange={handleChange}
            />
            <IoMdSearch className="text-white size-8 cursor-pointer pr-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
