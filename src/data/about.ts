export interface CoreValue {
  letter: "R" | "E" | "P" | "H" | "I" | "L";
  name: string;
  description: string;
  color: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  storyLead: string;
  storyBody: string;
  foundedYear: number;
  mission: {
    title: string;
    text: string;
  };
  vision: {
    title: string;
    text: string;
  };
  valuesEyebrow: string;
  valuesHeadline: string;
  values: CoreValue[];
}

export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "About Us",
  headline: "Proudly Filipino, since 2002",
  storyLead: "100% Filipino-owned",
  storyBody:
    "With a steadfast commitment to providing high-quality petroleum products and exceptional service at very competitive prices, Rephil has grown into a trusted name in fuel retail across Luzon, Visayas, and Mindanao.",
  foundedYear: 2002,
  mission: {
    title: "Mission",
    text: "We are committed to work efficiently and professionally by providing excellent customer service and competitive, high quality products.",
  },
  vision: {
    title: "Vision",
    text: "We aim to be one of the biggest and well-respected in the industry.",
  },
  valuesEyebrow: "Core Values",
  valuesHeadline: "Six values. One name.",
  values: [
    {
      letter: "R",
      name: "Responsiveness",
      description:
        "Quick and attentive service to meet every customer and partner need.",
      color: "#1E0C84",
    },
    {
      letter: "E",
      name: "Excellence",
      description:
        "Striving for the highest quality in fuel, service, and station operations.",
      color: "#4A0C78",
    },
    {
      letter: "P",
      name: "Professionalism",
      description:
        "Conducting every transaction with respect, reliability, and expertise.",
      color: "#8C1562",
    },
    {
      letter: "H",
      name: "Harmony",
      description:
        "Fostering teamwork, unity, and positive relationships with the community.",
      color: "#CA224F",
    },
    {
      letter: "I",
      name: "Integrity",
      description:
        "Uncompromising honesty, fair pricing, and transparent operations.",
      color: "#F02A39",
    },
    {
      letter: "L",
      name: "Live with the Brand",
      description:
        "Embodying our Filipino service spirit every single day at every station.",
      color: "#F9992F",
    },
  ],
};
