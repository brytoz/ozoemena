import React from "react";
import { PiArrowBendDownRightThin } from "react-icons/pi";
interface AluminProps {
    id: string;
  }

export const Alumin: React.FC<AluminProps> = ({id}) => {
  return (
    <div id={`${id}`}  className="w-full  text-white font-sans px-6 md:px-20 my-12 mb-24 ">
      <div className="bg-neutral-900/50 text-center md:text-left md:space-y-6">
        <h1 className="text-6xl md:text-8xl font-serif">Education</h1>
      </div>

      <div className="bg-neutral-900/50 flex text-center md:text-left md:space-y-6 float-right">
        <PiArrowBendDownRightThin className="text-[8rem] md:text-[10rem]" />
        <h1
          className="text-6xl mt-4 md:text-[10rem] font-serif"
          title="Federal University of Technology, Owerri. Nigeria."
        >
          <a target="_blank" href="https://futo.edu.ng">
            <span className="hover:text-green-500 ">F</span>
            <span className="hover:text-green-500 ">U</span>
            <span className="hover:text-green-500 ">T</span>
            <span className="hover:text-green-500 ">O</span>
          </a>
          <p className="text-xs md:text-base font-sans">
            Federal University of Technology, Owerri. <br />
            <span className="text-[10px] md:text-sm pl-4" title="Discipline">
              {" "}
              - Information Management Technology.
            </span>
          </p>
        </h1>
      </div>
      <div className="bg-neutral-900/50 flex text-center md:text-left md:space-y-6 ">
        <h1 className="text-xs pl-12 md:pl-0 md:text-5xl md:font-serif">
          2015-2020
        </h1>
      </div>
    </div>
  );
};
