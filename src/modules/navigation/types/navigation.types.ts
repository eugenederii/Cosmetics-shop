export type NavSubItem = {
  title: string;
  href: string;
};

export type NavItem = {
  title: string;
  href?: string;
  items: NavSubItem[];
};

export type TopBarLink = {
  title: string;
  href: string;
};

export type HeaderConfig = {
  topBarLinks: TopBarLink[];
  mainNav: NavItem[];
};
