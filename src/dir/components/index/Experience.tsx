import React from "react";
import { ExpeCard } from "./ExpeCard";
// import { Camera } from "lucide-react";

interface ExperienceProps {
  id: string;
}


const Experience: React.FC<ExperienceProps> = ({id}) => {
  return (
    <div id={`${id}`}  className="bg-black">
      <section className="w-full block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8">Experience</h1>
        </div>
        <div className="w-full bg-neutral-900/50 text-white p-8  mx-auto rounded-lg space-y-4">
          <ExpeCard
            company="Freelancer"
            position="React Native / Backend Developer"
            year="2025 — Present"
            info="Freelancing."
          />
          <ExpeCard
            company="Neo Cloud Technologies, Abuja."
            position="Developer Advocate."
            year="2023 — 2024"
            info="Contributed to clients project, worked on student management system, and was an instructor to Beginners."
          />
          <ExpeCard
            company="Cry8"
            position="Backend Developer / Lead Developer"
            year="2019 — 2023"
            info="Worked on several web3 projects using Harmony One Protocol, contributed to the CMS redesign."
          />
          <ExpeCard
            company="AC Harmony"
            position="Data transformation - Intern"
            year="2019"
            info="Transform some manual data to system data as an Intern."
          />
          <ExpeCard
            company="Freelancer"
            position="Fullstack Developer"
            year="2017 — 2019"
            info="Freelancing on several platforms online and offline."
          />
        </div>
      </section>
    </div>
  );
};

export default Experience;
