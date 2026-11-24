export type StationStatus = "Now open" | "Opening soon";
export type StationRegion = "All" | "NCR" | "Luzon" | "Visayas";

export interface StationItem {
  id: string;
  name: string;
  city: string;
  province?: string;
  region: "NCR" | "Luzon" | "Visayas";
  status: StationStatus;
  mapUrl: string;
  image: string;
}

export const STATIONS_CONTENT = {
  eyebrow: "New Stations",
  headline: "New stations, now open",
  subheadline:
    "We are expanding rapidly to bring quality fuel and friendly service closer to drivers nationwide.",
  stations: [
    {
      id: "regalado-novaliches",
      name: "Rephil Regalado",
      city: "Novaliches, Quezon City",
      region: "NCR",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/ewRyPmFhFuRa6a7g6",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "arnaldo-gen-trias",
      name: "Rephil Arnaldo",
      city: "General Trias",
      province: "Cavite",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/V5wkdXGd82x8MV4A7",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "sta-rita-guiguinto",
      name: "Rephil Sta. Rita",
      city: "Guiguinto",
      province: "Bulacan",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/Km6JgrzSFzU8mqSC9",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "tina-an-cebu",
      name: "Rephil Tina-an",
      city: "City of Naga",
      province: "Cebu",
      region: "Visayas",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/DDEkEojMBs3vdN8T9",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "balayan-batangas",
      name: "Rephil Balayan",
      city: "Balayan",
      province: "Batangas",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/d4nVKbN37TGYLHKB9",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "meycauayan-bulacan",
      name: "Rephil Meycauayan",
      city: "Meycauayan",
      province: "Bulacan",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/34TorjEZg2vqSSfF9",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "milagrosa-calamba",
      name: "Rephil Milagrosa",
      city: "Calamba",
      province: "Laguna",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/SrJJB6JXzBvLivqR8",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "edsa-monumento-caloocan",
      name: "Rephil EDSA Monumento",
      city: "Caloocan",
      region: "NCR",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/c6fuQUkt1WqBczrF8",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "manggahan-gen-trias",
      name: "Rephil Manggahan",
      city: "General Trias",
      province: "Cavite",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/EYJtvXbg9KLenWCRA",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "sumulong-antipolo",
      name: "Rephil Sumulong",
      city: "Antipolo",
      province: "Rizal",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/rKfAdAfT3HnpJ199A",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "pandan-angeles",
      name: "Rephil Pandan",
      city: "Angeles",
      province: "Pampanga",
      region: "Luzon",
      status: "Now open",
      mapUrl: "https://maps.app.goo.gl/D9Di5L62emdxMRPp9",
      image: "/images/carousel-bg-4.png",
    },
    {
      id: "zuellig-cebu",
      name: "Rephil Zuellig",
      city: "Mandaue",
      province: "Cebu",
      region: "Visayas",
      status: "Opening soon",
      mapUrl: "https://maps.app.goo.gl/cKn765rzZNRcnAn6A",
      image: "/images/carousel-bg-4.png",
    },
  ] as StationItem[],
};
