import React from "react";
// import { Camera } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-black ">
      <section className=" space-y-6 w-full block px-6 py-10 md:py-20 md:px-10  bg-neutral-900/30">
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8  ">
            About Me
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-around md:justify-start ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
          ipsam quisquam obcaecati alias quia, delectus reprehenderit magnam
          cupiditate fugit consequatur unde voluptas quidem in vitae ullam
          tempore dolorum quaerat optio.
        </div>
      </section>
    </div>
  );
};

export default About;
