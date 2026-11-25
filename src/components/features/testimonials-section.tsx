"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS_CONTENT } from "@/data/testimonials";
import { Quote, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselState = {
  pages: number;
  page: number;
  canPrev: boolean;
  canNext: boolean;
};

const INITIAL_STATE: CarouselState = {
  pages: 1,
  page: 0,
  canPrev: false,
  canNext: false,
};

export function TestimonialsSection(): React.JSX.Element {
  const { headline, subheadline, items } = TESTIMONIALS_CONTENT;
  const trackRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CarouselState>(INITIAL_STATE);

  /** Derive paging state from the track's scroll position and size. */
  const measure = useCallback((): void => {
    const el = trackRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.clientWidth === 0 || maxScroll <= 1) {
      setState(INITIAL_STATE);
      return;
    }

    const pages = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    const page = Math.round((el.scrollLeft / maxScroll) * (pages - 1));
    const next: CarouselState = {
      pages,
      page,
      canPrev: el.scrollLeft > 1,
      canNext: el.scrollLeft < maxScroll - 1,
    };

    setState((prev) =>
      prev.pages === next.pages &&
      prev.page === next.page &&
      prev.canPrev === next.canPrev &&
      prev.canNext === next.canNext
        ? prev
        : next,
    );
  }, []);

  // Re-measure on mount and whenever the track resizes (breakpoint changes).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  const scrollByPage = (direction: 1 | -1): void => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth });
  };

  const scrollToPage = (page: number): void => {
    const el = trackRef.current;
    if (!el || state.pages <= 1) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (page / (state.pages - 1)) * maxScroll });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByPage(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByPage(-1);
    }
  };

  const arrowClass =
    "inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-blue text-white border border-white/20 shadow-lg transition-all duration-200 hover:bg-brand-blue/80 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun disabled:opacity-40 disabled:pointer-events-none";

  return (
    <section
      id="testimonials"
      aria-label="Customer Testimonials"
      onKeyDown={handleKeyDown}
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ink text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header + Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div className="text-left max-w-2xl">
            <span className="text-brand-sun font-bold text-xs uppercase tracking-widest font-heading">
              Subok, Sulit, Sigurado
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1.5">
              {headline}
            </h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base font-sans">
              {subheadline}
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!state.canPrev}
              aria-label="Previous testimonials"
              className={arrowClass}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!state.canNext}
              aria-label="Next testimonials"
              className={arrowClass}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Carousel Track (native scroll-snap: swipe on touch, arrows/keys on desktop) */}
        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
          tabIndex={0}
          onScroll={measure}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto py-2 -my-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sun/60 rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              className="snap-start shrink-0 grow-0 basis-full md:basis-[calc((100%_-_1.5rem)/2)] lg:basis-[calc((100%_-_3rem)/3)] flex"
            >
              <div className="w-full rounded-2xl p-6 sm:p-7 bg-white/5 border border-white/10 shadow-xl flex flex-col justify-between transition-colors duration-300 hover:border-brand-sun/40 hover:bg-white/[0.07]">
                <div>
                  {/* 5-Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex gap-1 text-brand-sun"
                      aria-label="5 out of 5 stars"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-brand-sun"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <Quote
                      className="w-6 h-6 text-white/20"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Quote Body */}
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed italic font-sans font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Station Badge */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <h4 className="font-heading font-bold text-sm text-white">
                    {item.author}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-brand-sun mt-0.5">
                    <MapPin
                      className="w-3.5 h-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item.station}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {state.pages > 1 && (
          <div
            className="mt-8 flex items-center justify-center"
            role="group"
            aria-label="Choose testimonials page"
          >
            {Array.from({ length: state.pages }, (_, i) => (
              <button
                key={`page-${i}`}
                type="button"
                onClick={() => scrollToPage(i)}
                aria-label={`Go to page ${i + 1} of ${state.pages}`}
                aria-current={i === state.page ? "true" : undefined}
                className="p-2 group focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-brand-sun",
                    i === state.page
                      ? "w-6 bg-brand-sun"
                      : "w-2 bg-white/30 group-hover:bg-white/50",
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
