import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "./hero";
import { HERO_CONTENT } from "@/data/hero";

describe("Hero", () => {
  it("renders the headline and brand accent", () => {
    render(<Hero />);
    expect(screen.getByText("Filipino")).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.tagline)).toBeInTheDocument();
  });

  it("renders call to action buttons with correct links", () => {
    render(<Hero />);
    const primaryCta = screen.getByRole("link", { name: HERO_CONTENT.primaryCta.label });
    expect(primaryCta).toHaveAttribute("href", HERO_CONTENT.primaryCta.href);

    const secondaryCta = screen.getByRole("link", { name: HERO_CONTENT.secondaryCta.label });
    expect(secondaryCta).toHaveAttribute("href", HERO_CONTENT.secondaryCta.href);
  });

  it("renders station count badge and placeholder text", () => {
    render(<Hero />);
    expect(screen.getByText(HERO_CONTENT.stationBadge.count)).toBeInTheDocument();
    expect(screen.getByText(HERO_CONTENT.placeholderImage.label)).toBeInTheDocument();
  });
});
