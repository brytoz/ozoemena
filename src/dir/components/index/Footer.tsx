import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <div className="w-full mt-12 p-8">
      <div className="flex justify-center space-x-6 w-full ">
        <a target="_blank" href="https://github.com/brytoz">
          <FaGithub className="text-3xl hover:cursor-pointer hover:text-sky-300" />
        </a> 
        <a target="_blank" href="https://linkedin.com/ozoemenabright">
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
