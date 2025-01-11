import React from "react";
// import { Camera } from "lucide-react";
import { Cards } from "./Cards";

interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({id}) => {
  return (
    <div id={`${id}`}  className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8">Projects</h1>
        </div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         

          <Cards
            topic="ByteStore"
            description="A simple inventory and checkout system for a grocery store. Created with C++. Remains my first ever project worked on. "
            data={[{ id: 1, data: "C++" }]}
            link="https://github.com/brytoz/ByteStore"
            year="2018"
          />

          <Cards
            topic="FFMpeg"
            description="A vanilla video editing made with ffmpeg and php. This app has low design but was more focused on the backend."
            data={[
              { id: 1, data: "HTML" },
              { id: 1, data: "CSS" },
              { id: 2, data: "PHP" },
              { id: 3, data: "FFMpeg" },
            ]}
            link="https://github.com/brytoz/FFmpeg-Image-video"
            year="2019"
          />

          <Cards
            topic="Thesis Mgt System"
            description="School thesis management system. A fullstack vanilla project that manages postgraduate and masters student for thesis submission, approval and grading. Uploaded to github in 2022"
            data={[
              { id: 1, data: "HTML" },
              { id: 2, data: "CSS" },
              { id: 3, data: "PHP" },
              { id: 4, data: "MySql" },
              // { id: 3, data: "Fullstack" },
            ]}
            link="https://github.com/brytoz/ThesisMgt"
            year="2019"
          />

     

          <Cards
            topic="Anameo"
            description="A play-around frontend application focused on API fetch and sorting chuck noris jokes."
            data={[
              { id: 1, data: "TypeScript" },
              { id: 3, data: "React" },
              // { id: 4, data: "MySql" },
              // { id: 3, data: "Fullstack" },
            ]}
            link="https://anameo.netlify.app"
            year="2022"
          />

          <Cards
            topic="Mint My Token"
            description="A ERC-721 web3 project that mints your token. using the Harmony ONE protocol."
            data={[
              { id: 3, data: "TypeScript" },
              { id: 1, data: "Web3" },
              { id: 4, data: "Solidity" },
              { id: 2, data: "Ether.Js" },
            ]}
            link="https://mintmytoken.netlify.app"
            year="2022"
          />

          <Cards
            topic="Mutant Football Manager"
            description="A ERC-721 and ERC-20 web3 project. A Hackhathon participated with a section of my team. Using the Harmony ONE protocol."
            data={[
              { id: 3, data: "TypeScript" },
              { id: 1, data: "Web3" },
              { id: 4, data: "Solidity" },
              { id: 2, data: "Ether.Js" },
            ]}
            link="https://mutant-football.netlify.app"
            year="2022"
          />
               <Cards
            topic="EasyStreams"
            description="A fullstack video streaming website that shows list of available matches and streaming platforms to view the matches. Previously live at easystreams.com"
            data={[
              { id: 1, data: "React" },
              { id: 3, data: "NodeJs" },
              { id: 4, data: "MySql" },
              // { id: 3, data: "Fullstack" },
            ]}
            link="https://github.com/brytoz/easystreams"
            year="2023"
          />

<Cards
            topic="LoveAfrica"
            description="Dating mobile app. social network that connects friends and strangers together. Creating  "
            data={[
              { id: 1, data: "Mobile App" },
              { id: 2, data: "Fullstack" },
            ]}
            link="https://loveafrica.app/downloads"
            year="2022"
          />

          <Cards
            topic="LcCredit"
            description="Contributed to a financial loan app. Worked on the frontend design and structural architecture."
            data={[
              { id: 2, data: "Typescript" },
              { id: 1, data: "MobileApp" },
            ]}
            link="#"
            year="2024"
          />

<Cards
            topic="Gigscor"
            description="Web Application for getting jobs. worked on the backend, contributed to the frontend"
            data={[
              // { id: 1, data: "TypeScript" },
              { id: 2, data: "CMS" },
              { id: 2, data: "Backend" },
            ]}
            link="https://gigscor.com"
            year="2023-2024"
          />

          <Cards
            topic="KMAnalysis"
            description="Sport prediction website. Contributed to the frontend, worked on the backend."
            data={[
              // { id: 1, data: "TypeScript" },
              { id: 2, data: "Backend" },
              { id: 2, data: "React" },
            ]}
            link="https://kmanalysis.com"
            year="2023-2024"
          />

          <Cards
            topic="SecureSeedFund"
            description="Designed and developed the backend infrastructure, services, payment system and server administration setup."
            data={[
              { id: 1, data: "Backend" },
              // { id: 1, data: "Redacted" },
            ]}
            link="https://secureseedfund.com"
            year="2024"
          />

          
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Project;
