import React from "react";
import { ExpeCard } from "./ExpeCard";
// import { Camera } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="w-full block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8">Experience</h1>
        </div>
        <div className="w-full bg-neutral-900/50 text-white p-8  mx-auto rounded-lg space-y-4">
          <ExpeCard
            company="Freelancer"
            position="React Native / Backend Developer"
            year="2024 — Present"
          />
          <ExpeCard
            company="Neo Cloud Technologies, Abuja."
            position="Developer Advocate."
            year="2023 — 2024"
          />
          <ExpeCard
            company="Cry8"
            position="Backend Developer / Lead Developer"
            year="2019 — 2023"
          />
          <ExpeCard
            company="AC Harmony"
            position="Data transformation - Intern"
            year="2019"
          />
          <ExpeCard
            company="Freelancer"
            position="Fullstack Developer"
            year="2017 — 2019"
          />
        </div>
      </section>
    </div>
  );
};

export default Experience;
