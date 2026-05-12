# Fernanda Cruz — Portfolio

Personal portfolio built with Gatsby, React, and styled-components.

## Tech stack

- **Gatsby 2** — static site generation
- **React 16** — UI components
- **styled-components** — theming and styles (light/dark mode)
- **Google Cloud Run** — deployment (nginx:alpine serving static files)

## Development

```bash
npm run start    # gatsby develop
npm run build    # production build
npm run clean    # gatsby clean
```

## Deploy

```bash
npm run build
# then deploy /public to Cloud Run
```
