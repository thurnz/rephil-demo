import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const headingFont = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rephil Station | Fuel for the Filipino",
  description:
    "100% Filipino-owned fuel retailer with 100+ stations across Luzon, Visayas and Mindanao. Subok, Sulit, Sigurado.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${sansFont.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-screen bg-ink text-white antialiased font-sans flex flex-col overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}
