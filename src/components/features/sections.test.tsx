import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AboutSection } from "./about-section";
import { ValuesSection } from "./values-section";
import { StationsSection } from "./stations-section";
import { CareersSection } from "./careers-section";
import { TestimonialsSection } from "./testimonials-section";
import { ContactSection } from "./contact-section";
import { Footer } from "./footer";

describe("Landing Page Sections", () => {
  it("renders the About section with mission and vision", () => {
    render(<AboutSection />);
    expect(screen.getByText(/Proudly Filipino/i)).toBeInTheDocument();
    expect(screen.getByText(/Mission/i)).toBeInTheDocument();
    expect(screen.getByText(/Vision/i)).toBeInTheDocument();
  });

  it("renders the Values section with R-E-P-H-I-L items", () => {
    render(<ValuesSection />);
    expect(screen.getByText(/Six values\. One name\./i)).toBeInTheDocument();
    expect(screen.getByText("Responsiveness")).toBeInTheDocument();
    expect(screen.getByText("Live with the Brand")).toBeInTheDocument();
  });

  it("renders the Stations section with station cards and filter tabs", () => {
    render(<StationsSection />);
    expect(screen.getByText(/New stations, now open/i)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "All" })).toBeInTheDocument();
    expect(screen.getByText("Rephil Regalado")).toBeInTheDocument();
  });

  it("renders the Careers section with department tabs", () => {
    render(<CareersSection />);
    expect(screen.getByText(/Join our Team/i)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Stations Staff/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Head Office Staff/i })).toBeInTheDocument();
  });

  it("renders Testimonials section with customer quotes", () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(/What They Think/i)).toBeInTheDocument();
    expect(screen.getByText(/Annie Rosario - Balani/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Rephil Marikina/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders Contact section with contact info and form", () => {
    render(<ContactSection />);
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
    expect(screen.getByText("(02) 8687-3512")).toBeInTheDocument();
    expect(screen.getByText("customercare@rephil.ph")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  });

  it("renders Footer with copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright © 2024 Rephil Station Inc\./i)).toBeInTheDocument();
  });
});
