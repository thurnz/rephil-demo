import React from "react";

interface RephilLogoProps {
  className?: string;
}

/**
 * Rephil Oval Logo component matching the brand identity.
 * Features the signature split oval (red left, navy right),
 * 8-pointed golden sun emblem on the left, and bold Rephil typography.
 */
export function RephilLogo({ className = "h-8 w-auto" }: RephilLogoProps) {
  return (
    <svg
      viewBox="0 0 170 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Rephil Station Logo"
    >
      <defs>
        <clipPath id="rephil-oval-clip">
          <ellipse cx="85" cy="40" rx="80" ry="36" />
        </clipPath>
      </defs>

      {/* Clipped Oval Body */}
      <g clipPath="url(#rephil-oval-clip)">
        {/* Left Side: Brand Red */}
        <rect x="0" y="0" width="90" height="80" fill="#FF002E" />

        {/* Right Side: Curved Brand Navy */}
        <path
          d="M75 0 C90 20, 90 60, 75 80 L170 80 L170 0 Z"
          fill="#001C54"
        />

        {/* 8-Pointed Golden Sun on the left */}
        <g transform="translate(32, 40)">
          {/* 4 cardinal points */}
          <polygon
            points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4"
            fill="#FEF03C"
          />
          {/* 4 diagonal points */}
          <polygon
            points="0,-13 3,-3 13,0 3,3 0,13 -3,3 -13,0 -3,-3"
            fill="#FEF03C"
            transform="rotate(45)"
          />
          {/* Center core */}
          <circle cx="0" cy="0" r="4.5" fill="#FEF03C" />
        </g>

        {/* Brand Name "Rephil" */}
        <text
          x="58"
          y="49"
          fill="#FFFFFF"
          fontFamily="var(--font-heading), system-ui, sans-serif"
          fontWeight="800"
          fontSize="29"
          letterSpacing="-0.5px"
        >
          Rephil
        </text>
      </g>
    </svg>
  );
}

/**
 * Standalone 8-pointed golden sun burst symbol.
 */
export function SunBurst({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="20,0 24.5,14 38.5,14 27,22.5 31.5,36.5 20,28 8.5,36.5 13,22.5 1.5,14 15.5,14"
        fill="#FEF03C"
      />
    </svg>
  );
}
