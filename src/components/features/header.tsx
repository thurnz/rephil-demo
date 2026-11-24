"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { RephilLogo } from "./rephil-logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Close mobile menu on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-2 sm:top-3 z-40 w-full px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto w-full">
        <nav
          aria-label="Main Navigation"
          className={cn(
            "w-full rounded-full px-3.5 sm:px-7 py-2 sm:py-3",
            "flex items-center justify-between",
            "shadow-xl shadow-black/25 backdrop-blur-md",
            "border border-white/20",
            "bg-gradient-to-r from-brand-indigo via-[#7B1261] to-[#E02447] bg-no-repeat",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun rounded-full shrink-0"
            aria-label="Rephil Station Home"
          >
            <RephilLogo className="h-6 sm:h-8 w-auto drop-shadow-sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun rounded-sm",
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/85 hover:text-white",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-sun rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-white hover:text-brand-sun hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun shrink-0"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[60px] z-50 bg-ink/95 backdrop-blur-xl md:hidden px-6 py-8 flex flex-col justify-start animate-hero-fade"
        >
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-lg py-2.5 px-3 rounded-lg font-medium transition-all flex items-center justify-between",
                    isActive
                      ? "bg-white/10 text-brand-sun font-bold border-l-4 border-brand-sun"
                      : "text-white/90 hover:bg-white/5 hover:text-white",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="w-2 h-2 rounded-full bg-brand-sun"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
