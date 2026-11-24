"use client";

import React, { useState } from "react";
import { STATIONS_CONTENT, StationRegion } from "@/data/stations";
import { MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function StationsSection() {
  const [selectedRegion, setSelectedRegion] = useState<StationRegion>("All");
  const { headline, subheadline, stations } = STATIONS_CONTENT;

  const filteredStations =
    selectedRegion === "All"
      ? stations
      : stations.filter((s) => s.region === selectedRegion);

  const regions: StationRegion[] = ["All", "NCR", "Luzon", "Visayas"];

  return (
    <section
      id="stations"
      aria-label="Stations"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-navy-800 text-white overflow-hidden"
    >
      {/* Decorative Red Circle Bleeding off the top-right */}
      <div
        className="absolute -top-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-red pointer-events-none z-0 opacity-95"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              {headline}
            </h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl font-sans">
              {subheadline}
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div
            className="flex flex-wrap gap-2 self-start md:self-auto"
            role="tablist"
            aria-label="Filter stations by region"
          >
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                role="tab"
                aria-selected={selectedRegion === region}
                onClick={() => setSelectedRegion(region)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200",
                  selectedRegion === region
                    ? "bg-brand-sun text-brand-navy shadow-md font-bold"
                    : "bg-white/10 text-white/90 hover:bg-white/20",
                )}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Station Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className="group rounded-2xl overflow-hidden bg-navy-600 border border-white/10 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-white/20"
            >
              {/* Card Photo / Graphic Area */}
              <div className="relative h-44 sm:h-48 w-full bg-gradient-to-br from-navy-800 to-brand-navy p-4 flex flex-col justify-between overflow-hidden">
                {/* Diagonal stripes pattern */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #2B46B3 0, #2B46B3 10px, transparent 10px, transparent 20px)",
                  }}
                  aria-hidden="true"
                >
                  <Image
                    src={station.image}
                    alt={station.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {station.region}
                  </span>

                  {/* Status Pill */}
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-heading font-bold shadow-sm",
                      station.status === "Now open"
                        ? "bg-brand-sun text-brand-navy"
                        : "bg-yellow-400 text-brand-navy",
                    )}
                  >
                    {station.status}
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-1.5 text-white/70 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-brand-sun shrink-0" />
                  <span className="truncate">
                    {station.city}
                    {station.province ? `, ${station.province}` : ""}
                  </span>
                </div>
              </div>

              {/* Card Bottom: Station Name & Navigate Link */}
              <div className="p-5 flex items-center justify-between gap-3 bg-navy-600">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-brand-sun transition-colors leading-tight">
                  {station.name}
                </h3>

                <a
                  href={station.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-white underline decoration-brand-sun underline-offset-4 hover:text-brand-sun transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun rounded-sm"
                  aria-label={`Navigate to ${station.name} on Google Maps`}
                >
                  <span>Navigate</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
