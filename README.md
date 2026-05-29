# Amalathas Dilshan — Portfolio

Modern React portfolio built with Vite, Tailwind CSS, and Framer Motion.

## Run locally

From this folder (`my portpolio`), run:

```powershell
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173/).

## Important — avoid this error

**Do not run** `npm create vite@latest` inside this project. That command scaffolds a *new* project and caused the `create-vite` / error code `3221225786` failure when interrupted.

This portfolio is already set up. Use only:

- `npm install` — install dependencies
- `npm run dev` — start development server
- `npm run build` — production build

## Add your profile photo

1. Save your photo as **`public/profile.jpg`** (recommended), or `public/profile.png`.
2. Use a square or portrait image (at least **400×400 px**) for best results.
3. Refresh the browser (`Ctrl + Shift + R`).

Optional: use a different filename by editing `profileImage` in `src/data/constants.js`:

```js
profileImage: '/my-photo.png',
```

## Customize

| Item | Location |
|------|----------|
| Profile photo | Copy your image to `public/profile.jpg` (or `.png`) — see below |
| Resume PDF | `public/resume.pdf` |
| GitHub / LinkedIn | `src/data/constants.js` |
| Contact form (EmailJS) | Copy `.env.example` to `.env` and add keys |

## Deploy

```powershell
npm run build
```

Deploy the `dist` folder to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
