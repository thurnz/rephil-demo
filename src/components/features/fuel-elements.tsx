import React from "react";

/**
 * Fuel nozzle with 3 droplets and flowing brand swoosh across the bottom.
 * Rendered as an accessible, responsive inline SVG matching the design mockup.
 */
export function FuelNozzleAndSwoosh() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-10 overflow-hidden w-full leading-none"
      aria-hidden="true"
    >
      <div className="relative w-full">
        {/* Flowing Ribbon Swoosh across bottom */}
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[90px] sm:min-h-[140px] lg:min-h-[175px] object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Orange to Deep Purple Swoosh Gradient */}
            <linearGradient id="orange-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E0832C" />
              <stop offset="25%" stopColor="#D95C2E" />
              <stop offset="55%" stopColor="#7B1261" />
              <stop offset="100%" stopColor="#1B0785" />
            </linearGradient>

            {/* Red to Magenta Ribbon Gradient */}
            <linearGradient id="red-ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A8123B" />
              <stop offset="30%" stopColor="#FF002E" />
              <stop offset="70%" stopColor="#E02447" />
              <stop offset="100%" stopColor="#BD1F50" />
            </linearGradient>

            {/* Navy Base Shadow Wave */}
            <linearGradient id="navy-depth-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001C54" />
              <stop offset="50%" stopColor="#091342" />
              <stop offset="100%" stopColor="#001C54" />
            </linearGradient>
          </defs>

          {/* Underlayer 1: Navy shadow base */}
          <path
            d="M0 145 C 260 120, 520 180, 800 140 C 1080 100, 1280 145, 1440 120 L 1440 200 L 0 200 Z"
            fill="url(#navy-depth-grad)"
            opacity="0.95"
          />

          {/* Midlayer 2: Flowing Orange Ribbon */}
          <path
            d="M-20 160 C 220 125, 480 165, 780 125 C 1060 85, 1280 130, 1460 100 L 1460 170 C 1260 195, 1040 155, 760 185 C 460 215, 200 175, -20 200 Z"
            fill="url(#orange-swoosh-grad)"
          />

          {/* Layer 3: Vibrant Brand Red Ribbon */}
          <path
            d="M0 175 C 280 155, 520 190, 820 155 C 1120 120, 1300 160, 1440 135 L 1440 200 L 0 200 Z"
            fill="url(#red-ribbon-grad)"
            opacity="0.9"
          />
        </svg>

        {/* Fuel Nozzle with 3 Falling Droplets at Bottom Left */}
        <div className="absolute left-2 sm:left-6 md:left-10 lg:left-16 bottom-3 sm:bottom-6 md:bottom-8 z-20">
          <svg
            viewBox="0 0 160 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-auto sm:w-28 md:w-36 lg:w-44 drop-shadow-2xl"
          >
            {/* Spout pipe */}
            <path
              d="M78 62 L122 36 C129 32, 135 34, 139 40 C141 44, 140 49, 135 53 L96 77 Z"
              fill="#64748B"
              stroke="#001C54"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Spout tip ring */}
            <ellipse
              cx="135"
              cy="43"
              rx="6"
              ry="4"
              transform="rotate(-28 135 43)"
              fill="#CBD5E1"
              stroke="#001C54"
              strokeWidth="2"
            />

            {/* Yellow Nozzle Body */}
            <path
              d="M24 92 C16 78, 20 54, 38 38 C52 24, 76 30, 86 44 C94 54, 91 72, 82 84 L68 100 C62 106, 48 108, 38 104 Z"
              fill="#FEF03C"
              stroke="#001C54"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Grip handle loop */}
            <path
              d="M30 100 C20 114, 28 130, 48 128 C60 126, 68 116, 68 100"
              fill="none"
              stroke="#001C54"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Trigger lever */}
            <path
              d="M48 80 L60 92"
              stroke="#001C54"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Inner highlight badge */}
            <circle cx="56" cy="56" r="6" fill="#FFFFFF" opacity="0.8" />

            {/* Hose connection / sleeve */}
            <path
              d="M14 105 L24 90 L36 98 L26 115 Z"
              fill="#1E293B"
              stroke="#001C54"
              strokeWidth="2"
            />

            {/* Droplet 1: High */}
            <path
              d="M138 60 C138 60, 143 68, 143 72 C143 75.5, 140.5 77.5, 138 77.5 C135.5 77.5, 133 75.5, 133 72 C133 68, 138 60, 138 60 Z"
              fill="#E0832C"
              stroke="#001C54"
              strokeWidth="1.5"
            />
            {/* Droplet 2: Mid */}
            <path
              d="M126 80 C126 80, 131 88, 131 92 C131 95.5, 128.5 97.5, 126 97.5 C123.5 97.5, 121 95.5, 121 92 C121 88, 126 80, 126 80 Z"
              fill="#E0832C"
              stroke="#001C54"
              strokeWidth="1.5"
            />
            {/* Droplet 3: Low */}
            <path
              d="M136 98 C136 98, 141 106, 141 110 C141 113.5, 138.5 115.5, 136 115.5 C133.5 115.5, 131 113.5, 131 110 C131 106, 136 98, 136 98 Z"
              fill="#E0832C"
              stroke="#001C54"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
