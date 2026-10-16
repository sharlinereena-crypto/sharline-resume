# Sharline Reena DSouza — Resume Site

A premium, single-page résumé website with **dark / light theme** support.

[![Live site](https://img.shields.io/badge/view-live%20site-4f46e5)](#deploy-with-github-pages)

## Features

- 🌗 **Dark & light themes** — toggle in the top-right corner; remembers your choice and respects your OS preference
- 📱 **Fully responsive** — looks great on mobile, tablet, and desktop
- ✨ **Premium design** — gradient hero, animated scroll reveals, card-based layout
- ⚡ **Zero dependencies** — plain HTML/CSS/JS, no build step
- ♿ **Accessible** — semantic markup, reduced-motion support, keyboard-friendly

## Project structure

```
resume-site/
├── index.html   # Content & structure
├── styles.css   # Theme tokens + layout
└── script.js    # Theme toggle + scroll animations
```

## Run locally

```bash
# any static server works, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy with GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. Your site goes live at `https://<username>.github.io/<repo>/`.

## License

Personal résumé content © Sharline Reena DSouza. Code is free to reuse.
