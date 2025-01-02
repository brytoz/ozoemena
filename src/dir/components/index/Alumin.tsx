import React from "react";
import { PiArrowBendDownRightThin } from "react-icons/pi";

export const Alumin: React.FC = () => {
  return (
      <div className="w-full  text-white font-sans px-6 md:px-20 my-12 mb-24 ">
      <div className="bg-black text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif">Education</h1>
        </div>

        <div className="bg-black flex text-center md:text-left md:space-y-6 float-right">
        <PiArrowBendDownRightThin className="text-[10rem]"/>
          <h1 className="text-6xl mt-4 md:text-[10rem] font-serif" title="Federal University of Technology, Owerri. Nigeria."><a target="_blank" href="https://futo.edu.ng"><span className="hover:text-green-500 ">F</span><span className="hover:text-green-500 ">U</span><span className="hover:text-green-500 ">T</span><span className="hover:text-green-500 ">O</span></a><p className="text-base font-sans">Federal University of Technology, Owerri. <br /><span className="text-sm pl-4" title="Discipline"> - Information Management Technology.</span></p></h1>
        
        </div>
        <div className="bg-black flex text-center md:text-left md:space-y-6 ">
          <h1 className="text-base pl-12 md:pl-0 md:text-5xl font-serif">2015-2020</h1>
        </div>
      </div>
  );
};
