import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

interface FooterProps {
    id: string;
  }

  
const Footer: React.FC<FooterProps> = ({id}) => {
  return (
    <div id={`${id}`}   className="w-full mt-12 p-8">
      <div className="flex justify-center space-x-6 w-full ">
        <a target="_blank" href="https://github.com/brytoz">
          <FaGithub className="text-3xl hover:cursor-pointer hover:text-sky-300" />
        </a> 
        <a target="_blank" href="https://www.linkedin.com/in/ozoemena-bright-6a1a24134/">
          <FaLinkedin className="text-3xl hover:cursor-pointer hover:text-sky-300" />
        </a>
        <a target="_blank" href="https://x.com/bryt_ozee">
          <BsTwitterX className="text-3xl hover:cursor-pointer hover:text-sky-300" />
        </a>
        <a target="_blank" href="mail:brytozee@gmail.com">
          <MdOutlineMailOutline className="text-3xl hover:cursor-pointer hover:text-sky-300" />
        </a>
      </div>

      <div className="w-full text-center pt-4">Brytoz: Ozoemena Bright</div>
    </div>
  );
};

export default Footer;







