import { NavItem } from "@/types";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#", isActive: true },
  { label: "About Us", href: "#about" },
  { label: "New Stations", href: "#stations" },
  { label: "Careers", href: "#careers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
] as const;
