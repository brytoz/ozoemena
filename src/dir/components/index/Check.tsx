import React from "react";
import { Camera } from "lucide-react";
import { CardsT } from "./CardsT";

export const Check: React.FC = () => {
  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <div className="text-center md:text-left md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif pb-8">Projects</h1>
        </div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CardsT />
          <CardsT />
          <CardsT />
          <CardsT />
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
