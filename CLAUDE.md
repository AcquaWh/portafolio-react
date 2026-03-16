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
| Contacto CTA | `src/sections/landing1/Contact.js` |

El modal "About me" está en `src/sections/others/About.js`, invocado desde `src/components/AboutModal`.

## Perfil: Fernanda Cruz

- **Cargo actual**: Ingeniera de Software & Líder de Equipo en Didcom (desde sept 2025)
- **Roles anteriores en Didcom**: Front-End Leader (jun 2023–ene 2026), Software Developer Front-End (mar 2021–jun 2023)
- **Otros**: HostedRed Founder (ene 2017–sept 2021), ALPAE (abr 2020–mar 2021), Mawe Tecnologías (jun 2019–may 2020)
- **Email**: info@fernandacruz.com
- **GitHub**: https://github.com/AcquaWh
- **LinkedIn**: https://www.linkedin.com/in/acquawh/
- **Años de experiencia**: 9+ (desde 2017)

## Stack tecnológico (Skills.js)

Categorías actuales:
1. `.NET & Backend` — C#, .NET 8, .NET 9, .NET Core, .NET Framework, REST APIs, Web Services, PHP, Laravel, Node.js
2. `Frontend` — React, Vue.js, Angular, Blazor, Razor, TypeScript
3. `Móvil` — React Native, .NET MAUI, MAUI Blazor, iOS, Android
4. `Cloud & DevOps` — Azure DevOps, Pipelines CI/CD, Docker, Kubernetes, Cloud Run, Cloud Tasks, VM, Google Cloud
5. `Inteligencia Artificial` — Claude API, Gemini API, Integración de IA
6. `Datos & Reportes` — BigQuery, Power BI, Looker Studio
7. `Gestión & Colaboración` — Jira, Kanban, Scrum, Code Review, Pull Requests, Git

## Stats (Stats.js)

| Stat | Valor |
|------|-------|
| Años de experiencia | 9+ |
| Proyectos entregados | 10+ |
| Plataformas cloud | 3 |
| Tecnologías dominadas | 8+ |

## Animaciones (AOS)

AOS está inicializado en `src/components/Layout/Layout.js` con `AOS.init()`.
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

Archivos que lo usan: `src/pages/wingman.js`, `kite.js`, `eventos-cov.js`, `erus.js`, `erus-certificaciones.js`, `nasa-spaceapps.js`, `src/sections/others/About.js`, `src/sections/common/Contact.js`.

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
