# Stage 1: Build
# Usamos bullseye (Debian 11) que tiene Python 3.9 compatible con node-gyp viejo
FROM node:16-bullseye-slim AS builder

RUN apt-get update && apt-get install -y \
    python3 make g++ \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve con nginx
FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html

RUN printf 'server {\n\
  listen 8080;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  server_tokens off;\n\
  add_header X-Frame-Options "DENY" always;\n\
  add_header X-Content-Type-Options "nosniff" always;\n\
  add_header X-XSS-Protection "1; mode=block" always;\n\
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;\n\
  add_header Content-Security-Policy "default-src '\''self'\''; script-src '\''self'\'' '\''unsafe-inline'\'' https://www.googletagmanager.com; style-src '\''self'\'' '\''unsafe-inline'\''; img-src '\''self'\'' data: blob: https://www.googletagmanager.com https://www.google-analytics.com; font-src '\''self'\'' data:; connect-src '\''self'\'' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com; object-src '\''none'\''; frame-src https://www.googletagmanager.com; frame-ancestors '\''none'\''; base-uri '\''self'\''; form-action '\''self'\'';" always;\n\
  add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;\n\
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;\n\
  add_header X-Permitted-Cross-Domain-Policies "none" always;\n\
  location = /about {\n\
    return 301 /;\n\
  }\n\
  location = /about/ {\n\
    return 301 /;\n\
  }\n\
  location = /contact {\n\
    return 301 /;\n\
  }\n\
  location = /contact/ {\n\
    return 301 /;\n\
  }\n\
  location ~* \\.html$ {\n\
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;\n\
    add_header Pragma "no-cache" always;\n\
    add_header Expires "0" always;\n\
    try_files $uri =404;\n\
  }\n\
  location ~* \\.(js|css|png|jpg|jpeg|webp|gif|ico|svg|woff|woff2|ttf)$ {\n\
    add_header Cache-Control "public, max-age=31536000, immutable" always;\n\
    try_files $uri =404;\n\
  }\n\
  location / {\n\
    try_files $uri $uri/ /index.html;\n\
  }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
