import React from "react";
import { ABOUT_CONTENT } from "@/data/about";
import { RephilLogo, SunBurst } from "./rephil-logo";

export function AboutSection() {
  const { headline, storyLead, storyBody, mission, vision } = ABOUT_CONTENT;

  return (
    <section
      id="about"
      aria-label="About Rephil"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ink text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Rephil Logo with Red Dot Pattern */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Background Red Dot Pattern */}
            <div
              className="absolute -inset-10 pointer-events-none opacity-25 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
                <pattern
                  id="dot-pattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="#FF002E" />
                </pattern>
                <circle cx="170" cy="170" r="160" fill="url(#dot-pattern)" />
              </svg>
            </div>

            {/* Large Emblem */}
            <div className="relative z-10 transition-transform duration-300 hover:scale-105">
              <RephilLogo className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-2xl" />
            </div>
          </div>

          {/* Right Column: Narrative, Mission & Vision */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Heading */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight">
              {headline}
            </h2>

            {/* Story Paragraph */}
            <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed font-sans font-normal">
              Rephil Station is{" "}
              <span className="text-brand-red font-semibold">
                {storyLead}
              </span>
              . {storyBody}
            </p>

            {/* Joined Mission & Vision Cards */}
            <div className="mt-8 sm:mt-10 w-full grid grid-cols-1 sm:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden border border-white/10">
              
              {/* Mission Card (Red) */}
              <div className="bg-red-600 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <SunBurst className="w-5 h-5 text-brand-sun" />
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                      {mission.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed font-sans">
                    {mission.text}
                  </p>
                </div>
              </div>

              {/* Vision Card (Navy) */}
              <div className="bg-brand-navy p-6 sm:p-7 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-white/15">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <SunBurst className="w-5 h-5 text-brand-sun" />
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                      {vision.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed font-sans">
                    {vision.text}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
