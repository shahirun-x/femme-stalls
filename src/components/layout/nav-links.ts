export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Vision & Mission', href: '/about#vision-mission' },
      { label: 'Our Story', href: '/about#history' },
      { label: 'Executive Committee', href: '/about#committee' },
    ],
  },
  {
    label: 'Members',
    href: '/members',
    children: [
      { label: 'Why Join?', href: '/members#why-join' },
      { label: 'Benefits', href: '/members#benefits' },
      { label: 'Register', href: '/members#register' },
      { label: 'Member Directory', href: '/members#directory' },
    ],
  },
  {
    label: 'Femme Stalls',
    href: '/femme-stalls',
    children: [
      { label: 'About Stalls', href: '/femme-stalls#about' },
      { label: 'Register a Stall', href: '/femme-stalls#register' },
      { label: 'Bye-Laws', href: '/femme-stalls#bye-laws' },
      { label: 'Event History', href: '/femme-stalls#history' },
    ],
  },
  {
    label: 'Programmes',
    href: '/programmes',
    children: [
      { label: 'Training', href: '/programmes#training' },
      { label: 'Get Organised', href: '/programmes#get-organised' },
      { label: 'Group Activities', href: '/programmes#activities' },
    ],
  },
  { label: 'Events', href: '/events' },
  {
    label: 'Opportunities',
    href: '/opportunities',
    children: [
      { label: 'FEMMEI Investors', href: '/opportunities#investors' },
      { label: 'Collaborators', href: '/opportunities#collaborators' },
      { label: 'Business', href: '/opportunities#business' },
      { label: 'Finance Info', href: '/opportunities#finance' },
    ],
  },
  { label: 'Partners', href: '/partners' },
  { label: 'Media', href: '/media' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Contact', href: '/contact' },
];
