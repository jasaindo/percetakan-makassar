import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Layanan',
      links: [
        {
          text: 'Buku Yasin',
          href: getPermalink('/layanan/percetakan-yasin'),
        },
        {
          text: 'Kartu Undangan',
          href: getPermalink('/layanan/percetakan-undangan'),
        },
        {
          text: 'Label Undangan',
          href: getPermalink('/layanan/percetakan-label'),
        },
        {
          text: 'Undangan Website',
          href: getPermalink('/layanan/undangan-website'),
        },
      ],
    },
    {
      text: 'Perusahaan',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'kategori'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('percetakan', 'tag'),
        },
      ],
    },
    {
      text: 'Whatsapp Kami',
      href: 'https://wa.me/6281381622530',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://wa.me/6281381622530"> Percetakan Makassar</a> · All rights reserved.
  `,
};
