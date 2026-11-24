export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface CtaButton {
  label: string;
  href: string;
}

export interface HeroContent {
  disclaimer: string;
  headlineLead: string;
  headlineAccent: string;
  tagline: string;
  description: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
  stationBadge: {
    count: string;
    label: string;
  };
  placeholderImage: {
    src: string;
    alt: string;
    label: string;
    sublabel: string;
  };
}
