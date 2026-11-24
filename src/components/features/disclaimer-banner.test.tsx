import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DisclaimerBanner } from "./disclaimer-banner";
import { HERO_CONTENT } from "@/data/hero";

describe("DisclaimerBanner", () => {
  it("renders the disclaimer banner with expected text", () => {
    render(<DisclaimerBanner />);
    expect(screen.getByText(HERO_CONTENT.disclaimer)).toBeInTheDocument();
  });
});
