import React from "react";
// import { Camera } from "lucide-react";
interface AboutProps {
  id: string;
}


const About: React.FC<AboutProps> = ({id}) => {
  return (
    <div id={`${id}`} className="bg-black ">
      <section className=" space-y-6 w-full block px-6 py-10 md:py-20 md:px-10  bg-neutral-900/30">
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8  ">
            About Me
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-around md:justify-start ">
          Thank you for coming. I am Ozoemena Bright, a fullstack developer, now backend heavy and mostly passionate about Applications, AI, and Blockchain Technology.

          <p>
            With over six years of experience in internet technology,  I am a highly motivated software and mobile app developer with robust background in coding and problem solving solutions, coupled with a passion for creating impactful and lasting solutions that benefits users. With five years of professional experience working on diverse projects, I have demonstrated strong leadership, technical expertise, and a commitment to delivering reusable user-focused applications. </p> 

            <p> My goal is to harness the power of technology to create and build software innovations and inclusivity, empowering organizations and individuals   alike.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
