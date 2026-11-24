"use client";

import React, { useState } from "react";
import { CAREERS_CONTENT } from "@/data/careers";
import { Briefcase, MapPin, Mail, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function CareersSection() {
  const [activeTab, setActiveTab] = useState(CAREERS_CONTENT.departments[0].id);
  const { headline, lead, description, departments } = CAREERS_CONTENT;

  const activeDepartment =
    departments.find((d) => d.id === activeTab) || departments[0];

  return (
    <section
      id="careers"
      aria-label="Careers at Rephil"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface text-white overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14 text-left">
          <span className="text-brand-sun font-bold text-xs uppercase tracking-widest font-heading">
            {lead}
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1.5">
            {headline}
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base font-sans">
            {description}
          </p>
        </div>

        {/* Department Tabs */}
        <div
          role="tablist"
          aria-label="Career Departments"
          className="flex flex-wrap gap-2.5 sm:gap-3 mb-8"
        >
          {departments.map((dept) => {
            const isActive = activeTab === dept.id;
            return (
              <button
                key={dept.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${dept.id}`}
                id={`tab-${dept.id}`}
                onClick={() => setActiveTab(dept.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-200 flex items-center gap-2",
                  isActive
                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105"
                    : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                )}
              >
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div
          id={`panel-${activeDepartment.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeDepartment.id}`}
          className="rounded-3xl bg-ink/70 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                {activeDepartment.name}
              </h3>
              <div className="flex items-center gap-2 text-white/75 text-xs sm:text-sm mt-2 font-sans">
                <MapPin className="w-4 h-4 text-brand-sun shrink-0" />
                <span>{activeDepartment.location}</span>
              </div>
              <p className="mt-2 text-white/85 text-sm max-w-xl">
                {activeDepartment.description}
              </p>
            </div>

            <a
              href={`mailto:${activeDepartment.applyEmail}?subject=Application for ${encodeURIComponent(activeDepartment.name)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sun text-brand-navy font-heading font-bold text-sm sm:text-base px-6 py-3 hover:bg-yellow-300 transition-colors shadow-md hover:shadow-lg self-start lg:self-auto shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Apply via Email</span>
            </a>
          </div>

          {/* Open Positions Grid */}
          <div className="mt-8">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70 mb-4">
              Open Positions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {activeDepartment.openings.map((opening) => (
                <div
                  key={opening.title}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between gap-3 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-sun shrink-0" aria-hidden="true" />
                    <span className="font-heading font-medium text-sm text-white">
                      {opening.title}
                    </span>
                  </div>
                  {opening.category && (
                    <span className="text-[10px] font-semibold text-white/60 bg-white/10 px-2 py-0.5 rounded-full shrink-0">
                      {opening.category}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
