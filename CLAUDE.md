# Portafolio Fernanda Cruz — Guía para Claude

## Stack y arquitectura

- **Framework**: Gatsby 2 (React 16, generación estática)
- **Estilos**: styled-components con ThemeProvider (modo light/dark)
- **Deploy**: Google Cloud Run — nginx:alpine sirviendo los archivos estáticos de `/app/public`
- **Build**: `npm run build` → `gatsby clean && gatsby build --prefix-paths`
- **Node**: 16.x (usa `node:16-bullseye-slim` en Docker, python3/make/g++ para node-gyp)

## Despliegue

```bash
# Build y deploy a Cloud Run
gcloud builds submit --tag gcr.io/[PROJECT_ID]/fernandacruz-portfolio
gcloud run deploy fernandacruz-portfolio --image gcr.io/[PROJECT_ID]/fernandacruz-portfolio --platform managed
```

El `Dockerfile` tiene dos etapas: `builder` (Node 16) y `nginx:alpine` para servir.

## Estructura de la página principal

`src/pages/index.js` importa estas secciones en orden:

| Sección | Archivo |
|---------|---------|
| Hero (foto + título) | `src/sections/landing1/Hero.js` |
| Stats (números) | `src/sections/landing1/Stats.js` |
| Stack tecnológico | `src/sections/landing1/Skills.js` |
| Proyectos | `src/sections/landing1/Works.js` |
| Capabilities (6 cards) | `src/sections/landing1/Capabilities.js` |
| Contacto CTA | `src/sections/landing1/Contact.js` |

El modal "About me" está en `src/sections/others/About.js`, invocado desde `src/components/AboutModal`.

## Páginas del sitio

| Ruta | Archivo |
|------|---------|
| `/` | `src/pages/index.js` |
| `/curriculum` | `src/pages/curriculum.js` — CV interactivo con print support |
| `/erus` | `src/pages/erus.js` |
| `/erus-certificaciones` | `src/pages/erus-certificaciones.js` |
| `/kite` | `src/pages/kite.js` |
| `/wingman` | `src/pages/wingman.js` |
| `/alumni` | `src/pages/alumni.js` |
| `/eventos-cov` | `src/pages/eventos-cov.js` |
| `/caffenio` | `src/pages/caffenio.js` |
| `/nasa-spaceapps` | `src/pages/nasa-spaceapps.js` |
| `/novutek-ui` | `src/pages/novutek-ui.js` |
| `/404` | `src/pages/404.js` — página 404 personalizada |

`/about` y `/contact` son páginas Gatsby existentes pero redirigen 301 → `/` via nginx.

## Página Curriculum (`/curriculum`)

- Título: "Frontend Engineer & Engineering Lead" (inglés, para aplicaciones internacionales)
- CV interactivo con timeline de experiencia laboral
- Columna izquierda: timeline de experiencia; columna derecha: stack, educación, reconocimientos, idiomas
- Botón "Descargar CV" que dispara `window.print()`
- `PrintStyles` con `createGlobalStyle` para layout A4 imprimible
- `HideFooter` con `createGlobalStyle` para ocultar el footer en esta página
- Animación `fadeIn` al cargar la página

## Proyectos (devWorks1)

Definidos en `src/data/devWorks1.js`, mostrados con Masonry en `Works.js`:

| Proyecto | Slug | Categoría | Ruta |
|----------|------|-----------|------|
| Erus | erus-web | web | /erus |
| Kite | kite-web | web | /kite |
| Erus Certificaciones | erus-certificaciones-web | web | /erus-certificaciones |
| Wingman | wingman-web | web | /wingman |
| Alumni | alumni-web | web | /alumni |
| Eventos COV | eventos-web | web | /eventos-cov |
| Caffenio | caffenio-web | web | /caffenio |
| Nasa SpaceApps | nasa-vr | vr | /nasa-spaceapps |
| Novutek UI | novutek-ui | ui | /novutek-ui |

Filtros en Works.js: `*` (Todos), `web` (Desarrollo web), `vr` (Realidad Virtual).

## Perfil: Fernanda Cruz

- **Cargo actual**: Software Team Lead en Didcom (desde sept 2025)
- **Roles anteriores en Didcom**: Frontend Engineering Lead (jun 2023–sept 2025), Frontend Engineer (mar 2021–jun 2023)
- **Ludens / Media Aérea**: Frontend Engineering Lead (feb 2022–abr 2022 · Contrato/Part-time)
- **ALPAE**: Frontend Engineer (abr 2020–mar 2021)
- **Mawe Tecnologías**: Software Engineer (jun 2019–may 2020)
- **Novutek**: Frontend Engineer (ene 2019–sept 2019)
- **HostedRed**: Software Engineer / Owner (ene 2017–sept 2021 · Part-time)
- **Email**: info@fernandacruz.com
- **Phone**: +52 644 145 0190
- **Location**: Hermosillo, Sonora. México
- **GitHub**: https://github.com/AcquaWh
- **LinkedIn**: https://www.linkedin.com/in/acquawh/
- **Años de experiencia**: 9+ (desde 2017)

