export interface CareerDepartment {
  id: string;
  name: string;
  location: string;
  applyEmail: string;
  description: string;
  openings: {
    title: string;
    category?: string;
  }[];
}

export const CAREERS_CONTENT = {
  eyebrow: "Our Careers",
  headline: "Join our Team",
  lead: "Be a part of the Rephil Team. Come and grow with us!",
  description:
    "We are continually looking for dedicated, energetic, and customer-oriented individuals to join our stations, head office, and autocare teams nationwide.",
  departments: [
    {
      id: "stations",
      name: "Stations Staff",
      location: "Various station sites nationwide (Luzon, Visayas & Mindanao)",
      applyEmail: "jobs@rephil.ph",
      description: "Assigned to station sites in different areas or locations near you.",
      openings: [
        { title: "Station Supervisors" },
        { title: "Cashiers" },
        { title: "Pump Attendants" },
        { title: "Cash Custodians" },
        { title: "Relievers" },
        { title: "Team Leaders" },
        { title: "Utility Crew" },
      ],
    },
    {
      id: "head-office",
      name: "Head Office Staff",
      location: "Ortigas Center, Pasig City",
      applyEmail: "mae.naldoza@rephil.com.ph",
      description: "Head office roles supporting finance, tax, technology, and brand growth.",
      openings: [
        { title: "Accounting Officer", category: "Accounting" },
        { title: "Tax Officer", category: "Accounting" },
        { title: "Accounting Assistant", category: "Accounting" },
        { title: "Credit & Collection Assistant", category: "Accounting" },
        { title: "Marketing Assistant", category: "Marketing" },
        { title: "MIS / IT Assistant", category: "MIS - IT" },
      ],
    },
    {
      id: "autocare",
      name: "Autocare Staff",
      location: "Autocare service centers near you",
      applyEmail: "jobs@rephil.ph",
      description: "Professional vehicle maintenance and customer service specialists.",
      openings: [
        { title: "Mechanic Supervisor" },
        { title: "Mechanic Assistant" },
        { title: "Cashiers" },
        { title: "Cash Custodians" },
        { title: "Relievers" },
        { title: "Team Leaders" },
        { title: "Utility Crew" },
      ],
    },
  ] as CareerDepartment[],
};
