import React from "react";
import { TESTIMONIALS_CONTENT } from "@/data/testimonials";
import { Quote, Star, MapPin } from "lucide-react";

export function TestimonialsSection() {
  const { headline, subheadline, items } = TESTIMONIALS_CONTENT;

  return (
    <section
      id="testimonials"
      aria-label="Customer Testimonials"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ink text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16 max-w-2xl">
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

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 sm:p-7 bg-white/5 border border-white/10 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-brand-sun/40 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-brand-sun" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-sun" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/20" aria-hidden="true" />
                </div>

                {/* Quote Body */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed italic font-sans font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Station Badge */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    {item.author}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-brand-sun mt-0.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{item.station}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