## Educación y reconocimientos

- **ULSA** — Lic. Ingeniería en Producción Multimedia (ago 2015–jun 2020)
- **ITSON** — Diplomado en Desarrollo de Videojuegos con Unity/C# (nov 2019–ene 2020)
- NASA Space Apps Challenge 2019 — Ganadora local, nominada global (VR con Unity/C#)
- Arizona Women Hackathon 2019 — Ganadora (app iOS Swift para usuarios con discapacidad auditiva)
- Crecimiento rápido: de IC a Software Org Lead en Didcom en menos de 5 años

## Stack tecnológico (Skills.js)

Categorías actuales:
1. `.NET & Backend` — C#, .NET 8, .NET 9, .NET Core, .NET Framework, REST APIs, Web Services, PHP, Laravel, Node.js
2. `Frontend` — React, Vue.js, Angular, Blazor, Razor, TypeScript
3. `Móvil` — React Native, .NET MAUI, MAUI Blazor, iOS, Android
4. `Cloud & DevOps` — Azure DevOps, Pipelines CI/CD, Docker, Kubernetes, Cloud Run, Cloud Tasks, VM, Google Cloud
5. `Inteligencia Artificial` — Claude API, Gemini API, Integración de IA
6. `Datos & Reportes` — BigQuery, Power BI, Looker Studio
7. `Gestión & Colaboración` — Jira, Kanban, Scrum, Code Review, Pull Requests, Git

Stack adicional visible en `/curriculum` (sidebar):
- **Bases de Datos**: Firebase, Firestore, SQL Server, MySQL, BigQuery
- **Diseño**: Figma, Photoshop, Adobe Illustrator, Looker Studio
- **Frontend extra**: HTML/SCSS, Bootstrap, Vuetify

## Stats (Stats.js)

| Stat | Valor |
|------|-------|
| Años de experiencia | 9+ |
| Proyectos entregados | 10+ |
| Plataformas cloud | 3 |
| Tecnologías dominadas | 8+ |

## SEO y meta tags (Layout.js)

Layout.js incluye en `<Helmet>`:
- `<title>`: Fernanda Cruz · Ingeniera de Software & Líder de Equipo
- `<meta name="description">` y `<meta name="author">`
- Open Graph: `og:type`, `og:url`, `og:title`, `og:description`, `og:image` (1200×630), `og:locale` (es_MX)
- Twitter Card: `summary_large_image`
- LinkedIn: `profile:first_name`, `profile:last_name`
- `<link rel="canonical" href="https://fernandacruz.com">`
- OG image: `https://fernandacruz.com/og-image.jpg`

## Animaciones (AOS)

AOS está inicializado en `src/components/Layout/Layout.js` con `useLayoutEffect(() => { AOS.init(); }, [])` (fix SSR hydration mismatch).
Los atributos `data-aos="fade-up"` y `data-aos-delay` están en Stats, Skills, Works y Contact.
El CSS de AOS se importa en Layout: `node_modules/aos/dist/aos.css`.

## Seguridad (Dockerfile — nginx)

Headers configurados:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy`: CSP completo, sin fuentes externas
- `Permissions-Policy`: camera, microphone, geolocation, payment desactivados
- `Strict-Transport-Security`: max-age=31536000 + includeSubDomains
- `X-Permitted-Cross-Domain-Policies: none`
- `server_tokens off`

Páginas bloqueadas (redirect 301 → `/`):
- `/about` y `/about/`
- `/contact` y `/contact/`

Cache:
- HTML: `no-cache, no-store, must-revalidate`
- Assets (js/css/img/fonts): `public, max-age=31536000, immutable`

## Tabnapping — todos los links externos usan

```jsx
rel="noopener noreferrer"
```

Archivos que lo usan: `src/pages/wingman.js`, `kite.js`, `eventos-cov.js`, `erus.js`, `erus-certificaciones.js`, `nasa-spaceapps.js`, `alumni.js`, `caffenio.js`, `novutek-ui.js`, `src/sections/others/About.js`, `src/sections/common/Contact.js`.

## About modal — texto siempre blanco

El modal tiene fondo morado siempre (light y dark). El componente `LightTextWrapper` en `About.js` fuerza `color: white !important` en todos los elementos de texto para garantizar legibilidad.

## Tema (light/dark)

- ThemeProvider en Layout con `getTheme(mode)` que mezcla `baseTheme` con `baseTheme.colors.modes[mode]`
- El switch de tema está en `src/components/ThemeSwitch`
- Contexto global en `src/context/GlobalContext`

## Comandos frecuentes

```bash
npm run start        # desarrollo local (gatsby develop)
npm run build        # build de producción
npm run clean        # gatsby clean
```
