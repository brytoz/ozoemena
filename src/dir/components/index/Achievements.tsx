import React from "react";
import { ExpeCard } from "./ExpeCard";
// import { Camera } from "lucide-react";

interface AchievementsProps {
  id: string;
}

const Achievements: React.FC<AchievementsProps> = ({ id }) => {
  return (
    <div id={`${id}`} className="bg-black">
      <section className="w-full block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8">Achievements</h1>
        </div>
        <div className="w-full bg-neutral-900/50 text-white p-8  mx-auto rounded-lg space-y-4">
          <ExpeCard
            company="Certificate"
            position="SCRUM"
            year="2021"
            info="OpenClassroom"
          />
          <ExpeCard
            company="Certificate"
            position="Python for data Analysis"
            year="2021"
            info="OpenClassroom"
          />

          <ExpeCard
            company="Developer Instructor"
            position="Neo Cloud Technologies"
            year="2024"
            info="Abuja"
          />
          <ExpeCard
            company="Developer Instructor"
            position="Digital Uplift."
            year="2024 - 2025"
            info="Abuja"
          />
        </div>
      </section>
    </div>
  );
};

export default Achievements;
