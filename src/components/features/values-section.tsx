import React from "react";
import { ABOUT_CONTENT } from "@/data/about";

export function ValuesSection() {
  const { valuesHeadline, values } = ABOUT_CONTENT;

  return (
    <section
      id="values"
      aria-label="Core Values"
      className="relative w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface text-white overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 text-left">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            {valuesHeadline}
          </h2>
        </div>

        {/* 6 Gradient Value Tiles (R - E - P - H - I - L) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 md:gap-5">
          {values.map((v) => (
            <div
              key={v.letter}
              style={{ backgroundColor: v.color }}
              className={`rounded-2xl p-4 sm:p-5 h-44 sm:h-52 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-white/15`}
            >
              {/* Giant Monogram */}
              <span className="font-heading font-black text-4xl sm:text-5xl text-white leading-none">
                {v.letter}
              </span>

              {/* Value Name & Description */}
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm sm:text-base text-white leading-tight">
                  {v.name}
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 mt-1 line-clamp-3 leading-snug">
                  {v.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
