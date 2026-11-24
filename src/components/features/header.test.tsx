import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "./header";
import { NAV_ITEMS } from "@/data/navigation";

describe("Header", () => {
  it("renders navigation items", () => {
    render(<Header />);
    NAV_ITEMS.forEach((item) => {
      expect(screen.getAllByText(item.label).length).toBeGreaterThan(0);
    });
  });

  it("renders the Rephil logo link", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /rephil station home/i })).toBeInTheDocument();
  });

  it("toggles the mobile menu on click", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /open navigation menu/i });
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.getByRole("dialog", { name: /mobile navigation/i })).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close navigation menu/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole("dialog", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });
});
