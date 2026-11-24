import React from "react";
import Link from "next/link";
import { RephilLogo } from "./rephil-logo";
import { NAV_ITEMS } from "@/data/navigation";
import { CONTACT_CONTENT } from "@/data/contact";

export function Footer() {
  const { copyright } = CONTACT_CONTENT;

  return (
    <footer className="w-full bg-navy-900 text-white/80 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Logo & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link href="/" aria-label="Rephil Station Home">
            <RephilLogo className="h-8 w-auto" />
          </Link>
          <span className="text-xs text-white/60 font-sans border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-4">
            Subok, Sulit, Sigurado. Happy to Serve You!
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/70 hover:text-brand-sun transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50 font-sans">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
