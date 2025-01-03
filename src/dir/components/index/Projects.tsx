import React from "react";
import { Cards } from "./Cards";

const Projects: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans px-6 md:px-20">
      <div className="text-center md:text-left md:space-y-6">
        <h1 className="text-6xl md:text-8xl font-serif pb-8">Projects</h1>
      </div>
      <header className="relative mt-24 md:mt-0 bg-black text-white flex flex-col md:flex-row  md:justify-between">
        {/* Image Section */}
        {/* <div className="p-2 w-full flex-wrap md:flex items-center justify-center mt-8 md:mt-0  "> */}
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
      </header>
    </div>
  );
};

export default Projects;
