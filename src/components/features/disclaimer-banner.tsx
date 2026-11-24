import { HERO_CONTENT } from "@/data/hero";

export function DisclaimerBanner() {
  return (
    <aside
      aria-label="Disclaimer"
      className="w-full bg-brand-sun text-brand-navy py-1.5 px-4 text-xs sm:text-sm font-semibold tracking-wide text-center select-none z-50 relative"
    >
      <p className="max-w-4xl mx-auto leading-normal">
        {HERO_CONTENT.disclaimer}
      </p>
    </aside>
  );
}
