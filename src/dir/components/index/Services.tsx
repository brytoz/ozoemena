import React from "react";
// import { Camera } from "lucide-react";

interface ServicesCardProps {
  text: string;
}

interface ServicesProps {
  id: string;
}
const ServicesCard: React.FC<ServicesCardProps> = ({ text }) => {
  return (
    <>
      <div className="block bg-neutral-900/50 text-white p-8    rounded-lg space-y-4">
        <div className=" *:border-sky-500/15  *:border *:border-sky-100 *:bg-sky-50 text-sky-300 *:bg-sky-500/10 *:px-2 *:py-0.5 rounded-md    ">
          <div className="  capitalize rounded">
            <p className="p-2"> {text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <div id={`${id}`} className="bg-black ">
      <section className="w-full block px-6 py-10 md:py-20 md:px-10  bg-neutral-900/30">
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8">
            My Services
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-around md:justify-start ">
          <ServicesCard text="Web Development" />
          <ServicesCard text="Mobile App Development" />
          <ServicesCard text="Backend Development" />
          <ServicesCard text="Web Server Administration" />
        </div>
      </section>
    </div>
  );
};

export default Services;
