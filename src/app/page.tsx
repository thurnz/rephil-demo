import { DisclaimerBanner } from "@/components/features/disclaimer-banner";
import { Header } from "@/components/features/header";
import { Hero } from "@/components/features/hero";
import { AboutSection } from "@/components/features/about-section";
import { ValuesSection } from "@/components/features/values-section";
import { StationsSection } from "@/components/features/stations-section";
import { CareersSection } from "@/components/features/careers-section";
import { TestimonialsSection } from "@/components/features/testimonials-section";
import { ContactSection } from "@/components/features/contact-section";
import { Footer } from "@/components/features/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Top Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Hero Section Container (Background flows from directly under the banner) */}
      <div className="relative w-full bg-hero-gradient">
        {/* Floating Header Pill */}
        <Header />

        {/* Hero Section Content */}
        <Hero />
      </div>

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1 w-full">
        {/* About Us (Company Story, Mission & Vision) */}
        <AboutSection />

        {/* R-E-P-H-I-L Core Values */}
        <ValuesSection />

        {/* Stations (New & Upcoming Stations with Region Filter) */}
        <StationsSection />

        {/* Careers (Stations, Head Office & Autocare roles) */}
        <CareersSection />

        {/* Testimonials (Customer and Motorist Feedback) */}
        <TestimonialsSection />

        {/* Contact Us (Office Map, Direct Contacts & Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
