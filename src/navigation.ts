import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: "Home",
      href: getPermalink('/')
    },
    {
      text: "Our Team",
      href: getPermalink('/about')
    },
    {
      text: "Contact",
      href: getPermalink('/contact')
    },
    {
      text: "AI",
      href: getPermalink('/ai')
    },
    
//     {
//       text: 'Pages',
//       links: [
//         {
//           text: 'Features (Anchor Link)',
//           href: getPermalink('/#features'),
//         },
//         {
//           text: 'Services',
//           href: getPermalink('/services'),
//         },
//         {
//           text: 'Pricing',
//           href: getPermalink('/pricing'),
//         },
//         {
//           text: 'About us',
//           href: getPermalink('/about'),
//         },
//         {
//           text: 'Contact',
//           href: getPermalink('/contact'),
//         },
//         {
//           text: 'Terms',
//           href: getPermalink('/terms'),
//         },
//         {
//           text: 'Privacy policy',
//           href: getPermalink('/privacy'),
//         },
//         {
//           text: 'SaaS',
//           href: getPermalink('/homes/sas'),
//         },
//         {
//           text: 'Startup',
//           href: getPermalink('/homes/startup'),
//         },
//         {
//           text: 'Mobile App',
//           href: getPermalink('/homes/mobile-app'),
//         },
//         {
//           text: 'Personal',
//           href: getPermalink('/homes/personal'),
//         },
//       ],
//     },
//     {
//       text: 'Blog',
//       links: [
//         {
//           text: 'Blog List',
//           href: getBlogPermalink(),
//         },
//         {
//           text: 'Article',
//           href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
//         },
//         {
//           text: 'Article (with MDX)',
//           href: getPermalink('markdown-elements-demo-post', 'post'),
//         },
//         {
//           text: 'Category Page',
//           href: getPermalink('tutorials', 'category'),
//         },
//         {
//           text: 'Tag Page',
//           href: getPermalink('astro', 'tag'),
//         },
//         {
//           text: 'Lead Generation',
//           href: getPermalink('/landing/lead-generation'),
//         },
//         {
//           text: 'Long-form Sales',
//           href: getPermalink('/landing/sales'),
//         },
//         {
//           text: 'Click-Through',
//           href: getPermalink('/landing/click-through'),
//         },
//         {
//           text: 'Product Details (or Services)',
//           href: getPermalink('/landing/product'),
//         },
//         {
//           text: 'Coming Soon or Pre-Launch',
//           href: getPermalink('/landing/pre-launch'),
//         },
//         {
//           text: 'Subscription',
//           href: getPermalink('/landing/subscription'),
//         },
//       ],
//     },
  ],
  actions: [{ text: 'Start your digital journey', href: '/contact' }],
};

export const footerData = {
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://github.com/onwidget/astrowind' },
    { ariaLabel: 'Linktree', icon: 'tabler:brand-linktree', href: 'https://github.com/onwidget/astrowind' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    © 2024 Edvance AI. All Rights Reserved.
  `,
};
