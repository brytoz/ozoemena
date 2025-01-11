import React from "react";
// import { Camera } from "lucide-react";

interface ToolsCardProps {
  text: string;
}

interface ToolsProps {
  id: string;
}
const ToolsCard: React.FC<ToolsCardProps> = ({ text }) => {
  return (
    <>
      <div className="block bg-neutral-900/50 text-white p-8    rounded-lg space-y-4">
        <div className="dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 rounded-md    ">
          <div className="  capitalize rounded">
            <p className="p-2"> {text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Tools: React.FC<ToolsProps> = ({ id }) => {
  return (
    <div id={`${id}`} className="bg-black ">
      <section className="w-full block px-6 py-10 md:py-20 md:px-10  bg-neutral-900/30">
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8">
            Language & Tools
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-around md:justify-start ">
          <ToolsCard text="React" />
          <ToolsCard text="TypeScript" />
          <ToolsCard text="React Native" />
          <ToolsCard text="Node Js" />
          <ToolsCard text="Nest Js" />
          <ToolsCard text="Solidity" />
          <ToolsCard text="PHP" />
          <ToolsCard text="HTML" />
          <ToolsCard text="CSS" />
          <ToolsCard text="AWS" />
          <ToolsCard text="MySQL" />
          <ToolsCard text="MondoDB" />
          <ToolsCard text="PostGres" />
          <ToolsCard text="Firebase" />
        </div>
      </section>
    </div>
  );
};

export default Tools;
