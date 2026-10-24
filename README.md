# THARAN Sneaker Store

A responsive React + Vite sneaker landing page with an automatically rotating hero sneaker, product cards, company story, contact section, and footer. Components and styles are split into separate files.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open a terminal in the folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  App.jsx
  main.jsx
  components/
    Navbar.jsx / Navbar.css
    Hero.jsx / Hero.css
    Products.jsx / Products.css
    OurCompany.jsx / OurCompany.css
    Contact.jsx / Contact.css
    Footer.jsx / Footer.css
  styles/
    global.css
    app.css
```

The hero changes sneaker automatically every 4.5 seconds; use the dots or arrow to change it manually. Product bag buttons update the cart count in the navbar. Product photos and Google Fonts are loaded from external URLs, so an internet connection is needed for those assets.

**Demo note:** contact email and product prices are placeholders and should be updated before a real launch. This is a front-end demo; checkout and payment are not connected.
