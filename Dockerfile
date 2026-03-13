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
  location / {\n\
    try_files $uri $uri/ /index.html;\n\
  }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
