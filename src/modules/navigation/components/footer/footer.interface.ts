export type FooterLink = {
  title: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export type FooterConfig = {
  sections: FooterSection[];
  social: SocialLink[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};
