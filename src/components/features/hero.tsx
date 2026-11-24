import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT } from "@/data/hero";
import { FuelNozzleAndSwoosh } from "./fuel-elements";

/**
 * 8-pointed golden sun burst symbol matching the mockup's badge icon.
 */
function SunBurstIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="sun-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#sun-glow)">
        {/* 4 cardinal points */}
        <polygon
          points="30,4 34,24 54,30 34,36 30,56 26,36 6,30 26,24"
          fill="#FEF03C"
        />
        {/* 4 diagonal points */}
        <polygon
          points="30,4 34,24 54,30 34,36 30,56 26,36 6,30 26,24"
          fill="#FEF03C"
          transform="rotate(45 30 30)"
        />
        {/* Center hub */}
        <circle cx="30" cy="30" r="6" fill="#FEF03C" />
      </g>
    </svg>
  );
}

export function Hero() {
  const {
    headlineLead,
    tagline,
    description,
    primaryCta,
    secondaryCta,
    stationBadge,
    placeholderImage,
  } = HERO_CONTENT;

  return (
    <section
      aria-label="Hero"
      className="relative w-full pt-6 sm:pt-10 lg:pt-12 pb-28 sm:pb-36 lg:pb-44 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting overlays */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_25%,rgba(27,7,133,0.6)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_85%_35%,rgba(255,0,46,0.5)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="relative z-20 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-hero-fade min-w-0 w-full">
            {/* Main Headline - perfectly scaled for 375px without overflow */}
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] leading-[0.94] tracking-[-0.035em] drop-shadow-md break-words">
              <span className="block">{headlineLead}</span>
              <span className="block mt-1 sm:mt-2">
                the <span className="text-brand-sun">Filipino</span>
              </span>
            </h1>

            {/* Tagline & Underline */}
            <div className="mt-5 sm:mt-8 flex flex-col items-start">
              <p className="font-heading font-bold text-white text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase">
                {tagline}
              </p>
              <div
                className="h-[3px] bg-brand-sun mt-2 w-32 sm:w-44 rounded-full"
                aria-hidden="true"
              />
            </div>

            {/* Description Paragraph */}
            <p className="mt-4 sm:mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-sans font-normal">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <Link
                href={primaryCta.href}
                className="text-center rounded-full bg-brand-sun text-brand-navy font-heading font-bold text-sm sm:text-base px-7 py-3.5 shadow-lg shadow-black/25 hover:bg-yellow-300 hover:shadow-xl transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {primaryCta.label}
              </Link>

              <Link
                href={secondaryCta.href}
                className="text-center rounded-full border-2 border-white/90 text-white font-heading font-semibold text-sm sm:text-base px-7 py-3 hover:bg-white/10 hover:border-white transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right Column: Tilted Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-4 lg:pt-0 animate-card-tilt min-w-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[460px] mx-auto lg:mr-0">
              
              {/* Sun burst on top-left corner */}
              <div className="absolute -top-4 -left-4 sm:-top-7 sm:-left-7 z-30 transition-transform hover:rotate-45 duration-500">
                <SunBurstIcon className="w-10 h-10 sm:w-16 sm:h-16" />
              </div>

              {/* Tilted Photo Frame */}
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/20 transition-transform duration-300 hover:rotate-0 bg-navy-800 -rotate-2 sm:-rotate-3"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={placeholderImage.src}
                    alt={placeholderImage.alt}
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 460px"
                    className="object-cover opacity-90"
                  />

                  {/* Gradient Scrim & Center Labels */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none">
                    <span className="font-heading font-bold text-white text-base sm:text-xl md:text-2xl drop-shadow-md">
                      {placeholderImage.label}
                    </span>
                    <span className="text-white/80 text-[11px] sm:text-sm mt-1 sm:mt-1.5 drop-shadow font-sans">
                      {placeholderImage.sublabel}
                    </span>
                  </div>
                </div>

                {/* Bottom-right "100+ stations nationwide" badge */}
                <div className="absolute bottom-0 right-0 z-20 bg-brand-navy border-l-4 border-brand-sun px-3 sm:px-5 py-2 sm:py-3 shadow-2xl">
                  <div className="font-heading font-extrabold text-white text-xl sm:text-3xl leading-none">
                    {stationBadge.count}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-medium tracking-wide mt-0.5 sm:mt-1 uppercase">
                    {stationBadge.label}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fuel Nozzle & Bottom Swoosh Ribbon */}
      <FuelNozzleAndSwoosh />
    </section>
  );
}
