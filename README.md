# Web simulation of UbuntuOS

This is a personal portfolio website with an Ubuntu 20.04 theme, built with TanStack Start, React, and Tailwind CSS.

## Development

Install dependencies and run the local dev server:

```sh
pnpm install
pnpm dev
```

Build and preview the Cloudflare Workers output:

```sh
pnpm build
pnpm preview
```

Deploy to Cloudflare Workers:

```sh
pnpm deploy
```

The Worker configuration lives in `wrangler.jsonc`.

### Contact Form

To enable the EmailJS contact form, create a `.env` file in the project root:

```sh
VITE_EMAILJS_USER_ID='YOUR_USER_ID'
VITE_EMAILJS_TEMPLATE_ID='template_fqqqb9g'
VITE_EMAILJS_SERVICE_ID='YOUR_SERVICE_ID'
```

Replace the placeholder values with your EmailJS service values.

## Contributing

Contributions are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request
