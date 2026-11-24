export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  station: string;
  highlight?: string;
}

export const TESTIMONIALS_CONTENT = {
  eyebrow: "Testimonials",
  headline: "What They Think",
  subheadline:
    "Real feedback from Filipino motorists and fleet owners who rely on Rephil every day.",
  items: [
    {
      id: "annie-marikina",
      quote:
        "This is the place where you should fill your gas. Their price is far cheaper than any gasoline station that I know. I am from Pasig but we go to Marikina every month for dental checkup and we always pass this gasoline station to have gas. Cheaper than the big gasoline stations!",
      author: "Annie Rosario - Balani",
      station: "Rephil Marikina",
      highlight: "Far cheaper than any gasoline station",
    },
    {
      id: "alexander-las-pinas",
      quote:
        "I admire this Rephil gas station. The price of their gas is very competitive rather than other gas stations nearby—sometimes they are cheaper by ten pesos! That's a lot of savings on my part as a car owner since I'm always gassing up every week.",
      author: "Alexander Gregorio",
      station: "Rephil Las Piñas",
      highlight: "Savings of up to 10 pesos per liter",
    },
    {
      id: "larry-ibaan",
      quote:
        "Great service with unbeatable prices! Our favorite Rephil station.",
      author: "Larry Nelson",
      station: "Rephil Ibaan",
      highlight: "Great service with unbeatable prices",
    },
    {
      id: "noel-san-pablo",
      quote: "Good service and cheaper in price.",
      author: "Noel Lapid",
      station: "Rephil San Pablo",
      highlight: "Good service and cheaper in price",
    },
    {
      id: "christopher-san-pascual",
      quote:
        "Cheapest and most affordable oil price than the leading brands. Hoping to have card earning points soon!",
      author: "Christopher Eje Claveria",
      station: "Rephil San Pascual",
      highlight: "Most affordable fuel price",
    },
    {
      id: "o-wan-eyt-alaminos",
      quote:
        "Mura talaga magpa-refill... keep it up! Will gas up only when refilling at Rephil 👍🏼",
      author: "O Wan Eyt",
      station: "Rephil Alaminos 2",
      highlight: "Mura talaga magpa-refill",
    },
    {
      id: "john-marikina",
      quote: "One of the cheapest petrol stations in Metro Manila.",
      author: "John Ytable",
      station: "Rephil Marikina",
      highlight: "Cheapest petrol in Metro Manila",
    },
    {
      id: "stephen-las-pinas",
      quote:
        "Super honest staff here. One time I forgot to get my change; they returned it to me the next day I visited.",
      author: "Stephen Deymos",
      station: "Rephil Las Piñas",
      highlight: "Super honest and trustworthy staff",
    },
  ] as TestimonialItem[],
};
