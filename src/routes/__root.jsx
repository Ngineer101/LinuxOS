/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import '../../styles/index.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Vivek Patel Portfolio - Computer Engineering Student' },
      { name: 'title', content: 'Vivek Patel Portfolio - Computer Engineering Student' },
      {
        name: 'description',
        content:
          "Vivek Patel's (vivek9patel) Personal Portfolio Website. Made with Ubuntu 20.04 theme, TanStack Start, and Tailwind CSS.",
      },
      { name: 'author', content: 'Vivek Patel (vivek9patel)' },
      {
        name: 'keywords',
        content:
          "vivek9patel, vivek9patel's portfolio, vivek9patel linux, ubuntu portfolio, vivek patel protfolio,vivek patel computer, vivek patel, vivek ubuntu, vivek patel ubuntu portfolio",
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'theme-color', content: '#E95420' },
      { name: 'image', content: 'images/logos/fevicon.png' },
      { itemProp: 'name', content: 'Vivek Patel Portfolio - Computer Engineering Student' },
      {
        itemProp: 'description',
        content:
          "Vivek Patel's (vivek9patel) Personal Portfolio Website. Made with Ubuntu 20.04 theme, TanStack Start, and Tailwind CSS.",
      },
      { itemProp: 'image', content: 'images/logos/fevicon.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Vivek Patel Portfolio - Computer Engineering Student' },
      {
        name: 'twitter:description',
        content:
          "Vivek Patel's (vivek9patel) Personal Portfolio Website. Made with Ubuntu 20.04 theme, TanStack Start, and Tailwind CSS.",
      },
      { name: 'twitter:site', content: 'vivek9patel' },
      { name: 'twitter:creator', content: 'vivek9patel' },
      { name: 'twitter:image:src', content: 'images/logos/logo_1024.png' },
      { name: 'og:title', content: 'Vivek Patel Portfolio - Computer Engineering Student' },
      {
        name: 'og:description',
        content:
          "Vivek Patel's (vivek9patel) Personal Portfolio Website. Made with Ubuntu 20.04 theme, TanStack Start, and Tailwind CSS.",
      },
      { name: 'og:image', content: 'images/logos/logo_1200.png' },
      { name: 'og:url', content: 'http://vivek9patel.github.io/' },
      { name: 'og:site_name', content: 'Vivek Patel Personal Portfolio' },
      { name: 'og:locale', content: 'en_IN' },
      { name: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'icon', href: 'images/logos/fevicon.svg' },
      { rel: 'apple-touch-icon', href: 'images/logos/logo.png' },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
        as: 'style',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
